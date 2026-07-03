import Link from "next/link";
import { SignOutButton } from "@/components/SignOutButton";

// نسخه‌ی فعلی بدون محافظت (احراز هویت) است تا فقط ظاهر داشبورد دیده شود.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-lg font-bold text-brand-600">
              داشبورد
            </Link>
            <nav className="flex items-center gap-1">
              <Link
                href="/dashboard"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                خانه
              </Link>
              <Link
                href="/dashboard/billing"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                اشتراک و صورت‌حساب
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">user@example.com</span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
    </div>
  );
}
