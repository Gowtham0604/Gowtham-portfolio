import os
filepath = 'src/components/Navbar.tsx'
with open(filepath, 'r') as f:
    content = f.read()

content = content.replace('apple-glass-dock', 'bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10')

with open(filepath, 'w') as f:
    f.write(content)
print("Updated Navbar")
