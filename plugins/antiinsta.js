//Crediti by CryptoBotMd - Antilink insta

let handler = m => m;

handler.before = async function (m) {
    let chat = global.db.data.chats[m.chat];
    const metadata = conn.chats[m.chat]?.metadata || await conn.groupMetadata(m.chat);
    const pex = metadata?.participants?.find(u => conn.decodeJid(u.id) === m.sender)?.admin;

    const instaLinkRegex = /(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/i;

    let match = (m.text || m.message?.conversation || m.message?.extendedTextMessage?.text)?.toLowerCase();
    const args = match?.trim()?.split(" ").filter(v => v);

    for (let i = 0; i < args?.length; i++) {
        if (instaLinkRegex.test(args[i])) {
            match = args[i];
            break;
        }
    }

    function del() {
        conn.sendMessage(m.chat, { delete: m.key });
    }

    if (!pex && instaLinkRegex.test(match) && chat.antilinkig) {
        global.db.data.users[m.sender].warnlink += 1;
        del();
        let warnlink = global.db.data.users[m.sender].warnlink;

        if (warnlink < 3) {
            await conn.reply(m.chat, `@${m.sender.split('@')[0]} 𝐥𝐚 𝐜𝐨𝐧𝐝𝐢𝐯𝐢𝐬𝐢𝐨𝐧𝐞 𝐝𝐢 𝐥𝐢𝐧𝐤 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 𝐧𝐨𝐧 è 𝐜𝐨𝐧𝐬𝐞𝐧𝐭𝐢𝐭𝐚.\n> 𝐒𝐞𝐢 𝐚𝐥 *${warnlink}°* 𝐚𝐯𝐯𝐞𝐫𝐭𝐢𝐦𝐞𝐧𝐭𝐨.`, null, { mentions: [m.sender] });
        } else {
            global.db.data.users[m.sender].warnlink = 0;
            await conn.reply(m.chat, `⛔ 𝐔𝐭𝐞𝐧𝐭𝐞 𝐫𝐢𝐦𝐨𝐬𝐬𝐨 𝐝𝐨𝐩𝐨 𝟑 𝐚𝐯𝐯𝐞𝐫𝐭𝐢𝐦𝐞𝐧𝐭𝐢.`);
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
};

export default handler;