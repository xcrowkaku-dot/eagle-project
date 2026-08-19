"use strict";

if (!global.malakIntervals) global.malakIntervals = {};

const kingMessage = `『༴ 𝑪.𝑶.𝑷┋⟬🇦🇱⟭┋  𝑲𝑨𝑲𝑼 『卍』

⋆⃟🩸𐎠𝑻𝑯𝑬 𝑪𝑹𝑶𝑾

𐎠”. ⋆⃟🐦‍⬛𝑫卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑬卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑴卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐕卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐈卍𓃵𐎠”. ⋆⃟🐦‍⬛𝐋卍𓃵 𐎠”𐎠”. ⋆⃟🐦‍⬛𝑫卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑬卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑴卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐕卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐈卍𓃵𓎠”. ⋆⃟🐦‍⬛𝐋卍𓃵 𐎠”𐎠”. ⋆⃟🐦‍⬛𝑫卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑬卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑴卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐕卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐈卍𓃵𐎠”. ⋆⃟🐦‍⬛𝐋卍𓃵 𐎠” 𐎠”. ⋆⃟🐦‍⬛𝑫卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑬卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝑴卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐕卍𓃵 𐎠”. ⋆⃟🐦‍⬛𝐈卍𓃵𐎠”. ⋆⃟🐦‍⬛𝐋卍𓃵 𐎠”

➤ 𝙄𝙢 𝙁𝙪𝙭𝙞𝙣𝙜 𝘼𝙣𝙜𝙧𝙮𝙮 𝙈𝙖𝙣 𓃯

__
⋆⃟🩸𐎠
____

𝑺𝒕𝒓𝒐𝒏𝒈 𝒕𝒐 𝒉𝒆𝒍𝒑 𝒘𝒆𝒂𝒌𓃵

__❝  سآآمآࢪس الجــہٰۣۧہٰﹻۨ؍ۛﹻٰۦٰٰٰٰٰٰٰٰٰ۪۫ﻧــޢًَـ👹‌ےـﹷٰﹷٰﹷس مع اـ مـہٰۣۧ ﹻٰ۫ﹻﹻﹻۨـڪ بوضعيـة الوقـوف على اليديـن
____

➥ ◜’⤒𝕯̷𝐄̶𝐀𝐓̸𝐇  𝕲̣𝐀̷𝐍̶𝐆̸﹔ • 𝐍𝐎 𝐌𝐄𝐑𝐂𝐘  ┋🇦🇱🐦‍⬛┋

[🐦‍⬛] ┊ 𝑲𝑨𝑲𝑼 ✗ 𝑪𝑹𝑶𝑾 ❪🇦🇱𖡛❫

﹤ 𝑲𝑨𝑲𝑼 ⚟𖣖⚞ 𝑪𝑹𝑶𝑾 ﹥`;

module.exports = {
  name: "استا",
  description: "أمر استا - يرسل رسالة الملك كل 45 ثانية",
  usage: "استا | استا وقف",
  category: "الملاك",

  async execute({ api, event, args }) {
    const { threadID } = event;
    const sub = args[0];

    if (sub === "وقف") {
      if (global.malakIntervals[threadID]) {
        clearInterval(global.malakIntervals[threadID]);
        delete global.malakIntervals[threadID];
        return api.sendMessage("تم إيقاف استا 👑🪽", threadID);
      }
      return api.sendMessage("استا غير مفعّل أصلاً!", threadID);
    }

    if (global.malakIntervals[threadID]) {
      return api.sendMessage("استا مفعّل بالفعل! قل -استا وقف لإيقافه.", threadID);
    }

    await api.sendMessage("تم تفعيل استا كل 45 ثانية 👑🪽", threadID);

    global.malakIntervals[threadID] = setInterval(() => {
      api.sendMessage(kingMessage, threadID);
    }, 45000);
  },
};