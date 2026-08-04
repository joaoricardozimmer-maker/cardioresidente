// Modelos de evolução e receitas editáveis. Use [colchetes] ou ___ para campos a preencher.
// Atualizado em 04/08/2026 — modelos por setor, banco de exame físico alterado,
// pacotes de conduta e receitas prontas por ambulatório.
// Backup da versão original: assets/js/data-evolucoes.ORIGINAL-2026-08-03.js.bak
window.EVOLUCOES = [
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Evolução diária — paciente em VM/TQT + DVA + sedação",
    texto: `EVOLUÇÃO — ROP CRÔNICOS — D__ de internação / __º DPO de ____________

# IDENTIFICAÇÃO E SÍNTESE
Paciente ___ anos, sexo ___, internado em __/__/____ por ____________.
Antecedentes: HAS / DM2 / DAC / DRC / TBG / ____________.
Cirurgia: ____________ em __/__/____ (CEC ___ min, pinçamento ___ min).
Intercorrência que motivou permanência: ____________.

# SUBJETIVO / INTERCORRÊNCIAS DAS ÚLTIMAS 24 H
Sem intercorrências no plantão. Sem febre, sem sangramento, sem arritmia sustentada.
Diurese mantida. Dieta enteral em curso sem resíduo aumentado.
Comunicação com a família realizada em __/__/____ .

# EXAME FÍSICO
GERAL: REG, corado, hidratado, anictérico, acianótico, afebril. Perfusão periférica <3 s.
NEURO: Sedado, RASS ___ (alvo ___), com fentanil + midazolam em BIC. Pupilas isocóricas fotorreagentes.
  [ou] Desperto, contactuante, orientado, sem déficit focal, CAM-ICU negativo.
RESP: Em VM por TOT/TQT, modo PCV/VCV, FiO2 ___%, PEEP ___, Vc ___ mL (___ mL/kg PI), FR ___, P plateau ___, driving pressure ___, complacência ___.
  MV presente bilateralmente, sem RA. Secreção traqueal em pequena quantidade, aspecto claro.
  SpO2 ___% . Gasometria (___h): pH ___ / pCO2 ___ / pO2 ___ / HCO3 ___ / BE ___ / Lac ___ / P/F ___.
CV: RCR 2T, BNF, sem sopros. PA ___/___ (PAM ___), FC ___ bpm. Ritmo em RS ao monitor.
  Sem turgência jugular a 45°. Extremidades quentes e bem perfundidas.
  Noradrenalina ___ mcg/kg/min (↓/↑/estável em relação a ontem). PVC ___ mmHg.
ABD: Plano, flácido, RHA+, indolor, sem visceromegalias. SNE/SNG em posição, resíduo ___ mL.
FERIDA OPERATÓRIA: Esternotomia com bordas coaptadas, seca, sem sinais flogísticos, sem instabilidade esternal.
  Safenectomia em MID/MIE limpa. Drenos: ____________ com débito ___ mL/24 h, aspecto ___.
EXTREMIDADES: Sem edema. Panturrilhas livres. Pulsos periféricos presentes e simétricos.
DISPOSITIVOS: AVC em ____________ (D__), PAI em ____________ (D__), SVD (D__), TQT (D__), dreno ____________ (D__).
  Pele íntegra; sem LPP. Escala de Braden ___.

# BALANÇO E DÉBITOS (24 h)
BH: ___ mL (acumulado ___ mL). Diurese ___ mL (___ mL/kg/h). Débito de dreno ___ mL.

# EXAMES (__/__/____)
Hb ___ / Ht ___ / Leuco ___ (bast ___ ) / Plaq ___
Ur ___ / Cr ___ (basal ___) / Na ___ / K ___ / Mg ___ / Ca iônico ___ / P ___
PCR ___ / Lactato ___ / Procalcitonina ___
TGO ___ / TGP ___ / BT ___ / Alb ___ / INR ___ / TTPa ___
Glicemias: ___ – ___ – ___ – ___
Culturas: ____________

# AVALIAÇÃO / PROBLEMAS ATIVOS
1. ____________ — [estável / em melhora / em piora]
2. ____________
3. ____________

[Se disfunção ventricular ou dependência de inotrópico — preencher:]
  Stevenson ____ | SCAI ____ | INTERMACS ____ (ontem ____ ) + modificador [A arritmia / TCS / FF]
  Dias em inotrópico: ___ | Tentativas de desmame: ___ | Motivo da falha: ____________
  → Trajetória: [melhorando / estável / deteriorando] → ver item 9 da conduta.

# CONDUTA
1. Mantenho suporte ventilatório atual; teste de respiração espontânea se ____________.
2. Desmame de noradrenalina conforme PAM >65 mmHg.
3. Ajuste de sedação para RASS alvo ___; despertar diário programado.
4. Mantenho antibioticoterapia — ____________ D__/__.
5. Reposição eletrolítica conforme resultados.
6. Profilaxia de TEV: ____________ . Profilaxia de LAMG: ____________ .
7. Mantenho nutrição enteral ___ mL/h (meta ___ kcal/dia, ___ g/kg/dia de proteína).
8. Mobilização precoce / fisioterapia motora e respiratória.
9. Solicitado: ____________ .
10. Discussão com equipe cirúrgica / família: ____________ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Pós-operatório imediato de cirurgia cardíaca (POI–PO2)",
    texto: `EVOLUÇÃO — ROP — POI de ____________ (CEC ___ min / pinçamento ___ min)

# SÍNTESE
Paciente ___ anos, submetido a ____________ em __/__/____ .
Achado intraoperatório: ____________ . Intercorrência intraoperatória: nenhuma / ____________ .
Recebeu ___ CH, ___ PFC, ___ plaquetas, ___ crio no intraoperatório.
Chegou à unidade às ___h, sob VM, em uso de ____________ .

# EXAME FÍSICO
GERAL: BEG/REG, hipocorado +/4+, perfusão ___ s, extremidades aquecidas/frias, Tax ___ °C.
NEURO: Sedado RASS ___ / em despertar. Pupilas isofotorreagentes. Sem déficit motor evidente à mobilização.
RESP: VM em PCV, FiO2 ___%, PEEP ___, Vc ___ mL, FR ___. MV+ bilat, sem RA. SpO2 ___%.
CV: Ritmo ___ ao monitor (RS / FA / ritmo de MP epicárdico DDD ___ bpm). PA ___/___ (PAM ___), PVC ___ mmHg.
  BNF, sem sopros novos, sem atrito pericárdico. Sem pulso paradoxal.
  DVA: noradrenalina ___ mcg/kg/min, dobutamina ___ mcg/kg/min, milrinona ___ mcg/kg/min.
  Fios de MP epicárdico presentes e testados (limiar ___ mA).
DRENOS: Mediastinal ___ mL/h; pleural E/D ___ mL/h. Aspecto serossanguinolento, sem coágulos.
ABD: Plano, flácido, RHA presentes, indolor.
EXTREMIDADES: Pulsos ___ . Safenectomia ___ .

# CONTROLES
BH desde a chegada: ___ mL. Diurese ___ mL/h.
Gaso arterial: pH ___ / pCO2 ___ / pO2 ___ / HCO3 ___ / BE ___ / Lac ___ / SvcO2 ___%.
Hb ___ / Plaq ___ / INR ___ / TTPa ___ / Fibrinogênio ___ .
K ___ / Mg ___ / Ca iônico ___ / Glicemia ___ .
ECG: ____________ . RX de tórax: ____________ .
Eco à beira-leito: FEVE ___%, sem derrame pericárdico significativo, VD ____________ .

# AVALIAÇÃO
POI de ____________ , [hemodinamicamente estável em desmame de DVA / em baixo débito / com sangramento em investigação].

# CONDUTA
1. Metas: PAM 65–80 mmHg, IC >2,2 L/min/m², Lac em queda, diurese >0,5 mL/kg/h, SvcO2 >65%.
2. Sangramento: manter Hb >7–8 g/dL (>8 se isquemia ativa), Plaq >50.000 (>100.000 se sangrando), INR <1,5, fibrinogênio >150–200 mg/dL.
   Reavaliar reabordagem cirúrgica se débito >200 mL/h por 2 h, >300 mL em 1 h ou queda abrupta com instabilidade (suspeita de tamponamento).
3. Manter K 4,0–5,0 mEq/L e Mg >2,0 mg/dL — reposição agressiva para profilaxia de FA pós-operatória.
4. Betabloqueador VO assim que estável e sem DVA/broncoespasmo (reduz FA pós-op).
5. Analgesia: dipirona 1 g EV 6/6 h + morfina resgate; evitar AINE.
6. Extubação quando: desperto, hemodinâmica estável, sangramento controlado, normotermia, gasometria adequada, sem DVA em dose alta.
7. Profilaxia ATB cirúrgica: ____________ (suspender em ≤48 h).
8. AAS 100 mg/dia a partir de ___ h de pós-operatório (pós-CRM). Anticoagulação conforme prótese: ____________ .
9. Controle glicêmico alvo 140–180 mg/dL com insulina EV/SC.
10. Mobilização e fisioterapia respiratória a partir do POI/PO1.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Paciente crônico estável — desmame / reabilitação prolongada",
    texto: `EVOLUÇÃO — ROP CRÔNICOS — D__ / __º DPO

Paciente ___ anos, ____________ , em programa de desmame ventilatório e reabilitação.

SUBJETIVO: Plantão sem intercorrências. Afebril. Tolerou ___ h de nebulização em TQT/tubo T.
EF: BEG, corado, hidratado, afebril, eupneico em ____________ .
  NEURO: Desperto, contactuante, obedece comandos, RASS 0, sem déficits.
  RESP: MV+ bilat sem RA; secreção traqueal escassa e clara. SpO2 ___% com FiO2 ___%.
  CV: RCR 2T BNF sem sopros. PA ___/___ , FC ___ . Sem DVA. Sem turgência jugular.
  ABD: Plano, flácido, RHA+, indolor. Dieta enteral bem tolerada / VO com deglutição avaliada pela fono.
  EXTR: Sem edemas; força muscular grau ___ globalmente (MRC ___/60). Sem LPP.
  DISPOSITIVOS: TQT nº ___ (D__), SNE (D__), AVP. AVC e SVD já retirados em __/__ .
BH 24 h: ___ mL. Diurese ___ mL.
EXAMES: sem novos.

AVALIAÇÃO: Paciente em desmame ventilatório progressivo, sem sinais de infecção ativa, com fraqueza adquirida na UTI.

CONDUTA:
1. Progredir tempo de nebulização/tubo T conforme tolerância; meta ___ h/dia.
2. Fisioterapia motora e respiratória 2×/dia; sedestação e ortostatismo assistido.
3. Manter dieta enteral ___ mL/h; nutrologia acompanha. Avaliar deglutição com fono para decanulação.
4. Sem indicação de ATB no momento.
5. Manter profilaxia de TEV e cuidados com pele (mudança de decúbito 2/2 h).
6. Programar decanulação quando: tosse eficaz, secreção manejável, ≥48 h sem suporte, deglutição segura.
7. Discussão de metas de cuidado com a família em __/__ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Passagem de plantão — resumo por leito (SBAR)",
    texto: `LEITO ___ | ___ anos | D__ internação | __º DPO de ____________

S (situação): ____________ . Ativo/instável em: ____________ .
B (background): HAS/DM/DAC/DRC ____________ ; cirurgia ____________ em __/__ ; intercorrências: ____________ .
A (avaliação): Hemodinâmica: DVA ___ mcg/kg/min [subindo/descendo]; Stevenson ___ / SCAI ___ / INTERMACS ___ . Ventilação: ____________ . Infecção: ATB ___ D__/__ , culturas ____________ . Renal: Cr ___ , diurese ___ . Hemato: Hb ___ , plaq ___ , anticoagulação ____________ .
R (recomendação / o que vigiar hoje):
  • ____________
  • ____________
  • Pendências: ____________ (exame/parecer/consentimento/família)
  • Se ____________ → fazer ____________ .
Metas de cuidado: pleno suporte / ordem de não reanimar / cuidados paliativos.`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "Evolução diária — UTI clínica",
    texto: `EVOLUÇÃO — UTI PS — D__ de internação

# SÍNTESE
Paciente ___ anos, admitido em __/__/____ por ____________ .
Antecedentes: ____________ . Medicações de uso prévio: ____________ .

# SUBJETIVO (24 h)
Plantão [sem intercorrências / com ____________ ]. Refere ____________ .
Afebril. Sem dor torácica, sem dispneia em repouso, sem palpitação, sem síncope.

# EXAME FÍSICO
GERAL: BEG/REG, LOTE, corado, hidratado, anictérico, acianótico, afebril (Tax ___ °C). Perfusão periférica <3 s.
NEURO: Glasgow 15 (AO4 RV5 RM6) / RASS ___ . Pupilas isocóricas e fotorreagentes. Sem déficit focal. CAM-ICU negativo.
RESP: Eupneico em ar ambiente / O2 ___ L/min em cateter nasal / VNI / VM (parâmetros: ____________ ).
  Tórax simétrico, expansibilidade preservada, FTV normal, som claro pulmonar à percussão.
  MV presente e simétrico bilateralmente, sem ruídos adventícios. FR ___ irpm. SpO2 ___%.
CV: Ictus não visível nem palpável, no 5º EIE na LHC. RCR em 2T, BNF, sem sopros, sem B3/B4, sem atrito.
  PA ___/___ mmHg (PAM ___), FC ___ bpm. Pulsos periféricos amplos e simétricos.
  Sem turgência jugular patológica a 45°. Sem refluxo hepatojugular.
ABD: Plano, RHA presentes e normoativos, flácido, indolor, sem massas ou visceromegalias. Traube livre.
EXTREMIDADES: Sem edema, panturrilhas livres e indolores, sem sinais de TVP. Pulsos pediosos e tibiais posteriores presentes.
DISPOSITIVOS: ____________ .

# CONTROLES 24 H
PA média ___ | FC ___ | Tax máx ___ | Diurese ___ mL (___ mL/kg/h) | BH ___ mL | Glicemias ___ .

# EXAMES (__/__)
Hb ___ Ht ___ Leuco ___ Plaq ___ | Ur ___ Cr ___ | Na ___ K ___ Mg ___ | PCR ___ Lac ___
Trop ___ → ___ | BNP/NT-proBNP ___ | Gaso: pH ___ pCO2 ___ pO2 ___ HCO3 ___ BE ___
ECG: ____________ | RX tórax: ____________ | Eco: ____________

# AVALIAÇÃO / PROBLEMAS
1. ____________
2. ____________

# CONDUTA
1. ____________
2. Mantenho ____________ .
3. Profilaxia de TEV: ____________ . Profilaxia de LAMG: ____________ .
4. Solicito: ____________ .
5. Metas de cuidado e comunicação com a família: ____________ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "IC descompensada grave / choque cardiogênico",
    texto: `EVOLUÇÃO — UTI PS — IC DESCOMPENSADA / CHOQUE CARDIOGÊNICO — D__

# SÍNTESE
Paciente ___ anos com IC ____________ (FEVE ___% , etiologia ____________ ), NYHA prévia ___ ,
admitido por descompensação com fator desencadeante: [má adesão / infecção / SCA / FA de alta resposta / anemia / disfunção renal / transgressão salina / ____________ ].

# PERFIL HEMODINÂMICO
Congestão: [presente = úmido / ausente = seco]. Perfusão: [adequada = quente / inadequada = frio].
→ STEVENSON: PERFIL ____ (A seco-quente / B úmido-quente / C úmido-frio / L seco-frio).
→ SCAI de choque: [A risco / B início / C clássico / D deteriorando / E extremo].
→ INTERMACS: PERFIL ____ + modificador [A arritmia / TCS suporte temporário / FF reinternações frequentes]
   1 choque crítico apesar de inotrópico/vasopressor (horas) | 2 declínio progressivo em inotrópico (dias) |
   3 estável mas dependente de inotrópico, falha de desmame (semanas) | 4 sintomas em repouso sem inotrópico |
   5 restrito ao domicílio | 6 limitação após pequenos esforços | 7 NYHA III avançada, estável.

# EXAME FÍSICO DIRIGIDO
GERAL: REG, dispneico, ortopneico, sudoreico. Perfusão periférica ___ s. Extremidades [quentes/frias].
CV: Ictus desviado para ___ , difuso. RCR/irregular em 2T com B3 audível em foco mitral. Sopro ____________ .
  PA ___/___ (PAM ___), pressão de pulso proporcional ___% (<25% sugere baixo débito). FC ___ .
  Turgência jugular ___ cm a 45° / a 90°. Refluxo hepatojugular presente.
RESP: MV+ com estertores crepitantes em ___ terços bilateralmente. FR ___ , SpO2 ___% em ____________ .
ABD: Fígado a ___ cm do RCD, doloroso à palpação. Ascite [ausente/presente].
EXTR: Edema de MMII ___/4+, frio, cacifo ___ .

# CONTROLES
Peso hoje ___ kg (ontem ___ kg; admissão ___ kg). BH 24 h ___ mL (acumulado ___ mL). Diurese ___ mL.
Lactato ___ → ___ . SvcO2 ___% . Cr ___ (basal ___). Na ___ . NT-proBNP ___ .

# DROGAS EM CURSO
Furosemida ___ mg EV ___/___ h ou ___ mg/h em BIC. Dobutamina ___ mcg/kg/min. Milrinona ___ mcg/kg/min.
Noradrenalina ___ mcg/kg/min. Nitroglicerina ___ mcg/min. Nitroprussiato ___ mcg/kg/min.

# AVALIAÇÃO
IC ____________ descompensada, Stevenson ____ / SCAI ____ / INTERMACS ____ , [respondendo / refratária] à terapia atual.
Disfunção renal associada: [ausente / síndrome cardiorrenal tipo ___ ].
Trajetória em relação a ontem: [melhorando / estável / deteriorando] — INTERMACS de ontem ____ .

# CONDUTA
1. Diurético de alça EV: dose inicial = 1–2,5× a dose oral diária em bolus EV (ou 20–40 mg se virgem de alça).
   Meta: diurese >100–150 mL/h nas primeiras 6 h e BH negativo de 1–2 L/dia. Reavaliar em 2–6 h;
   se resposta insuficiente (Na urinário <50–70 mEq/L em 2 h ou diurese <100 mL/h), DOBRAR a dose.
2. Se congestão refratária: associar tiazídico (hidroclorotiazida 25–50 mg VO ou clortalidona) 30 min antes da alça,
   ou acetazolamida 500 mg EV/dia (ADVOR), ou considerar UF/diálise se refratariedade + disfunção renal.
3. Vasodilatador se PAS >110 mmHg e congestão pulmonar importante: nitroglicerina EV titulada.
4. Inotrópico APENAS se hipoperfusão (perfil C/L): dobutamina 2,5–10 mcg/kg/min ou milrinona 0,25–0,5 mcg/kg/min
   (preferir milrinona se em uso de betabloqueador; ajustar em DRC).
5. Vasopressor se PAM <65 mmHg apesar de inotrópico: noradrenalina (1ª escolha no choque cardiogênico).
6. Manter/otimizar TMO conforme tolerância — NÃO suspender betabloqueador rotineiramente; reduzir 50% se baixo débito
   e suspender apenas se choque/inotrópico. Reintroduzir antes da alta.
7. Monitorar diariamente: peso, BH, Cr/Na/K, sinais de congestão. Aumento de Cr isolado com melhora da congestão não obriga suspender diurético.
8. Investigar/tratar o fator descompensante: ____________ .
9. Suporte mecânico e IC avançada — decidir pelo INTERMACS:
   • INTERMACS 1 → suporte circulatório mecânico em HORAS (BIA / Impella / ECMO-VA). Acionar equipe AGORA.
   • INTERMACS 2 → decisão em DIAS: DAV como ponte para transplante/decisão, ou transplante em prioridade.
   • INTERMACS 3 → decisão em SEMANAS: listar para transplante ou DAV eletivo; documentar as falhas de desmame.
   • INTERMACS 4–7 → otimizar TMO, avaliar dispositivos (CDI/TRC) e encaminhar ao ambulatório de IC avançada.
   Registrar hoje: perfil ____ , modificador ____ , equipe de IC avançada [acionada em __/__ / não acionada].
10. Profilaxia de TEV. Restrição hídrica ___ mL/dia e sódio <2 g/dia (individualizar).

Assinatura / CRM`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "Sepse / choque séptico",
    texto: `EVOLUÇÃO — UTI PS — SEPSE / CHOQUE SÉPTICO — D__ (D__ de ATB)

# SÍNTESE
Paciente ___ anos, admitido por ____________ . Foco presumido: [pulmonar / urinário / abdominal / partes moles / cateter / endocardite / indeterminado].
qSOFA ___ | SOFA ___ | Tempo porta–ATB: ___ min.

# EXAME FÍSICO
GERAL: REG/MEG, [febril Tax ___ °C / hipotérmico], sudoreico, perfusão ___ s, pele [quente/moteada, livedo].
NEURO: Glasgow ___ / RASS ___ , [lúcido / torporoso / agitado]. CAM-ICU [neg/pos].
RESP: FR ___ , SpO2 ___% em ____________ . MV+ [com estertores em ___ / sem RA].
CV: Taquicárdico, RCR 2T BNF. PA ___/___ (PAM ___). Noradrenalina ___ mcg/kg/min.
ABD: ____________ .
FOCO: ____________ (ferida, cateter, partes moles, etc.).
DISPOSITIVOS: AVC ____________ (D__) — sítio sem sinais flogísticos; SVD (D__) — reavaliar necessidade.

# CONTROLES
Lactato ___ → ___ → ___ (clearance ___%). Diurese ___ mL/kg/h. BH 24 h ___ mL.
Leuco ___ (bast ___), PCR ___ , procalcitonina ___ → ___ .
Culturas colhidas em __/__ : hemocultura ___ | urocultura ___ | aspirado traqueal ___ | outras ___ .

# AVALIAÇÃO
Sepse/choque séptico de foco ____________ , [em resposta / sem resposta] à terapia. Disfunções orgânicas: ____________ .

# CONDUTA
1. Antibioticoterapia: ____________ — D__/__ . Reavaliar espectro com culturas (descalonar em 48–72 h).
2. Controle do foco: ____________ (drenagem / retirada de cateter / cirurgia) — realizado/programado para __/__ .
3. Ressuscitação volêmica: cristaloide balanceado 30 mL/kg nas primeiras 3 h (individualizar se IC/DRC),
   guiada por resposta a fluidos (elevação passiva de pernas, VTI, variação de PP), não por PVC isolada.
4. Vasopressor: noradrenalina para PAM ≥65 mmHg. Se dose alta, associar vasopressina 0,03 U/min.
   Considerar hidrocortisona 200 mg/dia (50 mg 6/6 h EV) se choque refratário.
5. Reavaliar lactato a cada 2–4 h até normalização.
6. Hemotransfusão se Hb <7 g/dL (<8 se isquemia miocárdica ativa).
7. Ventilação protetora se SDRA: Vc 6 mL/kg PI, P plateau <30, driving pressure <15.
8. Controle glicêmico 140–180 mg/dL. Profilaxia de TEV e de LAMG.
9. Suspender ATB e dispositivos desnecessários; revisar diariamente.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "Pós-PCR / cuidados pós-ROSC",
    texto: `EVOLUÇÃO — UTI PS — PÓS-PCR (ROSC em __/__/____ às ___h) — D__

# EVENTO
PCR [intra/extra-hospitalar], ritmo inicial [FV/TVSP / AESP / assistolia], testemunhada [sim/não], RCP por leigo [sim/não].
Tempo de no-flow ___ min; low-flow ___ min. Adrenalina ___ mg. Desfibrilações ___ .
Causa presumida: [SCA / arritmia / TEP / hipóxia / distúrbio hidroeletrolítico / hipovolemia / tamponamento / outros].

# EXAME
NEURO: Glasgow ___ / RASS ___ . Pupilas ___ mm, fotorreagentes [sim/não]. Reflexo corneopalpebral ___ , tosse ___ ,
  reflexo oculocefálico ___ . Mioclonias [ausentes/presentes]. Sob sedação com ____________ .
RESP: VM, FiO2 ___%, PEEP ___ , Vc ___ , FR ___ . Gaso: pH ___ pCO2 ___ pO2 ___ Lac ___ .
CV: Ritmo ___ ao monitor. PA ___/___ (PAM ___). Noradrenalina ___ mcg/kg/min. FEVE ao eco ___% .
Tax ___ °C (controle direcionado de temperatura em curso: alvo ___ °C).

# CONDUTA
1. Alvo de PAM ≥65 mmHg (considerar 80–100 se hipertenso crônico) — noradrenalina titulada.
2. Alvo de oxigenação: SpO2 92–98% — EVITAR hiperóxia. Alvo de PaCO2 35–45 mmHg — evitar hipo e hipercapnia.
3. Controle direcionado de temperatura: evitar ativamente febre (manter <37,5 °C) por ≥72 h. Sedação/analgesia adequadas.
4. ECG imediato: se supra de ST → CATE de urgência. Se sem supra e causa cardíaca provável → coronariografia
   conforme instabilidade (não obrigatoriamente imediata em pacientes sem supra).
5. Investigação etiológica: ECG seriado, troponina, eletrólitos (K, Mg, Ca), gasometria, ecocardiograma,
   angio-TC de tórax se suspeita de TEP, TC de crânio se suspeita neurológica.
6. Prognóstico neurológico: NÃO prognosticar antes de 72 h do ROSC e sem sedação residual. Avaliação multimodal
   (exame neurológico, NSE, EEG, potenciais evocados somatossensitivos, TC/RM).
7. Profilaxia de convulsão apenas se documentada; EEG se mioclonias ou suspeita de status.
8. Comunicação diária e explícita com a família sobre incerteza prognóstica.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — OBS 1/2/3",
    nome: "Nota de admissão em observação",
    texto: `ADMISSÃO — OBS __ — __/__/____ ___h

# IDENTIFICAÇÃO
___ anos, sexo ___, natural de ____________ , procedente de ____________ , ____________ (profissão).
Acompanhante/informante: ____________ (confiabilidade ___).

# QUEIXA PRINCIPAL
«____________» (sic) há ___ .

# HISTÓRIA DA DOENÇA ATUAL
Paciente previamente ____________ , iniciou há ___ quadro de ____________ .
Caracterização do sintoma: início [súbito/gradual], localização ____________ , irradiação ____________ ,
qualidade ____________ , intensidade ___/10, duração ____________ , frequência ____________ ,
fatores de melhora ____________ , fatores de piora ____________ , sintomas associados ____________ .
Procurou atendimento prévio em __/__ , onde realizou ____________ e recebeu ____________ .
Nega febre, nega perda ponderal, nega sangramentos.

# ANTECEDENTES PESSOAIS
Patológicos: HAS (desde ___ ) / DM2 (desde ___ , última HbA1c ___ ) / DLP / DAC (IAM em ___ , ICP em ___ com stent em ___ , CRM em ___ ) / IC (FEVE ___% em __/__ ) / FA / DRC (Cr basal ___ , TFG ___ ) / AVC / DPOC / tireoidopatia / neoplasia.
Cirúrgicos: ____________ .
Alergias: ____________ .
Medicações em uso (dose e horário): ____________ .
Hábitos: tabagismo ___ maços/ano [ativo/cessado há ___]; etilismo ____________ ; drogas ilícitas ____________ ; atividade física ____________ .
Antecedentes familiares: DAC precoce (H<55/M<65) ____________ ; morte súbita ____________ ; miocardiopatia ____________ .
Social: mora com ____________ , ____________ andares de escada, independente para AVD [sim/não].

# REVISÃO DE SISTEMAS
Cardiovascular: dor torácica ___ , dispneia (NYHA ___), ortopneia ___ , DPN ___ , edema ___ , palpitação ___ , síncope ___ , claudicação ___ .
Respiratório: tosse ___ , expectoração ___ , hemoptise ___ , sibilância ___ .
Digestório / Urinário / Neurológico / Osteoarticular: ____________ .

# EXAME FÍSICO NA ADMISSÃO
Sinais vitais: PA ___/___ mmHg (MSD) e ___/___ (MSE), FC ___ bpm, FR ___ irpm, Tax ___ °C, SpO2 ___% em ar ambiente, HGT ___ mg/dL. Peso ___ kg, altura ___ m, IMC ___ .
GERAL: BEG, LOTE, corado, hidratado, anictérico, acianótico, afebril, eupneico. Perfusão periférica <3 s.
CABEÇA E PESCOÇO: Mucosas úmidas e coradas. Tireoide não palpável. Sem linfonodomegalias. Carótidas sem sopros.
  Turgência jugular ausente a 45°.
TÓRAX/RESP: Expansibilidade simétrica, FTV normal, som claro pulmonar. MV presente e simétrico, sem ruídos adventícios.
CV: Ictus no 5º EIE na LHC, propulsivo/não propulsivo, ___ polpas digitais. RCR em 2 tempos, bulhas normofonéticas,
  sem sopros, sem B3 ou B4, sem atrito pericárdico. Pulsos radiais, femorais, poplíteos, tibiais posteriores e pediosos
  presentes, simétricos e de amplitude normal. Sem RHJ.
ABD: Plano, RHA presentes, flácido, indolor, sem massas, fígado não palpável, Traube livre, sem ascite.
EXTREMIDADES: Sem edema, sem sinais de TVP, panturrilhas livres, sem úlceras ou lesões tróficas.
NEURO: Vigil, orientado, sem déficit motor ou sensitivo, pares cranianos sem alterações, sem sinais meníngeos.

# EXAMES DA ADMISSÃO
ECG: ritmo ___ , FC ___ , eixo ___ , PR ___ ms, QRS ___ ms, QTc ___ ms. ____________ .
Laboratório: Hb ___ Ht ___ Leuco ___ Plaq ___ | Ur ___ Cr ___ (TFG ___) | Na ___ K ___ | PCR ___ | Trop ___ | BNP/NT-proBNP ___ | Gaso ____________ | TGO/TGP ___ | INR ___ .
RX de tórax: ____________ .
POCUS/Eco: ____________ .

# HIPÓTESES DIAGNÓSTICAS
1. ____________
2. ____________
3. ____________

# PLANO
1. Interno em OBS __ para ____________ .
2. Dieta ____________ . Hidratação ____________ .
3. Prescrição: ____________ .
4. Solicito: ____________ .
5. Profilaxia de TEV: ____________ . Monitorização: ____________ .
6. Comunicado ao paciente e familiar sobre diagnóstico, plano e riscos. Dúvidas sanadas.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — OBS 1/2/3",
    nome: "Evolução diária — OBS",
    texto: `EVOLUÇÃO — OBS __ — D__ de internação — __/__/____

SUBJETIVO: Paciente refere ____________ . Nega dor torácica, dispneia em repouso, palpitação ou síncope.
  Aceitação da dieta ___ . Diurese e evacuações presentes. Noite [tranquila / com ____________ ].

SINAIS VITAIS 24 h: PA ___/___ (máx ___/___ , mín ___/___ ), FC ___ , FR ___ , Tax máx ___ °C, SpO2 ___% em ____________ .
  Peso ___ kg (ontem ___ kg). BH ___ mL. Diurese ___ mL. HGT ___ – ___ – ___ – ___ .

EXAME FÍSICO: BEG, LOTE, corado, hidratado, anictérico, acianótico, afebril, eupneico em ar ambiente.
  ACV: RCR em 2T, BNF, sem sopros. Sem turgência jugular a 45°. Pulsos simétricos.
  AR: MV presente bilateralmente, sem ruídos adventícios.
  ABD: Plano, flácido, RHA+, indolor, sem visceromegalias.
  EXTR: Sem edema; panturrilhas livres. Acesso venoso em ____________ , sem flebite.

EXAMES (__/__): ____________ .

AVALIAÇÃO: ____________ , em [melhora / estabilidade / piora] clínica.
Problemas ativos: 1. ____________  2. ____________

CONDUTA:
1. Mantenho ____________ .
2. Ajusto ____________ .
3. Aguardo ____________ .
4. Profilaxia de TEV mantida. Reavaliação de acesso venoso e SVD.
5. Previsão de alta: ____________ . Pendências para alta: ____________ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — OBS 1/2/3",
    nome: "Evolução — IC descompensada em OBS (com ou sem DVA)",
    texto: `EVOLUÇÃO — OBS __ — IC DESCOMPENSADA — D__

SUBJETIVO: Refere [melhora / manutenção / piora] da dispneia — atualmente NYHA ___ (admissão NYHA ___).
  Ortopneia: ___ travesseiros. DPN [sim/não]. Edema de MMII [melhor/igual/pior].

CONTROLES: Peso hoje ___ kg | ontem ___ kg | admissão ___ kg → variação total ___ kg.
  BH 24 h ___ mL | BH acumulado ___ mL | Diurese ___ mL (___ mL/kg/h).
  PA ___/___ , FC ___ , SpO2 ___% em ____________ .

EXAME FÍSICO — SCORE DE CONGESTÃO:
  Turgência jugular a 45°: [ausente / ___ cm]  | RHJ: [ausente/presente]
  Estertores: [ausentes / bases / ___ terços]  | B3: [ausente/presente]
  Edema de MMII: [ausente / ___/4+]            | Hepatomegalia/ascite: [ausente/presente]
  Perfusão: extremidades [quentes/frias], PP proporcional ___% , perfusão capilar ___ s.
  → Perfil de Stevenson: ____ .

EXAMES: Cr ___ (basal ___ , admissão ___) | Ur ___ | Na ___ | K ___ | Mg ___ | NT-proBNP ___ (admissão ___) | Hb ___ | Ferritina ___ / IST ___% .

AVALIAÇÃO: IC ___ (FEVE ___%), etiologia ____________ , descompensada por ____________ ,
  atualmente [congesta / euvolêmica / hipovolêmica], [com / sem] hipoperfusão.
  Stevenson ____ | INTERMACS ____ (modificador: [A arritmia / TCS / FF reinternações frequentes])
  Internações por IC nos últimos 12 meses: ___ → se ≥2, aplicar modificador FF e considerar IC avançada.

CONDUTA:
1. Furosemida ___ mg EV ___/___ h — [mantenho / dobro por resposta insuficiente / reduzo por euvolemia].
   Meta: BH negativo 1–2 L/dia até euvolemia; perda de 0,5–1,0 kg/dia.
2. Restrição hídrica ___ mL/dia e sódio <2 g/dia. Pesagem diária em jejum, mesma balança.
3. Otimização de TMO (4 pilares) — status atual:
   • iSGLT2: ____________  • ARNI/IECA/BRA: ____________
   • Betabloqueador: ____________  • ARM: ____________
   Próximo passo de titulação: ____________ .
4. Controle de K (meta 4,0–5,0) e Mg (>2,0). Repor conforme necessidade.
5. Investigar/corrigir: anemia e ferropenia (ferro EV se ferritina <100 ou 100–299 com IST <20%), disfunção tireoidiana, FA.
6. Critérios para alta: euvolêmico ao exame, sem O2 suplementar, diurético VO por ≥24 h com função renal estável,
   TMO otimizada e prescrita, orientação de dieta/peso diário, consulta de retorno em 7–14 dias agendada.
7. Profilaxia de TEV mantida.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Dor torácica",
    texto: `TRIAGEM — DOR TORÁCICA — __/__/____ ___h

___ anos, sexo ___ . Início dos sintomas há ___ h.

HDA: Dor [retroesternal / precordial / epigástrica], [em aperto / queimação / pontada / lancinante],
irradiando para ____________ , intensidade ___/10, duração ___ min, [em repouso / aos esforços],
[com / sem] melhora com repouso ou nitrato. Associada a ____________ (sudorese, náusea, dispneia, síncope).
Classificação: dor [anginosa típica / provavelmente anginosa / provavelmente não anginosa / definitivamente não anginosa].
Fatores de risco: HAS ___ DM ___ DLP ___ TBG ___ HF+ ___ DAC prévia ___ .
Nega: dor lancinante de início súbito com irradiação dorsal, dor pleurítica, imobilização/TVP recente, uso de cocaína.

EF: BEG, LOTE, corado, hidratado, acianótico, afebril, eupneico. Perfusão <3 s. Ansioso [sim/não].
  PA MSD ___/___ | PA MSE ___/___ (diferença ___ mmHg) | FC ___ | FR ___ | SpO2 ___% | Tax ___ °C
  ACV: RCR 2T, BNF, sem sopros, sem atrito, sem B3. Pulsos simétricos e presentes nos 4 membros.
  AR: MV+ bilat, sem RA. Sem dor à palpação da parede torácica [ou reprodutível à palpação].
  Sem turgência jugular. Sem edema ou assimetria de MMII. Panturrilhas livres.
  ABD: indolor, sem massa pulsátil.

ECG (___h, em ___ min da chegada): ritmo ___ , FC ___ , ____________ .
  Sem supra de ST, sem infra dinâmico, sem inversão de T, sem BRE novo, sem alteração de repolarização.
  → ECG seriado em 15–30 min se dor persistente ou alta suspeita.

ESCORE HEART: História ___ | ECG ___ | Age ___ | Risk factors ___ | Troponina ___ → TOTAL ___
  (0–3 = baixo risco; 4–6 = moderado; ≥7 = alto)

Troponina us: T0 = ___ ng/L (___h) | T1h = ___ ng/L (___h) | Δ = ___ ng/L
  Interpretação: [rule-out / zona de observação / rule-in].

HIPÓTESES: 1. ____________  2. ____________
Diferenciais graves afastados clinicamente: SCA, dissecção de aorta, TEP, pneumotórax hipertensivo, tamponamento, ruptura de esôfago.

CONDUTA / DESTINO:
[ ] ALTA — HEART ≤3 com troponinas seriadas negativas e ECG normal (risco de EACM <1% em 6 semanas).
    Orientado retorno IMEDIATO se: dor torácica que retorna ou piora, dor em repouso >20 min, sudorese fria,
    dispneia, síncope, palpitação sustentada. Encaminhado ao ambulatório de cardiologia em ___ dias.
    Prescrição de alta: ____________ . Orientações por escrito entregues ao paciente/acompanhante.
[ ] OBSERVAÇÃO / INTERNAÇÃO — HEART ≥4 ou troponina alterada ou dor recorrente.
    → Monitorização contínua, AAS 300 mg VO ataque, ____________ , acesso venoso, ECG seriado.
    → Estratificação: [invasiva imediata <2 h / precoce <24 h / não invasiva com angioTC de coronárias ou teste funcional].
[ ] SALA DE EMERGÊNCIA — supra de ST / instabilidade → acionar hemodinâmica AGORA. Tempo porta-balão alvo ≤90 min.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Dispneia",
    texto: `TRIAGEM — DISPNEIA — __/__/____ ___h

___ anos, sexo ___ . Dispneia há ___ [horas/dias], de início [súbito / progressivo], atualmente NYHA/mMRC ___ .

HDA: Refere ____________ . Ortopneia [sim / ___ travesseiros] | DPN [sim/não] | Edema de MMII [sim/não]
  Tosse [seca/produtiva, expectoração ___ ] | Febre [sim/não] | Dor torácica [sim/não, tipo ___ ]
  Sibilância [sim/não] | Perda/ganho de peso ___ kg | Transgressão alimentar/hídrica ou má adesão [sim/não]
  Fatores de risco para TEP: imobilização, cirurgia recente, neoplasia, TVP/TEP prévio, ACO, gestação — [ausentes/presentes: ___ ].

EF: [BEG/REG/MEG], [eupneico / dispneico / uso de musculatura acessória], [falando frases completas / entrecortadas].
  PA ___/___ | FC ___ | FR ___ | SpO2 ___% em [ar ambiente / O2 ___ L/min] | Tax ___ °C
  AR: Expansibilidade ___ , FTV ___ , percussão ___ .
      MV [presente e simétrico / diminuído em ___ / abolido em ___ ], [sem RA / estertores crepitantes em ___ /
      sibilos difusos / roncos]. Tempo expiratório [normal/prolongado].
  ACV: RCR/irregular em 2T, BNF, [sem sopros / sopro ___ ], [sem B3 / com B3].
      Turgência jugular [ausente / ___ cm a 45°]. RHJ [ausente/presente].
  EXTR: Edema [ausente / ___/4+, simétrico/assimétrico]. Panturrilhas [livres / dolorosas]. Empastamento [não/sim].
  Perfusão ___ s. Mucosas [coradas / hipocoradas ___/4+].

ECG: ____________ .  RX de tórax: ____________ .
POCUS: Linhas B [ausentes / bilaterais difusas / focais], derrame pleural [ausente/presente ___ ],
  VCI ___ mm com colapso ___% , FEVE visual [normal / reduzida], VD [normal / dilatado, D/E ___ ].
Lab: Hb ___ | Leuco ___ | PCR ___ | Cr ___ | NT-proBNP ___ | D-dímero ___ | Trop ___ | Gaso: pH ___ pCO2 ___ pO2 ___ HCO3 ___ Lac ___ .

Escores: Wells TEP ___ | Genebra ___ | CURB-65 ___ | (se aplicável)

HIPÓTESE PRINCIPAL: ____________ . Diferenciais: ____________ .

CONDUTA / DESTINO:
1. O2 para alvo de SpO2 ≥94% (88–92% se retentor crônico de CO2).
2. Tratamento inicial: ____________ .
3. [ ] Alta com ____________ e retorno em ___ dias; sinais de alarme orientados (piora da dispneia, dispneia em repouso,
       dor torácica, febre persistente, edema progressivo, ganho de peso >2 kg em 3 dias).
   [ ] Internação em OBS/UTI por ____________ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Palpitação / arritmia",
    texto: `TRIAGEM — PALPITAÇÃO / ARRITMIA — __/__/____ ___h

___ anos, sexo ___ . Palpitação com início [nítido/impreciso] há ___ h, [súbito / gradual], [regular / irregular],
[sustentada / em salvas], [em repouso / ao esforço / pós-prandial / associada a estresse].
Sintomas associados: [dor torácica / dispneia / pré-síncope / síncope / sudorese / poliúria] .
Nega uso de: álcool, estimulantes, cocaína, descongestionante, hormônio tireoidiano em excesso.
Antecedentes: FA prévia [sim/não], IC ___ , HAS ___ , DM ___ , AVC/AIT ___ , doença vascular ___ , valvopatia ___ , tireoidopatia ___ .
Anticoagulação em uso: [não / ___ , última dose em ___ h, adesão ___ ].

EF: [BEG/REG], [estável / instável]. PA ___/___ | FC ___ | FR ___ | SpO2 ___% | Tax ___ °C
  Sinais de INSTABILIDADE (hipotensão, dor torácica isquêmica, IC aguda, rebaixamento): [AUSENTES / presentes: ___ ]
  ACV: Ritmo [regular / IRREGULARMENTE IRREGULAR], BNF, sopro ____________ . Déficit de pulso ___ .
  AR: MV+ bilat [sem RA / estertores]. Turgência jugular ___ . Edema de MMII ___ . Tireoide ___ .

ECG: ____________ (ritmo, FC, QRS estreito/largo, P visível, RR regular/irregular, pré-excitação, QT).
Lab: K ___ Mg ___ | TSH ___ | Hb ___ | Trop ___ | Cr ___ .

ESCORE CHA2DS2-VA (SBC/ESC 2025 — sexo feminino removido):
  IC ___ (1) | HAS ___ (1) | Idade ≥75 ___ (2) | DM ___ (1) | AVC/AIT/TE ___ (2) | Doença vascular ___ (1) | Idade 65–74 ___ (1)
  → TOTAL ___ .  [0 = não anticoagular | 1 = individualizar | ≥2 = anticoagular]
  Anticoagular independentemente do escore se: CMH, amiloidose cardíaca, hipertireoidismo, estenose mitral moderada/grave ou prótese mecânica.
HAS-BLED ___ (usar para corrigir fatores de sangramento, não para contraindicar).

CONDUTA / DESTINO:
[ ] INSTÁVEL → cardioversão elétrica sincronizada IMEDIATA (sedação com etomidato/propofol + fentanil).
    Energia: FA 120–200 J bifásico | flutter/TSV 50–100 J | TV monomórfica com pulso 100 J.
[ ] ESTÁVEL, FA <24 h de início E baixo risco embólico → cardioversão (química ou elétrica) possível.
    Alto risco (FA valvar, evento embólico prévio ou CHA2DS2-VA ≥2) → NÃO cardioverter de imediato mesmo <24 h:
    anticoagular + controle de FC, ou ETE para excluir trombo.
[ ] ESTÁVEL, ≥24 h ou início indeterminado → controle de FC (meta <110 bpm em repouso) + anticoagulação;
    cardioversão eletiva após ≥3 semanas de anticoagulação plena OU após ETE.
Controle de FC: metoprolol 2,5–5 mg EV lento (repetir até 3×) ou VO; diltiazem se broncoespasmo e FEVE preservada;
  digoxina se IC/hipotensão; EVITAR bloqueador de nó AV se pré-excitação (usar procainamida/amiodarona e cardioverter).
Anticoagulação iniciada: ____________ .
Destino: [ ] Alta com retorno ambulatorial em ___ dias  [ ] OBS  [ ] UTI

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Síncope",
    texto: `TRIAGEM — SÍNCOPE — __/__/____ ___h

___ anos, sexo ___ . Episódio de perda súbita e transitória da consciência com recuperação espontânea e completa,
há ___ h, com duração de ___ segundos.

CARACTERIZAÇÃO:
  Pródromos: [ausentes / náusea, sudorese, escurecimento visual, calor, palidez] — sugerem reflexo/vasovagal.
  Postura no momento: [em pé / sentado / deitado] . Gatilho: [dor, emoção, calor, micção, tosse, mudança postural / ESFORÇO FÍSICO].
  Testemunhas: [sim/não]. Descrição: ____________ . Movimentos anormais [não / mioclonias breves após queda].
  Recuperação: [imediata e completa / confusão pós-ictal ___ min]. Liberação esfincteriana [não/sim]. Mordedura lateral de língua [não/sim].
  Trauma associado: ____________ .
BANDEIRAS VERMELHAS (cardiogênica): síncope em esforço ou em decúbito | sem pródromos | palpitação precedendo |
  história familiar de morte súbita <50 anos | cardiopatia estrutural conhecida | ECG anormal | dor torácica/dispneia associadas.
  → [AUSENTES / PRESENTES: ____________ ]
Medicações que possam contribuir: ____________ (anti-hipertensivos, nitratos, diuréticos, alfabloqueadores, drogas que prolongam QT).

EF: [BEG], LOTE, sem déficit neurológico focal.
  PA deitado ___/___ ; PA em pé após 1 min ___/___ e após 3 min ___/___ (queda ≥20 mmHg sistólica ou ≥10 diastólica = hipotensão ortostática).
  FC ___ | FR ___ | SpO2 ___% | HGT ___ | Tax ___ °C
  ACV: RCR 2T BNF, [sem sopros / sopro sistólico ___ que irradia para ___ — atenção a estenose aórtica].
  AR: MV+ sem RA. ABD: indolor, sem massa pulsátil. Toque retal (se suspeita de sangramento): ____________ .
  NEURO: Glasgow 15, pupilas isofotorreagentes, força e sensibilidade preservadas, sem sinais meníngeos, marcha ___ .
  Lesões traumáticas: ____________ .

ECG: ritmo ___ , PR ___ , QRS ___ , QTc ___ . Sem BAV, sem pré-excitação, sem Brugada, sem onda épsilon,
  sem HVE com sobrecarga, sem sinais de isquemia, sem TV.
Lab: Hb ___ | Na ___ K ___ | Cr ___ | Trop ___ | HCG (se aplicável) ___ .

CLASSIFICAÇÃO: síncope [reflexa (vasovagal/situacional/hipersensibilidade do seio carotídeo) / ortostática / cardiogênica (arrítmica ou estrutural)].

CONDUTA / DESTINO:
[ ] ALTA — síncope reflexa típica, ECG normal, sem cardiopatia estrutural, sem bandeiras vermelhas, exame normal.
    Orientações: manobras de contrapressão, hidratação e sal, evitar gatilhos, deitar ao primeiro pródromo,
    não dirigir/operar máquinas até avaliação, revisão de anti-hipertensivos.
    Retorno IMEDIATO se: síncope em esforço, palpitação, dor torácica, dispneia, novo episódio sem pródromo.
    Encaminhamento ambulatorial: ____________ (Holter / eco / teste ergométrico / tilt test).
[ ] OBSERVAÇÃO/MONITORIZAÇÃO — bandeira vermelha presente, ECG alterado, cardiopatia estrutural, síncope de esforço,
    trauma significativo, idade avançada com comorbidades. Solicito eco, monitorização contínua, ____________ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Dor / isquemia de membro e queixa vascular",
    texto: `TRIAGEM — QUEIXA VASCULAR DE MEMBRO — __/__/____ ___h

___ anos, sexo ___ . Quadro de ____________ em [MSD/MSE/MID/MIE] há ___ [horas/dias].

HDA: Dor [em repouso / à deambulação após ___ metros / ausente], intensidade ___/10.
  Alteração de cor [palidez / cianose / rubor], alteração de temperatura, parestesia, perda de força.
  Ferida/úlcera: localização ____________ , tamanho ___ cm, bordas ____________ , leito ____________ ,
  secreção ____________ , odor ____________ , tempo de evolução ___ .
  Febre [sim/não]. Trauma prévio [sim/não]. FA conhecida [sim/não]. Cirurgia vascular prévia: ____________ .
FR: TBG ___ maços/ano, DM (HbA1c ___), HAS, DLP, DRC, DAOP prévia, imobilização, neoplasia, ACO, TVP prévia.

EF: PA ___/___ | FC ___ | Tax ___ °C | HGT ___ | SpO2 ___%
  MEMBRO ACOMETIDO — avaliar os 6 Ps de isquemia aguda:
    Pain (dor) ___ | Pallor (palidez) ___ | Pulselessness (ausência de pulso) ___ |
    Paresthesia ___ | Paralysis ___ | Poikilothermia (frialdade) ___
  Pulsos: femoral ___ , poplíteo ___ , tibial posterior ___ , pedioso ___ (comparar com contralateral).
  Enchimento capilar ___ s. Temperatura [normal / fria a partir de ___ ]. Cor ____________ .
  Perimetria: ___ cm (acometido) × ___ cm (contralateral) a ___ cm da patela.
  Sinais de TVP: edema assimétrico, empastamento de panturrilha, dor à dorsiflexão, circulação colateral, cordão palpável.
  Lesão trófica/necrose: localização e extensão ____________ ; [seca / úmida], [com / sem] celulite perilesional,
  [com / sem] crepitação, [com / sem] exposição óssea (probe-to-bone ___ ).
  Sensibilidade tátil/vibratória e monofilamento (se DM): ____________ .
  ITB: D ___ / E ___ (>1,3 incompressível; 0,9–1,3 normal; 0,4–0,9 DAOP; <0,4 isquemia crítica).

Classificação Rutherford (isquemia aguda): [I viável / IIa marginal / IIb imediatamente ameaçado / III irreversível].
Escore de Wells para TVP: ___ .

Lab: Hb ___ | Leuco ___ | PCR ___ | Cr ___ | Lactato ___ | CPK ___ | K ___ | Glicemia ___ | HbA1c ___ | D-dímero ___ .
Doppler/US: ____________ .

CONDUTA / DESTINO:
[ ] ISQUEMIA AGUDA (Rutherford IIb) → EMERGÊNCIA. Acionar cirurgia vascular AGORA. Heparinização plena
    (HNF bolus 80 U/kg + 18 U/kg/h), analgesia, manter membro em declive e aquecido passivamente, NPO, exames pré-op.
[ ] Rutherford III (irreversível: anestesia, paralisia, rigidez muscular) → discutir amputação com a vascular; não revascularizar.
[ ] INFECÇÃO DE PARTES MOLES / PÉ DIABÉTICO → ATB ____________ , desbridamento, RX do pé, controle glicêmico, avaliação vascular.
[ ] TVP confirmada → anticoagulação plena: ____________ . Definir tratamento ambulatorial vs internação.
[ ] Quadro crônico estável → alta com encaminhamento à vascular em ___ dias, curativo orientado, controle de FR.
Sinais de alarme orientados: piora da dor, palidez/frialdade, perda de sensibilidade ou força, febre, secreção purulenta, escurecimento da lesão.

Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Evolução diária — enfermaria de cardiologia",
    texto: `EVOLUÇÃO — ENFERMARIA — LEITO ___ — D__ de internação — __/__/____

S: Paciente refere ____________ . Nega dor torácica, dispneia, palpitação, síncope, febre.
   Aceitou dieta ___ . Sono ___ . Evacuação ___ . Diurese espontânea.

O: PA ___/___ | FC ___ | FR ___ | Tax ___ °C | SpO2 ___% AA | Peso ___ kg | BH 24 h ___ mL | Diurese ___ mL | HGT ___ .
   BEG, LOTE, corado, hidratado, anictérico, acianótico, afebril, eupneico.
   ACV: RCR 2T, BNF, sem sopros; sem turgência jugular; pulsos simétricos.
   AR: MV+ bilateralmente, sem ruídos adventícios.
   ABD: plano, flácido, RHA+, indolor, sem visceromegalias.
   EXTR: sem edema; panturrilhas livres; AVP em ___ , sem flebite.
   Exames (__/__): ____________ .

A: 1. ____________ (ativo / controlado)
   2. ____________
   3. ____________

P: 1. ____________
   2. ____________
   3. Profilaxia de TEV: ____________ .
   4. Pendências: ____________ .
   5. Previsão de alta: ____________ .

Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Pós-SCA / IAM — evolução em unidade coronariana",
    texto: `EVOLUÇÃO — PÓS-SCA — D__ de internação / D__ pós-[IAMCSST / IAMSSST / angina instável]

# SÍNTESE
Paciente ___ anos, admitido em __/__/____ por ____________ .
Diagnóstico: [IAMCSST de parede ____________ / IAMSSST / angina instável]. Killip na admissão: ___ .
Pico de troponina: ___ . Tempo porta-balão / porta-agulha: ___ min. GRACE ___ .
Cateterismo (__/__): ____________ (vasos, lesões, TIMI pré/pós).
ICP (__/__): stent ____________ em ____________ ; resultado ____________ .
Lesão residual / programação de novo tempo: ____________ .
FEVE (__/__): ___% . Alteração segmentar: ____________ .
Antecedentes: HAS / DM / DLP / TBG / DAC prévia / DRC / ____________ .

# SUBJETIVO (24 h)
Assintomático. Nega dor torácica recorrente, dispneia, palpitação, síncope ou sangramento.
Deambulando [no leito / no quarto / no corredor], tolerando dieta VO. Sono e diurese preservados.
Sítio de punção [radial D/E / femoral D/E]: sem dor e sem sangramento.

# EXAME FÍSICO
GERAL: BEG, LOTE, corado, hidratado, acianótico, afebril, eupneico em ar ambiente. Perfusão <3 s.
SSVV: PA ___/___ | FC ___ | FR ___ | Tax ___ °C | SpO2 ___% | diurese ___ mL/24 h | peso ___ kg
ACV: RCR em 2T, BNF, sem sopros, sem B3, sem atrito pericárdico. Sem turgência jugular a 45°.
AR: MV+ bilateralmente, sem estertores → Killip atual ___ .
ABD: plano, flácido, RHA+, indolor.
EXTR: sem edema; pulsos distais presentes e simétricos; panturrilhas livres.
SÍTIO DE PUNÇÃO: sem hematoma, sem sopro, sem massa pulsátil, sem sinais de pseudoaneurisma.

# EXAMES
ECG (__/__): ____________ (evolução do supra, ondas Q, inversão de T, arritmias).
Troponina ___ → ___ → ___ | Hb ___ (admissão ___) | Plaq ___ | Cr ___ (admissão ___) | K ___ | Mg ___
Glicemias ___ | HbA1c ___ | LDL ___ (colher nas primeiras 24 h) | TGO/TGP ___
Ecocardiograma (__/__): FEVE ___% , ____________ . Trombo apical [ausente / presente].

# AVALIAÇÃO — COMPLICAÇÕES A VIGIAR
Isquemia recorrente ___ | Arritmia (TV/FV, FA, BAV) ___ | IC / congestão ___ |
Complicação mecânica — CIV, insuficiência mitral aguda, ruptura de parede livre (SOPRO NOVO!) ___ |
Pericardite pós-IAM ___ | Trombo de VE ___ | Sangramento / queda de Hb ___ | Nefropatia por contraste ___
→ [ausentes / presentes: ____________ ]

# CONDUTA
1. DAPT: AAS 100 mg/dia + [ticagrelor 90 mg 12/12 h / clopidogrel 75 mg/dia / prasugrel 10 mg/dia] — D__ .
   Duração programada: ___ meses. Risco de sangramento: ____________ .
2. Anticoagulação: ____________ (suspender após a ICP, salvo indicação: FA, trombo de VE, TEV).
3. Betabloqueador: ____________ — titular conforme FC e PA.
4. IECA/BRA: ____________ — indicado se FEVE ≤40%, HAS, DM ou DRC.
5. ARM: ____________ — se FEVE ≤40% com IC ou DM, sem hipercalemia nem DRC grave.
6. Estatina de alta intensidade: [atorvastatina 80 mg / rosuvastatina 20–40 mg]. Meta LDL <50 mg/dL (redução ≥50%).
7. iSGLT2 se DM2 ou FEVE reduzida: ____________ .
8. Controle glicêmico 140–180 mg/dL. Meta de PA <130/80 mmHg.
9. Mobilização progressiva conforme protocolo. Reabilitação cardiovascular — encaminhado.
10. Cessação do tabagismo: orientado / encaminhado a ____________ .
11. Pendências: [eco / novo tempo de ICP / avaliação para CRM / Holter / teste funcional] ____________ .

# CRITÉRIOS PARA ALTA
Sem angina há ≥24 h · sem arritmia significativa · sem sinais de IC · deambulando sem sintomas ·
terapia otimizada e prescrita · orientações de sinais de alarme dadas · retorno em 7–14 dias agendado ·
reabilitação cardiovascular encaminhada.

Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Avaliação de risco cardiovascular pré-operatório",
    texto: `PARECER — AVALIAÇÃO CARDIOVASCULAR PRÉ-OPERATÓRIA — __/__/____

Paciente ___ anos, sexo ___ , internado para ____________ .
Cirurgia proposta: ____________ , de risco [baixo <1% / intermediário 1–5% / alto >5%], caráter [eletivo / urgência / emergência].
Data prevista: __/__/____ . Equipe solicitante: ____________ .

ANTECEDENTES CARDIOVASCULARES: ____________ .
  DAC: [não / IAM em ___ , ICP em ___ com stent ___ (farmacológico/convencional), CRM em ___ ].
  IC: [não / FEVE ___% em __/__ , NYHA ___ ]. Valvopatia: ____________ . Arritmia: ____________ .
  DAC em uso de DAPT: ____________ — tempo desde o implante do stent: ___ meses.
Medicações: ____________ .

CAPACIDADE FUNCIONAL: ___ METs. Sobe ___ lances de escada sem parar; caminha ___ quarteirões.
  [ ≥4 METs = boa capacidade funcional → geralmente dispensa investigação adicional ]

ÍNDICE DE RISCO CARDÍACO REVISADO (RCRI / Lee) — 1 ponto cada:
  [ ] Cirurgia de alto risco (intraperitoneal, intratorácica, vascular suprainguinal)
  [ ] História de doença arterial coronariana
  [ ] História de insuficiência cardíaca
  [ ] História de doença cerebrovascular
  [ ] Diabetes em uso de insulina
  [ ] Creatinina pré-operatória >2,0 mg/dL
  TOTAL = ___ → risco de evento cardíaco maior: 0 pt ≈3,9% | 1 pt ≈6,0% | 2 pt ≈10,1% | ≥3 pt ≈15%.

EXAME FÍSICO: PA ___/___ | FC ___ | SpO2 ___% | IMC ___ .
  ACV: RCR 2T BNF [sem sopros / sopro ___ ]. Sem turgência jugular. AR: MV+ sem RA. EXTR: sem edema.
EXAMES: ECG ____________ | Hb ___ | Cr ___ (TFG ___) | Na/K ___ | Eco (__/__) FEVE ___% , ____________ .

CONCLUSÃO: Paciente de risco cardiovascular perioperatório [baixo / intermediário / alto].
[ ] Liberado para o procedimento sem necessidade de exames adicionais.
[ ] Sugiro complementar com ____________ antes do procedimento.

RECOMENDAÇÕES PERIOPERATÓRIAS:
1. MANTER no perioperatório: betabloqueador (não iniciar de novo <1 dia antes), estatina, AAS se stent recente ou alto risco isquêmico.
2. SUSPENDER: IECA/BRA na manhã da cirurgia (risco de hipotensão) — reintroduzir em 24–48 h se euvolêmico;
   iSGLT2 3–4 dias antes (risco de cetoacidose euglicêmica); diurético na manhã da cirurgia.
3. Antiagregação: manter AAS; suspender P2Y12 conforme prazo mínimo de DAPT (ICP eletiva com stent farmacológico ≥1 mês;
   pós-SCA idealmente ≥6–12 meses). Discutir individualmente com a hemodinâmica se cirurgia inadiável.
4. Anticoagulação: suspender varfarina 5 dias antes (alvo INR <1,5) — ponte com HBPM apenas se alto risco tromboembólico
   (prótese mecânica mitral, prótese aórtica de gaiola/disco, AVC <3 meses, CHA2DS2-VA muito alto).
   DOAC: suspender 24–48 h antes conforme risco de sangramento e ClCr.
5. Controle glicêmico alvo 140–180 mg/dL. Manter normotermia e euvolemia.
6. Profilaxia de TEV conforme risco cirúrgico e de sangramento.
7. Reavaliação cardiológica no pós-operatório se: instabilidade hemodinâmica, dor torácica, arritmia nova ou elevação de troponina.

Permaneço à disposição.
Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Sumário de alta",
    texto: `SUMÁRIO DE ALTA — __/__/____

Paciente: ____________ | ___ anos | Registro ___
Internação: __/__/____ a __/__/____ (___ dias) | Setor: ____________

DIAGNÓSTICOS DE ALTA (CID):
  Principal: ____________ (___)
  Secundários: ____________ (___)

MOTIVO DA INTERNAÇÃO: ____________ .

RESUMO DA EVOLUÇÃO:
Paciente admitido por ____________ . Na admissão apresentava ____________ .
Realizados os seguintes exames relevantes:
  • ECG: ____________
  • Laboratório: ____________
  • Ecocardiograma (__/__): FEVE ___% , ____________
  • Cateterismo (__/__): ____________
  • Outros: ____________
Recebeu tratamento com ____________ , evoluindo com ____________ .
Procedimentos realizados: ____________ .
Intercorrências: ____________ .
Recebe alta em boas condições clínicas, [euvolêmico], [sem dor], [sem O2 suplementar], deambulando, aceitando dieta VO.

EXAME FÍSICO NA ALTA: PA ___/___ | FC ___ | FR ___ | SpO2 ___% AA | Peso ___ kg | Tax ___ °C
  BEG, LOTE, corado, hidratado, eupneico. ACV: RCR 2T BNF sem sopros. AR: MV+ sem RA. EXTR: sem edema.

MEDICAÇÕES DE ALTA (reconciliadas):
  1. ____________ ___ mg — ___ cp — VO — ___/___ h — uso contínuo
  2. ____________
  3. ____________
  MEDICAÇÕES SUSPENSAS e motivo: ____________ .
  MEDICAÇÕES ALTERADAS: ____________ .

ORIENTAÇÕES:
  • Dieta: ____________ (hipossódica <2 g de sal/dia, fracionada, ____________ ).
  • Restrição hídrica: ____________ mL/dia. Pesar-se diariamente em jejum e anotar.
  • Atividade física: ____________ . Reabilitação cardiovascular: ____________ .
  • Cessação do tabagismo / etilismo: orientado, encaminhado a ____________ .
  • Cuidados com ferida operatória / curativo: ____________ .

RETORNAR IMEDIATAMENTE AO PRONTO-SOCORRO SE:
  dor torácica, falta de ar em repouso ou piora importante da falta de ar, desmaio, palpitação sustentada,
  ganho de peso >2 kg em 3 dias, edema progressivo, febre ≥38 °C, sangramento, ____________ .

RETORNOS AGENDADOS:
  • Ambulatório de ____________ em __/__/____ às ___h
  • Exames a trazer no retorno: ____________
  • Contato da unidade: ____________

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Primeiro atendimento ambulatorial — completo",
    texto: `AMBULATÓRIO DE PRIMEIRO ATENDIMENTO — __/__/____

# IDENTIFICAÇÃO
___ anos, sexo ___ , cor/raça autodeclarada ____________ , ____________ (profissão), procedente de ____________ .
Encaminhado por ____________ , motivo do encaminhamento: ____________ .
Acompanhante/informante: ____________ . Convênio/SUS: ____________ .

# QUEIXA E DURAÇÃO
«____________» (sic) há ___ .

# HISTÓRIA DA DOENÇA ATUAL
____________ .
Sintomas cardiovasculares — caracterização:
  • Dor torácica: [ausente / presente] — tipo ___ , desencadeante ___ , alívio ___ , classe CCS ___ .
      Classificação: [típica / provavelmente anginosa / provavelmente não anginosa / não anginosa].
  • Dispneia: [ausente / presente] — NYHA ___ ; ortopneia ___ ; DPN ___ .
  • Palpitação: [ausente / presente] — ___ .
  • Síncope/pré-síncope: [ausente / presente] — ___ .
  • Edema: [ausente / presente] — ___ .
  • Claudicação intermitente: [ausente / presente] a ___ metros.

# ANTECEDENTES
HAS: [não / sim desde ___ ] — medicações ____________ ; PA habitual ___/___ ; MAPA/MRPA ____________ .
DM: [não / sim desde ___ ] — última HbA1c ___% em __/__ ; complicações ____________ .
Dislipidemia: [não / sim] — último perfil: CT ___ , LDL ___ , HDL ___ , TG ___ , não-HDL ___ , Lp(a) ___ .
DAC: [não / sim] — IAM ___ , ICP ___ (data/vaso/stent), CRM ___ , último CATE ____________ .
IC: [não / sim] — FEVE ___% (__/__), etiologia ____________ .
Outros: FA ___ , valvopatia ___ , DRC (TFG ___) ___ , AVC ___ , DAOP ___ , DPOC ___ , SAOS ___ , tireoide ___ , neoplasia ___ , doença reumatológica ___ .
Cirurgias: ____________ . Alergias: ____________ .
MEDICAÇÕES EM USO (nome, dose, posologia, adesão):
  1. ____________  2. ____________  3. ____________  4. ____________

# HÁBITOS E ESTILO DE VIDA
Tabagismo: [nunca / ativo ___ maços/ano / cessado há ___ ]. Etilismo: ____________ .
Atividade física: ____________ min/semana de ____________ . Sedentarismo [sim/não].
Alimentação: ____________ . Sono: ___ h; ronco/apneia presenciada [sim/não]; Epworth ___ .
Peso ___ kg, altura ___ m, IMC ___ kg/m², circunferência abdominal ___ cm.

# ANTECEDENTES FAMILIARES
DAC precoce (H<55 anos / M<65 anos): [não / sim — parentesco ___ ]. Morte súbita <50 anos: ____________ .
Miocardiopatia / canalopatia / dislipidemia familiar / aneurisma de aorta: ____________ .

# EXAME FÍSICO
PA sentado (média de 2 medidas, MSD) ___/___ mmHg | MSE ___/___ | FC ___ bpm | FR ___ | SpO2 ___% | Peso ___ kg | IMC ___ | CA ___ cm.
GERAL: BEG, LOTE, corado, hidratado, anictérico, acianótico, eupneico. Sem xantelasma, sem arco corneano precoce.
PESCOÇO: Sem turgência jugular a 45°. Carótidas sem sopros. Tireoide não palpável.
PRECÓRDIO: Ictus no 5º EIE na LHC, ___ polpas digitais, não propulsivo. Sem frêmitos.
  RCR em 2 tempos, bulhas normofonéticas, sem sopros, sem B3 ou B4, sem desdobramentos patológicos.
AR: MV presente e simétrico, sem ruídos adventícios.
ABD: Plano, flácido, RHA presentes, indolor, sem visceromegalias, sem sopros abdominais, aorta não palpável/expansível.
EXTREMIDADES: Sem edema. Pulsos radiais, femorais, poplíteos, tibiais posteriores e pediosos presentes e simétricos.
  ITB D ___ / E ___ . Sem lesões tróficas.

# EXAMES TRAZIDOS
ECG (__/__): ritmo ___ , FC ___ , eixo ___ , PR ___ , QRS ___ , QTc ___ . ____________ .
Laboratório (__/__): Hb ___ | Cr ___ (TFG-CKD-EPI ___) | Na ___ K ___ | Glicemia ___ | HbA1c ___ | TSH ___ | TGO/TGP ___ | Ac. úrico ___ | EAS/relação albumina-creatinina urinária ___ .
Perfil lipídico: CT ___ | LDL ___ | HDL ___ | TG ___ | não-HDL ___ | ApoB ___ | Lp(a) ___ .
Ecocardiograma (__/__): ____________ .
Outros: ____________ .

# ESTRATIFICAÇÃO DE RISCO CARDIOVASCULAR (SBC 2025)
[ ] Doença aterosclerótica estabelecida → alto / muito alto / extremo risco
[ ] Sem DCV estabelecida, 30–79 anos → calculadora PREVENT = ___% em 10 anos
[ ] Escore de cálcio coronário (se risco intermediário, >40 anos e LDL 70–159): ___ UA (percentil ___)
    CAC >100 UA ou percentil >75 → alto risco | DM + CAC 10–300 → alto risco | CAC >300 → muito alto risco
→ CLASSIFICAÇÃO FINAL: ____________ .
→ Metas: LDL <___ mg/dL (e redução ≥___%) | não-HDL <___ mg/dL | PA <130/80 mmHg | HbA1c <___% .

# HIPÓTESES / PROBLEMAS
1. ____________  2. ____________  3. ____________

# CONDUTA
1. Prescrição: ____________ .
2. Solicito: ____________ .
3. Orientações não farmacológicas: dieta ____________ , atividade física ____________ ,
   cessação do tabagismo ____________ , perda de peso alvo ___ kg (___%).
4. Encaminhamentos: ____________ .
5. Retorno em ___ [semanas/meses] com exames.
6. Orientado sobre sinais de alarme e quando procurar o pronto-socorro.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Retorno ambulatorial — modelo curto",
    texto: `AMBULATÓRIO DE ____________ — RETORNO — __/__/____

Paciente ___ anos, em seguimento por ____________ (dx em ___ ).

SUBJETIVO: Assintomático do ponto de vista cardiovascular. Nega dor torácica, dispneia (NYHA ___),
  ortopneia, DPN, edema, palpitação, síncope ou claudicação. Adesão medicamentosa [boa / parcial — ____________ ].
  Efeitos adversos: [nega / ____________ ]. Intercorrências desde a última consulta: [nega / ____________ ].
  Aferições domiciliares de PA: ____________ . HGT domiciliar: ____________ . Peso: ___ kg (anterior ___ kg).

EF: PA ___/___ mmHg | FC ___ bpm | FR ___ | SpO2 ___% | Peso ___ kg | IMC ___ .
  BEG, LOTE, corado, hidratado, eupneico, acianótico.
  ACV: RCR em 2T, BNF, sem sopros; sem turgência jugular a 45°; pulsos simétricos.
  AR: MV presente bilateralmente, sem ruídos adventícios.
  ABD: Plano, flácido, indolor, sem visceromegalias.
  EXTR: Sem edema; panturrilhas livres.

EXAMES (__/__): ____________ .

AVALIAÇÃO: ____________ [compensado / controlado / descompensado].
  Metas: PA ___ (alvo <130/80) | LDL ___ (alvo <___) | HbA1c ___ (alvo <___) | FC ___ .

CONDUTA:
1. [Mantenho / Ajusto] ____________ .
2. Solicito: ____________ .
3. Orientações: ____________ .
4. Retorno em ___ meses com exames. Orientado sobre sinais de alarme.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Retorno pós-ICP / DAC crônica",
    texto: `AMBULATÓRIO DE ANGIOPLASTIA — __/__/____

Paciente ___ anos, portador de DAC, submetido a ICP em __/__/____ .
  Vaso/lesão tratada: ____________ . Stent: ____________ (farmacológico / convencional), ___ mm × ___ mm.
  Contexto: [SCA com supra / SCA sem supra / angina estável / isquemia silenciosa].
  FEVE pós-evento: ___% (__/__). Doença residual: ____________ .

SUBJETIVO: [Assintomático / angina classe CCS ___ ] — descrição: ____________ .
  Nega dispneia progressiva, síncope, palpitação. Tolerância ao esforço: ____________ .
  Adesão à DAPT: [boa / falhas ___ ]. Sangramentos: [nega / ____________ ].
  Tabagismo: [cessado em ___ / ativo]. Reabilitação cardiovascular: [em curso / não iniciada].

EF: PA ___/___ | FC ___ | Peso ___ kg | IMC ___ | CA ___ cm | SpO2 ___% .
  BEG, corado, eupneico. ACV: RCR 2T BNF sem sopros; sem turgência jugular. AR: MV+ sem RA.
  EXTR: sem edema; sítio de punção [radial/femoral] sem pseudoaneurisma, sem sopro, sem hematoma; pulso distal presente.

EXAMES: LDL ___ | não-HDL ___ | HbA1c ___ | Cr ___ (TFG ___) | Hb ___ | K ___ | TGO/TGP ___ | CPK (se sintoma muscular) ___ .
  ECG: ____________ . Eco (__/__): ____________ . Teste funcional/angioTC (__/__): ____________ .

# CHECKLIST DE ANTIAGREGAÇÃO (ACC/AHA 2025)
Início da DAPT: __/__/____ → tempo decorrido: ___ meses.
Esquema atual: AAS 100 mg/dia + [clopidogrel 75 mg/dia / ticagrelor 90 mg 12/12 h / prasugrel 10 mg/dia].
Risco isquêmico: [alto / não alto] — critérios: ____________ .
Risco de sangramento (ARC-HBR / PRECISE-DAPT ___ ): [alto / não alto].
DECISÃO:
  [ ] Manter DAPT até completar 12 meses pós-SCA (padrão em quem não tem alto risco de sangramento).
  [ ] Alto risco de sangramento → desescalonar para monotomia com ticagrelor (ou clopidogrel) após 1–3 meses.
  [ ] Já completou o período → manter monoterapia antiplaquetária indefinidamente (AAS 100 mg/dia ou clopidogrel 75 mg/dia).
  [ ] Indicação concomitante de anticoagulação → DAPT abreviada (1–4 semanas) e depois DOAC + clopidogrel; ao completar 12 meses, DOAC isolado.

# METAS DE PREVENÇÃO SECUNDÁRIA
LDL <50 mg/dL (muito alto risco) ou <30 mg/dL se risco extremo, com redução ≥50% do basal → atual ___ .
Não-HDL: alvo correspondente → atual ___ . PA <130/80 → atual ___/___ . HbA1c individualizada → atual ___% .
IMC alvo ___ . Cessação total do tabagismo. Atividade física ≥150 min/semana.

CONDUTA:
1. Antiagregação: ____________ .
2. Estatina de alta intensidade: [atorvastatina 40–80 mg / rosuvastatina 20–40 mg] à noite. Se fora da meta,
   associar ezetimiba 10 mg/dia; se ainda fora, considerar iPCSK9 ou ácido bempedoico.
3. Betabloqueador: ____________ (indicação mais forte se FEVE reduzida, angina ou arritmia).
4. IECA/BRA: ____________ (indicado se HAS, DM, DRC ou FEVE ≤40%).
5. iSGLT2 / AR GLP-1 se DM2 com DCV estabelecida: ____________ .
6. Antianginoso adicional se sintomático: ____________ .
7. Reabilitação cardiovascular supervisionada — encaminhado.
8. Solicito: ____________ . Retorno em ___ meses.
9. Orientado: procurar PS imediatamente se dor torácica em repouso >20 min, sudorese, dispneia aguda ou síncope;
   NÃO suspender antiagregante por conta própria — qualquer procedimento deve ser discutido com o cardiologista.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Consulta de cardiometabolismo — painel de metas",
    texto: `AMBULATÓRIO DE CARDIOMETABOLISMO — __/__/____

Paciente ___ anos, sexo ___ , com [HAS / DM2 / dislipidemia / obesidade / SAOS / esteatose hepática].

SUBJETIVO: Assintomático do ponto de vista cardiovascular. Nega dor torácica, dispneia, edema, palpitação, claudicação.
  Adesão medicamentosa: ____________ . Efeitos adversos: [nega / mialgia / tosse / edema / hipoglicemia / sintomas GI].
  Hipoglicemias: [nega / ___ episódios/semana, sintomáticas ___ ].
  MRPA/MAPA (__/__): média ___/___ mmHg. Automonitorização glicêmica: jejum ___ , pós-prandial ___ .
  Dieta: ____________ . Atividade física: ___ min/semana. Sono: ___ h, ronco/apneia [sim/não], Epworth ___ .

EF: PA sentado (média de 2 medidas) ___/___ mmHg | FC ___ | Peso ___ kg (anterior ___ kg, Δ ___ kg / ___%)
  Altura ___ m | IMC ___ kg/m² | Circunferência abdominal ___ cm | SpO2 ___% .
  BEG, corado, eupneico, sem xantelasma, sem acantose nigricans / com acantose nigricans em ____________ .
  ACV: RCR 2T BNF sem sopros; sem turgência jugular. Carótidas sem sopros.
  AR: MV+ sem RA. ABD: globoso à custa de adiposidade, indolor, sem visceromegalias, sem sopros.
  EXTR: sem edema; pulsos periféricos presentes e simétricos; ITB D ___ / E ___ .
  PÉS (se DM): pele íntegra, sem úlceras, sem deformidades; monofilamento de 10 g preservado em ___ pontos;
  sensibilidade vibratória preservada; pulsos pediosos e tibiais posteriores presentes.
  Fundoscopia / retinografia (__/__): ____________ .

# PAINEL DE METAS
| Parâmetro           | Atual        | Meta                                   | Situação |
| PA                  | ___/___      | <130/80 (idoso robusto <140/80)        | ___      |
| LDL-c               | ___          | <___ conforme risco (ver abaixo)        | ___      |
| Não-HDL             | ___          | LDL alvo + 30                           | ___      |
| Triglicérides       | ___          | <150 mg/dL                              | ___      |
| Lp(a) (1× na vida)  | ___          | <50 mg/dL                               | ___      |
| HbA1c               | ___          | <7% (individualizar 7,5–8% em idoso/frágil) | ___  |
| TFG / RAC urinária  | ___ / ___    | estável / RAC <30 mg/g                  | ___      |
| Peso / IMC / CA     | ___ / ___ / ___ | perda de 5–10% do peso                | ___      |
| Tabagismo           | ___          | cessação total                          | ___      |

Metas de LDL por categoria de risco (SBC 2025): baixo <130 | intermediário <100 | alto <70 | muito alto <50 | extremo <30.
Redução percentual mínima: risco alto/muito alto/extremo ≥50%; baixo/intermediário ≥30%.
Estratificação atual: ____________ (PREVENT ___% | CAC ___ UA).

EXAMES (__/__): CT ___ | LDL ___ | HDL ___ | TG ___ | não-HDL ___ | ApoB ___ | Lp(a) ___
  Glicemia ___ | HbA1c ___ | Insulina ___ | Cr ___ (TFG ___) | RAC urinária ___ | K ___ | Na ___
  TGO ___ TGP ___ GGT ___ | TSH ___ | Ácido úrico ___ | Hb ___ | Vit D ___ .

CONDUTA:
1. Anti-hipertensivos: ____________ . (1ª linha: tiazídico, IECA, BRA ou BCC di-hidropiridínico;
   preferir combinação em dose fixa desde o início se PA ≥20/10 mmHg acima da meta.)
2. Hipolipemiante: estatina de alta intensidade ____________ ; associar ezetimiba se fora da meta;
   considerar iPCSK9 / ácido bempedoico se persistir fora da meta em muito alto/extremo risco.
3. Antidiabéticos: metformina ____________ + [iSGLT2 se DCV/IC/DRC] + [AR GLP-1 se DCV estabelecida ou obesidade].
   Semaglutida 2,4 mg/semana se DCV estabelecida com sobrepeso/obesidade (SELECT).
4. Obesidade: déficit de 500–750 kcal/dia + exercício aeróbico e resistido. Meta de perda ___%.
   Farmacoterapia: ____________ . Avaliar cirurgia bariátrica se IMC ≥35 com risco CV moderado/alto.
5. Rastreamentos: retinografia anual, RAC urinária anual, exame dos pés anual, polissonografia se Epworth alto/ronco.
6. Solicito: ____________ . Retorno em ___ meses.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Consulta de miocardiopatia",
    texto: `AMBULATÓRIO DE MIOCARDIOPATIAS — __/__/____

Paciente ___ anos, sexo ___ , com miocardiopatia [hipertrófica / dilatada / restritiva / arritmogênica / não compactada /
chagásica / amiloidose (ATTR / AL) / periparto / induzida por quimioterapia], diagnosticada em ___ .
Etiologia investigada: ____________ . Teste genético: [não realizado / ____________ ].

SUBJETIVO: NYHA ___ . Angina [ausente/presente]. Pré-síncope/síncope: [nega / ___ episódios, contexto ____________ ].
  Palpitação: ____________ . Dispneia aos esforços: ____________ . Ortopneia/DPN: ____________ .
  Choque de CDI: [não / ___ em __/__ , apropriado/inapropriado].
  Adesão medicamentosa: ____________ . Restrição de esportes competitivos orientada: [sim/não].
  História familiar: morte súbita <50 anos em ____________ ; miocardiopatia em ____________ ;
  rastreio familiar realizado em: ____________ .

EF: PA ___/___ | FC ___ | FR ___ | SpO2 ___% | Peso ___ kg | IMC ___ .
  BEG, corado, eupneico, sem estase jugular a 45°.
  PRECÓRDIO: ictus [normal / desviado para ___ , difuso / propulsivo].
  ACV: RCR/irregular em 2T, [BNF / B1 hipofonética], [sem sopros / sopro sistólico ejetivo em foco aórtico que
  AUMENTA com Valsalva e ortostatismo — sugestivo de obstrução da via de saída do VE], [B3 / B4 presente].
  AR: MV+ [sem RA / estertores em bases]. ABD: [sem hepatomegalia / fígado a ___ cm do RCD].
  EXTR: [sem edema / edema ___/4+]. Sinais de amiloidose sistêmica: síndrome do túnel do carpo bilateral ___ ,
  macroglossia ___ , equimose periorbitária ___ , neuropatia periférica ___ , estenose de canal lombar ___ .

EXAMES:
  ECG (__/__): ritmo ___ , ____________ (baixa voltagem? pseudo-infarto? HVE? bloqueios?).
  Ecocardiograma (__/__): FEVE ___% , DDVE ___ mm, septo ___ mm, PP ___ mm, IMVE ___ g/m², AE ___ mL/m² ,
    gradiente VSVE repouso ___ / Valsalva ___ mmHg, SIV/PP ___ , strain longitudinal global ___% ,
    padrão de apical sparing [sim/não], E/e' ___ , PSAP ___ mmHg, VD ____________ .
  RM cardíaca (__/__): ____________ (realce tardio: extensão e padrão; T1 nativo; volume extracelular).
  Cintilografia com pirofosfato (se suspeita de ATTR): Perugini grau ___ .
  Eletroforese de proteínas + cadeias leves livres séricas + imunofixação (soro e urina): ____________ .
  Holter 24 h (__/__): ____________ (TVNS? carga de extrassístoles?).
  Teste ergométrico / ergoespirometria: ____________ (VO2 pico ___ , resposta pressórica ____________ ).
  Sorologia para Chagas (se aplicável): ____________ . BNP/NT-proBNP: ___ . Troponina: ___ .

# ESTRATIFICAÇÃO DE MORTE SÚBITA
Prevenção secundária (CDI indicado): PCR revertida ___ | TV sustentada com instabilidade ___ .
Fatores de risco (CMH): septo ≥30 mm ___ | síncope inexplicada recente ___ | HF de morte súbita ___ |
  TVNS ao Holter ___ | resposta pressórica anormal ao esforço ___ | realce tardio extenso à RM ___ |
  aneurisma apical ___ | FEVE <50% ___ .  HCM Risk-SCD 5 anos = ___% .
Miocardiopatia dilatada: FEVE ___% após ≥3 meses de TMO otimizada; NYHA ___ ; expectativa de vida >1 ano com boa qualidade.
→ INDICAÇÃO DE CDI: [não indicado / a discutir / indicado — encaminhado à eletrofisiologia].

AVALIAÇÃO: ____________ .

CONDUTA:
1. Terapia medicamentosa: ____________ .
   (CMH obstrutiva: betabloqueador → verapamil/diltiazem → disopiramida; inibidor de miosina cardíaca se disponível;
    EVITAR vasodilatadores, diuréticos em excesso e digoxina.
    CMD: 4 pilares da IC-FEr — ver seção de medicações.
    ATTR-CM: tafamidis se elegível; evitar betabloqueador/BCC em doses altas; cuidado com digoxina.)
2. Anticoagulação: ____________ (indicada em CMH com FA independentemente do CHA2DS2-VA; trombo intracavitário).
3. Restrição de exercício competitivo de alta intensidade: ____________ .
4. Rastreio familiar em parentes de 1º grau: ECG + ecocardiograma [+ teste genético se mutação identificada].
   Periodicidade: a cada 1–2 anos em adolescentes; 3–5 anos em adultos. Familiares orientados: ____________ .
5. Solicito: ____________ . Retorno em ___ meses.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "IC crônica — consulta com titulação dos 4 pilares",
    texto: `AMBULATÓRIO DE INSUFICIÊNCIA CARDÍACA — __/__/____

Paciente ___ anos, sexo ___ , com IC [FEr ≤40% / FElm 41–49% / FEp ≥50%], FEVE ___% (__/__),
etiologia [isquêmica / hipertensiva / chagásica / valvar / idiopática / alcoólica / quimioterapia / periparto / ____________ ],
diagnóstico em ___ . Estágio ACC/AHA ___ . Internações por IC nos últimos 12 meses: ___ .

SUBJETIVO: NYHA ___ (anterior ___). Ortopneia ___ travesseiros. DPN [sim/não]. Edema de MMII [sim/não].
  Tolerância ao esforço: caminha ___ metros / sobe ___ lances sem parar.
  Peso hoje ___ kg (seco ___ kg). Variação recente: ___ kg. Pesagem diária [faz/não faz].
  Adesão: [boa / parcial — ____________ ]. Restrição de sal e água: [segue / não segue].
  Sintomas limitantes de titulação: tontura ___ , hipotensão sintomática ___ , bradicardia ___ , disfunção erétil ___ ,
  cãibras ___ , piora de função renal ___ , hipercalemia ___ .

EF: PA ___/___ | FC ___ | FR ___ | SpO2 ___% | Peso ___ kg | IMC ___ .
  BEG, corado, eupneico, sem estase jugular a 45° [ou turgência ___ cm]. RHJ [ausente/presente].
  ACV: RCR/irregular em 2T, [BNF], [sem sopros / sopro ___ ], [sem B3 / B3 presente]. Ictus [normal/desviado].
  AR: MV+ bilateralmente [sem RA / estertores em bases].
  ABD: [sem hepatomegalia / fígado a ___ cm do RCD], [sem ascite].
  EXTR: [sem edema / edema ___/4+, cacifo ___ ], extremidades [quentes/frias], perfusão ___ s.

EXAMES: NT-proBNP ___ (anterior ___) | Cr ___ (TFG ___) | Ur ___ | Na ___ | K ___ | Hb ___ |
  Ferritina ___ | IST ___% | TSH ___ | HbA1c ___ | Ácido úrico ___ | TGO/TGP ___ .
  ECG: ritmo ___ , QRS ___ ms, [BRE presente/ausente]. Eco (__/__): FEVE ___% , DDVE ___ , AE ___ , PSAP ___ , IM ___ , IT ___ .

# STATUS DOS 4 PILARES (IC-FEr)
| Pilar                        | Droga e dose atual      | Dose-alvo               | Ação hoje |
| 1. ARNI / IECA / BRA         | ____________            | ____________            | ___       |
| 2. Betabloqueador            | ____________            | ____________            | ___       |
| 3. ARM (espirono/eplerenona) | ____________            | 25–50 mg/dia            | ___       |
| 4. iSGLT2 (dapa/empa)        | ____________            | 10 mg/dia (dose única)  | ___       |
Diurético de alça: ____________ (menor dose que mantém euvolemia).
Adjuvantes considerados: ivabradina (RS + FC ≥70 com BB otimizado) ___ | hidralazina+nitrato ___ |
  digoxina ___ | vericiguat (após piora recente) ___ | ferro EV (ferritina <100 ou 100–299 com IST <20%) ___ .

Dispositivos: CDI [indicado/implantado/não indicado] | TRC [indicado se FEVE ≤35%, RS, BRE com QRS ≥150 ms
  após ≥3 meses de TMO otimizada] — status: ____________ .

AVALIAÇÃO: IC ___ , NYHA ___ , [compensada / descompensada], [euvolêmica / congesta].
  TMO [otimizada / em titulação — ___% das doses-alvo].
  Sinais de IC avançada: NYHA III–IV persistente, ≥1 internação em 12 meses, FEVE ≤30%, intolerância a TMO
  por hipotensão, disfunção renal progressiva, necessidade de inotrópico, VO2 pico <12–14 mL/kg/min.
  → [ausentes / presentes: ____________ ]
  PERFIL INTERMACS: ____ + modificador [A arritmia / TCS / FF reinternações frequentes]
    4 = sintomas em repouso sem inotrópico, diurético em dose alta ("frequent flyer")
    5 = restrito ao domicílio; confortável em repouso, incapaz de atividade fora de casa
    6 = fadiga após poucos minutos de atividade significativa ("walking wounded")
    7 = NYHA III avançada, estável, sem instabilidade recente — apenas vigiar
  → Encaminhamento ao grupo de IC avançada e transplante: [não indicado / indicado — encaminhado em __/__ ].
    Gatilhos para encaminhar: INTERMACS 4–6, ≥2 internações em 12 meses, dependência de inotrópico,
    intolerância a IECA/ARNI/BB por hipotensão, hiponatremia persistente, Cr em ascensão, caquexia.

CONDUTA:
1. Titulação de hoje: ____________ . Reavaliar função renal e K em 1–2 semanas após cada ajuste.
2. Diurético: ____________ (ajustar pelo peso e congestão, não fixar dose alta indefinidamente).
3. Corrigir: ferropenia ___ , anemia ___ , disfunção tireoidiana ___ , FA ___ , SAOS ___ , HAS ___ , DM ___ .
4. Vacinação: influenza anual, pneumocócica, COVID-19 — [em dia / orientada].
5. Reabilitação cardiovascular supervisionada — encaminhado.
6. Educação: pesagem diária, restrição de sódio <2 g/dia, restrição hídrica ___ mL/dia,
   reconhecer sinais de descompensação, não usar AINE, evitar automedicação.
7. Solicito: ____________ . Retorno em ___ [semanas para titulação / meses].
8. Procurar PS se: ganho de peso >2 kg em 3 dias, dispneia em repouso, ortopneia nova, síncope, palpitação sustentada.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Avaliação de IC avançada — INTERMACS e candidatura a transplante/DAV",
    texto: `AVALIAÇÃO DE INSUFICIÊNCIA CARDÍACA AVANÇADA — __/__/____

# IDENTIFICAÇÃO E SÍNTESE
Paciente ___ anos, sexo ___ , com IC-FEr (FEVE ___% em __/__ ), etiologia ____________ ,
diagnóstico em ___ . NYHA ___ . Estágio ACC/AHA ___ .
Internações por IC nos últimos 12 meses: ___ | Idas ao PS: ___ | Dias em inotrópico nos últimos 6 meses: ___ .

# CRITÉRIOS DE IC AVANÇADA (checar)
[ ] Sintomas graves e persistentes — NYHA III–IV apesar de TMO otimizada
[ ] Disfunção ventricular grave: FEVE ≤30%, VD isolado disfuncionante ou valvopatia grave inoperável
[ ] ≥1 internação não planejada por IC nos últimos 12 meses
[ ] Intolerância a TMO por hipotensão, disfunção renal ou hipercalemia
[ ] Capacidade funcional gravemente reduzida: TC6M <300 m ou VO2 pico <12–14 mL/kg/min
→ [não preenche / preenche ___ critérios]

# CLASSIFICAÇÃO INTERMACS
PERFIL: ______  Modificador: [ A arritmia | TCS suporte temporário | FF reinternações frequentes | nenhum ]
  1 Choque crítico apesar de inotrópico/vasopressor em dose crescente ...... intervenção em HORAS
  2 Declínio progressivo em inotrópico estável ou crescente ................ intervenção em DIAS
  3 Estável, porém dependente de inotrópico, com falha de desmame .......... intervenção em SEMANAS
  4 Sintomas em repouso sem inotrópico, diurético em dose alta ............. semanas a meses
  5 Restrito ao domicílio; incapaz de atividade fora de casa ............... variável
  6 Fadiga após poucos minutos de atividade significativa .................. variável
  7 NYHA III avançada, estável, sem instabilidade recente .................. não candidato imediato
Perfil anterior (data ___): ______ → trajetória: [melhorando / estável / deteriorando].

# DADOS QUE SUSTENTAM A CLASSIFICAÇÃO
Peso ___ kg (seco ___ ) | PA ___/___ | FC ___ | Perfusão ___ s | Extremidades [quentes/frias]
Diurético atual: ____________ | Inotrópico: ____________ (desde __/__ )
Doses de TMO alcançadas: ARNI/IECA ___% do alvo | BB ___% | ARM ___ | iSGLT2 ___
Motivo de não titular: [hipotensão / bradicardia / DRC / hipercalemia / intolerância — ____________ ]
Na ___ mEq/L (hiponatremia persistente é marcador de mau prognóstico) | Cr ___ (basal ___ ) | Ur ___
NT-proBNP ___ (anterior ___ ) | Bilirrubina ___ | Albumina ___ | Hb ___ | Ferritina/IST ___
TC6M ___ m | Ergoespirometria (__/__): VO2 pico ___ mL/kg/min, VE/VCO2 ___ , ___% do previsto
Cateterismo direito (__/__): PAD ___ | PAP ___/___ (média ___) | POAP ___ | IC ___ L/min/m² |
  RVP ___ UW | gradiente transpulmonar ___ | gradiente diastólico pulmonar ___ | teste de reversibilidade: ____________
Eco (__/__): FEVE ___% , DDVE ___ , IM ___ , IT ___ , TAPSE ___ , PSAP ___ , trombo [ausente/presente]
Dispositivos: CDI [sim/não] | TRC [sim/não] — resposta: ____________

# AVALIAÇÃO DE CANDIDATURA
Contraindicações absolutas rastreadas: hipertensão pulmonar fixa irreversível ___ | neoplasia ativa ___ |
  infecção ativa não controlada ___ | disfunção orgânica irreversível (hepática/renal) ___ |
  doença vascular ou cerebrovascular grave ___ | uso ativo de substâncias ___ | não adesão documentada ___ .
Relativas / a otimizar: IMC ___ | DM com lesão de órgão-alvo ___ | DRC (TFG ___) ___ | fragilidade ___ |
  suporte social ___ | perfil psicossocial ___ .
Avaliações complementares pendentes: odontológica ___ | dermatológica ___ | sorologias ___ |
  rastreio oncológico por idade ___ | tipagem e painel de anticorpos (PRA) ___ | psicologia/serviço social ___ .

# CONCLUSÃO E PLANO
Paciente classificado como INTERMACS ___ (modificador ___ ).
[ ] Não é candidato no momento — otimizar TMO e reavaliar em ___ meses.
[ ] Encaminhado para avaliação formal de transplante cardíaco — iniciada em __/__ .
[ ] Indicação de DAV como [ponte para transplante / ponte para decisão / terapia de destino] — discutido em __/__ .
[ ] Suporte circulatório mecânico temporário indicado AGORA — equipe acionada às ___h.
[ ] Cuidados paliativos / manejo sintomático — metas de cuidado discutidas com paciente e família em __/__ .

Discussão realizada com: ____________ (grupo de IC avançada / cirurgia cardíaca / equipe de transplante).
Paciente e família informados sobre prognóstico, opções e riscos. Dúvidas sanadas.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Pós-transplante cardíaco — seguimento",
    texto: `AMBULATÓRIO DE TRANSPLANTE CARDÍACO — __/__/____

Paciente ___ anos, transplantado em __/__/____ (___ meses de pós-transplante).
Doença de base: ____________ . Doador: ____________ . Isquemia fria ___ min.
Indução: ____________ . Rejeições prévias: ____________ (data/grau/tratamento).
CMV: doador ___ / receptor ___ . Última biópsia endomiocárdica (__/__): ISHLT grau ___ ; AMR ___ .

SUBJETIVO: Assintomático. Nega dispneia (NYHA ___), edema, palpitação, síncope, febre, tosse, diarreia,
  sintomas urinários, lesões cutâneas novas. Ganho ponderal ___ kg.
  Adesão à imunossupressão: [rigorosa / falhas — ____________ ]. Horários corretos [sim/não].
  Efeitos adversos: tremor ___ , parestesia ___ , cefaleia ___ , hiperplasia gengival ___ , hirsutismo ___ ,
  diarreia ___ , náusea ___ , edema ___ , alteração visual ___ .
  Exposições de risco: contatos infecciosos, viagens, jardinagem, animais — ____________ .

EF: PA ___/___ | FC ___ (habitualmente 90–110 bpm por denervação) | FR ___ | Tax ___ °C | SpO2 ___% | Peso ___ kg | IMC ___ .
  BEG, corado, hidratado, afebril, eupneico, sem estase jugular.
  ACV: RCR em 2T, BNF, sem sopros, sem B3, sem atrito pericárdico.
  AR: MV+ bilateralmente sem RA. ABD: plano, flácido, indolor, sem visceromegalias.
  EXTR: sem edema. PELE: exame dermatológico — sem lesões suspeitas [ou ____________ ]; sem candidíase oral.
  Ferida operatória: cicatrizada, sem instabilidade esternal.

EXAMES (__/__):
  Nível sérico: tacrolimo ___ ng/mL (alvo ___ ) | ciclosporina C0/C2 ___ (alvo ___ ) | sirolimo/everolimo ___ (alvo ___ ).
  Hb ___ | Leuco ___ | Linfócitos ___ | Plaq ___ | Cr ___ (TFG ___) | Ur ___ | K ___ | Mg ___ |
  TGO ___ TGP ___ | Glicemia ___ | HbA1c ___ | LDL ___ | Ácido úrico ___ | PCR ___ .
  CMV PCR ___ | EBV ___ | Sorologias/rastreios: ____________ .
  ECG: ____________ . Eco (__/__): FEVE ___% , sem derrame pericárdico, ____________ .
  DSA (anticorpos doador-específicos): ____________ .
  Coronariografia / US intracoronário para DAVE do enxerto (__/__): ____________ .

AVALIAÇÃO: Pós-transplante cardíaco em ___ meses, [sem evidência de rejeição / em investigação de ____________ ],
  imunossupressão [em nível terapêutico / fora do alvo], [sem / com] complicações: ____________ .

CONDUTA:
1. Imunossupressão: tacrolimo ___ mg 12/12 h + micofenolato ___ mg 12/12 h + prednisona ___ mg/dia.
   [Manter / ajustar para ____________ ] conforme nível e tempo de transplante.
2. Profilaxias conforme fase: ____________ (SMZ-TMP para Pneumocystis; valganciclovir para CMV se indicado;
   antifúngico/nistatina conforme protocolo). Vacinas INATIVADAS em dia; vacinas de vírus vivo CONTRAINDICADAS.
3. Rastreamento de DAVE do enxerto: coronariografia/USIC anual ou conforme protocolo — próximo em ___ .
   Estatina indicada para todos (reduz DAVE e mortalidade, além do efeito lipídico).
4. Controle de comorbidades pós-transplante: HAS ____________ , DM ____________ , DRC ____________ ,
   dislipidemia ____________ , osteoporose ____________ .
5. Rastreamento oncológico: dermatológico anual (uso de filtro solar e fotoproteção reforçados),
   além dos rastreios habituais por idade e sexo.
6. Biópsia endomiocárdica: próxima em ___ , conforme protocolo/suspeita clínica.
7. Orientações: NÃO usar medicação nova sem checar interação (macrolídeos, azóis, diltiazem, verapamil,
   erva-de-são-joão e suco de toranja alteram nível de inibidor de calcineurina). Procurar o serviço se febre,
   dispneia, edema, ganho de peso rápido, diarreia persistente ou síncope.
8. Solicito: ____________ . Retorno em ___ .

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Consulta de valvopatia",
    texto: `AMBULATÓRIO DE VALVOPATIA — __/__/____

Paciente ___ anos, sexo ___ , com [estenose aórtica / insuficiência aórtica / estenose mitral / insuficiência mitral
primária ou secundária / valvopatia tricúspide / prótese ____________ ], de etiologia [degenerativa / reumática /
congênita (valva bicúspide) / endocardite prévia / funcional], grau [leve / moderado / grave].
Prótese (se aplicável): [biológica / mecânica], posição ____________ , implantada em __/__/____ .

SUBJETIVO: [Assintomático / sintomático]: dispneia NYHA ___ , angina ___ , síncope ou pré-síncope ___ ,
  palpitação ___ , ortopneia/DPN ___ , edema ___ , fadiga ___ .
  Limitação para atividades habituais: ____________ . Redução de atividade autoimposta [sim/não].
  Se prótese mecânica: INR atual ___ , faixa-alvo ___ , tempo em faixa terapêutica ___% , sangramentos ___ .
  Profilaxia de endocardite: [orientado / carteirinha entregue]. Saúde bucal: última avaliação odontológica ___ .
  Febre, perda de peso, sudorese noturna: [nega / ____________ ].

EF: PA ___/___ | FC ___ | FR ___ | SpO2 ___% | Peso ___ kg | IMC ___ .
  BEG, corado, eupneico, afebril. Sem estigmas de endocardite (petéquias, lesões de Janeway, nódulos de Osler,
  manchas de Roth, hemorragias subungueais). Sem estase jugular a 45° [ou onda ___ proeminente].
  PRECÓRDIO: ictus [normal / desviado para ___ / propulsivo / hipercinético]. Frêmito [ausente / presente em foco ___ ].
  AUSCULTA: ritmo [regular / irregular] em 2T.
    B1 ___ | B2 ___ [normofonética / hipofonética / desdobramento ___ ] | B3 ___ | B4 ___ | estalido de abertura ___ .
    SOPRO: foco ___ , [sistólico / diastólico / contínuo], intensidade ___/6 (Levine), [ejetivo / holossistólico /
    protodiastólico / mesodiastólico com reforço pré-sistólico], irradiação para ____________ ,
    manobras: [aumenta com Valsalva / aumenta com handgrip / aumenta na inspiração (Rivero-Carvallo)].
    Clique protossistólico ___ . Click de prótese metálica [presente e normofonético / abafado].
  Pulso: [parvus et tardus / célere e amplo (Corrigan) / alternante]. Sinais periféricos de IAo: ____________ .
  AR: MV+ [sem RA / estertores em bases]. ABD: [fígado ___ / ascite ___ ]. EXTR: [edema ___ ].

EXAMES:
  ECG (__/__): ritmo ___ , [HVE / sobrecarga de AE / FA / bloqueios ____________ ].
  ECOCARDIOGRAMA (__/__): FEVE ___% , DDVE ___ mm, DSVE ___ mm (indexado ___ mm/m²), AE ___ mL/m² , PSAP ___ mmHg.
    EAo: Vmáx ___ m/s | Gradiente médio ___ mmHg | AVA ___ cm² (indexada ___ cm²/m²) | fluxo [normal/baixo] | strain ___% .
    IM: mecanismo ____________ | vena contracta ___ mm | ERO ___ cm² | volume regurgitante ___ mL | fração ___% .
    IAo: vena contracta ___ | PHT ___ ms | fluxo reverso holodiastólico em aorta descendente [sim/não].
    EM: área valvar ___ cm² | gradiente médio ___ mmHg | escore de Wilkins ___ .
    IT: vena contracta ___ | ERO ___ | dilatação do anel ___ | função do VD (TAPSE ___ , S' ___ ).
    Prótese: gradiente médio ___ mmHg | área efetiva ___ cm² | leak [ausente / peri/intraprotético ___ ].
  Ecocardiograma de estresse / teste ergométrico (se assintomático "aparente"): ____________ .
  BNP/NT-proBNP: ___ (elevação desproporcional favorece intervenção).
  AngioTC de coronárias / coronariografia pré-intervenção: ____________ .
    (ESC/EACTS 2025: angioTC de coronárias é recomendada antes da intervenção valvar em pacientes com
     probabilidade pré-teste de DAC obstrutiva baixa ou moderada.)
  RM cardíaca / TC para planejamento de TAVI: ____________ .

# GATILHOS DE INTERVENÇÃO — checar objetivamente
Estenose aórtica grave: [ ] sintomática  [ ] FEVE <50%  [ ] sintomas ao teste de esforço
  [ ] assintomática com EAo muito grave (Vmáx >5,5 m/s), progressão rápida ou BNP muito elevado
Insuficiência mitral primária grave: [ ] sintomática  [ ] FEVE ≤60%  [ ] DSVE ≥40 mm (ou indexado elevado)
  [ ] FA de novo  [ ] PSAP >50 mmHg  [ ] assintomática com alta probabilidade de reparo durável em centro de referência
Insuficiência aórtica grave: [ ] sintomática  [ ] FEVE ≤50%  [ ] DSVE >50 mm ou >25 mm/m²
Estenose mitral grave (área ≤1,5 cm²): [ ] sintomática  [ ] PSAP >50 mmHg  [ ] FA nova
Tricúspide: [ ] grave com sintomas ou disfunção progressiva do VD  [ ] concomitante a cirurgia de valva esquerda
→ Situação atual: ____________ .

AVALIAÇÃO: ____________ . Risco cirúrgico estimado: STS ___% | EuroSCORE II ___% | fragilidade ____________ .

CONDUTA:
1. [ ] Seguimento clínico e ecocardiográfico — periodicidade: EAo grave assintomática 6 meses / moderada 1 ano /
       leve 2–3 anos; IM grave assintomática 6 meses. Próximo eco em ___ .
2. [ ] Encaminhamento ao HEART TEAM / Centro de Valva para discussão de [SVAo cirúrgica / TAVI / reparo mitral /
       TEER / comissurotomia mitral percutânea / cirurgia combinada]. Justificativa: ____________ .
3. Medicações: ____________ . (Não há terapia que altere a progressão da EAo; tratar HAS e IC associadas com cautela.)
4. Anticoagulação: ____________ . Prótese mecânica → varfarina com INR alvo [aórtica 2,0–3,0 / mitral 2,5–3,5];
   DOAC CONTRAINDICADO em prótese mecânica e em estenose mitral reumática moderada/grave.
5. Profilaxia de endocardite (amoxicilina 2 g VO 30–60 min antes de procedimento dentário com manipulação gengival):
   indicada por [prótese valvar / endocardite prévia / cardiopatia congênita cianótica / transplantado com valvopatia].
   Orientado sobre higiene bucal e avaliação odontológica periódica.
6. Orientações de esforço: ____________ . Procurar PS se dispneia progressiva, síncope, angina ou febre persistente.
7. Solicito: ____________ . Retorno em ___ meses.

Assinatura / CRM`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Cardiometabolismo (HAS, DM2 e dislipidemia)",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) Losartana 50 mg -------------------------------------------
Tomar 01 comprimido de 12 em 12 horas

2) Anlodipino 5 mg -------------------------------------------
Tomar 01 comprimido ao dia, à noite

