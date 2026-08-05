// Modelos de evolução, exame físico e receitas — prontos para copiar e colar.
//
// Convenção de formatação (revisão de 04/08/2026):
//   - O texto já vem escrito na forma afirmativa e plausível. Você edita o que difere.
//   - O único marcador de campo é ___ (três traços). Datas: __/__/____ .
//   - Sem colchetes de alternativa, sem bullets e sem linhas de traços longos.
//   - Onde há uma decisão real, as opções vêm numeradas e a escolha é registrada
//     numa linha "Conduta adotada: ___".
//
// Conteúdo revisado em 04/08/2026: AHA/ACC TEP 2026 (categorias A–E), SBC HAS 2025
// (fim do termo urgência hipertensiva), betabloqueador pós-IAM (REDUCE-AMI e REBOOT),
// Surviving Sepsis 2026 e terapias atuais para ATTR-CM.
// Backup da versão anterior: assets/js/data-evolucoes.ORIGINAL-2026-08-03.js.bak
window.EVOLUCOES = [
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Evolução diária — paciente em VM/TQT + DVA + sedação",
    texto: `EVOLUÇÃO — ROP CRÔNICOS — D___ de internação / ___º DPO de ___

SÍNTESE
Paciente de ___ anos, internado em __/__/____ por ___.
Antecedentes: ___.
Cirurgia: ___ em __/__/____ , com CEC de ___ min e pinçamento de ___ min.
Permanece internado por ___.

ÚLTIMAS 24 HORAS
Plantão sem intercorrências. Sem febre, sem sangramento e sem arritmia sustentada.
Diurese mantida. Dieta enteral em curso, sem resíduo aumentado.
Família comunicada em __/__/____ .

EXAME FÍSICO

GERAL: regular estado geral, corado, hidratado, anictérico, acianótico, afebril.
Perfusão periférica menor que 3 segundos.

NEURO: sedado, RASS ___ para alvo ___, em fentanil e midazolam contínuos.
Pupilas isocóricas e fotorreagentes.

RESP: em ventilação mecânica por traqueostomia, modo ___, FiO2 ___%, PEEP ___,
volume corrente ___ mL (___ mL/kg de peso predito), FR ___, pressão de platô ___,
driving pressure ___ e complacência ___.
Murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Secreção traqueal em pequena quantidade, de aspecto claro. SpO2 ___%.
Gasometria das ___h: pH ___, pCO2 ___, pO2 ___, HCO3 ___, BE ___, lactato ___, relação P/F ___.

CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
PA ___/___ mmHg, PAM ___, FC ___ bpm, ritmo sinusal ao monitor.
Sem turgência jugular a 45 graus. Extremidades quentes e bem perfundidas.
Noradrenalina ___ mcg/kg/min, estável em relação a ontem. PVC ___ mmHg.

ABD: plano, flácido, ruídos hidroaéreos presentes, indolor, sem visceromegalias.
Sonda enteral em posição, resíduo de ___ mL.

FERIDA OPERATÓRIA: esternotomia com bordas coaptadas, seca, sem sinais flogísticos
e sem instabilidade esternal. Safenectomia limpa.
Drenos: ___, com débito de ___ mL em 24 h, de aspecto ___.

EXTREMIDADES: sem edema. Panturrilhas livres. Pulsos periféricos presentes e simétricos.

DISPOSITIVOS: acesso venoso central em ___ (D___), PAI em ___ (D___), sonda vesical (D___),
traqueostomia (D___), dreno ___ (D___). Pele íntegra, sem lesão por pressão. Braden ___.

BALANÇO E DÉBITOS EM 24 H
Balanço hídrico ___ mL, acumulado ___ mL. Diurese ___ mL (___ mL/kg/h).
Débito de dreno ___ mL.

EXAMES DE __/__/____
Hb ___ · Ht ___ · Leuco ___ (bastões ___) · Plaquetas ___
Ureia ___ · Creatinina ___ (basal ___) · Na ___ · K ___ · Mg ___ · Ca iônico ___ · P ___
PCR ___ · Lactato ___ · Procalcitonina ___
TGO ___ · TGP ___ · Bilirrubina total ___ · Albumina ___ · INR ___ · TTPa ___
Glicemias: ___ · ___ · ___ · ___
Culturas: ___

PROBLEMAS ATIVOS
1. ___
2. ___
3. ___

Se houver disfunção ventricular ou dependência de inotrópico, registrar:
Stevenson ___ · SCAI ___ · INTERMACS ___ (ontem ___), com modificador ___.
Dias em inotrópico ___. Tentativas de desmame ___. Motivo da falha: ___.
Trajetória: ___ — ver item 9 da conduta.

CONDUTA
1. Mantenho o suporte ventilatório atual. Teste de respiração espontânea se ___.
2. Desmame de noradrenalina mantendo PAM acima de 65 mmHg.
3. Sedação ajustada para RASS alvo ___, com despertar diário programado.
4. Mantenho antibioticoterapia com ___, no D___ de ___.
5. Reposição eletrolítica conforme resultados.
6. Profilaxia de TEV com ___. Profilaxia de lesão aguda de mucosa gástrica com ___.
7. Mantenho nutrição enteral a ___ mL/h, com meta de ___ kcal/dia e ___ g/kg/dia de proteína.
8. Mobilização precoce, com fisioterapia motora e respiratória.
9. Solicito: ___.
10. Discussão com a equipe cirúrgica e com a família: ___.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Pós-operatório imediato de cirurgia cardíaca (POI–PO2)",
    texto: `EVOLUÇÃO — ROP — POI DE ___ (CEC ___ min / pinçamento ___ min)

SÍNTESE
Paciente de ___ anos, submetido a ___ em __/__/____ .
Achado intraoperatório: ___. Sem intercorrência intraoperatória.
Recebeu ___ concentrados de hemácias, ___ plasmas, ___ plaquetas e ___ crioprecipitados.
Chegou à unidade às ___h, em ventilação mecânica, em uso de ___.

EXAME FÍSICO

GERAL: regular estado geral, hipocorado ___/4+, perfusão de ___ segundos,
extremidades ___, temperatura axilar ___ °C.

NEURO: sedado, RASS ___. Pupilas isocóricas e fotorreagentes.
Sem déficit motor evidente à mobilização.

RESP: ventilação mecânica em PCV, FiO2 ___%, PEEP ___, volume corrente ___ mL, FR ___.
Murmúrio vesicular presente bilateralmente, sem ruídos adventícios. SpO2 ___%.

CV: ritmo ___ ao monitor. PA ___/___ mmHg, PAM ___, PVC ___ mmHg.
Bulhas normofonéticas, sem sopros novos e sem atrito pericárdico. Sem pulso paradoxal.
Drogas vasoativas: noradrenalina ___ mcg/kg/min, dobutamina ___ mcg/kg/min,
milrinona ___ mcg/kg/min.
Fios de marcapasso epicárdico presentes e testados, com limiar de ___ mA.

DRENOS: mediastinal ___ mL/h, pleural ___ mL/h. Aspecto serossanguinolento, sem coágulos.

ABD: plano, flácido, ruídos hidroaéreos presentes, indolor.

EXTREMIDADES: pulsos presentes e simétricos. Safenectomia limpa.

CONTROLES
Balanço hídrico desde a chegada: ___ mL. Diurese ___ mL/h.
Gasometria arterial: pH ___, pCO2 ___, pO2 ___, HCO3 ___, BE ___, lactato ___, SvcO2 ___%.
Hb ___ · Plaquetas ___ · INR ___ · TTPa ___ · Fibrinogênio ___
K ___ · Mg ___ · Ca iônico ___ · Glicemia ___
ECG: ___. Radiografia de tórax: ___.
Ecocardiograma à beira-leito: FEVE ___%, sem derrame pericárdico significativo, VD ___.

AVALIAÇÃO
Pós-operatório imediato de ___, hemodinamicamente estável em desmame de droga vasoativa.

CONDUTA
1. Metas: PAM entre 65 e 80 mmHg, índice cardíaco acima de 2,2 L/min/m², lactato em queda,
   diurese acima de 0,5 mL/kg/h e SvcO2 acima de 65%.
2. Sangramento: manter Hb acima de 7 a 8 g/dL (acima de 8 se isquemia ativa), plaquetas acima
   de 50.000 (acima de 100.000 se sangrando), INR abaixo de 1,5 e fibrinogênio acima de 150 a
   200 mg/dL. Considerar reabordagem se o débito passar de 200 mL/h por 2 h, de 300 mL em 1 h,
   ou cair de forma abrupta com instabilidade, o que sugere tamponamento.
3. Manter K entre 4,0 e 5,0 mEq/L e Mg acima de 2,0 mg/dL — reposição agressiva reduz
   fibrilação atrial pós-operatória.
4. Betabloqueador por via oral assim que estável, sem droga vasoativa e sem broncoespasmo.
5. Analgesia com dipirona 1 g EV de 6/6 h e morfina de resgate. Evitar anti-inflamatório.
6. Extubar quando desperto, hemodinamicamente estável, com sangramento controlado, normotérmico,
   com gasometria adequada e sem droga vasoativa em dose alta.
7. Profilaxia antibiótica cirúrgica com ___, a suspender em até 48 h.
8. AAS 100 mg/dia a partir de ___ h de pós-operatório, no pós-revascularização.
   Anticoagulação conforme a prótese: ___.
9. Controle glicêmico alvo entre 140 e 180 mg/dL.
10. Mobilização e fisioterapia respiratória desde o pós-operatório imediato.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Paciente crônico estável — desmame / reabilitação prolongada",
    texto: `EVOLUÇÃO — ROP CRÔNICOS — D___ / ___º DPO

Paciente de ___ anos, ___, em programa de desmame ventilatório e reabilitação.

ÚLTIMAS 24 HORAS
Plantão sem intercorrências. Afebril. Tolerou ___ h de nebulização em tubo T.

EXAME FÍSICO
GERAL: bom estado geral, corado, hidratado, afebril, eupneico.
NEURO: desperto, contactuante, obedece comandos, RASS 0, sem déficits.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Secreção traqueal escassa e clara. SpO2 ___% com FiO2 ___%.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
PA ___/___ mmHg, FC ___ bpm. Sem droga vasoativa. Sem turgência jugular.
ABD: plano, flácido, ruídos hidroaéreos presentes, indolor. Dieta enteral bem tolerada.
EXTREMIDADES: sem edema. Força muscular global grau ___ (MRC ___/60). Sem lesão por pressão.
DISPOSITIVOS: traqueostomia nº ___ (D___), sonda enteral (D___), acesso venoso periférico.
Acesso central e sonda vesical retirados em __/__ .
Balanço hídrico em 24 h ___ mL. Diurese ___ mL.

EXAMES: sem exames novos.

AVALIAÇÃO
Em desmame ventilatório progressivo, sem sinais de infecção ativa,
com fraqueza adquirida na UTI.

CONDUTA
1. Progredir o tempo em tubo T conforme a tolerância, com meta de ___ h/dia.
2. Fisioterapia motora e respiratória duas vezes ao dia, com sedestação e ortostatismo assistido.
3. Manter dieta enteral a ___ mL/h, com a nutrologia acompanhando.
   Avaliação de deglutição com a fonoaudiologia para programar a decanulação.
4. Sem indicação de antibiótico no momento.
5. Mantenho profilaxia de TEV e cuidados com a pele, com mudança de decúbito de 2/2 h.
6. Programar decanulação quando houver tosse eficaz, secreção manejável, 48 h sem suporte
   ventilatório e deglutição segura.
7. Discussão de metas de cuidado com a família em __/__ .

Assinatura / CRM`
  },
  {
    grupo: "Plantão — ROP Crônicos",
    nome: "Passagem de plantão — resumo por leito (SBAR)",
    texto: `LEITO ___ · ___ anos · D___ de internação · ___º DPO de ___

SITUAÇÃO
___. Instável em: ___.

BACKGROUND
Antecedentes: ___. Cirurgia de ___ em __/__ . Intercorrências: ___.

AVALIAÇÃO
Hemodinâmica: droga vasoativa a ___ mcg/kg/min, em ___.
Stevenson ___ · SCAI ___ · INTERMACS ___
Ventilação: ___
Infecção: antibiótico ___ no D___ de ___. Culturas: ___
Renal: creatinina ___, diurese ___
Hematologia: Hb ___, plaquetas ___, anticoagulação ___

RECOMENDAÇÃO — O QUE VIGIAR HOJE
1. ___
2. ___
Pendências: ___
Se ___, fazer ___.
Metas de cuidado: ___`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "Evolução diária — UTI clínica",
    texto: `EVOLUÇÃO — UTI PS — D___ de internação

SÍNTESE
Paciente de ___ anos, admitido em __/__/____ por ___.
Antecedentes: ___. Medicações prévias: ___.

ÚLTIMAS 24 HORAS
Plantão sem intercorrências. Afebril.
Sem dor torácica, sem dispneia em repouso, sem palpitação e sem síncope.

EXAME FÍSICO

GERAL: bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico,
afebril (Tax ___ °C). Perfusão periférica menor que 3 segundos.

NEURO: Glasgow 15 (AO4 RV5 RM6). Pupilas isocóricas e fotorreagentes.
Sem déficit focal. CAM-ICU negativo.

RESP: eupneico em ar ambiente. Tórax simétrico, expansibilidade preservada,
frêmito toracovocal normal, som claro pulmonar à percussão.
Murmúrio vesicular presente e simétrico, sem ruídos adventícios. FR ___ irpm. SpO2 ___%.

CV: ictus no 5º espaço intercostal esquerdo na linha hemiclavicular, não propulsivo.
Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem B3 ou B4
e sem atrito. PA ___/___ mmHg (PAM ___), FC ___ bpm.
Pulsos periféricos amplos e simétricos. Sem turgência jugular a 45 graus.
Sem refluxo hepatojugular.

ABD: plano, ruídos hidroaéreos normoativos, flácido, indolor, sem massas
ou visceromegalias. Espaço de Traube livre.

EXTREMIDADES: sem edema. Panturrilhas livres e indolores, sem sinais de TVP.
Pulsos pediosos e tibiais posteriores presentes.

DISPOSITIVOS: ___.

CONTROLES DE 24 H
PA média ___ · FC ___ · Tax máxima ___ · Diurese ___ mL (___ mL/kg/h)
Balanço hídrico ___ mL · Glicemias ___

EXAMES DE __/__
Hb ___ · Ht ___ · Leuco ___ · Plaquetas ___
Ureia ___ · Creatinina ___ · Na ___ · K ___ · Mg ___ · PCR ___ · Lactato ___
Troponina ___ para ___ · BNP/NT-proBNP ___
Gasometria: pH ___, pCO2 ___, pO2 ___, HCO3 ___, BE ___
ECG: ___
Radiografia de tórax: ___
Ecocardiograma: ___

PROBLEMAS ATIVOS
1. ___
2. ___

CONDUTA
1. ___
2. Mantenho ___.
3. Profilaxia de TEV com ___. Profilaxia de lesão aguda de mucosa gástrica com ___.
4. Solicito: ___.
5. Metas de cuidado e comunicação com a família: ___.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "IC descompensada grave / choque cardiogênico",
    texto: `EVOLUÇÃO — UTI PS — IC DESCOMPENSADA / CHOQUE CARDIOGÊNICO — D___

SÍNTESE
Paciente de ___ anos com insuficiência cardíaca, FEVE ___%, etiologia ___, NYHA prévia ___.
Admitido por descompensação. Fator desencadeante: ___.
Gatilhos a procurar sempre: má adesão, infecção, síndrome coronariana aguda, FA de alta resposta,
anemia, disfunção renal e transgressão salina.

PERFIL HEMODINÂMICO
Congestão presente (úmido). Perfusão adequada (quente).
Perfil de Stevenson: ___ (A seco-quente · B úmido-quente · C úmido-frio · L seco-frio).
SCAI de choque: ___ (A risco · B início · C clássico · D deteriorando · E extremo).
INTERMACS: ___, com modificador ___ (A arritmia · TCS suporte temporário · FF reinternações).
  1 choque crítico apesar de inotrópico e vasopressor — intervenção em horas
  2 declínio progressivo em inotrópico — intervenção em dias
  3 estável mas dependente de inotrópico, com falha de desmame — intervenção em semanas
  4 sintomas em repouso sem inotrópico
  5 restrito ao domicílio
  6 limitação após pequenos esforços
  7 NYHA III avançada, estável

EXAME FÍSICO DIRIGIDO

GERAL: regular estado geral, dispneico, ortopneico, sudoreico.
Perfusão periférica de ___ segundos. Extremidades ___.

CV: ictus desviado e difuso. Ritmo cardíaco regular em 2 tempos, com B3 audível em foco mitral.
Sopro ___. PA ___/___ mmHg (PAM ___), FC ___ bpm.
Pressão de pulso proporcional de ___% — abaixo de 25% sugere baixo débito.
Turgência jugular a ___ cm com o paciente a 45 graus. Refluxo hepatojugular presente.

RESP: murmúrio vesicular presente, com estertores crepitantes em ___ terços bilateralmente.
FR ___ irpm, SpO2 ___% em ___.

ABD: fígado a ___ cm do rebordo costal direito, doloroso à palpação. Sem ascite.

EXTREMIDADES: edema de membros inferiores ___/4+, frio, com cacifo.

CONTROLES
Peso hoje ___ kg (ontem ___ kg, na admissão ___ kg).
Balanço hídrico em 24 h ___ mL, acumulado ___ mL. Diurese ___ mL.
Lactato ___ para ___. SvcO2 ___%. Creatinina ___ (basal ___). Na ___. NT-proBNP ___.

DROGAS EM CURSO
Furosemida ___ mg EV de ___/___ h, ou ___ mg/h contínua.
Dobutamina ___ mcg/kg/min · Milrinona ___ mcg/kg/min · Noradrenalina ___ mcg/kg/min
Nitroglicerina ___ mcg/min · Nitroprussiato ___ mcg/kg/min

AVALIAÇÃO
Insuficiência cardíaca descompensada, Stevenson ___, SCAI ___, INTERMACS ___,
respondendo à terapia atual. Síndrome cardiorrenal: ___.
Trajetória em relação a ontem: ___. INTERMACS de ontem: ___.

CONDUTA
1. Diurético de alça endovenoso, com dose inicial de 1 a 2,5 vezes a dose oral diária em bolus,
   ou 20 a 40 mg se virgem de alça. Meta de diurese acima de 100 a 150 mL/h nas primeiras 6 h
   e balanço negativo de 1 a 2 L/dia. Reavaliar em 2 a 6 h: se o sódio urinário estiver abaixo
   de 50 a 70 mEq/L em 2 h, ou a diurese abaixo de 100 mL/h, dobrar a dose.
2. Se a congestão for refratária, associar tiazídico 30 min antes da alça, ou acetazolamida
   500 mg EV/dia (ADVOR), ou considerar ultrafiltração se houver disfunção renal associada.
3. Vasodilatador se a PAS estiver acima de 110 mmHg com congestão pulmonar importante:
   nitroglicerina endovenosa titulada.
4. Inotrópico apenas se houver hipoperfusão (perfis C e L): dobutamina 2,5 a 10 mcg/kg/min
   ou milrinona 0,25 a 0,5 mcg/kg/min. Preferir milrinona em uso de betabloqueador; ajustar na DRC.
5. Vasopressor se a PAM ficar abaixo de 65 mmHg apesar do inotrópico: noradrenalina é a
   primeira escolha no choque cardiogênico.
6. Manter e otimizar a terapia médica. Não suspender o betabloqueador de rotina: reduzir 50%
   se houver baixo débito e suspender apenas em choque ou em uso de inotrópico.
   Reintroduzir antes da alta.
7. Monitorar diariamente peso, balanço, creatinina, sódio, potássio e sinais de congestão.
   Elevação isolada de creatinina com melhora da congestão não obriga a suspender o diurético.
8. Investigar e tratar o fator descompensante: ___.
9. Suporte mecânico e IC avançada, pelo INTERMACS:
   INTERMACS 1 — suporte circulatório mecânico em horas (BIA, Impella ou ECMO-VA). Acionar agora.
   INTERMACS 2 — decisão em dias: DAV como ponte, ou transplante em prioridade.
   INTERMACS 3 — decisão em semanas: listar para transplante ou DAV eletivo, documentando
   as falhas de desmame.
   INTERMACS 4 a 7 — otimizar terapia, avaliar CDI e TRC e encaminhar ao ambulatório de IC avançada.
   Registro de hoje: perfil ___, modificador ___, equipe de IC avançada ___.
10. Profilaxia de TEV. Restrição hídrica de ___ mL/dia e sódio abaixo de 2 g/dia, individualizados.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "Sepse / choque séptico",
    texto: `EVOLUÇÃO — UTI PS — SEPSE / CHOQUE SÉPTICO — D___ (D___ de antibiótico)

SÍNTESE
Paciente de ___ anos, admitido por ___. Foco presumido: ___.
Focos a considerar: pulmonar, urinário, abdominal, partes moles, cateter, endocardite
ou indeterminado.
qSOFA ___ · SOFA ___ · Tempo porta-antibiótico ___ min

EXAME FÍSICO

GERAL: regular estado geral, febril (Tax ___ °C), sudoreico,
perfusão de ___ segundos, pele quente.

NEURO: Glasgow ___, RASS ___, lúcido. CAM-ICU negativo.

RESP: FR ___ irpm, SpO2 ___% em ___.
Murmúrio vesicular presente, com estertores em ___.

CV: taquicárdico, ritmo cardíaco regular em 2 tempos, bulhas normofonéticas.
PA ___/___ mmHg (PAM ___). Noradrenalina ___ mcg/kg/min.

ABD: ___.

FOCO: ___.

DISPOSITIVOS: acesso venoso central em ___ (D___), sítio sem sinais flogísticos.
Sonda vesical (D___), com a necessidade reavaliada.

CONTROLES
Lactato ___ para ___ para ___ (clearance ___%). Diurese ___ mL/kg/h.
Balanço hídrico em 24 h ___ mL.
Leuco ___ (bastões ___) · PCR ___ · Procalcitonina ___ para ___
Culturas colhidas em __/__ : hemocultura ___, urocultura ___, aspirado traqueal ___, outras ___.

AVALIAÇÃO
Sepse de foco ___, em resposta à terapia. Disfunções orgânicas: ___.

CONDUTA
1. Antibioticoterapia com ___, no D___ de ___. Reavaliar o espectro com as culturas
   e descalonar em 48 a 72 h.
2. Controle do foco: ___ — realizado ou programado para __/__ .
3. Ressuscitação volêmica com cristaloide balanceado, pelo menos 30 mL/kg nas primeiras 3 h
   (Surviving Sepsis 2026), individualizando em IC e DRC e reavaliando com frequência.
   Guiar pela resposta a fluidos — elevação passiva de pernas, VTI, variação de pressão de pulso —
   e não pela PVC isolada.
4. Vasopressor: noradrenalina para PAM de pelo menos 65 mmHg. Em dose alta, associar
   vasopressina 0,03 U/min. Considerar hidrocortisona 200 mg/dia (50 mg EV de 6/6 h)
   se o choque for refratário.
5. Reavaliar lactato a cada 2 a 4 h até a normalização.
6. Hemotransfusão se Hb abaixo de 7 g/dL, ou abaixo de 8 se houver isquemia miocárdica ativa.
7. Ventilação protetora se houver SDRA: volume corrente de 6 mL/kg de peso predito,
   pressão de platô abaixo de 30 e driving pressure abaixo de 15.
8. Controle glicêmico entre 140 e 180 mg/dL. Profilaxia de TEV e de lesão aguda
   de mucosa gástrica.
9. Revisar diariamente antibióticos e dispositivos desnecessários.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — UTI do PS",
    nome: "Pós-PCR / cuidados pós-ROSC",
    texto: `EVOLUÇÃO — UTI PS — PÓS-PCR (ROSC em __/__/____ às ___h) — D___

O EVENTO
Parada cardiorrespiratória ___-hospitalar, com ritmo inicial ___, testemunhada ___,
com RCP por leigo ___.
Tempo de no-flow ___ min e de low-flow ___ min. Adrenalina ___ mg. Desfibrilações ___.
Causa presumida: ___.
Causas a percorrer: síndrome coronariana aguda, arritmia, TEP, hipóxia, distúrbio
hidroeletrolítico, hipovolemia e tamponamento.

EXAME FÍSICO
NEURO: Glasgow ___, RASS ___. Pupilas de ___ mm, fotorreagentes.
Reflexo corneopalpebral ___, tosse ___, oculocefálico ___. Sem mioclonias. Sob sedação com ___.
RESP: ventilação mecânica, FiO2 ___%, PEEP ___, volume corrente ___, FR ___.
Gasometria: pH ___, pCO2 ___, pO2 ___, lactato ___.
CV: ritmo ___ ao monitor. PA ___/___ mmHg (PAM ___). Noradrenalina ___ mcg/kg/min.
FEVE ao ecocardiograma ___%. Temperatura ___ °C, com controle direcionado em curso, alvo ___ °C.

CONDUTA
1. Alvo de PAM de pelo menos 65 mmHg, considerando 80 a 100 no hipertenso crônico,
   com noradrenalina titulada.
2. Alvo de SpO2 entre 92 e 98% — evitar hiperóxia. Alvo de PaCO2 entre 35 e 45 mmHg —
   evitar hipo e hipercapnia.
3. Controle direcionado de temperatura, evitando ativamente febre (manter abaixo de 37,5 °C)
   por pelo menos 72 h, com sedação e analgesia adequadas.
4. ECG imediato. Se houver supra de ST, cateterismo de urgência. Sem supra, com causa cardíaca
   provável, coronariografia conforme a instabilidade — não obrigatoriamente imediata.
5. Investigação etiológica: ECG seriado, troponina, eletrólitos, gasometria, ecocardiograma,
   angio-TC de tórax se houver suspeita de TEP e TC de crânio se houver suspeita neurológica.
6. Não prognosticar antes de 72 h do ROSC nem com sedação residual. A avaliação é multimodal:
   exame neurológico, NSE, EEG, potenciais evocados somatossensitivos e neuroimagem.
7. Anticonvulsivante apenas se a crise for documentada. EEG se houver mioclonias
   ou suspeita de estado de mal.
8. Comunicação diária e explícita com a família sobre a incerteza prognóstica.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — OBS 1/2/3",
    nome: "Nota de admissão em observação",
    texto: `ADMISSÃO — OBS ___ — __/__/____ às ___h

IDENTIFICAÇÃO
Paciente de ___ anos, sexo ___, natural de ___, procedente de ___, ___ de profissão.
Informante: ___, com boa confiabilidade.

QUEIXA PRINCIPAL
___ há ___.

HISTÓRIA DA DOENÇA ATUAL
Paciente previamente ___, iniciou há ___ um quadro de ___.
Caracterização: início ___, localização ___, irradiação ___, qualidade ___,
intensidade ___/10, duração ___, frequência ___.
Melhora com ___. Piora com ___. Sintomas associados: ___.
Procurou atendimento em __/__ , onde realizou ___ e recebeu ___.
Nega febre, perda ponderal e sangramentos.

ANTECEDENTES PESSOAIS
Patológicos: ___.
A checar sempre: HAS, DM2 (última HbA1c ___), dislipidemia, DAC (IAM em ___, ICP em ___,
CRM em ___), IC (FEVE ___% em __/__), FA, DRC (creatinina basal ___, TFG ___), AVC,
DPOC, tireoidopatia e neoplasia.
Cirúrgicos: ___.
Alergias: nega.
Medicações em uso, com dose e horário: ___.
Hábitos: tabagismo ___ maços/ano, etilismo ___, drogas ilícitas nega,
atividade física ___ min por semana.
Antecedentes familiares: DAC precoce (homem antes dos 55, mulher antes dos 65) ___.
Morte súbita ___. Miocardiopatia ___.
Social: mora com ___, sobe ___ andares de escada, independente para as atividades diárias.

REVISÃO DE SISTEMAS
Cardiovascular: sem dor torácica, dispneia NYHA ___, sem ortopneia, sem dispneia paroxística
noturna, sem edema, sem palpitação, sem síncope e sem claudicação.
Respiratório: sem tosse, sem expectoração, sem hemoptise e sem sibilância.
Digestório, urinário, neurológico e osteoarticular: sem queixas.

EXAME FÍSICO NA ADMISSÃO
Sinais vitais: PA ___/___ mmHg no membro superior direito e ___/___ no esquerdo,
FC ___ bpm, FR ___ irpm, Tax ___ °C, SpO2 ___% em ar ambiente, HGT ___ mg/dL.
Peso ___ kg, altura ___ m, IMC ___ kg/m².

GERAL: bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico,
afebril, eupneico. Perfusão periférica menor que 3 segundos.

CABEÇA E PESCOÇO: mucosas úmidas e coradas. Tireoide não palpável.
Sem linfonodomegalias. Carótidas sem sopros. Sem turgência jugular a 45 graus.

TÓRAX E RESPIRATÓRIO: expansibilidade simétrica, frêmito toracovocal normal,
som claro pulmonar à percussão. Murmúrio vesicular presente e simétrico,
sem ruídos adventícios.

CV: ictus no 5º espaço intercostal esquerdo na linha hemiclavicular, não propulsivo,
ocupando 2 polpas digitais. Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas,
sem sopros, sem B3 ou B4 e sem atrito pericárdico. Pulsos radiais, femorais, poplíteos,
tibiais posteriores e pediosos presentes, simétricos e de amplitude normal.
Sem refluxo hepatojugular.

ABD: plano, ruídos hidroaéreos presentes, flácido, indolor, sem massas,
fígado não palpável, espaço de Traube livre, sem ascite.

EXTREMIDADES: sem edema, sem sinais de TVP, panturrilhas livres,
sem úlceras ou lesões tróficas.

NEURO: vigil, orientado, sem déficit motor ou sensitivo, pares cranianos sem alterações,
sem sinais meníngeos.

EXAMES DA ADMISSÃO
ECG: ritmo ___, FC ___, eixo ___, PR ___ ms, QRS ___ ms, QTc ___ ms. ___
Laboratório: Hb ___ · Ht ___ · Leuco ___ · Plaquetas ___ · Ureia ___ · Creatinina ___ (TFG ___)
Na ___ · K ___ · PCR ___ · Troponina ___ · BNP/NT-proBNP ___ · TGO/TGP ___ · INR ___
Gasometria: ___
Radiografia de tórax: ___
POCUS ou ecocardiograma: ___

HIPÓTESES DIAGNÓSTICAS
1. ___
2. ___
3. ___

PLANO
1. Interno em OBS ___ para ___.
2. Dieta ___. Hidratação ___.
3. Prescrição: ___.
4. Solicito: ___.
5. Profilaxia de TEV com ___. Monitorização ___.
6. Comunicado ao paciente e ao familiar o diagnóstico, o plano e os riscos. Dúvidas sanadas.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — OBS 1/2/3",
    nome: "Evolução diária — OBS",
    texto: `EVOLUÇÃO — OBS ___ — D___ de internação — __/__/____

SUBJETIVO
Paciente refere ___. Nega dor torácica, dispneia em repouso, palpitação e síncope.
Boa aceitação da dieta. Diurese e evacuações presentes. Noite tranquila.

SINAIS VITAIS DE 24 H
PA ___/___ mmHg (máxima ___/___ , mínima ___/___ ), FC ___ bpm, FR ___ irpm,
Tax máxima ___ °C, SpO2 ___% em ar ambiente.
Peso ___ kg (ontem ___ kg). Balanço hídrico ___ mL. Diurese ___ mL.
HGT: ___ · ___ · ___ · ___

EXAME FÍSICO
Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico,
afebril, eupneico em ar ambiente.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular a 45 graus. Pulsos simétricos.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: plano, flácido, ruídos hidroaéreos presentes, indolor, sem visceromegalias.
EXTREMIDADES: sem edema, panturrilhas livres.
Acesso venoso periférico em ___, sem flebite.

EXAMES DE __/__ : ___

AVALIAÇÃO
___, em melhora clínica.
Problemas ativos: 1. ___  2. ___

CONDUTA
1. Mantenho ___.
2. Ajusto ___.
3. Aguardo ___.
4. Mantenho profilaxia de TEV. Acesso venoso e sonda vesical reavaliados.
5. Previsão de alta: ___. Pendências para a alta: ___.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — OBS 1/2/3",
    nome: "Evolução — IC descompensada em OBS (com ou sem DVA)",
    texto: `EVOLUÇÃO — OBS ___ — IC DESCOMPENSADA — D___

SUBJETIVO
Refere melhora da dispneia — atualmente NYHA ___, contra NYHA ___ na admissão.
Ortopneia com ___ travesseiros. Sem dispneia paroxística noturna.
Edema de membros inferiores em melhora.

CONTROLES
Peso hoje ___ kg · ontem ___ kg · admissão ___ kg → variação total ___ kg
Balanço hídrico em 24 h ___ mL · acumulado ___ mL · Diurese ___ mL (___ mL/kg/h)
PA ___/___ mmHg · FC ___ bpm · SpO2 ___% em ar ambiente

EXAME FÍSICO — MAPA DE CONGESTÃO
Turgência jugular a 45 graus: ___ cm. Refluxo hepatojugular: ___.
Estertores: ___. B3: ___.
Edema de membros inferiores: ___/4+. Hepatomegalia ou ascite: ___.
Perfusão: extremidades quentes, pressão de pulso proporcional ___%,
enchimento capilar de ___ segundos.
Perfil de Stevenson: ___.

EXAMES
Creatinina ___ (basal ___, admissão ___) · Ureia ___ · Na ___ · K ___ · Mg ___
NT-proBNP ___ (admissão ___) · Hb ___ · Ferritina ___ · Saturação de transferrina ___%

AVALIAÇÃO
IC com FEVE ___%, etiologia ___, descompensada por ___,
atualmente congesta e sem hipoperfusão.
Stevenson ___ · INTERMACS ___ com modificador ___
Internações por IC nos últimos 12 meses: ___. Se forem duas ou mais, aplicar o modificador FF
e considerar avaliação de IC avançada.

CONDUTA
1. Furosemida ___ mg EV de ___/___ h — mantenho a dose atual.
   Meta de balanço negativo de 1 a 2 L/dia até a euvolemia, com perda de 0,5 a 1,0 kg/dia.
2. Restrição hídrica de ___ mL/dia e sódio abaixo de 2 g/dia.
   Pesagem diária em jejum, sempre na mesma balança.
3. Otimização dos quatro pilares — situação atual:
   iSGLT2: ___
   ARNI, IECA ou BRA: ___
   Betabloqueador: ___
   Antagonista mineralocorticoide: ___
   Próximo passo de titulação: ___
4. Controle de potássio entre 4,0 e 5,0 e magnésio acima de 2,0. Repor conforme necessidade.
5. Investigar e corrigir anemia e ferropenia (ferro endovenoso se ferritina abaixo de 100,
   ou entre 100 e 299 com saturação de transferrina abaixo de 20%), disfunção tireoidiana e FA.
6. Critérios para alta: euvolêmico ao exame, sem oxigênio suplementar, em diurético oral
   por pelo menos 24 h com função renal estável, terapia otimizada e prescrita, orientações
   de dieta e peso diário dadas e retorno agendado em 7 a 14 dias.
7. Mantenho profilaxia de TEV.

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Dor torácica",
    texto: `TRIAGEM — DOR TORÁCICA — __/__/____ às ___h

Paciente de ___ anos, sexo ___. Início dos sintomas há ___ h.

HISTÓRIA
Dor retroesternal, em aperto, irradiando para ___, de intensidade ___/10,
com duração de ___ min, desencadeada por ___ e com melhora ___.
Associada a ___.
Classificação da dor: ___ (anginosa típica · provavelmente anginosa ·
provavelmente não anginosa · definitivamente não anginosa).
Fatores de risco: ___.
Nega dor lancinante de início súbito com irradiação dorsal, dor pleurítica,
imobilização ou TVP recente e uso de cocaína.

EXAME FÍSICO
Bom estado geral, lúcido e orientado, corado, hidratado, acianótico, afebril, eupneico.
Perfusão menor que 3 segundos. Não ansioso.
PA no membro superior direito ___/___ e no esquerdo ___/___ (diferença de ___ mmHg).
FC ___ bpm · FR ___ irpm · SpO2 ___% · Tax ___ °C
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem atrito
e sem B3. Pulsos simétricos e presentes nos quatro membros.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Sem dor à palpação da parede torácica.
Sem turgência jugular. Sem edema ou assimetria de membros inferiores. Panturrilhas livres.
ABD: indolor, sem massa pulsátil.

ECG às ___h, feito ___ min após a chegada: ritmo ___, FC ___. ___
Sem supra de ST, sem infradesnivelamento dinâmico, sem inversão de T, sem BRE novo.
ECG seriado em 15 a 30 min se a dor persistir ou se a suspeita for alta.

ESCORE HEART
História ___ · ECG ___ · Idade ___ · Fatores de risco ___ · Troponina ___ → TOTAL ___
0 a 3 baixo risco · 4 a 6 moderado · 7 a 10 alto

TROPONINA ULTRASSENSÍVEL
T0 = ___ ng/L às ___h · T1h = ___ ng/L às ___h · Delta = ___ ng/L
Interpretação: ___ (rule-out · zona de observação · rule-in).

HIPÓTESES: 1. ___  2. ___
Diferenciais graves afastados clinicamente: síndrome coronariana aguda, dissecção de aorta,
TEP, pneumotórax hipertensivo, tamponamento e ruptura de esôfago.

DESTINO
1. Alta — HEART de 3 ou menos, com troponinas seriadas negativas e ECG normal
   (risco de evento em 6 semanas abaixo de 1%). Retorno imediato se a dor voltar ou piorar,
   se houver dor em repouso por mais de 20 min, sudorese fria, dispneia, síncope ou palpitação
   sustentada. Encaminhado ao ambulatório de cardiologia em ___ dias, com prescrição
   e orientações por escrito entregues ao paciente e ao acompanhante.
2. Observação ou internação — HEART de 4 ou mais, troponina alterada ou dor recorrente.
   Monitorização contínua, AAS 300 mg VO de ataque, ___, acesso venoso e ECG seriado.
   Estratificação: ___ (invasiva imediata em menos de 2 h · precoce em menos de 24 h ·
   não invasiva com angio-TC de coronárias ou teste funcional).
3. Sala de emergência — supra de ST ou instabilidade. Acionar a hemodinâmica agora,
   com meta de porta-balão de até 90 min.
Conduta adotada: ___

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Dispneia",
    texto: `TRIAGEM — DISPNEIA — __/__/____ às ___h

Paciente de ___ anos, sexo ___. Dispneia há ___, de início ___, atualmente NYHA/mMRC ___.

HISTÓRIA
Refere ___. Ortopneia com ___ travesseiros. Sem dispneia paroxística noturna.
Sem edema de membros inferiores. Sem tosse, sem febre e sem dor torácica.
Sem sibilância. Variação de peso de ___ kg. Sem transgressão alimentar nem má adesão.
Fatores de risco para TEP (imobilização, cirurgia recente, neoplasia, TVP ou TEP prévios,
anticoncepcional e gestação): ausentes.

EXAME FÍSICO
Regular estado geral, dispneico, sem uso de musculatura acessória, falando frases completas.
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% em ar ambiente · Tax ___ °C
RESP: expansibilidade preservada, frêmito toracovocal normal, som claro à percussão.
Murmúrio vesicular presente e simétrico, com estertores crepitantes em ___.
Tempo expiratório normal.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem B3.
Turgência jugular ___ cm a 45 graus. Refluxo hepatojugular ausente.
EXTREMIDADES: edema ___/4+, simétrico. Panturrilhas livres, sem empastamento.
Perfusão de ___ segundos. Mucosas coradas.

EXAMES
ECG: ___
Radiografia de tórax: ___
POCUS: linhas B ___, derrame pleural ___, VCI de ___ mm com colapso de ___%,
FEVE visual ___, VD ___.
Laboratório: Hb ___ · Leuco ___ · PCR ___ · Creatinina ___ · NT-proBNP ___ ·
D-dímero ___ · Troponina ___
Gasometria: pH ___, pCO2 ___, pO2 ___, HCO3 ___, lactato ___
Escores: Wells para TEP ___ · Genebra ___ · CURB-65 ___

HIPÓTESE PRINCIPAL: ___. Diferenciais: ___.

CONDUTA
1. Oxigênio para alvo de SpO2 de pelo menos 94%, ou entre 88 e 92% se retentor crônico de CO2.
2. Tratamento inicial: ___.

DESTINO
1. Alta com ___ e retorno em ___ dias. Sinais de alarme orientados: piora da dispneia,
   dispneia em repouso, dor torácica, febre persistente, edema progressivo e ganho
   de mais de 2 kg em 3 dias.
2. Internação em observação ou UTI por ___.
Conduta adotada: ___

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Palpitação / arritmia",
    texto: `TRIAGEM — PALPITAÇÃO / ARRITMIA — __/__/____ às ___h

Paciente de ___ anos, sexo ___. Palpitação de início nítido há ___ h, súbito, irregular
e sustentada, ocorrida em repouso.
Sintomas associados: ___.
Nega uso de álcool, estimulantes, cocaína, descongestionante e excesso de hormônio tireoidiano.
Antecedentes: FA prévia ___, IC ___, HAS ___, DM ___, AVC ou AIT ___,
doença vascular ___, valvopatia ___, tireoidopatia ___.
Anticoagulação em uso: ___, última dose há ___ h, com boa adesão.

EXAME FÍSICO
Bom estado geral, hemodinamicamente estável.
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% · Tax ___ °C
Sinais de instabilidade (hipotensão, dor torácica isquêmica, IC aguda, rebaixamento
do nível de consciência): ausentes.
CV: ritmo irregularmente irregular, bulhas normofonéticas, sem sopros.
Déficit de pulso de ___ bpm.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Sem turgência jugular. Sem edema de membros inferiores. Tireoide não palpável.

EXAMES
ECG: ___ (ritmo, FC, QRS estreito ou largo, onda P visível, RR regular ou irregular,
pré-excitação e intervalo QT).
Laboratório: K ___ · Mg ___ · TSH ___ · Hb ___ · Troponina ___ · Creatinina ___

ESCORE CHA2DS2-VA (o sexo feminino foi removido do escore)
IC ___ (1) · HAS ___ (1) · Idade ≥ 75 ___ (2) · DM ___ (1) · AVC/AIT/tromboembolismo ___ (2)
Doença vascular ___ (1) · Idade 65 a 74 ___ (1) → TOTAL ___
0 não anticoagular · 1 individualizar · 2 ou mais anticoagular
Anticoagular independentemente do escore em cardiomiopatia hipertrófica, amiloidose cardíaca,
hipertireoidismo, estenose mitral reumática moderada ou grave e prótese mecânica.
HAS-BLED ___ — serve para corrigir fatores de sangramento, não para contraindicar.

DESTINO E CONDUTA
1. Instável — cardioversão elétrica sincronizada imediata, com sedação por etomidato
   ou propofol e fentanil. Energia bifásica: FA 120 a 200 J · flutter e TSV 50 a 100 J ·
   TV monomórfica com pulso 100 J.
2. Estável, FA com menos de 24 h de início e baixo risco embólico — cardioversão química
   ou elétrica é possível. Em alto risco (FA valvar, evento embólico prévio ou CHA2DS2-VA
   de 2 ou mais), não cardioverter de imediato mesmo com menos de 24 h: anticoagular
   e controlar a frequência, ou fazer ecocardiograma transesofágico para excluir trombo.
3. Estável, com 24 h ou mais, ou início indeterminado — controle de frequência com meta
   abaixo de 110 bpm em repouso, mais anticoagulação. Cardioversão eletiva após pelo menos
   3 semanas de anticoagulação plena, ou após transesofágico.
Conduta adotada: ___

CONTROLE DE FREQUÊNCIA
Metoprolol 2,5 a 5 mg EV lento, repetindo até 3 vezes, ou por via oral.
Diltiazem se houver broncoespasmo com FEVE preservada.
Digoxina se houver IC ou hipotensão.
Evitar bloqueador do nó AV se houver pré-excitação — usar procainamida ou amiodarona
e cardioverter.
Anticoagulação iniciada: ___
Destino: ___ (alta com retorno ambulatorial em ___ dias · observação · UTI)

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Síncope",
    texto: `TRIAGEM — SÍNCOPE — __/__/____ às ___h

Paciente de ___ anos, sexo ___. Episódio de perda súbita e transitória da consciência,
com recuperação espontânea e completa, há ___ h, com duração de ___ segundos.

CARACTERIZAÇÃO
Pródromos presentes — náusea, sudorese, escurecimento visual, calor e palidez —
o que sugere origem reflexa.
Estava em pé no momento. Gatilho: ___.
Houve testemunhas, que descrevem ___. Sem movimentos anormais.
Recuperação imediata e completa, sem confusão pós-ictal.
Sem liberação esfincteriana e sem mordedura lateral de língua.
Trauma associado: ___.
Bandeiras vermelhas para causa cardiogênica — síncope em esforço ou em decúbito, ausência
de pródromos, palpitação precedendo, história familiar de morte súbita antes dos 50 anos,
cardiopatia estrutural conhecida, ECG anormal, dor torácica ou dispneia associadas:
ausentes.
Medicações que possam contribuir (anti-hipertensivos, nitratos, diuréticos, alfabloqueadores
e drogas que prolongam o QT): ___.

EXAME FÍSICO
Bom estado geral, lúcido e orientado, sem déficit neurológico focal.
PA deitado ___/___ , em pé após 1 min ___/___ e após 3 min ___/___ .
Queda de 20 mmHg na sistólica ou de 10 na diastólica define hipotensão ortostática.
FC ___ bpm · FR ___ irpm · SpO2 ___% · HGT ___ · Tax ___ °C
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Atenção a sopro sistólico com irradiação para carótidas, que sugere estenose aórtica.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: indolor, sem massa pulsátil.
NEURO: Glasgow 15, pupilas isocóricas e fotorreagentes, força e sensibilidade preservadas,
sem sinais meníngeos, marcha normal.
Lesões traumáticas: ausentes.

EXAMES
ECG: ritmo ___, PR ___, QRS ___, QTc ___. Sem BAV, sem pré-excitação, sem padrão de Brugada,
sem onda épsilon, sem hipertrofia com sobrecarga, sem sinais de isquemia e sem taquicardia
ventricular.
Laboratório: Hb ___ · Na ___ · K ___ · Creatinina ___ · Troponina ___ · Beta-HCG ___

CLASSIFICAÇÃO: síncope ___ (reflexa — vasovagal, situacional ou por hipersensibilidade do seio
carotídeo · ortostática · cardiogênica, arrítmica ou estrutural).

DESTINO
1. Alta — síncope reflexa típica, ECG normal, sem cardiopatia estrutural, sem bandeiras
   vermelhas e exame normal. Orientações: manobras de contrapressão, hidratação e sal,
   evitar gatilhos, deitar ao primeiro pródromo, não dirigir nem operar máquinas até
   a avaliação e revisão dos anti-hipertensivos.
   Retorno imediato se houver síncope em esforço, palpitação, dor torácica, dispneia
   ou novo episódio sem pródromo.
   Encaminhamento ambulatorial para ___ (Holter · ecocardiograma · teste ergométrico · tilt test).
2. Observação e monitorização — bandeira vermelha presente, ECG alterado, cardiopatia
   estrutural, síncope de esforço, trauma significativo ou idade avançada com comorbidades.
   Solicito ecocardiograma, monitorização contínua e ___.
Conduta adotada: ___

Assinatura / CRM`
  },
  {
    grupo: "Plantão — Triagem",
    nome: "Dor / isquemia de membro e queixa vascular",
    texto: `TRIAGEM — QUEIXA VASCULAR DE MEMBRO — __/__/____ às ___h

Paciente de ___ anos, sexo ___. Quadro de ___ em ___ há ___.

HISTÓRIA
Dor em repouso, de intensidade ___/10, com alteração de cor e de temperatura,
parestesia e perda de força.
Ferida ou úlcera: localizada em ___, medindo ___ cm, com bordas ___, leito ___,
secreção ___ e odor ___, com ___ de evolução.
Sem febre. Sem trauma prévio. FA conhecida: ___. Cirurgia vascular prévia: ___.
Fatores de risco: tabagismo de ___ maços/ano, DM com HbA1c ___, HAS, dislipidemia, DRC,
DAOP prévia, imobilização, neoplasia, anticoncepcional e TVP prévia.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · Tax ___ °C · HGT ___ · SpO2 ___%
Membro acometido — os seis Ps da isquemia aguda:
dor ___ · palidez ___ · ausência de pulso ___ · parestesia ___ · paralisia ___ · frialdade ___
Pulsos: femoral ___, poplíteo ___, tibial posterior ___, pedioso ___, comparados
com o contralateral.
Enchimento capilar de ___ segundos. Temperatura fria a partir de ___. Coloração ___.
Perimetria: ___ cm no acometido contra ___ cm no contralateral, medidos a ___ cm da patela.
Sinais de TVP (edema assimétrico, empastamento de panturrilha, dor à dorsiflexão, circulação
colateral e cordão palpável): ___.
Lesão trófica ou necrose em ___, seca, sem celulite perilesional, sem crepitação
e sem exposição óssea.
Sensibilidade tátil, vibratória e ao monofilamento, se diabético: ___.
Índice tornozelo-braquial: direito ___ e esquerdo ___.
Acima de 1,3 é incompressível · 0,9 a 1,3 normal · 0,4 a 0,9 DAOP · abaixo de 0,4 isquemia crítica.

Classificação de Rutherford para isquemia aguda: ___
I viável · IIa marginalmente ameaçado · IIb imediatamente ameaçado · III irreversível
Escore de Wells para TVP: ___

EXAMES
Hb ___ · Leuco ___ · PCR ___ · Creatinina ___ · Lactato ___ · CPK ___ · K ___
Glicemia ___ · HbA1c ___ · D-dímero ___
Doppler ou ultrassom: ___

DESTINO
1. Isquemia aguda Rutherford IIb — emergência. Acionar a cirurgia vascular agora.
   Heparinização plena com HNF em bolus de 80 U/kg seguido de 18 U/kg/h, analgesia,
   membro em declive e aquecido passivamente, jejum e exames pré-operatórios.
2. Rutherford III, irreversível (anestesia, paralisia e rigidez muscular) — discutir amputação
   com a cirurgia vascular. Não revascularizar.
3. Infecção de partes moles ou pé diabético — antibiótico ___, desbridamento,
   radiografia do pé, controle glicêmico e avaliação vascular.
4. TVP confirmada — anticoagulação plena com ___. Definir tratamento ambulatorial
   ou internação.
5. Quadro crônico estável — alta com encaminhamento à cirurgia vascular em ___ dias,
   curativo orientado e controle de fatores de risco.
Conduta adotada: ___

Sinais de alarme orientados: piora da dor, palidez ou frialdade, perda de sensibilidade
ou de força, febre, secreção purulenta e escurecimento da lesão.

Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Evolução diária — enfermaria de cardiologia",
    texto: `EVOLUÇÃO — ENFERMARIA — LEITO ___ — D___ de internação — __/__/____

SUBJETIVO
Paciente refere ___. Nega dor torácica, dispneia, palpitação, síncope e febre.
Boa aceitação da dieta. Sono preservado. Evacuação presente. Diurese espontânea.

OBJETIVO
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · Tax ___ °C · SpO2 ___% em ar ambiente
Peso ___ kg · Balanço hídrico em 24 h ___ mL · Diurese ___ mL · HGT ___

Bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico,
afebril, eupneico.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular. Pulsos simétricos.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: plano, flácido, ruídos hidroaéreos presentes, indolor, sem visceromegalias.
EXTREMIDADES: sem edema, panturrilhas livres. Acesso venoso periférico em ___, sem flebite.

Exames de __/__ : ___

AVALIAÇÃO
1. ___
2. ___
3. ___

PLANO
1. ___
2. ___
3. Profilaxia de TEV com ___.
4. Pendências: ___
5. Previsão de alta: ___

Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Pós-SCA / IAM — evolução em unidade coronariana",
    texto: `EVOLUÇÃO — PÓS-SCA — D___ de internação / D___ do evento

SÍNTESE
Paciente de ___ anos, admitido em __/__/____ por ___.
Diagnóstico: ___ (IAM com supra de parede ___ · IAM sem supra · angina instável).
Killip na admissão ___. Pico de troponina ___.
Tempo porta-balão ou porta-agulha ___ min. GRACE ___.
Cateterismo de __/__ : ___ (vasos, lesões, TIMI antes e depois).
Angioplastia de __/__ : stent ___ em ___, com resultado ___.
Lesão residual e programação de novo tempo: ___.
FEVE de __/__ : ___%. Alteração segmentar: ___.
Antecedentes: ___.

ÚLTIMAS 24 HORAS
Assintomático. Nega dor torácica recorrente, dispneia, palpitação, síncope e sangramento.
Deambulando no quarto e tolerando dieta por via oral. Sono e diurese preservados.
Sítio de punção radial ___ sem dor e sem sangramento.

EXAME FÍSICO

GERAL: bom estado geral, lúcido e orientado, corado, hidratado, acianótico, afebril,
eupneico em ar ambiente. Perfusão menor que 3 segundos.

SINAIS VITAIS: PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · Tax ___ °C · SpO2 ___%
Diurese ___ mL em 24 h · Peso ___ kg

CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem B3
e sem atrito pericárdico. Sem turgência jugular a 45 graus.

RESP: murmúrio vesicular presente bilateralmente, sem estertores — Killip atual ___.

ABD: plano, flácido, ruídos hidroaéreos presentes, indolor.

EXTREMIDADES: sem edema. Pulsos distais presentes e simétricos. Panturrilhas livres.

SÍTIO DE PUNÇÃO: sem hematoma, sem sopro, sem massa pulsátil e sem sinais
de pseudoaneurisma.

EXAMES
ECG de __/__ : ___ (evolução do supra, ondas Q, inversão de T e arritmias).
Troponina ___ para ___ para ___ · Hb ___ (admissão ___) · Plaquetas ___
Creatinina ___ (admissão ___) · K ___ · Mg ___ · Glicemias ___ · HbA1c ___
LDL ___ (colher nas primeiras 24 h) · TGO/TGP ___
Ecocardiograma de __/__ : FEVE ___%, ___. Sem trombo apical.

COMPLICAÇÕES A VIGIAR
Isquemia recorrente, arritmia (TV, FV, FA, BAV), insuficiência cardíaca e congestão,
complicação mecânica (comunicação interventricular, insuficiência mitral aguda e ruptura
de parede livre — atenção a sopro novo), pericardite pós-IAM, trombo de VE, sangramento
com queda de hemoglobina e nefropatia por contraste.
Situação atual: ausentes.

CONDUTA
1. Dupla antiagregação: AAS 100 mg/dia mais ___, no D___.
   Duração programada de ___ meses. Risco de sangramento: ___.
2. Anticoagulação: ___. Suspender após a angioplastia, salvo indicação específica —
   FA, trombo de VE ou tromboembolismo venoso.
3. Betabloqueador: ___, titulado conforme frequência cardíaca e pressão.
   Definir na alta se mantém: com FEVE de 40% ou menos, angina ou arritmia, manter.
   Com FEVE acima de 40% e sem outra indicação, o benefício de longo prazo não foi
   demonstrado (REDUCE-AMI e REBOOT). Reavaliar e registrar a decisão.
4. IECA ou BRA: ___. Indicado se FEVE de 40% ou menos, HAS, DM ou DRC.
5. Antagonista mineralocorticoide: ___. Indicado se FEVE de 40% ou menos com IC ou DM,
   sem hipercalemia e sem DRC grave.
6. Estatina de alta intensidade: atorvastatina 80 mg ou rosuvastatina 20 a 40 mg.
   Meta de LDL abaixo de 50 mg/dL, com redução de pelo menos 50%.
7. iSGLT2 se houver DM2 ou FEVE reduzida: ___.
8. Controle glicêmico entre 140 e 180 mg/dL. Meta de PA abaixo de 130/80 mmHg.
9. Mobilização progressiva conforme protocolo. Encaminhado à reabilitação cardiovascular.
10. Cessação do tabagismo orientada e encaminhamento para ___.
11. Pendências: ___ (ecocardiograma · novo tempo de angioplastia · avaliação para cirurgia
    de revascularização · Holter · teste funcional).

CRITÉRIOS PARA ALTA
Sem angina há pelo menos 24 h, sem arritmia significativa, sem sinais de insuficiência
cardíaca, deambulando sem sintomas, com terapia otimizada e prescrita, orientações
de sinais de alarme dadas, retorno agendado em 7 a 14 dias e reabilitação encaminhada.

Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Avaliação de risco cardiovascular pré-operatório",
    texto: `PARECER — AVALIAÇÃO CARDIOVASCULAR PRÉ-OPERATÓRIA — __/__/____

Paciente de ___ anos, sexo ___, internado para ___.
Cirurgia proposta: ___, de risco ___ (baixo abaixo de 1% · intermediário de 1 a 5% ·
alto acima de 5%), em caráter ___.
Data prevista: __/__/____ . Equipe solicitante: ___.

ANTECEDENTES CARDIOVASCULARES
DAC: ___ (IAM em ___, angioplastia em ___ com stent ___, revascularização em ___).
IC: ___ (FEVE ___% em __/__, NYHA ___). Valvopatia: ___. Arritmia: ___.
Se em dupla antiagregação: tempo desde o implante do stent ___ meses.
Medicações: ___.

CAPACIDADE FUNCIONAL
___ METs. Sobe ___ lances de escada sem parar e caminha ___ quarteirões.
Capacidade de pelo menos 4 METs em geral dispensa investigação adicional.

ÍNDICE DE RISCO CARDÍACO REVISADO (RCRI) — 1 ponto cada
Cirurgia de alto risco (intraperitoneal, intratorácica ou vascular suprainguinal) ___
História de doença arterial coronariana ___
História de insuficiência cardíaca ___
História de doença cerebrovascular ___
Diabetes em uso de insulina ___
Creatinina pré-operatória acima de 2,0 mg/dL ___
TOTAL ___ → risco de evento cardíaco maior: 0 ponto cerca de 3,9% · 1 ponto 6,0% ·
2 pontos 10,1% · 3 ou mais 15%.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · SpO2 ___% · IMC ___
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
EXTREMIDADES: sem edema.

EXAMES
ECG: ___ · Hb ___ · Creatinina ___ (TFG ___) · Na e K ___
Ecocardiograma de __/__ : FEVE ___%, ___

CONCLUSÃO
Paciente de risco cardiovascular perioperatório ___.
1. Liberado para o procedimento, sem necessidade de exames adicionais.
2. Sugiro complementar com ___ antes do procedimento.
Conduta adotada: ___

RECOMENDAÇÕES PERIOPERATÓRIAS
1. Manter no perioperatório o betabloqueador (não iniciar de novo com menos de 1 dia
   de antecedência), a estatina e o AAS se houver stent recente ou alto risco isquêmico.
2. Suspender IECA ou BRA na manhã da cirurgia pelo risco de hipotensão, reintroduzindo
   em 24 a 48 h se euvolêmico. Suspender iSGLT2 de 3 a 4 dias antes pelo risco de cetoacidose
   euglicêmica. Suspender o diurético na manhã da cirurgia.
3. Antiagregação: manter o AAS e suspender o inibidor de P2Y12 respeitando o prazo mínimo
   de dupla antiagregação — pelo menos 1 mês na angioplastia eletiva com stent farmacológico
   e idealmente 6 a 12 meses após síndrome coronariana aguda. Discutir com a hemodinâmica
   se a cirurgia for inadiável.
4. Anticoagulação: suspender varfarina 5 dias antes, com alvo de INR abaixo de 1,5.
   Ponte com heparina de baixo peso apenas em alto risco tromboembólico — prótese mecânica
   mitral, prótese aórtica de gaiola ou disco, AVC há menos de 3 meses ou CHA2DS2-VA muito alto.
   DOAC: suspender de 24 a 48 h antes, conforme o risco de sangramento e o clearance.
5. Controle glicêmico entre 140 e 180 mg/dL. Manter normotermia e euvolemia.
6. Profilaxia de TEV conforme o risco cirúrgico e o risco de sangramento.
7. Reavaliação cardiológica no pós-operatório se houver instabilidade hemodinâmica,
   dor torácica, arritmia nova ou elevação de troponina.

Permaneço à disposição.
Assinatura / CRM`
  },
  {
    grupo: "Enfermaria",
    nome: "Sumário de alta",
    texto: `SUMÁRIO DE ALTA — __/__/____

Paciente: ___ · ___ anos · Registro ___
Internação de __/__/____ a __/__/____ (___ dias) · Setor ___

DIAGNÓSTICOS DE ALTA
Principal: ___ (CID ___)
Secundários: ___ (CID ___)

MOTIVO DA INTERNAÇÃO
___

RESUMO DA EVOLUÇÃO
Paciente admitido por ___, apresentando na admissão ___.
Exames relevantes:
ECG: ___
Laboratório: ___
Ecocardiograma de __/__ : FEVE ___%, ___
Cateterismo de __/__ : ___
Outros: ___
Recebeu tratamento com ___, evoluindo com ___.
Procedimentos realizados: ___.
Intercorrências: ___.
Recebe alta em boas condições clínicas, euvolêmico, sem dor, sem oxigênio suplementar,
deambulando e aceitando dieta por via oral.

EXAME FÍSICO NA ALTA
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% em ar ambiente
Peso ___ kg · Tax ___ °C
Bom estado geral, lúcido e orientado, corado, hidratado, eupneico.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
EXTREMIDADES: sem edema.

MEDICAÇÕES DE ALTA — RECONCILIADAS
1. ___ ___ mg — ___ comprimido(s) — via oral — de ___/___ h — uso contínuo
2. ___
3. ___
Medicações suspensas e motivo: ___
Medicações alteradas: ___

ORIENTAÇÕES
Dieta: ___ (hipossódica, com no máximo 2 g de sal por dia, fracionada).
Restrição hídrica de ___ mL/dia. Pesar-se diariamente em jejum e anotar.
Atividade física: ___. Reabilitação cardiovascular: ___.
Cessação do tabagismo e do etilismo orientada, com encaminhamento para ___.
Cuidados com a ferida operatória e com o curativo: ___.

RETORNAR IMEDIATAMENTE AO PRONTO-SOCORRO SE
Dor torácica · falta de ar em repouso ou piora importante da falta de ar · desmaio ·
palpitação sustentada · ganho de mais de 2 kg em 3 dias · edema progressivo ·
febre de 38 °C ou mais · sangramento · ___

RETORNOS AGENDADOS
Ambulatório de ___ em __/__/____ às ___h
Exames a trazer no retorno: ___
Contato da unidade: ___

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Primeiro atendimento ambulatorial — completo",
    texto: `AMBULATÓRIO DE PRIMEIRO ATENDIMENTO — __/__/____

IDENTIFICAÇÃO
Paciente de ___ anos, sexo ___, cor autodeclarada ___, ___ de profissão,
procedente de ___.
Encaminhado por ___, pelo motivo de ___.
Acompanhante: ___. Convênio ou SUS: ___.

QUEIXA E DURAÇÃO
___ há ___.

HISTÓRIA DA DOENÇA ATUAL
___
Sintomas cardiovasculares:
Dor torácica ausente. Se presente: tipo ___, desencadeante ___, alívio ___, classe CCS ___,
classificada como ___.
Dispneia ausente. Se presente: NYHA ___, com ortopneia ___ e dispneia paroxística noturna ___.
Palpitação ausente. Síncope e pré-síncope ausentes. Edema ausente.
Claudicação intermitente ausente. Se presente, ocorre a ___ metros.

ANTECEDENTES
HAS: ___ desde ___, em uso de ___. PA habitual ___/___ . MAPA ou MRPA: ___.
DM: ___ desde ___. Última HbA1c ___% em __/__ . Complicações: ___.
Dislipidemia: ___. Último perfil: CT ___, LDL ___, HDL ___, TG ___, não-HDL ___, Lp(a) ___.
DAC: ___. IAM em ___, angioplastia em ___ (data, vaso e stent), revascularização em ___,
último cateterismo ___.
IC: ___. FEVE ___% em __/__ , etiologia ___.
Outros: FA ___ · valvopatia ___ · DRC com TFG ___ · AVC ___ · DAOP ___ · DPOC ___ ·
apneia do sono ___ · tireoide ___ · neoplasia ___ · doença reumatológica ___
Cirurgias: ___. Alergias: nega.
Medicações em uso, com nome, dose, posologia e adesão:
1. ___   2. ___   3. ___   4. ___

HÁBITOS E ESTILO DE VIDA
Tabagismo: ___ (nunca · ativo, ___ maços/ano · cessado há ___).
Etilismo: ___ doses por semana.
Atividade física: ___ min por semana de ___.
Alimentação: ___.
Sono: ___ h por noite. Ronco ou apneia presenciada: ___. Epworth ___.
Peso ___ kg · Altura ___ m · IMC ___ kg/m² · Circunferência abdominal ___ cm

ANTECEDENTES FAMILIARES
DAC precoce (homem antes dos 55 anos, mulher antes dos 65): ___.
Morte súbita antes dos 50 anos: ___.
Miocardiopatia, canalopatia, dislipidemia familiar ou aneurisma de aorta: ___.

EXAME FÍSICO
PA sentado, média de duas medidas no membro superior direito, ___/___ mmHg;
no esquerdo ___/___ . FC ___ bpm · FR ___ irpm · SpO2 ___%
Peso ___ kg · IMC ___ · Circunferência abdominal ___ cm

GERAL: bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico,
eupneico. Sem xantelasma e sem arco corneano precoce.

PESCOÇO: sem turgência jugular a 45 graus. Carótidas sem sopros. Tireoide não palpável.

PRECÓRDIO: ictus no 5º espaço intercostal esquerdo na linha hemiclavicular, ocupando
2 polpas digitais, não propulsivo. Sem frêmitos.
Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem B3 ou B4
e sem desdobramentos patológicos.

RESPIRATÓRIO: murmúrio vesicular presente e simétrico, sem ruídos adventícios.

ABD: plano, flácido, ruídos hidroaéreos presentes, indolor, sem visceromegalias,
sem sopros abdominais, aorta não palpável.

EXTREMIDADES: sem edema. Pulsos radiais, femorais, poplíteos, tibiais posteriores
e pediosos presentes e simétricos. Índice tornozelo-braquial direito ___ e esquerdo ___.
Sem lesões tróficas.

EXAMES TRAZIDOS
ECG de __/__ : ritmo ___, FC ___, eixo ___, PR ___, QRS ___, QTc ___. ___
Laboratório de __/__ : Hb ___ · Creatinina ___ (TFG CKD-EPI ___) · Na ___ · K ___
Glicemia ___ · HbA1c ___ · TSH ___ · TGO/TGP ___ · Ácido úrico ___
Relação albumina-creatinina urinária ___
Perfil lipídico: CT ___ · LDL ___ · HDL ___ · TG ___ · não-HDL ___ · ApoB ___ · Lp(a) ___
Ecocardiograma de __/__ : ___
Outros: ___

ESTRATIFICAÇÃO DE RISCO CARDIOVASCULAR (SBC 2025)
Doença aterosclerótica estabelecida: ___ → alto, muito alto ou extremo risco.
Sem DCV estabelecida, entre 30 e 79 anos: calculadora PREVENT = ___% em 10 anos.
Escore de cálcio coronário, se risco intermediário, acima de 40 anos e LDL entre 70 e 159:
___ UA, percentil ___.
Cálcio acima de 100 UA ou percentil acima de 75 indica alto risco. DM com cálcio entre 10
e 300 indica alto risco. Cálcio acima de 300 indica muito alto risco.
Classificação final: ___
Metas: LDL abaixo de ___ mg/dL, com redução de pelo menos ___%; não-HDL abaixo de ___;
PA abaixo de 130/80 mmHg; HbA1c abaixo de ___%.

HIPÓTESES E PROBLEMAS
1. ___  2. ___  3. ___

CONDUTA
1. Prescrição: ___.
2. Solicito: ___.
3. Orientações não farmacológicas — ver o pacote completo na aba Orientações.
   Resumo prescrito hoje: dieta ___, atividade física ___, cessação do tabagismo ___,
   meta de perda de ___ kg (___%).
4. Encaminhamentos: ___.
5. Retorno em ___ com exames.
6. Orientado sobre sinais de alarme e quando procurar o pronto-socorro.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Retorno ambulatorial — modelo curto",
    texto: `AMBULATÓRIO DE ___ — RETORNO — __/__/____

Paciente de ___ anos, em seguimento por ___, com diagnóstico em ___.

SUBJETIVO
Assintomático do ponto de vista cardiovascular. Nega dor torácica, dispneia (NYHA ___),
ortopneia, dispneia paroxística noturna, edema, palpitação, síncope e claudicação.
Boa adesão medicamentosa, sem efeitos adversos.
Sem intercorrências desde a última consulta.
Aferições domiciliares de PA: ___. HGT domiciliar: ___. Peso ___ kg, contra ___ kg antes.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% · Peso ___ kg · IMC ___
Bom estado geral, lúcido e orientado, corado, hidratado, eupneico, acianótico.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular a 45 graus. Pulsos simétricos.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: plano, flácido, indolor, sem visceromegalias.
EXTREMIDADES: sem edema, panturrilhas livres.

EXAMES DE __/__ : ___

AVALIAÇÃO
___, compensado.
Metas: PA ___ (alvo abaixo de 130/80) · LDL ___ (alvo abaixo de ___) ·
HbA1c ___ (alvo abaixo de ___) · FC ___

CONDUTA
1. Mantenho ___.
2. Solicito: ___.
3. Orientações: ___.
4. Retorno em ___ meses com exames. Orientado sobre sinais de alarme.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Retorno pós-ICP / DAC crônica",
    texto: `AMBULATÓRIO DE ANGIOPLASTIA — __/__/____

Paciente de ___ anos, portador de doença arterial coronariana, submetido a angioplastia
em __/__/____ .
Vaso e lesão tratados: ___. Stent ___ (farmacológico ou convencional), ___ mm por ___ mm.
Contexto: ___ (SCA com supra · SCA sem supra · angina estável · isquemia silenciosa).
FEVE após o evento: ___% em __/__ . Doença residual: ___.

SUBJETIVO
Assintomático, sem angina. Nega dispneia progressiva, síncope e palpitação.
Tolerância ao esforço: ___.
Boa adesão à dupla antiagregação, sem sangramentos.
Tabagismo cessado em ___. Reabilitação cardiovascular em curso.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · Peso ___ kg · IMC ___ ·
Circunferência abdominal ___ cm · SpO2 ___%
Bom estado geral, corado, eupneico.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
EXTREMIDADES: sem edema. Sítio de punção sem pseudoaneurisma, sem sopro e sem hematoma,
com pulso distal presente.

EXAMES
LDL ___ · não-HDL ___ · HbA1c ___ · Creatinina ___ (TFG ___) · Hb ___ · K ___ · TGO/TGP ___
CPK, se houver sintoma muscular: ___
ECG: ___ · Ecocardiograma de __/__ : ___ · Teste funcional ou angio-TC de __/__ : ___

CHECKLIST DE ANTIAGREGAÇÃO
Início da dupla antiagregação em __/__/____ , há ___ meses.
Esquema atual: AAS 100 mg/dia mais ___.
Risco isquêmico: ___. Critérios: ___.
Risco de sangramento (ARC-HBR ou PRECISE-DAPT ___): ___.
Opções de decisão:
1. Manter a dupla antiagregação até completar 12 meses após a SCA — padrão em quem
   não tem alto risco de sangramento.
2. Alto risco de sangramento: desescalonar para monoterapia com ticagrelor, ou clopidogrel,
   após 1 a 3 meses.
3. Período já completado: manter monoterapia antiplaquetária indefinidamente —
   AAS 100 mg/dia ou clopidogrel 75 mg/dia.
4. Indicação concomitante de anticoagulação: dupla antiagregação abreviada por 1 a 4 semanas,
   depois DOAC mais clopidogrel; ao completar 12 meses, DOAC isolado.
Conduta adotada: ___

METAS DE PREVENÇÃO SECUNDÁRIA
LDL abaixo de 50 mg/dL em muito alto risco, ou abaixo de 30 no risco extremo, com redução
de pelo menos 50% do basal → atual ___.
Não-HDL no alvo correspondente → atual ___.
PA abaixo de 130/80 → atual ___/___ .
HbA1c individualizada → atual ___%.
IMC alvo ___. Cessação total do tabagismo. Atividade física de pelo menos 150 min por semana.

CONDUTA
1. Antiagregação: ___.
2. Estatina de alta intensidade — atorvastatina 40 a 80 mg ou rosuvastatina 20 a 40 mg à noite.
   Fora da meta, associar ezetimiba 10 mg/dia. Persistindo fora da meta, considerar inibidor
   de PCSK9 ou ácido bempedoico.
3. Betabloqueador: ___.
   Manter indefinidamente se FEVE de 40% ou menos, angina ou arritmia.
   Com FEVE acima de 40% e sem outra indicação, discutir a suspensão: REDUCE-AMI e REBOOT
   não mostraram redução de morte, reinfarto ou internação por IC, e o REBOOT sinalizou
   possível dano em mulheres com FEVE de 50% ou mais.
4. IECA ou BRA: ___. Indicado se HAS, DM, DRC ou FEVE de 40% ou menos.
5. iSGLT2 ou agonista de GLP-1 se houver DM2 com doença cardiovascular estabelecida: ___.
6. Antianginoso adicional, se sintomático: ___.
7. Reabilitação cardiovascular supervisionada — encaminhado.
8. Solicito: ___. Retorno em ___ meses.
9. Orientado a procurar o pronto-socorro imediatamente se houver dor torácica em repouso
   por mais de 20 min, sudorese, dispneia aguda ou síncope. Orientado a não suspender
   o antiagregante por conta própria — qualquer procedimento deve ser discutido
   com o cardiologista.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Consulta de cardiometabolismo — painel de metas",
    texto: `AMBULATÓRIO DE CARDIOMETABOLISMO — __/__/____

Paciente de ___ anos, sexo ___, com ___ (HAS · DM2 · dislipidemia · obesidade ·
apneia do sono · esteatose hepática).

SUBJETIVO
Assintomático do ponto de vista cardiovascular. Nega dor torácica, dispneia, edema,
palpitação e claudicação.
Adesão medicamentosa: ___. Nega efeitos adversos (mialgia, tosse, edema, hipoglicemia
e sintomas gastrointestinais). Nega hipoglicemias.
MRPA ou MAPA de __/__ : média ___/___ mmHg.
Automonitorização glicêmica: jejum ___, pós-prandial ___.
Dieta: ___. Atividade física ___ min por semana.
Sono ___ h por noite, sem ronco. Epworth ___.

EXAME FÍSICO
PA sentado, média de duas medidas, ___/___ mmHg · FC ___ bpm
Peso ___ kg (antes ___ kg, variação de ___ kg ou ___%)
Altura ___ m · IMC ___ kg/m² · Circunferência abdominal ___ cm · SpO2 ___%
Bom estado geral, corado, eupneico, sem xantelasma e sem acantose nigricans.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular. Carótidas sem sopros.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: globoso à custa de adiposidade, indolor, sem visceromegalias e sem sopros.
EXTREMIDADES: sem edema. Pulsos periféricos presentes e simétricos.
Índice tornozelo-braquial direito ___ e esquerdo ___.
PÉS, se diabético: pele íntegra, sem úlceras e sem deformidades. Monofilamento de 10 g
preservado em ___ pontos. Sensibilidade vibratória preservada. Pulsos pediosos e tibiais
posteriores presentes.
Fundoscopia ou retinografia de __/__ : ___

PAINEL DE METAS
PA — atual ___/___ — meta abaixo de 130/80 (idoso robusto abaixo de 140/80) — ___
LDL — atual ___ — meta conforme o risco, ver abaixo — ___
Não-HDL — atual ___ — meta é o LDL alvo mais 30 — ___
Triglicérides — atual ___ — meta abaixo de 150 mg/dL — ___
Lp(a), uma vez na vida — atual ___ — meta abaixo de 50 mg/dL — ___
HbA1c — atual ___ — meta abaixo de 7%, ou 7,5 a 8% no idoso frágil — ___
TFG e relação albumina-creatinina — atual ___ e ___ — meta estável e abaixo de 30 mg/g — ___
Peso, IMC e circunferência — atual ___, ___ e ___ — meta de perda de 5 a 10% do peso — ___
Tabagismo — atual ___ — meta de cessação total — ___

Metas de LDL por categoria de risco (SBC 2025): baixo abaixo de 130 · intermediário abaixo
de 100 · alto abaixo de 70 · muito alto abaixo de 50 · extremo abaixo de 30.
Redução percentual mínima: pelo menos 50% no risco alto, muito alto e extremo;
pelo menos 30% no baixo e intermediário.
Estratificação atual: ___ (PREVENT ___% · escore de cálcio ___ UA)

EXAMES DE __/__
CT ___ · LDL ___ · HDL ___ · TG ___ · não-HDL ___ · ApoB ___ · Lp(a) ___
Glicemia ___ · HbA1c ___ · Insulina ___ · Creatinina ___ (TFG ___)
Relação albumina-creatinina ___ · K ___ · Na ___
TGO ___ · TGP ___ · GGT ___ · TSH ___ · Ácido úrico ___ · Hb ___ · Vitamina D ___

CONDUTA
1. Anti-hipertensivos: ___. Primeira linha: tiazídico, IECA, BRA ou bloqueador de canal
   de cálcio di-hidropiridínico. Preferir combinação em dose fixa desde o início se a PA
   estiver 20/10 mmHg acima da meta.
2. Hipolipemiante: estatina de alta intensidade ___. Associar ezetimiba se fora da meta.
   Considerar inibidor de PCSK9 ou ácido bempedoico se persistir fora da meta no risco
   muito alto ou extremo.
3. Antidiabéticos: metformina ___, mais iSGLT2 se houver doença cardiovascular, IC ou DRC,
   mais agonista de GLP-1 se houver doença cardiovascular estabelecida ou obesidade.
   Semaglutida 2,4 mg por semana se houver doença cardiovascular estabelecida com sobrepeso
   ou obesidade (SELECT).
4. Obesidade: déficit de 500 a 750 kcal/dia com exercício aeróbico e resistido.
   Meta de perda de ___%. Farmacoterapia: ___.
   Avaliar cirurgia bariátrica se IMC de 35 ou mais com risco cardiovascular moderado a alto.
5. Rastreamentos: retinografia anual, relação albumina-creatinina anual, exame dos pés anual
   e polissonografia se houver ronco ou Epworth elevado.
6. Orientações de estilo de vida entregues por escrito — ver aba Orientações.
7. Solicito: ___. Retorno em ___ meses.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Consulta de miocardiopatia",
    texto: `AMBULATÓRIO DE MIOCARDIOPATIAS — __/__/____

Paciente de ___ anos, sexo ___, com miocardiopatia ___ (hipertrófica · dilatada ·
restritiva · arritmogênica · não compactada · chagásica · amiloidose ATTR ou AL ·
periparto · induzida por quimioterapia), diagnosticada em ___.
Etiologia investigada: ___. Teste genético: ___.

SUBJETIVO
NYHA ___. Sem angina. Sem pré-síncope nem síncope. Sem palpitação.
Dispneia aos esforços: ___. Sem ortopneia nem dispneia paroxística noturna.
Sem choque de CDI.
Boa adesão medicamentosa. Restrição de esportes competitivos orientada.
História familiar: morte súbita antes dos 50 anos em ___, miocardiopatia em ___.
Rastreio familiar realizado em ___.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% · Peso ___ kg · IMC ___
Bom estado geral, corado, eupneico, sem estase jugular a 45 graus.
PRECÓRDIO: ictus normal.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros e sem B3 ou B4.
Atenção ao sopro sistólico ejetivo em foco aórtico que aumenta com Valsalva e ortostatismo,
sugestivo de obstrução da via de saída do VE.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: sem hepatomegalia.
EXTREMIDADES: sem edema.
Sinais de amiloidose sistêmica a procurar: síndrome do túnel do carpo bilateral, macroglossia,
equimose periorbitária, neuropatia periférica e estenose de canal lombar. Ausentes.

EXAMES
ECG de __/__ : ritmo ___. ___ (baixa voltagem, padrão de pseudoinfarto, hipertrofia
ou bloqueios).
Ecocardiograma de __/__ : FEVE ___%, DDVE ___ mm, septo ___ mm, parede posterior ___ mm,
massa indexada ___ g/m², AE ___ mL/m².
Gradiente na via de saída em repouso ___ e com Valsalva ___ mmHg. Relação septo/parede ___.
Strain longitudinal global ___%. Padrão de apical sparing ausente.
Relação E/e' ___. PSAP ___ mmHg. VD ___.
Ressonância cardíaca de __/__ : ___ (realce tardio com extensão e padrão, T1 nativo
e volume extracelular).
Cintilografia com pirofosfato, se houver suspeita de ATTR: Perugini grau ___.
Eletroforese de proteínas, cadeias leves livres séricas e imunofixação em soro e urina: ___
Holter de 24 h de __/__ : ___ (taquicardia ventricular não sustentada e carga
de extrassístoles).
Teste ergométrico ou ergoespirometria: ___ (VO2 pico ___, resposta pressórica ___).
Sorologia para Chagas, se aplicável: ___. BNP/NT-proBNP ___. Troponina ___.

ESTRATIFICAÇÃO DE MORTE SÚBITA
Prevenção secundária, com CDI indicado: parada cardiorrespiratória revertida ___,
taquicardia ventricular sustentada com instabilidade ___.
Fatores de risco na cardiomiopatia hipertrófica: septo de 30 mm ou mais ___,
síncope inexplicada recente ___, história familiar de morte súbita ___,
taquicardia ventricular não sustentada ao Holter ___, resposta pressórica anormal
ao esforço ___, realce tardio extenso à ressonância ___, aneurisma apical ___,
FEVE abaixo de 50% ___. HCM Risk-SCD em 5 anos: ___%.
Miocardiopatia dilatada: FEVE ___% após pelo menos 3 meses de terapia otimizada,
NYHA ___, expectativa de vida acima de 1 ano com boa qualidade.
Indicação de CDI: ___ (não indicado · a discutir · indicado, encaminhado à eletrofisiologia).

AVALIAÇÃO: ___

CONDUTA
1. Terapia medicamentosa: ___.
   Cardiomiopatia hipertrófica obstrutiva: betabloqueador, depois verapamil ou diltiazem,
   depois disopiramida. Inibidor de miosina cardíaca se disponível. Evitar vasodilatadores,
   excesso de diurético e digoxina.
   Miocardiopatia dilatada: os quatro pilares da IC com FE reduzida.
   Amiloidose ATTR: terapia modificadora de doença com tafamida 61 mg/dia, acoramidis
   (aprovado pela Anvisa em maio de 2026) ou vutrisirana. Evitar betabloqueador e bloqueador
   de canal de cálcio em doses altas, com cautela no uso de digoxina.
2. Anticoagulação: ___. Indicada na cardiomiopatia hipertrófica com FA independentemente
   do CHA2DS2-VA, e na presença de trombo intracavitário.
3. Restrição de exercício competitivo de alta intensidade: ___.
4. Rastreio familiar em parentes de primeiro grau, com ECG e ecocardiograma, além de teste
   genético se a mutação estiver identificada. Periodicidade de 1 a 2 anos em adolescentes
   e de 3 a 5 anos em adultos. Familiares orientados: ___.
5. Solicito: ___. Retorno em ___ meses.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "IC crônica — consulta com titulação dos 4 pilares",
    texto: `AMBULATÓRIO DE INSUFICIÊNCIA CARDÍACA — __/__/____

Paciente de ___ anos, sexo ___, com IC de fração de ejeção ___ (reduzida até 40% ·
levemente reduzida de 41 a 49% · preservada a partir de 50%), FEVE ___% em __/__ .
Etiologia ___. Diagnóstico em ___. Estágio ACC/AHA ___.
Internações por IC nos últimos 12 meses: ___.

SUBJETIVO
NYHA ___, contra ___ na consulta anterior. Ortopneia com ___ travesseiros.
Sem dispneia paroxística noturna. Sem edema de membros inferiores.
Tolerância ao esforço: caminha ___ metros e sobe ___ lances sem parar.
Peso hoje ___ kg, peso seco ___ kg, variação recente de ___ kg. Faz pesagem diária.
Boa adesão. Segue a restrição de sal e de água.
Sintomas que limitam a titulação: sem tontura, sem hipotensão sintomática, sem bradicardia,
sem cãibras, sem piora de função renal e sem hipercalemia.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% · Peso ___ kg · IMC ___
Bom estado geral, corado, eupneico, sem estase jugular a 45 graus.
Refluxo hepatojugular ausente.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros e sem B3.
Ictus normal.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: sem hepatomegalia e sem ascite.
EXTREMIDADES: sem edema, extremidades quentes, perfusão menor que 3 segundos.

EXAMES
NT-proBNP ___ (anterior ___) · Creatinina ___ (TFG ___) · Ureia ___ · Na ___ · K ___ · Hb ___
Ferritina ___ · Saturação de transferrina ___% · TSH ___ · HbA1c ___ · Ácido úrico ___ · TGO/TGP ___
ECG: ritmo ___, QRS ___ ms, sem BRE.
Ecocardiograma de __/__ : FEVE ___%, DDVE ___, AE ___, PSAP ___,
insuficiência mitral ___, insuficiência tricúspide ___.

STATUS DOS QUATRO PILARES (IC COM FE REDUZIDA)
1. ARNI, IECA ou BRA — atual ___ — alvo ___ — ação de hoje ___
2. Betabloqueador — atual ___ — alvo ___ — ação de hoje ___
3. Antagonista mineralocorticoide — atual ___ — alvo 25 a 50 mg/dia — ação de hoje ___
4. iSGLT2 — atual ___ — alvo 10 mg/dia em dose única — ação de hoje ___
Diurético de alça: ___ — usar a menor dose que mantém a euvolemia.
Adjuvantes considerados: ivabradina se ritmo sinusal com FC de 70 ou mais e betabloqueador
otimizado ___ · hidralazina com nitrato ___ · digoxina ___ · vericiguat após piora recente ___ ·
ferro endovenoso se ferritina abaixo de 100, ou de 100 a 299 com saturação abaixo de 20% ___

DISPOSITIVOS
CDI: ___. TRC: ___ — indicada se FEVE de 35% ou menos, ritmo sinusal e BRE com QRS
de 150 ms ou mais, após pelo menos 3 meses de terapia otimizada.

AVALIAÇÃO
IC ___, NYHA ___, compensada e euvolêmica.
Terapia médica em titulação, com ___% das doses-alvo atingidas.

SINAIS DE IC AVANÇADA
NYHA III ou IV persistente, pelo menos uma internação em 12 meses, FEVE de 30% ou menos,
intolerância à terapia por hipotensão, disfunção renal progressiva, necessidade de inotrópico
e VO2 pico abaixo de 12 a 14 mL/kg/min.
Situação atual: ausentes.

PERFIL INTERMACS: ___ com modificador ___ (A arritmia · TCS · FF reinternações frequentes)
  4 sintomas em repouso sem inotrópico, com diurético em dose alta
  5 restrito ao domicílio, confortável em repouso, incapaz de atividade fora de casa
  6 fadiga após poucos minutos de atividade significativa
  7 NYHA III avançada, estável, sem instabilidade recente
Encaminhamento ao grupo de IC avançada e transplante: ___.
Gatilhos para encaminhar: INTERMACS 4 a 6, duas ou mais internações em 12 meses,
dependência de inotrópico, intolerância a IECA, ARNI ou betabloqueador por hipotensão,
hiponatremia persistente, creatinina em ascensão e caquexia.

CONDUTA
1. Titulação de hoje: ___. Reavaliar função renal e potássio em 1 a 2 semanas após cada ajuste.
2. Diurético: ___, ajustado pelo peso e pela congestão. Não fixar dose alta indefinidamente.
3. Corrigir ferropenia ___, anemia ___, disfunção tireoidiana ___, FA ___,
   apneia do sono ___, HAS ___ e DM ___.
4. Vacinação em dia: influenza anual, pneumocócica e COVID-19.
5. Reabilitação cardiovascular supervisionada — encaminhado.
6. Educação: pesagem diária, restrição de sódio abaixo de 2 g/dia, restrição hídrica
   de ___ mL/dia, reconhecer sinais de descompensação, não usar anti-inflamatório
   e evitar automedicação. Orientações entregues por escrito — ver aba Orientações.
7. Solicito: ___. Retorno em ___.
8. Procurar o pronto-socorro se houver ganho de mais de 2 kg em 3 dias, dispneia em repouso,
   ortopneia nova, síncope ou palpitação sustentada.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Avaliação de IC avançada — INTERMACS e candidatura a transplante/DAV",
    texto: `AVALIAÇÃO DE INSUFICIÊNCIA CARDÍACA AVANÇADA — __/__/____

IDENTIFICAÇÃO E SÍNTESE
Paciente de ___ anos, sexo ___, com IC de fração de ejeção reduzida, FEVE ___% em __/__ .
Etiologia ___, com diagnóstico em ___. NYHA ___. Estágio ACC/AHA ___.
Internações por IC nos últimos 12 meses ___ · idas ao pronto-socorro ___ ·
dias em inotrópico nos últimos 6 meses ___

CRITÉRIOS DE IC AVANÇADA
Sintomas graves e persistentes, NYHA III ou IV apesar de terapia otimizada: ___
Disfunção ventricular grave — FEVE de 30% ou menos, VD isolado disfuncionante
ou valvopatia grave inoperável: ___
Pelo menos uma internação não planejada por IC nos últimos 12 meses: ___
Intolerância à terapia por hipotensão, disfunção renal ou hipercalemia: ___
Capacidade funcional gravemente reduzida — teste de caminhada abaixo de 300 m
ou VO2 pico abaixo de 12 a 14 mL/kg/min: ___
Total de critérios preenchidos: ___

CLASSIFICAÇÃO INTERMACS
Perfil ___, com modificador ___ (A arritmia · TCS suporte temporário ·
FF reinternações frequentes · nenhum).
  1 choque crítico apesar de inotrópico e vasopressor em dose crescente — intervenção em horas
  2 declínio progressivo em inotrópico estável ou crescente — intervenção em dias
  3 estável, porém dependente de inotrópico, com falha de desmame — intervenção em semanas
  4 sintomas em repouso sem inotrópico, com diurético em dose alta — semanas a meses
  5 restrito ao domicílio, incapaz de atividade fora de casa — variável
  6 fadiga após poucos minutos de atividade significativa — variável
  7 NYHA III avançada, estável, sem instabilidade recente — não candidato imediato
Perfil anterior em __/__ : ___ → trajetória ___.

DADOS QUE SUSTENTAM A CLASSIFICAÇÃO
Peso ___ kg (seco ___) · PA ___/___ · FC ___ · Perfusão ___ s · Extremidades ___
Diurético atual ___ · Inotrópico ___ desde __/__
Doses de terapia otimizada alcançadas: ARNI ou IECA ___% do alvo · betabloqueador ___% ·
antagonista mineralocorticoide ___ · iSGLT2 ___
Motivo de não titular: ___
Na ___ mEq/L — hiponatremia persistente é marcador de mau prognóstico
Creatinina ___ (basal ___) · Ureia ___ · NT-proBNP ___ (anterior ___)
Bilirrubina ___ · Albumina ___ · Hb ___ · Ferritina e saturação ___
Teste de caminhada de 6 min ___ m
Ergoespirometria de __/__ : VO2 pico ___ mL/kg/min, VE/VCO2 ___, ___% do previsto
Cateterismo direito de __/__ : PAD ___ · PAP ___/___ (média ___) · POAP ___ ·
índice cardíaco ___ L/min/m² · RVP ___ UW · gradiente transpulmonar ___ ·
gradiente diastólico pulmonar ___ · teste de reversibilidade ___
Ecocardiograma de __/__ : FEVE ___%, DDVE ___, insuficiência mitral ___,
insuficiência tricúspide ___, TAPSE ___, PSAP ___, sem trombo.
Dispositivos: CDI ___ · TRC ___ — resposta ___

AVALIAÇÃO DE CANDIDATURA
Contraindicações absolutas rastreadas: hipertensão pulmonar fixa irreversível ___,
neoplasia ativa ___, infecção ativa não controlada ___, disfunção orgânica irreversível ___,
doença vascular ou cerebrovascular grave ___, uso ativo de substâncias ___,
não adesão documentada ___.
Relativas e a otimizar: IMC ___, DM com lesão de órgão-alvo ___, DRC com TFG ___,
fragilidade ___, suporte social ___, perfil psicossocial ___.
Avaliações complementares pendentes: odontológica ___, dermatológica ___, sorologias ___,
rastreio oncológico por idade ___, tipagem e painel de anticorpos ___,
psicologia e serviço social ___.

CONCLUSÃO E PLANO
Paciente classificado como INTERMACS ___, com modificador ___.
1. Não é candidato no momento — otimizar terapia e reavaliar em ___ meses.
2. Encaminhado para avaliação formal de transplante cardíaco, iniciada em __/__ .
3. Indicação de dispositivo de assistência ventricular como ___ (ponte para transplante ·
   ponte para decisão · terapia de destino), discutida em __/__ .
4. Suporte circulatório mecânico temporário indicado agora — equipe acionada às ___h.
5. Cuidados paliativos e manejo sintomático, com metas de cuidado discutidas com o paciente
   e a família em __/__ .
Conduta adotada: ___

Discussão realizada com ___ (grupo de IC avançada, cirurgia cardíaca, equipe de transplante).
Paciente e família informados sobre prognóstico, opções e riscos. Dúvidas sanadas.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Pós-transplante cardíaco — seguimento",
    texto: `AMBULATÓRIO DE TRANSPLANTE CARDÍACO — __/__/____

Paciente de ___ anos, transplantado em __/__/____ , há ___ meses.
Doença de base ___. Doador ___. Isquemia fria de ___ min.
Indução com ___. Rejeições prévias: ___ (data, grau e tratamento).
CMV: doador ___ e receptor ___.
Última biópsia endomiocárdica de __/__ : ISHLT grau ___, sem rejeição mediada por anticorpos.

SUBJETIVO
Assintomático. Nega dispneia (NYHA ___), edema, palpitação, síncope, febre, tosse, diarreia,
sintomas urinários e lesões cutâneas novas. Ganho ponderal de ___ kg.
Adesão rigorosa à imunossupressão, nos horários corretos.
Nega efeitos adversos: tremor, parestesia, cefaleia, hiperplasia gengival, hirsutismo,
diarreia, náusea, edema e alteração visual.
Exposições de risco (contatos infecciosos, viagens, jardinagem e animais): ___

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm (habitualmente 90 a 110 por denervação) · FR ___ irpm
Tax ___ °C · SpO2 ___% · Peso ___ kg · IMC ___
Bom estado geral, corado, hidratado, afebril, eupneico, sem estase jugular.
CV: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem B3
e sem atrito pericárdico.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: plano, flácido, indolor, sem visceromegalias.
EXTREMIDADES: sem edema.
PELE: exame dermatológico sem lesões suspeitas. Sem candidíase oral.
Ferida operatória cicatrizada, sem instabilidade esternal.

EXAMES DE __/__
Nível sérico: tacrolimo ___ ng/mL (alvo ___) · ciclosporina ___ (alvo ___) ·
sirolimo ou everolimo ___ (alvo ___)
Hb ___ · Leuco ___ · Linfócitos ___ · Plaquetas ___ · Creatinina ___ (TFG ___) · Ureia ___
K ___ · Mg ___ · TGO ___ · TGP ___ · Glicemia ___ · HbA1c ___ · LDL ___ ·
Ácido úrico ___ · PCR ___
PCR para CMV ___ · EBV ___ · Sorologias e rastreios ___
ECG: ___ · Ecocardiograma de __/__ : FEVE ___%, sem derrame pericárdico, ___
Anticorpos doador-específicos: ___
Coronariografia ou ultrassom intracoronário para doença vascular do enxerto, de __/__ : ___

AVALIAÇÃO
Pós-transplante cardíaco há ___ meses, sem evidência de rejeição, com imunossupressão
em nível terapêutico e sem complicações.

CONDUTA
1. Imunossupressão: tacrolimo ___ mg de 12/12 h, micofenolato ___ mg de 12/12 h
   e prednisona ___ mg/dia. Mantenho o esquema conforme nível e tempo de transplante.
2. Profilaxias conforme a fase: ___ (sulfametoxazol-trimetoprima para Pneumocystis,
   valganciclovir para CMV se indicado, antifúngico conforme protocolo).
   Vacinas inativadas em dia. Vacinas de vírus vivo são contraindicadas.
3. Rastreamento de doença vascular do enxerto: coronariografia ou ultrassom intracoronário
   anual, ou conforme protocolo — próximo em ___. Estatina indicada para todos, pois reduz
   doença do enxerto e mortalidade além do efeito lipídico.
4. Controle de comorbidades pós-transplante: HAS ___, DM ___, DRC ___, dislipidemia ___,
   osteoporose ___.
5. Rastreamento oncológico: avaliação dermatológica anual, com filtro solar e fotoproteção
   reforçados, além dos rastreios habituais por idade e sexo.
6. Biópsia endomiocárdica: próxima em ___, conforme protocolo ou suspeita clínica.
7. Orientações: não usar medicação nova sem checar interação — macrolídeos, azóis, diltiazem,
   verapamil, erva-de-são-joão e suco de toranja alteram o nível do inibidor de calcineurina.
   Procurar o serviço se houver febre, dispneia, edema, ganho de peso rápido, diarreia
   persistente ou síncope.
8. Solicito: ___. Retorno em ___.

Assinatura / CRM`
  },
  {
    grupo: "Ambulatório",
    nome: "Consulta de valvopatia",
    texto: `AMBULATÓRIO DE VALVOPATIA — __/__/____

Paciente de ___ anos, sexo ___, com ___ (estenose aórtica · insuficiência aórtica ·
estenose mitral · insuficiência mitral primária ou secundária · valvopatia tricúspide ·
prótese ___), de etiologia ___ (degenerativa · reumática · congênita por valva bicúspide ·
pós-endocardite · funcional), de grau ___.
Prótese, se aplicável: ___ (biológica ou mecânica), em posição ___,
implantada em __/__/____ .

SUBJETIVO
Assintomático. Dispneia NYHA ___. Sem angina, sem síncope ou pré-síncope, sem palpitação,
sem ortopneia ou dispneia paroxística noturna, sem edema e sem fadiga desproporcional.
Limitação para atividades habituais: ___. Sem redução de atividade autoimposta.
Se prótese mecânica: INR atual ___, faixa-alvo ___, tempo em faixa terapêutica ___%,
sem sangramentos.
Profilaxia de endocardite orientada, com carteirinha entregue.
Última avaliação odontológica em ___.
Nega febre, perda de peso e sudorese noturna.

EXAME FÍSICO
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% · Peso ___ kg · IMC ___
Bom estado geral, corado, eupneico, afebril.
Sem estigmas de endocardite: sem petéquias, lesões de Janeway, nódulos de Osler,
manchas de Roth ou hemorragias subungueais.
Sem estase jugular a 45 graus.
PRECÓRDIO: ictus normal. Sem frêmito.
AUSCULTA: ritmo regular em 2 tempos.
B1 ___ · B2 ___ · B3 ___ · B4 ___ · estalido de abertura ___
Sopro: foco ___, ___ (sistólico · diastólico · contínuo), intensidade ___/6 pela escala
de Levine, ___ (ejetivo · holossistólico · protodiastólico · mesodiastólico com reforço
pré-sistólico), irradiando para ___.
Manobras: ___ (aumenta com Valsalva · aumenta com handgrip · aumenta na inspiração,
sinal de Rivero-Carvallo).
Clique protossistólico ___. Clique de prótese metálica presente e normofonético.
Pulso ___ (parvus et tardus · célere e amplo de Corrigan · alternante).
Sinais periféricos de insuficiência aórtica: ___.
RESP: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
ABD: sem hepatomegalia e sem ascite.
EXTREMIDADES: sem edema.

EXAMES
ECG de __/__ : ritmo ___. ___ (hipertrofia, sobrecarga atrial, FA ou bloqueios).

ECOCARDIOGRAMA DE __/__
Geral: FEVE ___%, DDVE ___ mm, DSVE ___ mm (indexado ___ mm/m²), AE ___ mL/m²,
PSAP ___ mmHg.
Estenose aórtica: Vmáx ___ m/s · gradiente médio ___ mmHg · área ___ cm² (indexada ___) ·
fluxo ___ · strain ___%
Insuficiência mitral: mecanismo ___ · vena contracta ___ mm · orifício regurgitante ___ cm² ·
volume regurgitante ___ mL · fração ___%
Insuficiência aórtica: vena contracta ___ · PHT ___ ms · fluxo reverso holodiastólico
em aorta descendente ___
Estenose mitral: área ___ cm² · gradiente médio ___ mmHg · escore de Wilkins ___
Insuficiência tricúspide: vena contracta ___ · orifício ___ · dilatação do anel ___ ·
função do VD com TAPSE ___ e onda S' ___
Prótese: gradiente médio ___ mmHg · área efetiva ___ cm² · sem leak

OUTROS EXAMES
Eco de estresse ou teste ergométrico, se aparentemente assintomático: ___
BNP/NT-proBNP ___ — elevação desproporcional favorece a intervenção.
Angio-TC de coronárias ou coronariografia pré-intervenção: ___
A ESC/EACTS 2025 recomenda angio-TC de coronárias antes da intervenção valvar em pacientes
com probabilidade pré-teste de DAC obstrutiva baixa ou moderada.
Ressonância ou TC para planejamento de TAVI: ___

GATILHOS DE INTERVENÇÃO
Estenose aórtica grave: sintomática ___ · FEVE abaixo de 50% ___ · sintomas ao teste
de esforço ___ · assintomática mas muito grave, com Vmáx acima de 5,5 m/s, progressão
rápida ou BNP muito elevado ___
Insuficiência mitral primária grave: sintomática ___ · FEVE de 60% ou menos ___ ·
DSVE de 40 mm ou mais ___ · FA de início recente ___ · PSAP acima de 50 mmHg ___ ·
assintomática com alta probabilidade de reparo durável em centro de referência ___
Insuficiência aórtica grave: sintomática ___ · FEVE de 50% ou menos ___ ·
DSVE acima de 50 mm ou de 25 mm/m² ___
Estenose mitral grave, com área de 1,5 cm² ou menos: sintomática ___ ·
PSAP acima de 50 mmHg ___ · FA nova ___
Tricúspide: grave com sintomas ou disfunção progressiva do VD ___ ·
concomitante a cirurgia de valva esquerda ___
Situação atual: ___

AVALIAÇÃO
___. Risco cirúrgico estimado: STS ___% · EuroSCORE II ___% · fragilidade ___.

CONDUTA
1. Seguimento clínico e ecocardiográfico. Periodicidade: estenose aórtica grave assintomática
   a cada 6 meses, moderada anual e leve a cada 2 a 3 anos. Insuficiência mitral grave
   assintomática a cada 6 meses. Próximo ecocardiograma em ___.
2. Encaminhamento ao Heart Team ou a centro de valva para discutir ___ (troca valvar aórtica
   cirúrgica · TAVI · reparo mitral · TEER · comissurotomia mitral percutânea · cirurgia
   combinada). Justificativa: ___.
Conduta adotada: ___
3. Medicações: ___. Não há terapia que altere a progressão da estenose aórtica;
   tratar HAS e IC associadas com cautela.
4. Anticoagulação: ___. Prótese mecânica exige varfarina, com INR alvo de 2,0 a 3,0
   na posição aórtica e de 2,5 a 3,5 na mitral. DOAC é contraindicado em prótese mecânica
   e em estenose mitral reumática moderada ou grave.
5. Profilaxia de endocardite com amoxicilina 2 g por via oral, de 30 a 60 min antes
   de procedimento dentário com manipulação gengival. Indicada por prótese valvar,
   endocardite prévia, cardiopatia congênita cianótica ou transplante com valvopatia.
   Orientado sobre higiene bucal e avaliação odontológica periódica.
6. Orientações de esforço: ___. Procurar o pronto-socorro se houver dispneia progressiva,
   síncope, angina ou febre persistente.
7. Solicito: ___. Retorno em ___ meses.

Assinatura / CRM`
  },
  {
    grupo: "Exame físico — normal",
    nome: "Adulto ambulatorial — completo",
    texto: `EXAME FÍSICO

Sinais vitais: PA ___/___ mmHg, média de duas medidas no membro superior direito;
no esquerdo ___/___ . FC ___ bpm · FR ___ irpm · SpO2 ___% em ar ambiente · Tax ___ °C
Peso ___ kg · Altura ___ m · IMC ___ kg/m² · Circunferência abdominal ___ cm

GERAL: bom estado geral, lúcido e orientado em tempo e espaço, corado, hidratado,
anictérico, acianótico, afebril, eupneico. Perfusão periférica menor que 3 segundos.
Sem xantelasma e sem arco corneano precoce. Fácies atípica.

CABEÇA E PESCOÇO: mucosas úmidas e coradas. Sem linfonodomegalias cervicais
ou supraclaviculares. Tireoide de volume normal, sem nódulos palpáveis.
Carótidas com pulsos amplos e simétricos, sem sopros.
Sem turgência jugular patológica com o paciente a 45 graus.

PRECÓRDIO: sem abaulamentos ou retrações. Ictus cordis visível e palpável no 5º espaço
intercostal esquerdo, sobre a linha hemiclavicular, ocupando 2 polpas digitais,
não propulsivo e sem sustentação. Sem frêmitos e sem impulsão de ventrículo direito.

AUSCULTA CARDÍACA: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas,
sem sopros, sem B3 ou B4, sem estalidos, sem atrito pericárdico.
Desdobramento fisiológico de B2 na inspiração.

RESPIRATÓRIO: tórax simétrico, sem deformidades, com expansibilidade preservada
e frêmito toracovocal normal. Som claro pulmonar à percussão em todos os campos.
Murmúrio vesicular presente e simétrico bilateralmente, sem ruídos adventícios.

ABDOME: plano, com ruídos hidroaéreos presentes e normoativos, flácido e indolor
à palpação superficial e profunda, sem massas ou visceromegalias.
Fígado não palpável, com hepatimetria de ___ cm na linha hemiclavicular direita.
Espaço de Traube livre. Sem sopros abdominais. Aorta não palpável nem expansível.

EXTREMIDADES: sem edema. Panturrilhas livres, indolores e sem empastamento.
Pulsos radiais, braquiais, femorais, poplíteos, tibiais posteriores e pediosos presentes,
simétricos e de amplitude normal. Enchimento capilar menor que 3 segundos.
Sem lesões tróficas, sem varizes de grosso calibre e sem úlceras.
Índice tornozelo-braquial direito ___ e esquerdo ___.

NEUROLÓGICO: vigil, orientado, com fala e compreensão preservadas.
Pares cranianos sem alterações. Força grau V globalmente, sensibilidade preservada.
Reflexos profundos normoativos e simétricos. Sem sinais meníngeos. Marcha atípica.`
  },
  {
    grupo: "Exame físico — normal",
    nome: "Enfermaria — evolução diária",
    texto: `EXAME FÍSICO

PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · Tax ___ °C · SpO2 ___% em ar ambiente
Peso ___ kg · Balanço hídrico em 24 h ___ mL · Diurese ___ mL · HGT ___

GERAL: bom estado geral, lúcido e orientado, corado, hidratado, anictérico, acianótico,
afebril, eupneico. Perfusão periférica menor que 3 segundos.

CARDIOVASCULAR: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros
e sem B3. Sem turgência jugular a 45 graus. Pulsos periféricos presentes e simétricos.

RESPIRATÓRIO: murmúrio vesicular presente e simétrico bilateralmente,
sem ruídos adventícios.

ABDOME: plano, flácido, ruídos hidroaéreos presentes, indolor à palpação,
sem visceromegalias.

EXTREMIDADES: sem edema, panturrilhas livres.

DISPOSITIVOS: acesso venoso periférico em ___, pérvio, sem sinais de flebite.
Curativos limpos e datados.`
  },
  {
    grupo: "Exame físico — normal",
    nome: "UTI — paciente em ventilação mecânica",
    texto: `EXAME FÍSICO

PA ___/___ mmHg (PAM ___) · FC ___ bpm · FR ___ irpm · Tax ___ °C · SpO2 ___%
Diurese ___ mL/kg/h · Balanço hídrico em 24 h ___ mL

GERAL: regular estado geral, corado, hidratado, anictérico, acianótico, afebril.
Perfusão periférica menor que 3 segundos, extremidades quentes.

NEUROLÓGICO: sedado, RASS ___ para alvo ___, em ___ contínuos.
Pupilas isocóricas, de ___ mm, fotorreagentes. Sem assimetria à mobilização.
Se desperto: contactuante, obedece comandos, CAM-ICU negativo, sem déficit focal.

RESPIRATÓRIO: em ventilação mecânica por ___, modo ___, FiO2 ___%, PEEP ___,
volume corrente ___ mL (___ mL/kg de peso predito), FR ___, pressão de platô ___,
driving pressure ___ e complacência estática ___.
Tórax simétrico, com expansibilidade preservada.
Murmúrio vesicular presente e simétrico, sem ruídos adventícios.
Secreção traqueal em pequena quantidade, de aspecto claro.
Gasometria: pH ___, pCO2 ___, pO2 ___, HCO3 ___, BE ___, lactato ___, relação P/F ___.

CARDIOVASCULAR: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Ritmo sinusal ao monitor. Sem turgência jugular a 45 graus.
Noradrenalina ___ mcg/kg/min. PVC ___ mmHg.

ABDOME: plano, flácido, ruídos hidroaéreos presentes, indolor à palpação,
sem visceromegalias. Sonda enteral em posição, com resíduo de ___ mL.

EXTREMIDADES: sem edema. Panturrilhas livres. Pulsos periféricos presentes e simétricos.

PELE E DISPOSITIVOS: pele íntegra, sem lesão por pressão. Escala de Braden ___.
Acesso venoso central em ___ (D___), curativo limpo e datado, sítio sem sinais flogísticos.
PAI em ___ (D___), com curva adequada e sem isquemia distal.
Sonda vesical (D___), com urina clara e sistema fechado — indicação reavaliada hoje.`
  },
  {
    grupo: "Exame físico — normal",
    nome: "Pronto-socorro — exame rápido dirigido",
    texto: `EXAME FÍSICO

PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% em ar ambiente ·
Tax ___ °C · HGT ___ mg/dL

Bom estado geral, lúcido e orientado, corado, hidratado, acianótico, anictérico,
afebril, eupneico. Perfusão menor que 3 segundos.
CARDIOVASCULAR: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
Sem turgência jugular. Pulsos presentes e simétricos nos quatro membros.
RESPIRATÓRIO: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Sem dor à palpação da parede torácica.
ABDOME: plano, flácido, indolor, sem massa pulsátil.
EXTREMIDADES: sem edema e sem assimetria. Panturrilhas livres.
NEUROLÓGICO: Glasgow 15, sem déficit focal, sem sinais meníngeos.`
  },
  {
    grupo: "Exame físico — normal",
    nome: "Hemodinâmica — pós-cateterismo ou angioplastia",
    texto: `EXAME FÍSICO

PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SpO2 ___% em ar ambiente ·
Tax ___ °C · HGT ___ mg/dL

Bom estado geral, consciente e orientado, corado, hidratado, acianótico, anictérico, afebril.
RESPIRATÓRIO: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Eupneico em ar ambiente.
CARDIOVASCULAR: ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros.
ABDOME: plano, flácido, indolor à palpação, sem visceromegalias.
EXTREMIDADES: bem perfundidas, sem edema de membros inferiores, panturrilhas livres.
Pulsos periféricos presentes e simétricos.
SÍTIO DE PUNÇÃO em ___: bom aspecto, sem sangramento ativo, sem hematoma e sem expansão.
Sem sopro, sem massa pulsátil e sem sinais de pseudoaneurisma.
Extremidade distal bem perfundida, sem sinais de isquemia.`
  },
  {
    grupo: "Exame físico — normal",
    nome: "Blocos por sistema — para montar sob medida",
    texto: `BLOCOS DE EXAME FÍSICO NORMAL
Copie apenas os blocos de que você precisa.

SINAIS VITAIS
PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · Tax ___ °C · SpO2 ___% em ar ambiente
Peso ___ kg · Altura ___ m · IMC ___ kg/m² · HGT ___ mg/dL

ESTADO GERAL
Bom estado geral, lúcido e orientado em tempo e espaço, corado, hidratado, anictérico,
acianótico, afebril, eupneico. Perfusão periférica menor que 3 segundos.

CABEÇA E PESCOÇO
Mucosas úmidas e coradas. Sem linfonodomegalias. Tireoide de volume normal, sem nódulos.
Carótidas com pulsos amplos e simétricos, sem sopros.
Sem turgência jugular patológica a 45 graus. Sem refluxo hepatojugular.

PRECÓRDIO — INSPEÇÃO E PALPAÇÃO
Sem abaulamentos ou retrações. Ictus no 5º espaço intercostal esquerdo, sobre a linha
hemiclavicular, ocupando 2 polpas digitais, não propulsivo. Sem frêmitos.
Sem impulsão de ventrículo direito.

AUSCULTA CARDÍACA
Ritmo cardíaco regular em 2 tempos, bulhas normofonéticas, sem sopros, sem B3 ou B4,
sem estalidos e sem atrito pericárdico. Desdobramento fisiológico de B2 na inspiração.

RESPIRATÓRIO
Tórax simétrico, sem deformidades, com expansibilidade preservada e frêmito toracovocal
normal. Som claro pulmonar à percussão. Murmúrio vesicular presente e simétrico,
sem ruídos adventícios.

ABDOME
Plano, ruídos hidroaéreos presentes e normoativos, flácido, indolor à palpação superficial
e profunda, sem massas ou visceromegalias. Fígado não palpável. Espaço de Traube livre.
Sem sopros abdominais. Aorta não palpável nem expansível.

EXTREMIDADES E VASCULAR
Sem edema. Panturrilhas livres, indolores e sem empastamento.
Pulsos radiais, femorais, poplíteos, tibiais posteriores e pediosos presentes, simétricos
e de amplitude normal. Enchimento capilar menor que 3 segundos.
Sem lesões tróficas e sem úlceras. Índice tornozelo-braquial direito ___ e esquerdo ___.

PÉS DO PACIENTE DIABÉTICO
Pele íntegra, sem úlceras, sem micose interdigital e sem deformidades.
Monofilamento de 10 g preservado nos ___ pontos testados.
Sensibilidade vibratória preservada. Pulsos pediosos e tibiais posteriores presentes.

NEUROLÓGICO
Vigil, orientado, Glasgow 15 (AO4 RV5 RM6), com fala e compreensão preservadas.
Pupilas isocóricas e fotorreagentes. Pares cranianos sem alterações.
Força grau V globalmente e sensibilidade preservada.
Reflexos profundos normoativos e simétricos. Sem sinais meníngeos. Marcha atípica.

SEDAÇÃO E VENTILAÇÃO
Sedado, RASS ___ para alvo ___, em ___ contínuos. Pupilas isocóricas e fotorreagentes.
Em ventilação mecânica, modo ___, FiO2 ___%, PEEP ___, volume corrente ___ mL, FR ___.
Se desperto: contactuante, obedece comandos, CAM-ICU negativo.

DISPOSITIVOS
Acesso venoso periférico em ___ (D___), pérvio, sem flebite.
Acesso venoso central em ___ (D___), curativo limpo e datado, sítio sem sinais flogísticos.
PAI em ___ (D___), com curva adequada e sem isquemia distal.
Sonda vesical (D___), urina clara, sistema fechado, indicação reavaliada.
Sonda enteral em posição confirmada (D___), pérvia, resíduo de ___ mL.
Dreno ___ (D___), com débito de ___ mL em 24 h, de aspecto ___.
Pele íntegra, sem lesão por pressão. Escala de Braden ___.

FERIDA OPERATÓRIA
Esternotomia com bordas coaptadas, seca, sem sinais flogísticos e sem instabilidade
esternal. Safenectomia limpa e seca.

SÍTIO DE PUNÇÃO ARTERIAL
Sítio em ___ com bom aspecto, sem sangramento, sem hematoma e sem expansão.
Sem sopro e sem massa pulsátil. Pulso distal presente e extremidade bem perfundida.`
  },
  {
    grupo: "Exame físico — normal",
    nome: "Descritores normais — dicionário rápido",
    texto: `DICIONÁRIO DE DESCRITORES NORMAIS
Cole a linha que faltar no seu exame.

PULSO VENOSO JUGULAR
Sem turgência jugular patológica com o paciente a 45 graus.
Pulso venoso jugular visível apenas na base do pescoço, com onda a dominante.
Sem refluxo hepatojugular. Sem sinal de Kussmaul.

ICTUS
Ictus no 5º espaço intercostal esquerdo, sobre a linha hemiclavicular, ocupando 2 polpas
digitais, não propulsivo, sem sustentação e sem duplo impulso.

BULHAS
B1 normofonética, B2 normofonética com desdobramento fisiológico na inspiração.
Sem B3, sem B4, sem estalido de abertura e sem clique.

SOPROS
Sem sopros em focos aórtico, pulmonar, tricúspide e mitral, tanto em decúbito dorsal
quanto em decúbito lateral esquerdo e sentado, inclinado à frente.

PULSOS ARTERIAIS
Pulsos amplos, simétricos e de morfologia normal em radiais, braquiais, carótidas,
femorais, poplíteos, tibiais posteriores e pediosos.
Sem pulso paradoxal (variação inspiratória menor que 10 mmHg).
Diferença de PA entre os membros superiores menor que 10 mmHg.

PADRÃO RESPIRATÓRIO
Eupneico, em ar ambiente, com padrão toracoabdominal, sem uso de musculatura acessória,
sem tiragem e sem batimento de asa de nariz. Fala em frases completas.

AUSCULTA PULMONAR
Murmúrio vesicular presente e simétrico em todos os campos, sem estertores, sem sibilos,
sem roncos e sem atrito pleural. Tempo expiratório normal.

FÍGADO E BAÇO
Fígado não palpável, com hepatimetria de ___ cm na linha hemiclavicular direita,
de borda fina e indolor. Baço não palpável, com espaço de Traube livre.

EDEMA E PERFUSÃO
Sem edema em membros inferiores, região sacral ou periorbitária.
Extremidades quentes e bem perfundidas, com enchimento capilar menor que 3 segundos.
Sem cianose e sem livedo.

PELE
Pele íntegra, hidratada, sem lesões, sem petéquias, sem equimoses espontâneas
e sem lesão por pressão.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Estado geral, pele e perfusão",
    texto: `Banco de achados. Substitua a linha correspondente do exame normal.

ESTADO GERAL
Regular estado geral, lúcido e orientado, hipocorado ___/4+, hidratado, anictérico,
acianótico, afebril. Perfusão de 3 segundos.
Mau estado geral, sonolento, hipocorado 3+/4+, desidratado 2+/4+, ictérico 2+/4+,
febril, com temperatura axilar de 38,4 °C.
Regular estado geral, emagrecido, com perda de massa muscular temporal e de interósseos —
caquexia cardíaca.

PERFUSÃO E PELE
Livedo reticular em membros inferiores e joelhos. Moteamento com mottling score ___.
Extremidades frias e pálidas, com enchimento capilar acima de 3 segundos.
Cianose central em lábios e língua.
Cianose periférica em extremidades.
Turgor cutâneo diminuído, mucosas secas e olhos encovados.

COLORAÇÃO
Icterícia 2+/4+ de escleras.
Palidez cutâneo-mucosa 3+/4+.

EDEMA
Edema de membros inferiores ___/4+, com cacifo, mole e frio, até ___.
Anasarca: edema de membros inferiores 4+/4+, de parede abdominal, escrotal e periorbitário.

LESÕES E SANGRAMENTO
Lesão por pressão em região sacral, estágio ___, medindo ___ cm, com leito ___,
sem sinais de infecção. Escala de Braden ___.
Petéquias em membros inferiores. Equimoses espontâneas em ___.
Sangramento em sítio de punção de ___.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Cardiovascular — inspeção, palpação, ausculta",
    texto: `Banco de achados. Substitua a linha correspondente do exame normal.

PULSO VENOSO JUGULAR
Turgência jugular patológica a 45 graus, com estase até o ângulo da mandíbula.
Refluxo hepatojugular presente.
Onda v proeminente — insuficiência tricúspide.
Onda a em canhão — dissociação atrioventricular.
Sinal de Kussmaul, com a turgência aumentando na inspiração —
pericardite constritiva ou disfunção de ventrículo direito.

INSPEÇÃO E PALPAÇÃO DO PRECÓRDIO
Ictus desviado para a linha axilar anterior, no 6º espaço intercostal, difuso,
ocupando 3 polpas digitais, propulsivo.
Frêmito sistólico em foco aórtico.
Frêmito diastólico em foco mitral.

RITMO
Irregularmente irregular, sem onda P audível, com déficit de pulso de ___ bpm.
Taquicárdico, regular, com FC de ___ bpm.
Bradicárdico, com FC de ___ bpm.

BULHAS
Bulhas hipofonéticas e abafadas — considerar derrame pericárdico, obesidade ou DPOC.
B3 audível em foco mitral, em decúbito lateral esquerdo —
sobrecarga de volume e disfunção sistólica.
B4 audível — disfunção diastólica ou hipertrofia ventricular.
Hiperfonese de B2 em foco pulmonar — hipertensão pulmonar.
Desdobramento fixo de B2 — comunicação interatrial.
Desdobramento paradoxal de B2 — bloqueio de ramo esquerdo ou estenose aórtica grave.
Estalido de abertura em foco mitral — estenose mitral.
Atrito pericárdico em borda esternal esquerda baixa, trifásico, que aumenta na expiração
e com o paciente inclinado à frente.

SOPROS SISTÓLICOS
Foco aórtico, 3/6, ejetivo, em crescendo-decrescendo, irradiando para as carótidas —
estenose aórtica.
Foco mitral, 3/6, holossistólico, irradiando para a axila — insuficiência mitral.
Foco tricúspide, 2/6, que aumenta à inspiração, sinal de Rivero-Carvallo —
insuficiência tricúspide.
Foco aórtico, que aumenta com Valsalva e ortostatismo e diminui com handgrip —
cardiomiopatia hipertrófica obstrutiva.

SOPROS DIASTÓLICOS
Borda esternal esquerda, 2/4, aspirativo, em decrescendo, melhor audível na expiração
com o paciente sentado e inclinado à frente — insuficiência aórtica.
Foco mitral, em ruflar, com reforço pré-sistólico, precedido de estalido de abertura —
estenose mitral.

SOPRO CONTÍNUO
Região infraclavicular esquerda, em maquinaria — persistência do canal arterial.

PULSOS ARTERIAIS
Parvus et tardus — estenose aórtica.
Célere e amplo, de Corrigan — insuficiência aórtica.
Alternante — disfunção sistólica grave.
Paradoxal, com queda acima de 10 mmHg na inspiração — tamponamento, asma ou DPOC grave.
Pedioso e tibial posterior ausentes à direita, com femoral presente e reduzido,
e sopro audível em femoral direita.
Assimetria de PA entre os membros superiores de ___ mmHg —
atenção para dissecção de aorta ou coarctação.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Respiratório",
    texto: `Banco de achados. Substitua a linha correspondente do exame normal.

PADRÃO E ESFORÇO
Taquipneico, com FR de ___ irpm, uso de musculatura acessória, tiragem intercostal
e batimento de asa de nariz.
Fala em frases entrecortadas. Dispneia em repouso.
Padrão de Cheyne-Stokes.
Respiração de Kussmaul.

INSPEÇÃO, PALPAÇÃO E PERCUSSÃO
Expansibilidade diminuída em base direita, com frêmito toracovocal diminuído e macicez
à percussão — sugere derrame pleural.
Hipertimpanismo em hemitórax direito com desvio de traqueia para a esquerda —
pneumotórax hipertensivo, drenar imediatamente.

AUSCULTA
Murmúrio vesicular diminuído em base esquerda, abolido a partir do ___ espaço intercostal,
com egofonia acima do nível.
Estertores crepitantes finos em bases.
Estertores crepitantes em terços médios e inferiores, bilateralmente.
Estertores subcrepitantes grossos difusos, com roncos de transmissão.
Sibilos expiratórios difusos, com tempo expiratório prolongado.
Tórax silencioso, com murmúrio vesicular globalmente diminuído —
atenção, broncoespasmo grave.

SECREÇÃO
Secreção traqueal em grande quantidade, purulenta, amarelada e com odor fétido.
Secreção traqueal escassa e clara.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Abdome, extremidades e vascular",
    texto: `Banco de achados. Substitua a linha correspondente do exame normal.

ABDOME
Globoso à custa de ascite, com macicez móvel de decúbito e piparote presente.
Circulação colateral em ___.
Doloroso à palpação em ___, com descompressão brusca negativa.
Massa pulsátil e expansível em região periumbilical —
investigar aneurisma de aorta abdominal.
Ruídos hidroaéreos ausentes, hipoativos, ou hiperativos e metálicos.

FÍGADO E BAÇO
Fígado palpável a ___ cm do rebordo costal direito, de borda romba, superfície lisa
e doloroso à palpação — hepatomegalia congestiva.
Refluxo hepatojugular presente.
Baço palpável a ___ cm do rebordo costal esquerdo. Espaço de Traube ocupado.

EDEMA E SINAIS DE TVP
Edema de membros inferiores simétrico, ___/4+, com cacifo, mole e frio, até ___.
Edema assimétrico de membro inferior esquerdo, com aumento de perimetria de ___ cm,
empastamento de panturrilha, dor à dorsiflexão do pé e circulação colateral superficial —
investigar trombose venosa profunda.

ISQUEMIA ARTERIAL
Membro inferior direito frio e pálido, com ausência de pulsos poplíteo, tibial posterior
e pedioso, associada a parestesia e redução de força —
isquemia arterial aguda, acionar a cirurgia vascular.

ÚLCERAS E NECROSE
Úlcera em maléolo medial esquerdo, de ___ por ___ cm, com bordas irregulares, fundo
com tecido de granulação, exsudato ___, com dermatite ocre e lipodermatoesclerose
perilesional — úlcera venosa.
Úlcera em região plantar ou calcâneo, com bordas em saca-bocado, fundo necrótico
e indolor — úlcera neuropática ou isquêmica.
Necrose seca de ___ pododáctilos do pé direito, com linha de demarcação em ___,
sem secreção e sem crepitação.
Necrose úmida com secreção purulenta, odor fétido, crepitação à palpação e celulite
ascendente até ___ — emergência cirúrgica.`
  },
  {
    grupo: "Exame físico — achados alterados",
    nome: "Neurológico, sedação e dispositivos",
    texto: `Banco de achados. Substitua a linha correspondente do exame normal.

NÍVEL DE CONSCIÊNCIA
Sonolento, Glasgow ___ (AO___ RV___ RM___), desperta ao chamado verbal e volta a dormir.
Torporoso, responde apenas a estímulo doloroso com retirada. Pupilas de ___ mm,
fotorreagentes.

DELIRIUM
Agitado, tentando remover dispositivos, RASS +2 — CAM-ICU positivo, delirium hiperativo.
Hipoativo, desatento, com flutuação do nível de consciência — CAM-ICU positivo, hipoativo.

SEDAÇÃO E BLOQUEIO NEUROMUSCULAR
Sedado, RASS −4 para alvo −2, sob fentanil ___ mcg/kg/h e midazolam ___ mg/kg/h contínuos.
Sem despertar diário nas últimas 24 h.
Sob bloqueio neuromuscular com cisatracúrio ___ mcg/kg/min, TOF ___/4,
com sedação profunda garantida.

DÉFICIT FOCAL E FORÇA
Hemiparesia à direita grau ___, com desvio de rima labial para a esquerda e disartria —
NIHSS ___.
Força muscular global reduzida, MRC ___/60 — fraqueza adquirida na UTI.

ACESSOS VASCULARES
Acesso venoso central em veia jugular interna direita (D___), com curativo limpo e datado
e sítio de inserção sem sinais flogísticos.
Acesso venoso periférico em membro superior esquerdo (D___), pérvio, sem flebite,
escala de flebite grau 0.
PAI em artéria radial esquerda (D___), com curva adequada e sem isquemia distal.
Cateter de artéria pulmonar (D___): PAP média ___, POAP ___, índice cardíaco ___ L/min/m²,
RVS ___, SvO2 ___%.

VIA AÉREA E VENTILAÇÃO
Tubo orotraqueal nº ___, fixado a ___ cm da rima labial (D___), com pressão de cuff
de ___ cmH2O.
Traqueostomia nº ___ (D___), pérvia, sem sangramento, sem enfisema subcutâneo
e com óstio sem sinais flogísticos.

SONDAS E DRENOS
Sonda nasoenteral em posição pós-pilórica confirmada por radiografia (D___), pérvia,
com dieta em curso e resíduo de ___ mL.
Sonda vesical de demora (D___), com urina clara e citrina, em sistema fechado —
indicação reavaliada.
Dreno mediastinal e pleural à esquerda (D___), com débito de ___ mL em 24 h,
serossanguinolento.

DISPOSITIVOS CARDÍACOS
Marcapasso provisório transvenoso em VVI a ___ bpm, com limiar de ___ mA
e sensibilidade de ___ mV (D___).
Fios de marcapasso epicárdico presentes e testados, com limiar de ___ mA.
Balão intra-aórtico em 1:1, com curva adequada, bem posicionado e sem isquemia
de membro (D___).`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "SCA com supra de ST (IAMCSST)",
    texto: `CONDUTA — IAM COM SUPRA DE ST

TEMPO
Início dos sintomas às ___h · Chegada às ___h · ECG diagnóstico às ___h,
com meta de até 10 min da chegada.
Estratégia adotada: ___
1. Angioplastia primária — hemodinâmica acionada às ___h, meta de porta-balão de até 90 min.
2. Fibrinólise — meta de porta-agulha de até 30 min, quando a angioplastia não estiver
   disponível em até 120 min.

MEDIDAS IMEDIATAS
1. Monitorização contínua, desfibrilador à beira do leito e dois acessos venosos
   periféricos calibrosos.
2. Oxigênio apenas se a SpO2 estiver abaixo de 90%.
3. AAS 300 mg por via oral, mastigado e engolido.
4. Inibidor de P2Y12: ticagrelor 180 mg, preferencial na angioplastia primária;
   ou clopidogrel 600 mg (300 mg se fibrinólise, e sem ataque acima de 75 anos com fibrinólise);
   ou prasugrel 60 mg, apenas após conhecer a anatomia e contraindicado se houver AVC
   ou AIT prévio.
5. Anticoagulação: enoxaparina 30 mg EV em bolus mais 1 mg/kg SC de 12/12 h — sem bolus
   e 0,75 mg/kg acima de 75 anos, e 1 mg/kg a cada 24 h se clearance abaixo de 30.
   Alternativa: HNF 60 U/kg EV em bolus, máximo de 4.000 U, mais 12 U/kg/h.
6. Analgesia: morfina 2 a 4 mg EV se a dor for refratária. Usar com parcimônia,
   pois retarda a absorção do inibidor de P2Y12.
7. Nitrato: isossorbida 5 mg sublingual, ou nitroglicerina EV, se houver dor, hipertensão
   ou congestão. Contraindicado se PAS abaixo de 90 mmHg, IAM de ventrículo direito
   ou uso de inibidor de PDE5 nas últimas 24 a 48 h.
8. Betabloqueador por via oral nas primeiras 24 h, se não houver IC aguda, baixo débito,
   risco de choque, BAV avançado ou broncoespasmo. Na fase aguda a indicação permanece
   Classe 1, pois reduz arritmia e reinfarto.
   Manutenção após a alta — o que mudou:
   Com FEVE de 40% ou menos, angina ou arritmia, manter indefinidamente. É onde o benefício
   está estabelecido.
   Com FEVE acima de 40% e sem outra indicação, o benefício de longo prazo não foi
   demonstrado. REDUCE-AMI (FEVE de 50% ou mais, n = 5.020) e REBOOT (FEVE acima de 40%,
   n = 8.438) não mostraram redução de morte, reinfarto ou internação por IC, e o REBOOT
   sinalizou possível dano em mulheres com FEVE de 50% ou mais.
   Reavaliar caso a caso e registrar a decisão.
9. Estatina de alta intensidade: atorvastatina 80 mg por via oral.
10. Se a parede for inferior, fazer V3R, V4R e V7 a V9. Havendo IAM de ventrículo direito,
    dar volume e evitar nitrato e diurético.

APÓS A REPERFUSÃO
Monitorização em unidade coronariana por pelo menos 24 a 48 h.
Dupla antiagregação por 12 meses, individualizando se houver alto risco de sangramento.
IECA ou BRA nas primeiras 24 h se FEVE de 40% ou menos, HAS, DM ou DRC.
Antagonista mineralocorticoide se FEVE de 40% ou menos com IC ou DM, sem hipercalemia
nem DRC grave.
Ecocardiograma antes da alta. Reabilitação cardiovascular. Cessação do tabagismo.
Metas: LDL abaixo de 50 mg/dL com redução de pelo menos 50%, PA abaixo de 130/80
e HbA1c individualizada.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "SCA sem supra de ST (IAMSSST / angina instável)",
    texto: `CONDUTA — SCA SEM SUPRA DE ST

ESTRATIFICAÇÃO
GRACE ___ · TIMI ___ · HEART ___
Troponina ultrassensível: T0 ___ para T1h ou T2h ___ , com delta de ___

Momento da estratégia invasiva:
Imediata, em menos de 2 h — instabilidade hemodinâmica ou elétrica, choque, IC aguda,
dor refratária, supra transitório, arritmia ventricular grave ou complicação mecânica.
Precoce, em menos de 24 h — GRACE acima de 140, curva de troponina compatível com infarto
ou alterações dinâmicas de ST e T.
Seletiva — baixo risco, sem os critérios acima: teste funcional ou angio-TC de coronárias.
Estratégia adotada: ___

CONDUTA
1. Monitorização contínua, ECG seriado, acesso venoso e repouso.
2. AAS 300 mg por via oral de ataque, depois 100 mg/dia.
3. Inibidor de P2Y12: ticagrelor 180 mg, depois 90 mg de 12/12 h.
   Prasugrel apenas após conhecer a anatomia — não pré-tratar.
   Clopidogrel 300 a 600 mg se ticagrelor e prasugrel estiverem indisponíveis
   ou contraindicados, ou se o paciente estiver anticoagulado.
4. Anticoagulação: enoxaparina 1 mg/kg SC de 12/12 h, ou fondaparinux 2,5 mg SC/dia,
   ou HNF.
5. Betabloqueador por via oral na fase aguda, se não houver contraindicação.
   Após a alta, manter indefinidamente apenas se FEVE de 40% ou menos, angina ou arritmia;
   com FEVE acima de 40% o benefício de longo prazo não foi demonstrado (REDUCE-AMI e REBOOT).
   Nitrato para controle sintomático.
6. Atorvastatina 80 mg/dia, ou rosuvastatina 20 a 40 mg.
7. IECA ou BRA se houver HAS, DM, DRC ou FEVE de 40% ou menos.
8. Ecocardiograma para avaliar função ventricular e complicações.
9. Se houver anticoagulação crônica concomitante, manter DOAC mais clopidogrel
   e suspender o AAS precocemente, em 1 a 4 semanas.

NÃO ESQUECER
Reavaliar o diagnóstico se houver troponina elevada sem doença coronariana obstrutiva —
MINOCA, miocardite, TEP, sepse, taquiarritmia, DRC ou IC. Considerar ressonância cardíaca.
Definir e documentar a estratégia, invasiva ou conservadora, e o prazo.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "Edema agudo de pulmão",
    texto: `CONDUTA — EDEMA AGUDO DE PULMÃO

1. Posição sentada, com as pernas pendentes. Monitorização contínua. Acesso venoso.

2. Oxigenação para SpO2 de pelo menos 94%.
   Ventilação não invasiva precoce — CPAP de 8 a 10 cmH2O ou BiPAP — se houver desconforto
   respiratório, taquipneia ou hipercapnia. Reduz intubação e melhora o desfecho.
   Contraindicada em rebaixamento, instabilidade grave, vômitos e trauma de face.
   Intubar se houver falha da ventilação não invasiva, rebaixamento, exaustão respiratória
   ou instabilidade refratária.

3. Vasodilatador, se a PAS estiver acima de 110 mmHg — é o pilar do tratamento
   no edema agudo hipertensivo.
   Nitroglicerina EV de 10 a 20 mcg/min, aumentando 10 a 20 mcg/min a cada 3 a 5 min,
   até 200 mcg/min, guiada pela pressão e pelos sintomas.
   Enquanto a bomba é preparada, isossorbida 5 mg sublingual.
   Nitroprussiato se houver hipertensão grave refratária ou insuficiência mitral
   ou aórtica aguda.

4. Diurético: furosemida 20 a 40 mg EV, ou 1 a 2,5 vezes a dose oral diária se já usa.
   Reavaliar em 2 h e dobrar se a resposta for insuficiente. Não é o pilar do edema agudo
   hipertensivo, em que o paciente costuma estar normovolêmico com redistribuição de volume —
   mas é essencial no paciente congesto.

5. Identificar e tratar o gatilho: síndrome coronariana aguda (ECG e troponina),
   crise hipertensiva, FA de alta resposta, insuficiência mitral aguda, endocardite,
   anemia, infecção, má adesão e disfunção renal.

6. Se houver hipotensão ou hipoperfusão, não usar vasodilatador.
   Inotrópico com dobutamina, associado ou não a noradrenalina.

7. Morfina: não usar de rotina, pois se associa a pior desfecho.
   Reservar para dor ou dispneia muito refratária.

8. Solicitar ECG, troponina, NT-proBNP, gasometria, eletrólitos, função renal, hemograma,
   radiografia de tórax e ecocardiograma.

9. Sondagem vesical para controle de diurese se houver instabilidade ou necessidade
   de balanço rigoroso.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "Bundle de sepse (1ª hora)",
    texto: `BUNDLE DE SEPSE — INICIAR NA PRIMEIRA HORA

1. Dosar lactato. Repetir em 2 a 4 h se estiver acima de 2 mmol/L, até normalizar.

2. Colher hemoculturas, dois pares de sítios distintos, mais culturas do foco suspeito.
   Antes do antibiótico, desde que isso não atrase a primeira dose em mais de 45 min.

3. Antibiótico de amplo espectro endovenoso o mais rápido possível, idealmente em menos
   de 1 h no choque séptico. Esquema conforme o foco: ___.

4. Cristaloide balanceado, pelo menos 30 mL/kg EV nas primeiras 3 h, se houver hipotensão
   induzida por sepse ou lactato de 4 mmol/L ou mais. A recomendação foi mantida
   na Surviving Sepsis 2026. O volume necessário varia muito entre pacientes: reavaliar
   com frequência para não sub-ressuscitar nem hiper-ressuscitar.
   Individualizar em IC, DRC dialítica e cirrose.

5. Vasopressor se a PAM ficar abaixo de 65 mmHg após, ou durante, a reposição:
   noradrenalina, que pode ser iniciada em acesso periférico calibroso enquanto
   se obtém o central.

6. Controle do foco em até 6 a 12 h: drenagem, retirada de cateter, desbridamento
   ou cirurgia.

REAVALIAÇÃO CONTINUADA
Perfusão: lactato, tempo de enchimento capilar, débito urinário, nível de consciência
e temperatura das extremidades.
Responsividade a fluidos: elevação passiva de pernas, variação de pressão de pulso,
VTI ao POCUS e colapso da veia cava inferior. Não usar PVC isolada como guia.
Vasopressina 0,03 U/min se a noradrenalina estiver em dose crescente.
Hidrocortisona 200 mg/dia (50 mg EV de 6/6 h) se o choque for refratário.
Hemotransfusão se Hb abaixo de 7 g/dL, ou abaixo de 8 se houver isquemia miocárdica.
Ventilação protetora se houver SDRA: volume corrente de 6 mL/kg de peso predito,
pressão de platô abaixo de 30 cmH2O e driving pressure abaixo de 15.
Glicemia alvo entre 140 e 180 mg/dL. Profilaxia de TEV e de lesão aguda de mucosa gástrica.
Nutrição enteral precoce.
Reavaliar o espectro do antibiótico em 48 a 72 h — descalonar e definir a duração.

Referência: Surviving Sepsis Campaign — International Guidelines for Management of Sepsis
and Septic Shock, 2026.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "FA aguda no PS",
    texto: `CONDUTA — FIBRILAÇÃO ATRIAL AGUDA

1. O PACIENTE ESTÁ INSTÁVEL?
Procurar hipotensão, dor torácica isquêmica, IC aguda ou edema agudo de pulmão
e rebaixamento do nível de consciência.
Se sim, cardioversão elétrica sincronizada imediata.
Sedação: etomidato 0,15 a 0,3 mg/kg, ou propofol 0,5 a 1 mg/kg, mais fentanil 1 mcg/kg.
Energia bifásica: FA 120 a 200 J · flutter e TSV 50 a 100 J · TV monomórfica com pulso 100 J.

2. ESTÁVEL — DEFINIR TEMPO E RISCO EMBÓLICO (SBC 2025)
Início dos sintomas há ___ h. A janela segura para cardioversão sem anticoagulação prévia
é de menos de 24 h.
Alto risco embólico significa FA valvar, evento embólico prévio ou CHA2DS2-VA de 2 ou mais.
Se alto risco: não cardioverter de imediato, mesmo com menos de 24 h. Anticoagular
e controlar a frequência, ou fazer ecocardiograma transesofágico para excluir trombo.
Se baixo risco e menos de 24 h: cardioversão elétrica ou química é possível.
Se 24 h ou mais, ou início indeterminado: controle de frequência mais anticoagulação plena
por pelo menos 3 semanas antes da cardioversão eletiva, ou transesofágico para excluir trombo.

3. CONTROLE DE FREQUÊNCIA — META ABAIXO DE 110 BPM EM REPOUSO
Metoprolol 2,5 a 5 mg EV lento, repetindo até 3 vezes, no máximo 15 mg;
depois 25 a 100 mg por via oral de 12/12 h.
Diltiazem 0,25 mg/kg EV em 2 min, depois 5 a 15 mg/h contínuo — se houver broncoespasmo
com FEVE preservada. Contraindicado na IC com FE reduzida.
Digoxina 0,25 mg EV a cada 2 h, no máximo 1,5 mg em 24 h — se houver IC ou hipotensão.
Amiodarona se refratário ou se houver disfunção ventricular grave.
Atenção: em FA com pré-excitação (WPW), não usar bloqueador do nó AV — nem betabloqueador,
nem bloqueador de cálcio, nem digoxina, nem adenosina.
Usar procainamida ou amiodarona, ou cardioverter eletricamente.

4. CONTROLE DE RITMO
Cardioversão química: amiodarona 150 mg EV em 10 min, depois 1 mg/min por 6 h.
Propafenona 450 a 600 mg por via oral em dose única, o pill-in-the-pocket, apenas sem
cardiopatia estrutural e sem doença coronariana. Associar bloqueador do nó AV para evitar
flutter com condução 1:1.
A SBC 2025 recomenda o controle de ritmo como estratégia preferencial na maioria dos
pacientes, e a ablação por cateter é opção de primeira linha na FA sintomática,
paroxística ou persistente.

5. ANTICOAGULAÇÃO — CHA2DS2-VA (o sexo feminino saiu do escore)
IC 1 · HAS 1 · Idade de 75 anos ou mais 2 · DM 1 · AVC, AIT ou tromboembolismo 2 ·
Doença vascular 1 · Idade de 65 a 74 anos 1
0 não anticoagular · 1 individualizar · 2 ou mais anticoagular.
Anticoagular independentemente do escore em cardiomiopatia hipertrófica, amiloidose
cardíaca, hipertireoidismo, estenose mitral reumática moderada ou grave e prótese mecânica.
Após cardioversão, anticoagular por pelo menos 4 semanas, independentemente do escore.
Escolha: DOAC é preferencial, exceto em prótese mecânica e estenose mitral reumática,
em que se usa varfarina.

6. INVESTIGAR A CAUSA
TSH, eletrólitos com potássio e magnésio, hemograma, função renal, troponina se houver dor
e ecocardiograma. Rastrear apneia do sono, álcool, infecção, TEP e pós-operatório.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "Crise hipertensiva — elevação importante da PA x emergência",
    texto: `CONDUTA — ELEVAÇÃO IMPORTANTE DA PA (SBC 2025)

NOTA DE TERMINOLOGIA
A Diretriz Brasileira de Hipertensão Arterial 2025 retirou o termo urgência hipertensiva.
PA muito elevada sem lesão aguda de órgão-alvo passou a ser chamada de elevação importante
da PA sem lesão progressiva de órgão-alvo — e não é emergência.

A PERGUNTA QUE DEFINE TUDO: HÁ LESÃO AGUDA DE ÓRGÃO-ALVO?
Procurar ativamente:
Dor torácica — síndrome coronariana aguda ou dissecção de aorta.
Dispneia — edema agudo de pulmão.
Déficit neurológico — AVC.
Cefaleia com alteração visual ou confusão — encefalopatia hipertensiva.
Oligúria, elevação de creatinina ou hematúria — lesão renal aguda.
Papiledema à fundoscopia.
Gestante com PA elevada — pré-eclâmpsia grave ou eclâmpsia.

EMERGÊNCIA HIPERTENSIVA — COM LESÃO AGUDA E PROGRESSIVA DE ÓRGÃO-ALVO
Internação em unidade de terapia intensiva, com monitorização e anti-hipertensivo endovenoso.
Meta geral: reduzir a PAM em até 25% na primeira hora, depois para cerca de 160/100 mmHg
em 2 a 6 h, normalizando em 24 a 48 h.

EXCEÇÕES À REDUÇÃO GRADUAL
Dissecção de aorta: PAS abaixo de 120 mmHg e FC abaixo de 60 bpm em 20 min.
Betabloqueador endovenoso primeiro — esmolol ou metoprolol — e só depois o vasodilatador,
para evitar taquicardia reflexa e aumento do dP/dt.
AVC isquêmico: só tratar se a PA estiver acima de 220/120 mmHg, ou acima de 185/110 mmHg
se o paciente for candidato a trombólise. Redução de 15% em 24 h.
AVC hemorrágico: PAS alvo entre 130 e 140 mmHg.
Eclâmpsia e pré-eclâmpsia grave: hidralazina ou labetalol, associados a sulfato de magnésio.

FÁRMACOS ENDOVENOSOS
Nitroprussiato de sódio 0,3 a 10 mcg/kg/min — fotossensível, com risco de cianeto.
Nitroglicerina 5 a 200 mcg/min — preferida na síndrome coronariana aguda
e no edema agudo de pulmão.
Metoprolol 5 mg EV lento, podendo repetir.
Esmolol 0,5 mg/kg em bolus, seguido de 50 a 300 mcg/kg/min.
Hidralazina 5 a 10 mg EV a cada 20 a 30 min — opção na gestação.

ELEVAÇÃO IMPORTANTE DA PA SEM LESÃO PROGRESSIVA DE ÓRGÃO-ALVO
Definição: PAS de 180 ou mais, ou PAD de 110 ou mais, sem lesão aguda de órgão-alvo.
Não é emergência e não exige redução rápida nem internação.
Repouso em ambiente calmo por 30 min e reaferição — boa parte normaliza.
Tratar dor, ansiedade e retenção urinária.
Iniciar ou ajustar o anti-hipertensivo habitual, por via oral.
Investigar má adesão, que é a causa mais frequente.
Não usar nifedipino sublingual, pelo risco de isquemia por queda abrupta da PA.
Alta com reavaliação ambulatorial em até 7 dias.

PSEUDOCRISE HIPERTENSIVA
PA elevada secundária a dor, ansiedade, abstinência ou desconforto, sem lesão de órgão-alvo.
Tratar a causa, não o número da pressão.

Referência: Diretriz Brasileira de Hipertensão Arterial — SBC/SBN/SBH, 2025.`
  },
  {
    grupo: "Pacotes de conduta",
    nome: "TEP — categorias A–E (AHA/ACC 2026)",
    texto: `CONDUTA — TROMBOEMBOLISMO PULMONAR

DIAGNÓSTICO
Probabilidade pré-teste por Wells, Genebra ou YEARS.
Wells: TVP clínica 3 · TEP mais provável que a alternativa 3 · FC acima de 100 1,5 ·
imobilização ou cirurgia recente 1,5 · TEP ou TVP prévio 1,5 · hemoptise 1 · câncer 1.
Até 4 é improvável, acima de 4 é provável.
Pré-teste baixa ou intermediária, abaixo de 50%: D-dímero com corte ajustado pela idade
(idade × 10 µg/L acima de 50 anos). Negativo exclui.
Suspeita alta, acima de 50%, ou D-dímero positivo: angio-TC de tórax direto.
Cintilografia V/Q apenas se houver contraindicação ao contraste.
O ecocardiograma não confirma nem exclui TEP — ele estratifica. Exceção: paciente instável
demais para a TC, em que disfunção de VD à beira do leito autoriza tratamento empírico.

CATEGORIAS CLÍNICAS AHA/ACC 2026
A diretriz de 2026 aposentou maciço, submaciço e baixo risco. Entraram cinco categorias
clínicas, definidas pelo achado mais grave — clínico, laboratorial ou de imagem —
e reavaliadas ao longo da internação.

A — Subclínico: achado incidental, assintomático.
B — Sintomático com gravidade clínica baixa: PESI I–II, sPESI 0 ou Hestia 0.
C — Sintomático com gravidade clínica elevada (PESI III–V, sPESI ≥ 1, Hestia ≥ 1),
    com pressão preservada.
    C1 — VD e biomarcadores normais.
    C2 — disfunção de VD OU biomarcador alterado.
    C3 — disfunção de VD E biomarcador alterado (o antigo intermediário-alto).
D — Falência cardiopulmonar incipiente.
    D1 — hipotensão transitória ou recorrente que responde a volume, sem hipoperfusão.
    D2 — hipotensão transitória COM hipoperfusão ou lesão de órgão (lactato alto,
         injúria renal) — o chamado choque normotenso.
E — Falência cardiopulmonar estabelecida.
    E1 — hipotensão persistente com choque cardiogênico.
    E2 — choque refratário ou parada cardiorrespiratória.

Modificador respiratório R+, acrescentado a qualquer subcategoria:
em C, SpO2 abaixo de 90%, FR de 30 ou mais, ou necessidade de O2;
em D, mais de 6 L/min ou máscara não reinalante;
em E, insuficiência respiratória hipoxêmica ou ventilatória.

Categoria atual: ___
Escores usados: PESI ___ · sPESI ___ · Hestia ___
VD ao ecocardiograma: ___ · Troponina ___ · BNP/NT-proBNP ___ · Lactato ___

CONDUTA POR CATEGORIA
A e B — anticoagular e dar alta do pronto-socorro, ou alta precoce, o que é razoável
(Classe 2a) desde que o paciente consiga retirar o DOAC de imediato e tenha seguimento
confiável. Trombólise sistêmica é danosa aqui (Classe 3).
C1 — internar e anticoagular, sem terapia avançada. Trombólise é danosa (Classe 3)
e cateter e trombectomia não trazem benefício (Classe 3).
C2 e C3 — internar com monitorização, dosar lactato (Classe 1) e acionar o PERT
(Classe 1, B-NR). O benefício de trombólise, cateter e trombectomia é incerto (Classe 2b).
Vigiar deterioração de perto — é a transição para D que muda a conduta.
D1 e D2 — unidade fechada, PERT, noradrenalina. Terapias avançadas podem ser consideradas
(Classe 2b): trombólise sistêmica, trombólise por cateter ou trombectomia mecânica.
E1 — reperfusão é razoável (Classe 2a). Trombólise sistêmica, trombólise por cateter,
trombectomia mecânica e embolectomia cirúrgica receberam a mesma classe. VA-ECMO
é razoável no choque refratário.
E2 — trombólise sistêmica é razoável (Classe 2a). Embolectomia cirúrgica não é recomendada
em preferência a outras opções, como a VA-ECMO.
Conduta adotada: ___

TROMBÓLISE SISTÊMICA
Alteplase 100 mg EV em 2 h. Em parada iminente ou instalada, 0,6 mg/kg em 15 min,
no máximo 50 mg. Suspender a HNF durante a infusão e retomar quando o TTPa cair
abaixo de duas vezes o controle.

ANTICOAGULAÇÃO
HBPM é preferida à HNF quando é preciso via parenteral (Classe 1, B-R):
enoxaparina 1 mg/kg SC de 12/12 h.
HNF fica reservada a instabilidade, clearance abaixo de 30, obesidade extrema
ou previsão de procedimento ou trombólise.
DOAC é preferido à varfarina na via oral (Classe 1, B-R):
rivaroxabana 15 mg de 12/12 h por 21 dias, depois 20 mg/dia;
apixabana 10 mg de 12/12 h por 7 dias, depois 5 mg de 12/12 h.
Dabigatrana e edoxabana exigem 5 dias de parenteral antes.
Câncer ativo: DOAC ou HBPM, com cautela no uso de DOAC em tumor gastrointestinal
ou geniturinário.
Síndrome antifosfolípide trombótica: varfarina. Gestação e amamentação: HBPM ou HNF —
DOAC e varfarina são Classe 3: Dano. Child-Pugh C: evitar DOAC.
Obesidade grave e DRC estágios 2 e 3 não contraindicam DOAC.

SUPORTE
Oxigênio para SpO2 de pelo menos 94%. Cateter nasal de alto fluxo em vez do cateter comum
na hipoxemia moderada a grave.
Cautela com volume — o VD já está sobrecarregado. No máximo 500 mL.
Hipotensão: noradrenalina, que mantém a pressão de perfusão coronariana do VD.
Dobutamina se houver baixo débito com VD dilatado.
Não sedar profundamente nem intubar nas categorias C a E salvo necessidade absoluta
(Classe 3: Dano). Séries documentam 19 a 28% de parada após indução em TEP com disfunção
de VD, mesmo em quem parecia estável. Se intubar, ter vasopressor, inotrópico e ECMO
prontos à beira do leito.
Investigar TVP com Doppler de membros inferiores.
Filtro de veia cava apenas na contraindicação absoluta à anticoagulação — em paciente
anticoagulado é Classe 3: Dano, nível A. Preferir o retirável e programar a retirada
em 29 a 54 dias.

DURAÇÃO E SEGUIMENTO
Fator de risco maior reversível: suspender ao fim da fase inicial, de 3 a 6 meses.
Primeiro TEP sem fator reversível maior, ou fator persistente, TEP recorrente, câncer ativo
ou trombofilia de alto risco: manter na fase estendida.
Na fase estendida, preferir dose reduzida — apixabana 2,5 mg de 12/12 h ou rivaroxabana
10 mg/dia (RENOVE, API-CAT).
Contato ou consulta na primeira semana após a alta. Consulta em até 3 meses para decidir
a duração. Estimular deambulação precoce.
Perguntar sobre dispneia e limitação funcional em toda consulta por pelo menos 1 ano —
rastreio de doença tromboembólica pulmonar crônica, que complica cerca de 3% dos casos.

Referência: 2026 AHA/ACC/ACCP/ACEP/CHEST/SCAI/SHM/SIR/SVM/SVN Guideline for the Evaluation
and Management of Acute Pulmonary Embolism in Adults. Circulation. 2026;153(12):e977-e1051.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Admissão pós-ATC (angioplastia)",
    texto: `Admito paciente após angioplastia coronariana transluminal percutânea.

Assintomático no momento, nega desconforto torácico, dispneia, palpitações ou sintomas
neurológicos. Estável hemodinamicamente, em monitorização contínua.

Sítio de punção em ___ com bom aspecto, sem sangramento ativo, hematoma ou expansão.
Pulsos distais presentes e simétricos. Extremidade bem perfundida, sem sinais de isquemia.

Acesso radial: pulseira pneumática instalada, em retirada gradual da pressão
pela enfermagem, conforme protocolo.
Acesso femoral: introdutor ___ F, com compressão realizada por ___ min
e curativo compressivo em bom estado.

ECG pós-procedimento sem novos sinais de isquemia em relação ao prévio.

Dados do procedimento:
Vaso e lesão tratados: ___
Stent: ___ (tipo e quantidade)
Heparina administrada às ___h
Contraste utilizado: ___ mL

Conduta: mantenho monitorização, hidratação e medicações conforme prescrição.
Reavaliações seriadas do sítio de punção e do estado clínico.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Admissão pós-CATE (diagnóstico)",
    texto: `Admito paciente após cateterismo cardíaco diagnóstico.

Assintomático no momento, nega desconforto torácico, dispneia ou palpitações.
Estável hemodinamicamente.

Sítio de punção em ___ com bom aspecto, sem sangramento ativo, hematoma ou expansão.
Pulsos distais presentes e simétricos. Extremidade bem perfundida.

Acesso radial: pulseira pneumática em retirada gradual pela enfermagem, conforme protocolo.
Acesso femoral: introdutor ___ F, com compressão por ___ min
e curativo compressivo em bom estado.

ECG pós-procedimento sem alterações isquêmicas agudas em relação ao prévio.
Contraste utilizado: ___ mL.

Resultado e plano: ___ (coronárias sem lesões obstrutivas · lesão em ___ , programar
angioplastia · encaminhar para revascularização cirúrgica · seguimento clínico).`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Exame físico (masculino / feminino)",
    texto: `Sinais vitais: PA ___/___ mmHg · FC ___ bpm · FR ___ irpm · SatO2 ___% em ar ambiente ·
Tax ___ °C · HGT ___ mg/dL

MASCULINO
Bom estado geral, consciente e orientado, corado, hidratado, acianótico, anictérico, afebril.
Aparelho respiratório: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Eupneico em ar ambiente.
Aparelho cardiovascular: ritmo cardíaco regular, bulhas normofonéticas em 2 tempos,
sem sopros.
Abdome: plano, flácido, indolor à palpação, sem visceromegalias.
Extremidades: bem perfundidas, sem edema de membros inferiores, panturrilhas livres.
Pulsos periféricos presentes e simétricos.
Sítio de punção: sem sangramento, hematoma ou sinais flogísticos.

FEMININO
Bom estado geral, consciente e orientada, corada, hidratada, acianótica, anictérica, afebril.
Aparelho respiratório: murmúrio vesicular presente bilateralmente, sem ruídos adventícios.
Eupneica em ar ambiente.
Aparelho cardiovascular: ritmo cardíaco regular, bulhas normofonéticas em 2 tempos,
sem sopros.
Abdome: plano, flácido, indolor à palpação, sem visceromegalias.
Extremidades: bem perfundidas, sem edema de membros inferiores, panturrilhas livres.
Pulsos periféricos presentes e simétricos.
Sítio de punção: sem sangramento, hematoma ou sinais flogísticos.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Orientações pós-procedimento",
    texto: `ORIENTAÇÕES GERAIS PÓS-PROCEDIMENTO

Não fazer esforço físico com o membro por onde foi feito o exame durante 48 horas.
Alimentar-se normalmente, ou conforme a orientação da equipe.
Manter o local da punção limpo e seco. Retirar o curativo 12 horas após a alta.
Observar o local da punção quanto a saída de secreção, endurecimento, coloração arroxeada,
inchaço, dor ou sangramento.
Em caso de sangramento ativo, comprimir o local com firmeza e procurar atendimento
imediatamente.
Procurar atendimento também se houver dor no peito, falta de ar, palpitações,
desmaio ou febre.
Não dirigir por 72 horas após o exame.
Não pegar peso acima de 5 kg por 3 dias com o membro utilizado no exame.
Não ter relações sexuais nas 24 horas seguintes ao exame.
Beber bastante água nas próximas horas, salvo contraindicação, para ajudar a eliminar
o contraste.
Tomar as medicações normalmente, conforme a orientação médica.
Não suspender a dupla antiagregação por conta própria.`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Conduta / discussão com preceptoria",
    texto: `Conforme discutido com a preceptoria:

Prescrevo dupla antiagregação plaquetária e estatina de alta potência.
Mantenho os demais medicamentos de uso habitual.
Oriento paciente e familiares, reforçando as mudanças de estilo de vida — cessação
do tabagismo, dieta, atividade física e adesão medicamentosa.
Oriento sinais de alarme e retorno ao pronto-socorro se necessário.
Coletados os dados de contato. Entraremos em contato após o agendamento
da angioplastia da lesão em ___.
Telefones do paciente: ___`
  },
  {
    grupo: "Hemodinâmica (Dante Pazzanese)",
    nome: "Alta pós-angioplastia (fluxo)",
    texto: `ALTA — PÓS-ANGIOPLASTIA NO MESMO DIA — LEMBRETE DE FLUXO

1. Coletar o telefone do paciente.
2. Entregar o papel para coleta de exames.
3. Avisar no grupo de altas — a enfermagem liga no dia seguinte e agenda o retorno.
4. Entregar a receita e o laudo do procedimento.
5. Reforçar as orientações e os sinais de alarme.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Cardiometabolismo (HAS, DM2 e dislipidemia)",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Losartana 50 mg
   Tomar 1 comprimido de 12 em 12 horas.

2) Anlodipino 5 mg
   Tomar 1 comprimido ao dia, à noite.

