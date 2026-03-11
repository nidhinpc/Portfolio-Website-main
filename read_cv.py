import PyPDF2

with open('src/Assets/NidhinPcCV.pdf', 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    text = ""
    for i in range(len(reader.pages)):
        text += reader.pages[i].extract_text() + "\n"
        
with open('cv_text_utf8.txt', 'w', encoding='utf-8') as f:
    f.write(text)