3) Hidroclorotiazida 25 mg -----------------------------------
Tomar 01 comprimido ao dia, pela manhã

4) Atorvastatina 40 mg ---------------------------------------
Tomar 01 comprimido ao dia, à noite

5) Ezetimiba 10 mg -------------------------------------------
Tomar 01 comprimido ao dia, à noite

6) Metformina XR 500 mg --------------------------------------
Tomar 02 comprimidos ao dia, após o jantar

7) Dapagliflozina 10 mg --------------------------------------
Tomar 01 comprimido ao dia, pela manhã

USO SUBCUTÂNEO

8) Semaglutida 0,25 mg ---------------------------------------
Aplicar 01 vez por semana, sempre no mesmo dia
(aumentar para 0,5 mg após 4 semanas, conforme orientação)

ORIENTAÇÕES
- Reduzir o sal: no máximo 1 colher de chá rasa por dia, somando tudo.
- Evitar embutidos, enlatados, temperos prontos e caldos concentrados.
- Atividade física aeróbica de 150 minutos por semana, divididos em 5 dias.
- Aferir a pressão em casa 2 vezes por semana, sentado e em repouso, e anotar.
- Não suspender nenhuma medicação por conta própria.
- Retornar em ___ meses trazendo os exames solicitados.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Pós-angioplastia / DAC crônica",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) AAS 100 mg ------------------------------------------------
Tomar 01 comprimido ao dia, após o almoço, de uso contínuo

