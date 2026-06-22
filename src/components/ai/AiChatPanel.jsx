import React, { useState, useRef, useEffect } from 'react';
import { queryKnowledge } from '../../data/quizData';
import { X, Send, Leaf } from 'lucide-react';

const QUICK_CHIPS = ['六大茶類是什麼？', '如何沖泡烏龍茶？', '冬片茶是什麼？', '推薦學習路線', '什麼是岩韻？', '茶胺酸有什麼功效？'];

const FALLBACKS = [
    '這個問題很好！建議從「六大茶類」章節開始探索，或者試試左邊的診斷問卷，讓我幫你規劃個人路線 🍃',
    '我的知識庫還在成長中！試試問我關於烏龍茶、東方美人、岩茶、製程或沖泡的問題 📚',
    '這個範圍有點廣～你可以換個方式問，或點擊上方快速按鈕試試 ☕',
];

function botReply(input) {
    const ans = queryKnowledge(input);
    if (ans) return ans;
    return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
}

function getReplyDelayMs() {
    return 600 + Math.random() * 400;
}

export default function AiChatPanel({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        { role: 'bot', text: '你好！我是**茶識 AI**，熟悉這個網站的所有茶知識 🍵\n\n你可以問我任何關於茶的問題，或點擊下方快速提問！' },
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    function send(text) {
        const q = (text || input).trim();
        if (!q) return;
        setInput('');
        setMessages((m) => [...m, { role: 'user', text: q }]);
        setTyping(true);
        setTimeout(() => {
            const reply = botReply(q);
            setMessages((m) => [...m, { role: 'bot', text: reply }]);
            setTyping(false);
        }, getReplyDelayMs());
    }

    if (!isOpen) return null;

    return (
	        <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+4.75rem)] right-4 z-[9999] flex w-[calc(100vw-2rem)] max-w-[340px] flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl md:bottom-24 md:right-6 md:w-[380px] md:max-w-[380px]" style={{ maxHeight: '70vh' }}>
            {/* 標題列 */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-teal-600 to-emerald-600">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Leaf size={16} className="text-white" />
                </div>
                <div className="flex-1">
                    <p className="font-sans text-[18px] font-extrabold text-white">茶識 AI</p>
                    <p className="font-sans text-[14px] text-white/70">問我任何茶的問題</p>
                </div>
                <button onClick={onClose} className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                    <X size={14} className="text-white" />
                </button>
            </div>

            {/* 快速按鈕 */}
            <div className="px-3 py-2.5 border-b border-stone-100 flex gap-1.5 overflow-x-auto scrollbar-hide">
                {QUICK_CHIPS.map((c) => (
                    <button
                        key={c}
                        onClick={() => send(c)}
                        className="shrink-0 text-[14px] font-semibold text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-3 py-1.5 hover:bg-teal-100 transition-colors whitespace-nowrap"
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* 訊息區 */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {m.role === 'bot' && (
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                                <Leaf size={13} className="text-white" />
                            </div>
                        )}
                        <div
                            className={`max-w-[78%] rounded-2xl px-4 py-3 text-[16px] leading-relaxed font-sans ${m.role === 'user'
                                ? 'bg-emerald-600 text-white rounded-br-md'
                                : 'bg-stone-100 text-stone-800 rounded-bl-md'
                                }`}
                            dangerouslySetInnerHTML={{
                                __html: m.text
                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                    .replace(/\n/g, '<br/>'),
                            }}
                        />
                    </div>
                ))}
                {typing && (
                    <div className="flex justify-start">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                            <Leaf size={13} className="text-white" />
                        </div>
                        <div className="bg-stone-100 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1 items-center">
                            {[0, 1, 2].map((i) => (
                                <span key={i} className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                            ))}
                        </div>
                    </div>
                )}
                <div ref={bottomRef} />
            </div>

            {/* 輸入框 */}
            <div className="px-3 py-3 border-t border-stone-100 flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                    placeholder="輸入你的問題..."
                    className="flex-1 bg-stone-100 rounded-full px-4 py-2.5 text-[16px] font-sans text-stone-800 placeholder-stone-400 outline-none focus:ring-2 focus:ring-teal-400 transition"
                />
                <button
                    onClick={() => send()}
                    className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center shrink-0 transition-colors"
                >
                    <Send size={15} className="text-white" />
                </button>
            </div>
        </div>
    );
}
