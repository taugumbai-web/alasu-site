import CatalogTemplate, { Product } from "../../components/template";

const products: Product[] = [
    {
        img: "/still.png",
        label: { ru: "Негазированная вода", kz: "Газсыз су", en: "Still Water", zh: "无气水" },
        desc: { ru: "Чистая природная вода из источников Хан Тэнгри без газа. Идеальна для ежедневного употребления.", kz: "Хан Тәңірі бастауларынан алынған таза табиғи газсыз су.", en: "Pure natural still water from the Khan Tengri springs. Perfect for everyday hydration.", zh: "来自汗腾格里泉水的纯天然无气水，非常适合日常饮用。" },
        badge: { ru: "Без газа", kz: "Газсыз", en: "Still", zh: "无气" },
        accent: "#2563eb", accentRgb: "37,99,235",
    },
    {
        img: "/sparkling.png",
        label: { ru: "Газированная вода", kz: "Газды су", en: "Sparkling Water", zh: "气泡水" },
        desc: { ru: "Живая вода с пузырьками — освежает и бодрит. Природный газ подчёркивает вкус Хан Тэнгри.", kz: "Көпіршіктері бар тірі су — сергітеді және жандандырады.", en: "Sparkling water with natural bubbles — refreshing and invigorating.", zh: "天然气泡水，清爽提神。" },
        badge: { ru: "С газом", kz: "Газды", en: "Sparkling", zh: "气泡" },
        accent: "#38bdf8", accentRgb: "56,189,248",
    },
    {
        img: "/mineral.png",
        label: { ru: "С добавлением Zam Zam", kz: "Zam Zam суымен", en: "With Zam Zam Water", zh: "添加渗渗泉水" },
        desc: { ru: "Уникальное сочетание горной воды Хан Тэнгри с добавлением священной воды Zam Zam.", kz: "Хан Тэнгри тау суының Zam Zam қасиетті суымен бірегей үйлесімі.", en: "A unique blend of Khan Tengri mountain water with the sacred Zam Zam water.", zh: "汗腾格里山泉水与神圣渗渗泉水的独特融合。" },
        badge: { ru: "Zam Zam", kz: "Zam Zam", en: "Zam Zam", zh: "渗渗泉" },
        accent: "#c2824a", accentRgb: "194,130,74",
    },
    {
        img: "/sport.png",
        label: { ru: "SPORT+", kz: "SPORT+", en: "SPORT+", zh: "运动+" },
        desc: { ru: "Специальная формула для спортсменов. Обогащена электролитами для быстрого восстановления.", kz: "Спортшылар үшін арнайы формула. Электролиттермен байытылған.", en: "Special formula for athletes. Enriched with electrolytes for fast recovery.", zh: "专为运动员设计的配方，富含电解质，快速恢复体力。" },
        badge: { ru: "Для спорта", kz: "Спортқа арналған", en: "Sport", zh: "运动" },
        accent: "#94a3b8", accentRgb: "148,163,184",
    },
];

export default function WaterPage() {
    return (
        <CatalogTemplate
            products={products}
            category="water"
            titleRu="Вода"
            titleKz="Су"
            titleEn="Water"
            titleZh="水"
            descRu="Природная вода из источников Хан Тэнгри — четыре варианта для любого момента."
            descKz="Хан Тэнгри бастауларынан алынған табиғи су — кез келген сәт үшін төрт нұсқа."
            descEn="Natural water from Khan Tengri springs — four options for every moment."
            descZh="汗腾格里泉水，四种选择，适合每一刻。"
        />
    );
}
