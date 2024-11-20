/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import React, { useActionState, useRef, useState } from "react";

import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { blogUpdate } from "~/server/blogUpdateAction";

const INITIAL_STATE = {
    data: null,
  };

export default function UpdatePost(Blogs: any) {
    const [submitted, setSubmitted] = useState(false);

    const initialBlogState = {
        id: "",
        title: "",
        body: "",
        uploaded: "",
        updated: "",
        image_url: "",
        video_url: ""
    };

    const [blog, setBlog] = useState(initialBlogState);
    const [formState, formAction] = useActionState(
        blogUpdate,
        INITIAL_STATE
      );

    const ref = useRef<HTMLFormElement>(null)
    if (submitted == true) { ref.current?.reset() };
    
    return(
        <div className="h-screen flex items-center justify-center">
            <form ref={ref} onSubmit={() => setSubmitted(true)} action={formAction}>
                <Card className="p-4">
                    <CardHeader className="space-y-1">
                    <div className="w-max">
                        <Select onValueChange={(val: any) => setBlog(JSON.parse(val))}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select Post to Update" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Blogs</SelectLabel>
                                {Object.values(Blogs.blogs.Documents).map((blog: any) => (
                                    <SelectItem key={blog.id} value={JSON.stringify(blog)}>{blog.title}</SelectItem>
                                ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <CardTitle className="text-3xl font-bold">Update Post</CardTitle>
                        <CardDescription>
                            Enter info below to update Post
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            type="title"
                            placeholder={blog.title}
                        />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="body">Blog Description</Label>
                        <Textarea id="body"
                                  name="body" 
                                  placeholder={blog.body} 
                                  />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="file">Image</Label>
                        <Input
                            id="file"
                            name="file"
                            type="file"
                        />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="video">Video</Label>
                        <Input
                            id="video"
                            name="video"
                            type="file"
                        />
                     </div>
                    </CardContent>
                    <input type="hidden" id="id" name="id" value={blog.id} />
                    <CardFooter className="flex flex-col">
                        <Button className="w-full">Update Blog</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};
