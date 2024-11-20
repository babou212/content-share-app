/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { BlobServiceClient } from '@azure/storage-blob';

import { z } from "zod";

import { updateDoc } from "../app/api/updateBlog";

const MAX_FILE_SIZE = 50000000000;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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
    image: z.any()
    .refine((file) => {
      if (file.size === 0 || file.name === undefined) return false;
      else return true;
    }, "Please update or add new image.")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 50MB.`),
});

export async function blogUpdate(prevState: any, formData: FormData) {
    const blobServiceClient = BlobServiceClient.fromConnectionString("DefaultEndpointsProtocol=https;AccountName=contentshareblog;AccountKey=eCgGj03x4MzQjn0NlE8bGte8y/AJ6vHePbdio7LgXbuWHJVdT8X8GOeSuUqyqWWOU7EHyJNTEAX4+AStyArBeQ==;EndpointSuffix=core.windows.net");
    const containerName = 'images';
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const validatedFields = schemaRegister.safeParse({
      id: formData.get("id"),
      title: formData.get("title"),
      body: formData.get("body"),
      image: formData.get("file"),    
    });

    if (!validatedFields.success) {
      return {
        ...prevState,
        message: "Missing Fields. Failed to Upload.",
      }
    }

    const uploadPathImg = "https://contentshareblog.blob.core.windows.net/images/";
    const uploadPathVideo = "https://contentshareblog.blob.core.windows.net/videos/";

    const fileName = validatedFields.data.image.name;
    const imageFilePath = uploadPathImg + fileName;
  
    const file = validatedFields.data.image as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const blobName = fileName;

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.upload(buffer, buffer.length);

    const dateNow = Date.now(); 

    const blog = {
        "id": validatedFields.data.id,
        "title": validatedFields.data.title,
        "body": validatedFields.data.body,
        "uploaded": dateNow.toString(),
        "updated": dateNow.toString(),
        "image_url": imageFilePath,
        "video_url": ""
    }

    await updateDoc(JSON.stringify(blog));

    return {
      ...prevState,
      data: "ok",
    };
};
