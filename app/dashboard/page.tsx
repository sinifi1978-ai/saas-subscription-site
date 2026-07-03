import Link from "next/link";

// نسخه‌ی فقط ظاهری داشبورد. وضعیت اشتراک بعداً از دیتابیس خوانده می‌شود.
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">سلام! 👋</h1>
        <p className="mt-1 text-slate-600">به داشبورد خوش آمدی.</p>
      </div>

      {/* جای بنر وضعیت اشتراک — فعلاً placeholder */}
      <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-amber-800">
          بخش اشتراک بعداً متصل می‌شود. (اینجا وضعیت اشتراک کاربر نمایش داده خواهد شد.)
        </p>
        <Link
          href="/dashboard/billing"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          صفحه اشتراک
        </Link>
      </div>

      {/* جای کارکرد اصلی محصول */}
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h2 className="text-lg font-semibold text-slate-800">
          محل قرارگیری کارکرد اصلی محصول
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
          این بخش را مورد به مورد اضافه می‌کنیم. فعلاً فقط ظاهر سایت آماده است.
        </p>
      </div>
    </div>
  );
}
