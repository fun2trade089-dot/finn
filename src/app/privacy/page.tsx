import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-300 p-8 md:p-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/" className="text-green-400 hover:underline text-sm font-bold">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-sm">Last updated: April 2026</p>
        
        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-200 text-sm italic mb-10">
          Finnbase is optimized for the Asia region. Your personal data is stored and processed primarily in our regional data center in Mumbai (ap-south-1).
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">1. Data We Collect</h2>
          <p>We collect personal information that you voluntarily provide, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> Name and email address provided during signup.</li>
            <li><strong>Financial Data:</strong> Transaction history, income, and savings data entered for tracking.</li>
            <li><strong>Device Data:</strong> IP address, browser type, and operating system for security and analytics.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">2. How We Use Data</h2>
          <p>Your data is used strictly for providing our financial dashboard services, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Generating AI-driven financial insights and advice.</li>
            <li>Calculating your FinScore based on provided metrics.</li>
            <li>Maintaining the security and stability of our platform.</li>
          </ul>
          <p className="font-bold text-white">We do not sell your personal data to third parties.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">3. Third-Party Analytics & SDKs</h2>
          <p>We utilize industry-standard tools to monitor performance and usage:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>PostHog:</strong> For understanding user behavior and improving the UI.</li>
            <li><strong>Sentry:</strong> For real-time error tracking and crash reporting.</li>
            <li><strong>Supabase:</strong> For secure database management and authentication.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">4. Your Rights (GDPR/CCPA)</h2>
          <p>Regardless of your location, we provide global data rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access & Export:</strong> Request a copy of all data we hold about you.</li>
            <li><strong>Deletion:</strong> Request that we permanently delete your account and all associated data.</li>
            <li><strong>Opt-out:</strong> You can opt-out of non-essential tracking via our cookie consent banner.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">5. Contact</h2>
          <p>For any privacy-related inquiries or data deletion requests, contact us at: <span className="text-green-400 font-mono">privacy@finnbase.com</span></p>
        </section>
      </div>
    </div>
  );
}
