// 茶器資料 - 常用茶器介紹區塊
// 包含所有 32 個茶器的資訊

/**
 * 有圖片的精選茶器（3 個）
 * 這些茶器會以左圖右文的橫式卡片顯示
 */
export const featuredUtensils = [
    {
        name: "茶壺",
        desc: "中華茶文化博大精深部分。",
        image: "/images/utensils/teapot.png",
        hasImage: true
    },
    {
        name: "茶盤",
        desc: "放茶具，下層盛水。",
        image: "/images/utensils/tea_tray.png",
        hasImage: true
    },
    {
        name: "茶杯",
        desc: "聞香杯(高)、就口杯(矮)。",
        image: "/images/utensils/tea_cups.png",
        hasImage: true
    },
];

/**
 * 其他茶器（29 個）
 * 這些茶器會以網格卡片顯示
 */
export const otherUtensils = [
    { name: "茶船/茶池", desc: "承接沖泡溢出之水。" },
    { name: "壺盛/壺承", desc: "承接溢水，乾式泡法常用。" },
    { name: "壺墊", desc: "保護壺底，避免摩擦。" },
    { name: "勻杯/茶海", desc: "均勻茶湯、沉澱茶屑。" },
    { name: "茶巾", desc: "保持清潔，擦拭水漬。" },
    { name: "茶夾", desc: "清壺夾茶葉用。" },
    { name: "茶撥", desc: "撥動茶葉入壺及理茶。" },
    { name: "茶荷", desc: "置茶、賞茶、量茶。" },
    { name: "茶漏", desc: "置壺口防茶葉散落。" },
    { name: "水盂", desc: "裝置廢水。" },
    { name: "渣方", desc: "裝置茶渣雜物。" },
    { name: "茶則", desc: "取茶葉入壺，避免手觸。" },
    { name: "茶倉", desc: "存放茶葉之罐。" },
    { name: "蓋置", desc: "放置壺蓋處。" },
    { name: "鑑定杯", desc: "比賽評茶用(150cc)。" },
    { name: "則置", desc: "放茶夾、茶撥之處。" },
    { name: "茶掏", desc: "清壺用，竹製為佳。" },
    { name: "杯托", desc: "放杯子，防沾濕桌面。" },
    { name: "茗壺", desc: "燒水壺之美名。" },
    { name: "煮水器", desc: "酒精燈、電磁爐等。" },
    { name: "潔方", desc: "茶盤代用品，布材質。" },
    { name: "蓋杯", desc: "蓋、身、托三件式。" },
    { name: "茶碗", desc: "唐宋開始使用。" },
    { name: "茶棚", desc: "所有茶具的家。" },
    { name: "茶熘", desc: "去除茶品多餘含水量。" },
    { name: "奉茶盤", desc: "方便奉茶至客座。" },
    { name: "茶食盤", desc: "裝點心用。" },
    { name: "茶末濾網", desc: "過濾茶屑。" },
    { name: "同心杯", desc: "個人獨飲含濾心。" },
];

/**
 * 所有茶器總數
 */
export const totalUtensilsCount = featuredUtensils.length + otherUtensils.length;
