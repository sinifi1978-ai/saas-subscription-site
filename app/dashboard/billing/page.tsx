import { BillingActions } from "./BillingActions";

// نسخه‌ی فقط ظاهری. مقادیر واقعی بعداً از دیتابیس/Stripe خوانده می‌شوند.
export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">اشتراک و صورت‌حساب</h1>
        <p className="mt-1 text-slate-600">
          وضعیت اشتراک خود را ببین و آن را مدیریت کن.
        </p>
      </div>

      {/* وضعیت فعلی — placeholder */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-slate-500">وضعیت</p>
            <p className="mt-1 font-semibold text-slate-900">—</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">دسترسی</p>
            <p className="mt-1 font-semibold text-slate-900">—</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">تمدید / پایان دوره</p>
            <p className="mt-1 font-semibold text-slate-900">—</p>
          </div>
        </div>
      </div>

      {/* اقدامات */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">فعال‌سازی اشتراک</h2>
        <p className="mt-1 mb-5 text-sm text-slate-600">
          با شروع دوره آزمایشی ۱۴ روزه، به همه امکانات دسترسی پیدا می‌کنی. تا
          پایان دوره آزمایشی هزینه‌ای دریافت نمی‌شود.
        </p>
        <BillingActions />
      </div>
    </div>
  );
}
