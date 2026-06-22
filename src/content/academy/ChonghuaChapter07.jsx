import React from 'react';
import {
    BookOpen,
    CheckCircle2,
    Coffee,
    Droplets,
    Flame,
    Leaf,
    Mountain,
    Scale,
    Sparkles,
    Trees,
    Wind,
} from 'lucide-react';

const IMAGE_ROOT = '/images/academy/chonghua-chapter07';

const teas = [
    {
        id: 'wenshan',
        name: '文山包種茶',
        subtitle: '清香型條形包種茶',
        image: `${IMAGE_ROOT}/wenshan-pouchong.png`,
        icon: Wind,
        region: '新北市文山茶區，以坪林等地最具代表性',
        shape: '條索緊結、自然彎曲，色澤墨綠帶光澤',
        aroma: '新鮮、優雅的花香，常聯想到蘭花、梔子花與淡雅青草氣息',
        taste: '茶湯蜜黃綠亮，滋味甘醇、滑順、鮮活，回甘清楚',
        process: '輕度氧化、輕焙火，重點在保留清揚花香與鮮爽感',
        note: '辨識時先看條形外觀，再找「清揚花香、輕盈湯感、鮮活回甘」。香氣應自然融入茶湯，而不是只有杯面聞起來香。',
    },
    {
        id: 'shanlinxi',
        name: '杉林溪高山茶',
        subtitle: '森林氣息與清甜湯感',
        image: `${IMAGE_ROOT}/shanlinxi-high-mountain.png`,
        icon: Trees,
        region: '南投縣竹山鎮杉林溪茶區，山林環境濕潤、雲霧多',
        shape: '半球形或球形，顆粒緊結，沖泡後葉片舒展',
        aroma: '常見清花香、嫩葉香與清涼的森林聯想',
        taste: '清甜、柔順，湯感細緻，收斂感通常較輕，喉韻舒適',
        process: '清香型球形烏龍製法，輕度氧化，焙火多以輕火整理',
        note: '杉林溪並非單一固定風味。季節、海拔、品種與製茶師都會改變表現；課堂可用「清甜、柔順、森林聯想」作為比較線索，而非品質保證。',
    },
    {
        id: 'lishan',
        name: '梨山高山茶',
        subtitle: '高冷產區的細緻與厚度',
        image: `${IMAGE_ROOT}/lishan-high-mountain.png`,
        icon: Mountain,
        region: '臺中市和平區梨山一帶，高冷、日夜溫差明顯',
        shape: '球形緊結、葉質厚實，沖泡後葉底柔軟完整',
        aroma: '常見高揚花香、熟果甜香與冷冽清香的聯想',
        taste: '甜度明顯、湯質飽滿細緻，回甘與喉韻常較深長',
        process: '清香型球形烏龍製法，製程重視走水、香氣與厚度的平衡',
        note: '海拔只是影響生長環境的條件，不是品質分數。品種、園地管理、採摘成熟度與製程，才共同決定一杯茶的完整度。',
    },
    {
        id: 'tieguanyin',
        name: '木柵鐵觀音',
        subtitle: '中度氧化、重焙火的熟香型烏龍',
        image: `${IMAGE_ROOT}/muzha-tieguanyin.png`,
        icon: Flame,
        region: '臺北市文山區木柵茶區；清代由安溪引入製茶傳統',
        shape: '球形或半球形，色澤褐綠至深褐，帶明顯焙火外觀',
        aroma: '焙火香、熟果香、糖香與帶礦物感的觀音韻',
        taste: '茶湯琥珀紅亮，滋味濃厚甘醇，微澀後轉甘，尾韻持久',
        process: '中度氧化、反覆焙火與退火，形成醇厚熟香及深沉韻味',
        note: '「正欉鐵觀音」指以鐵觀音茶樹品種製成；其他品種依鐵觀音製法製作，則偏向製法分類。品種與工藝不可混為一談。',
    },
];

const processSteps = [
    ['1', '採摘', '採取適熟茶菁；成熟度會影響香氣、厚度與耐泡度。'],
    ['2', '萎凋', '日光與室內萎凋使水分散失，啟動香氣前驅物轉化。'],
    ['3', '浪菁／攪拌', '葉緣受碰撞後促進局部氧化，建立青茶花果香與層次。'],
    ['4', '殺菁與揉捻', '高溫停止氧化，再做成條形或球形，塑造茶葉外觀。'],
    ['5', '乾燥與焙火', '穩定品質並調整香氣；焙火程度由清香走向熟香、焙香。'],
];

function InfoCard({ icon, title, children }) {
    return (
        <article className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-3 text-emerald-800">
                <span className="rounded-2xl bg-emerald-50 p-2">{React.createElement(icon, { size: 20 })}</span>
                <h3 className="font-bold">{title}</h3>
            </div>
            <div className="text-sm leading-7 text-stone-600">{children}</div>
        </article>
    );
}

