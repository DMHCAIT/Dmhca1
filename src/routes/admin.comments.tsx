import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Trash2, Calendar, Mail } from 'lucide-react';
import type { EventComment } from '@/lib/supabase';

export const Route = createFileRoute('/admin/comments')({
  head: () => ({
    meta: [
      { title: 'Event Comments — Admin' },
      { name: 'description', content: 'Manage event comments' },
    ],
  }),
  component: AdminComments,
});

function AdminComments() {
  const [comments, setComments] = useState<EventComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const { data, error } = await supabaseClient
        .from('event_comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (id: string) => {
    if (!confirm('Delete this comment?')) return;

    setDeleting(id);
    try {
      const { error } = await supabaseClient
        .from('event_comments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setComments(comments.filter((c) => c.id !== id));
    } catch (error) {
      alert('Error deleting comment: ' + (error as any).message);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading comments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-deep">Event Comments</h1>
        <p className="text-gray-600 mt-2">Total: {comments.length} comments</p>
      </div>

      {comments.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <p className="text-gray-600">No comments yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-navy-deep">{comment.name}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {comment.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(comment.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteComment(comment.id)}
                  disabled={deleting === comment.id}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-3">
                <p className="text-gray-700">{comment.comment}</p>
              </div>

              <div className="text-xs text-gray-500">
                <p>Event: {comment.event_slug}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
