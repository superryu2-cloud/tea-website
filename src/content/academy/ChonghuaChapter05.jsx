import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import { AlertTriangle, CheckCircle2, Hand, ThermometerSun } from 'lucide-react';

const teaSetImage = '/images/academy/chonghua05/gaiwan-tea-set-real.jpg';

const steps = [
    ['備具', '蓋碗、公道杯、品茗杯、茶則、茶巾與熱水先定位，桌面保持乾淨。'],
    ['溫碗', '以熱水溫蓋碗與茶杯，穩定器溫，也讓茶葉進入器具後更容易揚香。'],
    ['置茶', '100 ml 蓋碗可先以 4–5 g 作為練習基準，再依茶類調整。'],
    ['聞香', '溫碗後投入茶葉，先聞乾香與溫香，建立沖泡前的風味判斷。'],
    ['注水', '沿碗壁或定點注水，讓水流柔和進入碗內，避免細嫩茶葉被猛烈衝擊。'],
    ['出湯', '蓋縫微開，茶湯穩定倒入公道杯，盡量瀝乾，避免下一泡被悶苦。'],
];

const teaGuides = [
    ['綠茶', '75–85°C', '3–4 g', '低溫、快出，避免苦澀與熟味。'],
    ['白茶', '85–95°C', '4–5 g', '嫩芽可低些；壽眉、老白茶可高些。'],
    ['清香烏龍', '90–95°C', '5–6 g', '重點在香氣層次與清揚感。'],
    ['焙火烏龍', '95–100°C', '5–6 g', '高溫可帶出焙火香、果膠感與厚度。'],
    ['紅茶', '90–95°C', '4–5 g', '避免悶太久造成澀感上升。'],
    ['普洱／黑茶', '95–100°C', '5–7 g', '適合醒茶、短泡、多次出湯。'],
];

const burnCauses = [
    ['水加太滿', '熱水接近碗沿，手指碰到高溫區。', '水位控制在七至八分滿。'],
    ['手抓碗身', '碗身吸熱最快，掌心與指腹容易燙。', '拇指、中指只碰碗口外沿。'],
    ['蓋縫太大', '茶湯亂流，茶葉跑出，手腕更難控制。', '只留能順利出湯的小縫。'],
    ['蓋縫方向錯', '蒸氣往手指方向衝，還沒倒就先燙。', '蓋縫朝出湯口，不朝手指。'],
    ['出湯太慢', '器身整體升溫，越拿越燙。', '短泡快出，動作穩定不拖延。'],
    ['器型不適合', '碗口太直、容量太大，初學更難控制。', '先選 100–120 ml、外撇口蓋碗。'],
];

const practicePlan = [
    ['空碗練習', '先練蓋縫、三指位置與傾倒角度，不急著碰熱水。'],
    ['冷水練習', '倒水 10 次，目標是不掉蓋、不漏水、不抖動。'],
    ['溫水練習', '用 50–60°C 溫水建立熱感，確認手指避開高溫區。'],
    ['熱水少量練習', '只倒七分滿以下，練習穩定出湯與瀝乾。'],
    ['正式泡茶', '選焙火烏龍、熟普或老白茶，容錯率較高，適合初學。'],
];

function InfoCard({ title, children }) {
    return (
        <div className="rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-black text-stone-900">{title}</h3>
            </div>
            <div className="text-base leading-8 text-stone-700">{children}</div>
        </div>
    );
}

