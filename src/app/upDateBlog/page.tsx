/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { getBlogs } from "../upDateBlog/blogs";
import UpdateBlog  from "../upDateBlog/upDateBlog";

export const dynamic = 'force-dynamic';

export default async function UpdatePostPage() {
    
    const blogs = await getBlogs();

    return(
        <UpdateBlog blogs={blogs}/>
    );
};