2) Ticagrelor 90 mg ------------------------------------------
Tomar 01 comprimido de 12 em 12 horas, por ___ meses
(ou: Clopidogrel 75 mg — tomar 01 comprimido ao dia por ___ meses)

3) Atorvastatina 80 mg ---------------------------------------
Tomar 01 comprimido ao dia, à noite

4) Succinato de metoprolol 50 mg -----------------------------
Tomar 01 comprimido ao dia, pela manhã

5) Enalapril 10 mg -------------------------------------------
Tomar 01 comprimido de 12 em 12 horas

6) Omeprazol 20 mg -------------------------------------------
Tomar 01 comprimido ao dia, em jejum
(enquanto estiver em uso de dois antiagregantes)

USO ORAL, SE NECESSÁRIO

7) Dinitrato de isossorbida 5 mg (sublingual) ----------------
Colocar 01 comprimido embaixo da língua em caso de dor no peito.
Se a dor não passar em 5 minutos, repetir mais 01 comprimido.
Se após 3 comprimidos a dor continuar, PROCURAR O PRONTO-SOCORRO.

ORIENTAÇÕES
- NÃO interromper o AAS nem o segundo antiagregante por conta própria.
  Antes de qualquer cirurgia ou procedimento dentário, avisar o cardiologista.
