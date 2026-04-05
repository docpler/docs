---
sidebar_position: 1
---

# Claude Code

The [Claude Code](https://claude.com/claude-code) plugin enables Claude to read and convert HWP files directly in your terminal.

## Install

```
/plugin marketplace add docpler/docpler-claude-plugin
/plugin install docpler@docpler
```

The binary is automatically downloaded on the first session start.

## Usage

Simply ask Claude to read an HWP file:

```
> Please read and summarize report.hwp
```

Claude will automatically use `docpler convert` to parse the file.

You can also use the skill explicitly:

```
/docpler:hwp-convert
```

## Uninstall

```
/plugin uninstall docpler@docpler
/plugin marketplace remove docpler
```
