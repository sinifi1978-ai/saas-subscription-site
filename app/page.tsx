import Link from "next/link";
import { Navbar } from "@/components/Navbar";

const features = [
  {
    title: "راه‌اندازی سریع",
    description: "در چند دقیقه حساب بساز و بدون دردسر شروع کن.",
  },
  {
    title: "دوره آزمایشی رایگان",
    description: "قبل از پرداخت، امکانات را به‌صورت رایگان امتحان کن.",
  },
  {
    title: "پرداخت امن",
    description: "پرداخت‌ها با درگاه بین‌المللی Stripe انجام می‌شود.",
  },
];

const planFeatures = [
  "دسترسی کامل به همه امکانات",
  "پشتیبانی ایمیلی",
  "به‌روزرسانی‌های مداوم",
  "لغو در هر زمان",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
          سرویس اشتراکی خودت را
          <span className="text-brand-600"> همین امروز </span>
          شروع کن
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          یک پلتفرم ساده و قدرتمند با اشتراک ماهانه و دوره آزمایشی رایگان. بدون
          کارت اعتباری شروع کن.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-brand-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            شروع رایگان
          </Link>
          <Link
            href="#pricing"
            className="rounded-xl px-8 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            مشاهده قیمت‌ها
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
              <p className="mt-3 text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          قیمت‌گذاری ساده
        </h2>
        <p className="mt-3 text-center text-slate-600">
          یک پلن، همه امکانات. با دوره آزمایشی رایگان شروع کن.
        </p>

        <div className="mx-auto mt-12 max-w-md">
          <div className="rounded-3xl border-2 border-brand-600 bg-white p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900">پلن حرفه‌ای</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-slate-900">
                ۹ دلار
              </span>
              <span className="text-slate-500">/ ماهانه</span>
            </div>
            <p className="mt-2 text-sm text-brand-600">
              ۱۴ روز دوره آزمایشی رایگان
            </p>

            <ul className="mt-8 space-y-3">
              {planFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/signup"
              className="mt-8 block rounded-xl bg-brand-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-brand-700"
            >
              شروع دوره آزمایشی
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} سرویس اشتراکی من. تمام حقوق محفوظ است.
      </footer>
    </div>
  );
}
