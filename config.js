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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_35_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUs3VmF5cGRrY2xaWWZrQlZiWE1vSDdkKzl2OThqczNLcDNtZXphdEJsVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzNPUzVmY1pSbXFrX2oxMC1IZXpId1wiLFxuICBcInBob25lSWRcIjogXCJhYzRhYzhmNS1hOTBmLTRkM2MtOThmMi00NTI5MWM1OGQ1YjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAyMDEsXG4gICAgICA5NCxcbiAgICAgIDUxLFxuICAgICAgNDQsXG4gICAgICAxNTAsXG4gICAgICA0NyxcbiAgICAgIDE4MSxcbiAgICAgIDIxNixcbiAgICAgIDMsXG4gICAgICAxODgsXG4gICAgICAxMDQsXG4gICAgICAyMzksXG4gICAgICAzLFxuICAgICAgMjA3LFxuICAgICAgODksXG4gICAgICAxNzEsXG4gICAgICAxMTUsXG4gICAgICAzNixcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMjQ0LFxuICAgICAgOTYsXG4gICAgICA3NSxcbiAgICAgIDIwNyxcbiAgICAgIDIyNyxcbiAgICAgIDEwNixcbiAgICAgIDE0OCxcbiAgICAgIDExNyxcbiAgICAgIDM4LFxuICAgICAgMTY1LFxuICAgICAgMTQ4LFxuICAgICAgOTgsXG4gICAgICAxOTIsXG4gICAgICAxOTksXG4gICAgICAxMzgsXG4gICAgICAxMTYsXG4gICAgICAxNzgsXG4gICAgICAxMjIsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVhMSDhTQTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDY2MjkwMjA6NzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigI7igI7Dg8OH8J2Ru8OP8J2RvcOLfvCdka3wnZKZIHvigKLigJk+PuKAolxcXFxcIixcbiAgICBcImxpZFwiOiBcIjU3MzMzODU0MDQwMTA4Ojc0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXQW5xb0ZFSmliMDdvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmc3L0ZmdTVUUXUzcm1uallNdXZaMkovOXE2OUhCL0xBQjBlb2l0c1lYWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKSVdKaWVvTmUrM2docTAxaGFFbFY1emV4dGN6b2FBcG5uSTVKbW9mZmxWT0VvYXc4VmYyTVF2bE0rWnVMc20xQ2ZmMTBjRW5ZVnV5VEF3eG43ZDFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMMHFmQmNBV2tCdFQ0cklVWEdVYmRHRmtTbUpTMXNyTWlzODJJN2lodjdzbytoeU1nVm13SnZJSVNKaTdHcGZSN2tNenYvbFZZb2VwelRhVGdJRDNBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQ2NjI5MDIwOjc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzYxMDkwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlLU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUtTLmpzb24iOiAie1wia2V5RGF0YVwiOlwibnlBU1hOK2JGenlubTVZUC9GUUtsYXZvamZuVDBLL1c4Y3IvdnFPQWdoRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDMwNzQ5MzAxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbNiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2MTA2MjAyNTdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
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
