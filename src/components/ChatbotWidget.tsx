import { useState, useEffect, useRef, JSX } from 'react';
import { X, Send, Sparkles, Loader, Search } from 'lucide-react';
import { COUNTRIES } from '@/lib/countries';
import { submitChatbotInquiry } from '@/routes/api/chatbot-inquiry';

type Step = 'greeting' | 'name' | 'email' | 'countryCode' | 'mobile' | 'course' | 'submitted';

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  course: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatbotWidget(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>('greeting');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', countryCode: '', mobile: '', course: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<typeof COUNTRIES[0] | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Do not initialize greeting - let user type first
  // Messages array will remain empty until user sends first message

  const addMessage = (text: string, sender: 'user' | 'bot'): void => {
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCountrySelect = (country: typeof COUNTRIES[0]): void => {
    setSelectedCountry(country);
    setFormData((prev) => ({ ...prev, countryCode: country.dial }));
    setShowCountryPicker(false);
    addMessage(`Selected: ${country.flag} ${country.name} (${country.dial})`, 'user');
    addMessage(`Great! Now enter your phone number.`, 'bot');
    setCurrentStep('mobile');
  };

  const handleSendMessage = (): void => {
    if (!input.trim()) return;

    addMessage(input, 'user');
    const userInput = input.trim();
    setInput('');

    setTimeout(() => {
      handleStepFlow(userInput);
    }, 500);
  };

  const handleStepFlow = (userInput: string): void => {
    switch (currentStep) {
      case 'greeting': {
        // Greet back with user's greeting, then ask for name
        const userGreeting = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
        addMessage(`${userGreeting}! 👋 Welcome to DMHCA. Thanks for reaching out. I'm here to help you find the perfect medical course. What's your full name?`, 'bot');
        setCurrentStep('name');
        break;
      }

      case 'name': {
        if (userInput.length < 2) {
          addMessage('Please enter a valid name (at least 2 characters)', 'bot');
          return;
        }
        setFormData((prev) => ({ ...prev, name: userInput }));
        setCurrentStep('email');
        addMessage(`Nice to meet you, ${userInput}! 🎉 What's your email address?`, 'bot');
        break;
      }

      case 'email': {
        if (!isValidEmail(userInput)) {
          addMessage('Please enter a valid email address', 'bot');
          return;
        }
        setFormData((prev) => ({ ...prev, email: userInput }));
        setCurrentStep('countryCode');
        setShowCountryPicker(true);
        addMessage('Perfect! Let\'s get your country and phone number. Search for your country:', 'bot');
        break;
      }

      case 'mobile': {
        const digitsOnly = userInput.replace(/\D/g, '');
        setFormData((prev) => ({ ...prev, mobile: digitsOnly }));
        setCurrentStep('course');
        addMessage('Thanks! Which course are you interested in?', 'bot');
        break;
      }

      case 'course': {
        chooseCourse(userInput, false);  // Message already added by handleSendMessage
        break;
      }

      default:
        break;
    }
  };

  const chooseCourse = (course: string, addUserMessage: boolean = true): void => {
    if (addUserMessage) {
      addMessage(course, 'user');
    }
    
    const finalData = {
      name: formData.name,
      email: formData.email,
      mobile: `${formData.countryCode} ${formData.mobile}`.trim(),
      course,
      timestamp: new Date().toISOString(),
    };

    setFormData((prev) => ({ ...prev, course }));
    setCurrentStep('submitted');
    setIsLoading(true);

    submitChatbotInquiry({ data: finalData })
      .then((result: any) => {
        console.log('[Chatbot] Submission result:', result);
        if (!result.success) {
          console.error('[Chatbot] Submission failed:', result.message);
        }
        addMessage('Thank you for contacting us. Our support team will get back to you shortly.', 'bot');
      })
      .catch((err) => {
        console.error('[Chatbot] Submission error:', err);
        addMessage('Thank you for contacting us. Our support team will get back to you shortly.', 'bot');
      })
      .finally(() => setIsLoading(false));
  };

  const handleReset = (): void => {
    setCurrentStep('greeting');
    setFormData({ name: '', email: '', countryCode: '', mobile: '', course: '' });
    setInput('');
    setShowCountryPicker(false);
    setSelectedCountry(null);
    setCountrySearch('');
    
    // Clear messages - start fresh, user types first
    setMessages([]);
  };

  const getInputPlaceholder = (): string => {
    switch (currentStep) {
      case 'greeting':
        return 'Type hello or hi to get started...';
      case 'name':
        return 'Enter your full name...';
      case 'email':
        return 'Enter your email address...';
      case 'mobile':
        return 'Enter your phone number...';
      case 'course':
        return 'Select or type a course...';
      default:
        return 'Type your answer...';
    }
  };

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 transition-all duration-300 ease-out ${
        isOpen ? 'w-[calc(100vw-2rem)] sm:w-96 h-[70vh] sm:h-[32rem] max-w-96' : 'w-14 sm:w-16 h-14 sm:h-16'
      }`}
    >
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-deep to-slate-800 dark:from-cyan-600 dark:via-cyan-500 dark:to-teal-500 text-white px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
              <div className="min-w-0">
                <h3 className="font-bold text-sm sm:text-base truncate">DMHCA Assistant</h3>
                <p className="text-xs opacity-90 truncate">Online & Ready</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition hover:rotate-90 duration-200"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 space-y-2 sm:space-y-3 scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div
                  className={`max-w-[70%] sm:max-w-xs px-3 sm:px-4 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed font-medium transition-all ${
                    msg.sender === 'user'
                      ? 'bg-navy-deep dark:bg-gradient-to-br dark:from-cyan-500 dark:to-teal-500 text-white rounded-br-none shadow-md'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100 rounded-bl-none border border-gray-200 dark:border-slate-600'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-in fade-in">
                <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl rounded-bl-none px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border border-gray-200 dark:border-slate-600">
                  <Loader className="w-3 sm:w-4 h-3 sm:h-4 animate-spin text-navy-deep dark:text-white" />
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Processing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {currentStep !== 'submitted' ? (
            <>
              {currentStep === 'countryCode' && showCountryPicker ? (
                <div
                  className="border-t border-gray-200 dark:border-slate-700 p-2 sm:p-3 bg-white dark:bg-slate-900 max-h-60 sm:max-h-80 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="relative">
                    {/* Search Box */}
                    <div className="flex items-center gap-2 mb-2 px-3 py-2 sm:py-3 border-2 border-cyan-300 dark:border-cyan-500 rounded-xl bg-white dark:bg-slate-800 sticky top-0">
                      <Search className="w-3 sm:w-4 h-3 sm:h-4 text-cyan-500 dark:text-white flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value.toLowerCase())}
                        className="flex-1 bg-transparent text-xs sm:text-sm dark:text-white focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                        autoFocus
                      />
                    </div>

                    {/* Country List */}
                    <div className="space-y-1">
                      {COUNTRIES.filter(
                        (c) =>
                          c.name.toLowerCase().includes(countrySearch) ||
                          c.dial.includes(countrySearch) ||
                          c.code.toLowerCase().includes(countrySearch)
                      ).map((country) => (
                        <button
                          key={country.code}
                          onClick={() => handleCountrySelect(country)}
                          className="w-full text-left px-2 sm:px-4 py-2 sm:py-3 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition flex items-center gap-2 sm:gap-3 text-xs sm:text-sm rounded-lg group active:scale-95"
                        >
                          <span className="text-lg sm:text-xl flex-shrink-0">{country.flag}</span>
                          <span className="flex-1 text-gray-900 dark:text-white font-medium group-hover:text-cyan-700 dark:group-hover:text-cyan-300 truncate">
                            {country.name}
                          </span>
                          <span className="text-xs font-bold text-navy-deep dark:text-white flex-shrink-0">{country.dial}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`border-t border-gray-200 dark:border-slate-700 p-2 sm:p-3 flex gap-2 ${
                    currentStep === 'mobile'
                      ? 'bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-800 dark:to-slate-800'
                      : 'bg-white dark:bg-slate-900'
                  }`}
                >
                  {currentStep === 'mobile' && selectedCountry && (
                    <div className="flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-white dark:bg-slate-700 rounded-lg border-2 border-cyan-400 dark:border-cyan-500 font-semibold whitespace-nowrap flex-shrink-0">
                      <span className="text-base sm:text-lg">{selectedCountry.flag}</span>
                      <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-cyan-600 dark:text-white">{selectedCountry.dial}</span>
                    </div>
                  )}
                  <input
                    type={currentStep === 'mobile' ? 'tel' : 'text'}
                    value={input}
                    onChange={(e) => {
                      if (currentStep === 'mobile') {
                        setInput(e.target.value.replace(/\D/g, ''));
                      } else {
                        setInput(e.target.value);
                      }
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                    placeholder={getInputPlaceholder()}
                    disabled={isLoading}
                    maxLength={currentStep === 'mobile' ? (selectedCountry?.length || 10) : 200}
                    className={`flex-1 px-2 sm:px-4 py-1.5 sm:py-2.5 border-2 rounded-lg sm:rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 transition disabled:opacity-50 font-medium ${
                      currentStep === 'mobile'
                        ? 'border-cyan-400 dark:border-cyan-500 bg-white dark:bg-slate-800 dark:text-white focus:ring-cyan-400 dark:focus:ring-cyan-500'
                        : 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white focus:ring-navy-deep dark:focus:ring-cyan-400 focus:border-navy-deep dark:focus:border-cyan-400'
                    }`}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="p-1.5 sm:p-2.5 bg-navy-deep dark:bg-gradient-to-br dark:from-cyan-500 dark:to-teal-500 text-white rounded-lg sm:rounded-xl hover:opacity-90 transition disabled:opacity-50 shadow-md hover:shadow-lg active:scale-95 flex-shrink-0"
                    title="Send"
                  >
                    <Send className="w-4 sm:w-5 h-4 sm:h-5" />
                  </button>
                </div>
              )}

              {/* Course selection quick buttons */}
              {currentStep === 'course' && !showCountryPicker && !isLoading && (
                <div className="px-2 sm:px-3 py-2 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-1 sm:space-y-2 max-h-40 overflow-y-auto">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <button
                      onClick={() => chooseCourse('Fellowship in Pain Management')}
                      className="px-2 sm:px-3 py-1 bg-cyan-600 text-white rounded-full text-xs sm:text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Pain Management
                    </button>
                    <button
                      onClick={() => chooseCourse('Fellowship in Dermatology')}
                      className="px-2 sm:px-3 py-1 bg-cyan-600 text-white rounded-full text-xs sm:text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Dermatology
                    </button>
                    <button
                      onClick={() => chooseCourse('Fellowship in Emergency Medicine')}
                      className="px-2 sm:px-3 py-1 bg-cyan-600 text-white rounded-full text-xs sm:text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Emergency
                    </button>
                    <button
                      onClick={() => chooseCourse('Fellowship in Clinical Cardiology')}
                      className="px-2 sm:px-3 py-1 bg-cyan-600 text-white rounded-full text-xs sm:text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Cardiology
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="border-t border-gray-200 dark:border-slate-700 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800">
              <button
                onClick={handleReset}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-navy-deep dark:bg-gradient-to-br dark:from-cyan-500 dark:to-teal-500 text-white rounded-lg sm:rounded-xl hover:opacity-90 transition font-semibold text-xs sm:text-sm shadow-md active:scale-95"
              >
                ✓ Start New Inquiry
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full h-full bg-gradient-to-br from-navy-deep to-slate-800 dark:from-cyan-500 dark:via-teal-500 dark:to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-2xl transition flex items-center justify-center hover:scale-110 transform group active:scale-95"
          title="AI Chat Assistant"
        >
          <Sparkles className="w-6 sm:w-7 h-6 sm:h-7 group-hover:animate-spin" />
        </button>
      )}
    </div>
  );
}
