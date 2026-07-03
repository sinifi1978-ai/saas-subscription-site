import Link from "next/link";

// نسخه‌ی فقط ظاهری: فعلاً فقط به صفحه اصلی برمی‌گردد.
// بعد از افزودن احراز هویت، به عملیات واقعی خروج تبدیل می‌شود.
export function SignOutButton() {
  return (
    <Link
      href="/"
      className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
    >
      خروج
    </Link>
  );
}
