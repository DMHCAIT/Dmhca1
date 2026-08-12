#!/usr/bin/env python3
import os
import re
import json

def extract_blog_info(file_path):
    """Extract title, description, FAQs, and other info from a blog file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Extract title
    title_match = re.search(r'{ title: "([^"]+)"', content)
    title = title_match.group(1) if title_match else "Blog Post"
    
    # Extract description  
    desc_match = re.search(r'{ name: "description", content: "([^"]+)"', content)
    description = desc_match.group(1) if desc_match else ""
    
    # Extract route
    route_match = re.search(r'createFileRoute\("([^"]+)"\)', content)
    route = route_match.group(1).lstrip('/') if route_match else ""
    
    # Extract FAQs
    faqs = []
    faq_section = re.search(r'const faqs = \[([\s\S]*?)\];', content)
    if faq_section:
        faq_text = faq_section.group(1)
        faq_objects = re.findall(r'\{\s*question: "([^"]+)",\s*answer: "([^"]+)"\s*\}', faq_text)
        faqs = [{"question": q, "answer": a} for q, a in faq_objects]
    
    return {
        'title': title,
        'description': description,
        'route': route,
        'faqs': faqs,
        'filename': os.path.basename(file_path)
    }

# Test extraction
test_file = r"C:\Users\john\OneDrive\Desktop\Dmhca1-main\src\routes\scope-of-radiology.tsx"
if os.path.exists(test_file):
    info = extract_blog_info(test_file)
    print(f"✅ Extracted info from {info['filename']}")
    print(f"   Title: {info['title']}")
    print(f"   Route: {info['route']}")
    print(f"   FAQs: {len(info['faqs'])} found")
else:
    print(f"❌ File not found: {test_file}")
