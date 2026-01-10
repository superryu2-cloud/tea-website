# 茶葉文章排版元件使用指南

## 概述

本指南說明如何使用 `TeaArticleTemplate.jsx` 提供的排版元件，快速建立美觀且易讀的茶葉文章。

## 元件列表

### 1. ArticleHero - 文章封面

用於文章頂部的大型封面區塊，包含標題、副標題和標籤。

**參數：**
- `title` (必填) - 主標題
- `subtitle` (選填) - 副標題或簡介
- `tag` (選填) - 標籤文字（例如：「綠茶・明前茶」）
- `gradientFrom` (選填) - 漸層起始色，預設 `'stone-700'`
- `gradientTo` (選填) - 漸層結束色，預設 `'amber-800'`
- `accentColor` (選填) - 強調色，預設 `'amber'`

**範例：**
```jsx
<ArticleHero
  title="西湖龍井茶"
  subtitle="中國十大名茶之首，以色綠、香郁、味甘、形美四絕著稱。"
  tag="綠茶・明前茶"
  gradientFrom="emerald-700"
  gradientTo="green-600"
  accentColor="green"
/>
```

---

### 2. FeatureCards - 特徵卡片

雙欄佈局的特徵卡片，適合展示茶葉的風味、產地、工藝等資訊。

**參數：**
- `features` (必填) - 特徵陣列，每個特徵包含：
  - `icon` - 圖標名稱（`'leaf'`, `'map'`, `'flame'`, `'clock'`, `'star'`, `'sparkles'`）
  - `title` - 卡片標題
  - `iconColor` - 圖標顏色
  - `bgColor` - 背景色
  - `borderColor` - 邊框色
  - `description` (選填) - 描述文字
  - `items` (選填) - 項目列表 `[{label, value}]`
  - `content` (選填) - 自訂內容（React 元件）

**範例：**
```jsx
const features = [
  {
    icon: 'leaf',
    title: '風味特徵',
    iconColor: 'text-green-700',
    bgColor: 'bg-white',
    borderColor: 'border-stone-200',
    items: [
      { label: '湯色', value: '嫩綠明亮，清澈透明' },
      { label: '香氣', value: '清香持久，帶有豆香' }
    ]
  }
];

<FeatureCards features={features} />
```

---

### 3. ContentSection - 內容章節

標準化的章節卡片，用於組織長文內容。

**參數：**
- `title` (必填) - 章節標題
- `children` (必填) - 章節內容
- `icon` (選填) - 圖標名稱
- `iconColor` (選填) - 圖標顏色，預設 `'text-green-600'`
- `bgColor` (選填) - 背景色，預設 `'bg-stone-50'`

**範例：**
```jsx
<ContentSection 
  title="歷史與文化" 
  icon="sparkles"
  iconColor="text-amber-600"
  bgColor="bg-amber-50"
>
  <p>龍井茶有著悠久的歷史...</p>
</ContentSection>
```

---

### 4. SubSectionTitle - 子章節標題

在 ContentSection 內使用的子標題。

**範例：**
```jsx
<SubSectionTitle icon="star" iconColor="text-purple-600">
  品鑑要點
</SubSectionTitle>
```

---

### 5. InfoBox - 資訊框

用於顯示提示、警告、成功訊息或重點內容。

**參數：**
- `type` (選填) - 類型：`'info'`, `'warning'`, `'success'`, `'highlight'`，預設 `'info'`
- `children` (必填) - 內容

**範例：**
```jsx
<InfoBox type="info">
  <p>💡 <strong>小知識：</strong>龍井茶最佳沖泡溫度為85°C。</p>
</InfoBox>

<InfoBox type="warning">
  <p>⚠️ <strong>注意：</strong>避免使用沸水直接沖泡。</p>
</InfoBox>

<InfoBox type="success">
  <p>✅ <strong>品鑑要點：</strong>優質龍井茶湯色清澈明亮。</p>
</InfoBox>
```

---

### 6. Timeline - 時間軸

展示歷史事件或發展歷程。

**參數：**
- `events` (必填) - 事件陣列 `[{year, desc}]`

**範例：**
```jsx
const timeline = [
  { year: '唐代', desc: '龍井茶區開始種茶' },
  { year: '清代', desc: '乾隆御封十八棵御茶' }
];

<Timeline events={timeline} />
```

---

### 7. KeyPoints - 重點摘要

一行式的重點摘要，用斜線分隔。

