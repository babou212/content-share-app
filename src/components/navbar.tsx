import Link from "next/link";

export default async function NavBar() {
    return (
        <nav className="flex items-center justify-between w-full p-10 text-xl font-semibold">
            <Link href="/" >Content Share</Link>
            <Link href="/addBlog" >Upload Blog</Link>
        </nav>
    );
}
