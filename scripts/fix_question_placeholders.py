# -*- coding: utf-8 -*-
"""
修復 sensoryQuestionBank.json 中的問號佔位符題目
生成台灣特色茶相關的完整題目內容
"""

import json
import re

# 台灣特色茶題目內容庫
BILUOCHUN_QUESTIONS = [
    {
        "stem": "台灣碧螺春茶主要產於哪個地區？",
        "choices": ["新北市三峽區", "南投縣鹿谷鄉", "嘉義縣阿里山", "台東縣鹿野鄉"]
    },
    {
        "stem": "碧螺春茶的外觀特徵為？",
        "choices": ["捲曲螺旋狀", "條索緊直", "顆粒球形", "扁平挺直"]
    },
    {
        "stem": "碧螺春茶屬於哪一類茶？",
        "choices": ["綠茶", "紅茶", "烏龍茶", "白茶"]
    },
    {
        "stem": "碧螺春茶的發酵程度為？",
        "choices": ["不發酵", "輕發酵", "半發酵", "全發酵"]
    },
    {
        "stem": "碧螺春茶製作時的殺青溫度約為？",
        "choices": ["180-220°C", "100-120°C", "250-300°C", "80-100°C"]
    },
    {
        "stem": "碧螺春茶的茶湯顏色為？",
        "choices": ["翠綠明亮", "金黃透亮", "琥珀紅潤", "橙黃清澈"]
    },
    {
        "stem": "碧螺春茶的香氣特徵為？",
        "choices": ["清香鮮爽", "花香濃郁", "果香甜美", "焙火香"]
    },
    {
        "stem": "碧螺春茶適合的沖泡水溫為？",
        "choices": ["80-85°C", "95-100°C", "70-75°C", "60-65°C"]
    },
    {
        "stem": "碧螺春茶的採摘標準為？",
        "choices": ["一心二葉", "單芽", "一心三葉", "對夾葉"]
    },
    {
        "stem": "碧螺春茶的最佳採摘季節為？",
        "choices": ["春季", "夏季", "秋季", "冬季"]
    },
    {
        "stem": "碧螺春茶製作過程中最關鍵的工序為？",
        "choices": ["殺青", "揉捻", "乾燥", "萎凋"]
    },
    {
        "stem": "碧螺春茶的揉捻方式為？",
        "choices": ["輕揉", "重揉", "不揉", "反覆重揉"]
    },
    {
        "stem": "碧螺春茶的乾燥方式為？",
        "choices": ["烘乾", "曬乾", "陰乾", "炒乾"]
    },
    {
        "stem": "碧螺春茶的保存方式為？",
        "choices": ["冷藏密封", "常溫通風", "高溫乾燥", "陽光曝曬"]
    },
    {
        "stem": "碧螺春茶的品質特徵不包括？",
        "choices": ["焙火香濃", "色澤翠綠", "香氣清新", "滋味鮮爽"]
    }
]

TIEGUANYIN_QUESTIONS = [
    {
        "stem": "台灣鐵觀音茶主要產於？",
        "choices": ["台北市木柵區", "新北市坪林區", "南投縣名間鄉", "桃園市龍潭區"]
    },
    {
        "stem": "鐵觀音茶的發酵程度約為？",
        "choices": ["30-40%", "10-20%", "50-60%", "70-80%"]
    },
    {
        "stem": "鐵觀音茶的焙火程度為？",
        "choices": ["中重焙火", "輕焙火", "不焙火", "極重焙火"]
    },
    {
        "stem": "鐵觀音茶的茶湯顏色為？",
        "choices": ["琥珀金黃", "翠綠明亮", "橙紅透亮", "淡黃清澈"]
    },
    {
        "stem": "鐵觀音茶的香氣特徵為？",
        "choices": ["熟果香、焙火香", "清香、花香", "青草香", "蜜香"]
    },
    {
        "stem": "鐵觀音茶適合的沖泡水溫為？",
        "choices": ["95-100°C", "80-85°C", "70-75°C", "60-65°C"]
    },
    {
        "stem": "鐵觀音茶的建議投茶量為？",
        "choices": ["3克/150ml", "1克/150ml", "6克/300ml", "10克/100ml"]
    },
    {
        "stem": "鐵觀音茶的外觀特徵為？",
        "choices": ["緊結球形", "條索緊直", "捲曲螺旋", "扁平挺直"]
    },
    {
        "stem": "鐵觀音茶的製作工序中最特殊的是？",
        "choices": ["反覆焙火", "重萎凋", "不殺青", "長時間發酵"]
    },
    {
        "stem": "鐵觀音茶的品種為？",
        "choices": ["鐵觀音品種", "青心烏龍", "四季春", "金萱"]
    }
]

def load_json_file(filepath):
    """載入 JSON 檔案"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json_file(filepath, data):
    """儲存 JSON 檔案"""
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def generate_question_content(question_id, topic, answer_index):
    """根據題目 ID 和主題生成題目內容"""
    
    # 根據主題選擇題庫
    if 'biluochun' in topic:
        questions = BILUOCHUN_QUESTIONS
        topic_label = "台灣特色茶：文山包種茶"
    elif 'tieguanyin' in topic:
        questions = TIEGUANYIN_QUESTIONS
        topic_label = "台灣特色茶：木柵鐵觀音"
    else:
        # 預設使用碧螺春題庫
        questions = BILUOCHUN_QUESTIONS
        topic_label = "台灣特色茶：三峽碧螺春"
    
    # 從題目 ID 提取序號
    match = re.search(r'-(\d+)$', question_id)
    if match:
        num = int(match.group(1))
        # 使用序號選擇題目（循環使用）
        q_index = (num - 1) % len(questions)
        question = questions[q_index]
        
        return {
            "bankLabel": "台灣特色茶",
            "topicLabel": topic_label,
            "stem": question["stem"],
            "choices": question["choices"]
        }
    
    return None

def fix_placeholder_questions(filepath):
    """修復所有問號佔位符題目"""
    print(f"正在載入檔案：{filepath}")
    data = load_json_file(filepath)
    
    fixed_count = 0
    total_questions = len(data)
    
    for i, question in enumerate(data):
        # 檢查是否為問號佔位符題目
        if (isinstance(question.get('bankLabel'), str) and 
            '?' in question['bankLabel']):
            
            # 生成新內容
            new_content = generate_question_content(
                question['id'],
                question.get('topic', ''),
                question.get('answerIndex', 0)
            )
            
            if new_content:
                # 更新題目
                question['bankLabel'] = new_content['bankLabel']
                question['topicLabel'] = new_content['topicLabel']
                question['stem'] = new_content['stem']
                question['choices'] = new_content['choices']
                
                fixed_count += 1
                print(f"已修復題目 {question['id']}: {new_content['stem']}")
    
    print(f"\n總共修復了 {fixed_count} 個題目（共 {total_questions} 題）")
    
    # 儲存修復後的檔案
    backup_filepath = filepath.replace('.json', '_backup.json')
    print(f"\n正在備份原檔案到：{backup_filepath}")
    save_json_file(backup_filepath, load_json_file(filepath))
    
    print(f"正在儲存修復後的檔案：{filepath}")
    save_json_file(filepath, data)
    
    print("\n✅ 完成！")

if __name__ == '__main__':
    filepath = r'd:\tea-website\src\data\sensoryQuestionBank.json'
    fix_placeholder_questions(filepath)
