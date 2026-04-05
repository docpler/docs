---
sidebar_position: 5
---

# Supported Formats

## Current

| Format | Version | Read | Output | Notes |
|--------|---------|------|--------|-------|
| HWP | 5.0 | ✅ | Markdown | Tables, equations, text boxes supported |

## Content Support (HWP 5.0)

| Content Type | Supported | Output |
|-------------|-----------|--------|
| Paragraphs | ✅ | Plain text |
| Tables | ✅ | Markdown pipe tables |
| Equations | ✅ | `$$...$$` blocks (HWP EQN script) |
| Text boxes | ✅ | Extracted as paragraphs |
| Images | ❌ | Not yet supported |
| Headers/Footers | ❌ | Not yet supported |
| Footnotes | ❌ | Not yet supported |

## Limitations

- **Password-protected files** are not supported
- **HWP older than 5.0** (e.g., HWP 3.0, HWP 97) are not supported
- **HWPX** (XML-based format) is not yet supported
- **Equation output** uses HWP EQN script format, not LaTeX (LaTeX conversion planned)

## Planned

| Format | Status |
|--------|--------|
| HWPX (XML) | Planned |
| HWP EQN → LaTeX | Planned |
| Image extraction | Planned |
