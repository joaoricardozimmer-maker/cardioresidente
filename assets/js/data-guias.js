// Diretrizes por tema — ESC, AHA/ACC e SBC. Links verificados (jun/2026).
// SBC: PDF direto (abccardiol.org) quando disponível; senão portal oficial.
// ESC: página oficial da diretriz/tema (escardio.org) — abre o texto completo/PDF.
// AHA/ACC: hub oficial de diretrizes do ACC (acc.org/guidelines).
window.GUIAS_AHA_HUB = "https://www.acc.org/guidelines";
window.GUIAS_SBC_PORTAL = "https://www.portal.cardiol.br/diretrizes";

window.GUIAS = [
  {
    t: "Síndrome coronariana aguda (SCA)",
    esc: { t: "ESC 2023 — SCA (PDF)", u: "https://academic.oup.com/eurheartj/article-pdf/44/38/3720/56728087/ehad191.pdf" },
    aha: { t: "ACC/AHA 2025 — ACS (PDF)", u: "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001309" },
    sbc: { t: "SBC 2025 — Dor torácica na emergência", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-122-09-e20250620/0066-782X-abc-122-09-e20250620.x74770.pdf" }
  },
  {
    t: "Síndrome coronariana crônica (DAC estável)",
    esc: { t: "ESC 2024 — SCC (PDF)", u: "https://academic.oup.com/eurheartj/article-pdf/45/36/3415/59561235/ehae177.pdf" },
    aha: { t: "ACC/AHA 2023 — CCD (PDF)", u: "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001168" },
    sbc: { t: "SBC 2025 — Síndrome Coronariana Crônica", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-122-09-e20250619/0066-782X-abc-122-09-e20250619.x74770.pdf" }
  },
  {
    t: "Insuficiência cardíaca",
    esc: { t: "ESC 2021 — IC (PDF)", u: "https://academic.oup.com/eurheartj/article-pdf/42/36/3599/40594787/ehab368.pdf" },
    aha: { t: "AHA/ACC/HFSA 2022 — HF (PDF)", u: "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001063" },
    sbc: { t: "SBC — Diretrizes de IC (portal)", u: "https://www.portal.cardiol.br/diretrizes" }
  },
  {
    t: "Fibrilação atrial",
    esc: { t: "ESC 2024 — FA (PDF)", u: "https://academic.oup.com/eurheartj/article-pdf/45/36/3314/59561045/ehae176.pdf" },
    aha: { t: "ACC/AHA 2023 — AF (PDF)", u: "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000001193" },
    sbc: { t: "SBC 2025 — Fibrilação Atrial", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-122-09-e20250618/0066-782X-abc-122-09-e20250618.x74770.pdf" }
  },
  {
    t: "Arritmias e dispositivos (MP / CDI / TRC)",
    esc: { t: "ESC 2021/2022 — Pacing/VA", u: "https://www.escardio.org/topics/arrythmias-and-device-therapy/" },
    aha: { t: "ACC/AHA — Devices", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2023 — Dispositivos Eletrônicos Implantáveis", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-120-01-e20220892/0066-782X-abc-120-01-e20220892.x55156.pdf" }
  },
  {
    t: "Valvopatias",
    esc: { t: "ESC/EACTS 2025 — Valvopatias", u: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/valvular-heart-disease-management-of/" },
    aha: { t: "ACC/AHA 2020 — VHD (PDF)", u: "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000000923" },
    sbc: { t: "SBC — Valvopatias (portal)", u: "https://www.portal.cardiol.br/diretrizes" }
  },
  {
    t: "Dislipidemia e prevenção",
    esc: { t: "ESC/EAS 2019 — Dislipidemias (PDF) · atual. 2025", u: "https://academic.oup.com/eurheartj/article-pdf/41/1/111/66477601/eurheartj_41_1_111.pdf" },
    aha: { t: "ACC/AHA 2018 — Colesterol (PDF)", u: "https://www.ahajournals.org/doi/pdf/10.1161/CIR.0000000000000625" },
    sbc: { t: "SBC 2025 — Dislipidemias e Prevenção da Aterosclerose", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-122-09-e20250640/0066-782X-abc-122-09-e20250640.x74770.pdf" }
  },
  {
    t: "Hipertensão arterial",
    esc: { t: "ESC 2024 — Hipertensão (PDF)", u: "https://academic.oup.com/eurheartj/article-pdf/45/38/3912/59633218/ehae178.pdf" },
    aha: { t: "ACC/AHA — Hypertension", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2025 — Hipertensão Arterial", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-122-09-e20250624/0066-782X-abc-122-09-e20250624.x74770.pdf" }
  },
  {
    t: "Pericardite e miocardite",
    esc: { t: "ESC 2025 — Miocardite/Pericardite", u: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2022 — Miocardites", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-119-01-0143/0066-782X-abc-119-01-0143.x55156.pdf" }
  },
  {
    t: "Tromboembolismo venoso / TEP",
    esc: { t: "ESC 2019 — TEP (PDF)", u: "https://academic.oup.com/eurheartj/article-pdf/41/4/543/34306708/ehz405.pdf" },
    aha: { t: "AHA/ACC 2026 — TEP agudo", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001415" },
    sbc: { t: "SBC 2022 — Tromboembolismo Venoso", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-118-04-0797/0066-782X-abc-118-04-0797.x27815.pdf" }
  },
  {
    t: "Avaliação perioperatória",
    esc: { t: "ESC 2022 — Cirurgia não cardíaca (lista)", u: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/" },
    aha: { t: "ACC/AHA 2024 — Perioperatório", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2024 — Avaliação Perioperatória", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-121-09-e20240590/0066-782X-abc-121-09-e20240590.x81990.pdf" }
  },
  {
    t: "Cardiomiopatias (hipertrófica / Chagas)",
    esc: { t: "ESC 2023 — Cardiomiopatias (lista)", u: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/" },
    aha: { t: "ACC/AHA 2024 — HCM", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2024 — Cardiomiopatia Hipertrófica", u: "https://drive.google.com/file/d/1UxQOcB5lq-7IhNW_7WtydSqMVfn2xbe-/view" }
  },
  {
    t: "Imagem cardiovascular (RM/TC, eco, carótidas)",
    esc: { t: "ESC — Imagem cardiovascular", u: "https://www.escardio.org/topics/cv-imaging-topic-landing-page/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2024 — RM e TC Cardiovascular", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-121-09-e20240608/0066-782X-abc-121-09-e20240608.x81990.pdf" }
  },
  {
    t: "Doppler de carótidas e vertebrais",
    esc: { t: "ESC — Stroke/imagem", u: "https://www.escardio.org/topics/stroke/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2023 — US de carótidas e vertebrais", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-120-10-e20230695/0066-782X-abc-120-10-e20230695.x55156.pdf" }
  },
  {
    t: "Gravidez e cardiopatia",
    esc: { t: "ESC 2025 — CVD na gravidez", u: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/cardiovascular-diseases-during-pregnancy-management-of/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2024 — Climatério e Menopausa", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-121-07-e20240478/0066-782X-abc-121-07-e20240478.x47225.pdf" }
  },
  {
    t: "Cardio-oncologia",
    esc: { t: "ESC 2022 — Cardio-oncologia", u: "https://www.escardio.org/topics/cardio-oncology/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC — Cardio-oncologia (portal)", u: "https://www.portal.cardiol.br/diretrizes" }
  },
  {
    t: "Ergometria e reabilitação",
    esc: { t: "ESC — Prevenção/esporte", u: "https://www.escardio.org/topics/risk-factors-and-prevention/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2024 — Ergometria (adulto)", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-121-3-e20240110/0066-782X-abc-121-3-e20240110.x47225.pdf" }
  },
  {
    t: "Prevenção / cardiometabólico (obesidade)",
    esc: { t: "ESC — Fatores de risco e prevenção", u: "https://www.escardio.org/topics/risk-factors-and-prevention/" },
    aha: { t: "ACC/AHA — hub", u: "https://www.acc.org/guidelines" },
    sbc: { t: "SBC 2025 — Manejo da Obesidade", u: "https://abccardiol.org/wp-content/uploads/articles_xml/0066-782X-abc-122-09-e20250621/0066-782X-abc-122-09-e20250621.x74770.pdf" }
  }
];
