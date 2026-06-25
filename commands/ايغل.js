"use strict";

if (!global.malakIntervals) global.malakIntervals = {};

const kingMessage = `𝗔𝘂𝘁𝗼 𝗥𝗲𝗽𝗹𝘆 
Ყöρρι .𝚾. 𝐑𝐄𝐏⃕𝐋𝐘
𝗔𝘂𝘁𝗼 𝗥𝗲𝗽𝗹𝘆 
رد آلي 
Auto Reply:
*Auto Reply:

м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗м┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗 и┋𒊳┋↝ ❪𒋦❫↬🕸〖𓆗〗


「𝗠𝗢𝗡𝗦♰𝗘𝗥 -𝐗- 𝐂𝐑‌⃖𝚯𝐖𝐒 」𓌹 🐦‍⬛ 𓌺


  ⭊☠⥵


  𝐒𝐊𝐈𝐍 ♢✘ 𝑪𝑹𝑶𝑾 𝐆𝚮𝛉𝛅𝜯

░                 🟣                   ░


           🕸   ▭    🗞         



𖠄 𝙏𝙊 𝙍𝙀𝘿𝙄𝙉𝙂 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝘾𝙃𝙄𝙇𝘿𝙍𝙀𝙉 𒄆   


ᏆᎷ ᎬᎪᏀᏞᎬ ᎿᎻᎬ ᏌᏞᎿᏆᎷᎪᎿᎬ ᏰᎾᎿ ᎾᎰ ᎠᎪᏙᎾᎾᏚ   ¦  🦅`;

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
