// Temas — fisiopatologia + resumo clínico baseados em fontes confiáveis (Braunwald, Harrison
// e diretrizes ESC/AHA/SBC), com ensaios-chave e links internos.
// Campos: fisio (HTML), resumo (HTML), trials [{n,t}], recs [[termo,rotulo]], scores [ids], guia (termo p/ Diretrizes), pretest (bool).
window.TEMAS = [
  {
    id: 'fa', nome: 'Fibrilação atrial', area: 'Arritmia',
    fisio:
      '<p>Há dois mecanismos centrais: <b>gatilhos</b> (focos de disparo rápido nas veias pulmonares) e um <b>substrato atrial</b> que perpetua a arritmia. O remodelamento elétrico (encurtamento do período refratário) e estrutural (fibrose, dilatação atrial) favorece múltiplos circuitos de reentrada e rotores — "FA gera FA".</p>' +
      '<p>A perda da contração atrial reduz o débito (~15–20%) e a estase no <b>apêndice atrial esquerdo</b> favorece trombo e embolia (AVC cardioembólico). A resposta ventricular rápida e irregular pode causar taquicardiomiopatia.</p>',
    resumo:
      '<p>Manejo pelo esquema <b>AF-CARE</b> (ESC 2024): <b>C</b>omorbidades/fatores de risco, <b>A</b>nticoagulação, <b>R</b>edução de sintomas e <b>E</b>valiação dinâmica.</p>' +
      '<p><b>Anticoagulação</b> se <b>CHA₂DS₂-VA ≥ 2</b> (considerar se = 1), preferindo <b>DOAC</b> (exceto prótese mecânica/estenose mitral reumática moderada-grave). <b>Controle de frequência</b> com betabloqueador ou BCC não-diidropiridínico (evitar na ICFEr), alvo &lt; 110 bpm. <b>Controle de ritmo</b> (antiarrítmico/ablação) em sintomáticos; ablação é 1ª linha em paroxística selecionada e superior a fármaco na ICFEr. Controle de ritmo precoce reduz desfechos (EAST-AFNET 4).</p>',
    trials: [
      { n: 'RE-LY / ROCKET-AF / ARISTOTLE / ENGAGE AF', t: 'DOACs não inferiores/superiores à varfarina, com menos hemorragia intracraniana.' },
      { n: 'EAST-AFNET 4 (2020)', t: 'Controle de ritmo precoce reduz desfechos na FA recente.' },
      { n: 'CASTLE-AF (2018)', t: 'Ablação reduz morte/internação por IC na FA com ICFEr.' }
    ],
    recs: [['anticoagulação fibrilação atrial', 'Anticoagulação na FA'], ['DOAC varfarina', 'DOAC preferível'], ['ablação FA', 'Ablação'], ['controle de frequência FA', 'Controle de FC']],
    scores: ['chadsvasc', 'hasbled'], guia: 'Fibrilação', pretest: false
  },
  {
    id: 'ic', nome: 'Insuficiência cardíaca', area: 'Insuficiência cardíaca',
    fisio:
      '<p>Uma agressão inicial (isquemia, sobrecarga, toxinas) reduz o débito e ativa mecanismos neuro-hormonais compensatórios — <b>sistema renina-angiotensina-aldosterona</b> e <b>simpático</b> — que, cronicamente, tornam-se deletérios: retenção de sódio/água, vasoconstrição, fibrose e <b>remodelamento ventricular</b> (dilatação e hipertrofia).</p>' +
      '<p>Na <b>ICFEr</b> predomina disfunção sistólica; na <b>ICFEp</b>, disfunção diastólica com enchimento prejudicado e pressões de enchimento elevadas, frequentemente ligada a hipertensão, obesidade e envelhecimento. O peptídeo natriurético (BNP) sobe pela distensão miocárdica.</p>',
    resumo:
      '<p>Classificar pela FEVE (ICFEr ≤ 40%, levemente reduzida 41–49%, preservada ≥ 50%). Diagnóstico: clínica + BNP/NT-proBNP + eco.</p>' +
      '<p><b>ICFEr — quatro pilares</b> (reduzem mortalidade, iniciar/titular rápido): ARNI (ou IECA/BRA), betabloqueador, antagonista mineralocorticoide e iSGLT2; diurético para congestão. Considerar CDI (FEVE ≤ 35%) e TRC (BRE, QRS ≥ 150 ms). <b>ICFEp/levemente reduzida:</b> iSGLT2 (I-A, ESC 2023); tratar congestão e comorbidades; ferro EV se ferropenia sintomática.</p>',
    trials: [
      { n: 'PARADIGM-HF (2014)', t: 'Sacubitril/valsartana superior ao enalapril na ICFEr.' },
      { n: 'DAPA-HF / EMPEROR-Reduced', t: 'iSGLT2 reduz morte CV/hospitalização na ICFEr.' },
      { n: 'DELIVER / EMPEROR-Preserved', t: 'iSGLT2 beneficia ICFEp e levemente reduzida.' }
    ],
    recs: [['sacubitril ICFEr', 'ARNI'], ['betabloqueador ICFEr', 'Betabloqueador'], ['iSGLT2 insuficiência', 'iSGLT2'], ['espironolactona', 'MRA'], ['CDI prevenção primária', 'CDI'], ['ressincronização', 'TRC']],
    scores: ['h2fpef', 'hfapeff', 'maggic'], guia: 'Insuficiência', pretest: false
  },
  {
    id: 'sca', nome: 'Síndrome coronariana aguda', area: 'Doença coronariana',
    fisio:
      '<p>O evento desencadeante é, na maioria, a <b>rotura ou erosão de uma placa aterosclerótica</b> vulnerável (capa fina, grande núcleo lipídico, inflamação), expondo material trombogênico e ativando plaquetas e coagulação → <b>trombo coronário</b>.</p>' +
      '<p>Trombo <b>oclusivo</b> com isquemia transmural gera supra de ST (<b>STEMI</b>) e necrose; trombo <b>suboclusivo</b>/embolização distal causa NSTEMI/angina instável. A necrose libera troponina. Sem reperfusão rápida, a área isquêmica evolui para infarto ("tempo é músculo").</p>',
    resumo:
      '<p><b>STEMI:</b> reperfusão imediata — ICP primária ≤ 120 min do diagnóstico, senão fibrinólise e transferência; revascularização completa no multiarterial sem choque. <b>NSTE-ACS:</b> estratégia invasiva conforme risco (imediata se instável; precoce &lt; 24 h se GRACE &gt; 140/troponina dinâmica).</p>' +
      '<p><b>Terapia:</b> AAS + inibidor de P2Y12 (ticagrelor/prasugrel preferíveis) por 12 meses, anticoagulação parenteral, estatina de alta intensidade precoce, betabloqueador e IECA/BRA se disfunção de VE/IC. Não dar O₂ se SatO₂ ≥ 90%.</p>',
    trials: [
      { n: 'ISIS-2 (1988)', t: 'AAS e estreptoquinase reduzem mortalidade no IAM.' },
      { n: 'PLATO (2009)', t: 'Ticagrelor superior ao clopidogrel na SCA.' },
      { n: 'COMPLETE (2019)', t: 'Revascularização completa de rotina reduz MACE no STEMI.' }
    ],
    recs: [['AAS síndrome coronariana', 'AAS'], ['DAPT', 'DAPT'], ['estratégia invasiva NSTEMI', 'Invasiva precoce'], ['revascularização completa STEMI', 'Revasc completa'], ['ICP primária', 'ICP primária']],
    scores: ['heart', 'timi_nstemi', 'timi_stemi', 'grace', 'killip', 'crusade', 'dapt'], guia: 'coronariana aguda', pretest: false
  },
  {
    id: 'scc', nome: 'Doença coronariana crônica (angina estável)', area: 'Doença coronariana',
    fisio:
      '<p>Placas ateroscleróticas estáveis reduzem o lúmen coronário; quando a estenose é significativa (≥ 70%), a <b>reserva de fluxo coronário</b> não atende ao aumento de demanda no esforço → <b>isquemia por desequilíbrio oferta/demanda</b>, manifestada como angina. Também há disfunção <b>microvascular</b> e <b>vasoespasmo</b> (ANOCA/INOCA), que causam isquemia sem obstrução epicárdica.</p>',
    resumo:
      '<p>Estimar a <b>likelihood clínica</b> de DAC (modelo RF-CL, ESC 2024) e testar conforme a probabilidade (angio-TC ou imagem funcional; invasivo se muito alta). <b>Tratamento de base:</b> antiagregante, estatina de alta intensidade, controle de fatores de risco e estilo de vida. <b>Antianginosos</b> de 1ª linha: betabloqueador e/ou BCC; nitrato para alívio. <b>Revascularização</b> (ICP/CRM) para sintomas refratários ou anatomia de alto risco (TCE, triarterial). Em DM com DCV, iSGLT2/GLP-1.</p>',
    trials: [
      { n: 'COURAGE (2007) / ISCHEMIA (2020)', t: 'ICP não reduz morte/IAM vs terapia otimizada na DAC estável; melhora sintomas.' },
      { n: 'ORBITA (2018)', t: 'Benefício antianginoso da ICP é em parte placebo-dependente.' }
    ],
    recs: [['revascularização DAC estável', 'Revascularização'], ['antianginoso angina estável', 'Antianginosos'], ['iSGLT2 GLP-1 diabetes', 'iSGLT2/GLP-1 no DM']],
    scores: ['syntax', 'prevent'], guia: 'crônica', pretest: true
  },
  {
    id: 'dislipidemia', nome: 'Dislipidemia', area: 'Prevenção',
    fisio:
      '<p>As <b>lipoproteínas que contêm apoB</b> (LDL e remanescentes) atravessam o endotélio e ficam <b>retidas</b> na íntima, onde são oxidadas e fagocitadas por macrófagos → <b>células espumosas</b> e estria gordurosa. A inflamação crônica forma a placa de ateroma. O efeito é <b>cumulativo</b> com a exposição ao longo da vida — daí "quanto mais baixo e mais cedo, melhor".</p>',
    resumo:
      '<p>Estratificar o risco para definir a <b>meta de LDL</b> (muito alto risco &lt; 55 mg/dL e ↓ ≥ 50%; SBC &lt; 50). <b>Escalonar:</b> estatina de alta intensidade → ezetimiba → inibidor de PCSK9 se fora da meta. Dosar <b>Lp(a)</b> ao menos uma vez; icosapenta se triglicérides altos e alto risco.</p>',
    trials: [
      { n: 'CTT / 4S', t: 'Estatinas reduzem eventos proporcionalmente à queda do LDL.' },
      { n: 'IMPROVE-IT', t: 'Ezetimiba + estatina reduz eventos.' },
      { n: 'FOURIER / ODYSSEY OUTCOMES', t: 'Inibidores de PCSK9 reduzem eventos.' }
    ],
    recs: [['estatina prevenção secundária', 'Estatina'], ['meta LDL', 'Meta de LDL'], ['ezetimiba', 'Ezetimiba'], ['PCSK9', 'iPCSK9'], ['lipoproteína a', 'Lp(a)']],
    scores: ['score2', 'prevent', 'ckdepi'], guia: 'Dislipidemia', pretest: false
  },
  {
    id: 'has', nome: 'Hipertensão arterial', area: 'Hipertensão',
    fisio:
      '<p>A PA = débito cardíaco × resistência vascular periférica. Na HAS essencial há aumento da <b>resistência periférica</b> por disfunção endotelial, remodelamento arteriolar, ativação do <b>SRAA</b> e do <b>simpático</b> e retenção renal de sódio. Cronicamente leva a <b>lesão de órgão-alvo</b>: hipertrofia de VE, nefroesclerose, retinopatia e aterosclerose acelerada.</p>',
    resumo:
      '<p>Confirmar fora do consultório (MAPA/MRPA). <b>Meta &lt; 130/80 mmHg</b> (ESC 2024 mira PAS 120–129 se tolerado). Estilo de vida sempre + início com <b>combinação dupla</b> (IECA/BRA + BCC/tiazídico) em comprimido único; subir para tripla; <b>resistente</b> → adicionar espironolactona. Rastrear causas secundárias quando indicado.</p>',
    trials: [
      { n: 'SPRINT (2015)', t: 'Alvo intensivo reduz eventos e morte em alto risco selecionado.' },
      { n: 'PATHWAY-2', t: 'Espironolactona é o melhor 4º fármaco na HAS resistente.' }
    ],
    recs: [['meta de pressão', 'Meta de PA'], ['combinação dupla', 'Combinação dupla'], ['espironolactona resistente', 'HAS resistente']],
    scores: ['prevent', 'score2'], guia: 'Hipertensão', pretest: false
  },
  {
    id: 'valvopatia', nome: 'Valvopatias', area: 'Valvopatia',
    fisio:
      '<p>A <b>estenose aórtica</b> (calcífica degenerativa) gera sobrecarga de pressão → hipertrofia concêntrica de VE, disfunção diastólica e, tardiamente, falência sistólica. A <b>insuficiência</b> valvar gera sobrecarga de volume → dilatação excêntrica e, eventualmente, disfunção. A <b>estenose mitral</b> (reumática) eleva a pressão atrial esquerda → congestão pulmonar, hipertensão pulmonar e FA.</p>',
    resumo:
      '<p>Quantificar gravidade por eco e correlacionar com sintomas/função de VE; decisões pelo <b>Heart Team</b>. EAo grave sintomática → TAVI (≥ 75 anos/alto risco) ou cirurgia (&lt; 75 e baixo risco). IM primária grave sintomática → cirurgia (plastia). IM secundária sintomática → TEER selecionado. EM reumática favorável → valvoplastia por balão. Prótese mecânica exige varfarina.</p>',
    trials: [
      { n: 'PARTNER / Evolut Low Risk', t: 'TAVI não inferior/superior à cirurgia, inclusive baixo risco.' },
      { n: 'COAPT (2018)', t: 'TEER reduz internação/morte na IM secundária selecionada.' }
    ],
    recs: [['estenose aórtica', 'EAo grave'], ['TAVI', 'TAVI'], ['insuficiência mitral primária', 'IM primária'], ['TEER mitral', 'TEER'], ['valvoplastia mitral', 'EM reumática']],
    scores: ['euroscore', 'sts'], guia: 'Valvopatia', pretest: false
  },
  {
    id: 'tep', nome: 'Tromboembolismo pulmonar', area: 'Tromboembolismo',
    fisio:
      '<p>Trombos (em geral de TVP de membros inferiores — <b>tríade de Virchow</b>: estase, lesão endotelial, hipercoagulabilidade) embolizam para a circulação pulmonar. A obstrução vascular e a vasoconstrição hipóxica elevam a <b>resistência vascular pulmonar</b> → sobrecarga aguda do <b>ventrículo direito</b>, que pode dilatar e falir (interdependência ventricular, queda do débito do VE e choque). Hipoxemia por desequilíbrio ventilação/perfusão.</p>' +
      '<p>Entender essa cascata explica três condutas que parecem contraintuitivas: <b>volume em excesso piora</b> (distende ainda mais o VD e desloca o septo contra o VE), a <b>noradrenalina é o vasopressor de escolha</b> (sustenta a pressão de perfusão coronariana do VD, que na sobrecarga passa a depender da PAM), e a <b>sedação profunda pode matar</b> — ela abole o tônus simpático que está mantendo esse VD funcionando.</p>',
    resumo:
      '<p><b>Diagnóstico.</b> Probabilidade pré-teste por Wells, Genebra ou YEARS. Baixa ou intermediária (&lt; 50%) → D-dímero com corte ajustado pela idade (idade × 10 µg/L acima de 50 anos); negativo exclui. Alta (&gt; 50%) → angio-TC direto, sem D-dímero. O eco <u>não</u> confirma nem exclui TEP — ele estratifica.</p>' +
      '<p><b>Classificação (AHA/ACC 2026 — mudou tudo).</b> Saíram "maciço", "submaciço" e "baixo risco"; entraram cinco categorias clínicas: <b>A</b> subclínico · <b>B</b> sintomático com gravidade baixa (PESI I–II, sPESI 0, Hestia 0) · <b>C</b> sintomático com gravidade elevada, subdividido por VD e biomarcador (C1 ambos normais, C2 um alterado, C3 os dois) · <b>D</b> falência incipiente (D1 hipotensão transitória, D2 choque normotenso) · <b>E</b> falência estabelecida (E1 choque cardiogênico, E2 refratário/PCR). O modificador <b>R+</b> marca comprometimento respiratório. A categoria segue o achado mais grave e pode mudar ao longo da internação.</p>' +
      '<p><b>Tratamento.</b> HBPM antes de HNF na via parenteral e DOAC antes de varfarina na oral (ambos Classe 1). A e B vão para casa; C1 interna sem terapia avançada; C2–C3 interna, aciona PERT e o benefício de reperfusão é incerto (2b); D1–D2 pode considerar reperfusão (2b); E1 reperfusão é razoável (2a, com trombólise, cateter, trombectomia e cirurgia na mesma classe); E2 trombólise sistêmica + ECMO. Filtro de veia cava só na contraindicação absoluta à anticoagulação.</p>' +
      '<p><b>Depois.</b> Duração de 3–6 meses se fator reversível maior; estendida em dose reduzida (apixabana 2,5 mg 12/12 h ou rivaroxabana 10 mg/dia) se não provocado ou fator persistente. Perguntar sobre dispneia e limitação funcional em toda consulta por 1 ano — rastreio de DTEPC, que complica ~3% dos casos.</p>',
    trials: [
      { n: 'PEITHO (2014)', t: 'Trombólise no risco intermediário-alto: menos colapso, mais sangramento e AVC. Base do "incerto" nas categorias C2–C3.' },
      { n: 'HOME-PE (2021)', t: 'Hestia e sPESI equivalentes para selecionar alta precoce — sustenta a conduta das categorias A e B.' },
      { n: 'PEERLESS (2025)', t: 'Trombólise por cateter vs. trombectomia mecânica: sem diferença em mortalidade ou sangramento em 30 dias.' },
      { n: 'HI-PEITHO (2026)', t: 'Trombólise por cateter no intermediário-alto: composto 4,0% vs. 10,3%.' },
      { n: 'RENOVE / API-CAT', t: 'Dose reduzida na fase estendida: mesma proteção, menos sangramento.' },
      { n: 'EINSTEIN-PE / AMPLIFY', t: 'DOACs eficazes e mais seguros que varfarina no TEV.' },
      { n: 'PREPIC2 (2015)', t: 'Filtro de veia cava sem benefício em quem já está anticoagulado.' }
    ],
    recs: [['anticoagulação TEP', 'Anticoagulação'], ['trombólise TEP', 'Trombólise']],
    scores: ['pe_categoria', 'wells_tep', 'pesi', 'spesi', 'hestia', 'wells_tvp'], guia: 'Tromboembolismo', pretest: false
  },
  {
    id: 'cmh', nome: 'Cardiomiopatia hipertrófica', area: 'Cardiomiopatia',
    fisio:
      '<p>Doença <b>sarcomérica</b> (mutações em genes do sarcômero, herança autossômica dominante) que causa hipertrofia de VE com <b>desarranjo dos miócitos</b> e fibrose. Pode haver <b>obstrução dinâmica da via de saída do VE</b> por movimento sistólico anterior da mitral (SAM), agravada por hipovolemia e vasodilatação. A fibrose e o desarranjo são substrato para arritmias e morte súbita.</p>',
    resumo:
      '<p>Diagnóstico por eco/RM; rastrear familiares. <b>Forma obstrutiva sintomática:</b> betabloqueador ou BCC não-diidropiridínico; refratário → mavacamten (inibidor de miosina), disopiramida ou redução septal (miectomia/ablação alcoólica). Evitar desidratação e vasodilatadores. <b>Morte súbita:</b> estratificar (HCM Risk-SCD/critérios) → CDI; CDI sempre na prevenção secundária.</p>',
    trials: [
      { n: 'EXPLORER-HCM (2020)', t: 'Mavacamten melhora sintomas e reduz a obstrução.' },
      { n: 'VALOR-HCM', t: 'Mavacamten reduz a necessidade de redução septal.' }
    ],
    recs: [['mavacamten', 'Mavacamten'], ['CDI prevenção secundária CMH', 'CDI'], ['miectomia', 'Redução septal']],
    scores: ['qtc'], guia: 'Cardiomiopatia', pretest: false
  },
  {
    id: 'amiloidose', nome: 'Amiloidose cardíaca', area: 'Cardiomiopatia',
    fisio:
      '<p>Deposição extracelular de fibrilas de amiloide no miocárdio, causando <b>cardiomiopatia restritiva</b> e infiltrativa. Os dois tipos principais: <b>ATTR</b> (transtirretina — selvagem, do idoso, ou hereditária) e <b>AL</b> (cadeias leves, discrasia de plasmócitos). O infiltrado enrijece o ventrículo (disfunção diastólica grave), espessa as paredes e infiltra o sistema de condução.</p>',
    resumo:
      '<p>Suspeitar em HVE "inexplicada" com baixa voltagem no ECG, ICFEp, espessamento valvar/septal, síndrome do túnel do carpo. Diagnóstico: cintilografia óssea (PYP/DPD) para ATTR + exclusão de cadeias leves; biópsia se dúvida. <b>ATTR-CM (NYHA I–III):</b> tafamidis (estabilizador) reduz mortalidade/hospitalização. Cuidado com digoxina e BCC (ligam-se ao amiloide).</p>',
    trials: [
      { n: 'ATTR-ACT (2018)', t: 'Tafamidis reduz mortalidade e hospitalização na ATTR-CM.' }
    ],
    recs: [['tafamidis amiloidose', 'Tafamidis']],
    scores: [], guia: 'Cardiomiopatia', pretest: false
  },
  {
    id: 'pericardite', nome: 'Pericardite e tamponamento', area: 'Pericárdio',
    fisio:
      '<p>Inflamação do pericárdio (viral/idiopática na maioria) gera dor, atrito e, às vezes, <b>derrame</b>. O acúmulo de líquido eleva a <b>pressão intrapericárdica</b>; quando supera a pressão de enchimento das câmaras direitas surge <b>tamponamento</b> — restrição diastólica, interdependência ventricular exagerada (pulso paradoxal) e queda do débito. A pericardite crônica pode evoluir para <b>constrição</b>.</p>',
    resumo:
      '<p><b>Pericardite aguda:</b> ≥ 2 de — dor pleurítica que melhora sentado, atrito, supra de ST difuso com infra de PR, derrame. Tratar com <b>AINE/AAS + colchicina</b> (reduz recorrência); corticoide é 2ª linha. <b>Tamponamento:</b> tríade de Beck, pulso paradoxal, turgência jugular → ecocardiograma e <b>pericardiocentese</b>.</p>',
    trials: [
      { n: 'ICAP (2013) / CORP', t: 'Colchicina reduz recorrência e sintomas na pericardite.' }
    ],
    recs: [['colchicina pericardite', 'Colchicina']],
    scores: [], guia: 'Pericardite', pretest: false
  },
  {
    id: 'miocardite', nome: 'Miocardite', area: 'Miocárdio',
    fisio:
      '<p>Inflamação do miocárdio, mais comumente <b>viral</b> (ou pós-viral imunomediada); também por fármacos, toxinas e doenças autoimunes (e miocardite por inibidores de checkpoint). A lesão direta e a resposta imune causam necrose de miócitos e edema, com disfunção contrátil e risco de <b>arritmias</b>. Pode resolver, evoluir para cardiomiopatia dilatada ou, na forma fulminante, choque cardiogênico.</p>',
    resumo:
      '<p>Apresenta-se como dor torácica (mimetizando IAM com coronárias normais), IC aguda ou arritmia, geralmente após quadro viral, com troponina elevada. <b>RM cardíaca</b> (critérios de Lake Louise) é central; biópsia em casos graves/refratários. Tratamento de suporte e da IC/arritmia; suporte circulatório na forma fulminante; imunossupressão em etiologias específicas.</p>',
    trials: [],
    recs: [],
    scores: ['qtc'], guia: 'miocardite', pretest: false
  },
  {
    id: 'endocardite', nome: 'Endocardite infecciosa', area: 'Infecção',
    fisio:
      '<p>Lesão endotelial valvar + <b>bacteremia</b> levam à adesão de microrganismos e formação de <b>vegetações</b> (agregados de plaquetas, fibrina e germes). As vegetações destroem a valva (regurgitação, abscesso), embolizam (AVC, êmbolos sépticos) e mantêm bacteremia. Fatores de risco: próteses valvares, valvopatia, dispositivos, uso de drogas IV.</p>',
    resumo:
      '<p>Diagnóstico pelos <b>critérios de Duke</b> (hemoculturas + eco/eco transesofágico). Tratamento: <b>antibioticoterapia</b> prolongada guiada por cultura. <b>Cirurgia precoce</b> em IC por regurgitação grave, infecção não controlada (abscesso) ou alto risco embólico. <b>Profilaxia antibiótica</b> antes de procedimento dentário invasivo apenas em alto risco (prótese, EI prévia, cardiopatia cianótica).</p>',
    trials: [
      { n: 'POET (2019)', t: 'Antibiótico oral (step-down) não inferior ao IV em EI esquerda estável selecionada.' }
    ],
    recs: [['profilaxia endocardite', 'Profilaxia'], ['cirurgia endocardite', 'Cirurgia precoce']],
    scores: [], guia: '', pretest: false
  },
  {
    id: 'arritmias', nome: 'Arritmias e dispositivos', area: 'Arritmia',
    fisio:
      '<p>As arritmias surgem por <b>distúrbios de automatismo</b> (foco ectópico), <b>atividade deflagrada</b> (pós-despolarizações) ou <b>reentrada</b> (circuito com bloqueio unidirecional e condução lenta — mecanismo da maioria das taqui sustentadas). As bradiarritmias decorrem de falha do nó sinusal ou de bloqueio na condução AV. Canalopatias (QT longo, Brugada) são alterações de canais iônicos com risco de morte súbita.</p>',
    resumo:
      '<p><b>Taqui com instabilidade</b> → cardioversão elétrica sincronizada. <b>TSV</b> estável → manobra vagal/adenosina; recorrente → ablação. <b>TV/FV</b> → ACLS; CDI na prevenção secundária e primária selecionada. <b>Bradiarritmia</b> sintomática (BAV avançado, doença do nó sinusal) → marcapasso. Canalopatias: QT longo → betabloqueador; Brugada com PCR/TV → CDI.</p>',
    trials: [
      { n: 'MADIT-II / SCD-HeFT', t: 'CDI na prevenção primária em ICFEr reduz mortalidade.' },
      { n: 'AVID / CIDS', t: 'CDI superior a antiarrítmico na prevenção secundária.' }
    ],
    recs: [['ablação TSV', 'Ablação TSV'], ['CDI prevenção secundária morte súbita', 'CDI'], ['marcapasso BAV', 'Marcapasso'], ['betabloqueador QT longo', 'QT longo'], ['Brugada', 'Brugada']],
    scores: ['qtc'], guia: 'Arritmias', pretest: false
  },
  {
    id: 'sincope', nome: 'Síncope', area: 'Síncope',
    fisio:
      '<p>Perda transitória de consciência por <b>hipoperfusão cerebral global</b> autolimitada. Mecanismos: <b>reflexa</b> (vasovagal/situacional — hiperatividade vagal com vasodilatação e/ou bradicardia), <b>hipotensão ortostática</b> (falha autonômica/hipovolemia) e <b>cardíaca</b> (arritmia ou obstrução estrutural reduzindo agudamente o débito — a de pior prognóstico).</p>',
    resumo:
      '<p>Avaliação inicial: história/testemunho, exame, <b>ECG</b> e PA ortostática — estratifica o risco. <b>Reflexa:</b> educação, reconhecimento de pródromos, manobras de contrapressão, hidratação/sal. <b>Suspeita cardíaca</b> (cardiopatia, ECG anormal, síncope ao esforço/supino) → investigar (monitorização prolongada, eco, EEF). Bradiarritmia documentada → marcapasso.</p>',
    trials: [],
    recs: [['marcapasso bradiarritmia', 'Marcapasso'], ['síncope reflexa', 'Síncope reflexa']],
    scores: [], guia: 'Arritmias', pretest: false
  },
  {
    id: 'hp', nome: 'Hipertensão pulmonar', area: 'Circulação pulmonar',
    fisio:
      '<p>Definida por <b>pressão média de artéria pulmonar &gt; 20 mmHg</b> ao cateterismo direito. Na <b>HAP (grupo 1)</b> há remodelamento das arteríolas pulmonares (proliferação, vasoconstrição, trombose in situ) elevando a resistência vascular pulmonar. As causas mais comuns globalmente são doença de VE (grupo 2) e doença pulmonar/hipóxia (grupo 3). O resultado final é <b>sobrecarga e falência do ventrículo direito</b>.</p>',
    resumo:
      '<p>Confirmar e classificar por <b>cateterismo cardíaco direito</b> (diferenciar pré de pós-capilar). <b>HAP (grupo 1)</b> de risco baixo/intermediário sem comorbidades: <b>terapia combinada inicial</b> (inibidor de PDE5 + antagonista de endotelina), escalando conforme o risco. Tratar a causa de base nos grupos 2 e 3. Encaminhar a centro especializado.</p>',
    trials: [
      { n: 'AMBITION (2015)', t: 'Combinação inicial ambrisentana + tadalafila superior à monoterapia na HAP.' },
      { n: 'SERAPHIN', t: 'Macitentana reduz morbimortalidade na HAP.' }
    ],
    recs: [['cateterismo direito HP', 'Diagnóstico (CCD)'], ['terapia combinada HAP', 'Terapia combinada']],
    scores: [], guia: '', pretest: false
  },
  {
    id: 'aorta', nome: 'Doença da aorta', area: 'Aorta',
    fisio:
      '<p>O <b>aneurisma</b> resulta de degeneração da média (perda de elastina/colágeno, necrose cística da média — acentuada em Marfan, valva bicúspide), com dilatação progressiva (lei de Laplace: tensão de parede ∝ pressão × raio). A <b>dissecção</b> ocorre quando há rotura da íntima e o sangue disseca a média criando uma falsa luz — emergência com risco de rotura, tamponamento e má-perfusão de ramos.</p>',
    resumo:
      '<p><b>Aneurisma de aorta ascendente:</b> cirurgia ao atingir ≥ 55 mm (limiares menores em Marfan, valva bicúspide ou rápida progressão). <b>Dissecção tipo A</b> → cirurgia de emergência; <b>tipo B</b> não complicada → tratamento clínico (controle rigoroso de PA e FC com betabloqueador), TEVAR se complicada. Controle pressórico e cessação do tabagismo são pilares.</p>',
    trials: [],
    recs: [['aneurisma de aorta ascendente', 'Cirurgia do aneurisma'], ['dissecção de aorta', 'Controle de PA/FC']],
    scores: [], guia: '', pretest: false
  },
  {
    id: 'dap', nome: 'Doença arterial periférica / carótida', area: 'Doença vascular',
    fisio:
      '<p>Aterosclerose sistêmica reduz o fluxo arterial dos membros (e carótidas). Na <b>DAP</b>, a estenose limita o fluxo ao exercício → <b>claudicação intermitente</b>; em casos graves, isquemia crítica (dor de repouso, úlceras). Na <b>doença carotídea</b>, a placa pode embolizar ou ocluir → AVC/AIT. A DAP é marcador de alto risco coronariano.</p>',
    resumo:
      '<p>Diagnóstico da DAP pelo <b>índice tornozelo-braquial</b> + Doppler. Tratamento: <b>estatina + antiagregante</b>, cessação do tabagismo, exercício supervisionado; revascularização na isquemia crítica/limitante. <b>Estenose carotídea sintomática 70–99%</b> → endarterectomia (ou stent). AVC cardioembólico por FA → anticoagulação.</p>',
    trials: [
      { n: 'COMPASS (2017)', t: 'Rivaroxabana baixa dose + AAS reduz eventos na DAC/DAP estável.' }
    ],
    recs: [['doença arterial periférica', 'DAP'], ['endarterectomia estenose carotídea', 'Carótida'], ['AVC cardioembólico', 'AVC por FA']],
    scores: [], guia: 'carótidas', pretest: false
  },
  {
    id: 'chagas', nome: 'Cardiopatia chagásica', area: 'Cardiomiopatia',
    fisio:
      '<p>Infecção crônica pelo <b>Trypanosoma cruzi</b>. Décadas após a fase aguda, mecanismos de <b>inflamação persistente, autoimunidade, lesão microvascular e disautonomia</b> levam a fibrose miocárdica focal (clássico <b>aneurisma apical</b>), distúrbios de condução (bloqueio de ramo direito + hemibloqueio anterior esquerdo), arritmias ventriculares e cardiomiopatia dilatada com IC.</p>',
    resumo:
      '<p>Avaliar com ECG, eco e Holter; estratificar risco de morte súbita (escore de Rassi). <b>Tratamento etiológico</b> (benznidazol) na fase aguda/congênita, reativação e crônica recente. Manejo da IC como na ICFEr; <b>CDI</b> na prevenção secundária (TV sustentada/PCR); anticoagulação se trombo/FA/aneurisma com risco embólico. Marcapasso nos distúrbios de condução.</p>',
    trials: [
      { n: 'BENEFIT (2015)', t: 'Benznidazol na cardiopatia chagásica crônica estabelecida não reduziu desfechos CV.' }
    ],
    recs: [['CDI cardiopatia chagásica', 'CDI'], ['benznidazol', 'Tratamento etiológico']],
    scores: [], guia: 'Chagas', pretest: false
  },
  {
    id: 'congenita', nome: 'Cardiopatia congênita do adulto', area: 'Congênita',
    fisio:
      '<p>Lesões com <b>shunt</b> (CIA, CIV, PCA) desviam sangue esquerda→direita, sobrecarregando as câmaras direitas/circulação pulmonar; se não corrigidas, podem inverter o shunt (<b>síndrome de Eisenmenger</b>). Lesões obstrutivas (coarctação, estenose pulmonar) geram sobrecarga de pressão. Muitos adultos chegam após correção na infância, com sequelas (arritmias, disfunção ventricular, lesões residuais).</p>',
    resumo:
      '<p>Acompanhamento em centro especializado (GUCH/ACHD). <b>CIA</b> com sobrecarga de VD → fechamento (percutâneo se ostium secundum favorável). <b>Coarctação</b> com gradiente significativo/HAS → intervenção. Avaliar hipertensão pulmonar, arritmias e necessidade de profilaxia de endocardite em lesões de alto risco.</p>',
    trials: [],
    recs: [['comunicação interatrial', 'CIA'], ['coarctação de aorta', 'Coarctação']],
    scores: [], guia: '', pretest: false
  },
  {
    id: 'onco', nome: 'Cardio-oncologia', area: 'Cardio-oncologia',
    fisio:
      '<p>Terapias oncológicas lesam o coração por mecanismos distintos: <b>antraciclinas</b> causam dano oxidativo e morte de miócitos (dose-dependente, em parte irreversível); <b>anti-HER2 (trastuzumabe)</b> causa disfunção em geral reversível; <b>inibidores de checkpoint</b> podem causar miocardite imunomediada; inibidores de VEGF causam hipertensão; radioterapia leva a doença coronária/valvar/pericárdica tardia.</p>',
    resumo:
      '<p>Estratificar risco basal e <b>monitorar FEVE e strain</b> (basal e seriado) durante antraciclinas/anti-HER2. Queda significativa da FEVE → iniciar <b>IECA/BRA + betabloqueador</b> (como na ICFEr) e discutir a continuidade do tratamento oncológico com a oncologia. Suspeita de miocardite por checkpoint → suspender e corticoide. Controlar fatores de risco CV.</p>',
    trials: [],
    recs: [['cardiotoxicidade', 'Cardiotoxicidade']],
    scores: [], guia: 'Cardio-oncologia', pretest: false
  },
  {
    id: 'prevencao', nome: 'Prevenção cardiovascular', area: 'Prevenção',
    fisio:
      '<p>A aterosclerose começa cedo e progride silenciosamente por décadas, dirigida por <b>fatores de risco modificáveis</b> (LDL elevado, tabagismo, hipertensão, diabetes, obesidade, sedentarismo) que promovem disfunção endotelial, inflamação e acúmulo de placa. O risco é <b>cumulativo e multiplicativo</b> — controlar vários fatores cedo tem efeito sinérgico.</p>',
    resumo:
      '<p>Estimar o risco global (SCORE2/SCORE2-OP, PREVENT). <b>Estilo de vida</b> é a base: cessação do tabagismo (maior impacto), atividade física ≥ 150 min/semana, dieta e controle de peso. <b>Farmacológico:</b> estatina conforme risco/meta de LDL; controle de PA e diabetes. <b>AAS não</b> de rotina na prevenção primária. Vacina de influenza em DCV; iSGLT2/GLP-1 no DM de alto risco.</p>',
    trials: [
      { n: 'SELECT (2023)', t: 'Semaglutida reduz eventos CV em obesos sem diabetes com DCV.' },
      { n: 'SPRINT / REDUCE-IT', t: 'Controle intensivo de PA e icosapenta reduzem eventos.' }
    ],
    recs: [['estatina prevenção primária', 'Estatina'], ['cessação tabagismo', 'Tabagismo'], ['atividade física', 'Atividade física'], ['AAS prevenção primária', 'AAS (não rotina)'], ['vacinação influenza', 'Vacina influenza']],
    scores: ['score2', 'prevent', 'imc'], guia: 'Dislipidemia', pretest: false
  },
  {
    id: 'dor', nome: 'Dor torácica e diagnósticos diferenciais', area: 'Doença coronariana',
    fisio:
      '<p>A dor torácica é conduzida por aferentes <b>viscerais</b> (coração, aorta, esôfago, pleura) que convergem nos mesmos segmentos medulares dos dermátomos torácicos — por isso a localização é imprecisa e a irradiação ampla (braço, mandíbula, dorso). A isquemia miocárdica gera dor por acúmulo de metabólitos (adenosina) e estiramento.</p>' +
      '<p>Prioridade é excluir as <b>causas fatais</b>: SCA, dissecção de aorta, TEP, pneumotórax hipertensivo e rotura esofágica.</p>',
    resumo:
      '<p><b>Abordagem (Diretriz SBC 2025 — fluxo em 4 passos):</b> ECG em ≤ 10 min → estratificar (troponina hs 0/1–0/3 h + escore) → decidir → observar. O <b>HEART</b> é o escore preferencial na suspeita de SCA (superior a EDACS/ADAPT/TIMI/GRACE na avaliação inicial); alta se HEART < 4 e sem doença coronária prévia. Sinais que <u>reduzem</u> a chance de SCA: dor pleurítica, posicional ou reprodutível à palpação. <b>Dissecção</b>: dor lancinante/migratória, assimetria de pulsos/PA → escores ADD-RS/AORTA + angio-TC. <b>TEP</b>: Wells/Genebra + D-dímero.</p>' +
      '<p><b>Diferenciais:</b> cardíacos (SCA, pericardite, miocardite, dissecção), pulmonares (TEP, pneumotórax, pleurite/pneumonia), gastrointestinais (DRGE, espasmo esofágico, úlcera, pancreatite/colelitíase) e musculoesqueléticos (costocondrite, herpes-zóster).</p>',
    trials: [
      { n: 'HEART Pathway', t: 'Estratificação acelerada permite alta segura do baixo risco.' }
    ],
    recs: [], scores: ['heart', 'timi_nstemi', 'grace'], guia: 'coronariana aguda', pretest: true
  },
  {
    id: 'febrereum', nome: 'Febre reumática e cardiopatia reumática', area: 'Valvopatia',
    fisio:
      '<p>Resposta autoimune por <b>mimetismo molecular</b> após faringite pelo <b>estreptococo β-hemolítico do grupo A</b>: anticorpos e células T contra a proteína M reagem de forma cruzada com antígenos cardíacos (a proteína M lembra a miosina), causando <b>pancardite</b>. A <b>valva mitral</b> é a mais acometida (insuficiência na fase aguda, estenose na crônica), seguida da aórtica.</p>',
    resumo:
      '<p>Diagnóstico pelos <b>critérios de Jones revisados</b> (evidência de infecção estreptocócica recente + 2 critérios maiores, ou 1 maior + 2 menores). <b>Fase aguda:</b> erradicar o estreptococo (penicilina) + anti-inflamatório (AAS/AINE; corticoide se cardite grave). <b>Profilaxia secundária:</b> penicilina benzatina IM a cada 21 dias por anos (duração conforme o acometimento cardíaco). Cardiopatia reumática crônica → manejo valvar (valvoplastia mitral percutânea quando favorável).</p>',
    trials: [],
    recs: [['valvoplastia mitral', 'Valvoplastia mitral'], ['estenose aórtica', 'Valvopatia']],
    scores: [], guia: 'Valvopatia', pretest: false
  },
  {
    id: 'dilatada', nome: 'Cardiomiopatia dilatada e etiologias da IC', area: 'Insuficiência cardíaca',
    fisio:
      '<p>Dilatação e disfunção sistólica do VE (ou biventricular) não explicadas por sobrecarga de pressão/volume ou DAC. Múltiplas agressões convergem para uma via final comum de remodelamento. <b>Causas:</b> <b>genética</b> (30–40%; destacam-se variantes em <b>TTN/titina</b> — a mais comum —, <b>LMNA</b>, MYH7, RBM20, <b>FLNC</b>, DSP, PLN), isquêmica, tóxica (álcool, antraciclinas, cocaína), infecciosa (<b>Chagas</b>, miocardite viral), <b>periparto</b>, taquicardiomiopatia, autoimune, endócrina (tireoide) e nutricional (tiamina).</p>',
    resumo:
      '<p><b>Investigar a etiologia:</b> anamnese (álcool, quimioterapia, gestação), ECG, eco, <b>RM cardíaca</b> (realce tardio = fibrose/prognóstico), sorologia para Chagas, triagem familiar e <b>genética</b> quando indicada. <b>Tratamento</b> da IC conforme a FEVE (quatro pilares na ICFEr). <b>Específicos:</b> abstinência (alcoólica), bromocriptina + anticoagulação (periparto), controle da arritmia (taquicardiomiopatia). <b>CDI</b> conforme FEVE/genótipo — <b>LMNA e FLNC</b> têm limiar mais baixo pelo alto risco arrítmico.</p>',
    trials: [
      { n: 'DANISH (2016)', t: 'CDI na CMD não isquêmica: sem redução de mortalidade total (benefício maior em jovens).' }
    ],
    recs: [['CDI prevenção primária', 'CDI'], ['sacubitril ICFEr', 'GDMT da ICFEr']],
    scores: ['maggic'], guia: 'Insuficiência', pretest: false
  },

  // ===================== MÉTODOS DIAGNÓSTICOS =====================
  {
    id: 'ecg', nome: 'Eletrocardiograma e isquemia', area: 'Métodos diagnósticos',
    fisio: '<p>Registra a despolarização/repolarização do coração. A isquemia altera a repolarização (ST/T); a oclusão transmural eleva o ST na parede afetada, com imagem em espelho (infra) na parede oposta.</p>',
    resumo: '<p>Leitura sistemática: ritmo, FC, eixo, intervalos (PR, QRS, QTc) e morfologia. <b>Localização do IAM:</b> inferior (II, III, aVF — CD/Cx), anterosseptal/anterior (V1–V4 — DA), lateral (V5–V6, DI, aVL — Cx/diagonal), posterior (infra V1–V3 + R alto). <b>Procure equivalentes de oclusão</b> (ver Plantão → OCA): De Winter, Wellens, supra de aVR, T hiperaguda. <b>BRE/BRD novos não são supra</b> — use Sgarbossa modificado.</p>',
    trials: [], recs: [], scores: ['qtc'], guia: '', pretest: false
  },
  {
    id: 'rx', nome: 'Radiografia de tórax', area: 'Métodos diagnósticos',
    fisio: '<p>Avalia a silhueta cardíaca, a circulação pulmonar e o parênquima/pleura por densidades radiográficas.</p>',
    resumo: '<p><b>Índice cardiotorácico &gt; 0,5</b> (PA, em inspiração) = cardiomegalia. <b>Congestão/EAP</b> (sequência): redistribuição vascular para ápices → edema intersticial (linhas B de Kerley) → edema alveolar peri-hilar ("asa de borboleta") → derrame pleural. Alargamento do mediastino pode sugerir dissecção de aorta.</p>',
    trials: [], recs: [], scores: [], guia: '', pretest: false
  },
  {
    id: 'ergometria', nome: 'Teste ergométrico', area: 'Métodos diagnósticos',
    fisio: '<p>O esforço aumenta a demanda miocárdica; em estenose coronária significativa surge isquemia (infra de ST) e/ou angina, e avalia-se a resposta funcional.</p>',
    resumo: '<p>Útil na avaliação de DAC de probabilidade intermediária (ECG basal interpretável, paciente capaz de se exercitar) e na estratificação funcional. <b>Positivo:</b> infra de ST horizontal/descendente ≥ 1 mm. Avaliar capacidade funcional (METs), resposta cronotrópica/pressórica e o <b>escore de Duke</b>. Sensibilidade ~68%, especificidade ~77% (menor em mulheres). Contraindicado em SCA instável, EAo grave sintomática, arritmia não controlada.</p>',
    trials: [], recs: [], scores: ['duke'], guia: 'crônica', pretest: true
  },
  {
    id: 'eco', nome: 'Ecocardiograma', area: 'Métodos diagnósticos',
    fisio: '<p>Ultrassonografia em tempo real do coração: anatomia, função sistólica/diastólica e hemodinâmica (Doppler).</p>',
    resumo: '<p>Avalia FEVE, contratilidade segmentar, dimensões de câmaras, valvas, pericárdio e pressões de enchimento. <b>Transesofágico (ETE):</b> trombo de apêndice atrial, endocardite, prótese, fonte embólica. <b>Eco de estresse</b> (esforço/dobutamina): isquemia e viabilidade. <b>Strain (GLS):</b> disfunção subclínica (cardio-oncologia, infiltrativas).</p>',
    trials: [], recs: [], scores: [], guia: '', pretest: false
  },
  {
    id: 'nuclear', nome: 'Cardiologia nuclear (SPECT/PET)', area: 'Métodos diagnósticos',
    fisio: '<p>Radiotraçadores de perfusão (SPECT com ⁹⁹ᵐTc-sestamibi; PET com ¹³N-amônia/rubídio) são captados proporcionalmente ao fluxo coronário; a comparação estresse × repouso identifica isquemia e fibrose.</p>',
    resumo: '<p><b>Cintilografia de perfusão</b> para diagnóstico/estratificação de DAC e viabilidade: defeito <b>reversível</b> (presente no estresse, ausente no repouso) = isquemia; defeito <b>fixo</b> = infarto/fibrose. <b>PET</b> quantifica fluxo absoluto e reserva (microvascular, multiarterial). <b>Cintilografia óssea (PYP/DPD)</b> diagnostica amiloidose ATTR.</p>',
    trials: [], recs: [], scores: [], guia: '', pretest: false
  },
  {
    id: 'rmc', nome: 'Ressonância magnética cardíaca', area: 'Métodos diagnósticos',
    fisio: '<p>Padrão-ouro para volumes/FEVE e para <b>caracterização tecidual</b>: edema (T2), fibrose/infiltração (realce tardio de gadolínio) e mapas paramétricos (T1/T2/ECV).</p>',
    resumo: '<p><b>Indicações:</b> miocardiopatias, miocardite (critérios de Lake Louise), viabilidade (realce transmural &gt; 50% = baixa recuperação), infiltrativas (amiloidose: realce subendocárdico difuso + T1 alto/ECV alto; Fabry: T1 baixo; sarcoidose: realce focal mesoepicárdico), CMH e cardiomiopatia arritmogênica. Realce mesocárdico na CMD = marcador de risco arrítmico.</p>',
    trials: [{ n: 'CE-MARC', t: 'RMC com boa acurácia para DAC, superior ao SPECT em sensibilidade.' }],
    recs: [], scores: [], guia: '', pretest: false
  },
  {
    id: 'tc', nome: 'TC e angio-TC de coronárias', area: 'Métodos diagnósticos',
    fisio: '<p>A TC com contraste reconstrói a luz coronária; o escore de cálcio (sem contraste) quantifica a carga de placa calcificada (Agatston).</p>',
    resumo: '<p><b>Angio-TC de coronárias:</b> alto valor preditivo NEGATIVO — ideal para EXCLUIR DAC obstrutiva na probabilidade baixa/intermediária (1ª linha na SCC, ESC 2024). <b>Escore de cálcio (Agatston):</b> 0 = muito baixo risco; 1–99 leve; 100–399 moderado; ≥ 400 alto. A TC também avalia aorta (dissecção/aneurisma) e artérias pulmonares (TEP).</p>',
    trials: [{ n: 'SCOT-HEART / PROMISE', t: 'Angio-TC melhora o diagnóstico e reduz IAM no manejo da dor torácica estável.' }],
    recs: [['revascularização DAC estável', 'DAC estável']], scores: ['prevent'], guia: 'crônica', pretest: true
  },
  {
    id: 'cate', nome: 'Cateterismo e angiografia coronária', area: 'Métodos diagnósticos',
    fisio: '<p>Injeção de contraste nas coronárias sob fluoroscopia define a anatomia; medidas fisiológicas (FFR/iFR) avaliam a significância funcional das estenoses.</p>',
    resumo: '<p>Padrão-ouro anatômico, com possibilidade de <b>intervenção (ICP)</b> no mesmo tempo. Indicado na alta probabilidade/SCA e em sintomas refratários. <b>Estenose ≥ 70%</b> (≥ 50% no TCE) é significativa; intermediárias (40–70%) → avaliar <b>FFR ≤ 0,80 / iFR ≤ 0,89</b>. Acesso radial preferido (menos sangramento). O escore SYNTAX orienta ICP × cirurgia.</p>',
    trials: [{ n: 'FAME / FAME 2', t: 'Revascularização guiada por FFR melhora desfechos vs angiografia isolada.' }],
    recs: [], scores: ['syntax'], guia: 'crônica', pretest: false
  },

  // ===================== INFILTRATIVAS E SISTÊMICAS =====================
  {
    id: 'sarcoidose', nome: 'Sarcoidose cardíaca', area: 'Cardiomiopatia',
    fisio: '<p>Doença granulomatosa sistêmica (granulomas não caseosos) que infiltra o miocárdio, com predileção pelo <b>septo basal</b> e pelo sistema de condução → BAV, taquicardia ventricular e disfunção/IC. Pode ser isolada ou parte de sarcoidose sistêmica.</p>',
    resumo: '<p>Suspeite em adulto jovem/meia-idade com <b>BAV inexplicado</b> ou <b>TV</b>. Diagnóstico: RMC (realce tardio focal) e/ou <b>PET-FDG</b> (inflamação ativa); biópsia endomiocárdica tem baixo rendimento. Tratamento: <b>imunossupressão</b> (corticoide) na atividade inflamatória + manejo de IC/arritmia; <b>CDI</b> pelo alto risco arrítmico; marcapasso no BAV.</p>',
    trials: [], recs: [['CDI prevenção secundária morte súbita', 'CDI'], ['marcapasso BAV', 'Marcapasso']], scores: [], guia: 'Cardiomiopatia', pretest: false
  },
  {
    id: 'fabry', nome: 'Doença de Fabry', area: 'Cardiomiopatia',
    fisio: '<p>Doença de depósito lisossômico ligada ao X (deficiência de <b>α-galactosidase A</b>) → acúmulo de globotriaosilceramida em múltiplos órgãos, incluindo o coração → <b>hipertrofia concêntrica de VE</b>, fibrose e arritmias.</p>',
    resumo: '<p>Suspeite em <b>HVE "inexplicada"</b>, sobretudo com manifestações extracardíacas: acroparestesias, angioqueratomas, córnea verticilata, proteinúria/DRC, hipoidrose. <b>Pista na RMC: T1 nativo BAIXO.</b> Diagnóstico: dosagem enzimática (homens) e teste genético (mulheres). Tratamento: <b>terapia de reposição enzimática</b> ou chaperona (migalastate) + manejo cardíaco.</p>',
    trials: [], recs: [], scores: [], guia: 'Cardiomiopatia', pretest: false
  },
  {
    id: 'sistemicas', nome: 'Doenças sistêmicas com acometimento cardíaco', area: 'Situações especiais',
    fisio: '<p>Doenças sistêmicas afetam o coração por inflamação, infiltração, sobrecarga metabólica ou toxicidade direta.</p>',
    resumo: '<p><b>Tireoide:</b> hipertireoidismo (FA, IC de alto débito), hipotireoidismo (derrame pericárdico, bradicardia). <b>Hemocromatose:</b> miocardiopatia restritiva/dilatada por ferro (quelação/flebotomia). <b>Lúpus:</b> pericardite, endocardite de Libman-Sacks, miocardite. <b>Artrite reumatoide/inflamatórias:</b> aterosclerose acelerada, pericardite. <b>Esclerodermia:</b> fibrose miocárdica e hipertensão pulmonar. <b>HIV:</b> miocardiopatia e aterosclerose precoce. <b>Acromegalia, feocromocitoma, Cushing</b> também afetam o coração. Tratar a doença de base + manejo cardíaco.</p>',
    trials: [], recs: [], scores: [], guia: '', pretest: false
  },
  {
    id: 'noca', nome: 'Angina/isquemia sem obstrução (ANOCA/INOCA)', area: 'Doença coronariana',
    fisio: '<p>Isquemia/angina sem estenose epicárdica obstrutiva, por <b>disfunção microvascular</b> (reserva de fluxo reduzida) e/ou <b>vasoespasmo</b> coronário (angina de Prinzmetal). Predomina em mulheres.</p>',
    resumo: '<p>Considere quando há angina/isquemia com coronárias "limpas" ou lesões não obstrutivas. Diagnóstico: <b>teste funcional invasivo</b> — reserva de fluxo coronário (CFR), índice de resistência microvascular (IMR) e <b>provocação com acetilcolina</b> (espasmo). Tratamento por endótipo: <b>microvascular</b> → betabloqueador/BCC, IECA, estatina; <b>vasoespástico</b> → BCC + nitrato, cessar tabagismo, evitar betabloqueador não seletivo.</p>',
    trials: [{ n: 'CorMicA (2018)', t: 'Estratégia guiada pelo endótipo (teste funcional) melhora angina e qualidade de vida.' }],
    recs: [['antianginoso angina estável', 'Antianginosos']], scores: [], guia: 'crônica', pretest: false
  }
];

