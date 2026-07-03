# سرویس اشتراکی (SaaS) — اسکلت پایه

اسکلت آماده‌ی یک سایت SaaS با اشتراک ماهانه و دوره آزمایشی رایگان.

- **فریم‌ورک:** Next.js 15 (App Router) + TypeScript
- **استایل:** Tailwind CSS + فونت Vazirmatn (فارسی، راست‌به‌چپ)
- **احراز هویت:** Auth.js (NextAuth v5) با ایمیل و رمز عبور
- **دیتابیس:** PostgreSQL + Prisma
- **پرداخت:** Stripe (Checkout + Customer Portal + Webhook) با دوره آزمایشی ۱۴ روزه

## پیش‌نیازها

1. **Node.js نسخه ۲۰ یا بالاتر** — از [nodejs.org](https://nodejs.org) نصب کن (روی این سیستم هنوز نصب نیست).
2. یک دیتابیس **PostgreSQL** (محلی، یا رایگان از [Neon](https://neon.tech) / [Supabase](https://supabase.com)).
3. یک حساب **Stripe** (حالت test کافی است) + نصب [Stripe CLI](https://stripe.com/docs/stripe-cli) برای تست وبهوک.

## راه‌اندازی

```bash
# ۱. نصب وابستگی‌ها
npm install

# ۲. ساخت فایل env و پر کردن مقادیر
copy .env.example .env
#   سپس DATABASE_URL, AUTH_SECRET, STRIPE_SECRET_KEY,
#   STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PRICE_ID را پر کن.

# تولید AUTH_SECRET:
npx auth secret

# ۳. ساخت جداول دیتابیس
npx prisma migrate dev --name init

# ۴. اجرای برنامه
npm run dev
```

برنامه روی <http://localhost:3000> بالا می‌آید.

## تنظیم Stripe

1. در داشبورد Stripe یک **Product** با یک **Price** ماهانه بساز و شناسه‌ی Price
   (`price_...`) را در `NEXT_PUBLIC_STRIPE_PRICE_ID` بگذار.
2. برای تست وبهوک به‌صورت محلی:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
   کلید `whsec_...` که چاپ می‌شود را در `STRIPE_WEBHOOK_SECRET` بگذار.
3. کارت تست: `4242 4242 4242 4242` با هر تاریخ آینده و هر CVC.

## ساختار پروژه

| مسیر | توضیح |
|------|-------|
| `app/page.tsx` | صفحه فرود (فارسی/RTL) با بخش قیمت‌گذاری |
| `app/(auth)/login`, `app/(auth)/signup` | ورود و ثبت‌نام |
| `app/dashboard` | داشبورد محافظت‌شده (کارکرد اصلی محصول اینجا اضافه می‌شود) |
| `app/dashboard/billing` | وضعیت و مدیریت اشتراک |
| `app/api/stripe/*` | مسیرهای checkout / portal / webhook |
| `auth.ts`, `auth.config.ts`, `middleware.ts` | پیکربندی احراز هویت و محافظت مسیرها |
| `prisma/schema.prisma` | مدل‌های User / Account / Session / Subscription |
| `lib/` | کلاینت‌های Prisma و Stripe و منطق گیت اشتراک |

## مراحل بعدی (خارج از این فاز)

- افزودن کارکرد اصلی محصول به جای placeholder داشبورد.
- ورود با Google/GitHub، چند پلن، کد تخفیف، پنل ادمین.
