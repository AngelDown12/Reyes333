import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw 'Etiqueta a la persona y la cantidad .\nEjemplo :\n\n.dardiamantes @luis 50';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁*';
  if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙸𝙼𝙱𝙾𝙻𝙾 𝙽𝙾 𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾, 𝚂𝙾𝙻𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂!*';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙳𝙴 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙴𝚂 𝟷*';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`≡ *💎 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
┌──────────────
▢ *𝚃𝚘𝚝𝚊𝚕:* ${dmt}
𝐑𝐞𝐲𝐞𝐬 𝟑𝟑𝟑 𝐁𝐨𝐭 🤴 🤴  -
└──────────────`);
};
handler.command = ['añadirdiamantes', 'addd', 'dard', 'dardiamantes'];
handler.admin = true;
export default handler;