"use client";

// نسخه‌ی فقط ظاهری. دکمه‌ها بعداً به Stripe متصل می‌شوند.
export function BillingActions() {
  return (
    <div className="space-y-3">
      <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">
        درگاه پرداخت هنوز متصل نشده؛ این دکمه‌ها فعلاً فقط ظاهری هستند.
      </div>

      <button
        type="button"
        disabled
        className="w-full cursor-not-allowed rounded-lg bg-brand-600 px-4 py-2.5 font-semibold text-white opacity-60 sm:w-auto"
      >
        شروع دوره آزمایشی ۱۴ روزه
      </button>

      <button
        type="button"
        disabled
        className="w-full cursor-not-allowed rounded-lg border border-slate-300 px-4 py-2.5 font-semibold text-slate-700 opacity-60 sm:mr-3 sm:w-auto"
      >
        مدیریت اشتراک
      </button>
    </div>
  );
}
