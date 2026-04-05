---
sidebar_position: 3
---

# MarkItDown

## Basic Usage

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=True)
result = md.convert("document.hwp")
print(result.text_content)
```

:::note
`enable_plugins=True` is required.
:::

## With Other Formats

MarkItDown supports many formats. With `markitdown-hwp` installed, HWP files are handled automatically alongside PDF, DOCX, PPTX, and others.

```python
md = MarkItDown(enable_plugins=True)

# All of these work
md.convert("report.hwp")
md.convert("slides.pptx")
md.convert("paper.pdf")
```

## Detection

The plugin recognizes HWP files by:
- File extension: `.hwp`
- MIME types: `application/x-hwp`, `application/haansofthwp`, `application/vnd.hancom.hwp`
