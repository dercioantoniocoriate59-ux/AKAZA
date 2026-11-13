// AKAZA BOT — Node.js + Baileys
// Requer Node.js 20+. Os dados de pagamento são guardados por grupo em database/grupos.json.
// Nunca coloque Cria para mim o BOT AKAZA completo, com 100 comandos, seguindo EXATAMENTE este modelo do V8. Não inventa estrutura nova.

=== DADOS DO BOT ===
- Nome do bot: AKAZA
- Dono: Eu
- Número do dono: 862404978
- Número do bot: 858108694
- Prefixo: .
- Canal oficial: https://whatsapp.com/channel/0029VbAKAZA
- Linguagem: Node.js + @whiskeysockets/baileys
- Hospedagem: bot-hosting.net
- Estilo: AKAZA, rápido, sombra, preto e vermelho, Demon Slayer
- Frase do bot: "AKAZA na área. Sem demora, sem falha."
- Negócio: Venda de Megas Vodacom, Movitel, Tmcel em Moçambique

=== REGRA Nº1 - BOT ALUGADO - SEM PAGAMENTO FIXO ===
O bot vai ser ALUGADO para outras pessoas.
NÃO COLOQUES NENHUM NÚMERO DE M-PESA, E-MOLA OU MKESH FIXO NO CÓDIGO.
NENHUM exemplo com número de pagamento real.
Cada grupo configura O SEU pagamento com comando.
Pagamento 100% por grupo, guardado em database/ por grupo.
Nos exemplos usa só [SEU-NUMERO] ou [SEU-MPESA] ou [SEU-EMOLA].
O dono principal é 862404978, o bot é 858108694, mas o pagamento é sempre do grupo.

=== REGRA Nº2 - ERRO DA REAÇÃO - NUNCA MAIS ===
No bot anterior houve erro por causa da reação.

1. A reação NÃO é obrigatória. Pode ser null.
2. NUNCA reagir antes de correr o comando.
3. Reação SEMPRE com try/catch separado.
4. Se não tiver reaction, NÃO dá erro, só não reage.

Código obrigatório no index.js:

async function safeReact(sock, m, emoji) {
  try {
    if (!emoji) return;
    if (typeof emoji !== "string") return;
    if (emoji.trim() === "") return;
    await sock.sendMessage(m.key.remoteJid, {
      react: { text: emoji, key: m.key }
    });
  } catch (e) {}
}

E no handler:
try {
  await cmd.run({ sock, m, args });
  await safeReact(sock, m, cmd.reaction);
} catch (e) {
  console.log("Erro no comando " + cmd.name, e);
}

5. reaction pode ser emoji ou null. Nunca texto longo.
6. Se não tiver reaction, NÃO dá erro.

=== REGRA Nº3 - SEM ERRO DE CATEGORIA ===
Todos os ficheiros TÊM que ter:

module.exports = {
  name: "menu",
  alias: ["help"],
  desc: "descrição",
  category: "GERAIS",
  reaction: null,
  async run({ sock, m, args }) { ... }
};

Se um ficheiro falhar, faz console.log e continua, nunca derruba o bot.

=== ESTRUTURA ===
- index.js
- src/commands/ (100 ficheiros, 1 por comando)
- database/
- comprovativos/
- auth/ (sessão separada)

index.js carrega tudo com fs.readdirSync, com try/catch por ficheiro.

=== OS 100 COMANDOS EXATOS DO AKAZA ===
Quero EXATAMENTE estes 100 comandos. Nenhum a mais, nenhum a menos. Todos com prefixo .

--- GERAIS ---
1. .menu - Menu principal do AKAZA
2. .ajuda - Lista de ajuda
3. .inicio - Mensagem de boas-vindas
4. .sobre - Sobre o AKAZA
5. .dono - Info do dono
6. .bot - Info do bot
7. .ping - Ver se bot está online
8. .uptime - Tempo online
9. .regras - Regras do grupo
10. .horario - Horário de atendimento

