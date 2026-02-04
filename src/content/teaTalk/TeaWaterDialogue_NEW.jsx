import React from 'react';
import { Droplets, Sparkles, Thermometer, Waves } from 'lucide-react';
import SectionCard from '../../components/SectionCard';
import ClickableImage from '../../components/ClickableImage';

function Bullet({ children }) {
  return <li className=" leading-relaxed\>{children}</li>;
}

function Bullets({ children }) {
 return <ul className=\mt-3 list-disc pl-5 space-y-2 text-[17px] text-stone-700\>{children}</ul>;
}

function SubTitle({ id, children }) {
 return (
 <h3 id={id} className=\scroll-mt-28 text-[19px] md:text-[22px] font-extrabold text-stone-900\>
 {children}
 </h3>
 );
}

export default function TeaWaterDialogue() {
 return (
 <div className=\space-y-8\>
 <div className=\museum-frame museum-paper relative overflow-hidden\>
 <div className=\absolute -top-20 -right-24 w-96 h-96 rounded-full bg-cyan-200/25 blur-3xl\ />
 <div className=\absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl\ />
 <div className=\relative px-8 py-10 md:px-12 md:py-12\>
 <div className=\museum-label\>
 <Droplets size={14} className=\opacity-80\ />
 CHAPTER 07 WATER
 </div>
 <h2 className=\mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900\>茶與水的對話</h2>
 <p className=\mt-4 max-w-3xl text-[17px] md:text-[19px] text-stone-700 leading-relaxed\>
 水是茶樹的生命之源，也是茶湯的最後一把鑰匙：田間的含水量決定新梢品質；製程的「走水」決定發酵與香氣；
 儲藏的含水量決定能放多久；沖泡的水質與水溫，決定你喝到的色、香、味。
 </p>
 </div>
 </div>

 <SectionCard title=\一、茶樹生育期的水分生理機制\ icon={Droplets}>
 <div className=\space-y-5\>
 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-1-1\>根系分工</SubTitle>
 <Bullets>
 <Bullet>主根：固定植株。</Bullet>
 <Bullet>側根：儲存養分。</Bullet>
 <Bullet>鬚根：水分與養分吸收主力。</Bullet>
 </Bullets>
 </div>

 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-1-2\>水在茶樹體內的角色</SubTitle>
 <Bullets>
 <Bullet>光合作用原料：與二氧化碳共同合成養分。</Bullet>
 <Bullet>代謝與傳輸：養分透過木質部運輸需要水分帶動；缺水代謝容易失序。</Bullet>
 <Bullet>環境緩衝：水的比熱與緩衝性可減少高低溫劇變傷害。</Bullet>
 </Bullets>
 </div>

 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-1-3\>田間含水量與品質</SubTitle>
 <div className=\mt-2 text-[17px] text-stone-700 leading-relaxed\>
 茶菁原料含水量通常約 70%～80%（受天氣與嫩度影響）。若田間達到凋萎點（缺水），生長遲緩、品質下降。
 生育期維持約 70% 含水量，是「養樹」的邏輯；而製茶是「把水走掉」的邏輯，兩者方向相反。
 </div>
 </div>
 <div className=\mt-6\>
 <ClickableImage
 src=\/images/tea-talk/ch07-roots-water.png\
 alt=\茶樹根系吸水示意圖\
 caption=\茶樹根系吸水示意圖：主根固定、側根儲存、鬚根吸收\
 />
 </div>
 </div>
 </SectionCard>

 <SectionCard title=\二、製茶工藝中的『走水』與萎凋\ icon={Waves}>
 <div className=\space-y-5\>
 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-2-1\>走水是什麼？</SubTitle>
 <div className=\mt-2 text-[17px] text-stone-700 leading-relaxed\>
 製茶的核心之一是水分遞減（走水）：水分沿葉脈（主脈側脈細脈）傳輸，最後由下表皮氣孔散失。
 適度失水使細胞產生萎縮與一定程度破壞，才有利於後續氧化反應（發酵）啟動。
 </div>
 </div>

 <div className=\rounded-2xl border border-stone-200 bg-white overflow-x-auto\>
 <table className=\min-w-full text-sm\>
 <thead className=\bg-stone-50 text-stone-700\>
 <tr className=\text-left\>
 <th className=\px-5 py-3 font-extrabold\>茶類</th>
 <th className=\px-5 py-3 font-extrabold\>萎凋特徵</th>
 <th className=\px-5 py-3 font-extrabold\>典型失水率/條件</th>
 <th className=\px-5 py-3 font-extrabold\>關鍵動作</th>
 </tr>
 </thead>
 <tbody className=\divide-y divide-stone-200 text-stone-800\>
 <tr>
 <td className=\px-5 py-4 font-bold\>白茶</td>
 <td className=\px-5 py-4\>重萎凋、輕發酵</td>
 <td className=\px-5 py-4\>室內萎凋，失水約 60%～70%。</td>
 <td className=\px-5 py-4\>不攪拌、不炒菁、不揉捻的工藝思路（以萎凋帶動轉化）。</td>
 </tr>
 <tr>
 <td className=\px-5 py-4 font-bold\>青茶（烏龍）</td>
 <td className=\px-5 py-4\>日光＋室內萎凋</td>
 <td className=\px-5 py-4\>室外約 3035C；一般日光萎凋失水約 5%～10%；東方美人可達 25%～35%。</td>
 <td className=\px-5 py-4\>攪拌：促進均勻失水、提高酵素活性，推進發酵。</td>
 </tr>
 <tr>
 <td className=\px-5 py-4 font-bold\>紅茶</td>
 <td className=\px-5 py-4\>室內萎凋後重揉捻</td>
 <td className=\px-5 py-4\>室內萎凋約 1620 小時；失水率約 30%～50（春 50、夏 40、秋 30）。</td>
 <td className=\px-5 py-4\>補足發酵需高濕（相對濕度約 90%）；揉捻應避免起泡或滴水。</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-2-2\>趕青要趕得透</SubTitle>
 <div className=\mt-2 text-[17px] text-stone-700 leading-relaxed\>
 製程中「趕青」的目的，是把青味（常見屬醇類與醛類）去除，讓發酵有機會轉化出花香、甜香或花果香等更高層次的香氣。
 </div>
 </div>
 <div className=\mt-6\>
 <ClickableImage
 src=\/images/tea-talk/ch07-withering.png\
 alt=\茶葉萎凋走水過程\
 caption=\茶葉萎凋走水過程：從鮮綠飽滿逐漸轉為柔軟暗綠\
 />
 </div>
 </div>
 </SectionCard>

 <SectionCard title=\三、儲藏的含水量控制：35% 是關鍵\ icon={Sparkles}>
 <div className=\rounded-2xl border border-stone-200 bg-white overflow-x-auto\>
 <table className=\min-w-full text-sm\>
 <thead className=\bg-stone-50 text-stone-700\>
 <tr className=\text-left\>
 <th className=\px-5 py-3 font-extrabold\>含水量</th>
 <th className=\px-5 py-3 font-extrabold\>狀態</th>
 <th className=\px-5 py-3 font-extrabold\>結果</th>
 </tr>
 </thead>
 <tbody className=\divide-y divide-stone-200 text-stone-800\>
 <tr>
 <td className=\px-5 py-4 font-bold\>3%～5%</td>
 <td className=\px-5 py-4\>水分形成單分子層保護膜</td>
 <td className=\px-5 py-4\>變化極慢，最適合儲藏。</td>
 </tr>
 <tr>
 <td className=\px-5 py-4 font-bold\>&gt; 6%</td>
 <td className=\px-5 py-4\>水分變成「溶劑」</td>
 <td className=\px-5 py-4\>化學反應與後氧化加速，色香味劣變。</td>
 </tr>
 <tr>
 <td className=\px-5 py-4 font-bold\>&gt; 10%～12%</td>
 <td className=\px-5 py-4\>霉變風險</td>
 <td className=\px-5 py-4\>易長霉，品質與安全性都受影響。</td>
 </tr>
 </tbody>
 </table>
 </div>
 <div className=\mt-4 text-[17px] text-stone-700 leading-relaxed\>
 建議使用具防潮阻氣的包材（如鋁箔積層真空袋），可搭配乾燥劑；精製包裝作業最好在低相對濕度環境進行。
 </div>
 <div className=\mt-6\>
 <ClickableImage
 src=\/images/tea-talk/ch07-moisture.png\
 alt=\茶葉儲藏含水量控制\
 caption=\茶葉儲藏含水量控制：3-5%安全區、6-10%警告區、>10%危險區\
 />
 </div>
 </SectionCard>

 <SectionCard title=\四、沖泡科學：水質與水溫如何改變色香味\ icon={Thermometer}>
 <div className=\space-y-5\>
 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-4-1\>1) 水質（pH 與硬度）</SubTitle>
 <Bullets>
 <Bullet>
 pH：較適合泡茶的水質常以微酸性（約 pH 6.56.8）描述；中性/微鹼性水可能使茶湯後氧化、水色暗濁、鮮活性下降。
 </Bullet>
 <Bullet>
 硬度：主要是鈣、鎂等礦物質；金屬離子可與兒茶素形成絡合物，使茶湯暗濁。礦物質越少（如純水），保留的兒茶素越多。
 </Bullet>
 <Bullet>咖啡因與氨基酸的溶出量，通常不受礦物質多寡影響。</Bullet>
 </Bullets>
 </div>

 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-4-2\>2) 水溫（熱泡 vs 冷泡）</SubTitle>
 <Bullets>
 <Bullet>高溫（熱泡）：更容易萃取酯型兒茶素（收斂性）與咖啡因（苦味），水色也更深。</Bullet>
 <Bullet>低溫（冷泡）：氨基酸（甘味）相對更容易溶出，兒茶素與咖啡因較少，風味常呈「多甘甜、少苦澀」。</Bullet>
 <Bullet>綠茶兒茶素含量高，若高溫久浸易苦澀，因此常更適合較低溫沖泡以突顯甘味。</Bullet>
 <Bullet>高山氣壓較低，約 95C 即沸騰，與平地 100C 不同，亦可能帶來沖泡風味差異。</Bullet>
 </Bullets>
 </div>

 <div className=\rounded-2xl border border-stone-200 bg-white p-5\>
 <SubTitle id=\tt-water-4-3\>選水小提醒</SubTitle>
 <div className=\mt-2 text-[17px] text-stone-700 leading-relaxed\>
 若使用市售礦泉水沖泡，可留意 pH 與礦物質含量是否符合你想呈現的風味：想要更鮮爽明亮，通常偏向較低硬度；
 想要口感更厚，則可試試不同硬度的水，找出自己喜歡的平衡點。
 </div>
 </div>
 <div className=\mt-6\>
 <ClickableImage
 src=\/images/tea-talk/ch07-brewing.png\
 alt=\茶與水的對話：沖泡科學\
 caption=\茶與水的對話：水質（pH、硬度）與水溫決定色香味\
 />
 </div>
 </div>
 </SectionCard>
 </div>
 );
}
