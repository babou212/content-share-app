/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getAllDocs } from "../api/getBlogs";

export const dynamic = 'force-dynamic';

export async function getBlogs() {
    const blogs = await getAllDocs(); 

    return blogs;
}