- Procurar o pronto-socorro imediatamente se: dor no peito em repouso por mais
  de 20 minutos, suor frio, falta de ar súbita ou desmaio.
- Parar de fumar completamente.
- Iniciar reabilitação cardiovascular conforme encaminhamento.
- Retornar em ___ meses trazendo os exames solicitados.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Insuficiência cardíaca com FE reduzida (4 pilares)",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) Sacubitril/Valsartana 49/51 mg ----------------------------
Tomar 01 comprimido de 12 em 12 horas
(iniciar com 24/26 mg de 12 em 12 horas se pressão baixa)

2) Carvedilol 6,25 mg ----------------------------------------
Tomar 01 comprimido de 12 em 12 horas, junto com as refeições

3) Espironolactona 25 mg -------------------------------------
Tomar 01 comprimido ao dia, pela manhã

4) Dapagliflozina 10 mg --------------------------------------
Tomar 01 comprimido ao dia, pela manhã

5) Furosemida 40 mg ------------------------------------------
Tomar 01 comprimido ao dia, pela manhã
(ajustar conforme peso e inchaço, segundo orientação médica)

ORIENTAÇÕES
- PESAR-SE TODOS OS DIAS, em jejum, após urinar, com a mesma balança e roupa leve.
  Anotar o peso. Procurar atendimento se ganhar mais de 2 kg em 3 dias.
