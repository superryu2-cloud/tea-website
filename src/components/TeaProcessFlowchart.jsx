import React, { useState } from 'react';

/**
 * 臺灣茶製程流程圖元件
 * 一整條橫條設計，無捲動，字體加大
 */

// 定義各茶種的製程路徑
const TEA_PROCESS_PATHS = {
    'biluochun': {
        type: 'green',
        label: '不發酵茶',
        steps: ['茶菁', '殺菁', '揉捻', '乾燥'],
        result: '綠茶'
    },
    'wenshan-pouchong': {
        type: 'teal',
        label: '輕發酵烏龍',
        steps: ['茶菁', '日光萎凋', '室內萎凋', '殺菁', '揉捻', '乾燥'],
        result: '包種茶'
    },
    'high-mountain-oolong': {
        type: 'slate',
        label: '清香型烏龍',
        steps: ['茶菁', '日光萎凋', '室內萎凋', '殺菁', '揉捻', '初乾', '團揉', '再乾'],
        result: '高山茶'
    },
    'dong-ding-oolong': {
        type: 'amber',
        label: '焙香型烏龍',
        steps: ['茶菁', '萎凋', '殺菁', '揉捻', '初乾', '團揉', '再乾', '烘焙'],
        result: '凍頂茶'
    },
    'tieguanyin': {
        type: 'amber',
        label: '重焙火烏龍',
        steps: ['茶菁', '萎凋', '殺菁', '揉捻', '初乾', '團揉', '再乾', '重焙'],
        result: '鐵觀音'
    },
    'oriental-beauty': {
        type: 'rose',
        label: '重發酵烏龍',
        steps: ['著涎', '日光萎凋', '室內萎凋', '靜置回潤', '揉捻', '乾燥'],
        result: '東方美人'
    },
    'red-oolong': {
        type: 'orange',
        label: '重發酵焙火',
        steps: ['茶菁', '萎凋', '揉捻', '發酵', '殺菁', '團揉', '烘焙'],
        result: '紅烏龍'
    },
    'honey-scented-black': {
        type: 'red',
        label: '全發酵茶',
        steps: ['著涎', '萎凋', '揉捻', '發酵', '乾燥'],
        result: '蜜香紅茶'
    },
    'large-small-leaf-black': {
        type: 'red',
        label: '全發酵茶',
        steps: ['茶菁', '萎凋', '揉捻', '發酵', '乾燥'],
        result: '紅茶'
    }
};

// 配色
const TYPE_COLORS = {
    'green': { main: '#059669', light: '#d1fae5', text: '#065f46', track: '#a7f3d0' },
    'teal': { main: '#0d9488', light: '#ccfbf1', text: '#115e59', track: '#5eead4' },
    'slate': { main: '#475569', light: '#e2e8f0', text: '#334155', track: '#94a3b8' },
    'amber': { main: '#d97706', light: '#fef3c7', text: '#92400e', track: '#fcd34d' },
    'rose': { main: '#e11d48', light: '#ffe4e6', text: '#9f1239', track: '#fda4af' },
    'orange': { main: '#ea580c', light: '#ffedd5', text: '#9a3412', track: '#fdba74' },
    'red': { main: '#dc2626', light: '#fee2e2', text: '#991b1b', track: '#fca5a5' }
};

// 解析製程步驟
const parseProcessSteps = (text) => {
    const lines = text.split('\n').filter(line => line.trim());
    const intro = lines[0]?.replace(/\*\*/g, '') || '';
    const steps = [];
    let conclusion = '';

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (/^\d+\./.test(line)) {
            const match = line.match(/^(\d+)\.\s*\*\*([^*]+)\*\*[：:]\s*(.+)$/);
            if (match) {
                steps.push({ num: parseInt(match[1]), title: match[2], content: match[3] });
            } else {
                const simpleMatch = line.match(/^(\d+)\.\s*(.+)$/);
                if (simpleMatch) {
                    steps.push({ num: parseInt(simpleMatch[1]), title: '', content: simpleMatch[2].replace(/\*\*/g, '') });
                }
            }
        } else if (!line.startsWith(' ') && i > steps.length) {
            conclusion = line.replace(/\*\*/g, '');
        }
    }

    return { intro, steps, conclusion };
};

