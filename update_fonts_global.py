
import re
import os

# List of files to update
files_to_update = [
    # Varieties
    'd:/tea-website/src/content/varieties/BlackTeaHistory.jsx',
    'd:/tea-website/src/content/varieties/GreenTeaHistory.jsx',
    'd:/tea-website/src/content/varieties/YellowTeaHistory.jsx',
    'd:/tea-website/src/content/varieties/WhiteTeaHistory.jsx',
    'd:/tea-website/src/content/varieties/RedTeaGlobalStory.jsx',
    'd:/tea-website/src/content/varieties/OolongRegions.jsx',
    'd:/tea-website/src/content/varieties/WhiteTeaRegions.jsx',
    'd:/tea-website/src/content/varieties/TeaEncyclopediaOverview.jsx',
    'd:/tea-website/src/content/varieties/SixTeaTypesNotes.jsx',
    'd:/tea-website/src/content/varieties/chapters/FudingHistory.jsx',
    
    # Featured
    'd:/tea-website/src/content/featured/BlackTeaVarieties.jsx',
    'd:/tea-website/src/content/featured/FeaturedTeaOverview.jsx',
    'd:/tea-website/src/content/featured/biluochun.jsx',
    'd:/tea-website/src/content/featured/dongding.jsx',
    'd:/tea-website/src/content/featured/gaoshanoolong.jsx',
    'd:/tea-website/src/content/featured/honeyblack.jsx',
    'd:/tea-website/src/content/featured/orientalbeauty.jsx',
    'd:/tea-website/src/content/featured/redoolong.jsx',
    'd:/tea-website/src/content/featured/tieguanyin.jsx',
    'd:/tea-website/src/content/featured/wenshan.jsx',
    
    # Ritual & Setup (Consistency)
    'd:/tea-website/src/components/sections/RitualSection.jsx',
    'd:/tea-website/src/components/sections/TeaSetupSection.jsx',
    
    # Science Chapters (Might as well)
    'd:/tea-website/src/content/scienceChapters/AromaticsChapter.jsx',
    'd:/tea-website/src/content/scienceChapters/TeaProcessCraftChapter.jsx',
    'd:/tea-website/src/content/scienceChapters/ConstituentsChapter.jsx',
]

def update_file(file_path):
    if not os.path.exists(file_path):
        print(f"Skipping {file_path} (not found)")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements
    # Order is critical to avoid cascading replacements
    # 1. text-base -> text-[17px]
    # 2. text-lg -> text-[19px]
    # 3. text-sm -> text-base
    # 4. text-xs -> text-sm
    
    # NOTE: We must check if the file was ALREADY updated to avoid double bumping.
    # Simple check: IF "text-[17px]" exists, assume it might be done? 
    # But wait, Puerh was done separately. These files haven't been touched yet.
    # However, if I re-run this script, I need to be careful.
    # But for this one-shot run, it is safe.
    
    # Only perform replacements if they aren't already there?
    # No, simple replace is safer for now as long as we don't run it twice.
    # I will rely on the fact I am running this ONCE.

    new_content = re.sub(r'text-base', 'text-[17px]', content)
    new_content = re.sub(r'text-lg', 'text-[19px]', new_content)
    new_content = re.sub(r'text-sm', 'text-base', new_content)
    new_content = re.sub(r'text-xs', 'text-sm', new_content)

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {os.path.basename(file_path)}")
    else:
        print(f"No changes for {os.path.basename(file_path)}")

for fp in files_to_update:
    update_file(fp)