- Restrição de líquidos: ______ ml por dia, contando água, sucos, café, chá e sopa.
- Restrição de sal: no máximo 1 colher de chá rasa por dia.
- NÃO usar anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida) — pioram a IC.
- Procurar o pronto-socorro se: falta de ar em repouso, falta de ar ao deitar,
  inchaço que piora, desmaio ou palpitação que não para.
- As doses serão aumentadas aos poucos nas próximas consultas. Não parar sozinho.
- Retornar em ___ semanas para ajuste, com exames de sangue (ureia, creatinina, potássio).

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Fibrilação atrial (anticoagulação e controle de FC)",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) Rivaroxabana 20 mg ----------------------------------------
Tomar 01 comprimido ao dia, sempre junto com o jantar
(alternativa: Apixabana 5 mg — tomar 01 comprimido de 12 em 12 horas)

2) Succinato de metoprolol 50 mg -----------------------------
Tomar 01 comprimido ao dia, pela manhã

3) Atorvastatina 20 mg ---------------------------------------
Tomar 01 comprimido ao dia, à noite

4) Losartana 50 mg -------------------------------------------
Tomar 01 comprimido de 12 em 12 horas

ORIENTAÇÕES
- O anticoagulante previne AVC. NÃO pode ser esquecido nem interrompido.
  A rivaroxabana precisa ser tomada junto com comida para ser absorvida.