3) Hidroclorotiazida 25 mg
   Tomar 1 comprimido ao dia, pela manhã.

4) Atorvastatina 40 mg
   Tomar 1 comprimido ao dia, à noite.

5) Ezetimiba 10 mg
   Tomar 1 comprimido ao dia, à noite.

6) Metformina XR 500 mg
   Tomar 2 comprimidos ao dia, após o jantar.

7) Dapagliflozina 10 mg
   Tomar 1 comprimido ao dia, pela manhã.

USO SUBCUTÂNEO

8) Semaglutida 0,25 mg
   Aplicar 1 vez por semana, sempre no mesmo dia.
   Aumentar para 0,5 mg após 4 semanas, conforme orientação.

ORIENTAÇÕES

Sal: no máximo 1 colher de chá rasa por dia, somando toda a comida.
Evitar embutidos, enlatados, temperos prontos e caldos concentrados.
Atividade física: 150 minutos por semana, divididos em 5 dias.
Medir a pressão em casa 2 vezes por semana, sentado e em repouso, e anotar.
Não suspender nenhuma medicação por conta própria.
Retornar em ___ meses trazendo os exames solicitados.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Pós-angioplastia / DAC crônica",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) AAS 100 mg
   Tomar 1 comprimido ao dia, após o almoço. Uso contínuo.

