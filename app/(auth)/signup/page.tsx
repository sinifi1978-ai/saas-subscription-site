import Link from "next/link";
import { SignupForm } from "./SignupForm";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">ساخت حساب جدید</h1>
          <p className="mt-2 text-sm text-slate-600">
            رایگان شروع کن — بدون نیاز به کارت اعتباری.
          </p>

          <div className="mt-6">
            <SignupForm />
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            قبلاً ثبت‌نام کرده‌ای؟{" "}
            <Link href="/login" className="font-medium text-brand-600 hover:underline">
              وارد شو
            </Link>
          </p>
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          <Link href="/" className="hover:underline">
            بازگشت به صفحه اصلی
          </Link>
        </p>
      </div>
    </div>
  );
}
