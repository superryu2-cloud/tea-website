import React from 'react';
import { BookOpen, CalendarDays, Compass, Droplets, Menu } from 'lucide-react';
import { Callout, DataTable, Section } from '../references/ui';

const TYPE_SECTIONS = [
  {
    id: 'types-season',
    title: '節氣類型 1：季節變換（四季之始）',
    icon: Compass,
    lead: '代表四季的開端與轉折，與太陽直射位置有關。',
    items: [
      {
        term: '立春（2月4或5日）',
        content:
          '「立」是開始的意思，代表「春季正式開始」，天氣回暖、萬物開始有了生氣。',
      },
      {
        term: '春分（3月20或21日）',
        content: '這天有兩個意思，一是這天晝夜等長、二是這天是春季的一半。',
      },
      {
        term: '立夏（5月5或6日）',
        content: '「立」是開始的意思，代表「夏季正式開始」，氣溫逐漸升高。',
      },
      {
        term: '夏至（6月21或22日）',
        content:
          '這天白晝最長，因太陽位置最高的關係，「立竿不會見影」影子看起來最短。',
      },
      {
        term: '立秋（8月7或8日）',
        content: '「立」是開始的意思，代表「秋季正式開始」，天氣轉涼。',
      },
      {
        term: '秋分（9月23或24日）',
        content: '這天有兩個意思，一是這天晝夜等長、二是這天是秋季的一半。',
      },
      {
        term: '立冬（11月7或8日）',
        content: '「立」是開始的意思，代表「冬季正式開始」，氣溫明顯下降。',
      },
      {
        term: '冬至（12月21或22日）',
        content: '這天夜晚最長，因太陽位置最低的關係，冬至影子最長。',
      },
    ],
  },
  {
    id: 'types-temperature',
    title: '節氣類型 2：氣溫變化（冷熱轉折）',
    icon: CalendarDays,
    lead: '象徵氣候冷熱交替，與季節溫差息息相關。',
    items: [
      {
        term: '小暑（7月7或8日）',
        content: '「暑」是炎熱的意思，「小暑」代表剛進入炎熱時期。',
      },
      { term: '大暑（7月23或24日）', content: '炎熱程度到達高峰，一年中最熱的時期。' },
      {
        term: '處暑（8月23或24日）',
        content: '「處」是止住的意思，表示暑氣開始消退、到此為止。',
      },
      { term: '小寒（1月5或6日）', content: '「寒」是寒冷的意思，「小寒」代表剛進入寒冷時期。' },
      { term: '大寒（1月20或21日）', content: '寒冷程度到達高峰，一年中最冷的時期。' },
    ],
  },
  {
    id: 'types-precipitation',
    title: '節氣類型 3：降水量（雨露與穀物）',
    icon: Droplets,
    lead: '與降雨、露水及農作物生長密切相關。',
    items: [
      { term: '雨水（2月19或20日）', content: '降雨開始，降水量逐漸增多。' },
      {
        term: '穀雨（4月20或21日）',
        content: '「穀雨」是雨生百穀的意思，此時的降雨對穀物生長極為有利。',
      },
      {
        term: '小滿（5月21或22日）',
        content: '「滿」是穀物粒粒飽滿的意思，農作物開始飽滿。',
      },
      {
        term: '白露（9月7或8日）',
        content: '「露」為水氣凝結，雨量減少轉為水氣、天氣開始轉涼。',
      },
      {
        term: '寒露（10月8或9日）',
        content: '水氣從露珠凝結，逐漸轉為點點冰霜，氣溫下降、雨量驟減。',
      },
    ],
  },
  {
    id: 'types-phenomena',
    title: '節氣類型 4：天氣現象與農作狀態',
    icon: BookOpen,
    lead: '反映自然現象與農事周期，是農耕社會的重要依據。',
    items: [
      {
        term: '驚蟄（3月5或6日）',
        content:
          '「螫ㄓㄜ」為冬眠的意思，驚螫為春雷初現，喚醒冬眠中的生物。' +
          '\n\n有此一說：如果驚螫日當天聽到雷聲，代表未來風調雨順、穀稻豐收、農作價格便宜；若是在驚螫日前出現雷聲，代表降水量過於豐沛，會有水災的可能，而若雷聲是在驚螫日後才出現，代表可能會有旱災。',
      },
      {
        term: '清明（4月4或5日）',
        content:
          '風和日麗、春暖花開、草木萌發，景色清新明朗，天氣溫暖但不太穩定。',
      },
      {
        term: '芒種（6月5或6日）',
        content:
          '「芒」指的是有芒作物，如稻、黍、稷，「種」為種植、種子，此時為秋季作物農務最繁忙的時期。',
      },
      { term: '霜降（10月23或24日）', content: '氣溫降低，水氣開始結為霜凍。' },
      { term: '小雪（11月22或23日）', content: '「雪」是降雪的意思，「小雪」代表剛進入降雪時期。' },
      { term: '大雪（12月7或8日）', content: '降雪量增多，氣溫極為冰凍寒冷。' },
    ],
  },
];