2) Ticagrelor 90 mg
   Tomar 1 comprimido de 12 em 12 horas, por ___ meses.
   Alternativa: clopidogrel 75 mg, 1 comprimido ao dia por ___ meses.

3) Atorvastatina 80 mg
   Tomar 1 comprimido ao dia, à noite.

4) Succinato de metoprolol 50 mg
   Tomar 1 comprimido ao dia, pela manhã.
   Manter se a fração de ejeção for de 40% ou menos, ou se houver angina ou arritmia.
   Com fração acima de 40% e sem outra indicação, rever a necessidade com o cardiologista.

5) Enalapril 10 mg
   Tomar 1 comprimido de 12 em 12 horas.

6) Omeprazol 20 mg
   Tomar 1 comprimido ao dia, em jejum, enquanto estiver usando dois antiagregantes.

USO ORAL, SE NECESSÁRIO

7) Dinitrato de isossorbida 5 mg, sublingual
   Colocar 1 comprimido embaixo da língua em caso de dor no peito.
   Se a dor não passar em 5 minutos, repetir mais 1 comprimido.
   Se depois de 3 comprimidos a dor continuar, procurar o pronto-socorro.

ORIENTAÇÕES

Não interromper o AAS nem o segundo antiagregante por conta própria.
Antes de qualquer cirurgia ou procedimento dentário, avisar o cardiologista.
Parar de fumar completamente.
Iniciar a reabilitação cardiovascular conforme o encaminhamento.
Retornar em ___ meses trazendo os exames solicitados.