--- VENDAS / MEGAS ---
11. .tabela - Tabela completa Vodacom/Movitel/Tmcel
12. .vodacom - Tabela Vodacom
13. .movitel - Tabela Movitel
14. .tmcel - Tabela Tmcel
15. .1gb - Preço 1GB
16. .5gb - Preço 5GB
17. .10gb - Preço 10GB
18. .20gb - Preço 20GB
19. .50gb - Preço 50GB
20. .pacotes - Todos os pacotes
21. .promocao - Promoções do dia
22. .oferta - Ofertas especiais
23. .ilimitado - Pacotes ilimitados
24. .noite - Pacotes da noite
25. .semanal - Pacotes semanais
26. .mensal - Pacotes mensais
27. .diario - Pacotes diários
28. .precos - Lista de preços
29. .disponivel - O que está disponível
30. .stock - Ver stock

--- COMPRAR / PAGAMENTO ---
31. .comprar - Como comprar passo a passo
32. .pagamento - Mostra pagamento CONFIGURADO do grupo
33. .mpesa - Mostra M-Pesa do grupo
34. .emola - Mostra e-Mola do grupo
35. .pagar - Instruções de pagamento
36. .comprovativo - Como enviar comprovativo
37. .confirmar - Confirmar pagamento
38. .pedido - Fazer pedido
39. .encomenda - Status da encomenda
40. .rastrear - Rastrear pedido
41. .recibo - Gerar recibo
42. .numero - Pedir número para receber megas
43. .enviar - Confirmar envio
44. .historico - Histórico de compras
45. .desconto - Pedir desconto
46. .cupom - Usar cupom
47. .fiado - Responder que não fazemos fiado
48. .erro - Reportar erro no envio
49. .naorecebi - Não recebi megas
50. .demora - Está a demorar

--- LEITOR DE COMPROVATIVO AUTOMÁTICO ---
51. .autocomprovativo - Ligar/desligar leitor automático
Quando cliente mandar mensagem "Confirmado" + "Transferiste" + "MT", o bot extrai sozinho:
Transação = palavra depois de "Confirmado"
Valor = número antes de "MT"
Conta = número depois de "para"
E responde:
✅ COMPROVATIVO RECEBIDO
🏦 Método: MPESA
🧾 Transação: [CODIGO]
💰 Valor: [VALOR] MT
📱 Conta/destino: [CONTA]
👤 Nome: [NOME]
⏳ A processar, aguarda 2 minutos!

--- SUPORTE ---
52. .suporte - Falar com humano
53. .admin - Chamar admin
54. .humano - Falar com pessoa real
55. .duvida - Dúvidas frequentes
56. .faq - Perguntas frequentes
57. .contacto - Contactos
58. .grupo - Link do grupo
59. .canal - Canal oficial
60. .avaliacao - Deixar avaliação
61. .reclamar - Reclamar
62. .sugestao - Dar sugestão
63. .tutorial - Tutorial como comprar
64. .reembolso - Política de reembolso
65. .troca - Trocar pacote

--- DIVERSÃO AKAZA ---
66. .oi - Responder oi estilo AKAZA
67. .ola - Responder olá
68. .bomdia - Bom dia
69. .boatarde - Boa tarde
70. .boanoite - Boa noite
71. .piada - Contar piada
72. .meme - Enviar meme
73. .sorte - Número da sorte
74. .dado - Jogar dado
75. .moeda - Cara ou coroa
76. .quiz - Quiz
77. .ranking - Ranking clientes
78. .top - Top compradores
79. .frase - Frase motivacional
80. .akaza - Quem é AKAZA
81. .demon - Modo Demon Slayer
82. .amor - Cantada engraçada
83. .aniversario - Parabéns
84. .musica - Recomendar música
85. .pontos - Meus pontos

--- ADMIN - SÓ O DONO 862404978 PODE USAR ---
86. .add - Adicionar cliente
87. .ban - Banir pessoa
88. .unban - Desbanir
89. .kick - Remover do grupo
90. .mute - Silenciar
91. .unmute - Tirar mute
92. .anuncio - Enviar anúncio para todos
93. .broadcast - Mensagem para todos grupos
94. .ligar - Ligar bot
95. .desligar - Desligar bot
96. .setpagamento - Configurar pagamento do grupo (Ex: .setpagamento mpesa [SEU-NUMERO])
97. .setpreco - Mudar preço
98. .addstock - Adicionar stock
99. .vervendas - Ver vendas do dia
100. .relatorio - Relatório diário de vendas