- Se esquecer uma dose: tomar assim que lembrar no mesmo dia. NUNCA dobrar a dose.
- Avisar QUALQUER médico ou dentista de que usa anticoagulante, antes de procedimentos.
- Procurar atendimento se: sangramento que não para, sangue nas fezes ou na urina,
  vômito com sangue, dor de cabeça forte e súbita, ou após queda com batida na cabeça.
- Procurar o pronto-socorro se: palpitação com falta de ar, dor no peito ou desmaio.
- Evitar excesso de álcool e de cafeína.
- Retornar em ___ meses com hemograma e função renal.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Prótese valvar mecânica (varfarina)",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) Varfarina 5 mg --------------------------------------------
Tomar ____ comprimido(s) ao dia, sempre no mesmo horário,
conforme o resultado do INR. Alvo de INR: ______

2) Succinato de metoprolol 25 mg -----------------------------
Tomar 01 comprimido ao dia, pela manhã

3) Furosemida 40 mg ------------------------------------------
Tomar 01 comprimido ao dia, pela manhã

ORIENTAÇÕES
- O anticoagulante é OBRIGATÓRIO e para o resto da vida. Sem ele, a prótese pode
  formar coágulo e travar. NÃO usar nenhum outro anticoagulante no lugar da varfarina.
- Colher INR a cada ______ e trazer TODOS os resultados nas consultas.
- Manter a alimentação CONSTANTE. Não é proibido comer verdura escura (couve, brócolis,
  espinafre, alface) — o importante é não variar muito a quantidade de um dia para o outro.
- Evitar bebida alcoólica em excesso.
- NÃO tomar anti-inflamatórios nem antibióticos sem avisar o médico: muitos remédios
  alteram o efeito da varfarina. Para dor ou febre, usar dipirona ou paracetamol.
- Antes de qualquer procedimento dentário, tomar Amoxicilina 2 g (04 comprimidos de 500 mg)
  em dose única, 30 a 60 minutos antes — prevenção de endocardite.
- Manter a higiene bucal em dia e ir ao dentista periodicamente.
- Procurar atendimento se: sangramento que não para, febre persistente, falta de ar,
  ou se notar que o barulho da prótese (clique) mudou ou sumiu.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Miocardiopatia / Chagas",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) Sacubitril/Valsartana 24/26 mg ----------------------------
Tomar 01 comprimido de 12 em 12 horas

2) Carvedilol 3,125 mg ---------------------------------------
Tomar 01 comprimido de 12 em 12 horas, junto com as refeições

3) Espironolactona 25 mg -------------------------------------
Tomar 01 comprimido ao dia, pela manhã

4) Dapagliflozina 10 mg --------------------------------------
Tomar 01 comprimido ao dia, pela manhã

5) Furosemida 40 mg ------------------------------------------
Tomar 01 comprimido ao dia, pela manhã

