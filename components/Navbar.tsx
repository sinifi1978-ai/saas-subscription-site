import Link from "next/link";

// نسخه‌ی فعلی فقط ظاهری است؛ وضعیت ورود کاربر بعداً (با احراز هویت) اضافه می‌شود.
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-brand-600">
          سرویس اشتراکی من
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            داشبورد
          </Link>
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            ورود
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            شروع رایگان
          </Link>
        </div>
      </nav>
    </header>
  );
}