REGRAS FINAIS:
- Se a pessoa escrever "tabela" sem prefixo, responde igual ao .tabela
- Se escrever "quero" ou "comprar", responde igual ao .comprar
- Se não entender, responde: "Eish boss, não entendi 😅 Escreve .menu para ver todos os comandos do AKAZA"
- Usa emojis em todas as respostas, estilo AKAZA preto/vermelho
- Cria o código completo, organizado, com comentários em português, pronto para correr com npm start no bot-hosting.net
- Não coloca nenhum número real de pagamento nos exemplos, usa [SEU-NUMERO] de pagamento fixos neste código.

const fs = require("fs");
const path = require("path");
const { Boom } = require("@hapi/boom");

const PREFIX = ".";
const BOT_NAME = "AKAZA";
const OWNER = "258862404978"; // número de administração, não é conta de pagamento
const BOT_NUMBER = "25858108694";
const CHANNEL = "https://whatsapp.com/channel/0029VbAKAZA";
const STARTED_AT = Date.now();

const ROOT = __dirname;
const DB = path.join(ROOT, "database");
const COMMANDS_DIR = path.join(ROOT, "src", "commands");
const PROOFS_DIR = path.join(ROOT, "comprovativos");
const AUTH_DIR = path.join(ROOT, "auth");

for (const dir of [DB, COMMANDS_DIR, PROOFS_DIR, AUTH_DIR]) {
  fs.mkdirSync(dir, { recursive: true });
}

function readJSON(file, fallback) {
  try {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify(fallback, null, 2));
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (e) {
    console.log("Falha ao ler " + file + ":", e.message);
    return fallback;
  }
}
function writeJSON(file, data) {
  const temp = file + ".tmp";
  fs.writeFileSync(temp, JSON.stringify(data, null, 2));
  fs.renameSync(temp, file);
}
const files = {
  groups: path.join(DB, "grupos.json"),
  orders: path.join(DB, "pedidos.json"),
  prices: path.join(DB, "precos.json"),
  stock: path.join(DB, "stock.json"),
  sales: path.join(DB, "vendas.json"),
  customers: path.join(DB, "clientes.json"),
  settings: path.join(DB, "config.json")
};
const db = {
  groups: readJSON(files.groups, {}),
  orders: readJSON(files.orders, []),
  prices: readJSON(files.prices, {}),
  stock: readJSON(files.stock, { Vodacom: 0, Movitel: 0, Tmcel: 0 }),
  sales: readJSON(files.sales, []),
  customers: readJSON(files.customers, {}),
  settings: readJSON(files.settings, { enabled: true, autoProof: {} })
};
function save(key) { writeJSON(files[key], db[key]); }