6) Amiodarona 200 mg -----------------------------------------
Tomar 01 comprimido ao dia
(apenas se houver arritmia documentada)

7) Varfarina 5 mg --------------------------------------------
Tomar ____ comprimido(s) ao dia, conforme INR (alvo 2,0 a 3,0)
(apenas se houver trombo, aneurisma apical ou fibrilação atrial)

ORIENTAÇÕES
- Pesar-se todos os dias em jejum e anotar. Procurar atendimento se ganhar
  mais de 2 kg em 3 dias.
- Restrição de sal e de líquidos conforme orientação.
- Procurar o pronto-socorro se: desmaio, palpitação prolongada, falta de ar em
  repouso ou choque do desfibrilador (se for portador de CDI).
- Se usa amiodarona: fazer exames de tireoide, fígado e radiografia de tórax
  periodicamente, conforme solicitado.
- Retornar em ___ meses com exames.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Pós-transplante cardíaco",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO — NÃO INTERROMPER EM HIPÓTESE ALGUMA

1) Tacrolimo ____ mg -----------------------------------------
Tomar conforme prescrito, de 12 em 12 horas, SEMPRE no mesmo horário
(em jejum: 1 hora antes ou 2 horas depois das refeições)

2) Micofenolato de mofetila 500 mg ---------------------------
Tomar ____ comprimido(s) de 12 em 12 horas

3) Prednisona 5 mg -------------------------------------------
Tomar ____ comprimido(s) ao dia, pela manhã, após o café

4) Sulfametoxazol + Trimetoprima 400/80 mg -------------------
Tomar 01 comprimido ao dia (ou 3 vezes por semana, conforme protocolo)

5) Atorvastatina 20 mg ---------------------------------------
Tomar 01 comprimido ao dia, à noite

6) Omeprazol 20 mg -------------------------------------------
Tomar 01 comprimido ao dia, em jejum

ORIENTAÇÕES
- Os imunossupressores são para a vida toda e nos MESMOS horários todos os dias.
  Esquecer doses é a principal causa de rejeição.
- No dia da coleta do nível de tacrolimo, NÃO tomar a dose da manhã antes do exame.
- NÃO usar nenhum remédio novo, chá ou suplemento sem avisar a equipe do transplante.
  Antibióticos, antifúngicos e alguns remédios de pressão alteram muito o nível do
  imunossupressor. Evitar erva-de-são-joão e suco de toranja (grapefruit).
- Vacinas de vírus VIVO são PROIBIDAS. As demais devem estar em dia.
- Usar protetor solar diariamente e fazer avaliação com dermatologista uma vez por ano.
- Procurar a equipe se: febre, falta de ar, inchaço, ganho rápido de peso, diarreia
  persistente, desmaio ou qualquer infecção.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Prevenção primária / primeiro atendimento",
    texto: `RECEITUÁRIO
Paciente: ______________________________________  Data: __/__/____

USO ORAL E CONTÍNUO

1) Rosuvastatina 10 mg ---------------------------------------
Tomar 01 comprimido ao dia, à noite

2) Losartana 50 mg -------------------------------------------
Tomar 01 comprimido ao dia
(iniciar apenas se houver indicação de tratar a pressão)

ORIENTAÇÕES NÃO MEDICAMENTOSAS — a base do tratamento
- Alimentação: preferir comida de verdade, com verduras, legumes, frutas, grãos
  integrais, peixe e azeite. Reduzir ultraprocessados, frituras e refrigerantes.
- Sal: no máximo 1 colher de chá rasa por dia, somando toda a comida do dia.
- Atividade física: 150 minutos por semana de caminhada rápida, bicicleta ou natação,
  divididos em pelo menos 5 dias, mais 2 dias de exercício de força.
- Peso: meta de perder ______ kg até a próxima consulta.
- Tabagismo: parar completamente. Encaminhado para ______________________.
- Álcool: no máximo ______ dose(s) por dia.
- Sono: 7 a 8 horas por noite. Investigar apneia do sono se houver ronco alto.
- Aferir a pressão em casa 2 vezes por semana, em repouso, e anotar.

EXAMES PARA O RETORNO
Hemograma, glicemia de jejum, hemoglobina glicada, colesterol total e frações,
triglicérides, ureia, creatinina, sódio, potássio, TGO, TGP, TSH, ácido úrico,
urina tipo 1 e relação albumina/creatinina urinária.

Retornar em ___ meses trazendo os exames.

______________________________________
Assinatura e carimbo

[Ajustar fármacos e doses conforme cada paciente.]`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Estado geral, pele e perfusão",
    texto: `REG, LOTE, hipocorado +/4+, hidratado, anictérico, acianótico, afebril. Perfusão periférica de 3 s.
MEG, sonolento, hipocorado 3+/4+, desidratado 2+/4+, ictérico 2+/4+, acianótico, febril (Tax 38,4 °C). Perfusão >3 s.
REG, emagrecido, com sinais de perda de massa muscular temporal e de interósseos (caquexia cardíaca).
Pele com livedo reticular em MMII e joelhos, moteamento (mottling score ___), extremidades frias e pálidas.
Cianose central em lábios e língua / cianose periférica em extremidades.
Icterícia 2+/4+ de escleras. Turgor cutâneo diminuído, mucosas secas, olhos encovados.
Lesão por pressão em região sacral, estágio ___ , medindo ___ cm, leito ____________ , sem sinais de infecção.
Anasarca: edema de MMII 4+/4+, edema de parede abdominal, edema escrotal e edema periorbitário.
Petéquias em MMII / equimoses espontâneas em ____________ . Sangramento em sítio de punção.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Cardiovascular — inspeção, palpação, ausculta",
    texto: `Turgência jugular patológica a 45°, com estase até ângulo da mandíbula. Refluxo hepatojugular presente.
Pulso venoso jugular com onda v proeminente (insuficiência tricúspide) / onda a em canhão (dissociação AV).
Sinal de Kussmaul presente (aumento da turgência à inspiração) — sugere pericardite constritiva ou disfunção de VD.
Ictus desviado para a linha axilar anterior, no 6º EIE, difuso, ocupando 3 polpas digitais, propulsivo.
Frêmito sistólico em foco aórtico / frêmito diastólico em foco mitral.
Ritmo cardíaco irregularmente irregular, sem onda P audível, com déficit de pulso de ___ bpm.
Bulhas hipofonéticas e abafadas (considerar derrame pericárdico / obesidade / DPOC).
B3 audível em foco mitral, em decúbito lateral esquerdo — sugere sobrecarga de volume e disfunção sistólica.
B4 audível — sugere disfunção diastólica / hipertrofia ventricular.
Hiperfonese de B2 em foco pulmonar — sugere hipertensão pulmonar.
Desdobramento fixo de B2 (CIA) / desdobramento paradoxal de B2 (BRE, estenose aórtica grave).
Atrito pericárdico audível em borda esternal esquerda baixa, trifásico, que aumenta na expiração e com o paciente inclinado à frente.
SOPRO SISTÓLICO ejetivo em foco aórtico, 3/6, em crescendo-decrescendo, irradiando para carótidas — estenose aórtica.
SOPRO SISTÓLICO holossistólico em foco mitral, 3/6, irradiando para axila — insuficiência mitral.
SOPRO SISTÓLICO em foco tricúspide que aumenta à inspiração (sinal de Rivero-Carvallo) — insuficiência tricúspide.
SOPRO DIASTÓLICO aspirativo em borda esternal esquerda, 2/4, em decrescendo, melhor audível na expiração com o paciente sentado e inclinado — insuficiência aórtica.
SOPRO DIASTÓLICO em ruflar, com reforço pré-sistólico, precedido de estalido de abertura, em foco mitral — estenose mitral.
SOPRO CONTÍNUO em maquinaria em região infraclavicular esquerda — persistência do canal arterial.
Sopro que AUMENTA com Valsalva e ortostatismo e diminui com handgrip — sugere CMH obstrutiva.
Pulso parvus et tardus (estenose aórtica) / pulso célere e amplo de Corrigan (insuficiência aórtica) / pulso alternante (disfunção sistólica grave) / pulso paradoxal >10 mmHg (tamponamento, asma grave).
Pulsos periféricos: pedioso e tibial posterior ausentes à direita; femoral presente e reduzido; sopro em femoral direita.
Assimetria de PA entre membros superiores de ___ mmHg — atenção para dissecção de aorta ou coarctação.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Respiratório",
    texto: `Taquipneico (FR ___ irpm), com uso de musculatura acessória, tiragem intercostal e batimento de asa de nariz.
Fala em frases entrecortadas / monossilábica. Dispneia em repouso.
Expansibilidade diminuída em base direita, com FTV diminuído e macicez à percussão — sugere derrame pleural.
MV diminuído em base esquerda, abolido a partir do ___ EIC, com egofonia acima do nível do derrame.
MV presente bilateralmente com estertores crepitantes finos em bases / em terços médios e inferiores / difusos.
Estertores subcrepitantes grossos difusos, com roncos de transmissão.
Sibilos expiratórios difusos, com tempo expiratório prolongado.
Tórax silencioso, com MV globalmente diminuído — atenção: broncoespasmo grave.
Hipertimpanismo e MV abolido em hemitórax direito com desvio de traqueia para a esquerda — pneumotórax hipertensivo (drenar imediatamente).
Secreção traqueal em grande quantidade, aspecto purulento e amarelado, com odor fétido.
Padrão respiratório de Cheyne-Stokes / respiração de Kussmaul.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Abdome, extremidades e vascular",
    texto: `Abdome globoso, à custa de ascite, com macicez móvel de decúbito e piparote presente. Circulação colateral ____________ .
Fígado palpável a ___ cm do rebordo costal direito, de borda romba, superfície lisa, doloroso à palpação (hepatomegalia congestiva).
Refluxo hepatojugular presente. Baço palpável a ___ cm do RCE. Traube ocupado.
Abdome doloroso à palpação em ____________ , com descompressão brusca [negativa/positiva], sem massas palpáveis.
Massa pulsátil e expansível em região periumbilical — investigar aneurisma de aorta abdominal.
RHA ausentes / hipoativos / hiperativos e metálicos.
Edema de MMII simétrico, ___/4+, com cacifo, mole e frio, até ___ (joelho / raiz da coxa).
Edema assimétrico de MIE, com aumento de perimetria de ___ cm, empastamento de panturrilha, dor à dorsiflexão do pé (sinal de Homans) e circulação colateral superficial — investigar TVP.
Membro inferior direito frio, pálido, com ausência de pulsos poplíteo, tibial posterior e pedioso, parestesia e redução da força — isquemia arterial aguda.
Lesão ulcerada em maléolo medial esquerdo, medindo ___ × ___ cm, bordas irregulares, fundo com tecido de granulação, exsudato ____________ , com dermatite ocre e lipodermatoesclerose perilesional — úlcera venosa.
Úlcera em região plantar/calcâneo, com bordas em saca-bocado, fundo necrótico, indolor, sem sangramento — úlcera neuropática/isquêmica.
Necrose seca de ___ pododáctilos do pé direito, com linha de demarcação em ____________ , sem secreção e sem crepitação.
Necrose úmida com secreção purulenta, odor fétido, crepitação à palpação e celulite ascendente até ____________ — emergência cirúrgica.
Panturrilhas livres e indolores à palpação, sem empastamento.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Neurológico, sedação e dispositivos",
    texto: `Vigil, orientado em tempo e espaço, Glasgow 15 (AO4 RV5 RM6), pupilas isocóricas e fotorreagentes, sem déficit motor ou sensitivo, força grau V globalmente, sem sinais meníngeos, sem alterações de pares cranianos.
Sonolento, Glasgow ___ (AO___ RV___ RM___), desperta ao chamado verbal e volta a dormir.
Torporoso, responde apenas a estímulo doloroso com retirada, pupilas ___ mm, fotorreagentes.
Agitado, tentando remover dispositivos, RASS +2 — CAM-ICU POSITIVO (delirium hiperativo).
Hipoativo, desatento, com flutuação do nível de consciência — CAM-ICU POSITIVO (delirium hipoativo).
Sedado, RASS -4 (alvo -2), sob fentanil ___ mcg/kg/h e midazolam ___ mg/kg/h em BIC. Sem despertar diário nas últimas 24 h.
Sob bloqueio neuromuscular com cisatracúrio ___ mcg/kg/min — TOF ___/4. Sedação profunda garantida.
Hemiparesia à direita grau ___ , com desvio de rima labial para a esquerda e disartria — NIHSS ___ .
Força muscular global reduzida, MRC ___/60 — fraqueza adquirida na UTI.

DISPOSITIVOS:
Acesso venoso central em veia jugular interna direita, implantado em __/__ (D__), curativo limpo e datado, sem sinais flogísticos no sítio de inserção.
Acesso venoso periférico em MSE (D__), pérvio, sem sinais de flebite (escala de flebite grau 0).
PAI em artéria radial esquerda (D__), com curva adequada, sem sinais de isquemia distal.
Cateter de artéria pulmonar (Swan-Ganz) em D__ — PAPm ___ , POAP ___ , IC ___ L/min/m², RVS ___ , SvO2 ___% .
TOT nº ___ , fixado a ___ cm da rima labial (D__), cuff com pressão de ___ cmH2O.
Traqueostomia nº ___ (D__), pérvia, sem sangramento, sem enfisema subcutâneo, óstio sem sinais flogísticos.
Sonda nasoenteral em posição pós-pilórica confirmada por RX (D__), pérvia, dieta em curso, resíduo ___ mL.
Sonda vesical de demora (D__), com urina de aspecto claro/citrino, sistema fechado — reavaliada indicação.
Dreno mediastinal e pleural à esquerda (D__), com débito de ___ mL nas últimas 24 h, aspecto serossanguinolento.
Marcapasso provisório transvenoso em modo VVI ___ bpm, limiar ___ mA, sensibilidade ___ mV (D__).
Fios de marcapasso epicárdico presentes, testados, com limiar ___ mA.
Balão intra-aórtico em 1:1, com curva adequada, posicionado, sem isquemia de membro (D__).`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "SCA com supra de ST (IAMCSST)",
    texto: `CONDUTA — IAM COM SUPRA DE ST — início dos sintomas às ___h

# TEMPO
Início dos sintomas: ___h | Chegada: ___h | ECG diagnóstico: ___h (meta ≤10 min da chegada)
Estratégia: [ICP primária — hemodinâmica acionada às ___h, meta porta-balão ≤90 min /
             Fibrinólise — meta porta-agulha ≤30 min, quando ICP não disponível em ≤120 min]

# MEDIDAS IMEDIATAS
1. Monitorização contínua, desfibrilador à beira-leito, 2 acessos venosos periféricos calibrosos.
2. O2 apenas se SpO2 <90%.
3. AAS 300 mg VO — mastigar e engolir.
4. P2Y12: ticagrelor 180 mg VO (preferencial se ICP primária)
   OU clopidogrel 600 mg VO (300 mg se fibrinólise; SEM ataque se >75 anos com fibrinólise)
   OU prasugrel 60 mg VO (apenas após anatomia; contraindicado se AVC/AIT prévio).
5. Anticoagulação: enoxaparina 30 mg EV em bolus + 1 mg/kg SC 12/12 h (sem bolus e 0,75 mg/kg se >75 anos;
   1 mg/kg 24/24 h se ClCr <30) OU HNF 60 U/kg EV em bolus (máx 4.000 U) + 12 U/kg/h.
6. Analgesia: morfina 2–4 mg EV se dor refratária (usar com parcimônia — retarda absorção de P2Y12).
7. Nitrato: isossorbida 5 mg SL ou nitroglicerina EV se dor/HAS/congestão.
   CONTRAINDICADO se: PAS <90 mmHg, IAM de VD, uso de inibidor de PDE5 nas últimas 24–48 h.
8. Betabloqueador VO nas primeiras 24 h se SEM: IC aguda, baixo débito, risco de choque, BAV avançado, broncoespasmo.
9. Estatina de alta intensidade: atorvastatina 80 mg VO.
10. Se parede inferior: fazer V3R/V4R e V7–V9. Se IAM de VD → volume, EVITAR nitrato e diurético.

# APÓS REPERFUSÃO
• Monitorização em unidade coronariana por ≥24–48 h.
• DAPT por 12 meses (individualizar se alto risco de sangramento).
• IECA/BRA nas primeiras 24 h se FEVE ≤40%, HAS, DM ou DRC.
• ARM (espironolactona/eplerenona) se FEVE ≤40% + IC ou DM, sem hipercalemia ou DRC grave.
• Ecocardiograma antes da alta. Reabilitação cardiovascular. Cessação do tabagismo.
• Metas: LDL <50 mg/dL (redução ≥50%); PA <130/80; HbA1c individualizada.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "SCA sem supra de ST (IAMSSST / angina instável)",
    texto: `CONDUTA — SCA SEM SUPRA DE ST

# ESTRATIFICAÇÃO
GRACE ___ | TIMI ___ | HEART ___ | Troponina us: T0 ___ → T1h/T2h ___ (Δ ___ )
Estratégia invasiva:
  • IMEDIATA (<2 h) — instabilidade hemodinâmica ou elétrica, choque, IC aguda, dor refratária,
    supra transitório, arritmia ventricular grave, complicação mecânica.
  • PRECOCE (<24 h) — GRACE >140, elevação/queda de troponina compatível com IAM, alterações dinâmicas de ST-T.
  • SELETIVA — baixo risco, sem critérios acima → teste funcional ou angioTC de coronárias.

# CONDUTA
1. Monitorização contínua, ECG seriado, acesso venoso, repouso.
2. AAS 300 mg VO ataque → 100 mg/dia.
3. P2Y12: ticagrelor 180 mg → 90 mg 12/12 h. (Prasugrel apenas APÓS conhecer a anatomia — não pré-tratar.
   Clopidogrel 300–600 mg se ticagrelor/prasugrel indisponíveis ou contraindicados, ou se anticoagulado.)
4. Anticoagulação: enoxaparina 1 mg/kg SC 12/12 h OU fondaparinux 2,5 mg SC/dia OU HNF.
5. Betabloqueador VO se sem contraindicação. Nitrato para controle sintomático.
6. Atorvastatina 80 mg/dia (ou rosuvastatina 20–40 mg).
7. IECA/BRA se HAS, DM, DRC ou FEVE ≤40%.
8. Ecocardiograma para avaliar função ventricular e complicações.
9. Se anticoagulação crônica concomitante: manter DOAC + clopidogrel; suspender AAS precocemente (1–4 semanas).

# NÃO ESQUECER
• Reavaliar diagnóstico diferencial se troponina elevada sem doença coronariana obstrutiva (MINOCA, miocardite,
  TEP, sepse, taquiarritmia, DRC, IC): considerar RM cardíaca.
