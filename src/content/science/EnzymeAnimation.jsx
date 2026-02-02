import React from 'react';
import { FlaskConical, Wind } from 'lucide-react';

export default function EnzymeAnimation() {
  return (
    <div className="not-prose my-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
      <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
        <h5 className="font-bold text-stone-800 mb-4">PPO 作用示意 (溫和氧化)</h5>
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-2 border-green-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-1"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ppo-leak-2"></div>
          <div className="absolute top-1/4 left-1/4 text-green-600">
            <FlaskConical size={20} />
          </div>
        </div>
        <p className="text-xs text-stone-500 mt-4">
          失水導致細胞膜通透性增加，茶多酚緩慢滲出與PPO酶接觸，產生金黃色茶湯。
        </p>
      </div>

      <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
        <h5 className="font-bold text-stone-800 mb-4">POD 作用示意 (劇烈氧化)</h5>
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-2 border-dashed border-red-500 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 text-blue-400 animate-ping">
            <Wind size={16} />
          </div>
          <div className="absolute inset-2 bg-red-800/30 rounded-full animate-pod-flash"></div>
          <div className="absolute bottom-1/4 left-1/4 text-red-700">
            <FlaskConical size={20} />
          </div>
        </div>
        <p className="text-xs text-stone-500 mt-4">細胞結構破損，氧氣大量介入，POD酶劇烈作用，茶葉快速變紅褐。</p>
      </div>

      <style>
        {`
        @keyframes ppo-leak-1 { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0; } 50% { transform: translate(20px, -30px) scale(1); opacity: 1; } 100% { transform: translate(40px, -60px) scale(0); opacity: 0; } } .animate-ppo-leak-1 { animation: ppo-leak-1 4s infinite ease-in-out; }
        @keyframes ppo-leak-2 { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0; } 50% { transform: translate(-30px, 20px) scale(1); opacity: 1; } 100% { transform: translate(-60px, 40px) scale(0); opacity: 0; } } .animate-ppo-leak-2 { animation: ppo-leak-2 4s infinite ease-in-out 1s; }
        @keyframes pod-flash { 0%, 100% { opacity: 0; } 50% { opacity: 1; } } .animate-pod-flash { animation: pod-flash 1.5s infinite; }
        `}
      </style>
    </div>
  );
}

