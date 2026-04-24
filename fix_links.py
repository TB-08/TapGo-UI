import os
import re

files = ["index.html", "Food.html", "Travel.html", "Entertainment.html", "Health.html", "Voucher.html"]
mapping = {
    "Hot Deals": "index.html",
    "Trang chủ": "index.html",
    "Du lịch": "Travel.html",
    "Ẩm thực": "Food.html",
    "Giải trí": "Entertainment.html",
    "Sức khỏe": "Health.html",
    "Voucher": "Voucher.html"
}

for filename in files:
    if not os.path.exists(filename):
        continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for text, link in mapping.items():
        # Match <a ...>text</a> and replace href="#" with link
        pattern = rf'href="#"([^>]*>{text}</a>)'
        content = re.sub(pattern, f'href="{link}"\\1', content)
        
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

print("Links updated successfully.")
