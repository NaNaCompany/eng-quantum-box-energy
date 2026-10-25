export const tool={
  "id": "E111",
  "slug": "eng-quantum-box-energy",
  "title": "무한 우물 입자 에너지 계산기",
  "title_en": "Infinite Quantum Well Energy Calculator",
  "category": "양자",
  "category_en": "Quantum",
  "fields": [
    {
      "key": "mass",
      "label": "입자 질량 m",
      "label_en": "Particle mass m",
      "dimension": "mass",
      "example": 9.1093837139e-31,
      "constraint": "positive",
      "display_unit": "u",
      "display_value": "0.00054857990904271002"
    },
    {
      "key": "width",
      "label": "우물의 폭 L",
      "label_en": "Well width L",
      "dimension": "length",
      "example": 1e-09,
      "constraint": "positive",
      "display_unit": "nm",
      "display_value": "1"
    },
    {
      "key": "level",
      "label": "양자수 n",
      "label_en": "Quantum number n",
      "dimension": "ratio",
      "example": 1,
      "constraint": "integer",
      "display_unit": "1",
      "display_value": "1"
    }
  ],
  "result_label": "우물 바닥 기준 에너지 Eₙ",
  "result_label_en": "Energy above the well bottom Eₙ",
  "result_dimension": "energy",
  "formula": "Eₙ = n²h² / (8mL²)",
  "purpose": "1차원 무한 사각 우물에 갇힌 입자의 에너지 준위를 계산한다.",
  "purpose_en": "Calculate an energy level for a particle confined in a one-dimensional infinite square well.",
  "assumptions": "m,L>0이며 n은 1 이상의 정수다. 우물 내부 위치에너지를 0으로 놓고 벽 높이를 무한대로 가정한다. 단일 입자의 비상대론적 슈뢰딩거 모델이며 스핀·상호작용·유한 장벽은 제외한다. 이 앱은 Eₙ/(mc²)≤0.01 범위로 제한한다.",
  "assumptions_en": "Required: m,L>0 and positive integer n. The potential is zero inside infinitely high walls. This is a single-particle nonrelativistic Schrödinger model. Excluded: spin, interactions and finite walls. The app requires Eₙ/(mc²)≤0.01.",
  "sources": [
    {
      "label": "OpenStax · Quantum particle in a box",
      "url": "https://openstax.org/books/university-physics-volume-3/pages/7-4-the-quantum-particle-in-a-box"
    },
    {
      "label": "NIST · 2022 CODATA fundamental constants",
      "url": "https://physics.nist.gov/cuu/Constants/Table/allascii.txt"
    }
  ],
  "condition": "",
  "condition_en": "",
  "output_unit": "eV",
  "site": "https://nanalab.kr/eng-quantum-box-energy/",
  "repository": "https://github.com/NaNaCompany/eng-quantum-box-energy",
  "groups": []
};
