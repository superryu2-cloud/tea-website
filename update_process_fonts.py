
import re
import os

file_path = 'd:/tea-website/src/content/scienceChapters/TeaProcessCraftChapter.jsx'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Body Text: 19px -> 17px
    # We replace text-[19px] which was the body text size
    new_content = content.replace('text-[19px]', 'text-[17px]')

    # 2. Subtitles: text-xl -> 19px
    # We replace text-xl with text-[19px]
    new_content = new_content.replace('text-xl', 'text-[19px]')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Successfully updated fonts in {file_path}")
    print("Changes applied: Body text-[19px] -> text-[17px], Titles text-xl -> text-[19px]")
else:
    print(f"File not found: {file_path}")
