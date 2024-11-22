import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between w-full p-10 bg-slate-400 text-xl font-semibold">
            <Link href="/" >Home</Link>
            <Link href="/addBlog" >Upload</Link>
            <Link href="/upDateBlog" >Update</Link>
        </nav>
    );
}
