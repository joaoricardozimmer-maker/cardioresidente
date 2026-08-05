// Aba "Orientações" — mudança de estilo de vida e cuidados por condição.
// Cada item traz: o que a evidência mostra (com o tamanho do efeito), o texto em linguagem
// de paciente e o bloco técnico para colar na evolução.
// Estrutura: { id, grupo, nome, resumo, evidencia:[{t,x}], paciente, prontuario, fonte }
window.ORIENTACOES = [

  // ============ PILARES ============
  {
    id: 'alimentacao', grupo: 'Pilares — mudança de estilo de vida', nome: 'Alimentação',
    resumo: 'Dois padrões alimentares têm ensaio randomizado com desfecho a favor: o DASH, para pressão, e o mediterrâneo, para eventos cardiovasculares. Prescrever um padrão funciona melhor do que proibir alimentos isolados.',
    evidencia: [
      { t: 'DASH — Appel, NEJM 1997', x: 'Dieta rica em frutas, verduras, laticínios desnatados e pobre em gordura saturada reduziu a PAS em 5,5 mmHg e a PAD em 3,0 mmHg na população geral. Em hipertensos, a queda foi de 11,4 por 5,5 mmHg — comparável a uma monoterapia anti-hipertensiva.' },
      { t: 'PREDIMED — Estruch, NEJM 2018 (reanálise)', x: 'Dieta mediterrânea suplementada com azeite extravirgem ou com nozes reduziu eventos cardiovasculares maiores em prevenção primária de alto risco: HR 0,69 com azeite e 0,72 com oleaginosas, contra dieta de baixo teor de gordura.' },
      { t: 'Fitosteróis e fibra solúvel', x: 'Fitosteróis 2 g/dia reduzem o LDL em 8 a 10%. Fibra solúvel 5 a 10 g/dia (aveia, leguminosas, psyllium) reduz o LDL em cerca de 5%. São adjuvantes reais, mas nenhum substitui a estatina em quem tem indicação.' },
      { t: 'Ultraprocessados', x: 'A associação com desfecho cardiovascular vem de coortes, não de ensaios randomizados — o efeito é consistente, mas o nível de evidência é menor. Vale como orientação, não como promessa.' }
    ],
    paciente: `ALIMENTAÇÃO

A base do prato: verduras, legumes, frutas, feijão e outras leguminosas, grãos integrais,
oleaginosas (castanha, nozes, amêndoa), peixe e azeite de oliva.

O que reduzir de verdade:
Ultraprocessados — salgadinho, biscoito recheado, refrigerante, macarrão instantâneo,
embutidos como salsicha, linguiça, presunto e mortadela.
Frituras e gordura de origem animal em excesso.
Doces e bebidas açucaradas.

Trocas simples que funcionam:
Arroz branco por arroz integral. Pão branco por pão integral.
Refrigerante e suco de caixinha por água.
Sobremesa doce por fruta.
Manteiga e banha por azeite de oliva.

Peixe pelo menos 2 vezes por semana.
Uma porção de castanhas por dia, cerca de 30 g, é um punhado fechado.

Não existe alimento, chá ou suplemento que substitua o remédio prescrito.`,
    prontuario: `ORIENTAÇÃO NUTRICIONAL
Prescrito padrão alimentar DASH e mediterrâneo: aumento de frutas, hortaliças, leguminosas,
grãos integrais, oleaginosas, peixe e azeite de oliva; redução de ultraprocessados,
carne processada, gordura saturada e açúcares de adição.
Peixe pelo menos 2 vezes por semana. Cerca de 30 g de oleaginosas por dia.
Orientado que fitosteróis e fibra solúvel são adjuvantes e não substituem a estatina.
Encaminhamento à nutrição: ___`,
    fonte: 'DASH (NEJM 1997) · PREDIMED (NEJM 2018) · SBC Prevenção Cardiovascular 2025'
  },

  {
    id: 'sodio', grupo: 'Pilares — mudança de estilo de vida', nome: 'Sódio e substituto de sal',
    resumo: 'Reduzir sódio é uma das intervenções não farmacológicas com maior efeito sobre a pressão. E existe uma intervenção com redução de mortalidade em ensaio randomizado: o substituto de sal enriquecido com potássio.',
    evidencia: [
      { t: 'DASH-Sodium — Sacks, NEJM 2001', x: 'A combinação de dieta DASH com sódio baixo (1,5 g/dia) reduziu a PAS em 8,9 mmHg em relação à dieta controle com sódio alto. O efeito do sódio foi maior justamente dentro da dieta controle, mostrando que os dois se somam.' },
      { t: 'SSaSS — Neal, NEJM 2021', x: 'Substituto de sal com 75% de cloreto de sódio e 25% de cloreto de potássio, em quase 21.000 pessoas com AVC prévio ou hipertensão: AVC com RR 0,86, eventos cardiovasculares maiores 0,87 e mortalidade total 0,88. É o desfecho duro mais forte que existe em intervenção alimentar isolada.' },
      { t: 'Cuidado com o potássio', x: 'O substituto de sal é contraindicado em DRC avançada e exige cautela em quem usa IECA, BRA, antagonista mineralocorticoide ou já tem tendência à hipercalemia. Nesses casos, orientar apenas a redução do sal comum.' },
      { t: 'Meta', x: 'SBC HAS 2025 e OMS: sódio abaixo de 2 g/dia, o que corresponde a cerca de 5 g de sal de cozinha, ou uma colher de chá rasa por dia somando toda a comida.' }
    ],
    paciente: `SAL E SÓDIO

Meta: no máximo 1 colher de chá rasa de sal por dia, somando toda a comida do dia.

O sal escondido é o que mais pesa. Reduza:
Embutidos — salsicha, linguiça, presunto, mortadela, salame, bacon.
Enlatados e conservas.
Temperos prontos, caldos em cubo, molho de soja e molho pronto para salada.
Salgadinhos, biscoito de água e sal, macarrão instantâneo.
Queijos amarelos e queijo processado.

O que fazer no lugar:
Temperar com alho, cebola, limão, vinagre, pimenta, salsinha, cebolinha, coentro,
orégano, alecrim e outras ervas.
Não levar o saleiro para a mesa.
Ler o rótulo: procure produtos com menos de 400 mg de sódio por 100 g.

SUBSTITUTO DE SAL COM POTÁSSIO
Se o seu médico liberou, use o sal com potássio no lugar do sal comum.
Não use por conta própria se você tem problema nos rins ou usa remédio que aumenta
o potássio.`,
    prontuario: `ORIENTAÇÃO DE SÓDIO
Prescrita restrição de sódio para menos de 2 g/dia, equivalente a cerca de 5 g de sal
de cozinha. Orientado especificamente sobre o sódio oculto em embutidos, enlatados,
temperos industrializados e queijos processados, e sobre a leitura de rótulos.
Substituto de sal enriquecido com potássio: ___
Contraindicado em DRC avançada e com cautela em uso de IECA, BRA ou antagonista
mineralocorticoide — potássio de controle em ___ .`,
    fonte: 'DASH-Sodium (NEJM 2001) · SSaSS (NEJM 2021) · Diretriz Brasileira de Hipertensão Arterial 2025'
  },

  {
    id: 'exercicio', grupo: 'Pilares — mudança de estilo de vida', nome: 'Atividade física',
    resumo: 'A dose alvo é 150 a 300 minutos por semana de intensidade moderada, mais dois dias de força. Mas a maior parte do ganho de mortalidade acontece na saída do sedentarismo — sair de zero é o passo que mais rende.',
    evidencia: [
      { t: 'Dose e curva de benefício', x: 'A relação é dose-resposta, mas com rendimentos decrescentes: a maior queda de mortalidade ocorre entre nenhuma atividade e cerca de 150 min por semana. Para o paciente sedentário, a meta inicial realista vale mais do que a meta ideal.' },
      { t: 'Efeito sobre a pressão', x: 'Exercício aeróbico regular reduz a PAS em cerca de 5 a 8 mmHg em hipertensos. Exercício resistido isolado tem efeito menor, mas somado ao aeróbico melhora composição corporal e sensibilidade à insulina.' },
      { t: 'Reabilitação cardiovascular — Cochrane 2021', x: 'Reabilitação baseada em exercício após evento coronariano reduz mortalidade cardiovascular e internações. É subprescrita de forma crônica: encaminhe todo pós-infarto, pós-angioplastia e pós-revascularização.' },
      { t: 'HF-ACTION — JAMA 2009', x: 'Treinamento na IC com FE reduzida: o desfecho primário não foi significativo na análise não ajustada, mas foi após ajuste pelos preditores prognósticos pré-especificados, com melhora consistente de sintomas e qualidade de vida. Exercício na IC é seguro e melhora sintoma; a promessa de redução de mortalidade é mais frágil.' },
      { t: 'Prescrição prática', x: 'Intensidade moderada é aquela em que o paciente consegue falar, mas não cantar. Alternativa objetiva: 60 a 70% da FC máxima estimada, ou percepção de esforço 12 a 14 na escala de Borg.' }
    ],
    paciente: `ATIVIDADE FÍSICA

Meta: 150 minutos por semana. Pode ser 30 minutos em 5 dias, ou 50 minutos em 3 dias.
Mais 2 dias por semana de exercício de força — musculação, elástico ou peso do corpo.

Como saber se a intensidade está certa:
Você deve conseguir conversar durante o exercício, mas não conseguir cantar.

Opções que funcionam igual:
Caminhada rápida · bicicleta · natação · hidroginástica · dança.

Se hoje você não faz nada:
Comece com 10 minutos por dia e aumente 5 minutos por semana.
Sair do zero é o passo que mais protege o coração. O resto é bônus.

Reduza o tempo sentado: levante-se a cada hora, mesmo que por 2 minutos.

PARE E PROCURE ATENDIMENTO se durante o exercício surgir dor no peito,
falta de ar desproporcional, tontura, desmaio ou palpitação que não passa.`,
    prontuario: `ORIENTAÇÃO DE ATIVIDADE FÍSICA
Prescritos 150 a 300 min por semana de atividade aeróbica de intensidade moderada,
distribuídos em pelo menos 5 dias, mais 2 sessões semanais de exercício resistido.
Intensidade orientada pelo teste da fala e pela escala de Borg 12 a 14.
Orientada progressão gradual a partir de ___ min/dia e redução do comportamento sedentário.
Orientados os sinais de alarme para interromper o exercício.
Reabilitação cardiovascular supervisionada: ___`,
    fonte: 'OMS 2020 · AHA/ACC · Cochrane Reabilitação Cardíaca 2021 · HF-ACTION (JAMA 2009)'
  },

  {
    id: 'peso', grupo: 'Pilares — mudança de estilo de vida', nome: 'Peso corporal e obesidade',
    resumo: 'Perder 5 a 10% do peso melhora pressão, glicemia e lipídios de forma consistente. Reduzir eventos cardiovasculares com perda de peso, no entanto, só foi demonstrado em ensaio com farmacoterapia — o Look AHEAD, com intervenção intensiva de estilo de vida, foi neutro.',
    evidencia: [
      { t: 'Efeito sobre a pressão', x: 'Cada quilograma perdido reduz a PAS em cerca de 1 mmHg. Uma perda de 5 kg tem efeito próximo ao de meio anti-hipertensivo.' },
      { t: 'Look AHEAD — NEJM 2013', x: 'Intervenção intensiva de estilo de vida em DM2 com sobrepeso melhorou peso, condicionamento, HbA1c e pressão, mas não reduziu eventos cardiovasculares em 9,6 anos de seguimento. É importante dizer isso ao paciente com honestidade: a perda de peso melhora os fatores de risco e os sintomas, e a redução de eventos não está garantida só pela dieta.' },
      { t: 'DiRECT — Lancet 2018', x: 'Programa de restrição calórica intensiva em DM2 recente: remissão do diabetes em 46% em 12 meses, chegando a 86% entre quem perdeu 15 kg ou mais. A perda de peso substancial muda a história natural do DM2.' },
      { t: 'SELECT — NEJM 2023', x: 'Semaglutida 2,4 mg em pacientes com sobrepeso ou obesidade e doença cardiovascular estabelecida, sem diabetes: redução de 20% em eventos cardiovasculares maiores (HR 0,80). É a primeira demonstração randomizada de redução de eventos com terapia dirigida ao peso.' },
      { t: 'STEP-HFpEF — NEJM 2023', x: 'Semaglutida na IC de fração preservada com obesidade melhorou sintomas (KCCQ) e capacidade funcional, além do peso — reforça o fenótipo obeso da ICFEp como alvo terapêutico.' },
      { t: 'Cirurgia bariátrica', x: 'Considerar se IMC de 35 kg/m² ou mais com risco cardiovascular moderado a alto, ou 40 ou mais. Coortes mostram redução de mortalidade, sem ensaio randomizado com desfecho cardiovascular duro.' }
    ],
    paciente: `PESO

Meta inicial: perder de 5 a 10% do peso atual.
Se você pesa 90 kg, isso significa de 4,5 a 9 kg. Não precisa ser tudo de uma vez.

O que já melhora com esses primeiros 5%:
Pressão arterial, açúcar no sangue, colesterol, apneia do sono, dor no joelho e disposição.

Como fazer:
Reduza cerca de 500 a 750 calorias por dia — na prática, tire as bebidas açucaradas,
as frituras e os doces, e diminua um pouco a porção do prato.
Coma devagar e sem tela na frente.
Combine com os 150 minutos de atividade física por semana.
Pese-se uma vez por semana, no mesmo dia e horário, não todo dia.

Peso atual ___ kg. Meta até a próxima consulta: ___ kg.

Existem medicamentos eficazes para perda de peso. Converse sobre isso na consulta —
mas eles funcionam junto com a mudança alimentar, não no lugar dela.`,
    prontuario: `ORIENTAÇÃO DE PESO
Peso ___ kg, IMC ___ kg/m², circunferência abdominal ___ cm.
Prescrita meta de perda de 5 a 10% do peso corporal, com déficit calórico de 500 a 750 kcal/dia
associado a exercício aeróbico e resistido.
Orientada automonitorização semanal do peso.
Farmacoterapia para obesidade: ___
Indicação de avaliação bariátrica: ___
Encaminhamento à nutrição e à endocrinologia: ___`,
    fonte: 'Look AHEAD (NEJM 2013) · DiRECT (Lancet 2018) · SELECT (NEJM 2023) · STEP-HFpEF (NEJM 2023)'
  },

  {
    id: 'tabagismo', grupo: 'Pilares — mudança de estilo de vida', nome: 'Tabagismo',
    resumo: 'É a intervenção isolada de maior impacto na prevenção secundária. O aconselhamento breve em toda consulta, somado à farmacoterapia, multiplica a taxa de sucesso — e ambos são subutilizados.',
    evidencia: [
      { t: 'Magnitude do benefício', x: 'O excesso de risco de infarto cai cerca de metade no primeiro ano após a cessação e se aproxima do não fumante em 10 a 15 anos. Em prevenção secundária, o efeito supera o de qualquer fármaco isolado.' },
      { t: 'Aconselhamento breve', x: 'Perguntar sobre o tabagismo e aconselhar a parar, mesmo em menos de 3 minutos, aumenta de forma mensurável a taxa de abstinência. O ganho vem da repetição em toda consulta.' },
      { t: 'EAGLES — Lancet 2016', x: 'Vareniclina foi superior à bupropiona e ao adesivo de nicotina na abstinência, sem excesso de eventos neuropsiquiátricos em relação ao placebo — o alerta antigo de segurança foi retirado. Vareniclina é a monoterapia mais eficaz disponível.' },
      { t: 'Terapia de reposição de nicotina', x: 'A combinação de adesivo (liberação lenta) com goma ou pastilha (resgate) é mais eficaz que a monoterapia com um só formato.' },
      { t: 'Cigarro eletrônico', x: 'Alguns ensaios mostram superioridade sobre a reposição de nicotina para cessação, mas não é produto isento de risco e não está aprovado no Brasil. Não usar como primeira linha.' }
    ],
    paciente: `PARAR DE FUMAR

Parar de fumar é a coisa mais importante que você pode fazer pelo seu coração.
Vale mais do que qualquer remédio da sua receita.

O que acontece quando você para:
Em 20 minutos, a frequência cardíaca começa a normalizar.
Em 1 ano, o risco de infarto cai pela metade.
Em 10 a 15 anos, o risco fica próximo ao de quem nunca fumou.

Como aumentar sua chance de conseguir:
Marque uma data para parar, nas próximas 2 semanas.
Avise as pessoas com quem você mora e trabalha.
Tire cigarro, isqueiro e cinzeiro de casa e do carro no dia anterior.
Identifique os gatilhos — café, cerveja, direção, intervalo do trabalho —
e planeje o que fazer no lugar.

Existe remédio que ajuda de verdade e dobra sua chance de sucesso.
Peça na consulta. Não é fraqueza usar.
Encaminhamento para o grupo de cessação: ___

Recair não é fracassar. A maioria das pessoas precisa de mais de uma tentativa.
Se recair, marque uma nova data.`,
    prontuario: `ORIENTAÇÃO DE CESSAÇÃO DO TABAGISMO
Carga tabágica de ___ maços-ano. Grau de dependência (Fagerström) ___.
Estágio motivacional: ___
Realizado aconselhamento estruturado, com definição de data para parar em __/__/____ ,
identificação de gatilhos e planejamento de estratégias de enfrentamento.
Farmacoterapia prescrita: ___ (vareniclina · bupropiona · terapia de reposição de nicotina
em combinação de adesivo com goma ou pastilha).
Encaminhado ao programa de cessação do tabagismo: ___
Reforçado que o benefício sobre o risco cardiovascular supera o de qualquer intervenção
farmacológica isolada em prevenção secundária.`,
    fonte: 'EAGLES (Lancet 2016) · Cochrane Tobacco Addiction Group · Diretriz SBC de Prevenção'
  },

  {
    id: 'alcool', grupo: 'Pilares — mudança de estilo de vida', nome: 'Álcool',
    resumo: 'A ideia de que o álcool em dose baixa protege o coração não sobreviveu aos estudos de randomização mendeliana. O que existe é efeito dose-dependente sobre pressão e fibrilação atrial — e reduzir o consumo tem benefício mensurável.',
    evidencia: [
      { t: 'O mito da dose cardioprotetora', x: 'A curva em J das coortes é largamente explicada por viés do abstêmio doente e por confundidores. Estudos de randomização mendeliana não sustentam benefício cardiovascular em nenhuma dose. Não há motivo para recomendar que alguém comece a beber.' },
      { t: 'Pressão arterial — Roerecke, Lancet Public Health 2017', x: 'Efeito dose-dependente e reversível. Em quem consome mais de 6 doses por dia, reduzir o consumo pela metade baixou a PAS em cerca de 5,5 mmHg e a PAD em 4 mmHg. Abaixo de 2 doses por dia, o efeito da redução é pequeno.' },
      { t: 'Fibrilação atrial — Voskoboinik, NEJM 2020', x: 'Abstinência de álcool em bebedores regulares com FA paroxística reduziu a recorrência de 73% para 53% e prolongou o tempo até a recorrência. Álcool é um gatilho modificável de FA, e vale perguntar sempre.' },
      { t: 'Limites de referência', x: 'Uma dose padrão equivale a 350 mL de cerveja, 150 mL de vinho ou 45 mL de destilado. Se o paciente optar por beber, o teto de referência é de até 2 doses por dia para homens e 1 para mulheres — com a ressalva de que menos é melhor.' }
    ],
    paciente: `ÁLCOOL

Não existe quantidade de bebida que faça bem ao coração.
Aquela ideia de que uma taça de vinho protege não se confirmou nos estudos mais recentes.

Se você bebe, o limite de referência é:
Até 2 doses por dia para homens e 1 dose por dia para mulheres — e menos é melhor.

Uma dose equivale a:
1 lata de cerveja (350 mL) · 1 taça de vinho (150 mL) · 1 dose de destilado (45 mL)

Por que reduzir vale a pena:
Se você bebe bastante, cortar pela metade já baixa a pressão de forma parecida
com um remédio.
Se você tem arritmia, o álcool é um dos gatilhos mais comuns —
parar reduz muito a chance de a arritmia voltar.

Consumo atual: ___ doses por semana. Meta combinada: ___`,
    prontuario: `ORIENTAÇÃO SOBRE ÁLCOOL
Consumo atual de ___ doses por semana. Rastreio (AUDIT-C) ___.
Orientada redução do consumo, com meta pactuada de ___ doses por semana.
Explicado que não há evidência de dose cardioprotetora e que a redução tem efeito
dose-dependente sobre a pressão arterial.
Em portador de fibrilação atrial, reforçado o papel do álcool como gatilho modificável
de recorrência.
Encaminhamento para suporte especializado: ___`,
    fonte: 'Roerecke (Lancet Public Health 2017) · Voskoboinik (NEJM 2020) · SBC HAS 2025'
  },

  {
    id: 'sono', grupo: 'Pilares — mudança de estilo de vida', nome: 'Sono e apneia do sono',
    resumo: 'Dormir de 7 a 9 horas e rastrear apneia faz parte da consulta cardiológica. Mas atenção ao que a evidência sustenta: o CPAP melhora sintoma, sonolência, qualidade de vida e pressão — e não reduziu eventos cardiovasculares nos grandes ensaios.',
    evidencia: [
      { t: 'Duração do sono', x: 'A associação com risco cardiovascular tem forma de U: tanto o sono curto quanto o excessivamente longo se associam a maior risco em coortes. A faixa de referência é de 7 a 9 horas.' },
      { t: 'Rastreio de apneia', x: 'Rastrear ativamente em hipertensão resistente, FA recorrente, IC, obesidade e sonolência diurna. Instrumentos: STOP-BANG e escala de sonolência de Epworth. Confirmação por polissonografia ou poligrafia.' },
      { t: 'CPAP e pressão — o que é real', x: 'O CPAP reduz a PAS em cerca de 2 a 3 mmHg na média, com efeito maior na hipertensão resistente e em quem tem boa adesão (mais de 4 horas por noite).' },
      { t: 'SAVE — NEJM 2016 e RICCADSA', x: 'Em pacientes com apneia moderada a grave e doença cardiovascular estabelecida, o CPAP não reduziu eventos cardiovasculares. A adesão média baixa é uma explicação plausível, mas o resultado é o que temos. Indique CPAP por sintoma, sonolência, qualidade de vida e controle pressórico — não prometendo redução de infarto.' }
    ],
    paciente: `SONO

Meta: dormir de 7 a 9 horas por noite.

Higiene do sono:
Horário fixo para deitar e levantar, inclusive no fim de semana.
Quarto escuro, silencioso e fresco.
Sem tela na hora antes de dormir.
Sem café depois das 16 horas e sem álcool à noite —
o álcool até dá sono, mas piora muito a qualidade do sono.
Sem cochilo longo à tarde.

APNEIA DO SONO
Ronco alto, pausas na respiração percebidas por outra pessoa, acordar cansado
e sono durante o dia podem indicar apneia do sono.
A apneia piora a pressão e favorece arritmia. Vale investigar.
Perder peso e evitar dormir de barriga para cima ajudam.
Se você já usa CPAP, use todas as noites — o aparelho só funciona com uso regular,
de pelo menos 4 horas por noite.`,
    prontuario: `ORIENTAÇÃO DE SONO
Duração habitual de ___ h por noite. Ronco ___. Pausas presenciadas ___.
Epworth ___. STOP-BANG ___.
Orientada higiene do sono: horário regular, ambiente adequado, restrição de tela,
cafeína e álcool no período noturno.
Rastreio de apneia obstrutiva do sono: ___
Polissonografia solicitada: ___
Em uso de CPAP, reforçada a necessidade de adesão de pelo menos 4 h por noite.
Registrado que o CPAP tem benefício sintomático e pressórico, sem redução demonstrada
de eventos cardiovasculares nos ensaios SAVE e RICCADSA.`,
    fonte: 'SAVE (NEJM 2016) · RICCADSA · AHA Scientific Statement sobre sono e saúde cardiovascular'
  },

  // ============ POR CONDIÇÃO ============
  {
    id: 'has', grupo: 'Por condição', nome: 'Hipertensão arterial',
    resumo: 'As medidas não farmacológicas somadas — DASH, sódio, peso, exercício e álcool — chegam a reduzir a PAS em mais de 15 mmHg. É o equivalente a duas classes de anti-hipertensivo, e é a parte da consulta que mais costuma ser negligenciada.',
    evidencia: [
      { t: 'Meta pressórica', x: 'SBC 2025 e AHA/ACC: PA abaixo de 130/80 mmHg. ESC 2024: alvo de PAS entre 120 e 129 mmHg quando bem tolerado. No idoso frágil, individualizar para menos de 140/80 e vigiar hipotensão ortostática.' },
      { t: 'Efeito somado das medidas', x: 'Redução de sódio 5 mmHg · dieta DASH 11 mmHg em hipertensos · perda de peso cerca de 1 mmHg por quilograma · exercício aeróbico 5 a 8 mmHg · redução do álcool no bebedor pesado 5 mmHg. Nenhuma isolada resolve, mas o conjunto é grande.' },
      { t: 'Medida domiciliar', x: 'MRPA e MAPA identificam hipertensão do avental branco e hipertensão mascarada, e predizem desfecho melhor do que a medida de consultório. Orientar o paciente a medir sentado, após 5 min de repouso, com o braço apoiado na altura do coração, duas vezes pela manhã e duas à noite.' },
      { t: 'Adesão', x: 'A causa mais frequente de hipertensão aparentemente resistente é a má adesão. Perguntar de forma não julgadora — "nesta última semana, quantos dias você deixou de tomar?" — rende mais do que perguntar se ele toma direito.' }
    ],
    paciente: `PRESSÃO ALTA

Sua meta de pressão: abaixo de ___ /___ mmHg.

As cinco medidas que mais baixam a pressão, além do remédio:
1. Reduzir o sal para no máximo 1 colher de chá rasa por dia.
2. Comer mais verduras, frutas, feijão e grãos integrais, e menos ultraprocessado.
3. Perder peso — cada quilo perdido baixa cerca de 1 ponto da pressão.
4. Caminhar 150 minutos por semana.
5. Reduzir a bebida alcoólica.

Juntas, essas medidas podem valer o mesmo que dois remédios.

COMO MEDIR A PRESSÃO EM CASA
Fique 5 minutos sentado e em repouso antes de medir.
Sente com as costas apoiadas, pés no chão, sem cruzar as pernas.
Braço apoiado na mesa, na altura do coração.
Não fale durante a medida.
Meça 2 vezes pela manhã e 2 vezes à noite, e anote todas.
Leve as anotações na consulta.

Não pare nem mude a dose do remédio por conta própria, mesmo que a pressão normalize.
A pressão está normal porque o remédio está funcionando.`,
    prontuario: `ORIENTAÇÃO — HIPERTENSÃO ARTERIAL
Meta pressórica definida em menos de ___ /___ mmHg.
Prescritas medidas não farmacológicas: restrição de sódio para menos de 2 g/dia,
padrão alimentar DASH, meta de perda de ___ kg, atividade física aeróbica de 150 min
por semana e redução do consumo de álcool.
Orientada automedida domiciliar (MRPA) com técnica padronizada, duas medidas pela manhã
e duas à noite, com registro para a próxima consulta.
Adesão medicamentosa investigada de forma dirigida: ___
Orientado a não suspender nem ajustar doses por conta própria.`,
    fonte: 'Diretriz Brasileira de Hipertensão Arterial SBC/SBH/SBN 2025 · ESC 2024 · AHA/ACC 2025'
  },

  {
    id: 'dislipidemia', grupo: 'Por condição', nome: 'Dislipidemia',
    resumo: 'A dieta ajuda, mas a magnitude do efeito sobre o LDL é limitada. O erro mais comum na consulta é deixar o paciente acreditar que a mudança alimentar substitui a estatina.',
    evidencia: [
      { t: 'Metas de LDL — SBC 2025', x: 'Risco baixo abaixo de 130 · intermediário abaixo de 100 · alto abaixo de 70 · muito alto abaixo de 50 · extremo abaixo de 30 mg/dL. Redução percentual mínima: pelo menos 50% no risco alto, muito alto e extremo, e pelo menos 30% no baixo e intermediário.' },
      { t: 'O que a dieta consegue', x: 'Substituir gordura saturada por poli-insaturada reduz o LDL em cerca de 10%. Fitosteróis 2 g/dia reduzem 8 a 10%. Fibra solúvel 5 a 10 g/dia reduz cerca de 5%. Somando tudo, algo em torno de 20 a 25% — enquanto uma estatina de alta intensidade reduz 50%.' },
      { t: 'Gordura trans', x: 'É a única gordura da dieta com associação consistente e forte com evento coronariano. Evitar gordura vegetal hidrogenada, presente em biscoitos recheados, sorvetes industrializados e produtos de panificação industrial.' },
      { t: 'Mialgia por estatina', x: 'O efeito nocebo é grande: ensaios cruzados com estatina e placebo (SAMSON e similares) mostram que a maior parte dos sintomas ocorre também com placebo. Antes de suspender, tente reduzir a dose, trocar a estatina, dar em dias alternados e reintroduzir — abandonar a estatina é o pior desfecho.' },
      { t: 'Lp(a)', x: 'Dosar pelo menos uma vez na vida. Não responde a dieta nem a estatina, mas muda a estratificação de risco e a agressividade da meta de LDL.' }
    ],
    paciente: `COLESTEROL

Sua meta de LDL, o colesterol ruim: abaixo de ___ mg/dL.

O que ajuda de verdade na alimentação:
Trocar manteiga, banha e frituras por azeite de oliva.
Comer aveia, feijão, lentilha e grão-de-bico — a fibra deles reduz o colesterol.
Peixe 2 vezes por semana.
Um punhado de castanhas por dia.
Evitar biscoito recheado, sorvete industrializado e salgadinho — eles têm gordura trans,
que é a pior de todas.

O que precisa ficar claro:
A alimentação sozinha baixa o colesterol em cerca de 20%.
O remédio baixa 50% ou mais.
Se você tem indicação de estatina, a dieta ajuda — mas não substitui.

DOR MUSCULAR COM A ESTATINA
Se sentir dor muscular, não pare por conta própria. Avise na consulta.
Existem várias saídas: mudar a dose, trocar de estatina ou usar em dias alternados.
Na maior parte das vezes, dá para continuar tratando.

Pare e avise imediatamente se a dor for intensa, com fraqueza ou urina escura.`,
    prontuario: `ORIENTAÇÃO — DISLIPIDEMIA
Categoria de risco ___. Meta de LDL abaixo de ___ mg/dL, com redução de pelo menos ___%
do basal. Não-HDL alvo ___ mg/dL.
Orientada substituição de gordura saturada por mono e poli-insaturada, aumento de fibra
solúvel para 5 a 10 g/dia e eliminação de gordura trans industrial.
Explicado que a intervenção dietética reduz o LDL em cerca de 20% e não substitui
a estatina quando há indicação.
Lp(a) dosada: ___
Sintoma muscular em uso de estatina: ___ — orientado a não suspender por conta própria
e a comunicar dor intensa com fraqueza ou colúria.`,
    fonte: 'Atualização SBC de Dislipidemias 2025 · ESC/EAS 2025 · SAMSON'
  },

  {
    id: 'dm2', grupo: 'Por condição', nome: 'Diabetes tipo 2',
    resumo: 'Aqui a mudança de estilo de vida tem um alvo que os fármacos não alcançam sozinhos: a remissão. E a escolha do antidiabético passou a ser uma decisão cardiovascular, não apenas glicêmica.',
    evidencia: [
      { t: 'Remissão — DiRECT, Lancet 2018', x: 'Restrição calórica intensiva em DM2 com menos de 6 anos de diagnóstico: remissão em 46% em 12 meses, e em 86% dos que perderam 15 kg ou mais. O determinante é a magnitude da perda de peso, não o tipo de dieta.' },
      { t: 'Exercício e HbA1c', x: 'Programa estruturado de exercício reduz a HbA1c em cerca de 0,7 ponto percentual, independentemente da perda de peso. A combinação de aeróbico com resistido é superior a cada um isolado.' },
      { t: 'Escolha do fármaco é decisão cardiovascular', x: 'Com doença cardiovascular estabelecida, IC ou DRC, o iSGLT2 e o agonista de GLP-1 têm benefício em desfecho duro independentemente do controle glicêmico. A pergunta deixou de ser apenas qual HbA1c e passou a ser qual fenótipo de risco.' },
      { t: 'Meta de HbA1c', x: 'Abaixo de 7% na maioria. Entre 7,5 e 8% em idoso frágil, com doença avançada, expectativa de vida limitada ou histórico de hipoglicemia grave. Metas mais rígidas em jovens de curta duração de doença, se atingíveis sem hipoglicemia.' },
      { t: 'Pé diabético', x: 'Exame dos pés pelo menos uma vez ao ano, com monofilamento de 10 g e palpação de pulsos. A neuropatia é silenciosa e o rastreio é a única forma de pegar antes da úlcera.' }
    ],
    paciente: `DIABETES TIPO 2

Sua meta de hemoglobina glicada: abaixo de ___%.

A notícia boa: se o seu diabetes é recente, perder bastante peso pode fazer o diabetes
entrar em remissão — ou seja, o açúcar volta ao normal sem remédio.
Quanto maior a perda de peso, maior a chance. Vale muito tentar.

O que fazer:
Reduzir açúcar, bebida açucarada, doce e farinha branca.
Preferir arroz integral, feijão, verdura, legume e proteína em toda refeição.
Não pular refeições.
Caminhar 150 minutos por semana e fazer 2 dias de exercício de força.
Perder de 5 a 10% do peso — e mais, se conseguir.

CUIDADO COM OS PÉS — todos os dias
Olhe seus pés todo dia, inclusive entre os dedos e a sola. Use um espelho se precisar.
Seque bem entre os dedos.
Não ande descalço, nem dentro de casa.
Não corte calos nem use lixa de metal. Não use água muito quente.
Corte a unha reta, sem cavar os cantos.
Procure atendimento se aparecer ferida, bolha, rachadura, vermelhidão ou mudança de cor.
Uma ferida pequena no pé do diabético pode virar um problema grande em poucos dias.

Procure atendimento se tiver açúcar muito baixo com tremor, suor frio e confusão,
ou açúcar muito alto com muita sede, muita urina e sonolência.`,
    prontuario: `ORIENTAÇÃO — DIABETES TIPO 2
Meta de HbA1c abaixo de ___%, individualizada por idade, duração da doença, comorbidades
e risco de hipoglicemia.
Orientada redução de açúcares de adição e carboidratos refinados, com padrão alimentar
estruturado e meta de perda de ___ kg.
Discutida a possibilidade de remissão com perda de peso substancial em diabetes de curta
duração (DiRECT).
Prescritos 150 min por semana de atividade aeróbica mais 2 sessões de exercício resistido.
Realizado exame dos pés com monofilamento de 10 g e palpação de pulsos.
Orientados os cuidados diários com os pés e os sinais de alarme.
Rastreios: retinografia ___ · relação albumina-creatinina urinária ___ · exame dos pés ___
Terapia com benefício cardiovascular: ___`,
    fonte: 'DiRECT (Lancet 2018) · SBD 2025 · ADA/EASD · Diretriz SBC de Diabetes e Doença Cardiovascular'
  },

  {
    id: 'ic', grupo: 'Por condição', nome: 'Insuficiência cardíaca',
    resumo: 'O autocuidado na IC é o que separa o paciente que reinterna do que não reinterna. Vale dizer que a restrição agressiva de sódio, que a gente prescreve por hábito, não passou no teste do ensaio randomizado — o que muda o tom da conversa.',
    evidencia: [
      { t: 'SODIUM-HF — Lancet 2022', x: 'Restrição de sódio para menos de 1.500 mg/dia na IC crônica não reduziu internação, ida ao pronto-socorro ou morte em 12 meses, com melhora modesta de qualidade de vida e classe funcional. A recomendação razoável hoje é evitar excessos, mirando menos de 2 a 3 g/dia, sem a rigidez que se praticava.' },
      { t: 'Restrição hídrica', x: 'A evidência é fraca e os ensaios são pequenos. Restringir de rotina em paciente estável e euvolêmico não tem suporte. Reservar para congestão refratária e hiponatremia, individualizando entre 1,5 e 2 L/dia.' },
      { t: 'Peso diário', x: 'É o marcador mais precoce e mais barato de descompensação. Ganho de mais de 2 kg em 3 dias antecede a congestão clínica e é o gatilho para contato ou ajuste de diurético.' },
      { t: 'Vacinação — IVVE, Lancet Global Health 2022', x: 'Vacina influenza na IC reduziu pneumonia e internações; o desfecho composto primário não foi significativo no geral, com benefício nos períodos de circulação viral. Vacinar continua sendo recomendação de todas as diretrizes.' },
      { t: 'Anti-inflamatórios', x: 'AINE causam retenção de sódio e água, antagonizam o diurético e pioram a função renal. É uma das causas evitáveis mais frequentes de descompensação — e o paciente compra sem receita.' },
      { t: 'Reabilitação', x: 'Exercício supervisionado na IC é seguro e melhora capacidade funcional e qualidade de vida de forma consistente. Encaminhar é subutilizado.' }
    ],
    paciente: `INSUFICIÊNCIA CARDÍACA — CUIDADOS EM CASA

PESE-SE TODOS OS DIAS. É a coisa mais importante desta lista.
Sempre de manhã, em jejum, depois de urinar, na mesma balança e com roupa leve.
Anote em um caderno e leve nas consultas.
Seu peso seco é ___ kg.

SAL
No máximo 1 colher de chá rasa por dia, somando toda a comida.
O maior vilão são embutidos, enlatados, temperos prontos e caldo em cubo.

LÍQUIDOS
Limite: ___ mL por dia, contando água, suco, café, chá, leite e sopa.
Se o seu médico não estabeleceu limite, beba conforme a sede, sem exagero.

REMÉDIOS
Nunca pare por conta própria, mesmo se estiver se sentindo bem.
As doses vão aumentando aos poucos nas consultas — isso é o esperado, não é piora.
NÃO USE anti-inflamatório: diclofenaco, ibuprofeno, nimesulida, cetoprofeno.
Eles seguram líquido e pioram a insuficiência cardíaca.
Para dor ou febre, use dipirona ou paracetamol.

VACINAS
Influenza todo ano, pneumocócica e COVID-19 em dia.

ATIVIDADE FÍSICA
Caminhar faz bem e é seguro. Comece devagar e aumente aos poucos.
Peça encaminhamento para a reabilitação cardiovascular.

PROCURE O PRONTO-SOCORRO SE
Ganhar mais de 2 kg em 3 dias.
Falta de ar em repouso, ou precisar de mais travesseiros para dormir.
Acordar à noite com falta de ar.
Inchaço nas pernas ou na barriga que está piorando.
Desmaio, ou palpitação que não passa.`,
    prontuario: `ORIENTAÇÃO — INSUFICIÊNCIA CARDÍACA
Peso seco de ___ kg. Orientada pesagem diária em jejum, na mesma balança, com registro
em diário e comunicação ao serviço se houver ganho de mais de 2 kg em 3 dias.
Restrição de sódio orientada para menos de 2 a 3 g/dia, sem restrição agressiva —
o SODIUM-HF não demonstrou benefício em desfecho clínico com meta abaixo de 1.500 mg/dia.
Restrição hídrica de ___ mL/dia, individualizada e reservada a congestão refratária
ou hiponatremia.
Orientado a não suspender medicações por conta própria e explicada a lógica da titulação
progressiva dos quatro pilares.
Contraindicado o uso de anti-inflamatórios não esteroidais. Orientada analgesia
com dipirona ou paracetamol.
Vacinação: influenza anual, pneumocócica e COVID-19 — ___
Encaminhado à reabilitação cardiovascular: ___
Sinais de descompensação e critérios de retorno orientados por escrito.`,
    fonte: 'SODIUM-HF (Lancet 2022) · IVVE (Lancet Glob Health 2022) · Diretriz SBC de IC · ESC 2021/2023'
  },

  {
    id: 'fa', grupo: 'Por condição', nome: 'Fibrilação atrial e anticoagulação',
    resumo: 'A FA deixou de ser tratada só com fármaco e ablação: o controle dos fatores de risco virou pilar terapêutico, com efeito comparável ao de uma intervenção. E a conversa sobre anticoagulante precisa cobrir o que fazer quando esquecer a dose.',
    evidencia: [
      { t: 'Peso — LEGACY, JACC 2015', x: 'Perda de 10% ou mais do peso, mantida, associou-se a probabilidade seis vezes maior de sobrevida livre de arritmia. A flutuação de peso maior que 5% anulou boa parte do benefício — a manutenção importa tanto quanto a perda.' },
      { t: 'Álcool — Voskoboinik, NEJM 2020', x: 'Abstinência em bebedores regulares com FA paroxística reduziu a recorrência de 73% para 53%. É a intervenção comportamental com o melhor ensaio na FA.' },
      { t: 'Condicionamento — CARDIO-FIT', x: 'Ganho de capacidade cardiorrespiratória associou-se a menor recorrência de FA de forma dose-dependente, somando-se ao efeito da perda de peso.' },
      { t: 'Apneia do sono', x: 'A apneia não tratada associa-se a maior recorrência de FA após cardioversão e ablação. Rastrear ativamente em todo paciente com FA recorrente.' },
      { t: 'Anticoagulação — o ponto prático', x: 'A eficácia do DOAC depende da meia-vida curta: uma dose esquecida deixa o paciente desprotegido em poucas horas, diferentemente da varfarina. Isso muda a orientação de adesão e precisa ser dito explicitamente.' },
      { t: 'Rivaroxabana e alimento', x: 'A rivaroxabana em dose de 15 e 20 mg precisa ser tomada junto com a refeição para atingir biodisponibilidade adequada. Tomar em jejum reduz a absorção — é um erro comum e silencioso.' }
    ],
    paciente: `FIBRILAÇÃO ATRIAL

Além do remédio, quatro coisas reduzem muito a chance de a arritmia voltar:
1. Perder peso e manter — a perda precisa se sustentar, o efeito sanfona anula o ganho.
2. Reduzir ou parar o álcool — é um dos gatilhos mais comuns.
3. Melhorar o condicionamento físico com caminhada regular.
4. Tratar a apneia do sono, se você tiver.

Controlar a pressão e o diabetes também conta.

O ANTICOAGULANTE
O anticoagulante existe para evitar AVC. É o remédio mais importante da sua receita.

Tome sempre no mesmo horário.
Se esquecer uma dose, tome assim que lembrar, no mesmo dia. Nunca dobre a dose.
Se você usa rivaroxabana, tome sempre junto com uma refeição —
em jejum o remédio não é bem absorvido.
Nunca pare por conta própria, nem por poucos dias.
O efeito acaba rápido: um dia sem tomar já deixa você desprotegido.

Antes de qualquer cirurgia, extração de dente ou exame invasivo,
avise que você usa anticoagulante e converse com o cardiologista.

Se você usa varfarina, colha o INR na frequência combinada e leve todos os resultados.

PROCURE ATENDIMENTO SE
Sangramento que não para.
Sangue nas fezes, na urina ou vômito com sangue.
Dor de cabeça forte e súbita, ou qualquer batida na cabeça.
Palpitação com falta de ar, dor no peito ou desmaio.`,
    prontuario: `ORIENTAÇÃO — FIBRILAÇÃO ATRIAL
CHA2DS2-VA ___. HAS-BLED ___. Anticoagulação: ___
Orientado o controle dos fatores de risco como pilar terapêutico: meta de perda ponderal
de 10% com manutenção (LEGACY), redução ou abstinência de álcool (Voskoboinik, NEJM 2020),
ganho de condicionamento cardiorrespiratório, rastreio e tratamento de apneia do sono
e controle de PA e glicemia.
Orientada adesão estrita ao anticoagulante, com ênfase na meia-vida curta do DOAC —
uma dose esquecida já reduz a proteção.
Em uso de rivaroxabana, reforçada a administração junto à refeição.
Orientado a comunicar o uso de anticoagulante antes de qualquer procedimento e a não
suspender por conta própria.
Sinais de sangramento e critérios de retorno orientados.`,
    fonte: 'LEGACY (JACC 2015) · CARDIO-FIT · Voskoboinik (NEJM 2020) · Diretriz SBC de FA 2025 · ESC 2024'
  },

  {
    id: 'dac', grupo: 'Por condição', nome: 'DAC crônica e pós-infarto',
    resumo: 'Depois do stent, o paciente sai com uma lista de remédios e quase nunca com as duas orientações que mais mudam desfecho: cessação do tabagismo e reabilitação cardiovascular. Junte a elas a regra de nunca suspender o antiagregante sozinho.',
    evidencia: [
      { t: 'Reabilitação cardiovascular — Cochrane 2021', x: 'Reduz mortalidade cardiovascular e internações após evento coronariano. A taxa de encaminhamento no mundo real fica muito abaixo do que a evidência justifica — é a prescrição esquecida do pós-infarto.' },
      { t: 'Cessação do tabagismo', x: 'Em prevenção secundária, é a intervenção isolada com maior redução relativa de risco. Nenhum fármaco da receita entrega tanto.' },
      { t: 'Não suspender o antiagregante', x: 'A interrupção precoce da dupla antiagregação após implante de stent é preditor forte de trombose de stent, evento com letalidade alta. O paciente precisa sair sabendo que essa é a regra inegociável.' },
      { t: 'Dieta mediterrânea em prevenção secundária', x: 'O Lyon Diet Heart Study mostrou redução expressiva de recorrência com padrão mediterrâneo após infarto. O tamanho amostral é pequeno para os padrões atuais, mas o sinal é coerente com o PREDIMED.' },
      { t: 'Retorno às atividades', x: 'Atividade sexual pode ser retomada em geral em 1 semana após infarto não complicado, se o paciente sobe dois lances de escada sem sintoma. Direção: em geral após 1 semana no infarto não complicado, com regras específicas para motorista profissional. Trabalho não braçal: 2 a 4 semanas. São perguntas que o paciente tem e não faz.' },
      { t: 'Inibidor de PDE5', x: 'Sildenafila e congêneres são compatíveis com doença coronariana estável, mas absolutamente contraindicados com nitrato — em qualquer formulação, incluindo o isossorbida sublingual de resgate. Orientar isso explicitamente.' }
    ],
    paciente: `DEPOIS DO INFARTO OU DA ANGIOPLASTIA

A REGRA MAIS IMPORTANTE
Nunca pare o AAS nem o segundo antiagregante por conta própria, nem por poucos dias.
Parar cedo demais pode entupir o stent, e isso é grave.
Antes de qualquer cirurgia, extração de dente ou endoscopia,
fale com o cardiologista primeiro.

REABILITAÇÃO CARDIOVASCULAR
Peça o encaminhamento. É um programa de exercício supervisionado que reduz a chance
de novo evento e de nova internação. Muita gente sai do hospital sem saber que existe.

PARAR DE FUMAR
É o que mais protege você agora. Mais do que qualquer remédio da receita.

ALIMENTAÇÃO
Padrão mediterrâneo: azeite, peixe, verduras, frutas, feijão, castanhas e grãos integrais.
Menos carne processada, fritura e ultraprocessado.

QUANDO POSSO VOLTAR A...
Atividade sexual: em geral 1 semana depois, se você sobe 2 lances de escada sem sintoma.
Dirigir: em geral 1 semana depois, no infarto sem complicações.
Motorista profissional tem regra própria — pergunte.
Trabalho não pesado: 2 a 4 semanas. Trabalho braçal: converse na consulta.
Viagem de avião: em geral após 2 semanas, se estável.

ATENÇÃO IMPORTANTE
Se você usa sildenafila, tadalafila ou similar para disfunção erétil,
NUNCA tome junto com nitrato ou isossorbida, nem o comprimido embaixo da língua.
A combinação pode derrubar a pressão de forma grave. Avise seu médico se usa.

PROCURE O PRONTO-SOCORRO SE
Dor no peito em repouso por mais de 20 minutos.
Suor frio, falta de ar súbita, desmaio.`,
    prontuario: `ORIENTAÇÃO — DAC CRÔNICA E PÓS-INFARTO
Orientado de forma enfática a não suspender a antiagregação por conta própria e a discutir
qualquer procedimento invasivo ou odontológico previamente com o cardiologista —
a interrupção precoce da dupla antiagregação é preditor de trombose de stent.
Encaminhado à reabilitação cardiovascular supervisionada: ___
Cessação do tabagismo abordada, com farmacoterapia e encaminhamento: ___
Prescrito padrão alimentar mediterrâneo e atividade física de 150 min por semana.
Orientado o retorno às atividades: atividade sexual e direção em cerca de 1 semana
no evento não complicado, com capacidade funcional de 2 lances de escada sem sintoma;
retorno ao trabalho não braçal em 2 a 4 semanas.
Alertado sobre a contraindicação absoluta da associação entre inibidor de PDE5 e nitrato,
incluindo o isossorbida sublingual de resgate.
Sinais de alarme e critérios de retorno ao pronto-socorro orientados.`,
    fonte: 'Cochrane Reabilitação Cardíaca 2021 · Lyon Diet Heart Study · PREDIMED · ESC SCC 2024'
  },

  {
    id: 'tep', grupo: 'Por condição', nome: 'Pós-TEP e trombose venosa',
    resumo: 'A diretriz AHA/ACC 2026 formalizou o seguimento pós-TEP: deambulação precoce, contato na primeira semana, consulta em 3 meses e — o que mais se esquece — pergunta ativa sobre dispneia por pelo menos um ano, para não perder a doença tromboembólica crônica.',
    evidencia: [
      { t: 'Deambulação precoce', x: 'A AHA/ACC 2026 recomenda estimular a deambulação precoce após o início da anticoagulação. Repouso prolongado não previne embolização e piora o descondicionamento.' },
      { t: 'Rastreio de DTEPC', x: 'Perguntar sobre dispneia e limitação funcional em toda consulta por pelo menos 1 ano. A doença tromboembólica pulmonar crônica complica cerca de 3% dos TEP e é potencialmente curável — perder o diagnóstico custa caro.' },
      { t: 'Viagens longas', x: 'Recomendação específica para viagens de 5 horas ou mais: movimentar as pernas periodicamente, hidratar-se e considerar meia de compressão graduada. Não há indicação de anticoagulação profilática de rotina para o viajante.' },
      { t: 'Saúde mental', x: 'A diretriz de 2026 recomenda rastrear sintomas de ansiedade e depressão após TEP. O medo de recorrência é frequente, subdiagnosticado e prejudica adesão e retorno funcional.' },
      { t: 'Mulheres em idade fértil', x: 'Aconselhamento multidisciplinar sobre contracepção — estrogênio combinado é contraindicado — e sobre a estratégia de anticoagulação em gestação futura, que deve ser com heparina, já que DOAC e varfarina são Classe 3: Dano.' },
      { t: 'Dose reduzida na fase estendida', x: 'RENOVE e API-CAT sustentam apixabana 2,5 mg de 12/12 h ou rivaroxabana 10 mg/dia na fase estendida, com menos sangramento e proteção mantida contra recorrência.' }
    ],
    paciente: `DEPOIS DE UMA EMBOLIA PULMONAR OU TROMBOSE

O ANTICOAGULANTE
Tome todos os dias, no mesmo horário, sem falhar.
Se esquecer uma dose, tome assim que lembrar no mesmo dia. Nunca dobre.
Não pare por conta própria, mesmo se estiver se sentindo bem.
Duração prevista do tratamento: ___
Antes de qualquer cirurgia, extração de dente ou exame invasivo, avise que usa
anticoagulante.

MOVIMENTE-SE
Você não precisa ficar de repouso. Andar é bom e é recomendado.
Volte à caminhada assim que se sentir capaz. Aumente aos poucos.

VIAGENS LONGAS, DE 5 HORAS OU MAIS
Levante-se e caminhe a cada 1 a 2 horas.
Se não puder levantar, movimente os pés e as pernas no lugar.
Beba água e evite álcool.
Use meia de compressão, se orientado.

FIQUE ATENTO POR PELO MENOS 1 ANO
Se a falta de ar não melhorar, ou voltar depois de ter melhorado,
avise na consulta. Existe uma complicação tardia que tem tratamento —
e só é encontrada se alguém perguntar.

É NORMAL SENTIR MEDO
Muita gente fica ansiosa depois de uma embolia, com receio de que aconteça de novo.
Isso é comum e tem tratamento. Fale sobre isso na consulta.

MULHERES
Não use anticoncepcional com estrogênio.
Se pretende engravidar, converse antes — o anticoagulante precisa ser trocado.

PROCURE ATENDIMENTO IMEDIATAMENTE SE
Falta de ar súbita, dor no peito ao respirar fundo, tosse com sangue ou desmaio.
Dor, inchaço ou vermelhidão nova em uma perna.
Sangramento que não para, sangue nas fezes ou na urina, ou dor de cabeça forte e súbita.`,
    prontuario: `ORIENTAÇÃO — PÓS-TEP / TROMBOSE VENOSA PROFUNDA
Categoria AHA/ACC do evento: ___. Fator provocador: ___.
Anticoagulação com ___, com duração prevista de ___.
Na fase estendida, orientada dose reduzida — apixabana 2,5 mg de 12/12 h ou rivaroxabana
10 mg/dia (RENOVE, API-CAT).
Estimulada a deambulação precoce após o início da anticoagulação.
Programado contato ou consulta na primeira semana após a alta e reavaliação em até 3 meses
para definição da duração do tratamento.
Orientada a pergunta ativa sobre dispneia e limitação funcional em toda consulta por pelo
menos 1 ano, para rastreio de doença tromboembólica pulmonar crônica.
Orientadas as medidas para viagens de 5 h ou mais: mobilização periódica, hidratação
e meia de compressão graduada.
Rastreados sintomas de ansiedade e depressão relacionados ao evento: ___
Em mulher em idade fértil, realizado aconselhamento sobre contracepção sem estrogênio
e sobre a estratégia de anticoagulação em gestação futura, com heparina.
Sinais de recorrência e de sangramento orientados por escrito.`,
    fonte: 'Diretriz AHA/ACC de TEP 2026 (Circulation 2026;153:e977) · RENOVE · API-CAT'
  },

  {
    id: 'valvopatia', grupo: 'Por condição', nome: 'Valvopatia, prótese e endocardite',
    resumo: 'A orientação que mais protege o portador de prótese não é sobre remédio: é higiene bucal e ida regular ao dentista. A profilaxia antibiótica cobre um evento pontual; a saúde bucal cobre o dia a dia.',
    evidencia: [
      { t: 'Higiene bucal', x: 'A bacteremia da escovação e da mastigação diária é cumulativamente muito maior que a de um procedimento odontológico isolado. Por isso, as diretrizes enfatizam higiene bucal e acompanhamento odontológico regular acima da profilaxia pontual.' },
      { t: 'Profilaxia antibiótica — quem recebe', x: 'Apenas alto risco: prótese valvar ou material protético para reparo, endocardite prévia, cardiopatia congênita cianótica não corrigida ou corrigida com material protético, e transplantado cardíaco com valvopatia. Indicada apenas em procedimento dentário com manipulação gengival ou perfuração da mucosa oral.' },
      { t: 'Esquema', x: 'Amoxicilina 2 g por via oral em dose única, de 30 a 60 min antes. Em alergia à penicilina, cefalexina 2 g, ou clindamicina, ou azitromicina 500 mg.' },
      { t: 'Prótese mecânica', x: 'A varfarina é obrigatória e vitalícia, com INR alvo de 2,0 a 3,0 na posição aórtica e de 2,5 a 3,5 na mitral. DOAC é contraindicado — há ensaio interrompido por excesso de eventos tromboembólicos e hemorrágicos.' },
      { t: 'Varfarina e alimentação', x: 'O erro é orientar a evitar verdura escura. O correto é manter a ingestão de vitamina K constante: a oscilação é que desestabiliza o INR, não a quantidade em si.' },
      { t: 'Sinal de alarme específico', x: 'Mudança ou desaparecimento do clique da prótese metálica sugere trombose de prótese e é emergência. O paciente deve saber disso.' }
    ],
    paciente: `VALVOPATIA E PRÓTESE VALVAR

CUIDADO COM OS DENTES — é a orientação mais importante
Escove os dentes pelo menos 2 vezes ao dia e use fio dental.
Vá ao dentista a cada 6 meses.
Trate cárie e gengivite sem demora.
A bactéria da boca é a principal causa de infecção na valva.

ANTES DO DENTISTA
Se você tem prótese valvar, já teve infecção na valva ou tem cardiopatia congênita,
tome amoxicilina 2 g (4 comprimidos de 500 mg) em dose única,
de 30 a 60 minutos antes do procedimento em que a gengiva será manipulada.
Avise sempre o dentista sobre o seu problema no coração.
Leve a carteirinha de identificação, se tiver.

SE VOCÊ TEM PRÓTESE MECÂNICA — VARFARINA
A varfarina é obrigatória e para o resto da vida. Não existe substituto.
Nenhum dos anticoagulantes novos serve para prótese mecânica.
Colha o INR a cada ___ e leve todos os resultados nas consultas.
Alvo de INR: ___

Sobre a comida: você NÃO precisa evitar couve, brócolis, espinafre e alface.
O que importa é manter a quantidade constante — comer sempre parecido,
sem semanas com muito e semanas com nada.
Evite excesso de bebida alcoólica.
Não tome anti-inflamatório nem antibiótico sem avisar o médico.
Para dor ou febre, use dipirona ou paracetamol.

PROCURE ATENDIMENTO SE
Febre por mais de alguns dias, sem causa clara — pode ser infecção na valva.
Falta de ar que está piorando, desmaio ou dor no peito.
O barulho da sua prótese mudar de som ou desaparecer. Isso é urgente.
Sangramento que não para.`,
    prontuario: `ORIENTAÇÃO — VALVOPATIA E PRÓTESE VALVAR
Reforçadas a higiene bucal diária e a avaliação odontológica semestral como principal
medida de prevenção de endocardite infecciosa.
Profilaxia antibiótica indicada por ___ (prótese valvar · endocardite prévia · cardiopatia
congênita cianótica · transplante cardíaco com valvopatia): amoxicilina 2 g por via oral
em dose única, de 30 a 60 min antes de procedimento dentário com manipulação gengival
ou perfuração de mucosa oral. Alternativa em alergia: ___
Carteirinha de identificação entregue.
Em prótese mecânica: varfarina vitalícia, com INR alvo de ___ e coleta a cada ___.
Explicado que DOAC é contraindicado.
Orientada constância — e não restrição — da ingestão de vitamina K.
Orientados os sinais de alarme, incluindo febre prolongada sem foco e alteração
ou desaparecimento do clique protético, que sugere trombose de prótese.`,
    fonte: 'ESC/EACTS Valvopatias 2025 · ESC Endocardite 2023 · Diretriz SBC de Valvopatias'
  },

  {
    id: 'drc', grupo: 'Por condição', nome: 'Doença renal crônica e paciente cardiorrenal',
    resumo: 'O paciente cardiorrenal recebe orientações que se contradizem entre especialidades. Vale unificar: sódio sim, restrição proteica com parcimônia, potássio caso a caso e a regra dos dias de doença.',
    evidencia: [
      { t: 'Sódio', x: 'A restrição de sódio na DRC potencializa o efeito antiproteinúrico e anti-hipertensivo do bloqueio do sistema renina-angiotensina. É a orientação dietética com melhor sustentação na DRC.' },
      { t: 'Proteína', x: 'Restrição proteica moderada, de 0,8 g/kg/dia, pode retardar a progressão na DRC avançada, mas o risco de desnutrição e sarcopenia é real, sobretudo no idoso e no cardiopata. Individualizar com o nefrologista e a nutrição, nunca prescrever restrição agressiva de forma genérica.' },
      { t: 'Potássio', x: 'A restrição indiscriminada de frutas e verduras prejudica a qualidade da dieta. Restringir conforme o potássio sérico e o estágio, e não por regra fixa. Substitutos de sal com potássio são contraindicados na DRC avançada.' },
      { t: 'Regra dos dias de doença', x: 'Em vômito, diarreia ou febre com desidratação, suspender temporariamente diurético, IECA ou BRA, iSGLT2, antagonista mineralocorticoide, metformina e anti-inflamatório. Retomar após a recuperação da ingesta. Essa orientação previne injúria renal aguda evitável e quase nunca é dada.' },
      { t: 'Anti-inflamatórios e contraste', x: 'AINE são nefrotóxicos e devem ser evitados. Antes de exame com contraste, informar a função renal e manter hidratação conforme orientação.' }
    ],
    paciente: `DOENÇA RENAL E CORAÇÃO

SAL
Reduzir o sal é a orientação alimentar mais importante para o seu rim e para a pressão.
Ele também faz os seus remédios funcionarem melhor.
No máximo 1 colher de chá rasa por dia.

REGRA DOS DIAS DE DOENÇA — muito importante
Se você tiver vômito, diarreia forte ou febre com pouca ingestão de líquido,
PARE TEMPORARIAMENTE estes remédios e procure atendimento:
o diurético, o remédio de pressão que termina em "pril" ou em "sartana",
a dapagliflozina ou empagliflozina, a espironolactona e a metformina.
Volte a tomar quando estiver comendo e bebendo normalmente e após orientação médica.
Isso protege o seu rim de uma piora súbita.

REMÉDIOS PROIBIDOS
Anti-inflamatórios: diclofenaco, ibuprofeno, nimesulida, cetoprofeno.
Eles agridem o rim. Para dor ou febre, use dipirona ou paracetamol.
Não use suplemento proteico, creatina ou "remédio para rim" de farmácia
sem falar com o médico.

ALIMENTAÇÃO
Não corte frutas e verduras por conta própria.
A necessidade de reduzir potássio depende do seu exame — quem define é o médico.
Não use sal com potássio, o chamado sal light, sem liberação médica.

EXAMES COM CONTRASTE
Avise sempre que você tem problema no rim antes de tomografia ou cateterismo.`,
    prontuario: `ORIENTAÇÃO — DOENÇA RENAL CRÔNICA / SÍNDROME CARDIORRENAL
TFG ___ mL/min/1,73 m², estágio ___. Relação albumina-creatinina ___ mg/g.
Prescrita restrição de sódio para menos de 2 g/dia, com reforço do efeito sinérgico
sobre o bloqueio do sistema renina-angiotensina e sobre a proteinúria.
Restrição proteica: ___ — individualizada e discutida com a nutrição, evitando restrição
agressiva pelo risco de sarcopenia.
Potássio dietético orientado conforme o potássio sérico, sem restrição indiscriminada
de frutas e hortaliças. Substituto de sal com potássio contraindicado.
Orientada a regra dos dias de doença: suspensão temporária de diurético, IECA ou BRA,
iSGLT2, antagonista mineralocorticoide e metformina em quadros de vômito, diarreia
ou febre com redução da ingesta, com retomada após recuperação e reavaliação.
Contraindicado o uso de anti-inflamatórios não esteroidais.
Orientado a informar a função renal antes de exames com contraste iodado.`,
    fonte: 'KDIGO · Diretriz SBC de Prevenção · ESC 2021/2023 IC'
  },

  {
    id: 'gestacao', grupo: 'Por condição', nome: 'Cardiopatia e gestação',
    resumo: 'A conversa sobre contracepção e planejamento de gestação precisa acontecer antes, não durante. Vários fármacos cardiológicos de uso rotineiro são teratogênicos, e a troca é planejada, não emergencial.',
    evidencia: [
      { t: 'Fármacos contraindicados', x: 'IECA, BRA, ARNI e antagonista mineralocorticoide são contraindicados na gestação. Estatina foi historicamente contraindicada, e hoje há revisão dessa posição em alto risco — decisão individualizada e compartilhada. DOAC e varfarina não devem ser usados: no tromboembolismo, a anticoagulação é com heparina.' },
      { t: 'Fármacos aceitos', x: 'Metildopa, labetalol, nifedipino de liberação prolongada e hidralazina para hipertensão. Betabloqueador seletivo, preferindo metoprolol, com atenção ao crescimento fetal. Furosemida apenas se congestão. Atenolol deve ser evitado.' },
      { t: 'Contracepção', x: 'Contraceptivo combinado com estrogênio é contraindicado em tromboembolismo prévio, trombofilia, hipertensão pulmonar, cardiopatia cianótica, FA e enxaqueca com aura. Alternativas seguras: DIU de cobre, DIU hormonal, implante e progestágeno isolado.' },
      { t: 'Risco materno', x: 'Classificar pela escala mOMS antes da concepção. Hipertensão pulmonar, disfunção ventricular grave, estenose aórtica ou mitral graves sintomáticas e síndrome de Marfan com aorta dilatada implicam risco proibitivo e devem ser discutidas explicitamente.' },
      { t: 'Pós-parto', x: 'Cardiomiopatia periparto pode se manifestar até 5 meses após o parto. Dispneia e edema pós-parto merecem investigação ativa e não devem ser atribuídos automaticamente ao puerpério.' }
    ],
    paciente: `CORAÇÃO E GRAVIDEZ

SE VOCÊ NÃO QUER ENGRAVIDAR AGORA
Vários remédios do coração fazem mal ao bebê. Use um método contraceptivo confiável.
Métodos seguros para você: DIU de cobre, DIU hormonal, implante ou pílula só
de progesterona.
Atenção: a pílula combinada, com estrogênio, pode ser contraindicada no seu caso.
Confirme com o médico antes de usar.

SE VOCÊ PRETENDE ENGRAVIDAR
Converse ANTES de engravidar, não depois.
Alguns remédios precisam ser trocados com antecedência, e a troca é planejada.
Vamos avaliar juntos o risco e o melhor momento.

SE VOCÊ DESCOBRIU QUE ESTÁ GRÁVIDA
Avise o cardiologista imediatamente. Não pare nenhum remédio por conta própria —
alguns precisam ser trocados, e parar de repente também tem risco.

DEPOIS DO PARTO
Se aparecer falta de ar, cansaço muito além do esperado ou inchaço nas pernas
nos meses após o parto, procure atendimento. Não atribua tudo ao pós-parto.
Existe um tipo de problema cardíaco que aparece nessa fase e tem tratamento.`,
    prontuario: `ORIENTAÇÃO — CARDIOPATIA E GESTAÇÃO
Realizado aconselhamento pré-concepcional. Classificação de risco mOMS: ___.
Orientado que IECA, BRA, ARNI, antagonista mineralocorticoide, DOAC e varfarina
são contraindicados na gestação, com necessidade de substituição planejada.
Contracepção discutida: ___ — orientado que contraceptivo combinado com estrogênio
é contraindicado em ___.
Paciente orientada a comunicar imediatamente a suspeita de gestação e a não suspender
medicações por conta própria.
Orientada a procurar atendimento em caso de dispneia, fadiga desproporcional ou edema
no puerpério, pela possibilidade de cardiomiopatia periparto até 5 meses após o parto.
Encaminhamento a pré-natal de alto risco e a cardiologia obstétrica: ___`,
    fonte: 'ESC Doença Cardiovascular na Gestação 2018 · Diretriz SBC · AHA/ACC TEP 2026'
  }
];