PROCURAR O PRONTO-SOCORRO SE

Dor no peito em repouso por mais de 20 minutos.
Suor frio, falta de ar súbita ou desmaio.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Insuficiência cardíaca com FE reduzida (4 pilares)",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Sacubitril/valsartana 49/51 mg
   Tomar 1 comprimido de 12 em 12 horas.
   Iniciar com 24/26 mg de 12 em 12 horas se a pressão for baixa.

2) Carvedilol 6,25 mg
   Tomar 1 comprimido de 12 em 12 horas, junto com as refeições.

3) Espironolactona 25 mg
   Tomar 1 comprimido ao dia, pela manhã.

4) Dapagliflozina 10 mg
   Tomar 1 comprimido ao dia, pela manhã.

5) Furosemida 40 mg
   Tomar 1 comprimido ao dia, pela manhã.
   Ajustar conforme o peso e o inchaço, segundo orientação médica.

ORIENTAÇÕES

Pesar-se todos os dias, em jejum, depois de urinar, na mesma balança e com roupa leve.
Anotar o peso em um caderno e levar nas consultas.
Restrição de líquidos: ___ mL por dia, contando água, suco, café, chá e sopa.
Sal: no máximo 1 colher de chá rasa por dia.
Não usar anti-inflamatório — diclofenaco, ibuprofeno e nimesulida pioram
a insuficiência cardíaca.
As doses serão aumentadas aos poucos nas próximas consultas. Não parar por conta própria.
Retornar em ___ semanas com ureia, creatinina e potássio.

