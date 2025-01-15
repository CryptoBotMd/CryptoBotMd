import { performance } from "perf_hooks";

// Funzione per ritardo (delay)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (message, { conn, text }) => {
    // Messaggi personalizzati per il comando scopami
    let messages = [
        `👅 inizio a scopare *${text || "te"}*...`,
        `😏 mi sto spogliando!`,
        `🤪 mi sto mettendo a 90...`,
        `👄 ohh si tutto dentro/ohh si te lo metto tutto dentro... .`,
        `💦 sto per venire 💦💦!`,
        `🔥 si ti prego continua cosi...`,
        `💦👄 ahhhhh! Sono venuta/o *${text || "te"}*!`
    ];

    // Sequenza dei messaggi con ritardo
    for (let msg of messages) {
        await conn.reply(message.chat, msg, message);
        await delay(2000); // Ritardo di 2 secondi tra i messaggi
    }

    // Calcolo del tempo di preparazione
    let start = performance.now();
    let end = performance.now();
    let time = (end - start).toFixed(3); // Limitato a 3 cifre decimali

    let finalMessage = `🫦 scopato in tempo record *${time}ms*! bella questa scopata?, *${text || "bello/a"}*!`;
    await conn.reply(message.chat, finalMessage, message);
};

// Configurazione del comando
handler.command = ['scopami'];
handler.tags = ['fun'];
handler.help = ['.scopami <nome>'];

export default handler;