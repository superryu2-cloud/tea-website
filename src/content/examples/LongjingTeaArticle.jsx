// 龍井茶文章範例 - 展示如何使用 TeaArticleTemplate 元件
// 這是一個完整的範例，展示所有可用的排版模組

import React from 'react';
import {
    ArticleHero,
    FeatureCards,
    ContentSection,
    SubSectionTitle,
    InfoBox,
    Timeline,
    TwoColumnLayout,
    KeyPoints,
    Quote,
    TagGroup
} from '../../components/TeaArticleTemplate';

export default function LongjingTeaArticle() {
    // 特徵資料
    const features = [
        {
            icon: 'leaf',
            title: '風味特徵',
            iconColor: 'text-green-700',
            bgColor: 'bg-white',
            borderColor: 'border-stone-200',
            labelColor: 'text-green-800',
            description: '龍井茶以其獨特的「色綠、香郁、味甘、形美」四絕聞名於世。',
            items: [
                { label: '外觀', value: '扁平光滑，挺直尖削，色澤嫩綠光潤' },
                { label: '湯色', value: '嫩綠明亮，清澈透明' },
                { label: '香氣', value: '清香持久，帶有豆香或栗香' },
                { label: '滋味', value: '鮮爽甘醇，回甘生津' }
            ]
        },
        {
            icon: 'map',
            title: '產地與等級',
            iconColor: 'text-blue-700',
            bgColor: 'bg-stone-50',
            borderColor: 'border-stone-200',
            content: (
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="font-bold text-blue-800 w-24 flex-shrink-0">核心產區</span>
                        <span className="text-stone-700">浙江省杭州市西湖區，包括獅峰、龍井、雲棲、虎跑、梅家塢五大產區</span>
                    </div>
                    <div className="flex items-start">
                        <span className="font-bold text-blue-800 w-24 flex-shrink-0">等級劃分</span>
                        <span className="text-stone-700">特級、一級至五級，以明前茶（清明前採摘）品質最佳</span>
                    </div>
                    <div className="flex items-start">
                        <span className="font-bold text-blue-800 w-24 flex-shrink-0">採摘標準</span>
                        <span className="text-stone-700">一芽一葉或一芽二葉初展，芽葉長度約2-3公分</span>
                    </div>
                </div>
            )
        }
    ];

    // 時間軸資料
    const timeline = [
        { year: '唐代', desc: '龍井茶區開始種茶，陸羽《茶經》中有記載' },
        { year: '宋代', desc: '龍井茶開始嶄露頭角，成為貢茶' },
        { year: '明代', desc: '龍井茶製作工藝逐漸完善，形成獨特的扁炒工藝' },
        { year: '清代乾隆', desc: '乾隆皇帝六下江南，四次到龍井茶區，御封「十八棵御茶」' },
        { year: '1949年後', desc: '龍井茶被列為中國十大名茶之首' },
        { year: '2011年', desc: '西湖龍井茶獲得國家地理標誌產品保護' }
    ];

    return (
        <div className="animate-fadeIn">
            {/* 封面 */}
            <ArticleHero
                title="西湖龍井茶"
                subtitle="「欲把西湖比西子，從來佳茗似佳人。」中國十大名茶之首，以色綠、香郁、味甘、形美四絕著稱。"
                tag="綠茶・明前茶"
                gradientFrom="emerald-700"
                gradientTo="green-600"
                accentColor="green"
            />

            <div className="space-y-16">
                {/* 特徵卡片 */}
                <FeatureCards features={features} />

                {/* 重點摘要 */}
                <KeyPoints
                    points={[
                        '中國十大名茶之首',
                        '產於杭州西湖區',
                        '明前茶最為珍貴',
                        '扁炒工藝獨特',
                        '色綠香郁味甘形美'
                    ]}
                />

                {/* 歷史與文化 */}
                <ContentSection
                    title="歷史與文化"
                    icon="sparkles"
                    iconColor="text-amber-600"
                    bgColor="bg-amber-50"
                >
                    <h4 className="text-xl font-bold text-stone-900 mb-3">乾隆與龍井茶的不解之緣</h4>
                    <p className="mb-4 text-lg leading-relaxed">
                        清代乾隆皇帝六次南巡，四次來到龍井茶區。相傳乾隆在獅峰山下的胡公廟品茶時，
                        看到幾個村女正在採茶，心中一樂，也學著採起茶來。剛採了一把，太監來報太后有病，
                        乾隆隨手將茶葉放入袋中，日夜兼程趕回京城。
                    </p>
                    <p className="mb-4 text-lg leading-relaxed">
                        太后聞到乾隆身上的清香，原來是袋中茶葉經過體溫烘焙散發出的香氣。
                        太后要了這茶泡飲，病竟然好了。乾隆大喜，御封胡公廟前的十八棵茶樹為「御茶」。
                    </p>

                    <InfoBox type="info">
                        <p className="text-sm leading-relaxed">
                            💡 <strong>小知識：</strong>「十八棵御茶」至今仍保存在龍井村獅峰山下，
                            每年春天採摘的茶葉作為國禮贈送給外國貴賓。
                        </p>
                    </InfoBox>

                    <Quote author="蘇東坡">
                        欲把西湖比西子，從來佳茗似佳人。
                    </Quote>
                </ContentSection>

                {/* 製作工藝 */}
                <ContentSection
                    title="製作工藝"
                    icon="leaf"
                    iconColor="text-green-600"
                    bgColor="bg-white"
                >
                    <h4 className="text-xl font-bold text-stone-900 mb-3">十大手法，成就經典</h4>
                    <p className="mb-4 text-lg leading-relaxed">
                        龍井茶的炒製工藝極為講究，需要在一口光滑的鐵鍋中，
                        運用<strong>抖、搭、捺、拓、甩、扣、挺、抓、壓、磨</strong>十大手法，
                        全程手工完成。整個過程需要掌握火候、力度和時機，是技術與藝術的完美結合。
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
                        <h5 className="font-bold text-lg text-green-900 mb-4">炒製步驟</h5>
                        <ol className="space-y-3 text-stone-700 list-decimal list-inside">
                            <li><strong>青鍋：</strong>高溫殺青，去除青草氣，初步定型</li>
                            <li><strong>回潮：</strong>攤涼茶葉，使水分重新分布均勻</li>
                            <li><strong>輝鍋：</strong>低溫慢炒，進一步乾燥和定型，形成光滑扁平的外形</li>
                        </ol>
                    </div>

                    <InfoBox type="warning">
                        <p className="text-sm leading-relaxed">
                            ⚠️ <strong>注意：</strong>龍井茶的炒製需要多年經驗，
                            鍋溫過高會焦黃，過低則香氣不足。一個熟練的炒茶師傅需要至少5-10年的訓練。
                        </p>
                    </InfoBox>
                </ContentSection>

                {/* 品鑑與沖泡 */}
                <ContentSection
                    title="品鑑與沖泡"
                    icon="star"
                    iconColor="text-purple-600"
                    bgColor="bg-purple-50"
                >
                    <h4 className="text-xl font-bold text-stone-900 mb-3">如何沖泡一杯完美的龍井茶</h4>

                    <div className="grid md:grid-cols-3 gap-6 my-6">
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <div className="text-3xl font-bold text-purple-600 mb-2">85°C</div>
                            <div className="text-sm text-stone-600">水溫</div>
                            <p className="text-xs text-stone-500 mt-2">避免沸水直接沖泡，以免破壞茶葉的鮮爽度</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1:50</div>
                            <div className="text-sm text-stone-600">茶水比例</div>
                            <p className="text-xs text-stone-500 mt-2">3克茶葉搭配150ml水，可根據個人口味調整</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <div className="text-3xl font-bold text-purple-600 mb-2">2-3分</div>
                            <div className="text-sm text-stone-600">浸泡時間</div>
                            <p className="text-xs text-stone-500 mt-2">首泡2分鐘，二泡3分鐘，三泡可延長至5分鐘</p>
                        </div>
                    </div>

                    <h5 className="font-bold text-lg text-stone-900 mb-3 mt-6">推薦沖泡方法</h5>
                    <ol className="space-y-3 text-stone-700 list-decimal list-inside">
                        <li><strong>溫杯：</strong>用熱水溫熱玻璃杯，倒掉</li>
                        <li><strong>投茶：</strong>放入3克龍井茶（約一茶匙）</li>
                        <li><strong>注水：</strong>沿杯壁緩緩注入85°C的水至七分滿</li>
                        <li><strong>觀賞：</strong>欣賞茶葉在水中舒展的「雀舌」姿態</li>
                        <li><strong>品飲：</strong>待茶葉下沉後，即可品飲</li>
                    </ol>

                    <InfoBox type="success">
                        <p className="text-sm leading-relaxed">
                            ✅ <strong>品鑑要點：</strong>優質龍井茶沖泡後，
                            茶湯清澈明亮，香氣清高持久，滋味鮮爽甘醇，葉底嫩綠成朵。
                        </p>
                    </InfoBox>
                </ContentSection>

                {/* 時間軸 */}
                <Timeline events={timeline} />

                {/* 選購與保存 */}
                <ContentSection
                    title="選購與保存"
                    icon="check"
                    iconColor="text-blue-600"
                    bgColor="bg-blue-50"
                >
                    <h4 className="text-xl font-bold text-stone-900 mb-3">如何選購正宗龍井茶</h4>

                    <div className="bg-white border border-blue-200 rounded-lg p-6 my-6">
                        <h5 className="font-bold text-lg text-blue-900 mb-4">四看一聞</h5>
                        <ul className="space-y-3 text-stone-700">
                            <li className="flex items-start">
                                <span className="font-bold text-blue-800 w-16 flex-shrink-0">看形</span>
                                <span>扁平光滑，挺直尖削，長短均勻</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-blue-800 w-16 flex-shrink-0">看色</span>
                                <span>嫩綠鮮潤，忌暗黃或過於翠綠</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-blue-800 w-16 flex-shrink-0">看湯</span>
                                <span>嫩綠明亮，清澈透明</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-blue-800 w-16 flex-shrink-0">看底</span>
                                <span>芽葉細嫩成朵，嫩綠明亮</span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-blue-800 w-16 flex-shrink-0">聞香</span>
                                <span>清香持久，帶有豆香或栗香</span>
                            </li>
                        </ul>
                    </div>

                    <h5 className="font-bold text-lg text-stone-900 mb-3 mt-6">保存方法</h5>
                    <p className="mb-4 text-lg leading-relaxed">
                        龍井茶屬於不發酵的綠茶，容易氧化變質，需要特別注意保存：
                    </p>
                    <ul className="space-y-2 text-stone-700 list-disc list-inside">
                        <li><strong>冷藏保存：</strong>密封後放入冰箱冷藏室（0-5°C），可保存一年</li>
                        <li><strong>避光防潮：</strong>使用不透光的密封罐，放在陰涼乾燥處</li>
                        <li><strong>小包分裝：</strong>分成小包裝，減少開封次數</li>
                        <li><strong>避免異味：</strong>遠離香料、化妝品等有強烈氣味的物品</li>
                    </ul>

                    <InfoBox type="warning">
                        <p className="text-sm leading-relaxed">
                            ⚠️ <strong>提醒：</strong>從冰箱取出的茶葉，
                            應先讓其回溫至室溫後再開封，避免水氣凝結影響茶質。
                        </p>
                    </InfoBox>
                </ContentSection>

                {/* 標籤 */}
                <div>
                    <h4 className="text-lg font-bold text-stone-800 mb-3">相關標籤</h4>
                    <TagGroup
                        tags={[
                            '綠茶',
                            '西湖龍井',
                            '明前茶',
                            '中國十大名茶',
                            '浙江名茶',
                            '扁炒工藝',
                            '國家地理標誌'
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
