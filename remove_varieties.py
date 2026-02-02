#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
臨時腳本：從 App.jsx 移除 VarietiesSection 內聯定義
移除第 548-1440 行（0-indexed: 547-1439）
"""

with open('d:/tea-website/src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"原始行數: {len(lines)}")
print(f"移除範圍: 第 548-1440 行（共 {1440-548+1} 行）")

# 保留第 0-547 行（第 1-548 行）和第 1440 行之後的內容
new_lines = lines[:547] + lines[1440:]

print(f"新行數: {len(new_lines)}")
print(f"減少: {len(lines) - len(new_lines)} 行")

with open('d:/tea-website/src/App.jsx', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("完成！")