**參數：**
- `points` (必填) - 重點陣列

**範例：**
```jsx
<KeyPoints 
  points={[
    '中國十大名茶之首',
    '產於杭州西湖區',
    '明前茶最為珍貴'
  ]} 
/>
```

---

### 8. Quote - 引用區塊

用於引用詩詞、名言等。

**參數：**
- `children` (必填) - 引用內容
- `author` (選填) - 作者

**範例：**
```jsx
<Quote author="蘇東坡">
  欲把西湖比西子，從來佳茗似佳人。
</Quote>
```

---

### 9. TagGroup - 標籤組

展示相關標籤。

**參數：**
- `tags` (必填) - 標籤陣列

**範例：**
```jsx
<TagGroup 
  tags={['綠茶', '西湖龍井', '明前茶', '中國十大名茶']} 
/>
```

---

### 10. TwoColumnLayout - 雙欄佈局

將內容分為左右兩欄。

**參數：**
- `left` (必填) - 左側內容
- `right` (必填) - 右側內容

**範例：**
```jsx
<TwoColumnLayout
  left={<div>左側內容</div>}
  right={<div>右側內容</div>}
/>
```

---

### 11. ImageBlock - 圖片區塊

帶說明文字的圖片。

**參數：**
- `src` (必填) - 圖片路徑
- `alt` (必填) - 圖片描述
- `caption` (選填) - 圖片說明文字

**範例：**
```jsx
<ImageBlock
  src="/images/longjing.jpg"
  alt="西湖龍井茶"
  caption="明前龍井茶的扁平外形"
/>
```

---

### 12. TableContainer - 表格容器

支援橫向滾動的表格容器。

**範例：**
```jsx
<TableContainer>
  <thead>
    <tr>
      <th>等級</th>
      <th>採摘標準</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>特級</td>
      <td>一芽一葉初展</td>
    </tr>
  </tbody>
</TableContainer>
```

---

## 完整範例

請參考 [`LongjingTeaArticle.jsx`](file:///d:/tea-website/src/content/examples/LongjingTeaArticle.jsx) 查看完整的使用範例。

---

## 如何新增文章

### 步驟 1：建立新文章檔案

在 `src/content/` 的適當子目錄中建立新的 `.jsx` 檔案：

```jsx
// src/content/varieties/YourTeaArticle.jsx
import React from 'react';
import {
  ArticleHero,
  FeatureCards,
  ContentSection,
  // ... 其他需要的元件
} from '../../components/TeaArticleTemplate';

export default function YourTeaArticle() {
  return (
    <div className="animate-fadeIn">
      <ArticleHero
        title="您的茶葉名稱"
        subtitle="簡介"
        tag="分類標籤"
      />
      
      {/* 其他內容 */}
    </div>
  );
}
```

### 步驟 2：在 App.jsx 中引入

在 `src/App.jsx` 中引入並使用您的文章：

```jsx
import YourTeaArticle from './content/varieties/YourTeaArticle';

// 在適當的位置加入
<YourTeaArticle />
```

### 步驟 3：測試

執行開發伺服器查看效果：

```bash
npm run dev
```

---

## 設計原則

所有元件都遵循以下設計原則：

1. **高可讀性**
   - 內文字體 16px
   - 行高 1.9
   - 高對比度配色

2. **視覺美觀**
   - 使用網站既有的 macaron 配色系統
   - 柔和的漸層和陰影
   - 適當的留白和間距

3. **響應式設計**
   - 手機版自動調整為單欄
   - 桌機版支援多欄佈局

4. **可重用性**
   - 元件化設計
   - 參數化配置
   - 易於客製化

---

## 常見問題

### Q: 如何修改顏色主題？

A: 使用 Tailwind 的顏色類別，例如：
- `gradientFrom="blue-700"` 
- `iconColor="text-red-600"`
- `bgColor="bg-green-50"`

### Q: 可以混合使用不同元件嗎？

A: 可以！所有元件都設計為可以自由組合使用。

### Q: 如何新增自訂樣式？

A: 可以在元件外層加上自訂的 className，或直接修改 `TeaArticleTemplate.jsx`。

---

## 相關文檔

- [專案結構](file:///d:/tea-website/docs/STRUCTURE.md)
- [內容維護指南](file:///d:/tea-website/docs/CONTENT_AND_DATA.md)
- [專案狀態](file:///d:/tea-website/PROJECT_STATUS.md)