const TeaProcessFlowchart = ({ teaId, processDescription }) => {
    const [activeStep, setActiveStep] = useState(null);

    const pathData = TEA_PROCESS_PATHS[teaId];
    const { intro, steps: detailSteps, conclusion } = parseProcessSteps(processDescription);

    if (!pathData) {
        return (
            <div className="text-stone-600 text-[17px] font-sans leading-relaxed whitespace-pre-line">
                {processDescription.replace(/\*\*/g, '')}
            </div>
        );
    }

    const colors = TYPE_COLORS[pathData.type] || TYPE_COLORS['green'];

    const getStepDetail = (index) => detailSteps.find(s => s.num === index + 1);

    return (
        <div className="space-y-5">
            {/* 製程類型標籤 */}
            <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-bold text-[16px]"
                style={{ background: colors.main }}
            >
                🍃 {pathData.label}
            </div>

            {/* 製程概述 */}
            <p className="text-stone-600 text-[17px] font-sans leading-[1.8]">
                {intro}
            </p>

            {/* 一整條橫條流程圖 */}
            <div className="relative py-2">
                {/* 背景軌道 */}
                <div
                    className="absolute top-6 left-0 right-0 h-2.5 rounded-full"
                    style={{ background: colors.light }}
                />

                {/* 進度軌道 */}
                <div
                    className="absolute top-6 left-0 h-2.5 rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${colors.main}, ${colors.track})`,
                        width: '100%'
                    }}
                />

                {/* 步驟節點 - 平均分佈 */}
                <div className="relative flex justify-between items-start pt-0">
                    {pathData.steps.map((step, index) => {
                        const detail = getStepDetail(index);
                        const isActive = activeStep === index;

                        return (
                            <button
                                key={index}
                                onClick={() => setActiveStep(isActive ? null : index)}
                                className="flex flex-col items-center group"
                                style={{ flex: '1 1 0' }}
                            >
                                {/* 圓點節點 */}
                                <div
                                    className={`
                                        w-10 h-10 rounded-full text-white text-[14px] font-bold 
                                        flex items-center justify-center shadow-md
                                        transition-all duration-200
                                        ${isActive ? 'scale-125 ring-4' : 'hover:scale-110'}
                                    `}
                                    style={{
                                        background: colors.main,
                                        ringColor: `${colors.main}30`
                                    }}
                                >
                                    {index + 1}
                                </div>

                                {/* 步驟名稱 */}
                                <span
                                    className={`
                                        mt-3 text-[15px] font-medium text-center leading-tight
                                        transition-all duration-200 cursor-pointer
                                        ${isActive ? 'font-bold' : ''}
                                    `}
                                    style={{ color: isActive ? colors.main : colors.text }}
                                >
                                    {step}
                                    {detail && <span className="opacity-50 ml-0.5 text-[12px]">{isActive ? '▲' : '▼'}</span>}
                                </span>
                            </button>
                        );
                    })}

                    {/* 最終產品 */}
                    <div
                        className="flex flex-col items-center"
                        style={{ flex: '1 1 0' }}
                    >
                        <div
                            className="w-10 h-10 rounded-full text-white text-[16px] flex items-center justify-center shadow-lg"
                            style={{ background: colors.main }}
                        >
                            🍵
                        </div>
                        <span
                            className="mt-3 text-[15px] font-bold text-center"
                            style={{ color: colors.main }}
                        >
                            {pathData.result}
                        </span>
                    </div>
                </div>
            </div>

            {/* 浮出的說明區塊 */}
            {activeStep !== null && getStepDetail(activeStep) && (
                <div
                    className="p-5 rounded-xl border-2 mt-2"
                    style={{
                        background: colors.light,
                        borderColor: colors.main
                    }}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className="shrink-0 w-9 h-9 rounded-lg text-white text-[16px] font-bold flex items-center justify-center"
                            style={{ background: colors.main }}
                        >
                            {activeStep + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4
                                className="font-bold text-[18px] font-sans mb-1"
                                style={{ color: colors.text }}
                            >
                                {getStepDetail(activeStep).title || pathData.steps[activeStep]}
                            </h4>
                            <p className="text-stone-600 text-[16px] font-sans leading-[1.75]">
                                {getStepDetail(activeStep).content}
                            </p>
                        </div>
                        <button
                            onClick={() => setActiveStep(null)}
                            className="shrink-0 text-stone-400 hover:text-stone-600 text-xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* 提示 */}
            {conclusion && (
                <div className="flex items-start gap-3 py-4 px-5 bg-amber-50 rounded-xl border border-amber-200/60">
                    <span className="text-xl shrink-0">💡</span>
                    <p className="text-amber-800 text-[16px] font-sans leading-relaxed">
                        {conclusion}
                    </p>
                </div>
            )}

            <p className="text-stone-400 text-[14px] text-center">
                點擊步驟查看說明
            </p>
        </div>
    );
};

export default TeaProcessFlowchart;
