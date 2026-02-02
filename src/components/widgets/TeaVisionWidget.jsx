import React, { useState, useEffect } from 'react';
import { Camera, Zap, Activity, Info, RefreshCw, Layers } from 'lucide-react';

const TEA_SPECIMENS = [
    { id: 'green', name: '碧螺春', color: '#D9E8B5', oxidation: '15%', confidence: '98.4%', desc: '綠茶：清香，未發酵程度低。' },
    { id: 'oolong', name: '高山烏龍', color: '#F2D388', oxidation: '25%', confidence: '97.2%', desc: '青茶：花香，中輕度發酵。' },
    { id: 'beauty', name: '東方美人', color: '#E9967A', oxidation: '75%', confidence: '99.1%', desc: '烏龍茶：蜜香，重發酵之作。' },
    { id: 'black', name: '紅玉紅茶', color: '#8B0000', oxidation: '95%', confidence: '96.8%', desc: '紅茶：果香，全發酵茶品。' },
    { id: 'puerh', name: '熟普洱', color: '#3E2723', oxidation: '99%', confidence: '95.5%', desc: '黑茶：陳香，後發酵工藝。' },
];

const TeaVisionWidget = () => {
    const [selectedId, setSelectedId] = useState('green');
    const [isScanning, setIsScanning] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    const activeTea = TEA_SPECIMENS.find(t => t.id === selectedId);

    const handleStartScan = () => {
        setIsScanning(true);
        setShowResults(false);
        setScanProgress(0);
    };

    useEffect(() => {
        let interval;
        if (isScanning) {
            interval = setInterval(() => {
                setScanProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsScanning(false);
                        setShowResults(true);
                        return 100;
                    }
                    return prev + 2;
                });
            }, 50);
        }
        return () => clearInterval(interval);
    }, [isScanning]);

    return (
        <div className="flex flex-col gap-5 animate-in fade-in duration-500">
            {/* Scanner Viewport */}
            <div className="relative h-64 bg-stone-900 rounded-2xl overflow-hidden border-4 border-stone-800 shadow-2xl group">
                {/* Simulated Soup Color Area */}
                <div
                    className="absolute inset-0 transition-colors duration-1000 flex items-center justify-center"
                    style={{ backgroundColor: activeTea.color }}
                >
                    {/* Digital Grid Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    {/* Bounding Box Simulation */}
                    <div className="relative w-40 h-40 border-2 border-dashed border-white/40 animate-pulse flex items-center justify-center">
                        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

                        <Camera size={40} className="text-white/20" />
                    </div>
                </div>

                {/* Scan Line Animation */}
                {isScanning && (
                    <div className="absolute w-full h-1 bg-emerald-400/80 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10 animate-scan-y top-0" />
                )}

                {/* Scanning UI Overlays */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                    <div className="bg-black/60 px-2 py-1 rounded text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <Activity size={10} className="animate-pulse" />
                        SYSTEM_ACTIVE
                    </div>
                    {isScanning && (
                        <div className="bg-emerald-500/80 px-2 py-1 rounded text-[10px] font-bold text-white animate-pulse">
                            ANALYZING_{scanProgress}%
                        </div>
                    )}
                </div>

                <div className="absolute bottom-4 right-4 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-sm">
                    <div className="text-[9px] font-mono text-stone-400 uppercase tracking-tighter">Hex_Value</div>
                    <div className="text-xs font-mono text-white font-bold">{activeTea.color}</div>
                </div>
            </div>

            {/* Specimen Selector */}
            <div className="flex gap-2 p-1 bg-stone-100 rounded-xl overflow-x-auto no-scrollbar">
                {TEA_SPECIMENS.map(spec => (
                    <button
                        key={spec.id}
                        onClick={() => { setSelectedId(spec.id); setShowResults(false); }}
                        className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-black transition-all ${selectedId === spec.id ? 'bg-stone-800 text-white shadow-md' : 'text-stone-400 hover:text-stone-600'}`}
                    >
                        {spec.name}
                    </button>
                ))}
            </div>

            {/* Results Panel */}
            <div className="space-y-3">
                {!showResults && !isScanning ? (
                    <button
                        onClick={handleStartScan}
                        className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-md flex items-center justify-center gap-2 group"
                    >
                        <Zap size={18} className="group-hover:scale-125 transition-transform" />
                        開始虛擬辨識
                    </button>
                ) : isScanning ? (
                    <div className="w-full py-3 bg-stone-200 text-stone-500 rounded-xl font-bold text-center flex items-center justify-center gap-2">
                        <RefreshCw size={18} className="animate-spin" />
                        辨識中...
                    </div>
                ) : (
                    <div className="p-4 rounded-xl bg-white border-2 border-emerald-100 shadow-sm animate-in zoom-in-95 duration-300">
                        <div className="grid grid-cols-2 gap-4 mb-3">
                            <div className="space-y-1">
                                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">氧化程度推論</div>
                                <div className="text-lg font-black text-emerald-700">{activeTea.oxidation}</div>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">AI 辨識信心度</div>
                                <div className="text-lg font-black text-blue-600">{activeTea.confidence}</div>
                            </div>
                        </div>
                        <div className="pt-3 border-t border-stone-100">
                            <p className="text-xs text-stone-500 leading-relaxed font-medium">
                                <span className="text-emerald-600 font-bold mr-1">AI 診斷：</span>
                                {activeTea.desc}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeaVisionWidget;
