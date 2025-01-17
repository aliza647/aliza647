const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "owner",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "ZOYA KHAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/yF2J63x.jpeg",
            "https://i.imgur.com/dZG33XY.jpeg",
            "https://i.imgur.com/Zt5E15N.jpeg",
            "https://i.imgur.com/aMRJ8SD.jpeg",
            "https://i.imgur.com/oPtSVSI.jpeg",
            "https://i.imgur.com/XFxySri.jpeg"
        ];

        const message = "𝐎𝐰𝐧𝐞𝐫 ➻  🥀  𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮\n\n● ────────────────── ●\n\n𝐌𝐘 𝐎𝐰𝐧𝐞𝐑 𝐙𝐨𝐲𝐚 𝐁𝐚𝐁𝐮 .... < 𝐄𝐃𝐈𝐓 > .... 𝐘𝐞 𝐁𝐨𝐓 𝐒𝐢𝐫𝐅 𝐎𝐰𝐧𝐞𝐑 𝐊 𝐋𝐢𝐘𝐞 𝐇 .... 𝐌𝐮𝐣𝐇𝐞 𝐀𝐚𝐏 𝐋𝐨𝐆𝐨 𝐊𝐨 𝐇𝐚𝐬𝐚𝐍𝐞 𝐊 𝐋𝐢𝐘𝐞 𝐁𝐚𝐧𝐘𝐚 𝐆𝐲𝐚 𝐇 𝐓𝐨𝐇 𝐇𝐚𝐩𝐩𝐘 𝐑𝐞𝐇𝐚𝐍𝐀 𝐀𝐩𝐩𝐤𝐚 𝐀𝐩𝐩𝐧𝐚 𝐎𝐰𝐧𝐞𝐑 𝐙𝐨𝐲𝐚 𝐁𝐚𝐁𝐮\n\n● ────────────────── ●\n\n\n𝐎𝐰𝐧𝐞𝐫 ➻  𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("owner")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'owner-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
