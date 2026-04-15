import FinScoreQuiz from "@/components/finscore/FinScoreQuiz";
import { Target } from "lucide-react";

export default function FinScorePage() {
  return (
    <div className="py-6">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20">
          <Target className="w-8 h-8 text-green-400" />
        </div>
        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">
          FinScore <span className="text-green-400">AI Analysis</span>
        </h1>
        <p className="max-w-xl text-gray-400 leading-relaxed">
          Answer a few questions about your financial habits. Our AI will calculate your 
          health score and provide a personalized growth roadmap.
        </p>
      </div>

      <FinScoreQuiz />
    </div>
  );
}
