/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "../components/ui/card";

async function getAllDocs() {

  const response = await fetch(`https://content-app.azurewebsites.net:443/api/get-all-docs/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=dOxrYCyv-tsHHpiZ50DV6y0mVzgGTXMzrAfXrAcguUI`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}

export default async function Docs() {
  const blogs = await getAllDocs();
  console.log(blogs.Documents);
  return (
      <div>
      {Object.values(blogs.Documents).map((blog) => (
        <div key={blog.id}>
       <Card>
        <CardTitle>
          <CardDescription>
            {blog.title}
          </CardDescription>
        </CardTitle>
        <CardContent>
          <div>
            {blog.body}
          </div>
          <Image 
                src={blog.image_url} 
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                style={{objectFit: "contain"}}
           />
        </CardContent>
       </Card>
       </div>
       ))}
      </div>
  );
}