PROCURAR O PRONTO-SOCORRO SE

Ganhar mais de 2 kg em 3 dias.
Falta de ar em repouso ou ao deitar.
Inchaço que piora, desmaio, ou palpitação que não para.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Fibrilação atrial (anticoagulação e controle de FC)",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Rivaroxabana 20 mg
   Tomar 1 comprimido ao dia, sempre junto com o jantar.
   Alternativa: apixabana 5 mg, 1 comprimido de 12 em 12 horas.

2) Succinato de metoprolol 50 mg
   Tomar 1 comprimido ao dia, pela manhã.

3) Atorvastatina 20 mg
   Tomar 1 comprimido ao dia, à noite.

4) Losartana 50 mg
   Tomar 1 comprimido de 12 em 12 horas.

ORIENTAÇÕES

O anticoagulante previne AVC. Não pode ser esquecido nem interrompido.
A rivaroxabana precisa ser tomada junto com comida para ser absorvida.
Se esquecer uma dose, tomar assim que lembrar, no mesmo dia. Nunca dobrar a dose.
Avisar qualquer médico ou dentista de que usa anticoagulante, antes de procedimentos.
Evitar excesso de álcool e de cafeína.
Retornar em ___ meses com hemograma e função renal.

PROCURAR ATENDIMENTO SE

