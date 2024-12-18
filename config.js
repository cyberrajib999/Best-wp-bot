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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_16_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUsXG4gICAgICAgIDczLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZzWFpiQlJEK2FaUGdLZDlQSy9iN1NUTU9VK0E5cUJWVkJyRzdHZzQ5K009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM3NjcyNjk0NDYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCM0I1NjgzMjUwMjkxRTJGOTU3MUIzMTAyOTQ3M0VBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1NjM3OTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzc2NzI2OTQ0NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVBNjQ0OTlBNERFNzZEQjZFMDZDQkU5MzM1RUM4NzM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDU2MzgwMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGQ1Y1TUdlMVF2LWtCY0xnTmU3eVpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI4OGRmM2E2LTI2NmItNDlkNi1iMmM5LTdhYTM5MTFjOTU0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDIxOSxcbiAgICAgIDIxLFxuICAgICAgNjAsXG4gICAgICAxNDAsXG4gICAgICA1OCxcbiAgICAgIDEwNixcbiAgICAgIDIzLFxuICAgICAgMTgwLFxuICAgICAgMTY2LFxuICAgICAgMTUyLFxuICAgICAgMjA3LFxuICAgICAgOTQsXG4gICAgICAyMDQsXG4gICAgICA2NCxcbiAgICAgIDIyNCxcbiAgICAgIDQxLFxuICAgICAgMTI2LFxuICAgICAgMTgyLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTY5LFxuICAgICAgMSxcbiAgICAgIDU0LFxuICAgICAgMTcyLFxuICAgICAgMjA2LFxuICAgICAgMTcxLFxuICAgICAgMjA2LFxuICAgICAgNjcsXG4gICAgICA5MSxcbiAgICAgIDYzLFxuICAgICAgMjE1LFxuICAgICAgMTExLFxuICAgICAgMyxcbiAgICAgIDExMSxcbiAgICAgIDIzMyxcbiAgICAgIDM4LFxuICAgICAgMTQsXG4gICAgICAxOTgsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUMxSk0yQVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3MjY5NDQ2MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjE3MjczMzc4OTQwNzQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDYWxlYlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpdXc1Z0dFTkd2amJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM01qb01FTUtwKy9Ea3pzd2lYVVF3L1p1UTEyY3lyOFppQTNydnd6QTdFVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuRVVGZVFqYTF6Snk3cU9aQVBydkp3TGxscXI5SEtuSlAzTlpFZERobkNSMGF4N0cwZnpJYjhhUEozdVNVUkRuSlR4d0REeDdybktHOXVmRUFobHFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtMVZER3N3eG1uZmZieFJGT3o5YWdvQXlCaE8zTEE3eWEyV2VuOGptM0FxeFBIUnIrUC93UWsyMHJ6SDJscVk1Z0N1VkYwZHBMa05tZnBsQjNIWkNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzI2OTQ0NjA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDU2Mzc5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUcvSlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRy9KLmpzb24iOiB7fQp9 "  // PUT your SESSION_ID 


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
