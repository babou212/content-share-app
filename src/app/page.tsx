import  Docs  from "../components/docs";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mt-8 text-white bg-slate-100">
      <div className="container flex flex-col items-center mt-8 gap-12 px-4 py-16">
        <Docs />
      </div>
    </main>
  );
}
