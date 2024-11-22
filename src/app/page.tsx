import  Docs  from "../components/docs";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white bg-slate-100">
      <div className="container flex flex-col items-center gap-12 px-4 py-16">
        <Docs />
      </div>
    </main>
  );
}