function jidNumber(jid = "") { return String(jid).split("@")[0].split(":")[0].replace(/\D/g, ""); }
function isOwner(m) { return jidNumber(m.key.participant || m.key.remoteJid) === OWNER; }
function isGroup(m) { return m.key.remoteJid.endsWith("@g.us"); }
function groupId(m) { return isGroup(m) ? m.key.remoteJid : null; }
function groupConfig(m) {
  const id = groupId(m);
  if (!id) return {};
  if (!db.groups[id]) db.groups[id] = { payment: {}, rules: "Respeita todos. Confirma os dados antes de pagar.", prices: {} };
  return db.groups[id];
}
async function reply(sock, m, text) {
  return sock.sendMessage(m.key.remoteJid, { text }, { quoted: m });
}
function money(n) { return Number(n).toLocaleString("pt-MZ"); }
function menuText() {
  return `╭━━ 🔴 AKAZA ━━╮
┃ ⚫ Rápido, sombra, sem demora
┃ ${BOT_NAME} na área. Sem demora, sem falha.
┃ Prefixo: .
┃
┃ 📌 GERAIS
┃ .menu .ajuda .inicio .sobre .dono .bot
┃ .ping .uptime .regras .horario
┃
┃ 📶 VENDAS / MEGAS
┃ .tabela .vodacom .movitel .tmcel
┃ .1gb .5gb .10gb .20gb .50gb
┃ .pacotes .promocao .oferta .ilimitado
┃ .noite .semanal .mensal .diario
┃ .precos .disponivel .stock
┃
┃ 💳 COMPRAR / PAGAMENTO
┃ .comprar .pagamento .mpesa .emola .pagar
┃ .comprovativo .confirmar .pedido .encomenda
┃ .rastrear .recibo .numero .enviar .historico
┃ .desconto .cupom .fiado .erro .naorecebi .demora
┃ .autocomprovativo
┃
┃ 🆘 SUPORTE
┃ .suporte .admin .humano .duvida .faq .contacto
┃ .grupo .canal .avaliacao .reclamar .sugestao
┃ .tutorial .reembolso .troca
┃
┃ 🎭 DIVERSÃO AKAZA
┃ .oi .ola .bomdia .boatarde .boanoite .piada .meme
┃ .sorte .dado .moeda .quiz .ranking .top .frase
┃ .akaza .demon .amor .aniversario .musica .pontos
┃
┃ 👑 ADMIN (DONO)
┃ .add .ban .unban .kick .mute .unmute
┃ .anuncio .broadcast .ligar .desligar
┃ .setpagamento .setpreco .addstock .vervendas .relatorio
╰━━━━━━━━━━━━━━╯
📢 Canal: ${CHANNEL}`;
}
function priceTable(network, m) {
  const cfg = groupConfig(m);
  const p = { ...db.prices, ...(cfg.prices || {}) };
  const keys = ["1gb","5gb","10gb","20gb","50gb"];
  return `📶 *${network || "TABELA DE MEGAS"}*\n` +
    keys.map(k => `• ${k.toUpperCase()}: ${p[k] !== undefined ? money(p[k]) + " MT" : "Preço por configurar"}`).join("\n") +
    "\n⚫ Preços devem ser confirmados antes do pedido.";
}
function newOrder(m, args) {
  const order = {
    id: "AK" + Date.now().toString().slice(-8),
    group: groupId(m), customer: jidNumber(m.key.participant || m.key.remoteJid),
    request: args.join(" ") || "Pedido de megas",
    status: "PENDENTE", createdAt: new Date().toISOString()
  };
  db.orders.push(order); save("orders");
  return order;
}
function extractProof(text) {
  // Parser apenas informativo: nunca confirma nem liquida uma transferência.
  const transaction = text.match(/Confirmado\s+([A-Za-z0-9_-]+)/i);
  const value = text.match(/([\d.,]+)\s*MT\b/i);
  const account = text.match(/\bpara\s+([0-9]{6,})/i);
  const name = text.match(/(?:nome|titular)\s*[:\-]\s*([^\n,]+)/i);
  if (!/Confirmado/i.test(text) || !/Transferiste/i.test(text) || !/\bMT\b/i.test(text)) return null;
  return {
    transaction: transaction ? transaction[1] : "Não identificado",
    value: value ? value[1] : "Não identificado",
    account: account ? account[1] : "Não identificado",
    name: name ? name[1].trim() : "Não identificado"
  };
}

