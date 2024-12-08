import React from 'react';
import { Layout } from './components/Layout';
import { PostCard } from './components/PostCard';
import { Sidebar } from './components/Sidebar';
import { posts } from './data/posts';

export default function App() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post, index) => (
              <PostCard
                key={post.id}
                {...post}
                className={`animate-[float_${6 + index}s_ease-in-out_infinite]`}
              />
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <footer className="bg-leather-dark/80 backdrop-blur-md text-parchment py-8 border-t border-mystic-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="medieval-title">© 2024 MTG Graphic Resources</p>
          <p className="text-sm mt-2 text-parchment/60">Crafting magical resources for the community</p>
        </div>
      </footer>
    </Layout>
  );
}