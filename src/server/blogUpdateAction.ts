/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { BlobServiceClient } from '@azure/storage-blob';

import { z } from "zod";

import { updateDoc } from "../app/api/updateBlog";

const schemaRegister = z.object({
    id: z.string().min(5).max(100, {
        message: "Please pass a valid id",
      }),
    title: z.string().min(5).max(100, {
        message: "Please enter a valid title",
      }),
    body: z.string().min(5).max(300, {
        message: "Please enter valid description",
      }),
      image: z.any(),
      video: z.any(),
});

export async function blogUpdate(prevState: any, formData: FormData) {
    const blobServiceClient = BlobServiceClient.fromConnectionString("DefaultEndpointsProtocol=https;AccountName=contentshareblog;AccountKey=eCgGj03x4MzQjn0NlE8bGte8y/AJ6vHePbdio7LgXbuWHJVdT8X8GOeSuUqyqWWOU7EHyJNTEAX4+AStyArBeQ==;EndpointSuffix=core.windows.net");
    const containerName = 'images';
    const containerNameVideo = 'videos';
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const containerClientVideo = blobServiceClient.getContainerClient(containerNameVideo);

    const validatedFields = schemaRegister.safeParse({
      id: formData.get("id"),
      title: formData.get("title"),
      body: formData.get("body"),
      image: formData.get("file"),
      video: formData.get("video")
    });
  
    if (!validatedFields.success) {
      return {
        ...prevState,
        message: "Missing Fields. Failed to Upload.",
      }
    }

    const uploadPathImg = "https://contentshareblog.blob.core.windows.net/images/";
    const uploadPathVideo = "https://contentshareblog.blob.core.windows.net/videos/";

    const fileNameImg = validatedFields.data.image.name;
    const imageFilePath = uploadPathImg + fileNameImg;

    const fileNameVid = validatedFields.data.video.name;
    const videoFilePath = uploadPathVideo + fileNameVid;

    const videoFile = validatedFields.data.video as File;
    const arrayBufferVideo = await videoFile.arrayBuffer();
    const bufferVideo = new Uint8Array(arrayBufferVideo);

    const file = validatedFields.data.image as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const blobNameImg = fileNameImg;
    const blobNameVideo = fileNameVid;

    const blockBlobClient = containerClient.getBlockBlobClient(blobNameImg);
    await blockBlobClient.upload(buffer, buffer.length);

    const blockBlobClientVideo = containerClientVideo.getBlockBlobClient(blobNameVideo);
    await blockBlobClientVideo.upload(bufferVideo, bufferVideo.length);

    const dateNow = Date.now(); 

    const blog = {
        "id": validatedFields.data.id,
        "title": validatedFields.data.title,
        "body": validatedFields.data.body,
        "uploaded": formData.get("uploaded"),
        "updated": dateNow.toString(),
        "image_url": imageFilePath,
        "video_url": videoFilePath
    }

    await updateDoc(JSON.stringify(blog));

    return {
      ...prevState,
      data: "ok",
    };
};
