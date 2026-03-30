import CatalogTemplate, { Product } from "../../components/template";

const products: Product[] = [
    {
        img: "/энергетики/Ала_gold-removebg-preview.png",
        label: { ru: "Ala Gold", kz: "Ala Gold", en: "Ala Gold", zh: "Ala Gold" },
        desc: { ru: "Премиальный энергетический напиток на основе горной воды Хан Тэнгри. Заряжает на весь день.", kz: "Хан Тэнгри тау суы негізіндегі премиум энергетикалық сусын. Бүкіл күнге заряд береді.", en: "Premium energy drink based on Khan Tengri mountain water. Powers you through the whole day.", zh: "以汗腾格里山泉水为基底的高端能量饮料，为全天充电。" },
        badge: { ru: "Gold", kz: "Gold", en: "Gold", zh: "金" },
        accent: "#f59e0b", accentRgb: "245,158,11",
    },
    {
        img: "/энергетики/аласу_силвер-removebg-preview.png",
        label: { ru: "Alasu Silver", kz: "Alasu Silver", en: "Alasu Silver", zh: "Alasu Silver" },
        desc: { ru: "Классический энергетик с чистым вкусом горной воды Хан Тэнгри. Бодрость и свежесть с первого глотка.", kz: "Хан Тэнгри тау суының таза дәмімен классикалық энергетик. Бірінші ұртымнан бастап сергітеді.", en: "Classic energy drink with the clean taste of Khan Tengri mountain water. Fresh and energizing from the first sip.", zh: "以汗腾格里山泉水纯净口感为特色的经典能量饮料，第一口便清爽提神。" },
        badge: { ru: "Silver", kz: "Silver", en: "Silver", zh: "银" },
        accent: "#94a3b8", accentRgb: "148,163,184",
    },
];

export default function EnergyPage() {
    return (
        <CatalogTemplate
            products={products}
            category="energy"
            titleRu="Напиток со вкусом энергетика"
            titleKz="Энергетик дәміндегі сусын"
            titleEn="Energy-Flavored Drink"
            titleZh="能量口味饮料"
            descRu="Напитки со вкусом энергетика на чистой горной воде Хан Тэнгри — сила природы в каждом глотке."
            descKz="Хан Тәңірінің таза тау суындағы энергетикалық сусындар — табиғат күші әр ұртымда."
            descEn="Energy drinks on pure Khan Tengri mountain water — the power of nature in every sip."
            descZh="以汗腾格里纯净山泉水为基底的能量饮料，每一口都蕴含自然之力。"
        />
    );
}
