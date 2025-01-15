import fetch from 'node-fetch';

const handler = async (_0x498b4a, { conn, command, text, isAdmin }) => {
    if (!isAdmin) throw '𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒊𝒍𝒆 𝒔𝒐𝒍𝒐 𝒑𝒆𝒓 𝒂𝒅𝒎𝒊𝒏🌟';

    if (command === 'freeze') {
        const muteDuration = parseInt(text) || 5; // Durata in minuti, default 5 minuti
        const mentionedJid = _0x498b4a.mentionedJid?.[0] || _0x498b4a.quoted?.sender;
        if (!mentionedJid) throw '𝑴𝒂𝒏𝒄𝒂 𝒊𝒍 𝒕𝒂𝒈❗︎';

        const user = global.db.data.users[mentionedJid] || {};
        if (user.muto) throw '⚠︎ 𝑼𝒕𝒆𝒏𝒕𝒆 𝒈𝒊𝒂̀ 𝒎𝒖𝒕𝒂𝒕𝒐 ⚠︎';

        user.muto = true;
        user.mutoTimeout = Date.now() + muteDuration * 60 * 1000; // Salva il timestamp per calcolare il tempo rimanente

        // Notifica di mutazione
        const muteMessage = {
            text: `𝑳'𝒖𝒕𝒆𝒏𝒕𝒆 @${mentionedJid.split('@')[0]} 𝒆̀ 𝒔𝒕𝒂𝒕𝒐 𝒎𝒖𝒕𝒂𝒕𝒐 𝒑𝒆𝒓 ${muteDuration} 𝒎𝒊𝒏𝒖𝒕𝒊 ⏱️`,
            mentions: [mentionedJid],
        };
        await conn.sendMessage(_0x498b4a.chat, muteMessage);

        // Rimuove il muto dopo il tempo specificato
        setTimeout(() => {
            user.muto = false;
            conn.sendMessage(_0x498b4a.chat, {
                text: ` @${mentionedJid.split('@')[0]} 𝒆̇ 𝒔𝒕𝒂𝒕𝒐 𝒔𝒎𝒖𝒕𝒂𝒕𝒐 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄𝒂𝒎𝒆𝒏𝒕𝒆 ✅`,
                mentions: [mentionedJid],
            });
        }, muteDuration * 60 * 1000);
    }

    if (command === 'cold') {
        const mentionedJid = _0x498b4a.mentionedJid?.[0] || _0x498b4a.quoted?.sender;
        if (!mentionedJid) throw '𝑴𝒂𝒏𝒄𝒂 𝒊𝒍 𝒕𝒂𝒈❗';

        const user = global.db.data.users[mentionedJid] || {};
        if (!user.muto) throw '𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐧 𝐞̀ 𝐦𝐮𝐭𝐚𝐭𝐨❕';

        user.muto = false;
        delete user.mutoTimeout; // Rimuovi il timeout salvato

        // Notifica di smutazione
        const unmuteMessage = {
            text: `𝑳'𝒖𝒕𝒆𝒏𝒕𝒆 @${mentionedJid.split('@')[0]} 𝒆̀ 𝒔𝒕𝒂𝒕𝒐 𝒔𝒎𝒖𝒕𝒂𝒕𝒐 ✔︎`,
            mentions: [mentionedJid],
        };
        await conn.sendMessage(_0x498b4a.chat, unmuteMessage);
    }

    if (command === 'mutetime') {
        const mentionedJid = _0x498b4a.mentionedJid?.[0] || _0x498b4a.quoted?.sender;
        if (!mentionedJid) throw '𝑴𝒂𝒏𝒄𝒂 𝒊𝒍 𝒕𝒂𝒈❗';

        const user = global.db.data.users[mentionedJid] || {};
        if (!user.muto || !user.mutoTimeout) throw '𝐐𝐮𝐞𝐬𝐭𝐨 𝐮𝐭𝐞𝐧𝐭𝐞 𝐧𝐨𝐧 𝐞̀ 𝐚𝐥 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐦𝐮𝐭𝐚𝐭𝐨❕';

        const remainingTime = Math.max(0, user.mutoTimeout - Date.now());
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        const timeMessage = {
            text: `⏱️ @${mentionedJid.split('@')[0]} 𝒓𝒊𝒎𝒂𝒏𝒆 𝒎𝒖𝒕𝒂𝒕𝒐 𝒑𝒆𝒓 ${minutes} 𝒎𝒊𝒏𝒖𝒕𝒊 𝒆 ${seconds} 𝒔𝒆𝒄𝒐𝒏𝒅𝒊.`,
            mentions: [mentionedJid],
        };
        await conn.sendMessage(_0x498b4a.chat, timeMessage);
    }
};

// Definisci i comandi e le opzioni
handler.command = /^(cold|freeze|mutetime)$/i;
handler.admin = true;
handler.botAdmin = true;
handler.group = true;

export default handler;