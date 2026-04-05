---
sidebar_position: 2
---

# CLI

## Convert to stdout

```bash
docpler convert document.hwp
```

## Save to file

```bash
docpler convert document.hwp -o output.md
```

## Pipe to other tools

```bash
# Search for a keyword
docpler convert report.hwp | grep "budget"

# Count words
docpler convert report.hwp | wc -w
```

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | Success |
| 1 | Error (invalid file, encrypted, etc.) |