async function execute(name, { sock, m, args }) {
  const chat = m.key.remoteJid;
  const cfg = groupConfig(m);
  const argText = args.join(" ");
  const sender = jidNumber(m.key.participant || chat);
  const adminOnly = ["add","ban","unban","kick","mute","unmute","anuncio","broadcast","ligar","desligar","setpagamento","setpreco","addstock","vervendas","relatorio"];
  if (adminOnly.includes(name) && !isOwner(m)) return reply(sock,m,"⛔ Este comando é reservado ao dono principal do AKAZA.");

  if (!db.settings.enabled && name !== "ligar" && !isOwner(m)) return;
  if (name === "menu" || name === "ajuda") return reply(sock,m,menuText());
  if (name === "inicio") return reply(sock,m,"🔴 Bem-vindo ao AKAZA! Megas Vodacom, Movitel e Tmcel. ⚫ Escreve .menu.");
  if (name === "sobre" || name === "bot") return reply(sock,m,"🔴 AKAZA — bot de apoio a vendas de megas em Moçambique.\n⚫ AKAZA na área. Sem demora, sem falha.");
  if (name === "dono") return reply(sock,m,"👑 Administração principal: 862404978\n⚫ Pagamentos são configurados por grupo, nunca uses este contacto como pagamento.");
  if (name === "ping") return reply(sock,m,"🔴 AKAZA online! ⚡");
  if (name === "uptime") return reply(sock,m,"⏱️ Online há " + Math.floor((Date.now()-STARTED_AT)/1000) + " segundos.");
  if (name === "regras") return reply(sock,m,"📜 " + (cfg.rules || "Respeita todos. Confirma os dados antes de pagar."));
  if (name === "horario") return reply(sock,m,"🕒 Atendimento: define o horário com a administração do grupo.");
  if (["tabela","precos","pacotes"].includes(name)) return reply(sock,m,priceTable(null,m));
  if (["vodacom","movitel","tmcel"].includes(name)) return reply(sock,m,priceTable(name.toUpperCase(),m));
  if (["1gb","5gb","10gb","20gb","50gb"].includes(name)) {
    const p = cfg.prices?.[name] ?? db.prices[name];
    return reply(sock,m,`📶 ${name.toUpperCase()}: ${p === undefined ? "Preço ainda não configurado" : money(p)+" MT"}\n⚫ Rede e disponibilidade devem ser confirmadas.`);
  }
  if (["promocao","oferta","ilimitado","noite","semanal","mensal","diario"].includes(name)) return reply(sock,m,"🔥 Consulta .tabela ou fala com o responsável do grupo para confirmar as ofertas activas.");
  if (name === "disponivel" || name === "stock") return reply(sock,m,"📦 Stock registado:\n" + Object.entries(db.stock).map(([k,v])=>`• ${k}: ${v}`).join("\n"));
  if (name === "comprar" || name === "tutorial") return reply(sock,m,"🛒 Como comprar:\n1. Escolhe rede e pacote.\n2. Envia o número que vai receber megas.\n3. Consulta .pagamento.\n4. Paga apenas para os dados confirmados deste grupo.\n5. Envia comprovativo para verificação humana.");
  if (name === "pagamento" || name === "mpesa" || name === "emola" || name === "pagar") {
    const p = cfg.payment || {};
    const method = name === "mpesa" ? "mpesa" : name === "emola" ? "emola" : null;
    const rows = (method ? [[method,p[method]]] : Object.entries(p));
    if (!rows.length || rows.every(([,v])=>!v)) return reply(sock,m,"⚠️ Este grupo ainda não configurou o pagamento. Contacta o administrador.");
    return reply(sock,m,"💳 PAGAMENTO DESTE GRUPO\n"+rows.filter(([,v])=>v).map(([k,v])=>`• ${k.toUpperCase()}: ${v}`).join("\n")+"\n⚫ Confirma o titular com o administrador antes de transferir.");
  }
  if (name === "setpagamento") {
    if (!isGroup(m)) return reply(sock,m,"⚠️ Usa este comando dentro do grupo.");
    const [method, ...value] = args;
    if (!["mpesa","emola","mkesh"].includes((method||"").toLowerCase()) || !value.join(" ").trim()) return reply(sock,m,"🧾 Exemplo: .setpagamento mpesa [SEU-NUMERO]\n⚫ Usa apenas o número autorizado pelo titular.");
    cfg.payment[method.toLowerCase()] = value.join(" ").trim(); save("groups");
    return reply(sock,m,"✅ Pagamento "+method.toUpperCase()+" configurado apenas para este grupo.");
  }
  if (name === "setpreco") {
    const [pack, price] = args;
    if (!/^(1gb|5gb|10gb|20gb|50gb)$/i.test(pack||"") || !Number.isFinite(Number(price)) || Number(price)<0) return reply(sock,m,"🧾 Exemplo: .setpreco 1gb 100");
    cfg.prices = cfg.prices || {}; cfg.prices[pack.toLowerCase()] = Number(price); save("groups");
    return reply(sock,m,"✅ Preço actualizado neste grupo.");
  }
  if (name === "pedido" || name === "encomenda" || name === "rastrear") {
    const o = newOrder(m,args);
    return reply(sock,m,`🧾 Pedido criado: ${o.id}\nEstado: ${o.status}\n⚫ Guarda este código para acompanhar.`);
  }
  if (name === "confirmar" || name === "comprovativo") return reply(sock,m,"🧾 Envia o comprovativo original (imagem ou PDF, se disponível) e aguarda verificação humana. Texto ou captura não confirma pagamento automaticamente.");
  if (name === "autocomprovativo") {
    if (!isOwner(m)) return reply(sock,m,"⛔ Só o dono principal pode alterar esta opção.");
    const key = groupId(m); if (!key) return reply(sock,m,"⚠️ Usa dentro de um grupo.");
    db.settings.autoProof[key] = !db.settings.autoProof[key]; save("settings");
    return reply(sock,m,"🔎 Leitor de texto: "+(db.settings.autoProof[key]?"LIGADO":"DESLIGADO")+". Todo comprovativo continua pendente de verificação humana.");
  }
  if (name === "recibo") return reply(sock,m,"🧾 Recibo só é emitido depois da confirmação manual do pagamento e do envio.");
  if (name === "numero") return reply(sock,m,"📱 Envia o número que vai receber os megas, indicando também a rede.");
  if (name === "enviar") return reply(sock,m,"📦 O envio só pode ser marcado pela administração após confirmar pagamento e operação.");
  if (name === "historico") {
    const mine = db.orders.filter(o=>o.customer===sender).slice(-10);
    return reply(sock,m,mine.length ? "📚 Os teus pedidos:\n"+mine.map(o=>`${o.id} — ${o.status}`).join("\n") : "📚 Ainda não tens pedidos registados.");
  }
  if (name === "desconto" || name === "cupom") return reply(sock,m,"🎟️ Pedido recebido. Consulta o administrador para confirmar descontos válidos.");
  if (name === "fiado") return reply(sock,m,"⚫ Eish boss, não fazemos fiado. O pedido avança depois da confirmação do pagamento. 🔴");
  if (["erro","naorecebi","demora","suporte","admin","humano","reclamar","duvida","faq","contacto","avaliacao","sugestao","reembolso","troca"].includes(name)) return reply(sock,m,"🆘 Pedido de suporte registado. Explica o problema e envia o código do pedido para um administrador.");
  if (name === "grupo") return reply(sock,m,"👥 Pede o link ao administrador deste grupo.");
  if (name === "canal") return reply(sock,m,"📢 Canal oficial AKAZA:\n"+CHANNEL);
  if (["oi","ola","bomdia","boatarde","boanoite"].includes(name)) return reply(sock,m,"🔴 AKAZA na área! ⚫ Como posso ajudar?");
  if (name === "piada") return reply(sock,m,"😂 O megabyte foi ao médico... estava com falta de espaço!");
  if (name === "meme") return reply(sock,m,"😅 Meme do dia: quando compras 1GB e abres vídeos em HD. 🔴");
  if (name === "sorte") return reply(sock,m,"🍀 Número da sorte: "+(Math.floor(Math.random()*99)+1));
  if (name === "dado") return reply(sock,m,"🎲 Resultado: "+(Math.floor(Math.random()*6)+1));
  if (name === "moeda") return reply(sock,m,"🪙 Resultado: "+(Math.random()<.5?"Cara":"Coroa"));
  if (name === "quiz") return reply(sock,m,"🧠 Quiz: Qual destas é uma rede móvel em Moçambique? A) Vodacom B) Lua\nResponde A ou B!");
  if (name === "ranking" || name === "top") return reply(sock,m,"🏆 O ranking será mostrado quando houver vendas confirmadas registadas.");
  if (name === "frase") return reply(sock,m,"🔥 A disciplina mantém o foco quando a pressa desaparece. — AKAZA");
  if (name === "akaza" || name === "demon") return reply(sock,m,"🔴 AKAZA: identidade visual inspirada em Demon Slayer, com tema preto e vermelho. ⚫");
  if (name === "amor") return reply(sock,m,"😄 És como uma rede 5G: apareces e melhoras o sinal do dia!");
  if (name === "aniversario") return reply(sock,m,"🎉 Parabéns! Que o teu novo cic