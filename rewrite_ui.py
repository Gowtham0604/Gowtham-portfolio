import os
import glob

components_dir = 'src/components'

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replacements
    # 1. Remove apple-glass-card and its rounded corners and padding from containers, replace with simpler spacing if needed.
    # Actually, let's replace "rounded-3xl p-8 sm:p-10 apple-glass-card" with "py-10 border-b border-border dark:border-white/[0.08] last:border-0" (or just py-8)
    content = content.replace('rounded-3xl p-8 sm:p-10 apple-glass-card', 'py-8')
    content = content.replace('rounded-3xl p-7 apple-glass-card', 'py-6')
    content = content.replace('rounded-3xl p-8 apple-glass-card', 'py-8')
    content = content.replace('rounded-3xl p-6 apple-glass-card', 'py-6')
    
    # 2. Fix badge-glass to simple clean badges
    content = content.replace('badge-glass', 'bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10')
    
    # 3. Fix button-glass
    content = content.replace('btn-glass-primary', 'bg-foreground text-background hover:opacity-90')
    content = content.replace('btn-glass-secondary', 'bg-black/5 dark:bg-white/10 text-foreground hover:bg-black/10 dark:hover:bg-white/20')

    with open(filepath, 'w') as f:
        f.write(content)
    print(f"Processed {filepath}")

for filepath in glob.glob(os.path.join(components_dir, '*.tsx')):
    process_file(filepath)

print("Done")
