import 'os';
import 'util';
import 'human-readable';
import '@whiskeysockets/baileys';
import 'fs';
import 'perf_hooks';
let handler = async (_0x316f52, {
  conn: _0x4a2566,
  usedPrefix: _0x238280
}) => {
  let _0x12abbd = {
    'key': {
      'participants': "0@s.whatsapp.net",
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'locationMessage': {
        'name': "✧ 𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐏𝐎 ✧",
        'jpegThumbnail': await (await fetch("https://qu.ax/uvQcr.jpg")).buffer(),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD"
      }
    },
    'participant': "0@s.whatsapp.net"
  };
  let _0x52ca99 = ("\n──────✧ 𝐌𝐄𝐍𝐔 𝐆𝐑𝐔𝐏𝐏𝐎 ✧─────\n- " + _0x238280 + "𝐚𝐛𝐛𝐫𝐚𝐜𝐜𝐢𝐚 @\n- " + _0x238280 + "𝐥𝐞𝐜𝐜𝐨/𝐚 @ \n- " + _0x238280 + "𝐦𝐨𝐫𝐝𝐢 @ \n- " + _0x238280 + "𝐚𝐥𝐜𝐨𝐥𝐢𝐳𝐳𝐚𝐭𝐨 @  \n- " + _0x238280 + "𝐫𝐢𝐬𝐜𝐫𝐢𝐯𝐢 (𝐦𝐞𝐬𝐬𝐚𝐠𝐠𝐢𝐨) \n- " + _0x238280 + "𝐦𝐞𝐭𝐞𝐨 ( 𝐜𝐢𝐭𝐭𝐚' )\n- " + _0x238280 + " 𝐡𝐝( 𝐟𝐨𝐭𝐨 )\n- " + _0x238280 + "𝐥𝐞𝐠𝐠𝐢( 𝐟𝐨𝐭𝐨 )\n- " + _0x238280 + "𝐫𝐢𝐦𝐮𝐨𝐯𝐢𝐬𝐟𝐨𝐧𝐝𝐨 ( 𝐟𝐨𝐭𝐨 )\n- " + _0x238280 + "𝐬𝐞𝐠𝐚( 𝐧𝐨𝐦𝐞 )\n- " + _0x238280 + "𝐝𝐢𝐭𝐚𝐥𝐢𝐧𝐨 ( 𝐧𝐨𝐦𝐞 )\n- " + _0x238280 + "𝐢𝐧𝐬𝐮𝐥𝐭𝐚  ( 𝐧𝐨𝐦𝐞 )\n- " + _0x238280 + "𝐪𝐫𝐜𝐨𝐝𝐞( 𝐭𝐞𝐬𝐭𝐨 )\n- " + _0x238280 + "𝐫𝐢𝐯𝐞𝐥𝐚 ( foto¹ )\n- " + _0x238280 + "𝐬𝐭𝐲𝐥𝐞𝐭𝐞𝐱𝐭\n- " + _0x238280 + "𝐜𝐚𝐥𝐜( 𝟏+𝟏 )\n- " + _0x238280 + "𝐦𝐬𝐠' @\n- "  + _0x238280 + "𝐛𝐞𝐥𝐥𝐨/𝐚 @\n- " + _0x238280 + "𝐠𝐚𝐲 @\n- " + _0x238280 + "𝐩𝐮𝐭𝐭𝐚𝐧𝐚@\n- " + _0x238280 + "𝐥𝐞𝐬𝐛𝐢𝐜𝐚@\n- " + _0x238280 + "𝐢𝐧𝐬𝐮𝐥𝐭𝐚  @\n- " + _0x238280 + "𝐬𝐭𝐮𝐩𝐫𝐚 @\n- " + _0x238280 + "𝐟𝐫𝐨𝐜𝐢𝐨@\n- " + _0x238280 + "𝐨𝐝𝐢𝐨@\n- " + _0x238280 + "𝐚𝐦𝐨𝐫𝐞@\n- " + _0x238280 + "𝐝𝐨𝐱 @\n- " + _0x238280 + "𝐢𝐝(gruppo)\n- " + _0x238280 + "𝐡𝐚𝐧𝐝𝐢𝐜𝐚𝐩𝐩𝐚𝐭𝐨 @\n- "+ _0x238280 + "𝐬𝐞𝐭𝐢𝐠\n- " + _0x238280 + "𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐢𝐠\n- " + _0x238280 + "𝐭𝐫𝐢𝐬\n- " + _0x238280 + "𝐜𝐫𝐮𝐬𝐡 @\n- " + _0x238280 + "𝐭𝐨𝐩𝐠𝐚𝐲𝐬\n- " + _0x238280 + "𝐭𝐨𝐩𝐧𝐚𝐳𝐢\n- " + _0x238280 + "𝐭𝐭𝐩\n- " + _0x238280 + "𝐝𝐚𝐝𝐨\n- " + _0x238280 + "𝐬𝐭𝐢𝐜𝐤𝐞𝐫/ 𝐬\n-  " + _0x238280 + "𝐭𝐨𝐯𝐢𝐝𝐞𝐨\n- " + _0x238280 + "𝐭𝐨𝐠𝐢𝐟\n- " + _0x238280 + "𝐚𝐮𝐭𝐨𝐚𝐝𝐦𝐢𝐧\n- " + _0x238280 + "𝐤𝐞𝐛𝐚𝐛 @\n- "+ _0x238280 + "𝐬𝐚𝐲𝐚𝐧 @ \n- "   + _0x238280 + "𝐦𝐨𝐫𝐝𝐢 @ \n- " + _0x238280 + "𝐦𝐢𝐫𝐚 @ \n- " + _0x238280 + "𝐜𝐫𝐞𝐚𝐜𝐨𝐩𝐩𝐢𝐚 \n- " + "𝐬𝐜𝐨𝐩𝐚𝐦𝐢 @  \n- " + "𝐏𝐚𝐠𝐚 @ \n- " + "𝐆𝐞𝐧𝐞𝐫𝐞 @ \n- " + "𝐍𝐞𝐫𝐨 @ \n- " + "𝐄𝐛𝐨𝐥𝐢𝐧𝐢 @ \n- " + "𝐂𝐞𝐬𝐬𝐨 @ \n- " + "𝐂𝐚𝐠𝐧𝐚 @ \n- " + "𝐂𝐚𝐧𝐞 @ \n- " + "𝐒𝐩𝐨𝐬𝐚 @𝐮𝐬𝐞𝐫 \n- " + "𝐁𝐚𝐧𝐜𝐚 \n- 𝐀𝐝𝐝𝐦𝐨𝐧𝐞𝐲 (𝐢𝐦𝐩𝐨𝐫𝐭𝐨) @𝐮𝐬𝐞𝐫 \n- " + "𝐃𝐞𝐥𝐦𝐨𝐧𝐞𝐲 (𝐢𝐦𝐩𝐨𝐫𝐭𝐨) @𝐮𝐬𝐞𝐫 \n- " + "𝐑𝐨𝐮𝐥𝐞𝐭𝐭𝐞 \n- 𝐒𝐥𝐨𝐭 \n- " + "𝐔𝐬𝐞𝐫𝐢𝐧𝐟𝐨 @𝐮𝐬𝐞𝐫 \n ──────────────\n  𝐂𝐫ÿ𝐩𝐭øƁø𝐭-𝐌𝐝").trim();
  let _0x18f634 = global.db.data.nomedelbot || "𝐂𝐫ÿ𝐩𝐭øƁø𝐭-𝐌𝐝 ";
  _0x4a2566.sendMessage(_0x316f52.chat, {
    'text': _0x52ca99,
    'contextInfo': {
      'mentionedJid': _0x4a2566.parseMention(wm),
      'forwardingScore': 0x1,
      'isForwarded': true,
      'forwardedNewsletterMessageInfo': {
        'newsletterJid': "120363353142165037@newsletter",
        'serverMessageId': '',
        'newsletterName': '' + _0x18f634
      }
    }
  }, {
    'quoted': _0x12abbd
  });
};
handler.help = ["menu"];
handler.tags = ['menu'];
handler.command = /^(menugruppo|gruppo)$/i;
export default handler;
function clockString(_0x5376bb) {
  let _0x14ce08 = Math.floor(_0x5376bb / 3600000);
  let _0x11e6bc = Math.floor(_0x5376bb / 60000) % 60;
  let _0xaff805 = Math.floor(_0x5376bb / 1000) % 60;
  console.log({
    'ms': _0x5376bb,
    'h': _0x14ce08,
    'm': _0x11e6bc,
    's': _0xaff805
  });
  return [_0x14ce08, _0x11e6bc, _0xaff805].map(_0x421c43 => _0x421c43.toString().padStart(2, 0)).join(':');
}