Sangramento que não para.
Sangue nas fezes ou na urina, ou vômito com sangue.
Dor de cabeça forte e súbita, ou queda com batida na cabeça.
Palpitação com falta de ar, dor no peito ou desmaio.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Prótese valvar mecânica (varfarina)",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Varfarina 5 mg
   Tomar ___ comprimido(s) ao dia, sempre no mesmo horário, conforme o resultado do INR.
   Alvo de INR: ___

2) Succinato de metoprolol 25 mg
   Tomar 1 comprimido ao dia, pela manhã.

3) Furosemida 40 mg
   Tomar 1 comprimido ao dia, pela manhã.

ANTICOAGULAÇÃO — O MAIS IMPORTANTE

A varfarina é obrigatória e para o resto da vida. Sem ela, a prótese pode formar coágulo
e travar. Não substituir por nenhum outro anticoagulante.
Colher INR a cada ___ e trazer todos os resultados nas consultas.

ALIMENTAÇÃO

Manter a alimentação constante. Não é proibido comer verdura escura — couve, brócolis,
espinafre e alface. O importante é não variar muito a quantidade de um dia para o outro.
Evitar bebida alcoólica em excesso.

OUTROS REMÉDIOS

Não tomar anti-inflamatório nem antibiótico sem avisar o médico:
muitos remédios alteram o efeito da varfarina.
Para dor ou febre, usar dipirona ou paracetamol.

