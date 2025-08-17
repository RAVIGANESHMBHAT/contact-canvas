import { AuthButton } from "@/components/auth-options";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="flex-1 w-full flex flex-col items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link
                href={"/"}
                className="text-2xl font-bold text-blue-600 tracking-tight"
              >
                Contact Canvas
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <ThemeSwitcher />
              <AuthButton />
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col items-center justify-center max-w-5xl p-5">
          <div className="flex flex-col items-center gap-6 px-4 py-16">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="60" cy="60" r="60" fill="#e0e7ff" />
              <rect
                x="35"
                y="50"
                width="50"
                height="30"
                rx="8"
                fill="#f9fafb"
                stroke="#6366f1"
                strokeWidth="2"
              />
              <text
                x="60"
                y="70"
                textAnchor="middle"
                fontSize="24"
                fill="#6366f1"
                fontWeight="bold"
              >
                404
              </text>
            </svg>
            <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
              Page Not Found
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-center max-w-md">
              Oops! The page you’re looking for doesn’t exist.
              <br />
              Let’s get you back to your contacts.
            </p>
            <Link
              href="/"
              className="mt-4 px-6 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Go to Home
            </Link>
          </div>
        </div>
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
          <p className="text-zinc-400">
            Contact Canvas &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}