const SOLAR_TERM_TABLES = [
  {
    seasonLabel: '春季',
    rows: [
      { term: '立春', lunar: '正月節', date: '2月4或5日', solar: '315度' },
      { term: '雨水', lunar: '正月中', date: '2月19或20日', solar: '330度' },
      { term: '驚蛰', lunar: '二月節', date: '3月5或6日', solar: '345度' },
      { term: '春分', lunar: '二月中', date: '3月20或21日', solar: '0度' },
      { term: '清明', lunar: '三月節', date: '4月4或5日', solar: '15度' },
      { term: '穀雨', lunar: '三月中', date: '4月20或21日', solar: '30度' },
    ],
  },
  {
    seasonLabel: '夏季',
    rows: [
      { term: '立夏', lunar: '四月節', date: '5月5或6日', solar: '45度' },
      { term: '小滿', lunar: '四月中', date: '5月21或22日', solar: '60度' },
      { term: '芒種', lunar: '五月節', date: '6月5或6日', solar: '75度' },
      { term: '夏至', lunar: '五月中', date: '6月21或22日', solar: '90度' },
      { term: '小暑', lunar: '六月節', date: '7月7或8日', solar: '105度' },
      { term: '大暑', lunar: '六月中', date: '7月23或24日', solar: '120度' },
    ],
  },
  {
    seasonLabel: '秋季',
    rows: [
      { term: '立秋', lunar: '七月節', date: '8月7或8日', solar: '135度' },
      { term: '處暑', lunar: '七月中', date: '8月23或24日', solar: '150度' },
      { term: '白露', lunar: '八月節', date: '9月7或8日', solar: '165度' },
      { term: '秋分', lunar: '八月中', date: '9月23或24日', solar: '180度' },
      { term: '寒露', lunar: '九月節', date: '10月8或9日', solar: '195度' },
      { term: '霜降', lunar: '九月中', date: '10月23或24日', solar: '210度' },
    ],
  },
  {
    seasonLabel: '冬季',
    rows: [
      { term: '立冬', lunar: '十月節', date: '11月7或8日', solar: '225度' },
      { term: '小雪', lunar: '十月中', date: '11月22或23日', solar: '240度' },
      { term: '大雪', lunar: '十一月節', date: '12月7或8日', solar: '255度' },
      { term: '冬至', lunar: '十一月中', date: '12月21或22日', solar: '270度' },
      { term: '小寒', lunar: '十二月節', date: '1月5或6日', solar: '285度' },
      { term: '大寒', lunar: '十二月中', date: '1月20或21日', solar: '300度' },
    ],
  },
];

