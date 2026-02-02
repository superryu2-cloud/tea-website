# ARCHITECTURE.md 更新協議

## 文檔位置

**主文檔**: [`d:\tea-website\ARCHITECTURE.md`](../ARCHITECTURE.md)

此文檔位於項目根目錄，方便所有協作者（人類開發者和 AI）快速訪問。

---

## 何時需要更新

### 1. 導航結構變更

- ✅ 新增/移除頂層導航項目
- ✅ 調整導航順序
- ✅ 修改下拉選單結構
- ✅ 變更 Academy 章節順序

**需更新的章節**:
- "Navigation Component Hierarchy"
- "Modifying Navigation Order"
- "Common Modification Scenarios"

### 2. 路由邏輯變更

- ✅ 新增 tab 路由
- ✅ 修改路由命名規範
- ✅ 變更條件渲染邏輯
- ✅ 新增路由組件（如 AcademyRouter）

**需更新的章節**:
- "Routing System"
- "Navigation Flow"
- "Key Components Reference"

### 3. Academy 系統變更

- ✅ 新增/移除 Academy 章節
- ✅ 修改 AcademyRouter 配置
- ✅ 變更章節元數據結構

**需更新的章節**:
- "Adding a New Academy Chapter"
- "AcademyRouter.jsx" 行號參考
- "File Modification Quick Reference"

### 4. 組件重構

- ✅ 主要組件重構（如提取路由組件）
- ✅ 變更組件職責
- ✅ 新增路由相關組件

**需更新的章節**:
- "Key Components Reference"
- "Application Structure Overview"
- 相關流程圖

### 5. 檔案組織變更

- ✅ 移動檔案到新目錄
- ✅ 重命名關鍵檔案
- ✅ 重組 content 資料夾

**需更新的章節**:
- "Application Structure Overview"
- 所有檔案路徑參考
- "File Modification Quick Reference"

---

## 更新檢查清單

執行以下檢查以確保文檔完整性：

### 基本更新

- [ ] 更新檔案路徑（如有檔案移動）
- [ ] 更新行號參考（如有代碼重構）
- [ ] 新增功能的新章節
- [ ] 更新流程圖（如導航流程變更）
- [ ] 更新快速參考表
- [ ] 更新「Last Updated」日期
- [ ] 遞增版本號

### 內容驗證

- [ ] 所有程式碼範例可執行
- [ ] 所有檔案路徑正確
- [ ] 所有行號參考準確
- [ ] 所有連結有效
- [ ] 範例與實際代碼一致

### 可讀性檢查

- [ ] 移除過時資訊
- [ ] 保持簡潔明瞭
- [ ] 範例清晰易懂
- [ ] 格式一致
- [ ] 無拼寫錯誤

---

## 更新範例

### 範例 1：新增 Academy 章節

**變更**: 新增 Zhiya Chapter 01

**需更新**:
```markdown
1. "Adding a New Academy Chapter" 章節
   - 驗證步驟仍然準確
   - 更新範例程式碼

2. "File Modification Quick Reference" 表格
   - 新增 Zhiya 01 到範例

3. AcademyRouter.jsx 行號參考
   - 更新 import 行號
   - 更新 ACADEMY_CHAPTERS 行號

4. SiteNavigation.jsx 行號參考
   - 更新 isAcademyImplemented 行號
   - 更新 onClick handler 行號
```

### 範例 2：重構 Science 區塊

**變更**: 提取 ScienceRouter 組件

**需更新**:
```markdown
1. "Key Components Reference"
   - 新增 ScienceRouter.jsx 章節
   - 更新 App.jsx 章節

2. "Navigation Flow"
   - 更新流程圖包含 ScienceRouter

3. "How to Add/Modify Features"
   - 新增「Adding a New Science Chapter」章節

4. "Common Modification Scenarios"
   - 新增 Science 相關範例
```

### 範例 3：調整導航順序

**變更**: Tea Talk 移到 Academy 之前

**需更新**:
```markdown
1. "Navigation Component Hierarchy"
   - 反映新的導航順序

2. "Modifying Navigation Order"
   - 更新 SiteNavigation.jsx 行號
   - 更新範例程式碼

3. 截圖/流程圖（如有）
   - 更新視覺化內容
```

---

## 自動化提醒

### Git Hooks（建議設置）

創建 `.git/hooks/pre-commit` 檢查：

```bash
#!/bin/bash
# 檢查是否修改了關鍵檔案但未更新 ARCHITECTURE.md

CRITICAL_FILES=(
  "src/App.jsx"
  "src/components/SiteNavigation.jsx"
  "src/components/academy/AcademyRouter.jsx"
  "src/config/navigation.js"
)

ARCH_MODIFIED=$(git diff --cached --name-only | grep "ARCHITECTURE.md")

for file in "${CRITICAL_FILES[@]}"; do
  if git diff --cached --name-only | grep -q "$file"; then
    if [ -z "$ARCH_MODIFIED" ]; then
      echo "⚠️  Warning: You modified $file but didn't update ARCHITECTURE.md"
      echo "   Consider updating the documentation if you made structural changes."
    fi
  fi
done
```

---

## 版本控制

### 版本號規則

格式: `MAJOR.MINOR`

- **MAJOR**: 重大架構變更（如提取新的路由組件）
- **MINOR**: 小幅更新（如新增章節、更新行號）

### 變更日誌

在 ARCHITECTURE.md 底部維護簡要變更日誌：

```markdown
## Changelog

### v1.1 (2026-01-11)
- Added ConstituentsChapter to Science section
- Updated Science routing documentation

### v1.0 (2026-01-11)
- Initial version
- Documented AcademyRouter refactoring
- Complete navigation system reference
```

---

## 責任分工

### AI 協作者

- ✅ 在進行結構性變更時立即更新
- ✅ 驗證文檔指令的準確性
- ✅ 添加具體範例和程式碼片段

### 人類開發者

- ✅ 在主要重構後審查並更新
- ✅ 驗證 AI 更新的準確性
- ✅ 添加設計決策的背景說明

### 版本控制

- ✅ 文檔更新與相關代碼變更一起提交
- ✅ 在 commit message 中註明文檔更新
- ✅ 定期審查文檔的準確性

---

## 最佳實踐

1. **立即更新**: 不要延遲文檔更新
2. **具體明確**: 包含確切的檔案路徑和行號
3. **提供範例**: 顯示修改前後的程式碼片段
4. **測試指令**: 驗證文檔中的步驟確實有效
5. **保持簡潔**: 移除過時資訊，避免冗餘

---

**維護者**: AI Collaboration System  
**最後更新**: 2026-01-11  
**文檔版本**: 1.0
