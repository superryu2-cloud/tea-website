import React, { useState } from 'react';
import { Trophy, CheckCircle2, XCircle, RotateCcw, Share2, HelpCircle, Lightbulb, Gamepad2, ChevronRight } from 'lucide-react';

const ALL_QUESTIONS = [
    {
        id: 1,
        question: "台灣最高海拔的茶園主要分布於哪一個產區？",
        options: ["阿里山茶區", "凍頂山茶區", "大禹嶺茶區", "木柵茶區"],
        answer: 2,
        explanation: "大禹嶺茶園分布於海拔 2,400 至 2,600 公尺的高山，是目前台灣海拔最高的茶區。此地日夜溫差大、終年雲霧繚繞，茶葉生長緩慢，茶湯澄澈且帶有冷冽的「冷香」與甘甜喉韻。"
    },
    {
        id: 2,
        question: "哪一種茶類在製程中需要經歷特有的「悶黃」工序，使其呈現「黃葉黃湯」？",
        options: ["白茶", "黃茶", "青茶（烏龍茶）", "黑茶"],
        answer: 1,
        explanation: "黃茶是輕微後發酵茶，其特有的「悶黃」工序是在濕熱水熱作用下，促使葉綠素水解降解、茶多酚非酶性熱自動氧化，從而形成標誌性的黃葉黃湯，滋味甜潤醇和。"
    },
    {
        id: 3,
        question: "「東方美人茶」（白毫烏龍）獨特的天然蜂蜜與熟果香氣是因何而來的？",
        options: [
            "在高海拔低溫下自然形成",
            "茶樹嫩芽受小綠葉蟬（蜒仔）叮咬吸食",
            "精製過程中噴灑天然蜂蜜與果汁",
            "茶樹與茶園周邊的果樹混種"
        ],
        answer: 1,
        explanation: "東方美人茶必須經由小綠葉蟬叮咬。被叮咬的幼芽在受創後啟動防禦機制，合成了單萜醇與熱帶水果酯類物質，這些化學成分賦予了茶湯高雅的蜂蜜與熟果香。"
    },
    {
        id: 4,
        question: "綠茶在製程中的第一步通常是「殺青」，這一步的最主要目的是什麼？",
        options: [
            "讓茶葉水分降到最低以利儲存",
            "高溫破壞多酚氧化酶活性，防止茶多酚氧化",
            "揉碎茶葉細胞以利茶湯釋出",
            "增加茶葉中咖啡因的活性與濃度"
        ],
        answer: 1,
        explanation: "「殺青」是通過高溫（鍋炒或蒸氣）迅速鈍化鮮葉中的多酚氧化酶活性，阻斷茶多酚的氧化，從而保留綠茶「清湯綠葉」與清鮮爽口的感官特徵。"
    },
    {
        id: 5,
        question: "在茶席佈置中，用於盛放自茶壺倒出的茶湯，以均勻分茶至各品茗杯的器具稱為？",
        options: ["壺承", "茶荷", "勻杯（茶海/公道杯）", "茶則"],
        answer: 2,
        explanation: "勻杯（又稱茶海、公道杯）的主要用途是混合茶湯，使分給每位賓客的茶湯濃度、滋味都均勻一致（故稱「公道」），同時也有沉澱茶渣、降溫的功用。"
    },
    {
        id: 6,
        question: "被譽為茶學聖經、歷史上第一部關於茶的專著《茶經》誕生於哪一個朝代？",
        options: ["唐代", "宋代", "明代", "清代"],
        answer: 0,
        explanation: "陸羽於唐代撰寫了世界上第一部茶學專著《茶經》，系統性地論述了茶的起源、工具、製造、器皿、煮茶與飲茶方式，奠定了茶的學術地位，陸羽也因而被尊為「茶聖」。"
    },
    {
        id: 7,
        question: "文山包種茶是台灣著名的特色茶，它在六大茶類中屬於哪一類？",
        options: ["綠茶", "青茶（部分氧化茶/烏龍茶）", "白茶", "紅茶"],
        answer: 1,
        explanation: "文山包種茶雖然呈現條索狀、外觀翠綠，且茶湯清香爽口，但它在工藝上經歷了輕發酵（約10%~15%）的萎凋與攪拌，因此歸類為「青茶」（部分氧化茶），是台灣發酵度最輕的烏龍茶。"
    },
    {
        id: 8,
        question: "台茶18號（紅玉）紅茶以其獨特香氣聞名於世，其最顯著的風味特徵是？",
        options: ["茉莉花香與龍眼蜜香", "天然肉桂與淡淡薄荷香", "炭焙焦糖底韻", "清香熟栗與麥芽糖甜"],
        answer: 1,
        explanation: "台茶18號（紅玉）是由緬甸大葉種與台灣野生山茶雜交育成。其最大特色是茶湯入喉時，會散發出天然的肉桂香與清涼的薄荷感，被日本紅茶專家譽為台灣特有的「台灣香」。"
    },
    {
        id: 9,
        question: "在宋代，點茶與鬥茶極度興盛，當時人們品茶的主要方式是？",
        options: [
            "將新鮮葉片曬乾直接沖泡",
            "將碎茶與香料鹽巴一起烹煮",
            "將茶餅磨成細粉在盞中以茶筅擊拂出泡沫",
            "將揉捻後的茶葉放在茶壺中沖熱水"
        ],
        answer: 2,
        explanation: "宋代盛行「點茶法」。將蒸青茶餅碾成微細的茶粉（點茶粉），置於建盞中，注入沸水並使用「茶筅」快速擊拂，使其表面產生雪白綿密的泡沫，當時的文人雅士常以此比賽泡沫持久度（稱「鬥茶」）。"
    },
    {
        id: 10,
        question: "黑茶（如普洱熟茶）在製程中藉由微生物參與、促使內含物質劇烈轉化的關鍵工藝是？",
        options: ["殺青", "萎凋", "渥堆", "悶黃"],
        answer: 2,
        explanation: "「渥堆」是黑茶獨有的後發酵工藝。在高溫高濕環境下堆積茶葉，利用有益微生物（如黑麴黴等）產生的酶類催化茶多酚和多糖水解，令原本苦澀的茶葉轉化為香氣醇厚、滑潤回甘的黑茶。"
    }
];

