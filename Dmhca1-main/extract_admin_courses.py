#!/usr/bin/env python3
import json
import re

transcript_file = r'c:\Users\john\AppData\Roaming\Code\User\workspaceStorage\63e64f3523d8f17852f08381b21a7b74\GitHub.copilot-chat\transcripts\643c312a-55ff-4dc5-bcdc-fb2413c12590.jsonl'

latest_code = None
latest_line = 0

with open(transcript_file, 'r', encoding='utf-8', errors='replace') as f:
    for line_num, line in enumerate(f, 1):
        try:
            data = json.loads(line)
            if 'data' in data and 'content' in data['data']:
                content = data['data']['content']
                # Look for code blocks with admin.courses or export const Route
                if 'export const Route = createFileRoute' in content and 'admin.courses' in content:
                    if len(content) > 5000:  # Large code block
                        print(f'Found at line {line_num}: {len(content)} chars')
                        latest_code = content
                        latest_line = line_num
        except:
            pass

if latest_code:
    print(f'\n\nExtracting code from line {latest_line}...')
    # Find all code blocks
    code_blocks = re.findall(r'```[a-z]*\n(.*?)```', latest_code, re.DOTALL)
    if code_blocks:
        print(f'Found {len(code_blocks)} code blocks')
        # Get the largest code block (should be the full file)
        largest_block = max(code_blocks, key=len)
        print(f'\nLargest block: {len(largest_block)} chars')
        with open('extracted_admin_courses.tsx', 'w', encoding='utf-8') as out:
            out.write(largest_block)
        print('Saved to extracted_admin_courses.tsx')
