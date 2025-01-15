import fs from 'fs';
import { performance } from 'perf_hooks';

const toMathematicalAlphanumericSymbols = number => {
    const map = {
        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
    };
    return number.toString().split('').map(digit => map[digit] || digit).join('');
};
const clockString = ms => {
    const days = Math.floor(ms / 86400000);  // 24 * 60 * 60 * 1000
    const hours = Math.floor((ms % 86400000) / 3600000);  // 60 * 60 * 1000
    const minutes = Math.floor((ms % 3600000) / 60000);  // 60 * 1000
    const seconds = Math.floor((ms % 60000) / 1000);  // 1000
    return `${toMathematicalAlphanumericSymbols(days.toString().padStart(2, '0'))}:${toMathematicalAlphanumericSymbols(hours.toString().padStart(2, '0'))}:${toMathematicalAlphanumericSymbols(minutes.toString().padStart(2, '0'))}:${toMathematicalAlphanumericSymbols(seconds.toString().padStart(2, '0'))}`;
};

const handler = async (m, { conn, usedPrefix }) => {
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const old = performance.now();
    const neww = performance.now();
    const speed = (neww - old).toFixed(4);
    const speedWithFont = toMathematicalAlphanumericSymbols(speed);
    
    const prova = {
key: {
participants: "0@s.whatsapp.net", 
fromMe: false, 
id: "Halo"
}, message: { 
locationMessage: {
name: '𝐏𝐢𝐧𝐠',
jpegThumbnail: await(await fetch('https://qu.ax/uvQcr.jpg')).buffer(),
}}, participant: "0@s.whatsapp.net"
}
const info = `
════✪•⊰⚚⊱•✪════
🟢 𝚲𝐓𝐓𝕀𝐕𝕀𝐓𝚲: ${uptime} 
🚀 𝐕𝚵𝐋Ꮻ𝐂𝕀𝐓𝚲: ${speedWithFont} 𝐬
════✪•⊰⚚⊱•✪════
`.trim();
conn.reply(m.chat, info, prova, m);
};

handler.command = /^(ping)$/i;
export default handler;