• Definir e documentar a estratégia (invasiva x conservadora) e o prazo.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "Edema agudo de pulmão",
    texto: `CONDUTA — EDEMA AGUDO DE PULMÃO

1. Posição sentada, com pernas pendentes. Monitorização contínua. Acesso venoso.
2. OXIGENAÇÃO: O2 para SpO2 ≥94%.
   → VNI (CPAP 8–10 cmH2O ou BiPAP) precocemente se desconforto respiratório, taquipneia ou hipercapnia.
     Reduz intubação e melhora desfecho. Contraindicada se rebaixamento, instabilidade grave, vômito, trauma de face.
   → Intubação se falha de VNI, rebaixamento, exaustão respiratória ou instabilidade refratária.
3. VASODILATADOR (se PAS >110 mmHg — pilar do tratamento no EAP hipertensivo):
   Nitroglicerina EV 10–20 mcg/min, aumentando 10–20 mcg/min a cada 3–5 min (até 200 mcg/min),
   guiada por PA e sintomas. Alternativa: isossorbida 5 mg SL enquanto prepara a bomba.
   Nitroprussiato se HAS grave refratária ou insuficiência mitral/aórtica aguda.
4. DIURÉTICO: furosemida 20–40 mg EV (ou 1–2,5× a dose oral diária se já usa). Reavaliar em 2 h;
   dobrar se resposta insuficiente. Não é o pilar do EAP hipertensivo (paciente frequentemente é normovolêmico
   com redistribuição de volume) — mas é essencial no paciente congesto.
5. Identificar e tratar o GATILHO: SCA (ECG + troponina), crise hipertensiva, FA de alta resposta,
   insuficiência mitral aguda, endocardite, anemia, infecção, má adesão, disfunção renal.
6. Se hipotensão/hipoperfusão: NÃO usar vasodilatador. Inotrópico (dobutamina) ± noradrenalina.
7. Morfina: NÃO usar de rotina (associada a pior desfecho); reservar para dor ou dispneia muito refratária.
8. Solicitar: ECG, troponina, NT-proBNP, gasometria, eletrólitos, função renal, hemograma, RX de tórax, ecocardiograma.
9. Sondagem vesical para controle de diurese se instabilidade ou necessidade de balanço rigoroso.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "Bundle de sepse (1ª hora)",
    texto: `BUNDLE DE SEPSE — INICIAR NA 1ª HORA

[ ] 1. Dosar LACTATO. Repetir em 2–4 h se >2 mmol/L, até normalizar.
[ ] 2. Colher HEMOCULTURAS (2 pares de sítios distintos) + culturas do foco suspeito — ANTES do antibiótico,
       desde que isso não atrase a 1ª dose em mais de 45 min.
[ ] 3. ANTIBIÓTICO de amplo espectro EV — o mais rápido possível (idealmente <1 h no choque séptico).
       Esquema conforme foco: ____________ .
[ ] 4. CRISTALOIDE BALANCEADO 30 mL/kg EV se hipotensão ou lactato ≥4 mmol/L.
       Individualizar em IC, DRC dialítica e cirrose — reavaliar responsividade a fluido a cada bolus.
[ ] 5. VASOPRESSOR se PAM <65 mmHg após (ou durante) a reposição: NORADRENALINA — pode ser iniciada
       em acesso periférico calibroso enquanto se obtém o central.
[ ] 6. Controle do FOCO em até 6–12 h: drenagem, retirada de cateter, desbridamento, cirurgia.

# REAVALIAÇÃO CONTINUADA
• Perfusão: lactato, tempo de enchimento capilar, débito urinário, nível de consciência, temperatura de extremidades.
• Responsividade a fluidos: elevação passiva de pernas, variação de pressão de pulso, VTI ao POCUS, colapso de VCI.
  NÃO usar PVC isolada como guia.
• Vasopressina 0,03 U/min se noradrenalina em dose crescente (poupador).
• Hidrocortisona 200 mg/dia (50 mg EV 6/6 h) se choque refratário.
• Hemotransfusão se Hb <7 g/dL (<8 se isquemia miocárdica).
• Ventilação protetora se SDRA: Vc 6 mL/kg de peso predito, P plateau <30 cmH2O, driving pressure <15.
• Glicemia alvo 140–180 mg/dL. Profilaxia de TEV e de LAMG. Nutrição enteral precoce.
• Reavaliar espectro do ATB em 48–72 h — DESCALONAR e definir duração.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "FA aguda no PS",
    texto: `CONDUTA — FIBRILAÇÃO ATRIAL AGUDA

# 1. O PACIENTE ESTÁ INSTÁVEL?
Hipotensão, dor torácica isquêmica, IC aguda/EAP, rebaixamento do nível de consciência.
→ SIM: CARDIOVERSÃO ELÉTRICA SINCRONIZADA IMEDIATA.
  Sedação: etomidato 0,15–0,3 mg/kg ou propofol 0,5–1 mg/kg + fentanil 1 mcg/kg.
  Energia bifásica: FA 120–200 J | flutter/TSV 50–100 J | TV monomórfica com pulso 100 J.

# 2. ESTÁVEL — DEFINIR TEMPO E RISCO EMBÓLICO (SBC 2025)
Início dos sintomas: ___ h (janela segura para cardioversão sem anticoagulação prévia: <24 h).
Alto risco embólico = FA valvar, evento embólico prévio ou CHA2DS2-VA ≥2.
  → Se ALTO RISCO: NÃO cardioverter de imediato, mesmo com <24 h. Anticoagular + controlar FC,
    ou realizar ETE para excluir trombo antes de cardioverter.
  → Se BAIXO RISCO e <24 h: cardioversão possível (elétrica ou química).
  → Se ≥24 h ou início indeterminado: controle de FC + anticoagulação plena por ≥3 semanas antes de
    cardioversão eletiva, OU ETE para excluir trombo.

# 3. CONTROLE DE FREQUÊNCIA (meta <110 bpm em repouso)
• Metoprolol 2,5–5 mg EV lento, repetir até 3× (máx 15 mg); depois VO 25–100 mg 12/12 h.
• Diltiazem 0,25 mg/kg EV em 2 min → BIC 5–15 mg/h — se broncoespasmo e FEVE preservada.
  CONTRAINDICADO se IC-FEr.
• Digoxina 0,25 mg EV a cada 2 h (máx 1,5 mg/24 h) — se IC ou hipotensão.
• Amiodarona — se refratário ou disfunção ventricular grave.
• ATENÇÃO: se PRÉ-EXCITAÇÃO (WPW) com FA → NÃO usar bloqueador de nó AV (betabloqueador, BCC, digoxina,
  adenosina). Usar procainamida/amiodarona ou cardioverter eletricamente.

# 4. CONTROLE DE RITMO
• Cardioversão química: amiodarona 150 mg EV em 10 min → 1 mg/min por 6 h.
  Propafenona 450–600 mg VO em dose única (pill-in-the-pocket) — apenas SEM cardiopatia estrutural e SEM DAC;
  associar bloqueador de nó AV para evitar flutter com condução 1:1.
• A SBC 2025 recomenda o controle de ritmo como estratégia preferencial na maioria dos pacientes;
  ablação por cateter é opção de 1ª linha na FA sintomática (paroxística ou persistente).

# 5. ANTICOAGULAÇÃO — CHA2DS2-VA (sexo feminino foi REMOVIDO do escore)
IC 1 | HAS 1 | Idade ≥75 = 2 | DM 1 | AVC/AIT/tromboembolismo = 2 | Doença vascular 1 | Idade 65–74 = 1
→ 0 = não anticoagular | 1 = individualizar | ≥2 = anticoagular.
Anticoagular independentemente do escore: cardiomiopatia hipertrófica, amiloidose cardíaca, hipertireoidismo,
estenose mitral reumática moderada/grave, prótese mecânica.
Após cardioversão: anticoagular por ≥4 semanas, independentemente do escore.
Escolha: DOAC preferencial (exceto prótese mecânica e estenose mitral reumática → varfarina).

# 6. INVESTIGAR CAUSA
TSH, eletrólitos (K, Mg), hemograma, função renal, troponina se dor, ecocardiograma, rastrear SAOS,
álcool, infecção, TEP, pós-operatório.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "Crise hipertensiva — emergência x urgência",
    texto: `CONDUTA — CRISE HIPERTENSIVA

# DEFINIR: HÁ LESÃO AGUDA DE ÓRGÃO-ALVO?
Procurar ativamente: dor torácica (SCA/dissecção), dispneia (EAP), déficit neurológico (AVC), cefaleia com
alteração visual ou confusão (encefalopatia), oligúria/elevação de creatinina, hematúria, papiledema,
eclâmpsia/pré-eclâmpsia grave.

## EMERGÊNCIA HIPERTENSIVA (com lesão de órgão-alvo) — tratamento EV, em unidade monitorizada
Meta geral: reduzir a PAM em ATÉ 25% na 1ª hora, depois para ~160/100 em 2–6 h e normalizar em 24–48 h.
EXCEÇÕES à redução gradual:
  • DISSECÇÃO DE AORTA: PAS <120 mmHg e FC <60 bpm em 20 min. Betabloqueador EV PRIMEIRO (esmolol/metoprolol),
    só depois vasodilatador (nitroprussiato) — para evitar taquicardia reflexa e aumento do dP/dt.
  • AVC ISQUÊMICO: só tratar se PA >220/120 (ou >185/110 se candidato a trombólise). Redução de 15% em 24 h.
  • AVC HEMORRÁGICO: PAS alvo 130–140 mmHg.
  • ECLÂMPSIA: hidralazina ou labetalol + sulfato de magnésio.
Fármacos EV:
  • Nitroprussiato 0,3–10 mcg/kg/min (fotossensível; risco de cianeto)
  • Nitroglicerina 5–200 mcg/min (preferida se SCA ou EAP)
  • Metoprolol 5 mg EV lento, repetir; esmolol 0,5 mg/kg bolus + 50–300 mcg/kg/min
  • Hidralazina 5–10 mg EV a cada 20–30 min (gestação)

## URGÊNCIA HIPERTENSIVA (PA muito elevada SEM lesão aguda de órgão-alvo)
• Repouso em ambiente calmo por 30 min e reaferir — boa parte normaliza.
• Tratar dor, ansiedade, retenção urinária.
• Redução ORAL e gradual em 24–48 h. NÃO usar nifedipino sublingual (risco de isquemia por queda abrupta).
• Reintroduzir/ajustar a medicação de uso habitual; investigar má adesão.
• Alta com reavaliação ambulatorial precoce (dias), não internação.

## PSEUDOCRISE
PA elevada secundária a dor, ansiedade, abstinência ou desconforto, sem lesão de órgão-alvo.
→ Tratar a causa, não a pressão.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "TEP — estratificação e tratamento",
    texto: `CONDUTA — TROMBOEMBOLISMO PULMONAR

# 1. PROBABILIDADE PRÉ-TESTE
Wells: TVP clínica 3 | TEP mais provável que alternativa 3 | FC >100 = 1,5 | imobilização/cirurgia recente 1,5 |
TEP/TVP prévio 1,5 | hemoptise 1 | câncer 1. → ≤4 improvável | >4 provável.
• Improvável → D-dímero (ajustado pela idade se >50 anos: idade × 10 ng/mL). Negativo exclui.
• Provável ou D-dímero positivo → angio-TC de tórax.
• Instável demais para TC → ecocardiograma à beira-leito (disfunção de VD) autoriza tratamento empírico.

# 2. ESTRATIFICAÇÃO DE GRAVIDADE
• ALTO RISCO (maciço): hipotensão (PAS <90 mmHg por >15 min), choque ou PCR.
• RISCO INTERMEDIÁRIO: disfunção de VD (TC/eco) e/ou troponina elevada, sem hipotensão.
    Alto-intermediário = ambos positivos. Baixo-intermediário = apenas um.
• BAIXO RISCO: PESI classe I–II ou sPESI 0, sem disfunção de VD nem biomarcador alterado.

# 3. TRATAMENTO
• ALTO RISCO → TROMBÓLISE sistêmica: alteplase 100 mg EV em 2 h (ou 0,6 mg/kg em 15 min se PCR iminente).
  Se contraindicada ou falha → trombectomia (cateter ou cirúrgica), considerar ECMO. Anticoagular com HNF.
• INTERMEDIÁRIO-ALTO → anticoagulação plena + MONITORIZAÇÃO em unidade fechada;
  trombólise de resgate se deterioração hemodinâmica. Considerar dose reduzida/cateter em centros com experiência.
• BAIXO RISCO / INTERMEDIÁRIO-BAIXO → anticoagulação plena. Baixo risco selecionado pode ser tratado ambulatorialmente.

# 4. ANTICOAGULAÇÃO
• Início: enoxaparina 1 mg/kg SC 12/12 h; ou HNF (preferida se instabilidade, obesidade extrema, ClCr <30
  ou possibilidade de trombólise/procedimento).
• DOAC: rivaroxabana 15 mg 12/12 h por 21 dias → 20 mg/dia; OU apixabana 10 mg 12/12 h por 7 dias → 5 mg 12/12 h.
  Dabigatrana e edoxabana exigem 5 dias de parenteral antes.
• Câncer ativo: DOAC ou HBPM (cuidado com DOAC em tumor GI/GU por sangramento).
• SAF: varfarina (DOAC contraindicado).
• Duração: 3 meses se fator provocador transitório e reversível; indefinida se não provocado com baixo risco
  de sangramento, TEP recorrente, câncer ativo ou trombofilia de alto risco.

# 5. SUPORTE
O2 para SpO2 ≥94%. Cautela com volume (VD já sobrecarregado — no máximo 500 mL).
Se hipotensão: noradrenalina (mantém pressão de perfusão coronariana do VD); dobutamina se baixo débito com VD dilatado.
Investigar TVP com Doppler de MMII. Filtro de veia cava apenas se contraindicação absoluta à anticoagulação.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Admissão pós-ATC (angioplastia)",
    texto: `Admito paciente após angioplastia coronariana transluminal percutânea (ATC).

Assintomático no momento, nega desconforto torácico, dispneia, palpitações ou sintomas neurológicos. Estável hemodinamicamente, em monitorização contínua.

Sítio de punção [radial direita / radial esquerda / femoral direita / femoral esquerda] com bom aspecto, sem sangramento ativo, hematoma ou expansão. Pulsos distais presentes e simétricos; extremidade bem perfundida, sem sinais de isquemia.

[Acesso radial: pulseira pneumática instalada, em retirada gradual da pressão pela enfermagem conforme protocolo.]
[Acesso femoral: introdutor ____F (____) — compressão manual/mecânica realizada por ____ min; curativo compressivo em bom estado.]

ECG pós-procedimento sem novos sinais de isquemia em relação ao prévio.

Dados do procedimento:
- Vaso/lesão tratada: ____
- Stent: ____ (tipo/quantidade)
- Heparina administrada às ____ h
- Contraste utilizado: ____ mL

Conduta: mantenho monitorização, hidratação e medicações conforme prescrição. Reavaliações seriadas do sítio de punção e do estado clínico.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Admissão pós-CATE (diagnóstico)",
    texto: `Admito paciente após cateterismo cardíaco diagnóstico.

Assintomático no momento, nega desconforto torácico, dispneia ou palpitações. Estável hemodinamicamente.

Sítio de punção [radial direita / radial esquerda / femoral direita / femoral esquerda] com bom aspecto, sem sangramento ativo, hematoma ou expansão. Pulsos distais presentes e simétricos; extremidade bem perfundida.

[Acesso radial: pulseira pneumática em retirada gradual pela enfermagem conforme protocolo.]
[Acesso femoral: introdutor ____F (____) — compressão por ____ min; curativo compressivo em bom estado.]

ECG pós-procedimento sem alterações isquêmicas agudas em relação ao prévio.
Contraste utilizado: ____ mL.

Resultado/Plano: ____ (ex.: coronárias sem lesões obstrutivas / lesão em ____ — programar ATC / encaminhar para CRM / seguimento clínico).`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Exame físico (masc./fem.)",
    texto: `Sinais vitais: PA ____ x ____ mmHg | FC ____ bpm | FR ____ irpm | SatO2 ____% em ar ambiente | Tax ____ °C | HGT ____ mg/dL.

>> Masculino:
Bom estado geral, consciente e orientado, corado, hidratado, acianótico, anictérico, afebril.
AR: murmúrio vesicular presente bilateralmente, sem ruídos adventícios; eupneico em ar ambiente.
ACV: ritmo cardíaco regular, bulhas normofonéticas em 2 tempos, sem sopros.
Abdome: plano, flácido, indolor à palpação, sem visceromegalias.
Extremidades: bem perfundidas, sem edema de membros inferiores, panturrilhas livres; pulsos periféricos presentes e simétricos.
Sítio de punção: sem sangramento, hematoma ou sinais flogísticos.

>> Feminino:
Bom estado geral, consciente e orientada, corada, hidratada, acianótica, anictérica, afebril.
AR: murmúrio vesicular presente bilateralmente, sem ruídos adventícios; eupneica em ar ambiente.
ACV: ritmo cardíaco regular, bulhas normofonéticas em 2 tempos, sem sopros.
Abdome: plano, flácido, indolor à palpação, sem visceromegalias.
Extremidades: bem perfundidas, sem edema de membros inferiores, panturrilhas livres; pulsos periféricos presentes e simétricos.
Sítio de punção: sem sangramento, hematoma ou sinais flogísticos.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Orientações pós-procedimento",
    texto: `ORIENTAÇÕES GERAIS PÓS-PROCEDIMENTO

- Não realizar esforços físicos com o membro por onde foi feito o exame por 48 horas.
- Alimentar-se normalmente ou conforme orientação médica e da enfermagem.
- Manter o local da punção limpo e seco; retirar o curativo após 12 horas da alta hospitalar.
- Observar o local da punção quanto a: saída de secreção, endurecimento, coloração arroxeada, inchaço, dor ou sangramento.
- Em caso de sangramento ativo, comprimir o local com firmeza e procurar atendimento imediatamente.
- Caso apresente qualquer dos sinais acima — ou dor torácica, falta de ar, palpitações, desmaio ou febre — procurar atendimento médico próximo à residência ou o Pronto-Socorro de referência.
- Não dirigir por 72 horas após o exame.
- Não pegar peso (acima de 5 kg) por 3 dias com o membro utilizado no exame.
- Não ter relações sexuais por 24 horas após o exame.
- Ingerir bastante líquido (água) nas próximas horas, salvo contraindicação, para auxiliar na eliminação do contraste.
- Tomar as medicações normalmente, conforme orientação médica; não suspender a dupla antiagregação por conta própria.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Conduta / discussão com preceptoria",
    texto: `Conforme discutido com a preceptoria:
- Prescrevo dupla antiagregação plaquetária (DAPT) + estatina de alta potência.
- Mantenho demais medicamentos de uso habitual.
- Oriento paciente e familiares; reforço mudanças de estilo de vida (cessação do tabagismo, dieta, atividade física e adesão medicamentosa).
- Oriento sinais de alarme e retorno ao Pronto-Socorro se necessário.
- Coletados dados de contato; entraremos em contato após agendamento de ATC da lesão em ____.
  Telefone(s) do paciente: ____`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Alta pós-angioplastia (fluxo)",
    texto: `ALTA — PÓS-ANGIOPLASTIA NO MESMO DIA (lembrete de fluxo)

- Coletar telefone do paciente.
- Entregar papel para coleta de exames.
- Avisar no grupo de altas (enfermagem liga no dia seguinte e agenda retorno).
- Entregar receita + laudo do procedimento.
- Reforçar orientações e sinais de alarme.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Receita básica",
    texto: `USO ORAL E CONTÍNUO

1) Losartana 50 mg --------------------------------------------
Tomar 01 comprimido de 12 em 12 horas

2) Atorvastatina 80 mg ---------------------------------------
Tomar 01 comprimido à noite

3) Anlodipino 10 mg ------------------------------------------
Tomar 01 comprimido à noite

4) AAS 100 mg -----------------------------------------------
Tomar 01 comprimido no almoço

5) Clopidogrel 75 mg ----------------------------------------
Tomar 01 comprimido ao dia por ____

6) Succinato de Metoprolol 25 mg ----------------------------
Tomar 01 comprimido ao dia

[Ajustar fármacos e doses conforme cada paciente.]`
  }
];
