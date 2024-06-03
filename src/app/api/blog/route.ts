import connectMongoDB from "@/app/libs/mongodb";
import BlogPosts from "@/app/models/BlogPost";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const {author, title, date_published, content}  = await request.json();
  await connectMongoDB();
  await BlogPosts.create({ author, title, date_published, content});
  return NextResponse.json({ message: "Blog Created successfully"}, {status: 201})
}

export async function GET() {
  await connectMongoDB();
  const blogs = await BlogPosts.find();
  return NextResponse.json({ blogs});
}