PREVENÇÃO DE ENDOCARDITE

Antes de procedimento dentário com manipulação da gengiva, tomar amoxicilina 2 g,
que são 4 comprimidos de 500 mg, em dose única, de 30 a 60 minutos antes.
Manter a higiene bucal em dia e ir ao dentista periodicamente.

PROCURAR ATENDIMENTO SE

Sangramento que não para, ou febre persistente.
Falta de ar.
Se o clique da prótese mudar de som ou desaparecer.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Miocardiopatia / Chagas",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Sacubitril/valsartana 24/26 mg
   Tomar 1 comprimido de 12 em 12 horas.

2) Carvedilol 3,125 mg
   Tomar 1 comprimido de 12 em 12 horas, junto com as refeições.

3) Espironolactona 25 mg
   Tomar 1 comprimido ao dia, pela manhã.

4) Dapagliflozina 10 mg
   Tomar 1 comprimido ao dia, pela manhã.

5) Furosemida 40 mg
   Tomar 1 comprimido ao dia, pela manhã.

SE HOUVER INDICAÇÃO ESPECÍFICA

6) Amiodarona 200 mg
   Tomar 1 comprimido ao dia — apenas se houver arritmia documentada.

7) Varfarina 5 mg
   Tomar ___ comprimido(s) ao dia conforme o INR, com alvo de 2,0 a 3,0 —
   apenas se houver trombo, aneurisma apical ou fibrilação atrial.

