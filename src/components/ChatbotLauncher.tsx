import { Sparkles } from "lucide-react";

export function ChatbotLauncher({
  onClick,
  loading = false,
}: {
  onClick: () => void;
  loading?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-busy={loading}
      className="w-full h-full bg-gradient-to-br from-navy-deep to-slate-800 dark:from-cyan-500 dark:via-teal-500 dark:to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-2xl transition flex items-center justify-center hover:scale-110 transform group active:scale-95"
      title={loading ? "Loading chat assistant" : "AI Chat Assistant"}
    >
      <Sparkles className="w-6 sm:w-7 h-6 sm:h-7 group-hover:animate-spin" />
    </button>
  );
}
