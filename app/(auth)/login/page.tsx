import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">ورود به حساب</h1>
          <p className="mt-2 text-sm text-slate-600">
            خوش برگشتی! لطفاً وارد شو.
          </p>

          <div className="mt-6">
            <LoginForm />
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            حساب نداری؟{" "}
            <Link href="/signup" className="font-medium text-brand-600 hover:underline">
              ثبت‌نام کن
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
