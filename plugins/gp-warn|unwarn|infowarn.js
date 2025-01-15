let maxWarns = 3;

let handler = async (m, { conn, text, args, groupMetadata, command }) => {
    let who;

    if (m.isGroup) {
        who = m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : m.quoted 
            ? m.quoted.sender 
            : null;
    } else {
        who = m.chat;
    }

    if (!who) return m.reply("⚠️ *Devi menzionare un utente o rispondere a un suo messaggio!*");

    if (!(who in global.db.data.users)) global.db.data.users[who] = { messaggi: 0, warns: [] };

    let user = global.db.data.users[who];
    user.messaggi = user.messaggi || 0;
    user.warns = user.warns || [];

    switch (command) {
        case "warn": {
            let reason = args.slice(1).join(" ").trim();
            if (!reason) return m.reply("⚠️ *Devi fornire una motivazione per il warn!*\nEsempio: `.warn @user motivo`");

            user.warns.push(reason);

            if (user.warns.length < maxWarns) {
                m.reply(
                    `⚠️ *Warn aggiunto per @${who.split("@")[0]}*\nNumero di warn: ${user.warns.length}/${maxWarns}\nMotivo: ${reason}`,
                    null,
                    { mentions: [who] }
                );
            } else {
                m.reply(
                    `⛔ *@${who.split("@")[0]} è stato espulso dopo ${maxWarns} warn!*`,
                    null,
                    { mentions: [who] }
                );
                user.warns = [];
                await conn.groupParticipantsUpdate(m.chat, [who], "remove");
            }
            break;
        }

        case "infowarn": {
            let info = `📊 *Informazioni su @${who.split("@")[0]}*\n`;
            info += `• 📩 *Messaggi inviati*: ${user.messaggi}\n`;
            info += `• ⚠️ *Warn ricevuti*: ${user.warns.length}/${maxWarns}\n`;

            if (user.warns.length > 0) {
                info += `\n⚠️ *Dettagli Warn:*\n`;
                user.warns.forEach((reason, i) => {
                    info += `${i + 1}. ${reason}\n`;
                });
            } else {
                info += `\n✅ *Nessun warn ricevuto!*`;
            }

            m.reply(info, null, { mentions: [who] });
            break;
        }

        case "unwarn": {
            if (user.warns.length === 0) {
                return m.reply(`✅ *@${who.split("@")[0]} non ha warn da rimuovere!*`, null, { mentions: [who] });
            }

            let removedWarn = user.warns.pop();
            m.reply(
                `✅ *Warn rimosso per @${who.split("@")[0]}*\nUltimo warn rimosso: ${removedWarn}`,
                null,
                { mentions: [who] }
            );
            break;
        }

        default:
            m.reply("⚠️ *Comando non riconosciuto!*");
    }
};

handler.help = ["warn @user motivo", "infowarn @user", "unwarn @user"];
handler.tags = ["group"];
handler.command = /^(warn|unwarn|infowarn)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;