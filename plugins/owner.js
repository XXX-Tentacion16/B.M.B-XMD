const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "Ja_Ka Gaming",
    react: "😒", 
    desc: "256773469834",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${Ja_Ka Gaminh}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:$256773469834}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: Ja_Ka Gaming,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/s7pzei.jpg' }, // Image URL from your request
            caption: `
╭━〔 *🔥𝐁.𝐌.𝐁-𝐗𝐌𝐃🔥* 〕━┈⊷
┃◈╭─────────────·๏
┃◈┃• *Here is the owner details*
┃◈┃• *Name* - ${Ja_Ka Gaminh}
┃◈┃• *Number* ${256773469834}
┃◈┃• *Version*: 1.0.0
┃◈└───────────┈⊷
╰──────────────┈⊷
> ©𝐁.𝐌.𝐁-𝐗𝐌𝐃`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363382023564830@newsletter',
                    newsletterName: 'BMB DEVS 🔥',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/bmb300/NOVA-XMD-DATA/raw/refs/heads/main/KingHans/HansTz.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
