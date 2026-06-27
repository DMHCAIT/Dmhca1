import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { LogIn } from 'lucide-react';

export const Route = createFileRoute('/admin-login')({
  head: () => ({
    meta: [
      { title: 'Admin Login — DMHCA' },
      { name: 'description', content: 'Admin panel login' },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: authError } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
      } else {
        // Redirect to admin dashboard will be handled by router
        window.location.href = '/admin';
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-deep to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <LogIn className="w-6 h-6 text-gold" />
          <h1 className="text-2xl font-bold text-navy-deep">Admin Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-navy-deep mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
              placeholder="admin@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-deep mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-gold text-navy-deep rounded-lg font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center mt-4">
          Use your Supabase credentials to access the admin panel.
        </p>
      </div>
    </div>
  );
}
