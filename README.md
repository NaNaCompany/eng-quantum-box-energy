# 무한 우물 입자 에너지 계산기

1차원 무한 사각 우물에 갇힌 입자의 에너지 준위를 계산한다.

- ID: E111
- App: https://nanalab.kr/eng-quantum-box-energy/
- Repository: https://github.com/NaNaCompany/eng-quantum-box-energy
- Formula: Eₙ = n²h² / (8mL²)

## Model and data

m,L>0이며 n은 1 이상의 정수다. 우물 내부 위치에너지를 0으로 놓고 벽 높이를 무한대로 가정한다. 단일 입자의 비상대론적 슈뢰딩거 모델이며 스핀·상호작용·유한 장벽은 제외한다. 이 앱은 Eₙ/(mc²)≤0.01 범위로 제한한다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
