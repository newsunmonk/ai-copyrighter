export const frameworkGuides = {
  AIDA: "AIDA는 Attention(주목) → Interest(흥미) → Desire(욕구) → Action(행동) 구조로 설득 흐름을 만드는 프레임워크다.",
  PAS: "PAS는 Problem(문제 공감) → Agitation(고통 확대) → Solution(해결책) 구조로 고객의 문제 의식을 강화한 뒤 해결책을 제시한다.",
  "4U": "4U는 Useful(유용함), Urgent(긴박감), Unique(독특함), Ultra-specific(구체성)을 담아 즉시 반응을 유도한다.",
  FAB: "FAB는 Feature(기능) → Advantage(장점) → Benefit(고객 혜택) 순서로 제품 특징이 고객 삶에 주는 가치를 설명한다.",
  소셜프루프: "소셜프루프는 후기, 수치, 실적, 사용자 반응을 통해 신뢰를 형성하고 구매 장벽을 낮춘다.",
  스토리텔링: "스토리텔링은 고객이 공감할 수 있는 상황과 감정의 흐름을 통해 브랜드 메시지에 몰입하도록 만든다.",
};

const angleMap = [
  "감정 소구",
  "논리 설득",
  "유머/친근함",
  "불안 해소 또는 손실 회피",
  "호기심 유발",
  "사회적 증거 강조",
];

export function buildMessages(input) {
  const frameworkDescriptions = input.frameworks
    .map((framework) => `- ${framework}: ${frameworkGuides[framework]}`)
    .join("\n");

  return [
    {
      role: "user",
      content: `
브랜드명: ${input.brandName}
업종: ${input.industry}
핵심 강점: ${input.strengths}
타겟 고객: ${input.targetAudience}
톤앤매너: ${input.tone}
선택 프레임워크: ${input.frameworks.join(", ")}

프레임워크 정의 및 구조:
${frameworkDescriptions}

작업 지시:
1. 선택된 각 프레임워크마다 정확히 6개의 광고 카피 버전을 생성한다.
2. 각 버전은 아래 앵글을 1개씩 사용한다.
   - 버전 1: ${angleMap[0]}
   - 버전 2: ${angleMap[1]}
   - 버전 3: ${angleMap[2]}
   - 버전 4: ${angleMap[3]}
   - 버전 5: ${angleMap[4]}
   - 버전 6: ${angleMap[5]}
3. 각 버전은 표현 방식, 감정 강도, 문장 구조가 서로 분명히 달라야 한다.
4. 결과는 프레임워크별로 headline, body, cta를 모두 포함한다.
5. headline은 주목도 높은 한두 문장, body는 2~4문장, cta는 짧고 행동 유도형으로 작성한다.
6. JSON 이외의 텍스트를 절대 출력하지 않는다.
7. 모든 문자열은 반드시 올바른 JSON 문자열이어야 하며, 내부 큰따옴표는 이스케이프 처리한다.
8. 줄바꿈이 필요하면 JSON 문자열 내부에서 \\n 형태로만 표현한다.

반드시 아래 JSON 스키마만 출력:
{
  "copies": [
    {
      "framework": "AIDA",
      "version": 1,
      "angle": "감정 소구",
      "headline": "...",
      "body": "...",
      "cta": "..."
    }
  ]
}`.trim(),
    },
  ];
}

export const systemPrompt =
  "당신은 10년 경력의 전문 카피라이터이자 퍼포먼스 마케터다. 한국어 광고 카피 작성에 능숙하며, 브랜드 포지셔닝, 구매 전환, 매체 집행 맥락을 반영한 세련되고 실무적인 문장을 쓴다. 어색한 직역체, 지나치게 반복적인 표현, 비전문적인 판매 멘트는 피하고 실제 마케터가 광고 운영 문서에 넣을 만한 완성도의 카피를 만든다. headline은 한눈에 메시지가 꽂혀야 하고, body는 리듬감 있게 읽히며, cta는 짧고 설득력 있게 마무리한다. 응답은 반드시 유효한 JSON 형식으로만 반환한다.";

export function buildRepairMessages(rawText) {
  return [
    {
      role: "user",
      content: `
아래 텍스트를 의미는 유지한 채 유효한 JSON으로만 복구하라.

규칙:
1. 설명, 코드블록, 마크다운 없이 JSON만 출력한다.
2. 최상위 구조는 반드시 {"copies":[...]} 여야 한다.
3. 각 항목은 framework, version, angle, headline, body, cta를 모두 가져야 한다.
4. 문자열 내부의 큰따옴표는 반드시 escape 처리한다.
5. 줄바꿈은 문자열 내부에서 \\n 로 표현한다.
6. 내용을 새로 창작하지 말고, 가능한 한 원문을 보존하면서 JSON 문법만 바로잡는다.

원본 텍스트:
${rawText}`.trim(),
    },
  ];
}
