
import re

file_path = 'd:/tea-website/src/content/varieties/PuerhEncyclopedia.jsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replacements
# Order is critical to avoid cascading replacements
# 1. text-base -> text-[17px]
# 2. text-lg -> text-[19px]
# 3. text-sm -> text-base
# 4. text-xs -> text-sm

# modifying text-base first ensures that when we later promote text-sm to text-base, they don't get double-promoted to 17px.

content = re.sub(r'text-base', 'text-[17px]', content)
content = re.sub(r'text-lg', 'text-[19px]', content)
content = re.sub(r'text-sm', 'text-base', content)
content = re.sub(r'text-xs', 'text-sm', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated font sizes.")
