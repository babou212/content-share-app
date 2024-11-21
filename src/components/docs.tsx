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
      <video width="250" height="250" controls preload="none">
      <source src={blog.video_url} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      </div>
  );
}

export default async function Docs() {
  const blogs = await getAllDocs();
  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.values(blogs.Documents).map((blog: any) => (
        <div key={blog.id} className="grid-element">
       <Card className="w-full pt-10 p-4">
        <CardTitle className="">
          <CardDescription>
            {blog.title}
          </CardDescription>
        </CardTitle>
        <CardContent className="">
          <div>
            {blog.body}
          </div>
          <div className="p-2 content-center">
          <Image 
                src={blog.image_url} 
                alt={blog.title}
                width={150}
                height={150}
                quality={75}
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