// Critérios diagnósticos e cortes numéricos por tema (alto rendimento para prova e prática)
window.TEMAS_CRIT = {
  fa: '<ul><li><b>CHA₂DS₂-VA:</b> IC/disfunção VE 1 · HTA 1 · idade ≥75 <b>2</b> · DM 1 · AVC/AIT/tromboembolismo <b>2</b> · doença vascular 1 · idade 65–74 1. ACO se ≥2.</li><li><b>HAS-BLED ≥3:</b> alto risco de sangramento (corrigir fatores, não contraindica).</li><li><b>Controle de FC:</b> alvo inicial &lt; 110 bpm.</li><li><b>FA "valvar"</b> (DOAC contraindicado): prótese mecânica ou estenose mitral reumática moderada/grave.</li></ul>',
  ic: '<ul><li><b>FEVE:</b> ICFEr ≤ 40% · levemente reduzida 41–49% · preservada ≥ 50%.</li><li><b>Natriuréticos (afastam IC):</b> ambulatorial NT-proBNP &lt; 125 / BNP &lt; 35; agudo NT-proBNP &lt; 300 / BNP &lt; 100 pg/mL.</li><li><b>CDI:</b> FEVE ≤ 35%, NYHA II–III, terapia otimizada. <b>TRC:</b> BRE, QRS ≥ 150 ms.</li><li><b>HFA-PEFF/H₂FPEF</b> para ICFEp.</li></ul>',
  sca: '<ul><li><b>IAM com supra/oclusão (OCA):</b> supra de ST ≥ 1 mm em 2 derivações contíguas; V2–V3 ≥ 2 mm (♂ ≥ 40 a) / ≥ 2,5 (♂ &lt; 40) / ≥ 1,5 (♀). <b>BRE ou BRD novo NÃO é supra</b> por si só — aplicar Sgarbossa modificado e reconhecer equivalentes (De Winter, Wellens, aVR + infra difuso, IAM posterior).</li><li><b>Tempos:</b> ICP primária ≤ 120 min do diagnóstico; se indisponível, fibrinólise ≤ 10 min.</li><li><b>GRACE &gt; 140</b> → invasiva &lt; 24 h. Troponina hs com algoritmo 0/1 h.</li></ul>',
  scc: '<ul><li><b>Likelihood (RF-CL):</b> ≤5% muito baixa · 5–15 baixa · 15–50 moderada · 50–85 alta · &gt;85 muito alta.</li><li><b>Significância funcional:</b> FFR ≤ 0,80 · iFR ≤ 0,89 · QFR ≤ 0,80.</li><li><b>SYNTAX:</b> ≤ 22 favorece ICP · ≥ 33 favorece CRM.</li></ul>',
  dislipidemia: '<ul><li><b>Metas de LDL (ESC):</b> muito alto &lt; 55 (e ↓ ≥ 50%) · alto &lt; 70 · moderado &lt; 100 · baixo &lt; 116 mg/dL. SBC muito alto &lt; 50.</li><li><b>Não-HDL</b> = colesterol total − HDL (meta = LDL + 30).</li><li><b>Lp(a):</b> risco a partir de ~50 mg/dL (≈ 125 nmol/L).</li></ul>',
  has: '<ul><li><b>ESC 2024:</b> não-elevada &lt; 120/70 · <b>PA elevada</b> 120–139/70–89 · <b>hipertensão</b> ≥ 140/90 mmHg (consultório).</li><li><b>AHA/ACC 2025:</b> elevada 120–129/&lt;80 · estágio 1 130–139/80–89 · estágio 2 ≥ 140/90.</li><li><b>MAPA:</b> 24 h ≥ 130/80 · vigília ≥ 135/85 · sono ≥ 120/70. <b>Meta &lt; 130/80</b> (ESC mira PAS 120–129 se tolerada).</li></ul>',
  valvopatia: '<ul><li><b>EAo grave:</b> Vmáx ≥ 4 m/s · gradiente médio ≥ 40 mmHg · AVA &lt; 1,0 cm² (&lt; 0,6 cm²/m²).</li><li><b>IM primária grave:</b> ERO ≥ 0,40 cm² · volume regurgitante ≥ 60 mL.</li><li><b>EM grave:</b> AVM ≤ 1,5 cm² (muito grave ≤ 1,0).</li></ul>',
  tep: '<ul><li><b>Wells &gt; 4</b> → TEP provável: angio-TC direto. Wells ≤ 4 → D-dímero com corte ajustado pela idade (idade × 10 µg/L acima de 50 anos).</li><li><b>Categorias AHA/ACC 2026:</b> A subclínico · B sintomático com PESI I–II / sPESI 0 / Hestia 0 · C sintomático com escore elevado (C1 VD e biomarcador normais, C2 um alterado, C3 os dois) · D falência incipiente (D1 hipotensão transitória, D2 choque normotenso) · E falência estabelecida (E1 choque cardiogênico, E2 refratário/PCR).</li><li><b>Modificador R+:</b> C = SpO₂ &lt; 90%, FR ≥ 30 ou O₂ suplementar · D = &gt; 6 L/min ou máscara não reinalante · E = insuficiência respiratória.</li><li><b>Reperfusão:</b> danosa em A–C1 · incerta em C2–C3 (2b) · pode considerar em D1–D2 (2b) · razoável em E1–E2 (2a).</li><li><b>HBPM &gt; HNF</b> e <b>DOAC &gt; varfarina</b>, ambos Classe 1. Não sedar nem intubar sem necessidade absoluta em C–E (Classe 3: Dano).</li></ul>',
  cmh: '<ul><li><b>Hipertrofia:</b> parede ≥ 15 mm (ou ≥ 13 mm com história familiar).</li><li><b>Obstrução de VSVE:</b> gradiente ≥ 30 mmHg (≥ 50 mmHg = alvo terapêutico), em repouso ou provocado.</li><li><b>Risco de MS:</b> HCM Risk-SCD ≥ 6% em 5 anos → considerar CDI; parede ≥ 30 mm é critério maior.</li></ul>',
  amiloidose: '<ul><li><b>Cintilografia óssea (PYP/DPD/HMDP):</b> captação Perugini grau 2–3 + ausência de componente monoclonal = ATTR sem biópsia.</li><li><b>Pistas:</b> baixa voltagem no ECG com HVE ao eco, "apical sparing" no strain, túnel do carpo bilateral.</li><li>Sempre excluir <b>AL</b>: eletroforese + imunofixação sérica/urinária + cadeias leves livres.</li></ul>',
  pericardite: '<ul><li><b>Diagnóstico (≥ 2):</b> dor pleurítica típica · atrito · supra de ST difuso com infra de PR · derrame novo/piora.</li><li>PCR/VHS elevadas apoiam; RM com realce pericárdico.</li><li><b>Tamponamento:</b> pulso paradoxal &gt; 10 mmHg, colapso de câmaras direitas ao eco.</li></ul>',
  miocardite: '<ul><li><b>RM — critérios de Lake Louise (2018):</b> 1 critério T2 (edema) + 1 critério T1 (realce tardio/T1 mapping) = alta probabilidade.</li><li>Troponina elevada, coronárias normais; biópsia endomiocárdica nos casos graves/refratários.</li></ul>',
  endocardite: '<ul><li><b>Critérios de Duke modificados/2023:</b> 2 maiores · ou 1 maior + 3 menores · ou 5 menores.</li><li><b>Maiores:</b> hemoculturas típicas persistentes + evidência de envolvimento endocárdico (eco/PET/TC).</li><li>Vegetação &gt; 10 mm → maior risco embólico.</li></ul>',
  arritmias: '<ul><li><b>QTc prolongado:</b> &gt; 450 ms (♂) / &gt; 460 ms (♀); &gt; 500 ms = risco de Torsades.</li><li><b>TV:</b> ≥ 3 batimentos, ≥ 100 bpm (sustentada &gt; 30 s ou com instabilidade).</li><li><b>Bradi/bloqueio:</b> BAV 2º grau Mobitz II, BAV avançado/total ou pausas sintomáticas → marcapasso.</li></ul>',
  sincope: '<ul><li><b>Sinais de alarme:</b> síncope ao esforço ou supino, palpitação prévia, cardiopatia estrutural, ECG anormal, história familiar de morte súbita.</li><li><b>Hipotensão ortostática:</b> queda ≥ 20 mmHg sistólica ou ≥ 10 diastólica em 3 min de ortostase.</li></ul>',
  hp: '<ul><li><b>Diagnóstico (cateterismo direito):</b> PAP média &gt; 20 mmHg.</li><li><b>Pré-capilar:</b> PAOP ≤ 15 mmHg + RVP &gt; 2 unidades Wood.</li><li>Estratificação de risco da HAP em estratos (NYHA, TC6min, BNP/NT-proBNP, hemodinâmica).</li></ul>',
  aorta: '<ul><li><b>Cirurgia (aorta ascendente):</b> ≥ 55 mm; ≥ 50 mm em Marfan/valva bicúspide com fatores de risco; ≥ 45 mm em Marfan de muito alto risco.</li><li><b>Dissecção tipo A</b> (ascendente) → cirurgia de emergência; <b>tipo B</b> não complicada → clínico.</li></ul>',
  dap: '<ul><li><b>ITB:</b> &lt; 0,90 = DAP · ≤ 0,40 = isquemia crítica · &gt; 1,40 = incompressível (calcificação).</li><li><b>Carótida:</b> estenose 70–99% sintomática → revascularizar; assintomática individualizar.</li></ul>',
  chagas: '<ul><li><b>Escore de Rassi</b> (mortalidade): NYHA III/IV, cardiomegalia ao RX, alteração segmentar/global ao eco, TVNS no Holter, baixa voltagem no ECG, sexo masculino.</li><li><b>ECG típico:</b> BRD + hemibloqueio anterior esquerdo; <b>aneurisma apical</b> ao eco.</li></ul>',
  congenita: '<ul><li><b>CIA com repercussão:</b> Qp/Qs &gt; 1,5 ou sobrecarga de VD.</li><li><b>Coarctação:</b> gradiente ≥ 20 mmHg (ou HAS/colaterais) → intervir.</li><li><b>Eisenmenger:</b> RVP elevada com inversão do shunt — contraindica fechamento.</li></ul>',
  onco: '<ul><li><b>Disfunção cardíaca relacionada ao câncer (CTRCD):</b> queda da FEVE ≥ 10 pontos para &lt; 50%.</li><li><b>Strain (GLS):</b> queda relativa &gt; 15% sugere toxicidade subclínica.</li><li>Troponina/natriuréticos seriados apoiam a detecção precoce.</li></ul>',
  prevencao: '<ul><li><b>SCORE2 (&lt; 50 anos):</b> baixo-moderado &lt; 2,5% · alto 2,5–7,5% · muito alto ≥ 7,5% (10 anos).</li><li><b>50–69 anos:</b> &lt; 5 · 5–10 · ≥ 10%. <b>≥ 70 (SCORE2-OP):</b> &lt; 7,5 · 7,5–15 · ≥ 15%.</li><li>Meta de PA &lt; 130/80; metas de LDL conforme o risco.</li></ul>',
  dor: '<ul><li><b>HEART score</b> (História, ECG, Idade, fatores de Risco, Troponina): 0–3 baixo risco (MACE ~1–2%) · 4–6 moderado · 7–10 alto.</li><li><b>Troponina hs 0/1 h:</b> descarta ou confirma rapidamente; valores muito baixos na admissão + ausência de dor recente afastam.</li><li><b>Reduzem SCA:</b> dor pleurítica, posicional, reprodutível à palpação.</li></ul>',
  febrereum: '<ul><li><b>Critérios de Jones (maiores):</b> cardite, artrite (migratória de grandes articulações), coreia de Sydenham, eritema marginado, nódulos subcutâneos.</li><li><b>Menores:</b> febre, artralgia, VHS/PCR elevadas, intervalo PR prolongado.</li><li>Exigir <b>evidência de infecção estreptocócica</b> (ASLO, cultura/teste rápido). Diagnóstico: 2 maiores OU 1 maior + 2 menores.</li></ul>',
  dilatada: '<ul><li><b>Genes de alto risco arrítmico:</b> LMNA, FLNC, DSP, PLN, RBM20 → considerar CDI com FEVE menos reduzida (≤ 45%) e/ou outros marcadores. TTN é o gene mais comum.</li><li><b>RM cardíaca:</b> realce tardio mesocárdico = fibrose, marcador de arritmia/prognóstico.</li><li>Investigar reversíveis: álcool, taquicardiomiopatia, tireoide, periparto, Chagas.</li></ul>',
  ecg: '<ul><li><b>Intervalos:</b> PR 120–200 ms · QRS &lt; 120 ms · QTc &gt; 450 (♂)/&gt; 460 (♀) ms, &gt; 500 = risco de Torsades.</li><li><b>Sgarbossa modificado (BRE/MP):</b> supra concordante ≥ 1 mm · infra concordante ≥ 1 mm V1–V3 · supra discordante com ST/S ≤ −0,25.</li><li><b>Equivalentes de OCA:</b> De Winter, Wellens, supra de aVR + infra difuso, IAM posterior (V7–V9).</li></ul>',
  ergometria: '<ul><li><b>Positivo:</b> infra de ST horizontal ou descendente ≥ 1 mm a 80 ms do ponto J.</li><li><b>Escore de Duke</b> = tempo (min) − 5 × ΔST (mm) − 4 × angina (0/1/2): ≥ +5 baixo risco · −10 a +4 intermediário · &lt; −10 alto risco.</li><li>Avaliar METs e resposta cronotrópica/pressórica.</li></ul>',
  nuclear: '<ul><li><b>Defeito reversível</b> (estresse, normaliza no repouso) = isquemia. <b>Defeito fixo</b> = infarto/fibrose.</li><li>Isquemia extensa (&gt; 10% do miocárdio) → maior risco.</li><li><b>PYP/DPD (Perugini 2–3)</b> + sem componente monoclonal = amiloidose ATTR.</li></ul>',
  rmc: '<ul><li><b>Miocardite (Lake Louise 2018):</b> 1 critério T2 (edema) + 1 critério T1 (realce/ T1 mapping).</li><li><b>Viabilidade:</b> realce tardio transmural &gt; 50% = baixa chance de recuperação funcional.</li><li><b>Padrões:</b> amiloide (subendocárdico difuso, T1/ECV altos) · Fabry (T1 baixo) · sarcoidose (focal mesoepicárdico) · CMD (mesocárdico).</li></ul>',
  tc: '<ul><li><b>Escore de cálcio (Agatston):</b> 0 muito baixo · 1–99 leve · 100–399 moderado · ≥ 400 alto risco.</li><li><b>Angio-TC:</b> alto valor preditivo negativo — ideal para excluir DAC obstrutiva.</li></ul>',
  cate: '<ul><li><b>Estenose significativa:</b> ≥ 70% (≥ 50% no tronco da coronária esquerda).</li><li><b>Fisiologia (intermediárias):</b> FFR ≤ 0,80 · iFR ≤ 0,89 · QFR ≤ 0,80.</li><li><b>SYNTAX:</b> ≤ 22 favorece ICP · ≥ 33 favorece cirurgia.</li></ul>',
  sarcoidose: '<ul><li>Predileção pelo <b>septo basal</b> e sistema de condução (BAV, TV).</li><li><b>PET-FDG</b> positivo = inflamação ativa (alvo de imunossupressão); RMC com realce focal.</li><li>BAV inexplicado em &lt; 60 anos → investigar sarcoidose/doença infiltrativa.</li></ul>',
  fabry: '<ul><li><b>RMC: T1 nativo BAIXO</b> (diferencia de outras causas de HVE, que têm T1 alto).</li><li>Diagnóstico: <b>α-galactosidase A</b> reduzida (♂) · teste genético (♀).</li><li>HVE + acroparestesias/angioqueratomas/proteinúria → suspeitar.</li></ul>',
  noca: '<ul><li><b>Disfunção microvascular:</b> reserva de fluxo coronário (CFR) &lt; 2,0 e/ou índice de resistência microvascular (IMR) ≥ 25.</li><li><b>Vasoespasmo:</b> espasmo reprodutível ao teste com acetilcolina.</li></ul>'
};
