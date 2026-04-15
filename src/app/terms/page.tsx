import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-300 p-8 md:p-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/" className="text-green-400 hover:underline text-sm font-bold">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-sm">Last updated: April 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">1. Acceptance of Terms</h2>
          <p>By accessing Finnbase, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">2. No Financial Advice</h2>
          <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-200">
            <strong>DISCLAIMER:</strong> Finnbase provides AI-driven financial insights and calculators for informational purposes only. We are NOT registered financial advisors. No information on this site should be considered professional financial, investment, or legal advice. Always consult with a qualified professional before making financial decisions.
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">3. Limitation of Liability</h2>
          <p>Finnbase and its operators shall not be held liable for any financial losses, data inaccuracies, or damages arising from the use of our tools. Your use of the platform is at your own risk.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">4. Mandatory Arbitration</h2>
          <p>Any dispute or claim relating in any way to your use of Finnbase will be resolved by binding arbitration, rather than in court. You waive your right to participate in a class-action lawsuit or class-wide arbitration.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">5. Acceptable Use</h2>
          <p>You agree not to attempt to bypass security measures, scrape data, or use our platform for any illegal financial activities. We reserve the right to terminate accounts that violate these policies without notice.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white border-b border-white/5 pb-2">6. Governing Law</h2>
          <p>These terms are governed by and construed in accordance with the laws of the jurisdiction where our regional data center is located (Maharashtra, India).</p>
        </section>
      </div>
    </div>
  );
}
