export const AI_PLANNER_STORAGE_KEY = 'tea.aiPlannerDraft';
export const AI_PLANNER_SAVED_PLANS_KEY = 'tea.aiPlannerSavedPlans';

export const AI_PLANNER_TYPES = ['課程', '網站文章', '茶會', '社群貼文', '圖片企劃', '商品化方案'];

export const AI_PLANNER_AUDIENCES = ['初學者', '茶道班學生', '進階茶友', '茶會來賓', '社群讀者', '潛在付費學員'];

export const AI_PLANNER_DURATIONS = ['30 分鐘', '60 分鐘', '90 分鐘', '2 小時', '半日課程', '不限'];

export const AI_PLANNER_STYLES = ['專業清楚', '溫和入門', '古典雅緻', '學術整理', '社群吸睛', '商品銷售'];

export const AI_PLANNER_ROLES = [
  {
    key: 'course',
    title: '課程企劃師',
    focus: '把主題轉成可實際上課的流程。',
    output: '課程目標、時間分配、實作活動、教師提醒、課後作業。',
    prompt: '你是一位茶道課程企劃師，請根據主題、對象、時間長度，設計一堂可實際教學的茶學課程。內容要適合現場教學，包含時間分配、講解重點、互動活動與課後作業。',
  },
  {
    key: 'research',
    title: '茶學研究員',
    focus: '整理可信茶學資料，標示需要查證處。',
    output: '核心概念、專業說明、常見誤解、來源方向、可放網站段落。',
    prompt: '你是一位茶學研究員，請針對主題整理專業資料。內容需要謹慎、避免誇大，並標示哪些內容需要查證。請用適合教學網站的方式整理。',
  },
  {
    key: 'editor',
    title: '內容編輯',
    focus: '把資料改成網站好讀內容。',
    output: '頁面標題、導言、重點卡片、章節內容、表格建議、結語。',
    prompt: '你是一位茶學網站內容編輯，請把資料整理成適合網站閱讀的繁體中文內容。語氣要專業、清楚、溫和，段落要好讀，適合學生學習。',
  },
  {
    key: 'visual',
    title: '視覺企劃師',
    focus: '規劃圖片與視覺素材。',
    output: '主視覺、插圖清單、尺寸、提示詞、真實照片需求、版權注意。',
    prompt: '你是一位茶學網站視覺企劃師，請根據主題設計適合的圖片企劃。需要指出哪些適合 AI 繪製，哪些適合使用真實照片，並注意網站教學用途與版權風險。',
  },
  {
    key: 'social',
    title: '社群文案師',
    focus: '把內容轉成對外宣傳文。',
    output: 'Facebook 長文、Instagram 短文、LINE 通知、短影音標題與 CTA。',
    prompt: '你是一位茶學社群文案師，請把此主題轉成適合 Facebook、Instagram、LINE 與短影音使用的繁體中文文案。語氣要自然、有吸引力，但不要浮誇。',
  },
  {
    key: 'business',
    title: '商品化顧問',
    focus: '判斷內容如何變成產品或服務。',
    output: '免費內容、付費內容、課程包裝、講義產品、茶會應用、下一步。',
    prompt: '你是一位茶學內容商品化顧問，請根據主題分析如何轉成可販售的課程、講義、茶會、顧問服務或數位產品。建議要務實、可執行。',
  },
];

export const buildAIPlannerPrompt = (draft, roles = AI_PLANNER_ROLES) => {
  const rolePrompts = roles.map((role, index) => `${index + 1}. ${role.title}：${role.prompt}`).join('\n');
  return `請組成一個「茶學 AI 企劃團隊」，依照以下需求產出完整企劃草稿。

企劃類型：${draft.type || '未填'}
主題：${draft.topic || '未填'}
對象：${draft.audience || '未填'}
時間長度：${draft.duration || '未填'}
風格：${draft.style || '未填'}
補充資料：
${draft.notes || '無'}

請由以下角色分工產出：
${rolePrompts}

輸出請使用繁體中文，並依序包含：
1. 總覽
2. 課程大綱
3. 網站內容
4. 圖片企劃
5. 社群文案
6. 商品化建議
7. 需要查證或避免誇大的地方

注意：這是企劃草稿，不要自動假設已經可以公開；請讓內容方便我審核後再放入網站。`;
};

