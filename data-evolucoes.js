// Modelos de evolução editáveis. Use [colchetes] para campos a preencher.
window.EVOLUCOES = [
  {
    grupo: "Geral",
    nome: "Evolução geral (SOAP)",
    texto: `EVOLUÇÃO CARDIOLOGIA — [data]
DH: [dia de internação] · DPO/DIM: [se aplicável]

S) Paciente [estável/queixa]. Nega dor torácica, dispneia, palpitações, síncope ou edema. [outras queixas].
O) REG/BEG, [consciente, orientado], acianótico, anictérico, afebril.
   SSVV: PA [x/x] mmHg · FC [x] bpm · FR [x] irpm · SatO2 [x]% em [ar ambiente/O2] · Tax [x]°C · diurese [x].
   ACV: RCR 2T BNF, sopros [ausentes/descrever], sem turgência jugular.
   AR: MV+ bilateral, [sem ruídos adventícios].
   ABD: flácido, indolor, RHA+.
   MMII: [sem edema], panturrilhas livres, pulsos presentes e simétricos.
A) [Diagnóstico principal] — [estável/em melhora/em investigação].
   [Comorbidades relevantes].
P) - Manter [terapia atual].
   - [Exames/condutas do dia].
   - [Ajustes].
   - Seguimento.`
  },
  {
    grupo: "Coronariopatia",
    nome: "Pós-SCA / IAM (unidade coronariana)",
    texto: `EVOLUÇÃO — PÓS-SCA — [data]
DH: [x] · D[x] pós-[IAMCSST/IAMSSST/AI] · [pós-ICP em vaso/dia]

S) [Assintomático]/refere [dor torácica? dispneia?]. Sem novos episódios anginosos. Tolerando deambulação/dieta.
O) Estável hemodinamicamente. PA [x/x] · FC [x] · SatO2 [x]%.
   ACV: RCR 2T, sem sopros novos, sem B3/B4, sem sinais de congestão.
   AR: MV+, sem estertores.
   MMII: sem edema. Sítio de punção [radial/femoral]: sem hematoma/sangramento, pulso distal presente.
   ECG: [ritmo, sem novas alterações isquêmicas].
   Curva de troponina: [pico/queda]. [outros exames].
A) [IAM] Killip [I/II/III/IV], pós-[ICP primária/CRM/tto clínico]. [FEVE se conhecida].
P) - DAPT: AAS 100 mg/dia + [ticagrelor 90 mg 12/12h / clopidogrel 75 mg/dia].
   - Estatina alta intensidade: [atorvastatina 80 / rosuvastatina 40].
   - Betabloqueador: [carvedilol/metoprolol] — titular.
   - IECA/BRA: [enalapril/losartana] — titular.
   - [iSGLT2 / antagonista mineralocorticoide se indicado].
   - Controle de FR, reabilitação, eco se ainda não realizado.`
  },
  {
    grupo: "Insuficiência cardíaca",
    nome: "IC descompensada (internação)",
    texto: `EVOLUÇÃO — IC DESCOMPENSADA — [data]
DH: [x] · IC [FEr/FEp], etiologia [x] · perfil [B quente-úmido / C frio-úmido]

S) [Melhora/piora] da dispneia (atual [classe NYHA]). [ortopneia/DPN]. Refere [redução do edema].
O) PA [x/x] · FC [x] · SatO2 [x]% em [O2/AA] · peso [x] kg ([variação] vs ontem).
   Balanço hídrico 24h: [x] mL · diurese: [x] mL.
   ACV: [turgência jugular?], RCR/ritmo [x], [B3?], sopros [x].
   AR: estertores em [bases/ até x].
   MMII: edema [+/4+], [perfusão].
   Labs: Cr [x] · U [x] · Na [x] · K [x] · BNP/NT-proBNP [x].
A) IC [FEr] descompensada em [melhora/estabilização]. Congestão [em redução].
P) - Diurético: furosemida [x mg EV] — ajustar conforme balanço/peso/congestão.
   - Restrição hídrica [x mL] e de sódio.
   - Otimizar GDMT conforme tolerância (PA/FC/função renal/K): IECA-BRA-ARNI / BB / antag. mineralocorticoide / iSGLT2.
   - Monitorar função renal e eletrólitos.
   - Investigar/tratar fator descompensante.
   - Pesar diariamente.`
  },
  {
    grupo: "Arritmia",
    nome: "Fibrilação atrial",
    texto: `EVOLUÇÃO — FIBRILAÇÃO ATRIAL — [data]
DH: [x] · FA [paroxística/persistente/permanente] · [primeiro episódio?]

S) [Assintomático]/refere palpitações/[dispneia]. [estável].
O) PA [x/x] · FC [x] bpm. ECG: FA com RV [controlada/elevada], FC média [x].
   ACV: ritmo irregular, sem sopros novos, sem congestão.
   [TSH, eletrólitos, função renal: x].
A) FA [tipo]. CHA₂DS₂-VASc = [x] · HAS-BLED = [x].
P) - Anticoagulação: [DOAC — apixabana/rivaroxabana/dabigatrana/edoxabana, dose] (indicada por CHA₂DS₂-VASc).
   - Controle de [frequência: BB/BCC não di-hidropiridínico / ritmo: cardioversão/antiarrítmico/ablação].
   - Investigar e tratar causas (tireoide, distúrbio HE, ICC, valvopatia).
   - [Eco TT].`
  },
  {
    grupo: "Pré e pós-operatório",
    nome: "Pós-operatório de cirurgia cardíaca",
    texto: `EVOLUÇÃO — PÓS-OP CIRURGIA CARDÍACA — [data]
[DPO x] de [CRM / troca valvar / outro]

S) [Estável], dor [controlada], [deambulando]. Nega dispneia/palpitações.
O) PA [x/x] · FC [x] · SatO2 [x]% · Tax [x]°C · diurese [x].
   ACV: RCR, [ritmo], sopros [x], sem atrito.
   AR: MV+, [base x], drenos: [débito/aspecto/retirados].
   Ferida operatória esternal/safenectomia: [limpa, sem secreção/deiscência].
   MMII: [edema/perfusão].
   Labs: Hb [x] · plaq [x] · Cr [x] · K [x] · [outros].
A) DPO [x] de [cirurgia], evolução [satisfatória].
P) - Analgesia, profilaxia de TVP, controle glicêmico.
   - [Betabloqueador / AAS conforme cirurgia], [anticoagulação se prótese].
   - Fisioterapia respiratória e motora.
   - Cuidados com ferida, retirada de drenos/fios conforme protocolo.
   - Monitorar arritmias (FA pós-op) e derrame pericárdico.`
  },
  {
    grupo: "Pré e pós-operatório",
    nome: "Avaliação pré-operatória cardiológica",
    texto: `AVALIAÇÃO CARDIOLÓGICA PRÉ-OPERATÓRIA — [data]
Cirurgia proposta: [x] (risco cirúrgico [baixo/intermediário/alto]).

Antecedentes: [HAS, DM, DAC, IC, valvopatia, tabagismo...].
Capacidade funcional: [≥/< 4 METs].
Exame: PA [x/x] · FC [x] · ACV [x] · AR [x] · MMII [x].
ECG: [ritmo/alterações]. [Eco/outros].
Índices: [RCRI/Lee = x] · [risco por calculadora].

CONCLUSÃO: Risco cardiovascular perioperatório [baixo/intermediário/alto].
CONDUTA:
- [Liberado / liberado com ressalvas / necessita investigação adicional].
- Manter [BB/estatina/AAS conforme caso]; [suspender/manter anticoagulante — orientar].
- [Otimização clínica recomendada].
- Monitorização perioperatória conforme risco.`
  },
  {
    grupo: "Geral",
    nome: "Dor torácica em investigação",
    texto: `EVOLUÇÃO — DOR TORÁCICA EM INVESTIGAÇÃO — [data]

S) Dor torácica [típica/atípica], início [x], caráter [x], irradiação [x], duração [x], fatores [desencadeantes/alívio]. [Atualmente sem dor].
O) PA [x/x] (MMSS simétrica?) · FC [x] · SatO2 [x]%.
   ACV: RCR, sopros [x], sem atrito. AR: [x]. MMII: [x].
   ECG seriado: [sem alterações isquêmicas dinâmicas].
   Troponina seriada: [x → x].
A) Dor torácica — [provável origem]. HEART score = [x]. Baixa/intermediária/alta probabilidade de SCA.
P) - [Seriar ECG e troponina].
   - [AAS/anticoagulação se SCA provável].
   - [Teste provocativo de isquemia / angio-TC de coronárias / CATE conforme risco].
   - Analgesia e controle de FR; reavaliar.`
  },
  {
    grupo: "Geral",
    nome: "Alta hospitalar (resumo)",
    texto: `RESUMO DE ALTA — CARDIOLOGIA — [data]

Paciente [iniciais], [idade], internado em [data] por [motivo].
Diagnósticos: [principal] + [secundários].
Resumo da internação: [eventos, procedimentos, intercorrências].
Exames relevantes: [eco, CATE, labs].
FEVE: [x]% · ritmo: [x].

MEDICAÇÕES DE ALTA:
- [medicação — dose — posologia]
- ...

ORIENTAÇÕES:
- Dieta [x], atividade [x], controle de FR (PA, glicemia, lipídios, cessação tabágica).
- Sinais de alarme: dor torácica, dispneia, edema, síncope → procurar emergência.

RETORNO/SEGUIMENTO:
- [Especialidade] em [prazo]. Exames a trazer: [x].`
  },

  // ===== Hemodinâmica · modelos da equipe (Dante Pazzanese) =====
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
