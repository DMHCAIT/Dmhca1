import { useState, useEffect, useRef } from 'react';
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

  // Initialize greeting only once when widget opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: `${Date.now()}-greeting`,
        text: "Hello! 👋 Welcome to DMHCA. I'm here to help you find the perfect medical course. What's your name?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }
  }, [isOpen, messages.length]);

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
        if (userInput.length < 2) {
          addMessage('Please enter a valid name (at least 2 characters)', 'bot');
          return;
        }
        setFormData((prev) => ({ ...prev, name: userInput }));
        setCurrentStep('email');
        addMessage(`Nice to meet you, ${userInput}! 🎉 What's your email address?`, 'bot');
        break;
      }

      case 'name': {
        if (userInput.length < 2) {
          addMessage('Please enter a valid name (at least 2 characters)', 'bot');
          return;
        }
        setFormData((prev) => ({ ...prev, name: userInput }));
        setCurrentStep('email');
        addMessage('Great! Now what\'s your email address?', 'bot');
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
    setCurrentStep('name');
    setFormData({ name: '', email: '', countryCode: '', mobile: '', course: '' });
    setInput('');
    setShowCountryPicker(false);
    setSelectedCountry(null);
    setCountrySearch('');
    
    const greeting: Message = {
      id: `${Date.now()}-reset-greeting`,
      text: "Hello! 👋 Welcome to DMHCA. I'm here to help you find the perfect medical course. What's your name?",
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages([greeting]);
  };

  const getInputPlaceholder = (): string => {
    switch (currentStep) {
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
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out ${
        isOpen ? 'w-96 h-[32rem]' : 'w-16 h-16'
      }`}
    >
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-deep to-slate-800 dark:from-cyan-600 dark:via-cyan-500 dark:to-teal-500 text-white px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></div>
              <div>
                <h3 className="font-bold text-base">DMHCA Assistant</h3>
                <p className="text-xs opacity-90">Online & Ready</p>
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
            className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 space-y-3 scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed font-medium transition-all ${
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
                <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2 border border-gray-200 dark:border-slate-600">
                  <Loader className="w-4 h-4 animate-spin text-navy-deep dark:text-cyan-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Processing...</span>
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
                  className="border-t border-gray-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-900 max-h-80 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="relative">
                    {/* Search Box */}
                    <div className="flex items-center gap-2 mb-3 px-4 py-3 border-2 border-cyan-300 dark:border-cyan-500 rounded-xl bg-white dark:bg-slate-800 sticky top-0">
                      <Search className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value.toLowerCase())}
                        className="flex-1 bg-transparent text-sm dark:text-white focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
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
                          className="w-full text-left px-4 py-3 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition flex items-center gap-3 text-sm rounded-lg group active:scale-95"
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="flex-1 text-gray-900 dark:text-white font-medium group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
                            {country.name}
                          </span>
                          <span className="text-xs font-bold text-navy-deep dark:text-cyan-400">{country.dial}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`border-t border-gray-200 dark:border-slate-700 p-3 flex gap-2 ${
                    currentStep === 'mobile'
                      ? 'bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-800 dark:to-slate-800'
                      : 'bg-white dark:bg-slate-900'
                  }`}
                >
                  {currentStep === 'mobile' && selectedCountry && (
                    <div className="flex items-center px-3 py-2 bg-white dark:bg-slate-700 rounded-lg border-2 border-cyan-400 dark:border-cyan-500 font-semibold whitespace-nowrap">
                      <span className="text-lg">{selectedCountry.flag}</span>
                      <span className="ml-2 text-sm text-cyan-600 dark:text-cyan-400">{selectedCountry.dial}</span>
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
                    className={`flex-1 px-4 py-2.5 border-2 rounded-xl text-sm focus:outline-none focus:ring-2 transition disabled:opacity-50 font-medium ${
                      currentStep === 'mobile'
                        ? 'border-cyan-400 dark:border-cyan-500 bg-white dark:bg-slate-800 dark:text-white focus:ring-cyan-400 dark:focus:ring-cyan-500'
                        : 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 dark:text-white focus:ring-navy-deep dark:focus:ring-cyan-400 focus:border-navy-deep dark:focus:border-cyan-400'
                    }`}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !input.trim()}
                    className="p-2.5 bg-navy-deep dark:bg-gradient-to-br dark:from-cyan-500 dark:to-teal-500 text-white rounded-xl hover:opacity-90 transition disabled:opacity-50 shadow-md hover:shadow-lg active:scale-95"
                    title="Send"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Course selection quick buttons */}
              {currentStep === 'course' && !showCountryPicker && !isLoading && (
                <div className="px-3 py-2 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2">
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => chooseCourse('Fellowship in Pain Management')}
                      className="px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Fellowship in Pain Management
                    </button>
                    <button
                      onClick={() => chooseCourse('Fellowship in Dermatology')}
                      className="px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Fellowship in Dermatology
                    </button>
                    <button
                      onClick={() => chooseCourse('Fellowship in Emergency Medicine')}
                      className="px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Fellowship in Emergency Medicine
                    </button>
                    <button
                      onClick={() => chooseCourse('Fellowship in Clinical Cardiology')}
                      className="px-3 py-1.5 bg-cyan-600 text-white rounded-full text-sm hover:bg-cyan-700 active:scale-95 transition"
                    >
                      Fellowship in Clinical Cardiology
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800">
              <button
                onClick={handleReset}
                className="w-full px-4 py-3 bg-navy-deep dark:bg-gradient-to-br dark:from-cyan-500 dark:to-teal-500 text-white rounded-xl hover:opacity-90 transition font-semibold text-sm shadow-md active:scale-95"
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
          <Sparkles className="w-7 h-7 group-hover:animate-spin" />
        </button>
      )}
    </div>
  );
}
