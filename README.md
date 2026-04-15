# 🚀 Finnbase Asia: Ready for Launch

Finnbase is a high-performance, AI-powered financial dashboard featuring interactive 3D visualizations, secure authentication, and regional hosting optimizations.

## ✨ Features
- **3D Immersive UI**: Parallax hero scenes and dashboard orbs powered by React Three Fiber.
- **Secure Auth**: Google OAuth & Email/Password via Auth.js (v5) + Supabase.
- **Financial Suite**: Market Intelligence, AI FinScore, Smart Budgeting, and Investment Forecasters.
- **Asia Optimized**: Configured for Mumbai (ap-south-1) for ultra-low latency.
- **Enterprise Grade**: Rate limiting, strict security headers, Sentry error tracking, and PostHog analytics.

## 🛠️ Deployment Steps

### 1. Database (Supabase)
Run the following in your Supabase SQL Editor to enable security:
```sql
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can only view their own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (auth.uid() = id);
```

### 2. Push to GitHub
1. Create a new repository on GitHub.
2. Run these commands inside this folder:
```bash
git init
git add .
git commit -m "Initial launch commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/finnbase.git
git push -u origin main
```

### 3. Deploy to Vercel
1. Import your repository to Vercel.
2. Paste the environment variables from `.env.example` (filled with your actual keys).
3. Set **Functions Region** to **Mumbai, India (ap-south-1)**.
4. Deploy!

## 🛡️ Security & Compliance
- Rate limiting active via Middleware.
- SSL/TLS enforced.
- Privacy & Terms pages live at `/privacy` and `/terms`.
- `security.txt` available for responsible disclosure.

---
© 2026 Finnbase Asia. Built for the future of finance.
