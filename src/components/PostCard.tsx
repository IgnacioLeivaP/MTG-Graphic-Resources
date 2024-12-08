import React from 'react';

interface PostCardProps {
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  className?: string;
}

export function PostCard({ title, date, author, image, excerpt }: PostCardProps) {
  return (
    <article className="retro-card">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 retro-border" />
      <h2 className="text-2xl text-[#00ff00] mb-2">{title}</h2>
      <div className="text-[#00ff00] text-sm mb-4">
        <span>Posted on: {date}</span>
        <span className="mx-2">|</span>
        <span>By: {author}</span>
      </div>
      <p className="text-[#00ff00] mb-4">{excerpt}</p>
      <button className="retro-button">
        [READ MORE]
      </button>
    </article>
  );
}