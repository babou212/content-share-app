/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import React, { useActionState, useRef, useState } from "react";
import { useFormState } from "react-dom";

import { blogUpload } from "~/server/uploadBlogAction";

import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

const INITIAL_STATE = {
    data: null,
  };

export default function CreateBlog() {
    const [submitted, setSubmitted] = useState(false);
    const [formState, formAction] = useActionState(
        blogUpload,
        INITIAL_STATE
      );
    
    const ref = useRef<HTMLFormElement>(null)

    if (submitted == true) { ref.current?.reset() };
        
    return(
        <div className="h-screen flex items-center justify-center">
            <form  ref={ref} onSubmit={() => setSubmitted(true)} action={formAction}>
                <Card className="p-4">
                    <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold">Upload Post</CardTitle>
                        <CardDescription>
                            Enter info below to create new Post
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            type="title"
                            placeholder="Nice meaningful title"
                        />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="body">Post Description</Label>
                        <Textarea id="body"
                                  name="body" 
                                  placeholder="Type your message here." 
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
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-full">Upload Post</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
};
