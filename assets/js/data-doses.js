// Base de doses de fármacos cardiológicos (referência adulto). Conferir bula e individualizar.
// Campos: g (grupo), nome, dose (habitual), renal (ajuste renal), obs.
window.DOSES = [
  // ===== Anticoagulantes =====
  { g: 'Anticoagulantes', nome: 'Enoxaparina (terapêutica)', dose: '1 mg/kg SC 12/12h (ou 1,5 mg/kg 1x/dia)', renal: 'ClCr < 30: 1 mg/kg SC 1x/dia', obs: 'Profilaxia 40 mg/dia (30 mg se ClCr < 30). Considerar anti-Xa em obesos, DRC e gestantes.' },
  { g: 'Anticoagulantes', nome: 'Heparina não fracionada (HNF)', dose: 'SCA: bolus 60 U/kg (máx 4000) + 12 U/kg/h, ajustar pelo TTPa (alvo 1,5–2,5×)', renal: 'Sem ajuste — preferível na DRC grave/diálise', obs: 'Efeito reversível com protamina; risco de HIT.' },
  { g: 'Anticoagulantes', nome: 'Varfarina', dose: 'Individualizada pelo INR (alvo 2–3; prótese mecânica 2,5–3,5)', renal: 'Sem ajuste fixo', obs: 'Muitas interações alimentares/medicamentosas; controle frequente de INR.' },
  { g: 'Anticoagulantes', nome: 'Apixabana (FA)', dose: '5 mg 12/12h', renal: '2,5 mg 12/12h se ≥ 2 de: idade ≥ 80, peso ≤ 60 kg, Cr ≥ 1,5 mg/dL. Evitar ClCr < 15 / diálise (ESC)', obs: 'TEV: 10 mg 12/12h por 7 dias → 5 mg 12/12h. Menor eliminação renal entre os DOACs.' },
  { g: 'Anticoagulantes', nome: 'Rivaroxabana (FA)', dose: '20 mg/dia com alimento', renal: '15 mg/dia se ClCr 15–49. Evitar ClCr < 15', obs: 'TEV: 15 mg 12/12h por 21 dias → 20 mg/dia.' },
  { g: 'Anticoagulantes', nome: 'Dabigatrana (FA)', dose: '150 mg 12/12h', renal: '110 mg 12/12h se idade ≥ 80 ou alto risco de sangramento. Evitar ClCr < 30 (ESC)', obs: 'Antídoto: idarucizumabe. Não abrir a cápsula.' },
  { g: 'Anticoagulantes', nome: 'Edoxabana (FA)', dose: '60 mg/dia', renal: '30 mg/dia se ClCr 15–50, peso ≤ 60 kg ou inibidor de gp-P. Evitar ClCr < 15', obs: 'Eficácia reduzida se ClCr > 95 — evitar nesse caso.' },
  { g: 'Anticoagulantes', nome: 'Fondaparinux (SCA)', dose: '2,5 mg SC 1x/dia', renal: 'Contraindicado se ClCr < 20', obs: 'Risco de trombo no cateter — usar HNF adicional na ICP.' },
  // ===== Antiagregantes =====
  { g: 'Antiagregantes', nome: 'AAS (aspirina)', dose: 'Ataque 150–300 mg (mastigado) → 75–100 mg/dia', renal: 'Sem ajuste', obs: 'Manutenção indefinida na DAC/SCA.' },
  { g: 'Antiagregantes', nome: 'Clopidogrel', dose: 'Ataque 300–600 mg → 75 mg/dia', renal: 'Sem ajuste', obs: 'Pró-fármaco; variabilidade genética (CYP2C19).' },
  { g: 'Antiagregantes', nome: 'Ticagrelor', dose: 'Ataque 180 mg → 90 mg 12/12h (com AAS ≤ 100 mg)', renal: 'Sem ajuste; evitar em diálise', obs: 'Dispneia comum; suspender 3–5 dias antes de cirurgia.' },
  { g: 'Antiagregantes', nome: 'Prasugrel', dose: 'Ataque 60 mg → 10 mg/dia (5 mg se < 60 kg ou ≥ 75 anos)', renal: 'Sem ajuste', obs: 'Contraindicado se AVC/AIT prévio; só após anatomia conhecida.' },
  // ===== IC — terapia modificadora / anti-HAS =====
  { g: 'IC e anti-hipertensivos', nome: 'Sacubitril/valsartana (ARNI)', dose: 'Iniciar 24/26 ou 49/51 mg 12/12h → alvo 97/103 mg 12/12h', renal: 'Iniciar dose baixa se ClCr < 30; cautela', obs: 'NUNCA com IECA (washout de 36 h). Vigiar K, PA e função renal.' },
  { g: 'IC e anti-hipertensivos', nome: 'Enalapril', dose: '2,5–5 mg 12/12h → alvo 10–20 mg 12/12h', renal: 'Reduzir/monitorar K e Cr; cautela ClCr < 30', obs: 'Tosse → trocar por BRA.' },
  { g: 'IC e anti-hipertensivos', nome: 'Losartana', dose: '25–50 mg/dia → alvo 150 mg/dia (IC)', renal: 'Monitorar K e Cr', obs: 'Alternativa ao IECA por intolerância.' },
  { g: 'IC e anti-hipertensivos', nome: 'Carvedilol', dose: '3,125 mg 12/12h → alvo 25 mg 12/12h (50 mg 12/12h se > 85 kg)', renal: 'Sem ajuste', obs: 'Titular a cada 2 semanas se estável; não iniciar descompensado.' },
  { g: 'IC e anti-hipertensivos', nome: 'Bisoprolol', dose: '1,25 mg/dia → alvo 10 mg/dia', renal: 'Cautela se ClCr < 20', obs: 'Beta-1 seletivo.' },
  { g: 'IC e anti-hipertensivos', nome: 'Metoprolol succinato (CR/XL)', dose: '12,5–25 mg/dia → alvo 200 mg/dia', renal: 'Sem ajuste', obs: 'Formulação de liberação prolongada para IC.' },
  { g: 'IC e anti-hipertensivos', nome: 'Espironolactona', dose: '12,5–25 mg/dia → 25–50 mg/dia', renal: 'Evitar se ClCr < 30 ou K > 5,0; monitorar', obs: 'Ginecomastia (trocar por eplerenona).' },
  { g: 'IC e anti-hipertensivos', nome: 'Dapagliflozina / Empagliflozina', dose: '10 mg/dia', renal: 'Iniciar se TFG ≥ 20–25; manter mesmo com queda da TFG', obs: 'Pausar em doença aguda/jejum/cirurgia (cetoacidose euglicêmica). ITU/candidíase.' },
  { g: 'IC e anti-hipertensivos', nome: 'Anlodipino', dose: '2,5–10 mg/dia', renal: 'Sem ajuste', obs: 'Edema de MMII dose-dependente.' },
  // ===== Diuréticos =====
  { g: 'Diuréticos', nome: 'Furosemida', dose: '20–40 mg VO/EV, titular pela congestão (EV = ~2× a dose VO)', renal: 'DRC exige doses maiores; sem teto fixo', obs: 'Monitorar K, Na, função renal e volemia.' },
  { g: 'Diuréticos', nome: 'Hidroclorotiazida', dose: '12,5–25 mg/dia', renal: 'Pouco eficaz se ClCr < 30 (preferir diurético de alça)', obs: 'Hipocalemia, hiponatremia, hiperuricemia.' },
  // ===== Antiarrítmicos / controle de FC =====
  { g: 'Antiarrítmicos e controle de FC', nome: 'Amiodarona', dose: 'EV: 150 mg em 10 min → 1 mg/min por 6 h → 0,5 mg/min. VO: 200 mg 8/8h 1 sem → 12/12h 1 sem → 200 mg/dia', renal: 'Sem ajuste', obs: 'Toxicidade tireoidiana, pulmonar, hepática, ocular. ↑ varfarina e digoxina.' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Propafenona', dose: '150–300 mg 8/8h (ou "pill-in-the-pocket" 450–600 mg)', renal: 'Cautela', obs: 'Contraindicada em cardiopatia estrutural/DAC. Associar a bloqueador do nó AV.' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Sotalol', dose: '80 mg 12/12h (ClCr > 60); 80 mg/dia (ClCr 40–60)', renal: 'Evitar se ClCr < 40', obs: 'Prolonga QT — monitorar QTc; iniciar internado em muitos casos.' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Digoxina', dose: 'Manutenção 0,125–0,25 mg/dia', renal: '0,125 mg/dia ou em dias alternados; monitorar nível sérico', obs: 'Alvo 0,5–0,9 ng/mL na IC. Intoxicação piora com hipocalemia.' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Diltiazem', dose: 'EV 0,25 mg/kg em 2 min (controle de FC); VO 120–360 mg/dia', renal: 'Sem ajuste', obs: 'Evitar na ICFEr (inotrópico negativo).' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Verapamil', dose: 'EV 2,5–5 mg; VO 120–480 mg/dia', renal: 'Cautela', obs: 'Evitar na ICFEr; constipação. Não associar a betabloqueador EV.' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Metoprolol tartarato (EV/agudo)', dose: '2,5–5 mg EV lento, repetir até 15 mg; VO 25–100 mg 12/12h', renal: 'Sem ajuste', obs: 'Controle de FC agudo na FA/flutter.' },
  { g: 'Antiarrítmicos e controle de FC', nome: 'Adenosina', dose: '6 mg EV em bolus rápido → 12 mg → 12 mg (flush com SF)', renal: 'Sem ajuste', obs: 'TSV; meia-vida de segundos; sensação torácica/flushing transitórios.' },
  // ===== Hipolipemiantes =====
  { g: 'Hipolipemiantes', nome: 'Atorvastatina', dose: '40–80 mg/dia (alta intensidade)', renal: 'Sem ajuste', obs: 'Mialgia; ↑ transaminases. Tomar à noite não obrigatório.' },
  { g: 'Hipolipemiantes', nome: 'Rosuvastatina', dose: '20–40 mg/dia (alta intensidade)', renal: 'Iniciar 5 mg se ClCr < 30; máx 10 mg/dia', obs: 'Alta potência; menor interação CYP3A4.' },
  { g: 'Hipolipemiantes', nome: 'Ezetimiba', dose: '10 mg/dia', renal: 'Sem ajuste', obs: 'Associar à estatina quando a meta de LDL não é atingida.' },
  { g: 'Hipolipemiantes', nome: 'Evolocumabe / Alirocumabe (iPCSK9)', dose: 'Evolocumabe 140 mg SC 2/2 sem (ou 420 mg/mês); alirocumabe 75–150 mg SC 2/2 sem', renal: 'Sem ajuste', obs: 'Para muito alto risco fora da meta com estatina + ezetimiba.' },
  // ===== Vasoativos / inotrópicos =====
  { g: 'Vasoativos e inotrópicos', nome: 'Noradrenalina', dose: '0,05–0,5 mcg/kg/min (titular pela PA)', renal: 'Sem ajuste', obs: 'Vasopressor de escolha no choque cardiogênico/séptico. Use a calculadora de infusão (aba Scores).' },
  { g: 'Vasoativos e inotrópicos', nome: 'Dobutamina', dose: '2,5–20 mcg/kg/min', renal: 'Sem ajuste', obs: 'Inotrópico no baixo débito; pode causar taquicardia/arritmia/hipotensão.' },
  { g: 'Vasoativos e inotrópicos', nome: 'Nitroglicerina (tridil)', dose: '5–200 mcg/min EV, titular', renal: 'Sem ajuste', obs: 'Congestão/isquemia; evitar se PAS baixa, uso de inibidor de PDE5 ou infarto de VD.' },
  { g: 'Vasoativos e inotrópicos', nome: 'Nitroprussiato de sódio', dose: '0,3–10 mcg/kg/min', renal: 'Risco de toxicidade por tiocianato na DRC', obs: 'Emergência hipertensiva; fotossensível; monitorar PA invasiva.' }
];
