'use client';

import Button from "@/components/Button";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPost = ({ params }: { params: { blogPostId: string } }) => {
  const [apiData, setApiData] = useState<{ [key: string]: any }>([]);
  const router = useRouter();

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const res = await fetch(
        `https://dummyapi.online/api/blogposts/${params.blogPostId}`
      );
      const apiData = await res.json();
      setApiData([apiData]);
    } catch (error) {
      console.log("Error in fetching data: ", error);
    }
  };

  const handleBackButtonClick = () => {
    router.push('/blog');
  }

  return (
    <div className="m-4">
      <div className="font-semibold text-center mb-4">
        <span className="text-center border-black border-b-2 pb-2">
          Blog Details
        </span>
      </div>
      {apiData && apiData.length > 0 && (
        <>
          <Card blogData={apiData} isBlogDetails={true} />
          <Button onClick={handleBackButtonClick} name='Back' className='ml-8' />
        </>
      )}
    </div>
  )
};

export default BlogPost;