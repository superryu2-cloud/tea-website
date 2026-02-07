import React, { useState } from 'react';
import { Leaf, Calendar, MapPin, Award, Info, ChevronDown, ChevronUp, History, Search, ArrowUp } from 'lucide-react';
import ImageModal from '../../components/ImageModal';

export default function TaiwanTeaCultivars() {
    const [sortConfig, setSortConfig] = useState({ key: 'number', direction: 'asc' });
    const [previewImage, setPreviewImage] = useState(null);

    // 歷史引種介紹內容
    const historyContent = (
        <div className="space-y-4 text-stone-700 leading-relaxed font-sans text-[17px]">
            <p>台灣初期茶樹品種均為引入種。</p>
            <p>最初引入者為小葉種種子，繁殖後稱為蒔茶。</p>
            <p>因蒔茶生育不整齊，隨後引入大陸地方品種之壓條苗，並進行無性繁殖(硬枝紅心、大葉烏龍、青心大冇、青心柑仔‧‧等)。</p>
            <p>日據時代為發展紅茶事業，從印度引進大量大葉種種子(阿薩姆等)，供作為繁殖茶苗用。並同時將引入的大葉種品種進行雜交育種。</p>
            <p>台灣光復後茶改場在日本引進的品種改良育成出諸多品種，於民國58年開始選出台茶一至二十六號進行命名。</p>
        </div>
    );

    // 台灣茶樹品種資料
    const cultivars = [
        {
            number: 1, name: '—', alias: '臺農 705 號', parent: 'Kyang (父) x 青心大冇 (母)', location: '—', breedYear: 1916, releaseYear: 1969, type: '極強/橫張', use: '紅茶、眉茶、烏龍茶',
            description: '#台茶1號：父本Kyang，母本青心大冇，民國 58 年命名。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '台茶1號茶園意象'
        },
        {
            number: 2, name: '—', alias: '臺農 478 號', parent: '大葉烏龍 (母) x Jaipuri (父)', location: '—', breedYear: 1916, releaseYear: 1969, type: '強/橫張', use: '紅茶、眉茶、烏龍茶',
            description: '#台茶2號：源自於民國41年（1952年）參加高級試驗的46個品系（含天然雜交14品系，人工雜交32品系），選出20品系於民國50年（1961年）參與區域試驗，至民國57年（1968年）完成選拔。民國58年（1969年）申請命名。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '台茶2號茶葉特寫'
        },
        {
            number: 3, name: '—', alias: '臺農 609 號', parent: '紅心大冇 (母) x Manipuri (父)', location: '—', breedYear: 1916, releaseYear: 1969, type: '強/稍直立', use: '紅茶、眉茶',
            description: '#台茶3號：源自於民國41年（1952年）參加高級試驗的46個品系（含天然雜交14品系，人工雜交32品系），選出20品系於民國50年（1961年）參與區域試驗，至民國57年（1968年）完成選拔。民國58年申請命名。',
            image: '/images/cultivars/bg_teaset.png', imageAlt: '台茶3號品茗情境'
        },
        {
            number: 4, name: '—', alias: '臺農 684 號', parent: '紅心大冇 (母) x Manipuri (父)', location: '—', breedYear: 1916, releaseYear: 1969, type: '中/稍直立', use: '紅茶、眉茶',
            description: '#台茶4號：利用母本紅心大冇與父本Manipuri經人工雜交而來，原品系代號為684號，在1969年命名為台茶4號。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '台茶4號茶園'
        },
        {
            number: 5, name: '—', alias: '臺農 105 號', parent: '福州系天然雜交', location: '—', breedYear: 1928, releaseYear: 1973, type: '中/橫張', use: '烏龍茶、綠茶、包種茶',
            description: '#台茶5號：源自福州母系之天然雜交後裔篩選得到，雜交年代介於1931至1940年間，原品系代號為台農105號，在1974年(民國63年)命名為台茶5號。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '台茶5號茶葉'
        },
        {
            number: 6, name: '—', alias: '臺農 121 號', parent: '青心烏龍系天然雜交', location: '—', breedYear: 1928, releaseYear: 1973, type: '強/稍直立', use: '綠茶、紅茶、烏龍茶',
            description: '#台茶6號：源自青心烏龍母系之天然雜交後裔篩選得到，雜交年代介於1931至1940年間，原品系代號為台農121號，在1974年命名為台茶6號。',
            image: '/images/cultivars/bg_teaset.png', imageAlt: '台茶6號'
        },
        {
            number: 7, name: '—', alias: '5118 號', parent: 'Shan 系統單株選拔', location: '—', breedYear: 1941, releaseYear: 1973, type: '極強/橫張', use: '紅茶',
            description: '#台茶7號：60年在泰國引進之Shan系統中選出(此品種母本Shan為郭少三先生自泰國引進茶樹種子繁殖而成，現仍種植於南投縣埔里鎮東邦茶園，Shan屬於大葉變種)，原為5118號品系，民國63年命名。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '台茶7號'
        },
        {
            number: 8, name: '—', alias: '184 號', parent: 'Jaipuri 系統單株選拔', location: '—', breedYear: 1941, releaseYear: 1973, type: '強/直立', use: '紅茶',
            description: '#台茶8號：從印度引進阿蕯姆Jaipuri系統的改良品種，原為184品系，是1974年命名。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '台茶8號'
        },
        {
            number: 9, name: '—', alias: '臺農 435 號', parent: '紅心大冇 (母) x Kyang (父)', location: '—', breedYear: 1947, releaseYear: 1975, type: '極強/橫張', use: '綠茶、紅茶',
            description: '#台茶9號：利用母本紅心大冇與父本Kyang經人工雜交而來，原品系代號為435號，在1975年命名為台茶9號。',
            image: '/images/cultivars/bg_teaset.png', imageAlt: '台茶9號'
        },
        {
            number: 10, name: '—', alias: '臺農 358 號', parent: '黃柑 (母) x Jaipuri (父)', location: '—', breedYear: 1947, releaseYear: 1975, type: '強/橫張', use: '綠茶、紅茶',
            description: '#台茶10號：利用母本黃柑與父本Jaipuri經人工雜交而來，原品系代號為358號，在1975年(民國64年)命名為台茶10號。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '台茶10號'
        },
        {
            number: 11, name: '—', alias: '311 號', parent: '大葉烏龍 (母) x Jaipuri (父)', location: '—', breedYear: 1947, releaseYear: 1975, type: '強/稍直立', use: '綠茶、紅茶',
            description: '#台茶11號：利用母本大葉烏龍與父本Jaipuri經人工雜交而來，原品系代號為311號，在1975年命名為台茶11號。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '台茶11號'
        },
        {
            number: 12, name: '金萱', alias: '2027 / 27仔', parent: '臺農8號 (母) x 硬枝紅心 (父)', location: '—', breedYear: 1938, releaseYear: 1981, type: '強/橫張', use: '烏龍茶、包種茶',
            description: '#台茶12號：（金萱、二十七仔）。母本台農8號+父本硬枝紅心之雜交後裔，試驗代號為2027，茶改場成功育種的排列順序第十二號。於民國70年命名',
            image: '/images/cultivars/jinxuan12.png', imageAlt: '金萱 (台茶12號) - 奶香韻味'
        },
        {
            number: 13, name: '翠玉', alias: '2029 / 29仔', parent: '硬枝紅心 (母) x 臺農80號 (父)', location: '—', breedYear: 1938, releaseYear: 1981, type: '中/直立', use: '烏龍茶、包種茶',
            description: '#台茶13號：(翠玉、十三號仔、二十九仔)。母本硬枝紅心+父本台農80號之雜交後裔，試驗代號為2029，茶改場成功育種的排列順序第十三號。於民國70年命名。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '翠玉 (台茶13號)'
        },
        {
            number: 14, name: '白文', alias: '72-145', parent: '臺農983號 (母) x 白毛猴 (父)', location: '—', breedYear: 1960, releaseYear: 1983, type: '中上/橫張', use: '烏龍茶、包種茶',
            description: '#台茶14號：(白文)。利用母本台農983號與父本白毛猴經人工雜交而來，原品系代號為72-145號，在1983年命名為台茶14號。其母本台農983號為利用母本黃柑與父本Kyang雜交而來',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '白文 (台茶14號)'
        },
        {
            number: 15, name: '白燕', alias: '72-215', parent: '臺農983號 (母) x 白毛猴 (父)', location: '—', breedYear: 1960, releaseYear: 1983, type: '中上/橫張', use: '烏龍茶、白茶',
            description: '#台茶15號：(白燕)。源自於民國49年（1960年）10月起，以白毛猴品種為父本，與優良品系進行人工雜交，經各項育種篩選，至民國70年（1981年）區域試驗完成，開始申請品種命名，同期共有5個品系申請命名，其中4個品系獲得品種名。是利用母本台農983號與父本白毛猴經人工雜交而來，原品系代號為72-215號，在1983年命名為台茶15號。其母本台農983號為利用母本黃柑與父本Kyang雜交而來。',
            image: '/images/cultivars/bg_teaset.png', imageAlt: '白燕 (台茶15號)'
        },
        {
            number: 16, name: '白鶴', alias: '72-283', parent: '臺農335號 (母) x 臺農1958號 (父)', location: '—', breedYear: 1960, releaseYear: 1983, type: '強/直立', use: '龍井、包種花胚',
            description: '#台茶16號：(白鶴)。源自於民國49年（1960年）10月起，以白毛猴品種為父本，與優良品系進行人工雜交，經各項育種篩選，至民國70年（1981年）區域試驗完成，開始申請品種命名，同期共有5個品系申請命名，其中4個品系獲得品種名。利用母本台農335號與父本台農1958號經人工雜交而來，原品系代號為72-283號，在1983年命名為台茶16號。其母本台農335號為利用母本大葉烏龍與父本Kyang雜交而來。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '白鶴 (台茶16號)'
        },
        {
            number: 17, name: '白鷺', alias: '72-322', parent: '臺農335號 (母) x 臺農1958號 (父)', location: '—', breedYear: 1960, releaseYear: 1983, type: '強/直立', use: '烏龍茶、壽眉',
            description: '#台茶17號：(白鷺)。選自1960年(民國49年)之人工雜交後裔，父本為台農1958號（台農20號（漢口系） X白毛猴），母本為台農335號（大葉烏龍 X Kyang），原品系代號為72-322號，在1983年(民國72年)命名為台茶17號。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '白鷺 (台茶17號)'
        },
        {
            number: 18, name: '紅玉', alias: 'B-10-58', parent: '緬甸大葉種 (母) x 台灣野生山茶 (父)', location: '—', breedYear: 1946, releaseYear: 1999, type: '強/直立', use: '紅茶',
            description: '#台茶18號：(紅玉)。其母本為（緬甸大葉種B-729）+父本（台灣野生山茶B-607）之雜交後裔，歷經50餘年的試驗研究選出適製優良紅茶品種（品系代號：B-40-58），並於民國88年6月經前台灣省農林廳審查通過，正式登記命名為－台茶18號；且於92年茶業改良場百周年慶票選俗名為『紅玉』。',
            image: '/images/cultivars/ruby18.png', imageAlt: '紅玉 (台茶18號) - 薄荷肉桂香'
        },
        {
            number: 19, name: '碧玉', alias: '51-14 品系', parent: '臺茶12號 (母) x 青心烏龍 (父)', location: '—', breedYear: 1962, releaseYear: 2004, type: '強/橫張', use: '包種茶、烏龍茶', hasRights: true,
            description: '#台茶19號：(碧玉)。原品系為51～14，親本： 台茶12號× 青心烏龍，1962年雜交，2004年1月通過命名， 2004（民國93）年9月22日在農業委員會辦理優質烏龍茶品賞會公開票選俗名為「碧玉」。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '碧玉 (台茶19號)'
        },
        {
            number: 20, name: '迎香', alias: '51-67 品系', parent: '2022品系 (母) x 青心烏龍 (父)', location: '—', breedYear: 1962, releaseYear: 2004, type: '強/橫張', use: '包種茶、烏龍茶', hasRights: true,
            description: '#台茶20號：(迎香)。原品系為51～67，親本： 2022× 青心烏龍，1962年雜交，2004年1月通過命名，2004（民國93）年9月22日在農業委員會辦理優質烏龍茶品賞會公開票選俗名為「迎香」。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '迎香 (台茶20號)'
        },
        {
            number: 21, name: '紅韻', alias: 'FKK-22', parent: '祈門 Kymun (母) x Kyang (父)', location: '—', breedYear: 1953, releaseYear: 2008, type: '強/直立', use: '紅茶',
            description: '#台茶21號：(紅韻)。此品種於2008年10月17日 經審查通過，正式命名為「台茶21號」；且於2008年10月24日 為故新井耕吉郎支所長塑像揭幕式後，另取別名為「紅韻」。',
            image: '/images/cultivars/bg_teaset.png', imageAlt: '紅韻 (台茶21號)'
        },
        {
            number: 22, name: '沁玉', alias: 'TC6', parent: '臺茶12號 (母) x 青心烏龍 (父)', location: '—', breedYear: 1996, releaseYear: 2014, type: '強/橫張', use: '包種茶、烏龍茶', hasRights: true,
            description: '#台茶22號：(沁玉)。茶業改良場於民國85年，進行適於中、低海拔栽培高香氣高品質之茶樹育種，選定適當之組合人工雜交。次年 (86年) 播種，88年3月定植單株，經過6年個體試驗後，於民國97年選育成績優異的22個品系進入品系比較試驗。 101年完成品系比較試驗，選出台茶22號，並於103年通過品種命名與取得品種權。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '沁玉 (台茶22號)'
        },
        {
            number: 23, name: '祁韻', alias: '祁辦 1', parent: '祁門系之天然雜交', location: '—', breedYear: 1938, releaseYear: 2017, type: '強/中間', use: '紅茶',
            description: '#台茶23號：(祁韻)。魚池分場自台北帝國大學山本亮教授27年於安徽省祁門茶區採集之茶樹種子，由台灣總督府中央研究所魚池紅茶試驗支所（即茶業改良場魚池分場前身）經多年觀察試驗研究，於90年挑選品系「祁辦1」於 106 年命名。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '祁韻 (台茶23號)'
        },
        {
            number: 24, name: '山蘊', alias: '臺東永康 1 號', parent: '臺灣原生山茶永康變種', location: '—', breedYear: 2001, releaseYear: 2019, type: '強/硬張', use: '綠茶、紅茶',
            description: '#台茶24號：(山蘊)。民國 89 年開始，台東分場即深入台東縣延平鄉泰平山區進行原生山茶調查與標記。經過扦插繁殖種植，並在台東分場茶樹育種母本區進行馴化栽培試驗，育種期間研究人員不斷探究山區原生茶樹種植於平地的可行性。19 年時光，通過種種試驗程序、歷經單株選拔與一系列優良品系的比較試驗，終於成功育種，以「台茶24號」的嶄新身份登場。',
            image: '/images/cultivars/mountain24.png', imageAlt: '山蘊 (台茶24號)'
        },
        {
            number: 25, name: '紫韻', alias: '84-91-3-2', parent: '緬甸 Burma (母) x 臺茶 13 號 (父)', location: '—', breedYear: 1992, releaseYear: 2021, type: '強/中間', use: '綠茶、紅茶', hasRights: true,
            description: '#台茶25號：(紫韻)。是天然雜交而成，源自從茶改場園區找出2000多顆種子，定植出400多棵茶樹，再從中選育出，母本是緬甸Burma大葉種，父本台茶13號，2021年4月26日通過命名為「台茶25號」。',
            image: '/images/cultivars/bg_plantation.png', imageAlt: '紫韻 (台茶25號)'
        },
        {
            number: 26, name: '豐鶴', alias: '5313品系', parent: '祁門系單株選拔', location: '—', breedYear: 2008, releaseYear: 2024, type: '強/茶芽直立', use: '綠茶、紅茶', hasRights: true,
            description: '#台茶26號：(豐鶴) 。自97年起由一系列育種試驗程序的品系圃中，最終選出適合製造綠茶與紅茶的5313品系(祁門茶樹選拔)，並於113年6月11日正式通過審查命名為「台茶26號」。',
            image: '/images/cultivars/bg_leaves.png', imageAlt: '豐鶴 (台茶26號)'
        }
    ];

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedCultivars = [...cultivars].sort((a, b) => {
        if (a.isPlaceholder) return 1;
        if (b.isPlaceholder) return -1;

        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue === null) return 1;
        if (bValue === null) return -1;

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const SortIcon = ({ columnKey }) => {
        if (sortConfig.key !== columnKey) {
            return <ChevronDown className="inline ml-1 opacity-30" size={14} />;
        }
        return sortConfig.direction === 'asc' ?
            <ChevronUp className="inline ml-1" size={14} /> :
            <ChevronDown className="inline ml-1" size={14} />;
    };

    // 品種分類顏色邏輯
    const getVarietyStyle = (number) => {
        // 大葉種: 7, 8, 18, 21, 25
        if ([7, 8, 18, 21, 25].includes(number)) {
            return {
                bg: 'bg-[#008d00]', // 深綠色
                text: 'text-white',
                label: '大葉種'
            };
        }
        // 臺灣原生山茶: 24
        if (number === 24) {
            return {
                bg: 'bg-[#ffe4e1]', // 粉紅色
                text: 'text-[#d64545]',
                label: '原生山茶'
            };
        }
        // 小葉種: 其他
        return {
            bg: 'bg-[#e6f4ea]', // 淺綠色
            text: 'text-[#1e7e34]',
            label: '小葉種'
        };
    };

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-amber-50 px-8 pt-10 pb-12 md:pt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                    <img src="/images/cultivars/bg_plantation.png" alt="" className="w-full h-96 object-cover opacity-20 mask-gradient-to-b" />
                </div>
                <div className="text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-600 text-white text-xs font-bold mb-4">
                        <Leaf size={14} />
                        TAIWAN TEA CULTIVARS
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-sans">
                        台灣茶樹品種
                    </h1>
                    <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                        茶及飲料作物改良場育成之台茶 1 號至 26 號完整圖鑑
                    </p>
                </div>
            </div>

            {/* History Section */}
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
                <div
                    className="rounded-2xl overflow-hidden shadow-md cursor-zoom-in relative group aspect-video md:aspect-auto md:h-full"
                    onClick={() => setPreviewImage({ src: '/images/cultivars/history_research.png', alt: '台灣茶葉育種歷史情境' })}
                >
                    <img src="/images/cultivars/history_research.png" alt="台灣茶葉育種歷史" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        育種歷史情境
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-xl mb-2">
                        <History className="text-amber-600" />
                        引種與育種歷史
                    </div>
                    {historyContent}
                </div>
            </div>

            {/* Quick Stats & Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Info Box */}
                <div className="md:col-span-1 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <div className="flex items-start gap-3">
                        <Info className="text-amber-700 flex-shrink-0 mt-1" size={20} />
                        <div>
                            <h3 className="font-bold text-amber-900 mb-2">關於本表格</h3>
                            <p className="text-base text-amber-800 leading-relaxed">
                                本表格收錄由茶業改良場育成之台茶1號至台茶26號。
                                上方表格提供快速數據比較，下方卡片提供詳細品種故事與介紹。
                            </p>
                        </div>
                    </div>
                </div>
                {/* Legend */}
                <div className="md:col-span-2 rounded-2xl border border-stone-200 bg-white p-6">
                    <h3 className="font-bold text-stone-900 mb-4 flex items-center gap-2">
                        <Info size={18} className="text-stone-600" />
                        表格欄位說明
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-base">
                        <div>
                            <strong className="text-stone-800">樹勢：</strong>
                            <span className="text-stone-600">極強、強、中</span>
                        </div>
                        <div>
                            <strong className="text-stone-800">樹型：</strong>
                            <span className="text-stone-600">直立、稍直立、橫張、中間</span>
                        </div>
                        <div className="md:col-span-2">
                            <strong className="text-stone-800">適製性：</strong>
                            <span className="text-stone-600">表示該品種適合製作的茶類</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl border border-stone-200 bg-white p-4 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute -right-2 -top-2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <img src="/images/cultivars/icon_cultivar_certificate.png" alt="Diversity" className="w-24 h-24 object-contain" />
                    </div>
                    <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-50 flex items-center justify-center">
                            <img src="/images/cultivars/icon_cultivar_certificate.png" alt="Registered" className="w-8 h-8 object-contain opacity-80" />
                        </div>
                        <div className="text-3xl font-bold text-green-700 mb-1">26</div>
                        <div className="text-xs text-stone-600 font-bold">已登記品種</div>
                    </div>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-4 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                        <img src="/images/cultivars/icon_cultivar_history.png" alt="History" className="w-28 h-28 object-contain" />
                    </div>
                    <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-amber-50 flex items-center justify-center">
                            <img src="/images/cultivars/icon_cultivar_history.png" alt="History" className="w-8 h-8 object-contain opacity-80" />
                        </div>
                        <div className="text-3xl font-bold text-amber-700 mb-1">1916</div>
                        <div className="text-xs text-stone-600 font-bold">最早育種年</div>
                    </div>
                </div>
                <div className="rounded-xl border border-stone-200 bg-white p-4 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute -left-2 -top-2 opacity-10 group-hover:opacity-20 transition-opacity -rotate-12">
                        <img src="/images/cultivars/icon_cultivar_new_sprout.png" alt="New" className="w-24 h-24 object-contain" />
                    </div>
                    <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-red-50 flex items-center justify-center">
                            <img src="/images/cultivars/icon_cultivar_new_sprout.png" alt="New" className="w-8 h-8 object-contain opacity-80" />
                        </div>
                        <div className="text-3xl font-bold text-red-700 mb-1">2024</div>
                        <div className="text-xs text-stone-600 font-bold">最新命名年</div>
                    </div>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <img src="/images/cultivars/icon_cultivar_research.png" alt="Pending" className="w-20 h-20 object-contain" />
                    </div>
                    <div className="relative z-10 text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/50 flex items-center justify-center">
                            <img src="/images/cultivars/icon_cultivar_research.png" alt="Data" className="w-8 h-8 object-contain opacity-80" />
                        </div>
                        <div className="text-3xl font-bold text-amber-800 mb-1">0</div>
                        <div className="text-xs text-amber-700 font-bold">待補充資料</div>
                    </div>
                </div>
            </div>

            {/* SECTION 1: COMPARATIVE TABLE */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 px-2">
                    <div className="p-2 bg-stone-100 rounded-lg text-stone-600">
                        <Search size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-stone-800">品種數據比較表</h2>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-base">
                            <thead className="bg-gradient-to-r from-stone-800 to-stone-700 text-white">
                                <tr>
                                    <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors whitespace-nowrap" onClick={() => handleSort('number')}>
                                        品種 <SortIcon columnKey="number" />
                                    </th>
                                    <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors whitespace-nowrap" onClick={() => handleSort('name')}>
                                        名稱 <SortIcon columnKey="name" />
                                    </th>
                                    <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors whitespace-nowrap" onClick={() => handleSort('alias')}>
                                        品系名稱 <SortIcon columnKey="alias" />
                                    </th>
                                    <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors whitespace-nowrap" onClick={() => handleSort('parent')}>
                                        親本 (母 x 父) <SortIcon columnKey="parent" />
                                    </th>
                                    <th
                                        className="px-4 py-3 text-center cursor-pointer hover:bg-stone-800 transition-colors"
                                        onClick={() => handleSort('breedYear')}
                                    >
                                        雜交 / 命名年 <SortIcon columnKey="breedYear" />
                                    </th>
                                    <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors whitespace-nowrap" onClick={() => handleSort('type')}>
                                        樹勢/樹型 <SortIcon columnKey="type" />
                                    </th>
                                    <th className="px-4 py-4 text-left font-bold cursor-pointer hover:bg-stone-600 transition-colors whitespace-nowrap" onClick={() => handleSort('use')}>
                                        適製性 <SortIcon columnKey="use" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCultivars.map((cultivar, index) => (
                                    <tr
                                        id={`table-row-${cultivar.number}`}
                                        key={cultivar.number}
                                        className={`
                                            border-b border-stone-100 hover:bg-stone-50 transition-colors [&>td]:align-middle
                                            ${index % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}
                                        `}
                                    >
                                        <td
                                            className={`px-4 py-3 font-bold whitespace-nowrap cursor-pointer transition-colors group/row`}
                                            onClick={() => {
                                                const el = document.getElementById(`cultivar-${cultivar.number}`);
                                                if (el) {
                                                    const headerOffset = 100;
                                                    const elementPosition = el.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                    window.scrollTo({
                                                        top: offsetPosition,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }}
                                            title="點擊跳轉至詳細介紹"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`flex items-center justify-center min-w-[100px] py-1.5 px-3 rounded-lg shadow-sm font-sans ${getVarietyStyle(cultivar.number).bg} ${getVarietyStyle(cultivar.number).text}`}>
                                                    <span>臺茶 {cultivar.number} 號</span>
                                                </div>
                                                {cultivar.hasRights && (
                                                    <span className="text-4xl text-amber-500 drop-shadow-sm select-none animate-pulse" title="具備品種權">
                                                        ®
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-semibold text-stone-900 whitespace-nowrap">
                                            {cultivar.name !== '—' ? cultivar.name : <span className="text-stone-300">—</span>}
                                        </td>
                                        <td className="px-4 py-3 text-stone-600 text-base">
                                            {cultivar.alias}
                                        </td>
                                        <td className="px-4 py-3 text-stone-600 text-base max-w-[200px]" title={cultivar.parent}>
                                            {(() => {
                                                const parentStr = cultivar.parent;
                                                // Only process if distinct parent markers exist and duplicate strings from greedy regex are avoided by splitting
                                                if (parentStr.includes('(母)') && parentStr.includes('(父)')) {
                                                    const parts = parentStr.split('x');
                                                    if (parts.length >= 2) {
                                                        let mother = parts.find(p => p.includes('(母)'));
                                                        let father = parts.find(p => p.includes('(父)'));

                                                        if (mother && father) {
                                                            mother = mother.replace('(母)', '').trim();
                                                            father = father.replace('(父)', '').trim();

                                                            return (
                                                                <div className="flex flex-col gap-1">
                                                                    <div className="flex items-center gap-1.5">
                                                                        <span className="px-1.5 py-0.5 bg-rose-100 text-rose-700 rounded text-xs font-bold">母</span>
                                                                        <span className="truncate">{mother}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-1.5">
                                                                        <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-bold">父</span>
                                                                        <span className="truncate">{father}</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    }
                                                }
                                                return parentStr;
                                            })()}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <div className="flex flex-col items-center gap-1.5">
                                                <span className="text-stone-500 text-sm font-medium">{cultivar.breedYear}</span>
                                                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-sm">
                                                    {cultivar.releaseYear}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-stone-600 text-base">
                                            {cultivar.type}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex flex-wrap gap-1">
                                                {cultivar.use.split('、').map((use, i) => (
                                                    <span key={i} className="inline-block px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded text-xs">
                                                        {use}
                                                    </span>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Table Footer / Source Card */}
                <div className="mt-4 bg-stone-50/50 rounded-xl p-4 border border-stone-200 shadow-sm">
                    <div className="space-y-2">
                        <p className="text-sm text-stone-700 font-sans leading-relaxed">
                            <span className="font-bold">註：</span>眉茶及龍井均屬於綠茶，包種花胚屬於包種茶，壽眉屬於白茶。
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-stone-200/60">
                            <p className="text-xs text-stone-500 font-serif">
                                作物改良科遺傳育種及生物技術研究室
                            </p>
                            <p className="text-xs text-stone-400 font-mono">
                                修正製表日期：115.02.07
                            </p>
                        </div>
                    </div>
                </div>

                {/* Legend and Detailed Notes */}
                <div className="mt-8 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Variety Classification Card */}
                        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 h-full">
                            <h4 className="font-bold text-stone-900 flex items-center gap-2 mb-4">
                                <Info size={18} className="text-stone-600" />
                                分類圖例與形態特徵
                            </h4>
                            <div className="flex flex-wrap gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-[#e6f4ea] border border-[#d1e7dd]" />
                                    <span className="text-sm font-medium text-stone-700">小葉種</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-[#008d00]" />
                                    <span className="text-sm font-medium text-stone-700">大葉種</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-[#ffe4e1] border border-[#f5c6cb]" />
                                    <span className="text-sm font-medium text-stone-700">臺灣原生山茶</span>
                                </div>
                            </div>
                            <p className="text-[17px] text-stone-600 leading-relaxed">
                                這些品種的大部分形態特徵與母本較為相像（因為在繁殖的時候，母本提供細胞質、葉綠體等細胞主要成分，而父本的花粉僅提供<span className="text-emerald-700 font-bold">精核</span>）。
                                <br /><br />
                                表中以<span className="px-1.5 py-0.5 rounded bg-[#e6f4ea] text-[#1e7e34] font-bold mx-0.5 border border-[#d1e7dd]">淺綠色</span>代表小葉種、
                                <span className="px-1.5 py-0.5 rounded bg-[#008d00] text-white font-bold mx-0.5">深綠色</span>代表大葉種，
                                <span className="px-1.5 py-0.5 rounded bg-[#ffe4e1] text-[#d64545] font-bold mx-0.5 border border-[#f5c6cb]">粉紅色</span>代表臺灣原生山茶。
                            </p>
                        </div>

                        {/* Lineage Notes Card */}
                        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 h-full">
                            <h4 className="font-bold text-stone-900 flex items-center gap-2 mb-4">
                                <Award size={18} className="text-stone-600" />
                                親本註解 (Lineage Notes)
                            </h4>
                            <ul className="text-[17px] text-stone-600 space-y-2 list-none font-sans">
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>臺農 8 號：青心烏龍 x 黃柑</span></li>
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>臺農 80 號：漢口系 x 不詳</span></li>
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>臺農 983 號：黃柑 x Kyang</span></li>
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>臺農 335 號：大葉烏龍 x Kyang</span></li>
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>臺農 1958 號：台農 20 號 (漢口系) x 白毛猴</span></li>
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>2022 品系：大葉烏龍 x 台農 80 號</span></li>
                                <li className="flex gap-2"><span className="text-stone-400">*</span> <span>FKK-1：Kyang x 祁門 Kimen</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Prominent ® Symbol Explanation Banner */}
                    <div className="bg-white/80 p-6 rounded-2xl border border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl text-amber-500 animate-pulse select-none">®</span>
                            <p className="text-[17px] text-stone-700 font-medium leading-relaxed">
                                表格中有部分品種名稱後面有個「<span className="text-3xl text-amber-500 animate-pulse align-middle mx-1">®</span>」符號，即代表其受到法規保護。
                            </p>
                        </div>
                        <div className="h-px w-12 bg-emerald-100 md:h-8 md:w-px" />
                        <p className="text-[17px] text-stone-500 italic">
                            ( 其中 臺茶 26 號 品種權申請中 )
                        </p>
                    </div>

                    {/* Variety Rights Protection Card (Detailed) */}
                    <div className="bg-emerald-50/40 rounded-2xl p-8 border border-emerald-100 shadow-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <h4 className="font-bold text-emerald-900 flex items-center gap-2 text-lg">
                                    <span className="text-3xl text-amber-500 animate-pulse select-none">®</span>
                                    植物品種權與法律保護
                                </h4>
                                <div className="text-[17px] text-stone-700 leading-relaxed space-y-4">
                                    <p>
                                        一個品種的育成，從雜交開始算起約需要 <span className="font-bold text-emerald-800">20 年</span>，途中要針對所有品系在不同種植環境的性狀進行複雜的分析與統計，可以說是相當不容易。
                                    </p>
                                    <p className="bg-white/60 p-4 rounded-lg border border-emerald-200/50 italic text-[17px] text-stone-600">
                                        為保護品種所有者的權利，國家訂有<span className="font-semibold text-emerald-800">《植物品種及種苗法》</span>，明確定義品種為：
                                        「指最低植物分類群內之植物群體，其性狀由單一基因型或若干基因型組合所表現，能以至少一個性狀與任何其他植物群體區別，經指定繁殖方法下其主要性狀維持不變者。」
                                    </p>
                                    <p>
                                        如同智慧財產權，品種權保障所有權人（通常是育種家）的心血結晶，進而促進育種事業發展。
                                        目前茶改場育成的茶樹品種中，有 <span className="font-bold text-emerald-800 underline decoration-amber-400 decoration-2 underline-offset-4">5 個品種</span> 已取得品種權或正在申請中。
                                    </p>
                                </div>
                            </div>

                            {/* Certificate Gallery */}
                            <div className="w-full md:w-80 space-y-4">
                                <p className="text-sm font-bold text-emerald-900 flex items-center gap-2 mb-2">
                                    <Leaf size={16} /> 實體證書存檔 (點擊放大)
                                </p>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { id: '19', name: '臺茶 19 號 (碧玉)', file: 'cert_ttes19.jpg' },
                                        { id: '20', name: '臺茶 20 號 (迎香)', file: 'cert_ttes20.jpg' },
                                        { id: '22', name: '臺茶 22 號 (沁玉)', file: 'cert_ttes22.jpg' }
                                    ].map((cert) => (
                                        <div
                                            key={cert.id}
                                            className="group cursor-zoom-in relative rounded-lg overflow-hidden border border-emerald-200/50 shadow-sm transition-all hover:shadow-md hover:border-emerald-300"
                                            onClick={() => setPreviewImage({
                                                src: `/images/cultivars/${cert.file}`,
                                                alt: `${cert.name} 植物品種權證書`
                                            })}
                                        >
                                            <img
                                                src={`/images/cultivars/${cert.file}`}
                                                alt={cert.name}
                                                className="w-full h-24 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                                <span className="text-white text-[10px] font-medium">{cert.name} 證書</span>
                                            </div>
                                            <div className="bg-white/90 p-1.5 text-center border-t border-emerald-50">
                                                <span className="text-[11px] font-bold text-emerald-800">{cert.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* SECTION 2: DETAILED PROFILES */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 px-2 mt-8">
                    <div className="p-2 bg-green-100 rounded-lg text-green-700">
                        <Award size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-stone-800">品種詳細圖鑑</h2>
                </div>

                {/* Cultivar Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cultivars.map((cultivar) => (
                        <div
                            id={`cultivar-${cultivar.number}`}
                            key={cultivar.number}
                            className={`
                            rounded-2xl border bg-white overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-all duration-300
                            ${cultivar.image ? 'border-stone-200' : 'border-stone-100'}
                        `}
                        >
                            {/* Image or Pattern Header */}
                            <div
                                className={`h-48 overflow-hidden relative ${cultivar.image ? 'cursor-zoom-in group' : 'bg-stone-50'}`}
                                onClick={() => cultivar.image && setPreviewImage({ src: cultivar.image, alt: cultivar.imageAlt })}
                            >
                                {cultivar.image ? (
                                    <img
                                        src={cultivar.image}
                                        alt={cultivar.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center opacity-10 bg-[url('/images/cultivars/generic_oolong.png')] bg-cover bg-center">
                                        {/* Fallback pattern bg */}
                                    </div>
                                )}

                                {/* Number Badge */}
                                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center font-bold text-xl text-stone-800 shadow-md border border-stone-100">
                                    {cultivar.number}
                                </div>

                                {/* Type/Use Pills */}
                                <div className="absolute top-4 right-4 flex flex-col gap-1 items-end">
                                    <span className="px-2 py-0.5 bg-black/50 text-white text-[10px] backdrop-blur-md rounded-full">
                                        {cultivar.releaseYear}年
                                    </span>
                                </div>

                                {/* Name Overlay (Bottom) */}
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="text-white text-xl font-bold">
                                        {cultivar.name === '—' ? `台茶 ${cultivar.number} 號` : cultivar.name}
                                    </div>
                                    <div className="text-white/80 text-xs mt-0.5">
                                        {cultivar.alias}
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex-1 flex flex-col gap-4">
                                {/* Metadata Grid */}
                                <div className="grid grid-cols-2 gap-y-2 text-xs text-stone-500 bg-stone-50 p-3 rounded-xl border border-stone-100">
                                    <div className="col-span-2 flex gap-1">
                                        <span className="font-bold text-stone-700 shrink-0">親本:</span>
                                        <span>{cultivar.parent}</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-stone-700">樹勢:</span> {cultivar.type}
                                    </div>
                                    <div>
                                        <span className="font-bold text-stone-700">命名:</span> {cultivar.releaseYear}
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-bold text-stone-700">適製:</span> {cultivar.use}
                                    </div>
                                </div>

                                {/* Description Text */}
                                <div className="text-base text-stone-700 leading-7 text-justify pt-2 border-t border-stone-100">
                                    {cultivar.description && cultivar.description.split('：').length > 1 ? (
                                        <>
                                            <span className="font-bold text-stone-900 mb-1 block">
                                                {cultivar.description.split('：')[0]}
                                            </span>
                                            {cultivar.description.substring(cultivar.description.indexOf('：') + 1)}
                                        </>
                                    ) : (
                                        cultivar.description
                                    )}
                                </div>

                                <div className="mt-auto pt-2 flex justify-end">
                                    <button
                                        onClick={() => {
                                            const el = document.getElementById(`table-row-${cultivar.number}`);
                                            if (el) {
                                                const headerOffset = 100;
                                                const elementPosition = el.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth"
                                                });
                                                // Highlight the row briefly
                                                el.classList.remove('transition-colors');
                                                el.style.backgroundColor = '#ecfccb'; // lime-100
                                                setTimeout(() => {
                                                    el.classList.add('transition-colors');
                                                    el.style.backgroundColor = '';
                                                }, 1000);
                                            }
                                        }}
                                        className="text-xs font-bold text-stone-400 hover:text-green-600 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-stone-50"
                                    >
                                        <ArrowUp size={12} />
                                        回到列表
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Lightbox Modal */}
                {previewImage && (
                    <ImageModal
                        isOpen={true}
                        src={previewImage.src}
                        alt={previewImage.alt}
                        onClose={() => setPreviewImage(null)}
                    />
                )}
            </div>
        </div>
    );
}
