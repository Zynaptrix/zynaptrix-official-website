import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-6xl mb-4">404</h1>
        <p className="text-xl text-ink/70 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-ink text-paper px-8 py-4 text-base font-medium hover:bg-ink/90 transition"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
