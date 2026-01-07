import React from 'react';
import { BadgeCheck, MapPin, Palette, Sparkles, Tags } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

function Bullet({ children }) {
  return <li className="leading-relaxed">{children}</li>;
}

function Bullets({ children }) {
  return <ul className="mt-3 list-disc pl-5 space-y-2 text-stone-700">{children}</ul>;
}

function SubTitle({ id, children }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-lg md:text-xl font-extrabold text-stone-900">
      {children}
    </h3>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
      <div className="font-bold text-stone-900">{label}</div>
      <div className="text-stone-700 text-right">{value}</div>
    </div>
  );
}

export default function TaiwanSpecialtyTeaFaces() {
  return (
    <div className="space-y-8">
      <div className="museum-frame museum-paper relative overflow-hidden">
        <div className="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="relative px-8 py-10 md:px-12 md:py-12">
          <div className="museum-label">
            <Sparkles size={14} className="opacity-80" />
            CHAPTER 05 · TAIWAN SPECIALTY TEA
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-stone-900">探索台灣特色茶之容顏</h2>
          <p className="mt-4 max-w-4xl text-lg md:text-xl text-stone-700 leading-relaxed">
            台灣茶的多元，來自「地形氣候 × 品種 × 發酵 × 烘焙」的組合。這一章用形、色、香、味四條線，把六大特色茶類一次看懂，並提供辨識系統讓你可以快速對照。
          </p>
        </div>
      </div>

      <SectionCard title="一、台灣茶葉的多元風貌與成因" icon={Palette}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">BASE 1</div>
            <div className="mt-2 font-extrabold text-stone-900">品種</div>
            <div className="mt-2 text-stone-600 leading-relaxed">大葉種/小葉種與地方/育成品種，各自帶來不同香氣與口感骨架。</div>
          </div>
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">BASE 2</div>
            <div className="mt-2 font-extrabold text-stone-900">製茶（發酵）</div>
            <div className="mt-2 text-stone-600 leading-relaxed">不發酵→部分發酵→全發酵，決定色、香、味的走向與層次。</div>
          </div>
          <div className="museum-card p-5">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">BASE 3</div>
            <div className="mt-2 font-extrabold text-stone-900">烘焙</div>
            <div className="mt-2 text-stone-600 leading-relaxed">輕焙/中焙/重焙，帶來去青去雜、焙火香與韻味，並影響耐放性。</div>
          </div>
        </div>
        <div className="mt-4 text-stone-700 leading-relaxed">
          以上條件交織，形成台灣茶多采多姿的風貌；消費者可依個人偏好，從形、色、香、味中選擇適合茶類。
        </div>
      </SectionCard>

      <SectionCard title="二、台灣六大特色茶類解析" icon={BadgeCheck}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="museum-card p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">01 · GREEN</div>
            <h3 className="mt-2 text-lg font-extrabold text-stone-900">綠茶（碧螺春）</h3>
            <div className="mt-3 space-y-2">
              <InfoRow label="產地" value="新北市三峽" />
              <InfoRow label="製程" value="不發酵（綠茶代表）" />
              <InfoRow label="風味" value="蔬果香、鮮爽" />
              <InfoRow label="沖泡提示" value="約 80°C，避免久泡以免苦澀" />
            </div>
            <div className="mt-3 text-sm text-stone-600 leading-relaxed">
              鮮爽多與氨基酸相關；採摘極嫩且未氧化，溫度過高或時間過久易釋出較多兒茶素而苦澀。包裝儲存需避免後氧化導致茶湯暗濁、鮮活性下降。
            </div>
          </div>

          <div className="museum-card p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">02 · POUCHONG</div>
            <h3 className="mt-2 text-lg font-extrabold text-stone-900">文山包種茶</h3>
            <div className="mt-3 space-y-2">
              <InfoRow label="產地" value="新北市文山茶區（坪林、深坑、新店、汐止）" />
              <InfoRow label="製程" value="輕萎凋、輕攪拌、輕發酵" />
              <InfoRow label="訴求" value="清揚香氣、甘滑鮮爽、富活性" />
              <InfoRow label="外觀/水色" value="條形均勻；蜜綠顯黃" />
            </div>
            <div className="mt-3 text-sm text-stone-600 leading-relaxed">
              烘焙多以 70–80°C 去青去雜為主，不可帶熟香以免破壞清香特色。
            </div>
          </div>

          <div className="museum-card p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">03 · HIGH MOUNTAIN</div>
            <h3 className="mt-2 text-lg font-extrabold text-stone-900">高山茶（清香型烏龍）</h3>
            <div className="mt-3 space-y-2">
              <InfoRow label="定義" value="多指海拔 1000m 以上茶區" />
              <InfoRow label="產區" value="梨山、仁愛/鹿谷、大阿里山、拉拉山等" />
              <InfoRow label="風味" value="香氣優雅、滋味厚實、富活性" />
            </div>
            <Bullets>
              <Bullet>
                <strong>成分傾向：</strong>兒茶素降低（苦澀減少）、茶胺酸增加（甘味提升）、果膠質增加（濃稠度/油亮/耐泡）。
              </Bullet>
            </Bullets>
          </div>

          <div className="museum-card p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">04 · ROASTED OOLONG</div>
            <h3 className="mt-2 text-lg font-extrabold text-stone-900">凍頂烏龍茶與鐵觀音</h3>
            <div className="mt-3 text-stone-700 leading-relaxed">
              共同特色是「焙火香」與「韻味」：需兼具茶香與火香，喝完回味無窮；焙火香不同於單純熟香。
            </div>
            <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200 bg-stone-50">
              <table className="min-w-full text-sm">
                <thead className="bg-white text-stone-600">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-extrabold">茶類</th>
                    <th className="px-4 py-3 font-extrabold">產區/品種</th>
                    <th className="px-4 py-3 font-extrabold">製程定位</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="px-4 py-3 font-bold">凍頂烏龍</td>
                    <td className="px-4 py-3">中部鹿谷等；多用青心烏龍</td>
                    <td className="px-4 py-3">中發酵＋中烘焙</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">鐵觀音</td>
                    <td className="px-4 py-3">北部木柵；鐵觀音品種</td>
                    <td className="px-4 py-3">中發酵＋重烘焙</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-sm text-stone-600">辨識建議：多喝、多聞訓練焙火香型的細微差異。</div>
          </div>

          <div className="museum-card p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">05 · ORIENTAL BEAUTY</div>
            <h3 className="mt-2 text-lg font-extrabold text-stone-900">東方美人茶（白毫烏龍）</h3>
            <div className="mt-3 space-y-2">
              <InfoRow label="產地/原料" value="桃竹苗客家庄；青心大冇；芒種節氣嫩採" />
              <InfoRow label="製程" value="重萎凋、重攪拌、重發酵" />
              <InfoRow label="風味" value="蜂蜜香＋熟果味" />
            </div>
            <Bullets>
              <Bullet>
                <strong>蜂蜜香：</strong>與小綠葉蟬刺吸危害的原料條件密切相關（自然環境配合）。
              </Bullet>
              <Bullet>
                <strong>熟果味：</strong>來自重發酵製程。
              </Bullet>
              <Bullet>
                <strong>外觀辨識：</strong>白、黃、紅、褐四色（精製時常挑除綠葉）；白色是嫩芽絨毛，其他色來自發酵色素。
              </Bullet>
            </Bullets>
            <div className="mt-3 text-sm text-stone-600 leading-relaxed">
              製程中「炒後悶」（靜置悶 20–40 分鐘）被視為形成特殊風味的關鍵技巧。
            </div>
          </div>

          <div className="museum-card p-6">
            <div className="text-xs font-extrabold tracking-widest text-stone-500">06 · BLACK TEA</div>
            <h3 className="mt-2 text-lg font-extrabold text-stone-900">紅茶</h3>
            <Bullets>
              <Bullet>
                <strong>品種：</strong>大葉種/小葉種；台茶 18 號（紅玉）具肉桂與薄荷香。
              </Bullet>
              <Bullet>
                <strong>製程：</strong>全發酵（酵素性）；室內萎凋→重揉捻（約 2–3 小時）→渥堆補足發酵。
              </Bullet>
              <Bullet>
                <strong>品質指標：</strong>水色鮮紅、滋味濃郁且具收斂性；化學產物以茶黃質/茶紅質比例為核心，需避免茶褐質。
              </Bullet>
              <Bullet>
                <strong>茶乳現象（Cream Down）：</strong>冷卻後混濁為不溶性聚合物沉澱，越明顯常被視為品質越好（尤其大葉種）。
              </Bullet>
            </Bullets>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="三、台灣茶的辨識系統" icon={Tags}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-face-3-1">1. 依外觀形狀</SubTitle>
            <div className="mt-3 overflow-x-auto rounded-xl border border-stone-200 bg-stone-50">
              <table className="min-w-full text-sm">
                <thead className="bg-white text-stone-600">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-extrabold">形狀</th>
                    <th className="px-4 py-3 font-extrabold">代表茶類</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="px-4 py-3 font-bold">條形</td>
                    <td className="px-4 py-3">碧螺春、文山包種、小葉紅茶、大葉紅茶</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">球形</td>
                    <td className="px-4 py-3">清香型高山茶、凍頂烏龍、木柵鐵觀音</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">花朵型</td>
                    <td className="px-4 py-3">東方美人茶</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <SubTitle id="tt-face-3-2">2. 依香氣類型</SubTitle>
            <div className="mt-3 overflow-x-auto rounded-xl border border-stone-200 bg-stone-50">
              <table className="min-w-full text-sm">
                <thead className="bg-white text-stone-600">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-extrabold">香氣</th>
                    <th className="px-4 py-3 font-extrabold">代表茶類</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-800">
                  <tr>
                    <td className="px-4 py-3 font-bold">蔬果香</td>
                    <td className="px-4 py-3">碧螺春</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">清揚香氣</td>
                    <td className="px-4 py-3">文山包種</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">優雅花香</td>
                    <td className="px-4 py-3">高山茶</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">焙火香</td>
                    <td className="px-4 py-3">凍頂烏龍、鐵觀音</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">蜂蜜香</td>
                    <td className="px-4 py-3">東方美人</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold">肉桂薄荷香</td>
                    <td className="px-4 py-3">台茶 18 號（紅玉）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-5">
          <SubTitle id="tt-face-3-3">3. 蜜香茶系列（小綠葉蟬條件）</SubTitle>
          <div className="mt-2 text-stone-700 leading-relaxed">
            蜜香的形成條件在於茶菁須經小綠葉蟬危害，並需要特定溫濕度環境。常見分布如下：
          </div>
          <Bullets>
            <Bullet>
              <strong>不發酵：</strong>蜜香綠茶（三峽）
            </Bullet>
            <Bullet>
              <strong>部分發酵：</strong>貴妃茶（蜜香凍頂烏龍）、東方美人茶
            </Bullet>
            <Bullet>
              <strong>全發酵：</strong>蜜香紅茶（三峽、花蓮瑞穗）
            </Bullet>
          </Bullets>
        </div>
      </SectionCard>

      <SectionCard title="四、品種與產區的連結（適製性）" icon={MapPin}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="font-extrabold text-stone-900">青心烏龍（佔比高、適應性強）</div>
            <Bullets>
              <Bullet>文山：清香型包種</Bullet>
              <Bullet>中部高山：清香型高山茶</Bullet>
              <Bullet>中部凍頂：焙火香型凍頂烏龍</Bullet>
            </Bullets>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="font-extrabold text-stone-900">代表例（快速對照）</div>
            <Bullets>
              <Bullet>
                <strong>青心大冇：</strong>桃竹苗 → 東方美人
              </Bullet>
              <Bullet>
                <strong>青心柑仔：</strong>三峽 → 碧螺春
              </Bullet>
              <Bullet>
                <strong>鐵觀音品種：</strong>木柵 → 鐵觀音茶
              </Bullet>
            </Bullets>
          </div>
        </div>
        <div className="mt-4 text-stone-700 leading-relaxed">
          當你把「品種 × 產區 × 製程（發酵/烘焙）」串起來，就能更精準欣賞台灣特色茶的豐富容顏，也能更快找到自己的偏好風格。
        </div>
      </SectionCard>
    </div>
  );
}

