// Base curada de condutas cardiológicas consolidadas.
// classe = classe de recomendação (I, IIa, IIb, III) | nivel = nível de evidência (A, B, C)
// pubmedQuery = consulta usada para buscar os artigos reais ao vivo no PubMed.
window.DIRETRIZES = [
  // ---------------- SÍNDROME CORONARIANA AGUDA ----------------
  {
    cat: "Síndrome coronariana aguda",
    title: "AAS na síndrome coronariana aguda",
    keywords: ["aas", "aspirina", "antiagregante", "sca", "síndrome coronariana", "infarto", "iam", "antiplaquetário"],
    bottom: "AAS deve ser administrado imediatamente a todos os pacientes com SCA (sem contraindicação): ataque de 150–300 mg VO (mastigado), seguido de manutenção 75–100 mg/dia indefinidamente.",
    classe: "I", nivel: "A",
    trials: "ISIS-2, Antithrombotic Trialists' Collaboration",
    src: "Diretrizes ESC SCA 2023 · AHA/ACC · SBC",
    pubmedQuery: "aspirin acute coronary syndrome guideline"
  },
  {
    cat: "Síndrome coronariana aguda",
    title: "Dupla antiagregação plaquetária (DAPT)",
    keywords: ["dapt", "dupla antiagregação", "clopidogrel", "ticagrelor", "prasugrel", "p2y12", "stent"],
    bottom: "AAS + inibidor de P2Y12 (preferir ticagrelor ou prasugrel ao clopidogrel na SCA) por 12 meses como padrão; individualizar duração conforme risco isquêmico vs. hemorrágico.",
    classe: "I", nivel: "A",
    trials: "PLATO (ticagrelor), TRITON-TIMI 38 (prasugrel), CURE (clopidogrel)",
    src: "Diretrizes ESC SCA 2023",
    pubmedQuery: "dual antiplatelet therapy acute coronary syndrome ticagrelor prasugrel"
  },
  {
    cat: "Síndrome coronariana aguda",
    title: "Reperfusão no IAMCSST — tempos-alvo",
    keywords: ["iamcsst", "supra", "reperfusão", "angioplastia primária", "porta-balão", "trombólise", "fibrinólise", "stemi"],
    bottom: "Angioplastia primária é a reperfusão preferida se exequível em ≤120 min do diagnóstico (meta porta-balão ≤90 min). Se indisponível nesse tempo, fibrinólise em ≤10 min do diagnóstico, seguida de transferência para ICP.",
    classe: "I", nivel: "A",
    trials: "DANAMI-2, PRAGUE-2, STREAM",
    src: "Diretriz ESC IAMCSST 2017 · SBC",
    pubmedQuery: "primary PCI STEMI reperfusion time guideline"
  },
  {
    cat: "Síndrome coronariana aguda",
    title: "Estratégia invasiva no IAMSSST / angina instável",
    keywords: ["iamssst", "sca sem supra", "angina instável", "estratégia invasiva", "grace", "nstemi"],
    bottom: "Estratégia invasiva precoce (≤24 h) em pacientes de alto risco (troponina elevada, alterações dinâmicas do ST, GRACE >140). Estratégia invasiva imediata se instabilidade/critérios de muito alto risco.",
    classe: "I", nivel: "A",
    trials: "TIMACS, FRISC-II, RITA-3",
    src: "Diretrizes ESC SCA 2023",
    pubmedQuery: "early invasive strategy NSTEMI GRACE score"
  },
  {
    cat: "Síndrome coronariana aguda",
    title: "Estatina de alta intensidade pós-SCA",
    keywords: ["estatina", "atorvastatina", "rosuvastatina", "ldl", "dislipidemia", "prevenção secundária", "colesterol"],
    bottom: "Iniciar estatina de alta intensidade precocemente em todos os pacientes pós-SCA, independentemente do LDL basal. Meta LDL <55 mg/dL (e redução ≥50%); associar ezetimiba/iPCSK9 se não atingir.",
    classe: "I", nivel: "A",
    trials: "PROVE-IT TIMI 22, IMPROVE-IT, FOURIER",
    src: "Diretriz ESC Dislipidemia 2019 · SBC",
    pubmedQuery: "high intensity statin acute coronary syndrome LDL target"
  },

  // ---------------- INSUFICIÊNCIA CARDÍACA ----------------
  {
    cat: "Insuficiência cardíaca (FEr)",
    title: "Os 4 pilares da ICFEr",
    keywords: ["insuficiência cardíaca", "icfer", "fer", "fevr", "quatro pilares", "gdmt", "fração de ejeção reduzida"],
    bottom: "Tratamento de base da IC com FE reduzida: (1) IECA/BRA ou sacubitril-valsartana, (2) betabloqueador, (3) antagonista mineralocorticoide, (4) inibidor de SGLT2. Iniciar e titular as quatro classes precocemente.",
    classe: "I", nivel: "A",
    trials: "PARADIGM-HF, MERIT-HF, RALES/EMPHASIS-HF, DAPA-HF/EMPEROR-Reduced",
    src: "Diretriz ESC IC 2021 (atualização 2023) · SBC",
    pubmedQuery: "heart failure reduced ejection fraction four pillars guideline directed therapy"
  },
  {
    cat: "Insuficiência cardíaca (FEr)",
    title: "Sacubitril-valsartana (ARNI)",
    keywords: ["sacubitril", "valsartana", "arni", "entresto", "neprilisina"],
    bottom: "Sacubitril-valsartana é recomendado em substituição ao IECA na ICFEr sintomática para reduzir hospitalização e mortalidade. Respeitar washout de 36 h após IECA (risco de angioedema).",
    classe: "I", nivel: "B",
    trials: "PARADIGM-HF, PIONEER-HF",
    src: "Diretriz ESC IC 2021 · SBC",
    pubmedQuery: "sacubitril valsartan heart failure reduced ejection fraction"
  },
  {
    cat: "Insuficiência cardíaca (FEr)",
    title: "Inibidores de SGLT2 na IC",
    keywords: ["isglt2", "dapagliflozina", "empagliflozina", "sglt2", "gliflozina"],
    bottom: "Dapagliflozina ou empagliflozina recomendadas na ICFEr (e benefício também na IC com FE levemente reduzida/preservada), reduzindo hospitalização e morte cardiovascular, independentemente de diabetes.",
    classe: "I", nivel: "A",
    trials: "DAPA-HF, EMPEROR-Reduced, DELIVER, EMPEROR-Preserved",
    src: "Diretriz ESC IC 2023 (focused update)",
    pubmedQuery: "SGLT2 inhibitor heart failure dapagliflozin empagliflozin"
  },
  {
    cat: "Insuficiência cardíaca (FEr)",
    title: "CDI / TRC na ICFEr",
    keywords: ["cdi", "desfibrilador", "trc", "ressincronizador", "ressincronização", "qrs", "bloqueio de ramo"],
    bottom: "CDI para prevenção primária se FEVE ≤35% sintomática apesar de TMO ≥3 meses e sobrevida esperada >1 ano. TRC se FEVE ≤35%, ritmo sinusal e QRS ≥150 ms com morfologia de BRE (considerar 130–149 ms).",
    classe: "I", nivel: "A",
    trials: "SCD-HeFT, MADIT-CRT, CARE-HF",
    src: "Diretriz ESC IC 2021 · ESC Pacing 2021",
    pubmedQuery: "implantable cardioverter defibrillator cardiac resynchronization heart failure guideline"
  },

  // ---------------- FIBRILAÇÃO ATRIAL ----------------
  {
    cat: "Fibrilação atrial",
    title: "Anticoagulação na FA (CHA₂DS₂-VASc)",
    keywords: ["fibrilação atrial", "fa", "anticoagulação", "chads", "cha2ds2-vasc", "doac", "varfarina", "avc"],
    bottom: "Anticoagulação oral indicada em CHA₂DS₂-VASc ≥2 (homens) ou ≥3 (mulheres); considerar se ≥1/≥2. Preferir DOAC à varfarina (exceto valvopatia mitral reumática moderada/grave ou prótese mecânica).",
    classe: "I", nivel: "A",
    trials: "RE-LY, ROCKET-AF, ARISTOTLE, ENGAGE AF-TIMI 48",
    src: "Diretriz ESC FA 2024 · SBC",
    pubmedQuery: "atrial fibrillation anticoagulation CHA2DS2-VASc DOAC guideline"
  },
  {
    cat: "Fibrilação atrial",
    title: "Controle de ritmo vs. frequência",
    keywords: ["controle de ritmo", "controle de frequência", "cardioversão", "ablação", "amiodarona", "fa"],
    bottom: "Controle precoce de ritmo (em até ~1 ano do diagnóstico) reduz desfechos cardiovasculares. Ablação por cateter é 1ª linha para controle de ritmo na FA paroxística sintomática e superior a fármacos em casos selecionados.",
    classe: "I", nivel: "A",
    trials: "EAST-AFNET 4, CABANA, CASTLE-AF",
    src: "Diretriz ESC FA 2024",
    pubmedQuery: "rhythm control rate control atrial fibrillation early ablation"
  },

  // ---------------- DISLIPIDEMIA / PREVENÇÃO ----------------
  {
    cat: "Prevenção / dislipidemia",
    title: "Metas de LDL por risco cardiovascular",
    keywords: ["ldl", "meta", "colesterol", "risco cardiovascular", "prevenção", "estatina", "dislipidemia"],
    bottom: "Metas de LDL: muito alto risco <55 mg/dL; alto risco <70 mg/dL; moderado <100; baixo <116. Em muito alto risco, redução adicional <40 mg/dL após novo evento em 2 anos é razoável.",
    classe: "I", nivel: "A",
    trials: "CTT meta-analysis, FOURIER, ODYSSEY OUTCOMES",
    src: "Diretriz ESC/EAS Dislipidemia 2019 · SBC",
    pubmedQuery: "LDL cholesterol targets cardiovascular risk guideline"
  },
  {
    cat: "Prevenção / dislipidemia",
    title: "AAS em prevenção primária",
    keywords: ["aas", "aspirina", "prevenção primária", "antiagregante"],
    bottom: "NÃO se recomenda AAS de rotina em prevenção primária por aumento do risco de sangramento que supera o benefício. Considerar apenas em casos selecionados de alto risco e baixo risco hemorrágico, individualizando.",
    classe: "III", nivel: "A",
    trials: "ASPREE, ASCEND, ARRIVE",
    src: "USPSTF 2022 · ACC/AHA Prevenção 2019",
    pubmedQuery: "aspirin primary prevention cardiovascular disease bleeding"
  },

  // ---------------- HIPERTENSÃO ----------------
  {
    cat: "Hipertensão arterial",
    title: "Alvos pressóricos e início de tratamento",
    keywords: ["hipertensão", "has", "pressão arterial", "alvo pressórico", "anti-hipertensivo"],
    bottom: "Meta geral PA <130/80 mmHg na maioria dos adultos tratados (se tolerado). Iniciar com combinação dupla em comprimido único (IECA/BRA + BCC ou diurético tiazídico) na maioria dos hipertensos estágio 2.",
    classe: "I", nivel: "A",
    trials: "SPRINT, ACCORD, STEP",
    src: "Diretriz ESC/ESH HAS 2023/2024 · SBC",
    pubmedQuery: "blood pressure target hypertension treatment guideline SPRINT"
  },

  // ---------------- VALVOPATIAS ----------------
  {
    cat: "Valvopatias",
    title: "Estenose aórtica grave — TAVI vs. cirurgia",
    keywords: ["estenose aórtica", "tavi", "valva aórtica", "troca valvar", "savr", "valvopatia"],
    bottom: "Intervenção indicada na estenose aórtica grave sintomática (e assintomática selecionada). Escolha entre TAVI e cirurgia (SAVR) pelo Heart Team conforme idade, risco e anatomia: TAVI favorecida em idosos/alto risco.",
    classe: "I", nivel: "A",
    trials: "PARTNER, Evolut, SURTAVI",
    src: "Diretriz ESC/EACTS Valvopatias 2021",
    pubmedQuery: "severe aortic stenosis TAVI surgical aortic valve replacement guideline"
  },

  // ---------------- TROMBOEMBOLISMO ----------------
  {
    cat: "Tromboembolismo pulmonar",
    title: "Estratificação e anticoagulação no TEP",
    keywords: ["tep", "embolia pulmonar", "tromboembolismo", "anticoagulação", "trombólise", "psi"],
    bottom: "Estratificar risco precoce (instabilidade hemodinâmica, VD, biomarcadores). Anticoagulação imediata; DOAC preferido na maioria. TEP de alto risco (choque): trombólise sistêmica. Risco intermediário-alto: monitorar e considerar reperfusão de resgate.",
    classe: "I", nivel: "A",
    trials: "PEITHO, Hokusai-VTE, EINSTEIN-PE",
    src: "Diretriz ESC TEP 2019",
    pubmedQuery: "pulmonary embolism risk stratification anticoagulation guideline"
  },

  // ---------------- PERICARDITE ----------------
  {
    cat: "Doenças do pericárdio",
    title: "Pericardite aguda — AINE + colchicina",
    keywords: ["pericardite", "colchicina", "aine", "pericárdio", "derrame pericárdico"],
    bottom: "Tratamento de 1ª linha da pericardite aguda: AINE/AAS em dose plena + colchicina por 3 meses (reduz recorrência). Corticoide reservado a casos selecionados (contraindicação a AINE, etiologia autoimune).",
    classe: "I", nivel: "A",
    trials: "ICAP, COPE, CORP",
    src: "Diretriz ESC Pericárdio 2015",
    pubmedQuery: "acute pericarditis colchicine NSAID guideline"
  },

  // ---------------- BRADIARRITMIA ----------------
  {
    cat: "Arritmias / dispositivos",
    title: "Marcapasso em bradiarritmias",
    keywords: ["marcapasso", "bradicardia", "bav", "bloqueio atrioventricular", "doença do nó sinusal", "síncope"],
    bottom: "Marcapasso definitivo indicado em BAV de 2º grau Mobitz II, BAV total/avançado e doença do nó sinusal sintomática. Em bradicardia, descartar e tratar causas reversíveis antes do implante.",
    classe: "I", nivel: "C",
    trials: "—",
    src: "Diretriz ESC Estimulação Cardíaca 2021",
    pubmedQuery: "pacemaker bradycardia atrioventricular block guideline indication"
  }
];
