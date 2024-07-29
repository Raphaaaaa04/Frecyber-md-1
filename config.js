//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "true";
global.video = "true";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "255620814108,255764182801,255776663848";
global.sudo = process.env.SUDO || "255620814108,255764182801,255776663848";
global.owner = process.env.OWNER_NUMBER || "255612419246";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUViRVpZUmkrTUFJYXNYTklremxqOTl0Rzh2dHZGTm5nUkxzbjliTEQxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFlXZTdiSlNGM3pTM0RMMUZFNWtDelBqZzNkdXliMHJYMXJEK3JiOVgxcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSm5DVlJmS0J6S1Z5N3k0K0F6RjBud3l1VlpadlVTbFMvby9NVklnYjJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSYzkvK3F2MW85YVZuNFd4cXhIZFk0T3FuRjZudmc0MllmakhkTlB4VFVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFUk42U0FLL2htM0ZmY1BmNjZsTnVMaTR4MzMwZi93SkFzelBaYzNDVjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1hbjJkU3FQOGtqZk9uYUZFVEp5QmJsMVRCbFJnSGRvbEZWOEZSZVo2VlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0szVnNheHphNmR3V2JvaG1lemVGZUdYNjk0VlJUSU0waGlIakc0MWIxdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2JhazZSSG5vQVJFTTE5eHJkWFc1Qy8xY2ZweTQwdHFRNE1PYU9hbXpCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InluM1JFZzdkVXlEN1B1ZTRvbTdWRlNtT1BsTHZ2YVR1SEtsQklYR1BTZXpuaUpFTjFRSzYrVXBNTk9WcnlwUnRHS1lZV0tuaGpPLzRCdGlXSWhmckJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDksImFkdlNlY3JldEtleSI6IlV1TXU4bktmSmVjN0tEMFJIY0tQTmRhYVZkNGZRd1RaMU5lbE9xN0xyMm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjEyNDE5MjQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjA5RkQwQUIzRTFBRTA0QTg1NDE3M0JCMTQ2NzQ5NTM2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNzMyOTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxMjQxOTI0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRTBDRUZFRTg5MEM5QzczOTI1MDkwMUQ0Q0M3QzBCNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMjczMjkxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlbGFua1lzaFJaMlo0dk5XbGo5WVFnIiwicGhvbmVJZCI6IjU0NDYzNTJhLTQ5NzUtNGIzMC04MDk2LTViNjZlZjE2ZGFhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTERKcW84OXVZajVSbWd1ZFRuYTVwOWNPdms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdYRXQyVmdRbHNsVENEVnZQUVlaS0NwUlU0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM3VFM0RkM2IiwibWUiOnsiaWQiOiIyNTU2MTI0MTkyNDY6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZS94oSd8J2UvPCdlLvwnZWA8J2UvF/wnZWL8J2UvOKEguKEjcmqybTSk+G0jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDY5MExZQkVQcWJuN1VHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2ozZCtKbHpYc3NOVGxOdks0ZU15Y095UGdnNzhMUDRQMGhQNzZBclJUMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNjRKTE1BVlMzdzZmWUVhZVhueGgvdnZ4UUI2VWFkZ1huV2F4OEQ1aWk0amM2Y2cvQm04SUpMS0FlWGpPZzZCUTZHSnd2cUhVZTMrbnh2bk10ZFdNRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IldDaXNHVzZYeEhtZkNLdGk4NEExYXZFd2pjd0k3SmlsNGh3S0J5N3NSRW9VQTVLalIxNjd6Znk5b29Ma1l1T1ZVcVZhaVpLWnk4TjFLUjBDemNLaUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjEyNDE5MjQ2OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVW85M2ZpWmMxN0xEVTVUYnl1SGpNbkRzajRJTy9DeitEOUlUKytnSzBVOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjI3MzI4NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKSE0ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐅𝚪𝚵𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FRECYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "FRECYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
