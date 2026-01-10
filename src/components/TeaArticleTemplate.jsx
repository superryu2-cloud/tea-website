// 茶葉文章排版元件範本
// 提供可重用的美觀排版模組，讓使用者輕鬆新增茶葉相關文章

import React from 'react';
import {
  Leaf, Map, Flame, Clock, Star, Info,
  AlertCircle, CheckCircle, Sparkles
} from 'lucide-react';

/**
 * 文章封面區塊
 * @param {string} title - 主標題
 * @param {string} subtitle - 副標題
 * @param {string} tag - 標籤文字（例如：中發酵・焙火韻）
 * @param {string} gradientFrom - 漸層起始色（Tailwind 色彩類別）
 * @param {string} gradientTo - 漸層結束色（Tailwind 色彩類別）
 * @param {string} accentColor - 強調色（Tailwind 色彩類別）
 */
export function ArticleHero({
  title,
  subtitle,
  tag,
  gradientFrom = 'stone-700',
  gradientTo = 'amber-800',
  accentColor = 'amber'
}) {
  return (
    <div className={`relative bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-amber-50 rounded-2xl overflow-hidden mb-12 p-8 md:p-16 border border-${accentColor}-700`}>
      <div className={`absolute top-0 right-0 w-96 h-96 bg-${accentColor}-500/20 rounded-full blur-3xl -mr-32 -mt-32`}></div>
      <div className="relative z-10 md:w-3/4">
        {tag && (
          <div className={`inline-block px-3 py-1 bg-${accentColor}-600 text-white text-sm font-bold rounded mb-4`}>
            {tag}
          </div>
        )}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 font-sans">{title}</h2>
        {subtitle && (
          <p className={`text-xl text-${accentColor}-100 leading-relaxed font-light mb-6`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * 特徵卡片（雙欄佈局）
 * @param {Array} features - 特徵列表，每個特徵包含 { icon, title, items: [{label, value}] }
 */
export function FeatureCards({ features }) {
  const iconMap = {
    leaf: Leaf,
    map: Map,
    flame: Flame,
    clock: Clock,
    star: Star,
    sparkles: Sparkles
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {features.map((feature, idx) => {
        const IconComponent = iconMap[feature.icon] || Leaf;
        return (
          <div
            key={idx}
            className={`${feature.bgColor || 'bg-white'} p-8 rounded-xl shadow-sm border ${feature.borderColor || 'border-stone-200'}`}
          >
            <h3 className="text-2xl font-bold text-stone-800 mb-4 flex items-center">
              <IconComponent className={`mr-3 ${feature.iconColor || 'text-amber-700'}`} />
              {feature.title}
            </h3>
            {feature.description && (
              <p className="text-stone-600 leading-relaxed mb-4">
                {feature.description}
              </p>
            )}
            {feature.items && (
              <ul className="space-y-3 text-stone-700">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className={`font-bold ${feature.labelColor || 'text-amber-800'} w-16 flex-shrink-0`}>
                      {item.label}
                    </span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            )}
            {feature.content && (
              <div className="space-y-4">
                {feature.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * 內容章節卡片
 * @param {string} title - 章節標題
 * @param {ReactNode} children - 章節內容
 * @param {string} icon - 圖標名稱
 * @param {string} iconColor - 圖標顏色
 * @param {string} bgColor - 背景色
 */
export function ContentSection({ title, children, icon, iconColor = 'text-green-600', bgColor = 'bg-stone-50' }) {
  const iconMap = {
    leaf: Leaf,
    info: Info,
    alert: AlertCircle,
    check: CheckCircle,
    star: Star,
    sparkles: Sparkles
  };

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className={`${bgColor} p-8 rounded-xl border border-stone-200 mb-10`}>
      <h3 className="text-3xl font-semibold text-stone-900 mb-6 font-sans flex items-center">
        {IconComponent && <IconComponent className={`mr-3 ${iconColor}`} />}
        {title}
      </h3>
      <div className="prose prose-stone max-w-none">
        {children}
      </div>
    </div>
  );
}

/**
 * 子章節標題
 */
export function SubSectionTitle({ children, icon, iconColor = 'text-amber-600' }) {
  const iconMap = {
    leaf: Leaf,
    info: Info,
    alert: AlertCircle,
    check: CheckCircle,
    star: Star,
    sparkles: Sparkles
  };

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
      {IconComponent && <IconComponent className={`mr-3 ${iconColor}`} />}
      {children}
    </h4>
  );
}

/**
 * 資訊框（提示、警告、重點）
 * @param {string} type - 類型：info, warning, success, highlight
 * @param {ReactNode} children - 內容
 */
export function InfoBox({ type = 'info', children }) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      borderLeft: 'border-l-4 border-l-blue-600',
      text: 'text-blue-900'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      borderLeft: 'border-l-4 border-l-amber-600',
      text: 'text-amber-900'
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      borderLeft: 'border-l-4 border-l-green-600',
      text: 'text-green-900'
    },
    highlight: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      borderLeft: 'border-l-4 border-l-purple-600',
      text: 'text-purple-900'
    }
  };

  const style = styles[type] || styles.info;

  return (
    <div className={`${style.bg} ${style.border} ${style.borderLeft} p-4 rounded-lg ${style.text} my-4`}>
      {children}
    </div>
  );
}

/**
 * 時間軸
 * @param {Array} events - 事件列表，每個事件包含 { year, desc }
 */
export function Timeline({ events }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 mb-10">
      <h4 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
        <Clock className="mr-3 text-blue-600" />
        大事記
      </h4>
      <div className="relative border-l-2 border-stone-300 ml-3 space-y-8">
        {events.map((event, idx) => (
          <div key={idx} className="relative pl-8">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-400 border-2 border-white"></div>
            <span className="inline-block bg-stone-100 text-stone-800 text-xs font-bold px-2 py-1 rounded mb-1">
              {event.year}
            </span>
            <p className="text-stone-600 text-sm">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 雙欄內容佈局
 * @param {ReactNode} left - 左側內容
 * @param {ReactNode} right - 右側內容
 */
export function TwoColumnLayout({ left, right }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-10">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

/**
 * 重點摘要（一行式，用斜線分隔）
 * @param {Array} points - 重點列表
 */
export function KeyPoints({ points }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <p className="text-stone-800 font-semibold">
        <span className="text-amber-700 mr-2">重點：</span>
        {points.join(' ／ ')}
      </p>
    </div>
  );
}

/**
 * 圖片區塊（帶說明）
 * @param {string} src - 圖片路徑
 * @param {string} alt - 圖片描述
 * @param {string} caption - 圖片說明文字
 */
export function ImageBlock({ src, alt, caption }) {
  return (
    <div className="my-8">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl shadow-md border border-stone-200"
      />
      {caption && (
        <p className="text-center text-stone-600 text-sm mt-3 italic">
          {caption}
        </p>
      )}
    </div>
  );
}

/**
 * 表格容器（支援橫向滾動）
 */
export function TableContainer({ children }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full border-collapse border border-stone-300">
        {children}
      </table>
    </div>
  );
}

/**
 * 引用區塊
 */
export function Quote({ children, author }) {
  return (
    <blockquote className="border-l-4 border-stone-400 pl-6 py-2 my-6 italic text-stone-700">
      <p className="text-lg leading-relaxed">{children}</p>
      {author && (
        <footer className="text-stone-600 text-sm mt-2 not-italic">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}

/**
 * 標籤組
 * @param {Array} tags - 標籤列表
 */
export function TagGroup({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {tags.map((tag, idx) => (
        <span
          key={idx}
          className="inline-block px-3 py-1 bg-stone-100 text-stone-700 text-sm font-semibold rounded-full border border-stone-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
