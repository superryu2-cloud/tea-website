
import re
import os

file_path = 'd:/tea-website/src/content/featured/BlackTeaVarieties.jsx'

if os.path.exists(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Body Text: 19px -> 17px
    # Replace explicit text-[19px] class
    new_content = content.replace('text-[19px]', 'text-[17px]')

    # 2. Subtitles: text-xl -> 19px
    # Replace text-xl class
    new_content = new_content.replace('text-xl', 'text-[19px]')

    # 3. Prose components: prose prose-lg -> 17px direct styling
    # ensuring consistent typography without the 'prose' plugin scaling
    new_content = new_content.replace('prose prose-lg', 'text-[17px] leading-relaxed space-y-6')
    
    # Also handle the prose max-w-none if it was used with it
    # Note: 'prose prose-lg text-stone-700 max-w-none' -> 'text-[17px] leading-relaxed space-y-6 text-stone-700 max-w-none'
    # My replacement above handles 'prose prose-lg' prefix. The rest of the class string remains.

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Successfully updated fonts in {file_path}")
    print("Changes applied: Body text-[19px] -> text-[17px], Titles text-xl -> text-[19px], prose-lg -> text-[17px]")
else:
    print(f"File not found: {file_path}")
