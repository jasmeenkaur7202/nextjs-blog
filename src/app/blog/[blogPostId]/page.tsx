"use client";

import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BlogPost } from '../interfaces';
import Button from '@/components/Button';

const BlogDetailPage: React.FC = () => {
  const pathname = usePathname();
  const blogId = pathname.split('/')[2];
  const router = useRouter();

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

  const handleBackButtonClick = () => {
    router.push('/blog');
  }

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blog/${blogId}`);
        if (response.ok) {
          const data = await response.json();
          setBlogPost(data.blog);
        } else {
          throw new Error('Failed to fetch blog post');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPost();
  }, [blogId]);

  return (
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 border-2">
          <h1 className="text-gray-700 font-bold mb-4">{blogPost?.title}</h1>
          <div className="text-gray-700 mb-2 w-fit">Author: {blogPost?.author}</div>
          <p className="text-gray-500 text-sm mb-2">
            Published: {blogPost?.date_published}
          </p>
          <p className="text-gray-700">{blogPost?.content}</p>
          <Button onClick={handleBackButtonClick} name='Back' className='mt-5' />
        </div>
      </div>
  );
};

export default BlogDetailPage;