import React, { useState, useEffect } from 'react';
import { Thermometer, Droplets, Wind, Brain, Sparkles, Coffee, Clock, ChevronRight, Activity } from 'lucide-react';

const MOODS = [
    { id: 'fatigue', label: '疲憊', icon: '😫', desc: '需要提神與動力' },
    { id: 'zen', label: '靜心', icon: '🧘', desc: '尋求平衡與寧靜' },
    { id: 'focus', label: '專注', icon: '🧠', desc: '提昇思維敏捷度' },
    { id: 'social', label: '聚會', icon: '👥', desc: '分享快樂與香氣' }
];

const RECOMMENDATIONS = {
    fatigue: {
        tea: '日光紅茶',
        temp: '95°C',
        time: '45-60秒',
        reason: '紅茶的全發酵特性與豐富的咖啡因能迅速補充活力，熟果香氣能撫平疲憊感。',
        color: 'text-red-600',
        bg: 'bg-red-50',
        accent: 'border-red-200'
    },
    zen: {
        tea: '高山烏龍',
        temp: '90-95°C',
        time: '50秒',
        reason: '海拔千公尺的山頭氣息，清幽的花香與軟滑口感，最適合深呼吸後細細品味。',
        color: 'text-sky-600',
        bg: 'bg-sky-50',
        accent: 'border-sky-200'
    },
    focus: {
        tea: '三峽碧螺春',
        temp: '80-85°C',
        time: '3分鐘',
        reason: '綠茶葉綠素與 L-茶氨酸含量高，能讓大腦在平靜中保持高效運作，清新豆香有助於思維。',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        accent: 'border-emerald-200'
    },
    social: {
        tea: '文山包種',
        temp: '90°C',
        time: '40秒',
        reason: '極致的清揚蘭花香氣，香氣傳遞範圍廣，是眾人交流分享的最佳媒介。',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        accent: 'border-amber-200'
    }
};

const AiSommelierWidget = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [envData, setEnvData] = useState({ temp: 24, humidity: 65, wind: '微風' });
    const [result, setResult] = useState(null);

    // Simulated sensor data fluctuation
    useEffect(() => {
        const interval = setInterval(() => {
            setEnvData(prev => ({
                temp: +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1),
                humidity: +(prev.humidity + (Math.random() * 2 - 1)).toFixed(0),
                wind: prev.wind
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleRecommend = (selectedMood) => {
        setIsScanning(true);
        setResult(null);

        // Simulate AI thinking time
        setTimeout(() => {
            setIsScanning(false);
            setResult(RECOMMENDATIONS[selectedMood]);
        }, 2000);
    };

    return (
        <div className="flex flex-col h-full">
            {/* Header: Simulated Sensors */}
            <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 flex items-center gap-2">
                    <Thermometer size={14} className="text-orange-500" />
                    <div>
                        <div className="text-[10px] text-stone-400 font-bold uppercase">Temp</div>
                        <div className="text-sm font-black text-stone-700">{envData.temp}°C</div>
                    </div>
                </div>
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 flex items-center gap-2">
                    <Droplets size={14} className="text-blue-500" />
                    <div>
                        <div className="text-[10px] text-stone-400 font-bold uppercase">Humid</div>
                        <div className="text-sm font-black text-stone-700">{envData.humidity}%</div>
                    </div>
                </div>
                <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 flex items-center gap-2">
                    <Activity size={14} className="text-emerald-500" />
                    <div>
                        <div className="text-[10px] text-stone-400 font-bold uppercase">Status</div>
                        <div className="text-sm font-black text-stone-700">良好</div>
                    </div>
                </div>
            </div>

            {!result && !isScanning && (
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                            <Brain size={32} />
                        </div>
                        <h4 className="text-lg font-black text-stone-800">您現在的心情是？</h4>
                        <p className="text-xs text-stone-500">AI 智能茶師將根據環境與心境為您選茶</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                        {MOODS.map(m => (
                            <button
                                key={m.id}
                                onClick={() => handleRecommend(m.id)}
                                className="group p-4 bg-white border border-stone-200 rounded-2xl hover:border-stone-800 hover:shadow-md transition-all text-left"
                            >
                                <div className="text-2xl mb-2">{m.icon}</div>
                                <div className="font-black text-stone-800 text-sm group-hover:text-stone-900">{m.label}</div>
                                <div className="text-[10px] text-stone-400">{m.desc}</div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {isScanning && (
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative mb-8 text-stone-800">
                        <Brain size={64} className="animate-pulse" />
                        <div className="absolute inset-0 border-4 border-stone-800 rounded-full scale-150 opacity-10 animate-ping"></div>
                    </div>
                    <div className="space-y-3 w-full max-w-[200px]">
                        <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                            <div className="h-full bg-stone-800 animate-progress origin-left"></div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black text-stone-400 uppercase tracking-widest">
                            <span>Analyzing Data</span>
                            <span className="animate-pulse">Loading...</span>
                        </div>
                    </div>
                </div>
            )}

            {result && (
                <div className="flex-1 animate-in zoom-in-95 duration-500 flex flex-col">
                    <div className={`p-5 rounded-3xl border-2 border-dashed ${result.accent} ${result.bg} mb-4 flex-1 flex flex-col justify-center`}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-white p-2 rounded-xl shadow-sm">
                                <Coffee className={result.color} size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] font-black uppercase text-stone-400 tracking-tighter">AI Recommendation</div>
                                <div className={`text-xl font-black ${result.color}`}>{result.tea}</div>
                            </div>
                        </div>
                        <p className="text-sm text-stone-700 leading-relaxed font-medium mb-4 italic">
                            「{result.reason}」
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-white/60 p-3 rounded-2xl">
                                <div className="flex items-center gap-1.5 text-xs font-black text-stone-500 mb-1">
                                    <Thermometer size={12} /> 水溫
                                </div>
                                <div className="text-lg font-black text-stone-800">{result.temp}</div>
                            </div>
                            <div className="bg-white/60 p-3 rounded-2xl">
                                <div className="flex items-center gap-1.5 text-xs font-black text-stone-500 mb-1">
                                    <Clock size={12} /> 時間
                                </div>
                                <div className="text-lg font-black text-stone-800">{result.time}</div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setResult(null)}
                        className="w-full py-3 bg-stone-100 text-stone-600 rounded-2xl font-black text-sm hover:bg-stone-200 transition-colors flex items-center justify-center gap-2"
                    >
                        重新測評 <Sparkles size={14} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default AiSommelierWidget;
