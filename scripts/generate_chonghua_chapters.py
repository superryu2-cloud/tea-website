# -*- coding: utf-8 -*-
"""
生成崇華書院 33 個章節檔案
"""

import os

# 章節數量
TOTAL_CHAPTERS = 33

# 基礎路徑
BASE_PATH = r'd:\tea-website\src\content\academy'

# 章節模板
CHAPTER_TEMPLATE = """import React from 'react';
import AcademySection from '../../components/academy/AcademySection';
import AcademyContentBlock from '../../components/academy/AcademyContentBlock';
import {{ BookOpen }} from 'lucide-react';

export default function ChonghuaChapter{chapter_num:02d}() {{
    return (
        <div className="space-y-12">
            <AcademySection 
                id="chonghua-{chapter_num:02d}" 
                title="第{chapter_num:02d}堂" 
                label="ACADEMY · CHONGHUA · CH{chapter_num:02d}"
            >
                <AcademyContentBlock title="課程內容" icon={{BookOpen}}>
                    <div className="text-center py-12">
                        <p className="text-2xl font-bold text-stone-400">規劃中</p>
                        <p className="mt-4 text-stone-500">課程內容準備中，敬請期待</p>
                    </div>
                </AcademyContentBlock>
            </AcademySection>
        </div>
    );
}}
"""

def generate_chapter_files():
    """生成所有章節檔案"""
    
    # 確保目錄存在
    os.makedirs(BASE_PATH, exist_ok=True)
    
    created_files = []
    
    for i in range(1, TOTAL_CHAPTERS + 1):
        # 生成檔案名稱
        filename = f'ChonghuaChapter{i:02d}.jsx'
        filepath = os.path.join(BASE_PATH, filename)
        
        # 生成檔案內容
        content = CHAPTER_TEMPLATE.format(chapter_num=i)
        
        # 寫入檔案
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        created_files.append(filename)
        print(f'✅ 已創建: {filename}')
    
    print(f'\n🎉 成功創建 {len(created_files)} 個章節檔案！')
    return created_files

def generate_router_imports():
    """生成 AcademyRouter.jsx 需要的 import 語句"""
    
    print('\n📋 以下是需要添加到 AcademyRouter.jsx 的 import 語句：')
    print('=' * 60)
    
    for i in range(1, TOTAL_CHAPTERS + 1):
        print(f"import ChonghuaChapter{i:02d} from '../../content/academy/ChonghuaChapter{i:02d}';")
    
    print('=' * 60)

def generate_router_config():
    """生成 AcademyRouter.jsx 需要的配置"""
    
    print('\n📋 以下是需要添加到 ACADEMY_CHAPTERS 物件的配置：')
    print('=' * 60)
    
    for i in range(1, TOTAL_CHAPTERS + 1):
        print(f"""    academy_chonghua_{i:02d}: {{
        component: ChonghuaChapter{i:02d},
        category: '崇華書院',
        title: '第{i:02d}堂',
        intro: '規劃中'
    }},""")
    
    print('=' * 60)

if __name__ == '__main__':
    print('🚀 開始生成崇華書院章節檔案...\n')
    
    # 生成章節檔案
    created_files = generate_chapter_files()
    
    # 生成 Router 配置參考
    generate_router_imports()
    generate_router_config()
    
    print('\n✅ 所有檔案生成完成！')
    print('\n📝 下一步：')
    print('1. 複製上方的 import 語句到 AcademyRouter.jsx')
    print('2. 複製上方的配置到 ACADEMY_CHAPTERS 物件中')
    print('3. 測試路由是否正常運作')
