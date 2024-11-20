/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../components/ui/card";

import { getAllDocs } from "../app/api/getBlogs";
import DeleteButton from "../components/deleteButton";

export const dynamic = 'force-dynamic';

function video(blog: any) {
  return (
    <div>
      <video width="320" height="240" controls preload="none">
      <source src={blog.video_url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      </div>
  );
}

export default async function Docs() {
  const blogs = await getAllDocs();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
      {Object.values(blogs.Documents).map((blog: any) => (
        <div key={blog.id} className="relative h-96 w-96">
       <Card className="w-full max-w-md pt-10 p-4">
        <CardTitle className="space-y-1">
          <CardDescription>
            {blog.title}
          </CardDescription>
        </CardTitle>
        <CardContent className="space-y-1">
          <div>
            {blog.body}
          </div>
          <div>
          <Image 
                src={blog.image_url} 
                alt={blog.title}
                width={250}
                height={250}
                quality={75}
                style={{objectFit: "contain"}}
           />
           </div>
           {blog.video_url && video(blog)}
        </CardContent>
        <DeleteButton id={blog.id}/>
       </Card>
       </div>
       ))}
      </div>
  );
}
