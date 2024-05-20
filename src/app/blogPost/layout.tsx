'use client';

import { useRouter } from "next/navigation";
import React from "react";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="ml-12">
      <div>
        {children}
      </div>
    </div>
  )
}