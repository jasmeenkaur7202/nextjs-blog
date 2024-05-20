import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

interface ICardProps {
  blogData: {[key: string]: any};
  isBlogDetails?: boolean;
}

const Card = ({ blogData, isBlogDetails}: ICardProps) => {
  const router = useRouter();
  const toggleContent = (id: number) => {
    router.push(`blogPost/${id}`);
  };

  return (
    <div className='flex flex-wrap gap-6 justify-center p-8'>
      {!blogData[0]?.message ? (
        blogData?.map((data: any, index: number) => (
          <div
            key={data.id}
            className={`border border-gray-400 ${
              !isBlogDetails ? "md:w-1/3" : "w-full"
            } p-4 rounded-lg bg-white flex flex-col shadow-md`}
          >
            <div className="flex flex-col card-details">
              <div>
                <span className="font-semibold">Title: </span>
                {data?.title}
              </div>
              <div>
                <span className="font-semibold">Author: </span>
                {data?.author}
              </div>
              <div>
                <span className="font-semibold">Publish Date: </span>
                {data?.date_published}
              </div>
            </div>
            <div className="card-content">
              {data?.content && !isBlogDetails
                ? `${data?.content.split(" ").slice(0, 20).join(" ")}...`
                : data?.content}
            </div>
            <div className="read-more-button mt-auto pt-4">
              {!isBlogDetails && (
                <Button
                  name="Read More"
                  onClick={() => toggleContent(data?.id)}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="text-red-500 font-semibold text-center text-2xl">
            {blogData[0]?.message}
          </div>
        </>
      )}
    </div>
  )
}

export default Card;