export default function TeaTriviaGame() {
    const [gameState, setGameState] = useState('idle'); // 'idle', 'playing', 'finished'
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showExplanation, setShowExplanation] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [timeTaken, setTimeTaken] = useState(0);
    const [copied, setCopied] = useState(false);

    // Start a new game and randomize questions
    const startNewGame = () => {
        // Shuffle and take 5 questions
        const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, 5);
        setQuestions(shuffled);
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowExplanation(false);
        setStartTime(Date.now());
        setGameState('playing');
    };

    const handleAnswerSelect = (index) => {
        if (selectedAnswer !== null) return; // Prevent multiple selections
        setSelectedAnswer(index);
        setShowExplanation(true);
        if (index === questions[currentIndex]?.answer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentIndex < 4) {
            setCurrentIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            const duration = Math.round((Date.now() - startTime) / 1000);
            setTimeTaken(duration);
            setGameState('finished');
        }
    };

    const getScoreTitle = (finalScore) => {
        if (finalScore === 5) return '👑 神農傳人 (金質滿分)';
        if (finalScore >= 4) return '🍵 首席品茗大師';
        if (finalScore >= 2) return '🌱 雅致茶人';
        return '🍂 茶學初探者';
    };

    const copyResultToClipboard = () => {
        const title = getScoreTitle(score);
        const text = `🏆 我在「茶道大師隨堂挑戰」中答對了 ${score}/5 題！\n🎖️ 榮獲稱號：【${title}】\n⏱️ 挑戰用時：${timeTaken}秒\n\n快來試試你能拿幾分？👇\nhttp://localhost:5173/`; // Replace with actual production domain when available
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12 px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-stone-200 shadow-xl p-8 md:p-10 transition-all duration-300">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60 -z-10" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60 -z-10" />
                
                {/* 1. Start Screen */}
                {gameState === 'idle' && (
                    <div className="text-center space-y-6 py-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shadow-sm">
                            <Gamepad2 className="w-8 h-8" />
                        </div>
                        <div>
                            <span className="text-xs font-black tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase border border-emerald-100">
                                課堂互動小遊戲
                            </span>
                            <h3 className="mt-4 text-3xl font-extrabold text-stone-900 font-serif">茶道大師隨堂挑戰</h3>
                            <p className="mt-3 text-stone-600 max-w-xl mx-auto leading-relaxed">
                                本挑戰緊密連結課堂大綱。每次隨機抽取 5 道經典的歷史、製程、茶席與風土題目。快邀身旁的同學一起作答，看誰能問鼎「神農傳人」！
                            </p>
                        </div>
                        <button
                            onClick={startNewGame}
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 text-white px-8 py-3.5 text-base font-extrabold shadow-md hover:bg-emerald-900 hover:shadow-lg transition-all duration-300 transform active:scale-95"
                        >
                            開始挑戰
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}

                {/* 2. Playing Screen */}
                {gameState === 'playing' && questions.length > 0 && (
                    <div className="space-y-6">
                        {/* Header & Progress */}
                        <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                                    題 {currentIndex + 1} / 5
                                </span>
                            </div>
                            <div className="text-sm font-semibold text-stone-400 font-mono">
                                正確: {score}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-emerald-700 h-full transition-all duration-500" 
                                style={{ width: `${(currentIndex + 1) * 20}%` }}
                            />
                        </div>

                        {/* Question Text */}
                        <h4 className="text-xl md:text-2xl font-bold text-stone-950 font-serif leading-snug">
                            {questions[currentIndex]?.question}
                        </h4>

                        {/* Options */}
                        <div className="grid gap-3.5 mt-6">
                            {questions[currentIndex]?.options?.map((opt, index) => {
                                const isSelected = selectedAnswer === index;
                                const isCorrect = index === questions[currentIndex]?.answer;
                                const hasAnswered = selectedAnswer !== null;

                                let btnClass = "border-stone-200 bg-white text-stone-800 hover:bg-stone-50 hover:border-stone-300";
                                if (hasAnswered) {
                                    if (isCorrect) {
                                        btnClass = "border-emerald-600 bg-emerald-50/50 text-emerald-900 ring-1 ring-emerald-600";
                                    } else if (isSelected) {
                                        btnClass = "border-red-500 bg-red-50/50 text-red-900 ring-1 ring-red-500";
                                    } else {
                                        btnClass = "border-stone-150 bg-stone-50/30 text-stone-400 opacity-60";
                                    }
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(index)}
                                        disabled={hasAnswered}
                                        className={`w-full flex items-center justify-between text-left px-5 py-4 rounded-2xl border text-[16px] font-semibold transition-all duration-300 ${btnClass}`}
                                    >
                                        <span>{opt}</span>
                                        {hasAnswered && isCorrect && <CheckCircle2 size={20} className="text-emerald-700 shrink-0 ml-2" />}
                                        {hasAnswered && isSelected && !isCorrect && <XCircle size={20} className="text-red-600 shrink-0 ml-2" />}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation Box */}
                        {showExplanation && (
                            <div className="mt-6 rounded-2xl bg-amber-50/60 border border-amber-200/50 p-5 space-y-3 transition-all duration-500 animation-slide-up">
                                <div className="flex items-center gap-2 text-amber-800 font-bold">
                                    <Lightbulb size={18} />
                                    <span>大師解析</span>
                                </div>
                                <p className="text-[15px] text-stone-700 leading-relaxed font-medium">
                                    {questions[currentIndex]?.explanation}
                                </p>
                                <div className="pt-2 flex justify-end">
                                    <button
                                        onClick={handleNextQuestion}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 text-white px-6 py-2.5 text-[15px] font-extrabold shadow-sm hover:bg-emerald-900 transition-colors"
                                    >
                                        {currentIndex < 4 ? "下一題" : "查看結果"}
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* 3. Finished / Result Screen */}
                {gameState === 'finished' && (
                    <div className="text-center space-y-6 py-6">
                        <div className="w-20 h-20 mx-auto rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-md animate-bounce">
                            <Trophy className="w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-stone-900 font-serif">挑戰完成！</h3>
                            <div className="mt-3 text-lg font-bold text-emerald-800">
                                答對題數：{score} / 5
                            </div>
                            <div className="mt-2 text-2xl font-black text-amber-600 tracking-wide font-serif">
                                {getScoreTitle(score)}
                            </div>
                            <p className="mt-2 text-sm text-stone-400">
                                總共花費時間：{timeTaken} 秒
                            </p>
                        </div>
                        <div className="h-px bg-stone-100 max-w-sm mx-auto" />
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={startNewGame}
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-stone-200 bg-white px-6 py-3 text-[15px] font-extrabold text-stone-800 hover:bg-stone-50 transition-colors"
                            >
                                <RotateCcw size={16} />
                                再考一次
                            </button>
                            <button
                                onClick={copyResultToClipboard}
                                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-emerald-800 text-white px-6 py-3 text-[15px] font-extrabold shadow-sm hover:bg-emerald-900 transition-colors"
                            >
                                <Share2 size={16} />
                                {copied ? "已複製成績！" : "分享戰績給同學"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
