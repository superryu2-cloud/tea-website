import json
import re

try:
    with open('src/data/videoData.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    with open('playlist.json', 'r', encoding='utf-8') as f:
        playlist = json.load(f)
    
    new_videos = []
    for v in playlist:
        ep_match = re.search(r'ep\s*(\d+)', v['title'], re.IGNORECASE)
        eps_str = '文藝茶館第一季'
        if ep_match:
            eps_str += ' EP' + ep_match.group(1)
            
        title_escaped = v['title'].replace("'", "\\'")
        
        video_str = f"""  {{
    id: '{v['id']}',
    title: '{title_escaped}',
    series: 'wenyi_s1',
    category: 'all',
    duration: '{v['duration']}',
    description: '{eps_str}'
  }},"""
        new_videos.append(video_str)
        
    new_videos_str = '\n'.join(new_videos)
    
    new_content = content.replace(
        "export const videos = [",
        "export const videos = [\n" + new_videos_str
    )
    
    if 'wenyi_s1' not in new_content:
        new_content = new_content.replace(
            "{ id: 'wenyi', label: '文藝茶館 第二季' },",
            "{ id: 'wenyi_s1', label: '文藝茶館 第一季' },\n  { id: 'wenyi', label: '文藝茶館 第二季' },"
        )
        
        new_content = new_content.replace(
            "export const WENYI_SUBCATEGORIES = [",
            "export const WENYI_S1_SUBCATEGORIES = [\n  { id: 'all', label: '全部' }\n];\n\nexport const WENYI_SUBCATEGORIES = ["
        )
        
    with open('src/data/videoData.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Successfully updated videoData.js")

except Exception as e:
    print(f"Error: {e}")
