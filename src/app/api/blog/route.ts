import connectMongoDB from "@/app/libs/mongodb";
import BlogPosts from "@/app/models/BlogPost";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {author, title, date_published, content} = await request.json();
    await connectMongoDB();
    await BlogPosts.create({ author, title, date_published, content});
    return NextResponse.json({ message: "Blog Created successfully"}, {status: 201});
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await BlogPosts.find();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}