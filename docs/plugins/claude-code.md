---
sidebar_position: 1
---

# Claude Code

[Claude Code](https://claude.com/claude-code) 플러그인을 설치하면 Claude가 터미널에서 HWP 파일을 직접 읽고 변환할 수 있습니다.

## 설치

```
/plugin marketplace add docpler/docpler-claude-plugin
/plugin install docpler@docpler
```

첫 세션 시작 시 바이너리가 자동으로 다운로드됩니다.

## 사용법

Claude에게 HWP 파일을 읽어달라고 요청하세요:

```
> report.hwp 파일을 읽고 요약해줘
```

Claude가 자동으로 `docpler convert`를 사용해서 파일을 변환합니다.

스킬을 직접 호출할 수도 있습니다:

```
/docpler:hwp-convert
```

## 제거

```
/plugin uninstall docpler@docpler
/plugin marketplace remove docpler
```
