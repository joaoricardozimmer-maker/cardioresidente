// Protocolos de plantão — algoritmos de emergência (ACLS/AHA 2020 e diretrizes ESC).
// Apoio à decisão: siga o protocolo da sua instituição e o ACLS vigente.
// passos[].t: passo | dose | decisao | alerta | nota | sub(items[])
window.PROTOCOLOS = [
  {
    id: 'pcr', nome: 'Parada cardiorrespiratória (ACLS)', area: 'Emergência',
    passos: [
      { t: 'passo', x: 'Cheque responsividade, respiração e pulso (≤ 10 s). Sem pulso → iniciar RCP.' },
      { t: 'passo', x: 'RCP de alta qualidade: 100–120 compressões/min, 5–6 cm de profundidade, permitir retorno do tórax, minimizar interrupções (< 10 s). Ventilação 30:2 (ou 1 a cada 6 s se via aérea avançada).' },
      { t: 'passo', x: 'Monitor/desfibrilador assim que possível → identificar o ritmo.' },
      { t: 'decisao', x: 'RITMO CHOCÁVEL (FV / TV sem pulso): desfibrilar imediatamente.' },
      { t: 'dose', x: 'Choque: 120–200 J bifásico (360 J monofásico). Retomar RCP por 2 min logo após.' },
      { t: 'dose', x: 'Adrenalina 1 mg EV/IO a cada 3–5 min (após o 2º choque).' },
      { t: 'dose', x: 'Amiodarona 300 mg EV/IO (1ª dose) e 150 mg (2ª) na FV/TV refratária — alternativa: lidocaína 1–1,5 mg/kg.' },
      { t: 'decisao', x: 'RITMO NÃO CHOCÁVEL (AESP / assistolia): NÃO chocar.' },
      { t: 'dose', x: 'Adrenalina 1 mg EV/IO o mais precoce possível e a cada 3–5 min. RCP contínua, checar ritmo a cada 2 min.' },
      { t: 'alerta', x: 'Trate as causas reversíveis — 5 H: hipovolemia, hipóxia, H⁺ (acidose), hipo/hipercalemia, hipotermia. 5 T: pneumoTórax hipertensivo, Tamponamento, Toxinas, Trombose coronária, TEP.' },
      { t: 'nota', x: 'Capnografia (ETCO₂): qualidade da RCP e possível RCE (subida abrupta). Pós-RCE: oxigenação/PA-alvo, ECG (ICP se STEMI), controle de temperatura.' }
    ]
  },
  {
    id: 'bradi', nome: 'Bradicardia com pulso (ACLS)', area: 'Emergência',
    passos: [
      { t: 'passo', x: 'FC < 50 bpm com sintomas. Avalie via aérea, O₂ se hipoxêmico, monitor, acesso, ECG de 12 derivações.' },
      { t: 'decisao', x: 'Há instabilidade? (hipotensão, alteração de consciência, dor torácica isquêmica, IC aguda, choque).' },
      { t: 'sub', items: ['SIM → tratar agora.', 'NÃO → observar/monitorar e investigar a causa.'] },
      { t: 'dose', x: 'Atropina 1 mg EV em bólus, repetir a cada 3–5 min (máx. 3 mg).' },
      { t: 'passo', x: 'Se atropina ineficaz: marcapasso transcutâneo E/OU infusão de cronotrópico.' },
      { t: 'dose', x: 'Dopamina 5–20 mcg/kg/min OU adrenalina 2–10 mcg/min, titulando pela resposta.' },
      { t: 'alerta', x: 'BAV de 2º grau Mobitz II ou BAV total: atropina costuma falhar — priorize marcapasso (transcutâneo → transvenoso).' }
    ]
  },
  {
    id: 'taqui', nome: 'Taquicardia com pulso (ACLS)', area: 'Emergência',
    passos: [
      { t: 'passo', x: 'FC ≥ 150 bpm geralmente sintomática. O₂ se necessário, monitor, acesso, ECG de 12 derivações.' },
      { t: 'decisao', x: 'INSTÁVEL? (hipotensão, rebaixamento, dor torácica isquêmica, IC aguda).' },
      { t: 'dose', x: 'SIM → cardioversão elétrica SINCRONIZADA imediata (sedação se possível). Energia: QRS estreito regular 50–100 J · FA 120–200 J · TV monomórfica com pulso 100 J. TV polimórfica instável → desfibrilar.' },
      { t: 'decisao', x: 'ESTÁVEL → avaliar a largura do QRS.' },
      { t: 'sub', items: ['QRS ESTREITO (< 0,12 s): manobra vagal → adenosina 6 mg EV em bólus rápido → 12 mg (repetir 12 mg). Se não reverter/recorrer: betabloqueador ou BCC (diltiazem).', 'QRS LARGO (≥ 0,12 s): se TV provável → amiodarona 150 mg EV em 10 min (repetir) ou procainamida; considerar cardioversão eletiva. Adenosina apenas se regular e monomórfica.'] },
      { t: 'alerta', x: 'FA pré-excitada (WPW — QRS largo, irregular, muito rápida): NÃO usar bloqueadores do nó AV (adenosina, BCC, betabloqueador, digoxina) — podem acelerar a condução pela via acessória e precipitar FV. Use cardioversão elétrica ou procainamida/ibutilida.' },
      { t: 'alerta', x: 'Torsades de pointes (TV polimórfica com QT longo): sulfato de magnésio 1–2 g EV; corrigir K⁺/Mg²⁺ e suspender fármacos que prolongam QT.' }
    ]
  },
  {
    id: 'eap', nome: 'Edema agudo de pulmão', area: 'Insuficiência cardíaca',
    passos: [
      { t: 'passo', x: 'Dispneia grave, estertores, hipoxemia, congestão. Sente o paciente, monitorize, acesso, ECG (buscar isquemia/arritmia).' },
      { t: 'dose', x: 'Oxigênio para SatO₂ ≥ 90%; VNI (CPAP/BiPAP) se desconforto respiratório e sem contraindicação.' },
      { t: 'decisao', x: 'Avalie a PA antes de vasodilatar.' },
      { t: 'dose', x: 'Se PAS > 110 mmHg: nitroglicerina EV 10–20 mcg/min, titular (reduz pré e pós-carga). Útil também na crise hipertensiva associada.' },
      { t: 'dose', x: 'Diurético: furosemida 20–40 mg EV (ou ~2× a dose oral habitual se já em uso); reavaliar diurese e congestão.' },
      { t: 'alerta', x: 'Se PAS < 90 ou sinais de hipoperfusão → é CHOQUE CARDIOGÊNICO: não usar vasodilatador/diurético agressivo; iniciar inotrópico/vasopressor (ver protocolo).' },
      { t: 'nota', x: 'Tratar o gatilho: SCA, emergência hipertensiva, taqui/bradiarritmia, má adesão, disfunção valvar aguda. Morfina apenas em casos selecionados (cautela).' }
    ]
  },
  {
    id: 'choque', nome: 'Choque cardiogênico', area: 'Emergência',
    passos: [
      { t: 'passo', x: 'PAS < 90 mmHg por > 30 min (ou necessidade de vasopressor) + sinais de hipoperfusão (oligúria, confusão, extremidades frias, lactato elevado) por disfunção cardíaca.' },
      { t: 'passo', x: 'Monitorização, ECG, ecocardiograma à beira-leito, lactato; identificar a causa (IAM é a mais comum).' },
      { t: 'dose', x: 'Vasopressor de escolha: NORADRENALINA 0,05–0,5 mcg/kg/min (titular pela PAM ≥ 65).' },
      { t: 'dose', x: 'Inotrópico: DOBUTAMINA 2,5–20 mcg/kg/min se baixo débito com PA aceitável.' },
      { t: 'passo', x: 'Se IAM: revascularização precoce da artéria culpada (ICP). Considerar suporte circulatório mecânico (Impella/ECMO) em casos refratários.' },
      { t: 'nota', x: 'No choque por IAM multiarterial, revascularizar apenas a artéria culpada na fase aguda (CULPRIT-SHOCK). Balão intra-aórtico (BIA) NÃO de rotina (IABP-SHOCK II foi neutro).' },
      { t: 'alerta', x: 'Evite expansão volêmica agressiva se já congesto. Reavalie continuamente perfusão e congestão (perfis "quente/frio – úmido/seco").' }
    ]
  },
  {
    id: 'dissecao', nome: 'Dissecção aórtica aguda', area: 'Aorta',
    passos: [
      { t: 'passo', x: 'Suspeite: dor torácica/dorsal súbita, intensa, migratória; assimetria de pulsos/PA; sopro de IAo; síncope. Risco em HAS, Marfan, valva bicúspide.' },
      { t: 'passo', x: 'Confirmação: angio-TC de aorta (ou ecocardiograma transesofágico se instável). Dois acessos calibrosos, analgesia (morfina).' },
      { t: 'dose', x: '1º — CONTROLE DA FC: betabloqueador EV (esmolol, metoprolol ou labetalol) com alvo FC < 60 bpm, ANTES de vasodilatador (evita taquicardia reflexa e ↑ do estresse de parede).' },
      { t: 'dose', x: '2º — CONTROLE DA PA: alvo PAS 100–120 mmHg; associar nitroprussiato se necessário, sempre após o betabloqueador.' },
      { t: 'decisao', x: 'Tipo A (acomete aorta ascendente) → CIRURGIA de emergência. Tipo B não complicada → tratamento clínico; TEVAR se complicada (má-perfusão, dor/HAS refratária, expansão).' }
    ]
  },
  {
    id: 'crisehas', nome: 'Emergência hipertensiva', area: 'Hipertensão',
    passos: [
      { t: 'passo', x: 'PA muito elevada (geralmente > 180/120) COM lesão aguda de órgão-alvo: encefalopatia/AVC, EAP, SCA, dissecção, LRA, eclâmpsia, retinopatia grave.' },
      { t: 'decisao', x: 'Sem lesão aguda de órgão-alvo = URGÊNCIA hipertensiva → reduzir a PA em horas/dias com fármacos VO, ambulatorial. NÃO usar EV agressivo.' },
      { t: 'passo', x: 'Emergência: internar (preferir UTI) e reduzir a PA de forma CONTROLADA com anti-hipertensivo EV titulável.' },
      { t: 'dose', x: 'Alvo geral: reduzir a PAM em ~25% na 1ª hora; depois ~160/100 nas 2–6 h. Opções: nitroprussiato 0,3–10 mcg/kg/min · nitroglicerina (se EAP/isquemia) · labetalol · esmolol.' },
      { t: 'alerta', x: 'Exceções ao alvo: DISSECÇÃO → PAS 100–120 e FC < 60 rapidamente. AVC isquêmico → só tratar se PA muito alta/trombólise (alvos específicos). Eclâmpsia → sulfato de magnésio + anti-hipertensivo.' }
    ]
  },
  {
    id: 'dortoracica', nome: 'Dor torácica na emergência (SBC 2025)', area: 'Síndrome coronariana',
    passos: [
      { t: 'passo', x: 'PASSO 1 — ECG de 12 derivações em ≤ 10 min de chegada + monitorização, acesso venoso e avaliação clínica dirigida. Pense sempre nas causas que matam: SCA, dissecção aórtica, TEP (e também pneumotórax hipertensivo, tamponamento, rotura esofágica).' },
      { t: 'decisao', x: 'ECG COM CRITÉRIO DIAGNÓSTICO (supra de ST / equivalente de OCA)? → SIM: seguir a rota específica de reperfusão (ver protocolo OCA/OMI), sem esperar troponina.' },
      { t: 'decisao', x: 'HÁ CRITÉRIO DE INSTABILIDADE? (ECG limítrofe, dor persistente, instabilidade hemodinâmica/má perfusão, congestão pulmonar aguda, taqui/bradiarritmia no cenário da dor).' },
      { t: 'sub', items: ['SIM → rota do paciente instável: avaliação clínica + troponina, repetir ECG a cada 10–20 min (apoio de médico experiente), buscar ativamente diferenciais (POCUS), admitir e tratar conforme o diagnóstico; considerar time de choque.', 'NÃO → seguir para o Passo 2 (estratificação).'] },
      { t: 'passo', x: 'PASSO 2 — Rota diagnóstica inicial: dosar TROPONINA de alta sensibilidade (algoritmo 0/1 h, 0/2 h ou 0/3 h) e estimar a PROBABILIDADE pré-teste. O escore preferencial na suspeita de SCA é o HEART (superior a EDACS/ADAPT/TIMI/GRACE na avaliação inicial — estudo nacional).' },
      { t: 'nota', x: 'Troponina hs: valores < percentil 99 (isolado tardio ou seriado, com Δ pequeno) descartam IAM; elevação/Δ significativo (ou > 5× o limite) confirmam injúria — buscar o mecanismo (tipo 1 vs 2). Cortes são específicos do ensaio.' },
      { t: 'nota', x: 'Suspeita de DISSECÇÃO/síndrome aórtica: use ADD-RS (≤ 1 baixo, 2–3 alto risco) ou AORTA; se pré-teste não-baixa → angio-TC de aorta (não descartar por D-dímero isolado no alto risco). Suspeita de TEP: Wells (≤ 4 improvável / > 4 provável) ou Genebra + D-dímero (corte 500, ajustado por idade se > 50 a; ou 1000 em improvável) → angio-TC.' },
      { t: 'passo', x: 'PASSO 3 — Decisão após avaliação clínica detalhada + algoritmos/exames. Diagnóstico estabelecido → tratar pela rota específica. Não estabelecido e risco intermediário → Passo 4.' },
      { t: 'passo', x: 'PASSO 4 — Observação/investigação adicional: 3ª dosagem de troponina, repetir ECG, aplicar GRACE e considerar exames conforme a suspeita (angio-TC de coronárias, teste funcional de isquemia).' },
      { t: 'decisao', x: 'RULE-OUT (descartar IAM): na ausência de diagnóstico alternativo, considerar ALTA — especialmente se HEART < 4 em paciente sem antecedente de doença coronária. Se a suspeita de SCA persistir, seguir investigação não invasiva ambulatorial.' },
      { t: 'alerta', x: 'RULE-IN: admitir; avaliar critérios de IAM e, na ausência deles, buscar ativamente a causa da injúria miocárdica. ECG normal + troponina negativa NÃO excluem angina instável se a suspeita clínica for alta.' }
    ]
  },
  {
    id: 'stemi', nome: 'IAM com oclusão coronária aguda (OCA/OMI) — reperfusão', area: 'Síndrome coronariana',
    passos: [
      { t: 'passo', x: 'ECG de 12 derivações em ≤ 10 min. Objetivo: identificar OCLUSÃO CORONÁRIA AGUDA (OMI) → reperfusão imediata, não apenas o "supra clássico".' },
      { t: 'passo', x: 'Supra de ST novo no ponto J em ≥ 2 derivações contíguas: ≥ 1 mm (geral); V2–V3 ≥ 2 mm (♂ ≥ 40 a), ≥ 2,5 mm (♂ < 40 a), ≥ 1,5 mm (♀); inferior/posterior (V7–V9) ≥ 0,5 mm; VD (V3R–V4R) ≥ 1 mm (≥ 0,5 se ♀/♂ < 30 a).' },
      { t: 'alerta', x: 'BRE ou BRD NOVO, por si só, NÃO é critério de supra. No BRE/ritmo de marcapasso, aplique os critérios de SGARBOSSA MODIFICADOS (Smith): supra concordante ≥ 1 mm · infra concordante ≥ 1 mm em V1–V3 · supra discordante excessivo (razão ST/S ≤ −0,25).' },
      { t: 'decisao', x: 'Reconheça EQUIVALENTES de oclusão (OCA) — reperfusão urgente mesmo SEM supra clássico:' },
      { t: 'sub', items: ['De Winter: infra de ST ascendente + T apiculada/simétrica em precordiais → oclusão proximal da DA.', 'Supra em aVR ≥ 1 mm com infra de ST difuso → TCE/DA proximal ou doença triarterial.', 'IAM posterior: infra de ST V1–V3 com R alto/T positiva → confirmar com V7–V9.', 'Ondas T hiperagudas (largas, simétricas) — fase precoce da oclusão.', 'Wellens (T bifásica ou profunda em V2–V3, sem dor): suboclusão crítica da DA — angiografar, NÃO trombolisar.'] },
      { t: 'dose', x: 'Antiagregação: AAS 150–300 mg (mastigado) + inibidor de P2Y12 (ticagrelor 180 mg ou prasugrel 60 mg; clopidogrel 600 mg se fibrinólise/sem opção).' },
      { t: 'dose', x: 'Anticoagulação parenteral (HNF ou enoxaparina conforme a estratégia).' },
      { t: 'decisao', x: 'REPERFUSÃO: ICP primária se exequível em ≤ 120 min do diagnóstico (porta-balão ≤ 90 min).' },
      { t: 'dose', x: 'Se ICP indisponível no prazo e início < 12 h: FIBRINÓLISE em ≤ 10 min (tenecteplase ajustada ao peso) + transferência para ICP. (Não trombolisar padrão de Wellens/suboclusão sem oclusão ativa.)' },
      { t: 'alerta', x: 'Não atrasar a reperfusão; ECG seriado se dúvida e dor persistente. O₂ só se SatO₂ < 90%; cuidado com nitrato no IAM de VD/hipotensão.' }
    ]
  },
  {
    id: 'tep', nome: 'TEP — categorias A–E (AHA/ACC 2026)', area: 'Tromboembolismo',
    passos: [
      { t: 'alerta', x: 'A diretriz AHA/ACC 2026 aposentou "maciço", "submaciço" e "baixo risco". No lugar entraram cinco categorias clínicas (A a E) com subcategorias. A categoria é definida pelo achado MAIS GRAVE — clínico, laboratorial ou de imagem — e o paciente pode mudar de categoria ao longo da internação.' },
      { t: 'passo', x: 'PASSO 1 — Probabilidade pré-teste. Wells (≤ 4 improvável / > 4 provável), Genebra ou YEARS. Pré-teste baixa ou intermediária (< 50%) → D-dímero com corte ajustado pela idade (idade × 10 µg/L acima de 50 anos). Suspeita alta (> 50%) → angio-TC direto, sem D-dímero.' },
      { t: 'nota', x: 'Angio-TC de tórax é o exame de escolha, inclusive na gestação. Cintilografia V/Q apenas se houver contraindicação ao contraste. O ecocardiograma NÃO confirma nem exclui TEP — ele serve para estratificar. Exceção: paciente instável demais para ir à TC, em que disfunção de VD ao eco à beira-leito autoriza tratamento empírico.' },
      { t: 'passo', x: 'PASSO 2 — Classifique. Em todo TEP confirmado sintomático de gravidade elevada, peça troponina, BNP/NT-proBNP e LACTATO (Classe 1 nas categorias C a E) e avalie o VD — eco preferível à angio-TC para estratificação.' },
      { t: 'decisao', x: 'CATEGORIAS AHA/ACC 2026 — do mais leve ao mais grave:' },
      { t: 'sub', items: [
        'A — Subclínico: achado incidental, assintomático. Alta do PS, sem internação.',
        'B — Sintomático com gravidade clínica BAIXA: PESI I–II, sPESI 0 ou Hestia 0.',
        'C — Sintomático com gravidade clínica ELEVADA (PESI III–V, sPESI ≥ 1, Hestia ≥ 1), pressão preservada. C1 = VD e biomarcadores normais · C2 = VD OU biomarcador alterado · C3 = ambos alterados.',
        'D — Falência cardiopulmonar incipiente. D1 = hipotensão transitória/recorrente que responde a volume, sem hipoperfusão · D2 = hipotensão transitória COM hipoperfusão ou lesão de órgão (lactato alto, injúria renal) = "choque normotenso".',
        'E — Falência cardiopulmonar estabelecida. E1 = hipotensão persistente com choque cardiogênico · E2 = choque refratário ou parada cardiorrespiratória.',
        'Modificador R+ (acrescente a qualquer subcategoria) — C: SpO₂ < 90%, FR ≥ 30 ou necessidade de O₂ · D: > 6 L/min ou máscara não reinalante · E: insuficiência respiratória hipoxêmica ou ventilatória.'
      ] },
      { t: 'passo', x: 'PASSO 3 — Anticoagule. HBPM é preferida à HNF quando é preciso via parenteral (Classe 1, B-R): enoxaparina 1 mg/kg SC 12/12 h. HNF fica reservada a instabilidade, ClCr < 30, obesidade extrema ou previsão de procedimento/trombólise. Na via oral, DOAC antes de varfarina (Classe 1, B-R).' },
      { t: 'dose', x: 'Rivaroxabana 15 mg 12/12 h por 21 dias, depois 20 mg/dia · Apixabana 10 mg 12/12 h por 7 dias, depois 5 mg 12/12 h · Dabigatrana e edoxabana exigem 5 dias de parenteral antes. Gestação: HBPM ou HNF (DOAC e varfarina são Classe 3: Dano). SAF trombótica: varfarina.' },
      { t: 'decisao', x: 'PASSO 4 — Destino e terapia por categoria:' },
      { t: 'sub', items: [
        'A e B → alta do PS ou alta precoce é razoável (Classe 2a), desde que o paciente consiga retirar o DOAC no mesmo dia e tenha seguimento confiável. Trombólise é DANOSA aqui (Classe 3).',
        'C1 → internar e anticoagular. Sem terapia avançada: trombólise é danosa (Classe 3) e cateter/trombectomia não trazem benefício (Classe 3).',
        'C2 e C3 → internar com monitorização e acionar o PERT (Classe 1, B-NR). Benefício de trombólise, cateter e trombectomia é INCERTO (Classe 2b) — decidir caso a caso. Vigiar deterioração de perto.',
        'D1 e D2 → unidade fechada, PERT, noradrenalina. Terapias avançadas PODEM ser consideradas (Classe 2b): trombólise sistêmica, trombólise por cateter ou trombectomia mecânica.',
        'E1 → reperfusão é RAZOÁVEL (Classe 2a): trombólise sistêmica, trombólise por cateter, trombectomia mecânica ou embolectomia cirúrgica — as quatro com a mesma classe. VA-ECMO razoável no choque refratário.',
        'E2 → trombólise sistêmica é razoável (Classe 2a). Embolectomia cirúrgica NÃO é recomendada em preferência a outras opções, como a VA-ECMO.'
      ] },
      { t: 'dose', x: 'Trombólise sistêmica: alteplase 100 mg EV em 2 h. Em parada iminente ou instalada: 0,6 mg/kg (máx. 50 mg) em 15 min. Suspender a HNF durante a infusão e retomar quando o TTPa cair abaixo de 2× o controle.' },
      { t: 'alerta', x: 'NÃO sede profundamente nem intube o paciente das categorias C a E salvo necessidade absoluta (Classe 3: Dano). Séries documentam 19–28% de parada cardíaca após indução anestésica em TEP com disfunção de VD, mesmo em quem parecia estável — a sedação abole a resposta simpática que sustenta o VD. Se intubar, tenha vasopressor, inotrópico e ECMO prontos à beira do leito.' },
      { t: 'nota', x: 'Suporte: cateter nasal de ALTO FLUXO em vez de cateter comum na hipoxemia moderada a grave. Cautela com volume — o VD já está sobrecarregado; no máximo 500 mL. Noradrenalina é o vasopressor de escolha (mantém a pressão de perfusão coronariana do VD); dobutamina se baixo débito com VD dilatado.' },
      { t: 'nota', x: 'Filtro de veia cava: NÃO usar de rotina em quem está anticoagulado (Classe 3: Dano, nível A — PREPIC2). Só na contraindicação absoluta à anticoagulação; preferir o retirável e programar a retirada em 29–54 dias.' },
      { t: 'passo', x: 'PASSO 5 — Depois da alta. Contato ou consulta na primeira semana; consulta em até 3 meses para decidir a duração da anticoagulação. Estimular deambulação precoce. Perguntar sobre dispneia e limitação funcional em TODA consulta por pelo menos 1 ano — rastreio de doença tromboembólica pulmonar crônica (~3% dos TEP).' },
      { t: 'nota', x: 'Duração: 3–6 meses se fator de risco maior reversível. Estendida se primeiro TEP sem fator reversível maior, fator persistente, TEP recorrente, câncer ativo ou trombofilia de alto risco. Na fase estendida, preferir DOSE REDUZIDA — apixabana 2,5 mg 12/12 h ou rivaroxabana 10 mg/dia (RENOVE, API-CAT).' }
    ]
  },
  {
    id: 'nstemi', nome: 'SCA sem supra (NSTE-ACS)', area: 'Síndrome coronariana',
    passos: [
      { t: 'passo', x: 'Dor torácica sem supra de ST persistente; ECG (infra de ST, inversão de T ou normal) + troponina hs com algoritmo 0/1–2 h.' },
      { t: 'dose', x: 'AAS 150–300 mg + anticoagulação parenteral (fondaparinux, enoxaparina ou HNF). Inibidor de P2Y12 conforme estratégia/risco de sangramento.' },
      { t: 'decisao', x: 'Estratificar o risco (GRACE, dinâmica de troponina, instabilidade) para definir o tempo da estratégia invasiva.' },
      { t: 'sub', items: ['Muito alto risco (instabilidade, dor refratária, arritmia maligna, complicação mecânica) → invasiva IMEDIATA (< 2 h).', 'Alto risco (GRACE > 140, ΔST, troponina dinâmica) → invasiva PRECOCE (< 24 h).', 'Risco baixo → teste não invasivo de isquemia/estratégia seletiva.'] },
      { t: 'dose', x: 'Estatina de alta intensidade precoce; betabloqueador e IECA/BRA se disfunção de VE/IC.' },
      { t: 'alerta', x: 'O₂ só se SatO₂ < 90%; cuidado com nitrato se suspeita de infarto de VD ou hipotensão.' }
    ]
  },
  {
    id: 'faaguda', nome: 'Fibrilação atrial aguda', area: 'Arritmia',
    passos: [
      { t: 'passo', x: 'FA com resposta ventricular rápida. Monitor, acesso, ECG; avaliar instabilidade e tempo de início.' },
      { t: 'decisao', x: 'INSTÁVEL (hipotensão, isquemia, IC, choque) → cardioversão elétrica SINCRONIZADA (120–200 J).' },
      { t: 'dose', x: 'ESTÁVEL — controle de frequência: betabloqueador OU diltiazem/verapamil EV. Na ICFEr, preferir betabloqueador, amiodarona ou digoxina (evitar BCC não-diidro).' },
      { t: 'passo', x: 'Anticoagulação conforme CHA₂DS₂-VA. Para cardioverter FA com > 48 h (ou duração incerta): ACO por ≥ 3 semanas antes OU ecocardiograma transesofágico para excluir trombo.' },
      { t: 'alerta', x: 'FA pré-excitada (WPW): NÃO usar bloqueadores do nó AV (adenosina, BCC, betabloqueador, digoxina, amiodarona com cautela) → cardioversão elétrica ou procainamida/ibutilida.' }
    ]
  },
  {
    id: 'hiperk', nome: 'Hipercalemia', area: 'Emergência',
    passos: [
      { t: 'passo', x: 'K⁺ elevado. ECG: onda T apiculada → PR longo, alargamento do QRS, perda da onda P → padrão sinusoidal (pré-PCR). Confirmar (excluir hemólise) e monitorizar.' },
      { t: 'dose', x: '1) ESTABILIZAR o miocárdio: gluconato de cálcio 10% 10–30 mL EV (ou cloreto de cálcio) se houver alterações no ECG — efeito em minutos, repetível.' },
      { t: 'dose', x: '2) DESLOCAR o K⁺ para dentro da célula: insulina regular 10 U + glicose 25 g EV; β₂-agonista inalatório (salbutamol); bicarbonato de sódio se acidose metabólica.' },
      { t: 'dose', x: '3) REMOVER o K⁺: diurético de alça (se diurese), quelantes intestinais e DIÁLISE na hipercalemia grave/refratária ou DRC dialítica.' },
      { t: 'alerta', x: 'Suspender IECA/BRA, espironolactona e AINE. O cálcio NÃO reduz o potássio — apenas protege o coração enquanto as demais medidas agem.' }
    ]
  },
  {
    id: 'tamponamento', nome: 'Tamponamento cardíaco', area: 'Pericárdio',
    passos: [
      { t: 'passo', x: 'Tríade de Beck (hipotensão, turgência jugular, bulhas abafadas) + pulso paradoxal > 10 mmHg; ecocardiograma com derrame e colapso de câmaras direitas.' },
      { t: 'passo', x: 'Estabilizar: volume EV cauteloso (otimiza o enchimento); evitar ventilação com pressão positiva e vasodilatadores (reduzem a pré-carga e pioram o quadro).' },
      { t: 'dose', x: 'PERICARDIOCENTESE guiada por ecocardiograma, de urgência. Drenagem cirúrgica se etiologia traumática, dissecção ou derrame purulento/loculado.' },
      { t: 'alerta', x: 'É diagnóstico clínico-ecocardiográfico: na instabilidade, não atrasar a drenagem aguardando exames.' }
    ]
  },
  {
    id: 'digital', nome: 'Intoxicação digitálica', area: 'Emergência',
    passos: [
      { t: 'passo', x: 'Náusea/vômito, distúrbios visuais (xantopsia), confusão; arritmias (bradicardia, BAV, TV bidirecional, extrassístoles). Dosar digoxina, K⁺, Mg²⁺ e função renal.' },
      { t: 'dose', x: 'Anticorpo antidigoxina (fragmentos Fab) na intoxicação grave: arritmia ameaçadora, hipercalemia > 5 mEq/L ou instabilidade hemodinâmica.' },
      { t: 'dose', x: 'Bradicardia/BAV → atropina e/ou marcapasso; corrigir hipomagnesemia; arritmias ventriculares → lidocaína ou fenitoína.' },
      { t: 'alerta', x: 'NÃO administrar cálcio EV na hipercalemia por digital (risco de contratura miocárdica — "coração de pedra"). Cardioversão com cautela (pode deflagrar arritmias).' }
    ]
  }
];
