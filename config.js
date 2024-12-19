const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.(0750148603) : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  //SUHAIL_14_52_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9MR1ZqbWwvL3lSL0FOeU1FYTRWN0dOd3Bnd2RleGl0YXBtazEzM1pDZ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzUwMTQ4NjAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFODVGMDU1QTg5ODUyMDNGMzVDQ0E4RUEyQjY4ODU3MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ0NDcxNTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NTAxNDg2MDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM3MzI2MzgzMzA2MEE0REJGOEJERTcwNkUyQThCOTNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDQ0NzE1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYLVA4Wk1vcVI0dVBVSHM5SG0tX3ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxZGMzNTUzLTNiMWYtNGIyOC1iZTJlLTUyOWNlYzJjMGE5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAyMjIsXG4gICAgICAxMDcsXG4gICAgICAxOTgsXG4gICAgICAxNDEsXG4gICAgICAxOTUsXG4gICAgICAyNTAsXG4gICAgICA0NixcbiAgICAgIDE0OCxcbiAgICAgIDQsXG4gICAgICAyMjksXG4gICAgICA5NSxcbiAgICAgIDIwMSxcbiAgICAgIDIzLFxuICAgICAgMTI5LFxuICAgICAgNjUsXG4gICAgICA3OCxcbiAgICAgIDUzLFxuICAgICAgOTUsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAyMixcbiAgICAgIDE3OSxcbiAgICAgIDgyLFxuICAgICAgMTEyLFxuICAgICAgMjcsXG4gICAgICAxMDQsXG4gICAgICAyMTAsXG4gICAgICAxODUsXG4gICAgICAxMTksXG4gICAgICAyMDEsXG4gICAgICAyMDEsXG4gICAgICA4NCxcbiAgICAgIDE2NSxcbiAgICAgIDE5NyxcbiAgICAgIDE1NyxcbiAgICAgIDIxMixcbiAgICAgIDE4LFxuICAgICAgMjcsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjZaTU5WOUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1MDE0ODYwMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODIxMTU3NDAxNTU5NDA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+Q18uQ2FuZHl+XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzZIK2ZRQkVLcWdocnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwVEpKc1Naek8vakVENWZXQzl3WXdnSnFqYm94ZjByeWw3Ym5DcjdndkVJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZ0UitwUlFtaUMzcWFqbHdvYzVZbTZYWTIyaWl3Zjl3WjVTYWtNd29mdW1LZEE5N091azVIYVZTMmpGN2krVmRNeVhwMHpNZEdkMWxNL1d0d3A2V0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllxMHQ3aGQvRm9BTXJ1ZGdQd0xFaUM1VFZWMjd3aWk4bkZYUURicUdhOGJCRUp2dVM2anBBME0rR0JBOThDdUtnaXpNdFl5UVlhNTF1US9zN29oY2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1MDE0ODYwMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ0NDcxNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCb1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJvWC5qc29uIjogIntcImtleURhdGFcIjpcInBhd3d1cTVIMUFmWC9EU29SR0NLRHc1SzhNVDlZaEREbWFEZlV4ZkJHM1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTEzNjg4NDk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ0NDcxNTYxNDVcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
