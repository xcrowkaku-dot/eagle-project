"use strict";

if (!global.malakIntervals) global.malakIntervals = {};

const kingMessage = '
  𝐁𝐎𝐓 𝐄𝐀𝐆𝐋𝐄 𒄈⃟𝐌𝐀𝐇𝐈𝐓𝐎
*Auto Reply*: 

𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸𝑴-☠️𒀱𓃵 𐎠” ⋆⃟🩸𝐕-☠️𒀱𓃵 𐎠”⋆⃟🩸𝐈-☠️𒀱𓃵𐎠” ⋆⃟🩸𝐋-☠️𒀱𓃵𐎠”⋆⃟🩸


𒁈  ༈ 𝑇𝐻𝐸 𝗞𝗜𝗡𝗚 𝑜𝑓 𝜔𝚨𝛶 ༈  𒁈
*𝚁𝚢𝚘𝚒𝚔𝚒 𝚝𝚎𝚗𝚔𝚊𝚒*  🫱🏻🟣🫲🏻



⏤͟͟͞͞★𝑪𝑹𝑶𝑾𝑴𝑨𝑯𝑰𝑻𝑶 ꗄ➺✞';
module.exports = {
  name: "ايغل",
  description: "أمر ايغل - يرسل رسالة الملك كل 45 ثانية",
  usage: "ايغل | ايغل وقف",
  category: "الملاك",

  async execute({ api, event, args }) {
    const { threadID } = event;
    const sub = args[0];

    if (sub === "وقف") {
      if (global.malakIntervals[threadID]) {
        clearInterval(global.malakIntervals[threadID]);
        delete global.malakIntervals[threadID];
        return api.sendMessage("تم ايقاف ايغل 👑🪽", threadID);
      } else {
        return api.sendMessage("ايغل غير مفعّل أصلاً!", threadID);
      }
    }

    if (global.malakIntervals[threadID]) {
      return api.sendMessage("ايغل مفعّل بالفعل! قل -ايغل وقف لإيقافه.", threadID);
    }

    await api.sendMessage("تم تفعيل ايغل كل 45 ثانية 👑🪽", threadID);

    global.malakIntervals[threadID] = setInterval(() => {
      api.sendMessage(kingMessage, threadID);
    }, 45000);
  },
};
