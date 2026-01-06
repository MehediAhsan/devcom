"use client";

import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<string[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("devcom_posts");
      if (raw) setPosts(JSON.parse(raw));
    } catch {}
  }, []);

  function save() {
    if (!text.trim()) return;
    const next = [text.trim(), ...posts];
    setPosts(next);
    localStorage.setItem("devcom_posts", JSON.stringify(next));
    setText("");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
      </div>

      <div className="rounded-md bg-white p-4 shadow-sm">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-md border p-2"
          placeholder="Share something with the community..."
          rows={3}
        />
        <div className="mt-2 flex justify-end">
          <button onClick={save} className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Post
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {posts.length === 0 ? (
          <div className="rounded-md bg-white p-6 text-center text-zinc-600">No posts yet.</div>
        ) : (
          posts.map((p, i) => (
            <div key={i} className="rounded-md bg-white p-4 shadow-sm">
              <div className="text-sm text-zinc-800">{p}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
