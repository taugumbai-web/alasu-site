import CatalogTemplate, { Product } from "../../components/template";

const products: Product[] = [
    {
        img: "/Ала лимонати/Тархун-removebg-preview.png",
        label: { ru: "Тархун", kz: "Тархун", en: "Tarragon", zh: "龙蒿" },
        desc: { ru: "Освежающий вкус тархуна на чистой горной воде Хан Тэнгри.", kz: "Хан Тәңірінің таза тау суындағы тархунның сергітетін дәмі.", en: "Refreshing tarragon flavor on pure Khan Tengri mountain water.", zh: "以汗腾格里纯净山泉水为基底的清爽龙蒿风味。" },
        badge: { ru: "Тархун", kz: "Тархун", en: "Tarragon", zh: "龙蒿" },
        accent: "#22c55e", accentRgb: "34,197,94",
    },
    {
        img: "/Ала лимонати/Барбарис_гранат-removebg-preview.png",
        label: { ru: "Барбарис и гранат", kz: "Барбарис және анар", en: "Barberry & Pomegranate", zh: "小檗石榴" },
        desc: { ru: "Яркое сочетание барбариса и граната — насыщенный, чуть терпкий вкус.", kz: "Барбарис пен анардың жарқын үйлесімі — қаныққан, аздап қышқыл дәм.", en: "Vibrant blend of barberry and pomegranate — rich, slightly tart flavor.", zh: "小檗与石榴的浓郁结合，口感微涩，风味丰富。" },
        badge: { ru: "Барбарис", kz: "Барбарис", en: "Barberry", zh: "小檗" },
        accent: "#dc2626", accentRgb: "220,38,38",
    },
    {
        img: "/Ала лимонати/груша_-removebg-preview.png",
        label: { ru: "Груша", kz: "Алмұрт", en: "Pear", zh: "梨" },
        desc: { ru: "Нежный и сладкий вкус спелой груши на воде Хан Тэнгри.", kz: "Хан Тэнгри суындағы піскен алмұрттың нәзік және тәтті дәмі.", en: "Gentle, sweet flavor of ripe pear on Khan Tengri water.", zh: "汗腾格里水中熟梨的清甜风味。" },
        badge: { ru: "Груша", kz: "Алмұрт", en: "Pear", zh: "梨" },
        accent: "#84cc16", accentRgb: "132,204,22",
    },
    {
        img: "/Ала лимонати/кауын_ананас-removebg-preview.png",
        label: { ru: "Дыня и ананас", kz: "Қауын және ананас", en: "Melon & Pineapple", zh: "哈密瓜菠萝" },
        desc: { ru: "Тропическая свежесть дыни и ананаса — лето в каждом глотке.", kz: "Дыня мен ананастың тропикалық сергітуі — әр ұртымда жаз.", en: "Tropical freshness of melon and pineapple — summer in every sip.", zh: "哈密瓜与菠萝的热带清爽，每一口都是夏天。" },
        badge: { ru: "Дыня", kz: "Қауын", en: "Melon", zh: "哈密瓜" },
        accent: "#f59e0b", accentRgb: "245,158,11",
    },
    {
        img: "/Ала лимонати/киви_махито-removebg-preview.png",
        label: { ru: "Киви мохито", kz: "Киви мохито", en: "Kiwi Mojito", zh: "猕猴桃莫吉托" },
        desc: { ru: "Освежающий мохито с кислинкой киви — идеально для жаркого дня.", kz: "Киви қышқылдығы бар сергітетін мохито — ыстық күнге өте қолайлы.", en: "Refreshing mojito with kiwi tartness — perfect for a hot day.", zh: "猕猴桃酸爽莫吉托，炎热天气的完美选择。" },
        badge: { ru: "Киви", kz: "Киви", en: "Kiwi", zh: "猕猴桃" },
        accent: "#10b981", accentRgb: "16,185,129",
    },
    {
        img: "/Ала лимонати/манго_ананас-removebg-preview.png",
        label: { ru: "Манго и ананас", kz: "Манго және ананас", en: "Mango & Pineapple", zh: "芒果菠萝" },
        desc: { ru: "Тропический дуэт манго и ананаса на горной воде Хан Тэнгри.", kz: "Хан Тэнгри тау суындағы манго мен ананастың тропикалық дуэті.", en: "Tropical duo of mango and pineapple on Khan Tengri mountain water.", zh: "汗腾格里山泉水中芒果与菠萝的热带二重奏。" },
        badge: { ru: "Манго", kz: "Манго", en: "Mango", zh: "芒果" },
        accent: "#fb923c", accentRgb: "251,146,60",
    },
];

export default function LemonadePage() {
    return (
        <CatalogTemplate
            products={products}
            category="lemonade"
            titleRu="Ала Лимонати"
            titleKz="Ала Лимонати"
            titleEn="Ala Lemonati"
            titleZh="柠檬水系列"
            descRu="Натуральные лимонады на горной воде Хан Тэнгри — яркие вкусы без искусственных добавок."
            descKz="Хан Тэнгри тау суындағы табиғи лимонадтар — жасанды қоспасыз жарқын дәмдер."
            descEn="Natural lemonades on Khan Tengri mountain water — bold flavors with no artificial additives."
            descZh="以汗腾格里山泉水为基底的天然柠檬水，口感浓郁，无人工添加剂。"
        />
    );
}
