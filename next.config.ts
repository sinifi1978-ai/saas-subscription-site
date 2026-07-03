import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // خروجی کاملاً استاتیک در پوشه‌ی out/ — سبک و بدون نیاز به سرور Node در زمان اجرا.
  // (چون فعلاً بک‌اند/دیتابیس/پرداخت نداریم، این حالت مناسب است.)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