const JIE_QI_TABLE = [
  {
    season: '春',
    jieMonth: '正月節',
    jie: '立春',
    jieDate: '02/03-02/04',
    zhongMonth: '正月中',
    zhong: '雨水',
    zhongDate: '02/18-02/19',
  },
  {
    season: '春',
    jieMonth: '二月節',
    jie: '驚蟄',
    jieDate: '03/05-03/06',
    zhongMonth: '二月中',
    zhong: '春分',
    zhongDate: '03/20-03/21',
  },
  {
    season: '春',
    jieMonth: '三月節',
    jie: '清明',
    jieDate: '04/04-04/05',
    zhongMonth: '三月中',
    zhong: '穀雨',
    zhongDate: '04/19-04/20',
  },
  {
    season: '夏',
    jieMonth: '四月節',
    jie: '立夏',
    jieDate: '05/05-05/06',
    zhongMonth: '四月中',
    zhong: '小滿',
    zhongDate: '05/20-05/21',
  },
  {
    season: '夏',
    jieMonth: '五月節',
    jie: '芒種',
    jieDate: '06/05-06/06',
    zhongMonth: '五月中',
    zhong: '夏至',
    zhongDate: '06/21',
  },
  {
    season: '夏',
    jieMonth: '六月節',
    jie: '小暑',
    jieDate: '07/06-07/07',
    zhongMonth: '六月中',
    zhong: '大暑',
    zhongDate: '07/22-07/23',
  },
  {
    season: '秋',
    jieMonth: '七月節',
    jie: '立秋',
    jieDate: '08/07-08/08',
    zhongMonth: '七月中',
    zhong: '處暑',
    zhongDate: '08/22-08/23',
  },
  {
    season: '秋',
    jieMonth: '八月節',
    jie: '白露',
    jieDate: '09/07-09/08',
    zhongMonth: '八月中',
    zhong: '秋分',
    zhongDate: '09/22-09/23',
  },
  {
    season: '秋',
    jieMonth: '九月節',
    jie: '寒露',
    jieDate: '10/08',
    zhongMonth: '九月中',
    zhong: '霜降',
    zhongDate: '10/23-10/24',
  },
  {
    season: '冬',
    jieMonth: '十月節',
    jie: '立冬',
    jieDate: '11/07-11/08',
    zhongMonth: '十月中',
    zhong: '小雪',
    zhongDate: '11/22',
  },
  {
    season: '冬',
    jieMonth: '十一月節',
    jie: '大雪',
    jieDate: '12/07',
    zhongMonth: '十一月中',
    zhong: '冬至',
    zhongDate: '12/21-12/22',
  },
  {
    season: '冬',
    jieMonth: '十二月節',
    jie: '小寒',
    jieDate: '01/05-01/06',
    zhongMonth: '十二月中',
    zhong: '大寒',
    zhongDate: '01/20',
  },
];

