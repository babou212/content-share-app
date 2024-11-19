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

export const dynamic = 'force-dynamic';

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
          <div className="">
          <Image 
                src={blog.image_url} 
                alt={blog.title}
                width={250}
                height={250}
                quality={75}
                style={{objectFit: "contain"}}
           />
           </div>
        </CardContent>
       </Card>
       </div>
       ))}
      </div>
  );
}
