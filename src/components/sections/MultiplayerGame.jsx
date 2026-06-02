import React, { useState, useEffect, useRef } from 'react';
import { Users, Trophy, Play, CheckCircle2, XCircle, Clock, Loader2, RefreshCw, AlertCircle, Award, Crown, ArrowRight, Share2, Copy } from 'lucide-react';

const QUESTIONS_POOL = [
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
        explanation: "宋代盛行「點茶法」。將蒸青茶餅碾成微細的茶粉（點茶粉），置於建盞中，注水後用茶筅快速擊拂，使茶湯表面產生雪白綿密的泡沫，當時的文人雅士常以此比賽泡沫持久度（稱「鬥茶」）。"
    },
    {
        id: 10,
        question: "黑茶（如普洱熟茶）在製程中藉由微生物參與、促使內含物質劇烈轉化的關鍵工藝是？",
        options: ["殺青", "萎凋", "渥堆", "悶黃"],
        answer: 2,
        explanation: "「渥堆」是黑茶獨有的後發酵工藝。在高溫高濕環境下堆積茶葉，利用有益微生物（如黑麴黴等）產生的酶類催化茶多酚和多糖水解，令原本苦澀的茶葉轉化為香氣醇厚、滑潤回甘的黑茶。"
    }
];

// Helper to asynchronously load MQTT from CDN
const loadMqttLib = () => {
    return new Promise((resolve, reject) => {
        if (window.mqtt) {
            resolve(window.mqtt);
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/mqtt@4.3.7/dist/mqtt.min.js';
        script.async = true;
        script.onload = () => resolve(window.mqtt);
        script.onerror = () => reject(new Error('Failed to load MQTT client'));
        document.head.appendChild(script);
    });
};

export default function MultiplayerGame() {
    const [mqttLoaded, setMqttLoaded] = useState(false);
    const [mqttError, setMqttError] = useState(null);
    const [mode, setMode] = useState('select'); // 'select', 'host_lobby', 'host_playing', 'host_result', 'player_join', 'player_waiting', 'player_playing', 'player_round_result', 'player_finished'
    
    // MQTT Client Ref
    const clientRef = useRef(null);
    
    // Common State
    const [roomId, setRoomId] = useState('');
    const [nickname, setNickname] = useState('');
    const [playerId, setPlayerId] = useState('');
    
    // Host States
    const [players, setPlayers] = useState([]); // Array of { id, name, score }
    const [gameQuestions, setGameQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionActive, setQuestionActive] = useState(false);
    const [timerCount, setTimerCount] = useState(20);
    const [answersReceived, setAnswersReceived] = useState([]); // Array of { playerId, isCorrect, points }
    const timerIntervalRef = useRef(null);
    const questionStartTimeRef = useRef(null);
    const currentQuestionIndexRef = useRef(0);

    // Player States
    const [playerScore, setPlayerScore] = useState(0);
    const [playerRank, setPlayerRank] = useState(1);
    const [playerSelectedAnswer, setPlayerSelectedAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [pointsGained, setPointsGained] = useState(0);
    const [playerStatusMsg, setPlayerStatusMsg] = useState('正在等待主持人開始遊戲...');

    // Load MQTT on mount
    useEffect(() => {
        loadMqttLib()
            .then(() => setMqttLoaded(true))
            .catch((err) => setMqttError('無法連線到多人遊戲伺服器，請檢查網路連線。'));

        // Check URL for join room parameter
        const params = new URLSearchParams(window.location.search);
        const roomFromUrl = params.get('room');
        if (roomFromUrl) {
            setRoomId(roomFromUrl);
            setPlayerId(`usr_${Math.random().toString(36).substr(2, 9)}`);
            setMode('player_join');
        }

        return () => {
            if (clientRef.current) {
                clientRef.current.end();
            }
            if (timerIntervalRef.current) {
                clearInterval(timerIntervalRef.current);
            }
        };
    }, []);

    // Create a room as Host
    const createRoom = () => {
        if (!window.mqtt) return;
        const generatedRoomId = Math.floor(1000 + Math.random() * 9000).toString();
        setRoomId(generatedRoomId);
        
        // Connect to public broker
        const client = window.mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
            clientId: `host_${Math.random().toString(36).substr(2, 9)}`,
            keepalive: 60
        });

        client.on('connect', () => {
            // Subscribe to join topic and answer topic
            client.subscribe(`teaparty/${generatedRoomId}/join`, (err) => {
                if (err) console.error('Subscribe join failed', err);
            });
            client.subscribe(`teaparty/${generatedRoomId}/answer`, (err) => {
                if (err) console.error('Subscribe answer failed', err);
            });
            setMode('host_lobby');
            
            // Broadcast initial lobby status
            broadcastState(client, generatedRoomId, {
                status: 'lobby',
                roomId: generatedRoomId
            });
        });

        client.on('message', (topic, message) => {
            try {
                const payload = JSON.parse(message.toString());
                if (topic === `teaparty/${generatedRoomId}/join`) {
                    handlePlayerJoin(payload);
                } else if (topic === `teaparty/${generatedRoomId}/answer`) {
                    handlePlayerAnswer(payload);
                }
            } catch (e) {
                console.error('Error parsing MQTT message', e);
            }
        });

        clientRef.current = client;
    };

    // Join a room as Player
    const joinRoom = () => {
        if (!roomId || !nickname || !window.mqtt) return;
        
        const client = window.mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
            clientId: playerId,
            keepalive: 60
        });

        client.on('connect', () => {
            // Subscribe to status/state broadcasts
            client.subscribe(`teaparty/${roomId}/state`, (err) => {
                if (err) {
                    console.error('Subscribe state failed', err);
                    return;
                }
                
                // Publish join request
                client.publish(`teaparty/${roomId}/join`, JSON.stringify({
                    id: playerId,
                    name: nickname
                }));
                
                setMode('player_waiting');
            });
        });

        client.on('message', (topic, message) => {
            if (topic === `teaparty/${roomId}/state`) {
                try {
                    const state = JSON.parse(message.toString());
                    handleServerStateUpdate(state);
                } catch (e) {
                    console.error('Error parsing state', e);
                }
            }
        });

        clientRef.current = client;
    };

    // Handle Player Joining (Host Side)
    const handlePlayerJoin = (playerInfo) => {
        setPlayers(prev => {
            if (prev.some(p => p.id === playerInfo.id)) return prev;
            const updated = [...prev, { id: playerInfo.id, name: playerInfo.name, score: 0 }];
            
            // Notify players of new lobby status with updated list
            broadcastState(clientRef.current, roomId, {
                status: 'lobby',
                roomId: roomId,
                players: updated
            });
            return updated;
        });
    };

    // Handle Player Submitting Answer (Host Side)
    const handlePlayerAnswer = (answerInfo) => {
        // answerInfo: { playerId, questionIndex, answerIndex, timeSpent }
        setAnswersReceived(prev => {
            // Check if already answered in this round
            if (prev.some(a => a.playerId === answerInfo.playerId)) return prev;
            
            const question = gameQuestions[currentQuestionIndexRef.current];
            if (!question) return prev;
            const isCorrect = answerInfo.answerIndex === question.answer;
            
            // Points formula: max 1000, decreasing with time
            let points = 0;
            if (isCorrect) {
                const timeFactor = Math.max(0, (20 - answerInfo.timeSpent) / 20); // 0 to 1
                points = Math.round(500 + 500 * timeFactor);
            }

            const newAnswer = {
                playerId: answerInfo.playerId,
                isCorrect,
                points
            };
            
            const nextAnswers = [...prev, newAnswer];
            
            // If all active players answered, end the timer early
            if (nextAnswers.length >= players.length) {
                endQuestionRound();
            }

            return nextAnswers;
        });
    };

    // Update Player State from Host Broadcast (Player Side)
    const handleServerStateUpdate = (state) => {
        if (state.status === 'lobby') {
            setPlayerStatusMsg(`已進入大廳！等待主持人開始... (目前共有 ${state.players ? state.players.length : 1} 人)`);
        } else if (state.status === 'playing') {
            setCurrentQuestion(state.question);
            setPlayerSelectedAnswer(null);
            setIsAnswerCorrect(null);
            setPointsGained(0);
            setMode('player_playing');
        } else if (state.status === 'round_end') {
            // Check own results from host broadcast
            const myResult = state.answers.find(a => a.playerId === playerId);
            if (myResult) {
                setIsAnswerCorrect(myResult.isCorrect);
                setPointsGained(myResult.points);
                setPlayerScore(prev => prev + myResult.points);
            } else {
                // If didn't answer in time
                setIsAnswerCorrect(false);
                setPointsGained(0);
            }
            
            // Set current ranking
            if (state.leaderboard) {
                const myRank = state.leaderboard.findIndex(p => p.id === playerId) + 1;
                setPlayerRank(myRank > 0 ? myRank : 1);
            }
            setMode('player_round_result');
        } else if (state.status === 'finished') {
            if (state.leaderboard) {
                const myRank = state.leaderboard.findIndex(p => p.id === playerId) + 1;
                setPlayerRank(myRank > 0 ? myRank : 1);
            }
            setMode('player_finished');
        }
    };

    // Helper for Host to Broadcast Game State
    const broadcastState = (client, rId, data) => {
        if (!client || !rId) return;
        client.publish(`teaparty/${rId}/state`, JSON.stringify(data));
    };

    // Host Starts Game
    const hostStartGame = () => {
        if (players.length === 0) return; // Need players
        // Select 5 random questions
        const selected = [...QUESTIONS_POOL].sort(() => 0.5 - Math.random()).slice(0, 5);
        setGameQuestions(selected);
        setCurrentQuestionIndex(0);
        currentQuestionIndexRef.current = 0;
        setAnswersReceived([]);
        
        setMode('host_playing');
        startQuestion(selected[0], 0);
    };

    const startQuestion = (q, index) => {
        setQuestionActive(true);
        setTimerCount(20);
        setAnswersReceived([]);
        questionStartTimeRef.current = Date.now();
        
        broadcastState(clientRef.current, roomId, {
            status: 'playing',
            question: {
                question: q.question,
                options: q.options,
                index: index
            }
        });

        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        
        timerIntervalRef.current = setInterval(() => {
            setTimerCount(prev => {
                if (prev <= 1) {
                    clearInterval(timerIntervalRef.current);
                    endQuestionRound();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const endQuestionRound = () => {
        clearInterval(timerIntervalRef.current);
        setQuestionActive(false);

        // Update scores for this round in main players array
        setPlayers(prevPlayers => {
            const updatedPlayers = prevPlayers.map(p => {
                const answer = answersReceived.find(a => a.playerId === p.id);
                const points = answer ? answer.points : 0;
                return { ...p, score: p.score + points };
            });

            // Sort by score for leaderboard
            const sortedLeaderboard = [...updatedPlayers].sort((a, b) => b.score - a.score);

            // Broadcast round end, correct answer, explanation, and leaderboard to players
            broadcastState(clientRef.current, roomId, {
                status: 'round_end',
                correctAnswer: gameQuestions[currentQuestionIndexRef.current]?.answer,
                answers: answersReceived,
                leaderboard: sortedLeaderboard
            });

            return updatedPlayers;
        });
    };

    const hostNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < 5) {
            setCurrentQuestionIndex(nextIndex);
            currentQuestionIndexRef.current = nextIndex;
            startQuestion(gameQuestions[nextIndex], nextIndex);
        } else {
            // Game Finished
            const sortedLeaderboard = [...players].sort((a, b) => b.score - a.score);
            broadcastState(clientRef.current, roomId, {
                status: 'finished',
                leaderboard: sortedLeaderboard
            });
            setMode('host_result');
        }
    };

    // Player submits answer
    const playerSubmitAnswer = (index) => {
        if (playerSelectedAnswer !== null || !clientRef.current) return;
        setPlayerSelectedAnswer(index);
        
        const timeSpent = (Date.now() - questionStartTimeRef.current) / 1000;
        
        clientRef.current.publish(`teaparty/${roomId}/answer`, JSON.stringify({
            playerId: playerId,
            questionIndex: currentQuestion ? currentQuestion.index : 0,
            answerIndex: index,
            timeSpent: timeSpent
        }));
    };

    // Quit/Reset Game
    const exitGame = () => {
        if (clientRef.current) {
            clientRef.current.end();
            clientRef.current = null;
        }
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
        }
        setMode('select');
        setPlayers([]);
        setAnswersReceived([]);
        setRoomId('');
        setNickname('');
        setPlayerScore(0);
        setPlayerSelectedAnswer(null);
    };

    const shareRoomLink = () => {
        const url = `${window.location.origin}${window.location.pathname}?tab=course&room=${roomId}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('房間連結已複製！發送給同學即可點擊直接加入。');
        });
    };

    if (!mqttLoaded) {
        return (
            <div className="flex flex-col items-center justify-center p-8 border border-stone-200 rounded-3xl bg-white/80 min-h-[300px]">
                {mqttError ? (
                    <div className="text-center space-y-4">
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                        <p className="text-stone-800 font-bold text-lg">{mqttError}</p>
                        <button onClick={() => window.location.reload()} className="px-5 py-2.5 bg-emerald-800 text-white rounded-full text-sm font-bold flex items-center gap-2 mx-auto">
                            <RefreshCw size={14} /> 重新嘗試
                        </button>
                    </div>
                ) : (
                    <div className="text-center space-y-4">
                        <Loader2 className="w-10 h-10 text-emerald-800 animate-spin mx-auto" />
                        <p className="text-stone-500 font-bold">正在連線至多端互動系統...</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto my-6 px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-stone-200 shadow-xl p-6 md:p-10 transition-all duration-300">
                {/* 1. Mode Selection Screen */}
                {mode === 'select' && (
                    <div className="text-center space-y-8 py-6">
                        <div className="max-w-md mx-auto">
                            <span className="text-xs font-black tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full uppercase border border-emerald-100">
                                Realtime Multiplayer Quiz
                            </span>
                            <h3 className="mt-4 text-3xl font-extrabold text-stone-900 font-serif">多人即時搶答挑戰賽</h3>
                            <p className="mt-3 text-stone-600 text-[15px] leading-relaxed">
                                專為茶會、課堂設計的互動機制。主持人開啟大螢幕投影，同學用手機掃描二維碼即可加入搶答，計分標準結合正確率與答題速度！
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                            <button
                                onClick={createRoom}
                                className="flex flex-col p-6 rounded-3xl border border-emerald-100 bg-emerald-50/20 hover:bg-emerald-50/50 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 text-left group"
                            >
                                <span className="p-3 rounded-2xl bg-emerald-800 text-white w-fit group-hover:scale-110 transition-transform">
                                    <Crown size={20} />
                                </span>
                                <h4 className="mt-4 text-xl font-bold text-emerald-950 font-serif">我是主持人 (投影端)</h4>
                                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                                    建立專屬茶會房間，在大螢幕/投影上展示題目與即時排行榜。
                                </p>
                            </button>

                            <div className="flex flex-col p-6 rounded-3xl border border-amber-100 bg-amber-50/10 hover:bg-amber-50/30 hover:border-amber-300 transition-all duration-300">
                                <span className="p-3 rounded-2xl bg-amber-600 text-white w-fit">
                                    <Users size={20} />
                                </span>
                                <h4 className="mt-4 text-xl font-bold text-amber-950 font-serif">我是同學 (手機/作答端)</h4>
                                <div className="mt-3 space-y-2">
                                    <input 
                                        type="text" 
                                        placeholder="輸入 4 位房間號" 
                                        value={roomId}
                                        onChange={(e) => setRoomId(e.target.value.replace(/\D/g,'').slice(0, 4))}
                                        className="w-full px-3.5 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
                                    />
                                    <button
                                        onClick={() => {
                                            if (roomId.length === 4) {
                                                setPlayerId(`usr_${Math.random().toString(36).substr(2, 9)}`);
                                                setMode('player_join');
                                            } else {
                                                alert('請輸入 4 位數房間號！');
                                            }
                                        }}
                                        className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm flex items-center justify-center gap-1.5"
                                    >
                                        進入房間 <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. Host Lobby (Waiting for Players) */}
                {mode === 'host_lobby' && (
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-stone-100 pb-5 gap-4">
                            <div>
                                <h3 className="text-2xl font-black text-stone-900 font-serif">等待玩家加入...</h3>
                                <p className="text-sm text-stone-400 mt-1">請同學掃描右方二維碼或輸入房間號碼加入</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={shareRoomLink} className="px-4 py-2 border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 shadow-sm">
                                    <Copy size={12} /> 複製連結
                                </button>
                                <button onClick={exitGame} className="px-4 py-2 border border-red-200 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 flex items-center gap-1.5">
                                    解散房間
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-[1fr_250px] gap-8 items-center">
                            {/* Left: Players List */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-stone-500 font-bold">
                                    <Users size={18} />
                                    <span>已加入的玩家 ({players.length} 人)</span>
                                </div>
                                {players.length === 0 ? (
                                    <div className="border-2 border-dashed border-stone-200 rounded-2xl p-12 text-center text-stone-400">
                                        暫時沒有玩家加入，等大家掃碼進入...
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[250px] overflow-y-auto">
                                        {players.map(p => (
                                            <div key={p.id} className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-center font-bold text-stone-800 truncate shadow-sm">
                                                {p.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {players.length > 0 && (
                                    <button
                                        onClick={hostStartGame}
                                        className="w-full py-4 bg-emerald-800 text-white font-black rounded-2xl shadow-md hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 text-lg"
                                    >
                                        <Play size={18} /> 開始遊戲
                                    </button>
                                )}
                            </div>

                            {/* Right: QR Code */}
                            <div className="flex flex-col items-center justify-center border border-stone-200 rounded-3xl p-4 bg-stone-50">
                                <div className="text-[12px] font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 mb-3 tracking-widest">
                                    掃碼即刻加入
                                </div>
                                <img 
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${window.location.origin}${window.location.pathname}?tab=course&room=${roomId}`)}`}
                                    alt="Room QR Code"
                                    className="w-[180px] h-[180px] bg-white border rounded-xl p-2 shadow-inner"
                                />
                                <div className="mt-3 text-center">
                                    <span className="text-[11px] text-stone-400 uppercase tracking-wider block">房間代碼</span>
                                    <span className="text-3xl font-black text-stone-900 font-mono tracking-wider">{roomId}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. Host Playing (Question Screen / Active Timer) */}
                {mode === 'host_playing' && gameQuestions.length > 0 && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                                    第 {currentQuestionIndex + 1} / 5 題
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-amber-600 font-mono font-bold">
                                <Clock size={16} />
                                <span>{timerCount}s</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-2xl md:text-3xl font-bold text-stone-950 font-serif leading-snug">
                                {gameQuestions[currentQuestionIndex].question}
                            </h4>
                            
                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                                {gameQuestions[currentQuestionIndex]?.options?.map((opt, i) => {
                                    const isCorrect = i === gameQuestions[currentQuestionIndex]?.answer;
                                    const showAnswer = !questionActive;
                                    return (
                                        <div 
                                            key={i} 
                                            className={`p-5 rounded-2xl border text-[16px] font-semibold transition-all duration-300 ${
                                                showAnswer 
                                                    ? isCorrect 
                                                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-600'
                                                        : 'border-stone-150 bg-stone-50/50 text-stone-400 opacity-60'
                                                    : 'border-stone-200 bg-white text-stone-800'
                                            }`}
                                        >
                                            <span className="inline-block mr-2 text-stone-400 font-mono">{String.fromCharCode(65 + i)}.</span>
                                            {opt}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Status info */}
                            <div className="flex justify-between items-center pt-4 text-sm text-stone-500">
                                <div>
                                    已作答人數: <span className="font-bold text-stone-800">{answersReceived.length}</span> / {players.length}
                                </div>
                                {!questionActive && (
                                    <button
                                        onClick={hostNextQuestion}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 text-white px-6 py-2.5 text-[15px] font-extrabold shadow-sm hover:bg-emerald-900 transition-colors"
                                    >
                                        {currentQuestionIndex < 4 ? "下一題" : "查看最終排行"}
                                        <ArrowRight size={16} />
                                    </button>
                                )}
                            </div>

                            {/* Round End Explanation */}
                            {!questionActive && (
                                <div className="mt-6 rounded-2xl bg-amber-50/60 border border-amber-200/50 p-5 space-y-2">
                                    <div className="flex items-center gap-2 text-amber-800 font-bold">
                                        <Lightbulb size={18} />
                                        <span>大師解析</span>
                                    </div>
                                    <p className="text-[15px] text-stone-700 leading-relaxed font-medium">
                                        {gameQuestions[currentQuestionIndex].explanation}
                                    </p>
                                </div>
                            )}

                            {/* Live Leaderboard for this round */}
                            {!questionActive && players.length > 0 && (
                                <div className="mt-6 border border-stone-200 rounded-3xl p-6 bg-stone-50/50">
                                    <h5 className="text-[15px] font-black text-stone-800 mb-4 tracking-wider uppercase">當前積分排行</h5>
                                    <div className="space-y-2">
                                        {[...players].sort((a,b) => b.score - a.score).slice(0, 3).map((p, idx) => (
                                            <div key={p.id} className="flex justify-between items-center bg-white border border-stone-150 rounded-xl px-4 py-2.5">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-500">{idx + 1}</span>
                                                    <span className="font-bold text-stone-850">{p.name}</span>
                                                </div>
                                                <span className="font-mono font-bold text-emerald-800">{p.score} pts</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* 4. Host Final Results (Podium) */}
                {mode === 'host_result' && (
                    <div className="text-center space-y-8 py-6">
                        <div className="max-w-md mx-auto">
                            <span className="text-xs font-black tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full uppercase border border-amber-100">
                                Game Over
                            </span>
                            <h3 className="mt-4 text-3xl font-extrabold text-stone-900 font-serif">頒獎典禮</h3>
                        </div>

                        {/* Podium Display */}
                        <div className="flex justify-center items-end gap-3 max-w-lg mx-auto py-8">
                            {/* 2nd Place */}
                            {players.length > 1 && (
                                <div className="flex flex-col items-center">
                                    <span className="text-sm font-bold text-stone-700 mb-2 truncate max-w-[100px]">{[...players].sort((a,b) => b.score - a.score)[1].name}</span>
                                    <div className="w-[100px] bg-stone-200 border-t-4 border-stone-300 h-28 flex flex-col items-center justify-center rounded-t-xl shadow-md">
                                        <Award size={28} className="text-stone-500" />
                                        <span className="text-2xl font-black text-stone-700 font-mono mt-1">2</span>
                                        <span className="text-xs font-bold text-stone-500 mt-1">{[...players].sort((a,b) => b.score - a.score)[1].score} pts</span>
                                    </div>
                                </div>
                            )}

                            {/* 1st Place */}
                            {players.length > 0 && (
                                <div className="flex flex-col items-center">
                                    <Crown size={32} className="text-amber-500 animate-bounce mb-1" />
                                    <span className="text-base font-bold text-amber-900 mb-2 truncate max-w-[120px]">{[...players].sort((a,b) => b.score - a.score)[0].name}</span>
                                    <div className="w-[120px] bg-amber-100 border-t-4 border-amber-300 h-36 flex flex-col items-center justify-center rounded-t-xl shadow-lg relative">
                                        <Trophy size={32} className="text-amber-600" />
                                        <span className="text-3xl font-black text-amber-700 font-mono mt-1">1</span>
                                        <span className="text-sm font-bold text-amber-800 mt-1">{[...players].sort((a,b) => b.score - a.score)[0].score} pts</span>
                                    </div>
                                </div>
                            )}

                            {/* 3rd Place */}
                            {players.length > 2 && (
                                <div className="flex flex-col items-center">
                                    <span className="text-sm font-bold text-orange-700 mb-2 truncate max-w-[100px]">{[...players].sort((a,b) => b.score - a.score)[2].name}</span>
                                    <div className="w-[100px] bg-orange-50 border-t-4 border-orange-200 h-20 flex flex-col items-center justify-center rounded-t-xl shadow-md">
                                        <Award size={28} className="text-orange-500" />
                                        <span className="text-2xl font-black text-orange-700 font-mono mt-1">3</span>
                                        <span className="text-xs font-bold text-orange-600 mt-1">{[...players].sort((a,b) => b.score - a.score)[2].score} pts</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Full Rankings list */}
                        {players.length > 3 && (
                            <div className="max-w-md mx-auto border border-stone-200 rounded-3xl p-6 bg-stone-50/50">
                                <h5 className="text-sm font-black text-stone-600 mb-4 tracking-wider uppercase">完整排名</h5>
                                <div className="space-y-2">
                                    {[...players].sort((a,b) => b.score - a.score).slice(3).map((p, idx) => (
                                        <div key={p.id} className="flex justify-between items-center bg-white border border-stone-150 rounded-xl px-4 py-2.5">
                                            <span className="font-bold text-stone-700">{idx + 4}. {p.name}</span>
                                            <span className="font-mono text-stone-500">{p.score} pts</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={exitGame}
                                className="px-8 py-3.5 bg-stone-900 text-white font-extrabold rounded-full shadow-md hover:bg-stone-850 transition-colors"
                            >
                                關閉房間
                            </button>
                        </div>
                    </div>
                )}

                {/* 5. Player Join Screen (Name Entry) */}
                {mode === 'player_join' && (
                    <div className="max-w-md mx-auto text-center space-y-6 py-6">
                        <div>
                            <span className="text-xs font-black tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full uppercase border border-amber-100">
                                Join Room {roomId}
                            </span>
                            <h3 className="mt-4 text-3xl font-extrabold text-stone-900 font-serif">登入搶答大廳</h3>
                        </div>

                        <div className="space-y-4 text-left">
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-1.5">房間代碼</label>
                                <input
                                    type="text"
                                    value={roomId}
                                    onChange={(e) => setRoomId(e.target.value.replace(/\D/g,'').slice(0, 4))}
                                    className="w-full px-4 py-3 border border-stone-250 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800/20 focus:border-emerald-850"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-stone-600 mb-1.5">您的暱稱</label>
                                <input
                                    type="text"
                                    placeholder="例如：坪林小清新"
                                    value={nickname}
                                    onChange={(e) => setNickname(e.target.value.slice(0, 12))}
                                    className="w-full px-4 py-3 border border-stone-250 rounded-xl text-base font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-800/20 focus:border-emerald-850"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={exitGame}
                                className="w-1/2 py-3 border border-stone-200 rounded-xl text-sm font-bold text-stone-700 hover:bg-stone-50"
                            >
                                取消
                            </button>
                            <button
                                onClick={joinRoom}
                                disabled={!roomId || !nickname}
                                className="w-1/2 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-colors shadow-sm disabled:opacity-50"
                            >
                                進入大廳
                            </button>
                        </div>
                    </div>
                )}

                {/* 6. Player Waiting for Game to Start */}
                {mode === 'player_waiting' && (
                    <div className="text-center space-y-6 py-12">
                        <Loader2 className="w-12 h-12 text-emerald-800 animate-spin mx-auto" />
                        <div>
                            <h3 className="text-2xl font-bold text-stone-900 font-serif">你已成功進入大廳</h3>
                            <p className="mt-2 text-stone-500 font-medium">{playerStatusMsg}</p>
                        </div>
                        <div className="border border-stone-100 rounded-2xl p-4 bg-stone-50 max-w-xs mx-auto">
                            <span className="text-xs text-stone-400 block font-semibold">您的暱稱</span>
                            <span className="text-lg font-bold text-stone-800">{nickname}</span>
                        </div>
                    </div>
                )}

                {/* 7. Player Active Answering Screen */}
                {mode === 'player_playing' && currentQuestion && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-stone-100 pb-4">
                            <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                                題 {currentQuestion.index + 1} / 5
                            </span>
                            <span className="text-sm font-bold text-stone-400 font-mono">
                                積分: {playerScore}
                            </span>
                        </div>

                        <h4 className="text-xl md:text-2xl font-bold text-stone-950 font-serif leading-snug">
                            {currentQuestion.question}
                        </h4>

                        <div className="grid gap-3.5 mt-6">
                            {currentQuestion.options.map((opt, index) => {
                                const isSelected = playerSelectedAnswer === index;
                                let btnClass = "border-stone-200 bg-white text-stone-850 hover:bg-stone-50";
                                if (playerSelectedAnswer !== null) {
                                    btnClass = isSelected 
                                        ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-600" 
                                        : "border-stone-150 bg-stone-50/50 text-stone-400 opacity-60";
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => playerSubmitAnswer(index)}
                                        disabled={playerSelectedAnswer !== null}
                                        className={`w-full text-left px-5 py-4 rounded-2xl border text-[16px] font-semibold transition-all duration-300 ${btnClass}`}
                                    >
                                        <span className="inline-block mr-2 text-stone-400 font-mono">{String.fromCharCode(65 + index)}.</span>
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>

                        {playerSelectedAnswer !== null && (
                            <div className="text-center py-4 text-stone-500 font-medium animate-pulse">
                                答案已傳送！等待其他玩家中...
                            </div>
                        )}
                    </div>
                )}

                {/* 8. Player Round Result Screen */}
                {mode === 'player_round_result' && (
                    <div className="text-center space-y-6 py-8">
                        {isAnswerCorrect ? (
                            <div className="space-y-2">
                                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                                <h4 className="text-2xl font-black text-emerald-800">答對了！</h4>
                                <div className="text-3xl font-black text-emerald-950 font-mono">+{pointsGained} 分</div>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <XCircle className="w-16 h-16 text-red-500 mx-auto" />
                                <h4 className="text-2xl font-black text-red-600">答錯或超時了</h4>
                                <div className="text-sm text-stone-400 font-medium">請在下一題爭取更快的速度！</div>
                            </div>
                        )}

                        <div className="border border-stone-200 rounded-3xl p-6 bg-stone-50 max-w-sm mx-auto space-y-4">
                            <div className="flex justify-between">
                                <span className="text-stone-500 font-semibold">當前累積積分</span>
                                <span className="font-bold font-mono text-stone-850">{playerScore} pts</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-stone-500 font-semibold">當前排名</span>
                                <span className="font-bold text-amber-600">第 {playerRank} 名</span>
                            </div>
                        </div>

                        <p className="text-sm text-stone-400 animate-pulse">
                            等待主持人進入下一題...
                        </p>
                    </div>
                )}

                {/* 9. Player Finished (Final Result) */}
                {mode === 'player_finished' && (
                    <div className="text-center space-y-6 py-8">
                        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-800 shadow-md">
                            <Trophy className="w-10 h-10 animate-bounce" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-extrabold text-stone-900 font-serif">挑戰結束！</h3>
                            <p className="mt-2 text-stone-500 font-medium">你已完成所有答題</p>
                            <div className="mt-4 text-3xl font-black text-amber-600 font-serif">
                                榮登第 {playerRank} 名
                            </div>
                            <div className="text-lg font-bold text-stone-600 mt-1">
                                最終積分: {playerScore} pts
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={exitGame}
                                className="px-6 py-2.5 border border-stone-200 text-stone-700 font-bold rounded-xl text-sm hover:bg-stone-50"
                            >
                                回到大廳
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
