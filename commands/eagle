const fs = require("fs-extra");
const path = require("path");
const statePath = path.join(__dirname, "data/malakState.json");

function getState() {
  try { return JSON.parse(fs.readFileSync(statePath, "utf-8")); }
  catch { return { locks: {}, botAdmins: {}, awrwa: {} }; }
}

if (!global.malakIntervals) global.malakIntervals = {};

const kingMessage = `𝐁𝐎𝐓 𝐄𝐀𝐆𝐋𝐄 𒄈⃟𝐌𝐀𝐇𝐈𝐓𝐎
*Auto Reply*: 

𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸


𒁈  ༈ 𝑇𝐻𝐸 𝗞𝗜𝗡𝗚 𝑜𝑓 𝜔𝚨𝛶 ༈  𒁈
*𝚁𝚢𝚘𝚒𝚔𝚒 𝚝𝚎𝚗𝚔𝚊𝚒*  🫱🏻🟣🫲🏻



⏤͟͟͞͞★𝑪𝑹𝑶𝑾𝑴𝑨𝑯𝑰𝑻𝑶 ꗄ➺✞  `;

module.exports.config = {
  name: "ايغل",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "كاڪو",
  description: "أمر الغراب - يرسل رسالة الملك كل 45 ثانية",
  commandCategory: "الملاك",
  usages: "ايغل| ايغل وقف",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;
  const sub = args[0];

  if (sub === "وقف") {
    if (global.malakIntervals[threadID]) {
      clearInterval(global.malakIntervals[threadID]);
      delete global.malakIntervals[threadID];
      return api.sendMessage("تم ايقاف الغراب 👑🪽", threadID);
    } else {
      return api.sendMessage("الغراب غير مفعّل أصلاً!", threadID);
    }
  }

  if (global.malakIntervals[threadID]) {
    return api.sendMessage("الغراب مفعّل بالفعل! قل غراب وقف لإيقافه.", threadID);
  }

  await api.sendMessage("تم تفعيل ايغل كل 45 ثانية 👑🪽", threadID);

  global.malakIntervals[threadID] = setInterval(() => {
    api.sendMessage(kingMessage, threadID);
  }, 45000);
};
