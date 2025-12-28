// Auto-extracted from src/App.jsx

import React from 'react';
import { ArrowRight, Bug, Coffee, History, ShieldAlert, Sparkles, Wind } from 'lucide-react';

export default function OrientalBeautyContent() {
  return (
        <div className="animate-fadeIn">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-rose-50 to-amber-50 text-stone-800 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-rose-100">
                <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 md:w-3/4">
                    <div className="inline-block px-3 py-1 bg-rose-600 text-white text-sm font-bold rounded mb-4">重發酵・蜜香</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-stone-800">東方美人</h2>
                    <p className="text-xl text-stone-600 leading-relaxed font-light mb-6">
                        茶中香檳，白毫烏龍中的極品。<br/>
                        白、黃、青、紅、褐五色相間，宛若鮮花，獨具天然蜜味與熟果香氣。
                    </p>
                </div>
            </div>

            <div className="space-y-16">
                {/* 1. Intro & 5 Colors */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
                            <Sparkles className="mr-2 text-amber-500"/> 五色茶美學
                        </h3>
                        <p className="text-stone-600 leading-relaxed mb-6">
                            東方美人是半發酵茶中發酵度最重（75-85%）的茶品。其茶身色彩斑斕，五色相間，湯色明澈鮮麗，猶如琥珀。
                        </p>
                        <div className="flex gap-2">
                            {['白', '黃', '青', '紅', '褐'].map((color, idx) => (
                                <div key={idx} className="flex-1 text-center">
                                    <div className={`w-full h-8 rounded mb-2 ${
                                        color === '白' ? 'bg-stone-100 border border-stone-300' :
                                        color === '黃' ? 'bg-yellow-400' :
                                        color === '青' ? 'bg-green-600' :
                                        color === '紅' ? 'bg-red-600' : 'bg-amber-900'
                                    }`}></div>
                                    <span className="text-xs font-bold text-stone-500">{color}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-stone-50 p-8 rounded-xl border border-stone-200">
                        <h3 className="text-2xl font-bold text-stone-800 mb-4">分類與產地</h3>
                        <div className="space-y-4">
                            <div className="flex border-b border-stone-200 pb-2">
                                <span className="text-stone-500 w-24 flex-shrink-0">分類</span>
                                <span className="font-medium text-stone-800">青茶類 (重發酵)</span>
                            </div>
                            <div className="flex border-b border-stone-200 pb-2">
                                <span className="text-stone-500 w-24 flex-shrink-0">主要產區</span>
                                <span className="font-medium text-stone-800">新竹(峨眉, 北埔)、苗栗、桃園、新北(石碇, 坪林)</span>
                            </div>
                            <div className="flex border-b border-stone-200 pb-2">
                                <span className="text-stone-500 w-24 flex-shrink-0">口感</span>
                                <span className="font-medium text-stone-800">熟果香與蜜香結合，滋味純和甜潤，口齒生津。</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. The Secret: Green Leafhopper */}
                <div className="bg-gradient-to-b from-green-50 to-white p-8 rounded-2xl border border-green-100 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <div className="flex items-center mb-6">
                            <Bug className="text-green-600 mr-3" size={32}/>
                            <h3 className="text-3xl font-bold text-green-900">2毫米的生命密碼：小綠葉蟬</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <p className="text-lg text-green-800 font-medium mb-4">
                                    「如果沒有蜜香，只能稱白毫烏龍，不能稱東方美人。」
                                </p>
                                <p className="text-stone-600 leading-relaxed mb-4">
                                    口感的秘密隱藏在芝麻大小的昆蟲——<strong>小綠葉蟬</strong>身上（又名：跳啊、涎仔、煙仔）。牠們以吸食茶樹幼芽的汁液為生，這個動作被稱為<strong>「著涎 (Zhuo Yan)」</strong>。
                                </p>
                                <div className="bg-white/80 p-5 rounded-lg border border-green-200 mb-4 shadow-sm">
                                    <h4 className="font-bold text-green-800 mb-2 flex items-center">🍃 蜜香誕生的三大原因</h4>
                                    <ul className="list-decimal list-inside space-y-2 text-sm text-stone-700">
                                        <li><strong>著涎效應：</strong>小綠葉蟬叮咬時唾液進入茶葉，引發化學變化。</li>
                                        <li><strong>防禦機制：</strong>茶樹為保護自己，釋放接近蜂蜜香氣的<strong>「新洛蒙 (Synomone)」</strong>氣體，試圖吸引白斑獵蛛、寄生蜂等天敵來捕食葉蟬。</li>
                                        <li><strong>傷口修復：</strong>茶芽受傷後，分泌特殊癒合物質（茶多酚與芳香醇增加），轉化為天然蜜香。</li>
                                    </ul>
                                    
                                    {/* Ecological Diagram */}
                                    <div className="mt-6 pt-6 border-t border-green-100">
                                        <h5 className="text-center text-xs font-bold text-green-600 mb-4 uppercase tracking-wider">生態防禦機制圖解</h5>
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                                            <div className="flex-1 flex flex-col items-center group">
                                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                                    <Bug className="text-green-600" size={20} />
                                                </div>
                                                <span className="text-xs font-bold text-stone-700">1. 葉蟬吸食</span>
                                            </div>
                                            <ArrowRight className="text-green-300 hidden md:block" size={16} />
                                            <div className="md:hidden text-green-300">↓</div>
                                            
                                            <div className="flex-1 flex flex-col items-center group">
                                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform animate-pulse">
                                                    <Wind className="text-amber-600" size={20} />
                                                </div>
                                                <span className="text-xs font-bold text-stone-700">2. 釋放蜜香(求救)</span>
                                            </div>
                                            <ArrowRight className="text-green-300 hidden md:block" size={16} />
                                            <div className="md:hidden text-green-300">↓</div>

                                            <div className="flex-1 flex flex-col items-center group">
                                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                                    <div className="relative">
                                                        <Bug className="text-red-600" size={20} />
                                                        <span className="absolute -top-1 -right-1 flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold text-stone-700">3. 吸引天敵</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-sm text-red-800">
                                    <span className="font-bold">⚠️ 絕對禁藥：</span>
                                    小綠葉蟬對環境極為挑剔。為了吸引牠們，茶園絕不可使用農藥，必須保持生態平衡。一旦使用農藥或過度施肥，小綠葉蟬就會消失。
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col justify-center">
                                <div className="text-4xl font-bold text-green-600 mb-2">6-7月</div>
                                <div className="text-sm text-stone-500 mb-4">最佳採收期 (芒種-大暑)</div>
                                <p className="text-xs text-stone-400">
                                    炎夏端午前後，高溫濕熱是小綠葉蟬繁殖全盛期，也是東方美人茶品質最好的時候。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. History & Names */}
                <div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                        <History className="mr-3 text-rose-500"/> 傳奇身世：名字最多的茶
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border-t-4 border-rose-400 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2">膨風茶 (Bragging Tea)</h4>
                            <p className="text-sm text-stone-600">
                                日據時代，茶農將被蟲咬受損的茶葉拿到市場，竟賣出天價。回鄉後鄰居以為他在吹牛（客語：膨風），故得此名。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-t-4 border-amber-400 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2">東方美人 (Queen's Name)</h4>
                            <p className="text-sm text-stone-600">
                                傳說百年前茶獻給英國女王（一說維多利亞，一說伊麗莎白二世），女王見其在水中舞動宛如絕色美人，故賜名「東方美人」。
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-t-4 border-blue-400 shadow-sm">
                            <h4 className="font-bold text-lg text-stone-800 mb-2">福壽茶</h4>
                            <p className="text-sm text-stone-600">
                                民國69-72年間，前副總統謝東閔下鄉視察，應地方父老之請，將此茶命名為「福壽茶」。
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                        {['白毫烏龍', '五色茶', '著涎茶', '椪風茶', '東方美人'].map((name, i) => (
                            <span key={i} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 4. Brewing & Storage */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-stone-800 text-stone-200 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Coffee className="mr-2"/> 沖泡指南
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                                <span className="text-stone-400">水溫</span>
                                <span className="font-bold text-amber-400">85~90°C</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                                <span className="text-stone-400">置茶量</span>
                                <span className="font-bold">壺身 1/2 或 2/3</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                                <span className="text-stone-400">第一泡</span>
                                <span className="font-bold">50 秒 (不需溫潤泡)</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-stone-700 pb-2">
                                <span className="text-stone-400">第二/三泡</span>
                                <span className="font-bold">50秒 / 60秒</span>
                            </div>
                        </div>
                        <p className="mt-4 text-xs text-stone-500">
                            *利用降溫減少苦澀感。建議使用白瓷或玻璃壺，毛細孔小較聚香。好茶放冷會更甜！
                        </p>
                    </div>

                    <div className="bg-rose-50 rounded-xl p-8 border border-rose-100">
                        <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center">
                            <ShieldAlert className="mr-2"/> 保存四大殺手
                        </h3>
                        <p className="text-rose-800 mb-4 text-sm font-medium">
                            特色茶著重鮮爽，不耐儲存。特等獎最好一個月內喝完！
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded text-center shadow-sm">
                                <span className="block text-rose-500 font-bold mb-1">含水量</span>
                                <span className="text-xs text-stone-500">需在4%以下</span>
                            </div>
                            <div className="bg-white p-3 rounded text-center shadow-sm">
                                <span className="block text-rose-500 font-bold mb-1">光線</span>
                                <span className="text-xs text-stone-500">極易退化</span>
                            </div>
                            <div className="bg-white p-3 rounded text-center shadow-sm">
                                <span className="block text-rose-500 font-bold mb-1">溫度</span>
                                <span className="text-xs text-stone-500">高溫易變質</span>
                            </div>
                            <div className="bg-white p-3 rounded text-center shadow-sm">
                                <span className="block text-rose-500 font-bold mb-1">氧氣</span>
                                <span className="text-xs text-stone-500">需真空包裝</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