function TeaDetail({ tea, index }) {
    const Icon = tea.icon;
    return (
        <section id={tea.id} className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
                <img
                    src={tea.image}
                    alt={`${tea.name}茶葉、茶湯與產區意象`}
                    className={`h-full min-h-80 w-full object-cover ${index % 2 ? 'lg:order-2' : ''}`}
                    loading="lazy"
                />
                <div className="p-7 md:p-10">
                    <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-2xl bg-amber-50 p-3 text-amber-800"><Icon size={24} /></span>
                        <div>
                            <p className="text-xs font-bold tracking-[0.2em] text-amber-700">TEA PROFILE 0{index + 1}</p>
                            <h2 className="mt-1 text-2xl font-black text-stone-800">{tea.name}</h2>
                        </div>
                    </div>
                    <p className="mb-6 text-lg font-medium text-emerald-800">{tea.subtitle}</p>
                    <dl className="space-y-3 text-sm leading-7">
                        {[
                            ['產區', tea.region],
                            ['外形', tea.shape],
                            ['香氣', tea.aroma],
                            ['滋味', tea.taste],
                            ['工藝', tea.process],
                        ].map(([label, value]) => (
                            <div key={label} className="grid grid-cols-[3.5rem_1fr] gap-3 border-b border-stone-100 pb-3 last:border-0">
                                <dt className="font-bold text-stone-800">{label}</dt>
                                <dd className="text-stone-600">{value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="mt-6 rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-stone-700">
                        <strong className="text-emerald-800">教學提醒：</strong>{tea.note}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ChonghuaChapter07() {
    return (
        <main className="mx-auto max-w-7xl space-y-12 px-4 pb-16 text-stone-800 md:px-6">
            <header className="relative overflow-hidden rounded-[2.25rem] bg-stone-900 text-white shadow-xl">
                <img
                    src={`${IMAGE_ROOT}/oolong-course-hero.png`}
                    alt="文山包種、高山茶與鐵觀音的青茶風味課程"
                    className="absolute inset-0 h-full w-full object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/65 to-transparent" />
                <div className="relative max-w-3xl px-7 py-16 md:px-12 md:py-24">
                    <p className="mb-4 text-sm font-bold tracking-[0.22em] text-amber-300">崇華書院 · 第07堂</p>
                    <h1 className="text-4xl font-black leading-tight md:text-6xl">青茶類風味辨識</h1>
                    <p className="mt-5 text-lg leading-8 text-stone-100 md:text-xl">
                        從文山包種的清揚花香，到杉林溪、梨山高山茶的細緻山韻，再走入木柵鐵觀音的醇厚焙香。
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3 text-sm">
                        {['製程理解', '產區比較', '感官辨識', '沖泡實作'].map((item) => (
                            <span key={item} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">{item}</span>
                        ))}
                    </div>
                </div>
            </header>

            <section className="grid gap-5 md:grid-cols-3">
                <InfoCard icon={BookOpen} title="本堂學習目標">
                    能說明青茶的部分氧化特性，並以外形、香氣、湯色、滋味及焙火辨識四款代表茶。
                </InfoCard>
                <InfoCard icon={Scale} title="比較的正確方式">
                    先用相同茶水比與沖泡條件，再比較茶樣；產區名稱是線索，不應取代對杯中品質的判斷。
                </InfoCard>
                <InfoCard icon={Sparkles} title="風味主軸">
                    條形清香 → 球形清香 → 高山細緻感 → 熟香焙韻，建立一條可重複練習的感官座標。
                </InfoCard>
            </section>

            <section id="overview" className="rounded-[2rem] bg-emerald-950 px-7 py-10 text-white md:px-10">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold tracking-[0.2em] text-emerald-300">WHAT IS OOLONG TEA?</p>
                        <h2 className="mt-3 text-3xl font-black">青茶不是一種固定味道</h2>
                        <p className="mt-4 leading-8 text-emerald-50/85">
                            青茶（烏龍茶）屬於部分氧化茶。製茶師透過萎凋、浪菁、殺菁、揉捻與焙火，控制花香、果香、湯感及熟香。氧化與焙火程度不同，便能形成從清香包種到濃厚鐵觀音的寬廣風味。
                        </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-5">
                        {processSteps.map(([number, title, text]) => (
                            <article key={number} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                <span className="text-2xl font-black text-amber-300">{number}</span>
                                <h3 className="mt-2 font-bold">{title}</h3>
                                <p className="mt-2 text-xs leading-6 text-emerald-50/75">{text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="mb-7 text-center">
                    <p className="text-sm font-bold tracking-[0.2em] text-amber-700">FOUR REPRESENTATIVE TEAS</p>
                    <h2 className="mt-2 text-3xl font-black">四款代表茶，四種辨識座標</h2>
                </div>
                <div className="space-y-8">
                    {teas.map((tea, index) => <TeaDetail key={tea.id} tea={tea} index={index} />)}
                </div>
            </section>

            <section id="comparison" className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
                <div className="border-b border-stone-200 p-7 md:p-9">
                    <p className="text-sm font-bold tracking-[0.2em] text-amber-700">SENSORY COMPARISON</p>
                    <h2 className="mt-2 text-3xl font-black">四款茶快速比較</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-[820px] w-full text-left text-sm">
                        <thead className="bg-stone-100 text-stone-700">
                            <tr>{['茶款', '外形', '製程走向', '香氣重點', '湯感與辨識詞'].map((head) => <th key={head} className="px-6 py-4 font-bold">{head}</th>)}</tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                            <tr><td className="px-6 py-5 font-bold">文山包種</td><td className="px-6 py-5">條形</td><td className="px-6 py-5">輕氧化、輕焙</td><td className="px-6 py-5">清揚花香</td><td className="px-6 py-5">鮮活、滑順、回甘</td></tr>
                            <tr><td className="px-6 py-5 font-bold">杉林溪</td><td className="px-6 py-5">球形</td><td className="px-6 py-5">清香型高山烏龍</td><td className="px-6 py-5">花香、嫩葉、森林聯想</td><td className="px-6 py-5">清甜、柔順、細緻</td></tr>
                            <tr><td className="px-6 py-5 font-bold">梨山</td><td className="px-6 py-5">球形</td><td className="px-6 py-5">清香型高山烏龍</td><td className="px-6 py-5">高揚花香、甜香</td><td className="px-6 py-5">飽滿、深長、喉韻</td></tr>
                            <tr><td className="px-6 py-5 font-bold">木柵鐵觀音</td><td className="px-6 py-5">球形／半球形</td><td className="px-6 py-5">中氧化、重焙火</td><td className="px-6 py-5">焙火、熟果、糖香</td><td className="px-6 py-5">濃厚、甘醇、觀音韻</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="practice" className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-[2rem] bg-amber-50 p-7 md:p-9">
                    <div className="flex items-center gap-3 text-amber-900"><Coffee /><h2 className="text-2xl font-black">課堂沖泡建議</h2></div>
                    <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
                        <li className="flex gap-3"><Droplets className="mt-1 shrink-0 text-amber-700" size={18} /><span><strong>建立公平條件：</strong>四款茶先採相同茶水比、器具與浸泡時間；建議由清香到焙香品飲。</span></li>
                        <li className="flex gap-3"><Leaf className="mt-1 shrink-0 text-amber-700" size={18} /><span><strong>觀察三個階段：</strong>乾香、熱嗅與入口後鼻腔香氣，再記錄湯感、收斂及回甘位置。</span></li>
                        <li className="flex gap-3"><Flame className="mt-1 shrink-0 text-amber-700" size={18} /><span><strong>依茶調整：</strong>條形包種出味較快；緊結球形茶需要展葉空間；焙火茶可用較高水溫呈現厚度。</span></li>
                    </ul>
                </article>
                <article className="rounded-[2rem] bg-stone-900 p-7 text-white md:p-9">
                    <div className="flex items-center gap-3 text-emerald-300"><CheckCircle2 /><h2 className="text-2xl font-black text-white">盲飲練習單</h2></div>
                    <ol className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
                        <li><strong className="text-white">01 外形：</strong>條形或球形？色澤偏綠或偏褐？</li>
                        <li><strong className="text-white">02 香氣：</strong>清花、熟果、嫩葉、糖香或焙火香？</li>
                        <li><strong className="text-white">03 茶湯：</strong>輕盈或厚實？甜感、收斂與回甘出現在哪裡？</li>
                        <li><strong className="text-white">04 推論：</strong>先判斷製程走向，再推測茶款與產區，最後揭曉答案。</li>
                    </ol>
                </article>
            </section>

            <section id="sources" className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7 md:p-9">
                <h2 className="flex items-center gap-3 text-2xl font-black"><BookOpen className="text-emerald-800" />資料來源與延伸閱讀</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">本頁整合站內茶學內容，並以農業部茶及飲料作物改良場、農業知識入口網及臺北市政府產業發展局資料交叉整理。產區風味會隨季節、園地、品種及製程改變。</p>
                <ul className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                    <li><a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4" href="https://www.tbrs.gov.tw/ws.php?id=3781" target="_blank" rel="noreferrer">茶及飲料作物改良場｜文山包種茶</a></li>
                    <li><a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4" href="https://www.tbrs.gov.tw/ws.php?id=3783" target="_blank" rel="noreferrer">茶及飲料作物改良場｜高山烏龍茶</a></li>
                    <li><a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4" href="https://www.tbrs.gov.tw/ws.php?id=3785" target="_blank" rel="noreferrer">茶及飲料作物改良場｜鐵觀音茶</a></li>
                    <li><a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4" href="https://kmweb.moa.gov.tw/subject/subject.php?id=57962" target="_blank" rel="noreferrer">農業知識入口網｜臺灣特色茶相關資料</a></li>
                    <li><a className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-4" href="https://recreational-agriculture.gov.taipei/cp.aspx?n=A94C081005225EB4&amp;s=01EF975A156B29A5" target="_blank" rel="noreferrer">臺北市政府產業發展局｜木柵鐵觀音</a></li>
                </ul>
            </section>
        </main>
    );
}