export default function SolarTermsPrimer({ activeSectionHref = null }) {
  const activeKey = activeSectionHref ? String(activeSectionHref).replace('#', '') : null;
  const showAll = !activeKey;
  const showMeaning = showAll || activeKey === 'meaning-intro';
  const showTable = showAll || activeKey === 'table-intro';
  const showZhongqi = showAll || activeKey === 'zhongqi-intro';

  return (
    <div className="space-y-8">
      {showAll ? (
        <div id="primer" className="scroll-mt-28 museum-plaque p-8 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 px-3 py-1 text-xs font-extrabold tracking-widest text-stone-700">
            EXHIBIT · SEASONS
          </div>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">二十四節氣是什麼？由來與原理</h3>
          <div className="mt-5 space-y-4 max-w-prose">
            <p className="text-stone-700 leading-relaxed">
              二十四節氣，是古代人根據太陽在黃道上的位置所制定的時間系統。地球環繞太陽公轉一圈約 360 度，
              每前進 15 度，就形成一個節氣，因此一年共劃分為 24 個節氣。由於受到時差影響，每年度的節氣日期，
              可能產生正負一天的差異。
            </p>
            <p className="text-stone-700 leading-relaxed">
              這套制度最早出現在農業社會，用來觀測自然界變化，如氣溫、降水、風向等，協助人們調整農事與生活節奏。
              即使現代生活與農業距離較遠，節氣仍深刻影響節慶安排、養生觀念與文化習俗。
            </p>
          </div>
        </div>
      ) : null}

      {showMeaning ? (
      <div id="meaning" className="scroll-mt-28 space-y-6">
        <Section id="meaning-intro" title="1. 4 種節氣類型" icon={BookOpen}>
          <p className="max-w-prose">
            二十四節氣是中國古代農耕社會為適應自然變化而制定的時間劃分，指導農事與日常生活。這些節氣可依據
            「季節變換、氣溫變化、降水量、天氣現象與農作狀態」四大類型來劃分。二十四節氣不僅是農業生產的指標，
            也反映了自然變化的節奏，影響著人們的日常生活。理解這四種類型的節氣，有助於更好地適應氣候變遷、
            合理安排生活與農業生產。
          </p>
        </Section>

        <div className="space-y-4">
          {TYPE_SECTIONS.map((block) => (
            <div key={block.id} id={block.id} className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
              <div className="px-6 py-5 bg-gradient-to-r from-stone-50 to-white flex items-start gap-3">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 shrink-0">
                  <block.icon size={18} />
                </span>
                <div className="min-w-0">
                  <div className="font-extrabold text-stone-900">{block.title}</div>
                  <div className="mt-1 text-sm text-stone-600">{block.lead}</div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {block.items.map((item) => {
                    const isLong = item.term.startsWith('驚蟄');
                    const [first, ...rest] = item.content.split('\n\n');
                    const extra = rest.join('\n\n');
                    return (
                      <div
                        key={item.term}
                        className={`rounded-2xl border border-stone-200 bg-white p-5 ${isLong ? 'md:col-span-2' : ''}`}
                      >
                        <div className="font-extrabold text-stone-900">{item.term}</div>
                        <div className="mt-2 text-sm text-stone-700 whitespace-pre-line leading-relaxed">{first}</div>
                        {extra ? (
                          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                            <div className="text-xs font-extrabold text-stone-700 tracking-wide">有此一說</div>
                            <div className="mt-2 text-sm text-stone-700 whitespace-pre-line leading-relaxed">{extra}</div>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      ) : null}

      {showTable ? (
      <div id="table" className="scroll-mt-28 space-y-6">
        <Section id="table-intro" title="2. 二十四節氣表" icon={CalendarDays}>
          <p className="max-w-prose">以下依春、夏、秋、冬整理節氣名稱、農曆節氣、陽曆日期與太陽位置。</p>
        </Section>

        <div className="space-y-4">
          {SOLAR_TERM_TABLES.map((season) => (
            <div
              key={season.seasonLabel}
              className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="px-6 py-5 bg-stone-50 flex items-center justify-between gap-4">
                <div className="font-extrabold text-stone-900">{season.seasonLabel}</div>
                <div className="text-xs text-stone-500">節氣名稱 × 農曆節氣 × 陽曆日期 × 太陽位置</div>
              </div>
              <div className="p-0">
                <DataTable title={`${season.seasonLabel}：節氣名稱 × 農曆節氣 × 陽曆日期 × 太陽位置`}>
                  <table className="min-w-full divide-y divide-stone-200">
                    <thead className="bg-stone-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">節氣名稱</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">農曆節氣</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">陽曆日期</th>
                        <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">太陽位置</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {season.rows.map((row) => (
                        <tr key={`${season.seasonLabel}-${row.term}`} className="hover:bg-stone-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">{row.term}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">{row.lunar}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 font-mono">{row.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 font-mono">{row.solar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </DataTable>
              </div>
            </div>
          ))}
        </div>
      </div>
      ) : null}

      {showZhongqi ? (
      <div id="zhongqi" className="scroll-mt-28 space-y-6">
        <Section id="zhongqi-intro" title="3. 什麼是中氣" icon={BookOpen}>
          <div className="space-y-4 max-w-prose">
            <p>
              為何 24 節氣日期表會出現中氣？「節」與「中」其實是二十四節氣的兩個重要部分。每個農曆月份都包含兩個節氣：
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                「節」代表該月的第一個節氣，通常落在每月 5 日至 8 日，例如立春、立夏、立秋、立冬等。
              </li>
              <li>
                「中氣」是該月的第二個節氣，通常出現在 20 日至 23 日，例如雨水、夏至、秋分、冬至等。
              </li>
            </ul>
            <p>
              中氣標誌著季節的真正到來，所以在二十四節氣中具有重要的地位，人們可以根據中氣的時間來規劃農事活動、
              節慶慶祝等。像是「立春」代表春天開始，而「雨水」（中氣）則表示春季氣候正式進入變化期。
            </p>
          </div>
        </Section>

        <Callout title="你知道嗎？">
          中國古代的農曆月份命名，正是依據「中氣」所在日期來決定的。若某月沒有中氣，便稱為「閏月」。
        </Callout>

        <div className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-5 bg-stone-50 flex items-center justify-between gap-4">
            <div className="font-extrabold text-stone-900">季節 × 農曆月份 × 節／中氣 × 日期</div>
            <div className="text-xs text-stone-500">對照關係表</div>
          </div>
          <div className="p-0">
            <DataTable title="季節 × 農曆月份 × 節／中氣 × 日期（對照關係表）">
              <table className="min-w-full divide-y divide-stone-200">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">季節</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">農曆月份（節）</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">節氣</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">陽曆節氣日期</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">農曆月份（中）</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">中氣</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-stone-600">陽曆中氣日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {JIE_QI_TABLE.map((row, idx) => (
                    <tr key={`${row.season}-${row.jie}-${idx}`} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-stone-900">{row.season}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">{row.jieMonth}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-700 font-extrabold">{row.jie}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 font-mono">{row.jieDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">{row.zhongMonth}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-700 font-extrabold">{row.zhong}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600 font-mono">{row.zhongDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DataTable>
          </div>
        </div>
      </div>
      ) : null}
    </div>
  );
}