export default function ChonghuaChapter05() {
    return (
        <div className="space-y-12">
            <AcademySection
                id="chonghua-05"
                title="第05堂｜蓋碗教學"
                label="ACADEMY · CHONGHUA · CH05"
                subtitle="從拿穩、出湯到不燙手，建立工夫泡的基本功"
            >
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-8 shadow-sm">
                        <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-700">Lesson Focus</p>
                        <h2 className="mt-4 text-4xl font-black leading-tight text-stone-950">一只蓋碗，練的是手、眼、心的穩定。</h2>
                        <p className="mt-5 text-lg leading-9 text-stone-700">
                            蓋碗看似簡單，真正的功夫在「蓋縫、水位、角度、節奏」。本堂課把蓋碗拆成可練習的步驟：
                            先理解器物，再學正確拿法，最後用短泡快出的方式完成穩定沖泡。
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {['水不滿', '手不貼', '倒不急'].map((item) => (
                                <div key={item} className="rounded-2xl bg-white px-4 py-3 text-center font-black text-emerald-800 shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <figure className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-lg">
                        <img src={teaSetImage} alt="蓋碗與茶具茶席" className="h-80 w-full object-cover md:h-full" />
                        <figcaption className="p-4 text-sm leading-7 text-stone-600">
                            真實蓋碗茶具照片：蓋碗可作為沖泡器，也可作為日常飲茶器；教學時先讓學生看懂器物關係，再進入手法。
                        </figcaption>
                    </figure>
                </div>
            </AcademySection>

            <AcademySection id="chonghua-05-structure" title="一、認識蓋碗：三件式的沖泡器" label="GAIWAN · STRUCTURE">
                <div className="grid gap-6 md:grid-cols-3">
                    <InfoCard title="蓋">撥茶、聚香、控制出湯縫隙；蓋縫的大小決定茶湯流速與茶葉是否外漏。</InfoCard>
                    <InfoCard title="碗">承裝茶葉與熱水，是主要萃取空間；碗口外沿也是手指接觸的安全位置。</InfoCard>
                    <InfoCard title="托">承接碗身、隔熱、防止溢水弄濕桌面；初學時可保留托盤增加穩定感。</InfoCard>
                </div>
            </AcademySection>

            <AcademySection id="chonghua-05-hand" title="二、基本拿法：三指穩蓋、蓋縫出湯" label="HAND · POURING">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <AcademyContentBlock title="手法口訣" icon={Hand}>
                        <div className="grid gap-4">
                            {[
                                '拇指、中指只碰碗口外沿，不包住碗身。',
                                '食指輕壓蓋鈕，不用力扣死，保持蓋子可微調。',
                                '蓋縫只開一條線：能出湯、能擋葉即可。',
                                '出湯靠手腕轉動，不用整隻手僵硬翻倒。',
                            ].map((text) => (
                                <div key={text} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={20} />
                                    <p className="leading-8 text-stone-700">{text}</p>
                                </div>
                            ))}
                        </div>
                    </AcademyContentBlock>
                    <div className="rounded-[2rem] border border-amber-100 bg-amber-50 p-7">
                        <h3 className="text-2xl font-black text-stone-900">安全口訣</h3>
                        <p className="mt-4 text-3xl font-black leading-relaxed text-amber-900">水不滿、手不貼、縫不大、倒不急。</p>
                        <p className="mt-4 leading-8 text-stone-700">
                            蓋碗容易燙手，通常不是器具問題，而是水位、手指位置與蓋縫方向錯了。先用冷水練到穩，再進入熱水練習。
                        </p>
                    </div>
                </div>
            </AcademySection>

            <AcademySection id="chonghua-05-process" title="三、標準流程：從溫碗到出湯" label="BREWING · FLOW">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {steps.map(([title, desc], index) => (
                        <div key={title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-lg font-black text-white">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-black text-stone-900">{title}</h3>
                            <p className="mt-3 leading-8 text-stone-700">{desc}</p>
                        </div>
                    ))}
                </div>
            </AcademySection>

            <AcademySection id="chonghua-05-ratio" title="四、茶量與水溫：先有基準，再依茶調整" label="RATIO · TEMPERATURE">
                <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
                    <div className="grid grid-cols-[1fr_0.9fr_0.9fr_1.6fr] bg-stone-900 px-5 py-4 text-sm font-black text-white">
                        <div>茶類</div><div>水溫</div><div>100 ml 茶量</div><div>操作提醒</div>
                    </div>
                    {teaGuides.map(([tea, temp, amount, note]) => (
                        <div key={tea} className="grid grid-cols-[1fr_0.9fr_0.9fr_1.6fr] gap-3 border-t border-stone-100 px-5 py-4 text-sm md:text-base">
                            <div className="font-black text-stone-900">{tea}</div>
                            <div className="font-bold text-rose-700">{temp}</div>
                            <div className="font-bold text-emerald-700">{amount}</div>
                            <div className="leading-7 text-stone-700">{note}</div>
                        </div>
                    ))}
                </div>
                <p className="mt-4 rounded-2xl bg-amber-50 px-5 py-4 text-sm font-semibold leading-7 text-amber-900">
                    這些數字是教學起點，不是絕對標準。茶葉老嫩、揉捻、焙火、緊壓程度，都會改變茶量、水溫與浸泡時間。
                </p>
            </AcademySection>

            <AcademySection id="chonghua-05-burn" title="五、為什麼會燙手：錯誤原因與修正" label="SAFETY · TROUBLESHOOTING">
                <div className="grid gap-4 lg:grid-cols-2">
                    {burnCauses.map(([wrong, reason, fix]) => (
                        <div key={wrong} className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="mt-1 shrink-0 text-rose-600" size={22} />
                                <div>
                                    <h3 className="text-xl font-black text-stone-900">{wrong}</h3>
                                    <p className="mt-2 leading-8 text-stone-600">{reason}</p>
                                    <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 font-bold leading-7 text-emerald-800">修正：{fix}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </AcademySection>

            <AcademySection id="chonghua-05-practice" title="六、課堂練習：把安全感練出來" label="PRACTICE · CLASS">
                <div className="grid gap-5 md:grid-cols-5">
                    {practicePlan.map(([title, desc], index) => (
                        <div key={title} className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                            <div className="mb-4 text-sm font-black tracking-widest text-emerald-700">STEP {index + 1}</div>
                            <h3 className="text-lg font-black text-stone-900">{title}</h3>
                            <p className="mt-3 text-sm leading-7 text-stone-700">{desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 rounded-[2rem] bg-stone-900 p-7 text-white">
                    <div className="flex items-center gap-3 text-amber-200">
                        <ThermometerSun size={24} />
                        <h3 className="text-2xl font-black">課後作業</h3>
                    </div>
                    <ul className="mt-4 grid gap-3 text-base leading-8 md:grid-cols-3">
                        <li>在家用空蓋碗練習 10 次出湯。</li>
                        <li>選一款茶，用 100 ml 蓋碗記錄 1–5 泡變化。</li>
                        <li>寫下自己最容易燙手的原因與修正方式。</li>
                    </ul>
                </div>
            </AcademySection>

            <AcademySection id="chonghua-05-sources" title="資料參考與圖片來源" label="REFERENCES">
                <div className="rounded-3xl border border-stone-200 bg-white p-6 leading-8 text-stone-700 shadow-sm">
                    <p>
                        內容參考 Serious Eats 蓋碗沖泡與茶器介紹、Teasenz 蓋碗避免燙手教學，以及工夫茶常見的小容量、高茶水比、短時間多次沖泡原則整理。
                    </p>
                    <p className="mt-3 text-sm text-stone-500">
                        圖片來源：Gary Stevens, Chinese tea set and three gaiwan, Wikimedia Commons, CC BY 2.0。
                    </p>
                </div>
            </AcademySection>
        </div>
    );
}