ORIENTAÇÕES

Pesar-se todos os dias em jejum e anotar.
Restrição de sal e de líquidos conforme orientação.
Em uso de amiodarona, fazer exames de tireoide, fígado e radiografia de tórax
periodicamente, conforme solicitado.
Retornar em ___ meses com exames.

PROCURAR O PRONTO-SOCORRO SE

Ganhar mais de 2 kg em 3 dias.
Desmaio, palpitação prolongada ou falta de ar em repouso.
Choque do desfibrilador, se for portador de CDI.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Pós-transplante cardíaco",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO — NÃO INTERROMPER EM HIPÓTESE ALGUMA

1) Tacrolimo ___ mg
   Tomar de 12 em 12 horas, sempre no mesmo horário, em jejum —
   1 hora antes ou 2 horas depois das refeições.

2) Micofenolato de mofetila 500 mg
   Tomar ___ comprimido(s) de 12 em 12 horas.

3) Prednisona 5 mg
   Tomar ___ comprimido(s) ao dia, pela manhã, após o café.

4) Sulfametoxazol com trimetoprima 400/80 mg
   Tomar 1 comprimido ao dia, ou 3 vezes por semana, conforme protocolo.

5) Atorvastatina 20 mg
   Tomar 1 comprimido ao dia, à noite.

6) Omeprazol 20 mg
   Tomar 1 comprimido ao dia, em jejum.

HORÁRIOS E EXAMES

Os imunossupressores são para a vida toda e nos mesmos horários todos os dias.
Esquecer doses é a principal causa de rejeição.
No dia da coleta do nível de tacrolimo, não tomar a dose da manhã antes do exame.

CUIDADO COM INTERAÇÕES

Não usar nenhum remédio novo, chá ou suplemento sem avisar a equipe do transplante.
Antibióticos, antifúngicos e alguns remédios de pressão alteram muito o nível
do imunossupressor.
Evitar erva-de-são-joão e suco de toranja.

PREVENÇÃO

Vacinas de vírus vivo são proibidas. As demais devem estar em dia.
Usar protetor solar diariamente.
Avaliação com dermatologista uma vez por ano.

PROCURAR A EQUIPE SE

Febre, falta de ar, inchaço ou ganho rápido de peso.
Diarreia persistente, desmaio ou qualquer sinal de infecção.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita — Prevenção primária / primeiro atendimento",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Rosuvastatina 10 mg
   Tomar 1 comprimido ao dia, à noite.

2) Losartana 50 mg
   Tomar 1 comprimido ao dia.
   Iniciar apenas se houver indicação de tratar a pressão.

ALIMENTAÇÃO

Preferir comida de verdade: verduras, legumes, frutas, grãos integrais, peixe e azeite.
Reduzir ultraprocessados, frituras e refrigerantes.
Sal: no máximo 1 colher de chá rasa por dia, somando toda a comida do dia.

ATIVIDADE FÍSICA

150 minutos por semana de caminhada rápida, bicicleta ou natação,
divididos em pelo menos 5 dias.
Mais 2 dias por semana de exercício de força.

OUTRAS METAS

Peso: perder ___ kg até a próxima consulta.
Tabagismo: parar completamente. Encaminhado para ___.
Álcool: no máximo ___ dose(s) por dia.
Sono: 7 a 8 horas por noite. Investigar apneia do sono se houver ronco alto.
Medir a pressão em casa 2 vezes por semana, em repouso, e anotar.

EXAMES PARA O RETORNO

Hemograma, glicemia de jejum e hemoglobina glicada.
Colesterol total e frações, triglicérides.
Ureia, creatinina, sódio, potássio e ácido úrico.
TGO, TGP e TSH.
Urina tipo 1 e relação albumina/creatinina urinária.

Retornar em ___ meses trazendo os exames.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  },
  {
    grupo: "Receitas para o paciente",
    nome: "Receita básica — hemodinâmica",
    texto: `RECEITUÁRIO

Paciente: ___
Data: __/__/____

USO ORAL E CONTÍNUO

1) Losartana 50 mg
   Tomar 1 comprimido de 12 em 12 horas.

2) Atorvastatina 80 mg
   Tomar 1 comprimido ao dia, à noite.

3) Anlodipino 10 mg
   Tomar 1 comprimido ao dia, à noite.

4) AAS 100 mg
   Tomar 1 comprimido ao dia, no almoço.

5) Clopidogrel 75 mg
   Tomar 1 comprimido ao dia, por ___.

6) Succinato de metoprolol 25 mg
   Tomar 1 comprimido ao dia, pela manhã.

___
Assinatura e carimbo

Ajustar fármacos e doses conforme cada paciente.`
  }
];
