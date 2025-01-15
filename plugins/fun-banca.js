let banca = {}; // Oggetto per memorizzare i conti bancari degli utenti
let messaggiUtente = {}; // Contatore per tenere traccia dei messaggi inviati dagli utenti

let bancaCommand = async (message, { conn, participants }) => {
    let groupMembers = participants.map(p => p.id);

    for (let member of groupMembers) {
        if (!banca[member]) {
            banca[member] = 0;
            messaggiUtente[member] = 0; // Inizializza il contatore messaggi
        }
    }

    let sortedBank = Object.entries(banca).sort((a, b) => b[1] - a[1]);

    let mentions = [];
    let classifica = sortedBank.map(([id, saldo], index) => {
        mentions.push(id);
        return `${index + 1}. @${id.split('@')[0]}: ${saldo}€`;
    }).join('\n');

    await conn.reply(message.chat, `🏦 *Classifica Banca del Gruppo* 🏦\n\n${classifica}`, message, {
        mentions,
    });
};

let addmoneyCommand = async (message, { conn, text, isAdmin }) => {
    if (!isAdmin) {
        await conn.reply(message.chat, "⚠️ Solo gli amministratori possono aggiungere soldi ai conti!", message);
        return;
    }

    let match = text.match(/(\d+)[€€]?\s+@(\S+)/);
    if (!match) {
        await conn.reply(message.chat, "⚠️ Usa il comando in questo modo: `.addmoney 10€ @utente`", message);
        return;
    }

    let importo = parseInt(match[1]);
    let mentionedUser = message.mentionedJid[0];

    if (!mentionedUser) {
        await conn.reply(message.chat, "⚠️ Devi taggare un utente per aggiungere soldi al suo conto.", message);
        return;
    }

    if (!banca[mentionedUser]) banca[mentionedUser] = 0;
    banca[mentionedUser] += importo;

    await conn.reply(message.chat, `✅ Hai aggiunto *${importo}€* al conto di *@${mentionedUser.split('@')[0]}*.`, message, {
        mentions: [mentionedUser],
    });
};

let delmoneyCommand = async (message, { conn, text, isAdmin }) => {
    if (!isAdmin) {
        await conn.reply(message.chat, "⚠️ Solo gli amministratori possono togliere soldi dai conti!", message);
        return;
    }

    let match = text.match(/(-?\d+)[€€]?\s+@(\S+)/);
    if (!match) {
        await conn.reply(message.chat, "⚠️ Usa il comando in questo modo: `.delmoney 10€ @utente`", message);
        return;
    }

    let importo = parseInt(match[1]);
    let mentionedUser = message.mentionedJid[0];

    if (!mentionedUser) {
        await conn.reply(message.chat, "⚠️ Devi taggare un utente per togliere soldi dal suo conto.", message);
        return;
    }

    if (!banca[mentionedUser]) banca[mentionedUser] = 0;
    banca[mentionedUser] -= importo;

    await conn.reply(message.chat, `✅ Hai tolto *${Math.abs(importo)}€* dal conto di *@${mentionedUser.split('@')[0]}*.`, message, {
        mentions: [mentionedUser],
    });
};

let slotGame = async (message, { conn, text }) => {
    let match = text.match(/(\d+)[€€]/);
    if (!match) {
        await conn.reply(message.chat, "⚠️ Usa il comando in questo modo: `.slot 10€`", message);
        return;
    }

    let scommessa = parseInt(match[1]);
    let userId = message.sender;

    if (!banca[userId] || banca[userId] < scommessa) {
        await conn.reply(message.chat, "⚠️ Non hai abbastanza soldi per giocare!", message);
        return;
    }

    let risultati = ["🍒", "🍋", "🍊", "🍉", "🍇"];
    let giro = [risultati[Math.floor(Math.random() * risultati.length)], risultati[Math.floor(Math.random() * risultati.length)], risultati[Math.floor(Math.random() * risultati.length)]];

    let vincita = 0;
    if (giro[0] === giro[1] && giro[1] === giro[2]) {
        vincita = scommessa * 2;
        banca[userId] += vincita;
    } else {
        banca[userId] -= scommessa;
    }

    await conn.reply(message.chat, `🎰 *Giro Slot*: ${giro.join(" | ")}\n${vincita > 0 ? `✅ Hai vinto ${vincita}€!` : `❌ Hai perso ${scommessa}€!`}`, message);
};

let rouletteGame = async (message, { conn, text }) => {
    let match = text.match(/(\d+)[€€]/);
    if (!match) {
        await conn.reply(message.chat, "⚠️ Usa il comando in questo modo: `.roulette 10€`", message);
        return;
    }

    let scommessa = parseInt(match[1]);
    let userId = message.sender;

    if (!banca[userId] || banca[userId] < scommessa) {
        await conn.reply(message.chat, "⚠️ Non hai abbastanza soldi per giocare!", message);
        return;
    }

    let numero = Math.floor(Math.random() * 37);
    let colore = numero % 2 === 0 ? "🔴" : "⚫";

    let vincita = 0;
    if ((colore === "🔴" && numero % 2 === 0) || (colore === "⚫" && numero % 2 !== 0)) {
        vincita = scommessa * 2;
        banca[userId] += vincita;
    } else {
        banca[userId] -= scommessa;
    }

    await conn.reply(message.chat, `🎲 *Ruota Roulette*: Numero ${numero} (${colore})\n${vincita > 0 ? `✅ Hai vinto ${vincita}€!` : `❌ Hai perso ${scommessa}€!`}`, message);
};

// Aggiunta della funzione per tracciare i messaggi
let trackMessages = async (message) => {
    let userId = message.sender;

    if (!messaggiUtente[userId]) messaggiUtente[userId] = 0;
    if (!banca[userId]) banca[userId] = 0;

    messaggiUtente[userId]++;

    if (messaggiUtente[userId] >= 1000) {
        banca[userId] += 1000;
        messaggiUtente[userId] = 0;

        await message.conn.reply(
            message.chat,
            `🎉 Complimenti *@${userId.split('@')[0]}*! Hai inviato 1000 messaggi e guadagnato 1000€!`,
            message,
            {
                mentions: [userId],
            }
        );
    }
};

// Gestore principale
let handler = async (message, options) => {
    const { text } = message;
    const command = text.split(' ')[0]?.substring(1);

    await trackMessages(message); // Aggiunto il tracking messaggi

    if (command === 'banca') {
        await bancaCommand(message, options);
    } else if (command === 'addmoney') {
        await addmoneyCommand(message, options);
    } else if (command === 'delmoney') {
        await delmoneyCommand(message, options);
    } else if (command === 'slot') {
        await slotGame(message, options);
    } else if (command === 'roulette') {
        await rouletteGame(message, options);
    }
};

handler.command = ['banca', 'addmoney', 'delmoney', 'slot', 'roulette'];
handler.tags = ['group'];
handler.help = ['.banca', '.addmoney <importo> @utente', '.delmoney <importo> @utente', '.slot <importo>', '.roulette <importo>'];

export default handler;