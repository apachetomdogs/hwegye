import { AccountEntry } from "../types/account";

export const accounts: AccountEntry[] = [
  {
    id: "cash",
    name: "현금",
    category: "자산",
    subcategory: "당좌자산",
    definition: "통화, 지폐, 주화 등 즉시 사용할 수 있는 돈을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["보통예금", "현금과부족"],
    comparedWith: [
      {
        account: "보통예금",
        difference: "현금은 손에 보유한 돈이고, 보통예금은 은행 계좌에 예치한 돈입니다.",
      },
    ],
    relatedProblemTopics: ["현금"],
  },
  {
    id: "bank-deposit",
    name: "보통예금",
    category: "자산",
    subcategory: "당좌자산",
    definition: "입출금이 자유로운 은행 예금 계좌의 잔액을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["현금", "단기차입금"],
    comparedWith: [
      {
        account: "현금",
        difference: "보통예금은 은행에 맡긴 돈이고, 현금은 회사가 직접 보유한 돈입니다.",
      },
    ],
    relatedProblemTopics: ["보통예금"],
  },
  {
    id: "accounts-receivable",
    name: "외상매출금",
    category: "자산",
    subcategory: "당좌자산",
    definition: "상품을 외상으로 판매하고 나중에 받을 금액을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["상품매출", "부가세예수금", "미수금"],
    comparedWith: [
      {
        account: "미수금",
        difference: "외상매출금은 상품 매출 거래에서 발생하고, 미수금은 상품 외 거래에서 받을 돈입니다.",
      },
    ],
    relatedProblemTopics: ["외상매출금", "상품매출"],
  },
  {
    id: "notes-receivable",
    name: "받을어음",
    category: "자산",
    subcategory: "당좌자산",
    definition: "상품 판매 등으로 받아 만기일에 현금화할 수 있는 어음을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["외상매출금"],
    comparedWith: [
      {
        account: "외상매출금",
        difference: "받을어음은 어음이라는 증서가 있고, 외상매출금은 일반 외상 채권입니다.",
      },
    ],
  },
  {
    id: "other-receivables",
    name: "미수금",
    category: "자산",
    subcategory: "당좌자산",
    definition: "상품 매출이 아닌 거래에서 아직 받지 못한 금액을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["외상매출금", "미지급금"],
    comparedWith: [
      {
        account: "외상매출금",
        difference: "미수금은 비품 처분, 대여금 회수 등 상품 판매 외 거래에서 발생합니다.",
      },
      {
        account: "미지급금",
        difference: "미수금은 받을 돈이고, 미지급금은 지급해야 할 돈입니다.",
      },
    ],
    relatedProblemTopics: ["미수금"],
  },
  {
    id: "advance-payments",
    name: "선급금",
    category: "자산",
    subcategory: "당좌자산",
    definition: "상품이나 용역을 받기 전에 거래처에 미리 지급한 금액을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["선수금", "외상매입금"],
    comparedWith: [
      {
        account: "선수금",
        difference: "선급금은 우리가 먼저 지급한 돈이고, 선수금은 고객에게 먼저 받은 돈입니다.",
      },
    ],
    relatedProblemTopics: ["선급금"],
  },
  {
    id: "merchandise",
    name: "상품",
    category: "자산",
    subcategory: "재고자산",
    definition: "판매를 목적으로 구입하여 보유하고 있는 물품을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["상품매출", "외상매입금", "부가세대급금"],
    relatedProblemTopics: ["상품"],
  },
  {
    id: "fixtures",
    name: "비품",
    category: "자산",
    subcategory: "유형자산",
    definition: "영업활동에 장기간 사용하는 책상, 컴퓨터, 사무기기 등을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["감가상각비", "감가상각누계액", "미지급금"],
    comparedWith: [
      {
        account: "소모품비",
        difference: "비품은 여러 회계기간에 사용하는 자산이고, 소모품비는 사용으로 비용 처리되는 항목입니다.",
      },
    ],
    relatedProblemTopics: ["비품", "감가상각비"],
  },
  {
    id: "vat-paid",
    name: "부가세대급금",
    category: "자산",
    subcategory: "당좌자산",
    definition: "매입 시 부담한 부가가치세로, 나중에 매출세액에서 공제받을 금액을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["부가세예수금", "상품", "비품"],
    comparedWith: [
      {
        account: "부가세예수금",
        difference: "부가세대급금은 매입 때 지급한 세액이고, 부가세예수금은 매출 때 고객에게 받은 세액입니다.",
      },
    ],
    relatedProblemTopics: ["부가세대급금"],
  },
  {
    id: "accumulated-depreciation",
    name: "감가상각누계액",
    category: "자산",
    subcategory: "유형자산 차감계정",
    definition: "유형자산의 취득 이후 누적된 감가상각액을 기록하는 자산 차감 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["비품", "감가상각비"],
    comparedWith: [
      {
        account: "감가상각비",
        difference: "감가상각비는 당기의 비용이고, 감가상각누계액은 자산에서 차감하는 누적 금액입니다.",
      },
    ],
    relatedProblemTopics: ["감가상각누계액", "감가상각비"],
  },
  {
    id: "accounts-payable",
    name: "외상매입금",
    category: "부채",
    subcategory: "유동부채",
    definition: "상품을 외상으로 매입하고 나중에 지급할 금액을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["상품", "부가세대급금", "미지급금"],
    comparedWith: [
      {
        account: "미지급금",
        difference: "외상매입금은 상품 매입 거래에서 발생하고, 미지급금은 상품 외 거래에서 발생합니다.",
      },
    ],
    relatedProblemTopics: ["외상매입금", "상품"],
  },
  {
    id: "notes-payable",
    name: "지급어음",
    category: "부채",
    subcategory: "유동부채",
    definition: "상품 매입 등으로 발행하여 만기일에 지급해야 하는 어음을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["외상매입금"],
    comparedWith: [
      {
        account: "외상매입금",
        difference: "지급어음은 어음을 발행한 채무이고, 외상매입금은 일반 외상 채무입니다.",
      },
    ],
  },
  {
    id: "other-payables",
    name: "미지급금",
    category: "부채",
    subcategory: "유동부채",
    definition: "상품 매입이 아닌 거래에서 아직 지급하지 않은 금액을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["미수금", "외상매입금", "비품"],
    comparedWith: [
      {
        account: "외상매입금",
        difference: "미지급금은 비품 구입, 비용 발생 등 상품 외 거래에서 발생합니다.",
      },
      {
        account: "미수금",
        difference: "미지급금은 지급할 돈이고, 미수금은 받을 돈입니다.",
      },
    ],
    relatedProblemTopics: ["미지급금"],
  },
  {
    id: "advance-receipts",
    name: "선수금",
    category: "부채",
    subcategory: "유동부채",
    definition: "상품이나 용역을 제공하기 전에 고객에게 미리 받은 금액을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["선급금", "상품매출"],
    comparedWith: [
      {
        account: "선급금",
        difference: "선수금은 우리가 먼저 받은 돈이고, 선급금은 우리가 먼저 지급한 돈입니다.",
      },
    ],
    relatedProblemTopics: ["선수금"],
  },
  {
    id: "withholdings-payable",
    name: "예수금",
    category: "부채",
    subcategory: "유동부채",
    definition: "급여 지급 시 원천징수한 세금처럼 회사가 잠시 보관했다가 납부할 금액을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["급여", "부가세예수금"],
    comparedWith: [
      {
        account: "부가세예수금",
        difference: "예수금은 원천세 등 일반적으로 대신 보관하는 금액이고, 부가세예수금은 매출 부가세입니다.",
      },
    ],
  },
  {
    id: "vat-received",
    name: "부가세예수금",
    category: "부채",
    subcategory: "유동부채",
    definition: "매출 시 고객에게 받은 부가가치세로, 나중에 납부할 세액을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["부가세대급금", "상품매출", "외상매출금"],
    comparedWith: [
      {
        account: "부가세대급금",
        difference: "부가세예수금은 매출 때 받은 세액이고, 부가세대급금은 매입 때 지급한 세액입니다.",
      },
    ],
    relatedProblemTopics: ["부가세예수금"],
  },
  {
    id: "short-term-borrowings",
    name: "단기차입금",
    category: "부채",
    subcategory: "유동부채",
    definition: "상환기한이 1년 이내인 차입금을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["보통예금", "이자비용"],
    relatedProblemTopics: ["단기차입금", "이자비용"],
  },
  {
    id: "capital-stock",
    name: "자본금",
    category: "자본",
    definition: "소유주나 주주가 사업에 출자한 금액을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["현금", "보통예금", "인출금"],
    comparedWith: [
      {
        account: "인출금",
        difference: "자본금은 출자액이고, 인출금은 개인기업의 소유주가 사적으로 가져간 금액입니다.",
      },
    ],
  },
  {
    id: "drawings",
    name: "인출금",
    category: "자본",
    definition: "개인기업의 소유주가 사업 자금을 개인 용도로 인출한 금액을 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["자본금", "현금", "보통예금"],
    comparedWith: [
      {
        account: "자본금",
        difference: "인출금은 자본을 감소시키는 임시 계정이고, 자본금은 출자액입니다.",
      },
    ],
  },
  {
    id: "sales",
    name: "상품매출",
    category: "수익",
    definition: "상품을 판매하여 발생한 수익을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["외상매출금", "현금", "부가세예수금"],
    comparedWith: [
      {
        account: "상품",
        difference: "상품은 판매 전 보유한 자산이고, 상품매출은 판매로 발생한 수익입니다.",
      },
    ],
    relatedProblemTopics: ["상품매출", "외상매출금", "부가세예수금"],
  },
  {
    id: "rent-revenue",
    name: "임대료수익",
    category: "수익",
    definition: "건물이나 공간 등을 빌려주고 받은 임대료 수익을 기록하는 계정입니다.",
    normalBalance: "대변",
    relatedAccounts: ["현금", "미수금", "선수금"],
    comparedWith: [
      {
        account: "선수금",
        difference: "임대료수익은 이미 수익으로 벌어들인 금액이고, 선수금은 아직 제공 전 먼저 받은 금액입니다.",
      },
    ],
  },
  {
    id: "salary-expense",
    name: "급여",
    category: "비용",
    definition: "종업원에게 근로의 대가로 지급하는 임금과 급여를 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["예수금", "보통예금"],
    comparedWith: [
      {
        account: "예수금",
        difference: "급여는 회사의 비용이고, 예수금은 급여에서 원천징수해 납부할 부채입니다.",
      },
    ],
  },
  {
    id: "supplies-expense",
    name: "소모품비",
    category: "비용",
    definition: "업무용 소모품을 사용하거나 구입 즉시 비용 처리할 때 사용하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["현금", "미지급금", "비품"],
    comparedWith: [
      {
        account: "비품",
        difference: "소모품비는 짧은 기간에 소비되는 비용이고, 비품은 장기간 사용하는 자산입니다.",
      },
    ],
  },
  {
    id: "depreciation-expense",
    name: "감가상각비",
    category: "비용",
    definition: "유형자산의 사용으로 발생한 가치 감소분을 당기 비용으로 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["비품", "감가상각누계액"],
    comparedWith: [
      {
        account: "감가상각누계액",
        difference: "감가상각비는 당기 비용이고, 감가상각누계액은 지금까지 누적된 자산 차감액입니다.",
      },
    ],
    relatedProblemTopics: ["감가상각비", "감가상각누계액"],
  },
  {
    id: "interest-expense",
    name: "이자비용",
    category: "비용",
    definition: "차입금 등에 대해 지급하거나 발생한 이자를 기록하는 계정입니다.",
    normalBalance: "차변",
    relatedAccounts: ["단기차입금", "미지급금", "보통예금"],
    comparedWith: [
      {
        account: "단기차입금",
        difference: "이자비용은 차입으로 발생한 비용이고, 단기차입금은 갚아야 할 원금 부채입니다.",
      },
    ],
  },
];
