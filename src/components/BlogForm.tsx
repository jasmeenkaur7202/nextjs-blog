"use client"

import { BlogPost } from '@/app/blog/interfaces';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Button from './Button';

interface IBlogFormProps {
  post?: BlogPost;
}

const BlogForm: React.FC<IBlogFormProps> = ({ post }) => {
  const formatDate = (isoString: string) => {
    return isoString.split("T")[0];
  }

  const [author, setAuthor] = useState(post?.author || "");
  const [title, setTitle] = useState(post?.title || "");
  const [datePublished, setDatePublished] = useState(
    post?.date_published ? formatDate(post?.date_published) : ""
  );

  const [content, setContent] = useState(post?.content || "");
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.push('/blog');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogPostData = {
      author,
      title,
      date_published: new Date(datePublished),
      content,
    };

    try {
      if(post?._id) {
        const response = await fetch(`/api/blog/${post._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogPostData),
        });

        if (!response.ok) {
          throw new Error("Failed to update the blog post");
        }
      } else {
        const response = await fetch("/api/blog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogPostData),
        });

        if (!response.ok) {
          throw new Error("Failed to create the blog post");
        }
      }
      router.push("/blog");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-4'>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="author"
        >
          Author
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="datePublished"
        >
          Date Published
        </label>
        <input
          id="datePublished"
          type="date"
          value={datePublished}
          onChange={(e) => setDatePublished(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between w-[35%]">
        <Button onClick={handleBackButtonClick} name='Back' className='py-2 px-4' />
        <Button name={post ? "Update" : "Create"} type="submit" className="py-2 px-4"/>
      </div>
    </form>
  )
}

export default BlogForm;