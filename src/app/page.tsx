import HeroScene from "@/components/3d/HeroScene";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#030712] overflow-hidden">
      {/* 3D Scene in background */}
      <HeroScene />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="inline-flex items-center px-3 py-1 mb-8 text-sm font-medium text-green-400 border border-green-500/20 rounded-full bg-green-500/5 backdrop-blur-sm">
          <span className="mr-2">✨</span> Your AI-Powered Financial Buddy
        </div>
        
        <h1 className="max-w-4xl mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Secure Your Future with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            Finnbase
          </span>
        </h1>

        <p className="max-w-2xl mb-10 text-lg text-gray-400 md:text-xl">
          Master your money with AI-driven insights, 3D visualizations, 
          and personalized investment strategies.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/login"
            className="group flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-green-500 rounded-full hover:bg-green-400 transition-all active:scale-95"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="px-8 py-4 text-lg font-semibold text-white border border-gray-800 rounded-full hover:bg-white/5 transition-all backdrop-blur-md">
            View Demo
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-500">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">Full</span>
            <span className="text-sm">Access Tools</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">99.9%</span>
            <span className="text-sm">Uptime</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">Asia</span>
            <span className="text-sm">Hosting</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">FREE</span>
            <span className="text-sm">Forever</span>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-1" />
    </main>
  );
}
