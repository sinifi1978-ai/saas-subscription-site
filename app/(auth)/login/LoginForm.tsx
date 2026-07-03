"use client";

// نسخه‌ی فقط ظاهری فرم ورود. هنوز به سرور/احراز هویت متصل نیست.
export function LoginForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: اتصال به احراز هویت در مرحله بعد
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">
        این فرم فعلاً فقط ظاهری است و هنوز به سرور متصل نشده.
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
          ایمیل
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          dir="ltr"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
          رمز عبور
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          dir="ltr"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-brand-600 px-4 py-2.5 font-semibold text-white transition hover:bg-brand-700"
      >
        ورود
      </button>
    </form>
  );
}
