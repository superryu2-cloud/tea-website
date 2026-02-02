import sys

# 讀取源檔案（備份）
with open('d:/tea-website/src/sections/VarietiesSection_temp.jsx', 'r', encoding='utf-8') as f:
    temp_lines = f.readlines()

# 讀取目標檔案（當前 VarietiesSection.jsx）
with open('d:/tea-website/src/components/sections/VarietiesSection.jsx', 'r', encoding='utf-8') as f:
    current_lines = f.readlines()

# 提取正山小種和金駿眉的內容（第 724-997 行，索引 723-996）
red_tea_content = temp_lines[723:997]

# 找到插入位置：在 VarietiesSection.jsx 中找到紅茶全球史之後的位置
# 查找 "Note: 正山小種 and 金駿眉 sections are very long" 這個註釋
insert_index = None
for i, line in enumerate(current_lines):
    if '/* Note: 正山小種 and 金駿眉 sections are very long' in line:
        # 找到註釋所在的行，需要在這之前插入內容
        # 向前查找 {redTeaHref === '#red-global' ? ( 的結束位置
        for j in range(i-1, max(0, i-20), -1):
            if ') : null}' in current_lines[j]:
                insert_index = j + 1
                break
        break

if insert_index is None:
    print("錯誤：找不到插入位置")
    sys.exit(1)

# 插入內容
new_lines = current_lines[:insert_index] + red_tea_content + current_lines[insert_index:]

# 移除註釋行（如果存在）
final_lines = []
for line in new_lines:
    if '/* Note: 正山小種 and 金駿眉 sections are very long' not in line:
        final_lines.append(line)
    else:
        # 跳過註釋行
        pass

# 寫回檔案
with open('d:/tea-website/src/components/sections/VarietiesSection.jsx', 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print(f"成功添加 {len(red_tea_content)} 行內容")
print(f"新檔案總行數：{len(final_lines)}")
