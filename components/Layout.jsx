import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white-100 mb-8 py-4">
        <div className="container mx-auto justify-start">
          <Link href="/">
            <a className="mx-auto">Mi Blog</a>
          </Link>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-white-100 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          &copy; 2022 Javier Coronas
        </div>
      </footer>
    </div>
  );
}
