import { Params } from "@/app/blog/interfaces";
import connectMongoDB from "@/app/libs/mongodb";
import BlogPosts from "@/app/models/BlogPost";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, {params}: { params: {id: string}}) {
  const { id } = params;

  try {
    const {author, title, date_published, content} = await request.json();

    await connectMongoDB();

    const updatedPost = await BlogPosts.findByIdAndUpdate(id, {author, title, date_published, content}, {new: true});

    if(!updatedPost) {
      return NextResponse.json({ message: "Blog Post not found"}, {status: 400});
    }
    return NextResponse.json({ message: "Blog updated successfully", updatedPost}, {status: 200});
    
  } catch (error) {
    console.log("Error while updating post: ", error);
    return NextResponse.json({ message: "Failed to update blog post"}, {status: 500});
  }
}

export async function GET(request: NextRequest, { params }: { params: Params}) {
  const { id } = params;

  await connectMongoDB();
 
  const blog = await BlogPosts.findOne({ _id: id});
  return NextResponse.json({ blog }, {status: 200});
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  // const id = request.nextUrl.searchParams.get("_id");
  const {id} = params; 
  await connectMongoDB();
  await BlogPosts.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200});
}