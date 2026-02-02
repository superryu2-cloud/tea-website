
# Script to crop and extract images from the generated sprites
# This is a basic implementation. Since I cannot really crop images deterministically without vision, 
# I will use the generated images AS IS for now as "sets" to show the user, OR 
# I will have to use CSS to "crop" them if they are sprite sheets.
# However, the generation tool produces creating single compositions. 
#
# strategy change: The generation tool produced COMPOSITE images. 
# It is hard to "crop" them blindly.
# 
# Alternative: I will use the generated images as "Sprite Sheets" and use CSS `background-image` + `background-position` 
# to show specific parts for each item. This is much safer than blind cropping.
#
# I need to first copy the generated files to public/images/ceremony/
# and rename them to:
# tea_sprites_main.png
# tea_sprites_accessories.png
# tea_sprites_decor.png

Copy-Item -Path "C:\Users\USER\.gemini\antigravity\brain\3d6d51f1-7d2f-492a-99a7-b3cc3ebb621e\tea_items_pot_set_ghibli_1769756021754.png" -Destination "d:\tea-website\public\images\ceremony\tea_sprites_main.png" -Force
Copy-Item -Path "C:\Users\USER\.gemini\antigravity\brain\3d6d51f1-7d2f-492a-99a7-b3cc3ebb621e\tea_items_accessories_ghibli_1769756084247.png" -Destination "d:\tea-website\public\images\ceremony\tea_sprites_acc.png" -Force
Copy-Item -Path "C:\Users\USER\.gemini\antigravity\brain\3d6d51f1-7d2f-492a-99a7-b3cc3ebb621e\tea_items_decor_ghibli_1769756192697.png" -Destination "d:\tea-website\public\images\ceremony\tea_sprites_decor.png" -Force
