import React, { useEffect, useState } from "react";

type Comment = { name: string; email?: string; text: string; createdAt: string };

export default function EventComments({ eventSlug }: { eventSlug: string }) {
  const storageKey = `event_comments_${eventSlug}`;
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(comments));
    } catch {}
  }, [comments, storageKey]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim() || !name.trim() || !email.trim()) return;
    const entry: Comment = { name: name.trim(), email: email.trim(), text: text.trim(), createdAt: new Date().toISOString() };
    setComments((c) => [entry, ...c]);
    setName("");
    setEmail("");
    setText("");
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full p-3 border border-border rounded-lg bg-white/90" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full p-3 border border-border rounded-lg bg-white/90" />
        </div>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your comment..." className="w-full min-h-[100px] p-3 border border-border rounded-lg bg-white/90" />
        <div className="flex items-center justify-end">
          <button type="submit" className="px-4 py-2 bg-navy-deep text-white rounded-lg hover:bg-blue-700 transition">Submit</button>
        </div>
      </form>

      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-muted-foreground">No comments yet — be the first to comment.</p>
        ) : (
          comments.map((c, i) => (
            <div key={i} className="p-4 bg-white border border-border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleString()}</p>
                </div>
                <p className="text-xs text-muted-foreground">{c.email}</p>
              </div>
              <p className="text-foreground">{c.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
