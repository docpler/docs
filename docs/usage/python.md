---
sidebar_position: 1
---

# Python

## Basic Conversion

```python
from docpler.hwp import convert

markdown = convert("document.hwp")
print(markdown)
```

## Save to File

```python
from docpler.hwp import convert

markdown = convert("document.hwp")
with open("output.md", "w") as f:
    f.write(markdown)
```

## Supported Content

The converter extracts the following from HWP 5.0 files:

- **Paragraphs** — plain text with formatting stripped
- **Tables** — rendered as Markdown pipe tables
- **Equations** — HWP EQN script output as `$$...$$` blocks
- **Text boxes** — extracted as paragraphs

## Error Handling

```python
from docpler.hwp import convert

try:
    markdown = convert("document.hwp")
except RuntimeError as e:
    print(f"Conversion failed: {e}")
```

Common errors:
- `Invalid HWP signature` — not a valid HWP file
- `Password-protected HWP files are not supported` — encrypted files cannot be parsed
