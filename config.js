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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVA3VHYxbUk4L0hPb2FvTVBoZ2RxMDF6NDdqTFRWZHlRZWZRSWw4b1dVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODhMaDVZQ29NZ040bnMrbFVkNUdYaGU5bjE3NEpLd0JmSi9vYytQMXlVYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRR2Q2aHE0RmZtTFVoa2ZCL1U3Z2REcHQ1RkZpS3NGTEpIYzd1K0JycTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPNit4VU8yWmtJV1pJMENMNE05YW9kVkNpQzdPNXJMdVRHZ1BvNVVNZFM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklESXhsaVZ2N3UwcW1pT09hNThFbEp2N0QwNThQdTQ2WUk1TjFBNk1tbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSNUt6alRVWnh3UG03MUVSWFoyWGdZSXl0Z1Bhc3MzaU5jWVcwVVdNekE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUQ4bzdOamhDckhsRGtFVnpRdkMwMW9CT3pRd3d3b3FQOEdkdXRETmFVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGJ1YWRBY09VRWk1Ujh1cDkvK3JLTDdpaEJFdFZraWJoLzgwVXp2bFlVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUxK3lxV243THBsK0p2dEJ6L1VYTFBKVG94aFg5NndvM20yUFdsRzF6YlN0TkVDREE3Z2MxZEtRaXJXS0NicFVJVDl6TUw5Q2NUSWIxeU5pRkthcmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6ImtxT3VRL2xGZG83VE9NeFAzMlozS1ZFMHRHeVpxdTBkMThyRkMyVU1PU3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjEyNDE5MjQ2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI4NzA1M0IyMzczOTFEMEFGQ0Y4RkFEMzMxRTQ1RTk3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI0MTUwOTd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxMjQxOTI0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBRUI4MjczQkVDMjA2NjFDN0JGQTg0RDc5Q0VEMzBCQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNDE1MDk3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTbjl1XzVwMVJlS0QzSXNfY3lfZXFnIiwicGhvbmVJZCI6ImE5OGUyM2E0LTljM2UtNDRhZS05YjE1LWY2ZjM2Yjg5NTA5YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudFlnWnFNVlNiQ2lOd2MydVg1Y1RUQWZRSWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VqdHUzWDlPQ1ZvZDh3RlFUS3V6eFVSd2dvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhHUk4yUlhCIiwibWUiOnsiaWQiOiIyNTU2MTI0MTkyNDY6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZS94oSd8J2UvPCdlLvwnZWA8J2UvF/wnZWL8J2UvOKEguKEjcmqybTSk+G0jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDY5MExZQkVPZnZwN1VHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU2ozZCtKbHpYc3NOVGxOdks0ZU15Y095UGdnNzhMUDRQMGhQNzZBclJUMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoibGkxR2R4MWRkb3YxaHBmdEltejRrcVNCRzh6SklyZ2RUZDZobldIS0EvTFhLblBKTEhiVkhqR3AxQ05YWlF6MDBha3BaM2RIOTNiUUQ4djZoVnBLQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InBoSFNJckNCRUlRNE0wcVl6N3Fyd0o0cjhTUlZHTGN4NjlOKytDdnd6S1VNT0RMR2ZJWDB2NXdpSURLUkhXanpMWmlwRWJ5TEwzazBmN3huR2dmUWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjEyNDE5MjQ2OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVW85M2ZpWmMxN0xEVTVUYnl1SGpNbkRzajRJTy9DeitEOUlUKytnSzBVOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjQxNTA5MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKSE0ifQ=="
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
