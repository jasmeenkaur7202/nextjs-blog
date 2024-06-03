import mongoose, { Schema, Document, Model } from 'mongoose';

export interface BlogPostDocument extends Document {
  author: string;
  title: string;
  date_published: Date;
  content: string;
}

const BlogPostSchema: Schema<BlogPostDocument> = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  date_published: { type: Date, required: true },
  content: { type: String, required: true },
});

const BlogPosts: Model<BlogPostDocument> = mongoose.models.BlogPosts || mongoose.model('BlogPosts', BlogPostSchema);

export default BlogPosts;