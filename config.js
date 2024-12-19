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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_35_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1RnNVJpUEZ0TWdFS3hSRG83MkR3NWMzRjNkRk5yeDJFUzlBUzZ5MFNjMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM5OTAwNTA3NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFBQkE5OTc4Q0YyRjM5MTQxRTI0NkRDQUU3RTRCQjk5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDY0MDUxOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0Mzk5MDA1MDc0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0M3OTNFREY3RERCQTM2QTg5MkI3MkRENDYwQzM4MDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NjQwNTE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQzOTkwMDUwNzQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5M0M2MjZDRTFFQ0E0QTFFMDQ1RDE1OUNCQ0YwREUwRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ2NDA1MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM5OTAwNTA3NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBFMUExNjE1MkRBQUM2ODUyNUZDREQ5QUI5RjMxOThEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDY0MDUyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrTDE5T0xDRFR0U0hRaUhiQVFBN0Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzYzA3ODQ2LWZmYjEtNDMzNi1hZTdjLWIzMGVlYmRmNjgyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxNzUsXG4gICAgICA0OCxcbiAgICAgIDEzNSxcbiAgICAgIDEzMCxcbiAgICAgIDIzNixcbiAgICAgIDEzMyxcbiAgICAgIDc2LFxuICAgICAgMTIyLFxuICAgICAgMjM3LFxuICAgICAgODgsXG4gICAgICA4MCxcbiAgICAgIDE2NCxcbiAgICAgIDEwOSxcbiAgICAgIDc5LFxuICAgICAgNDksXG4gICAgICA4NixcbiAgICAgIDI1LFxuICAgICAgMTkxLFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAyMTIsXG4gICAgICAxMzYsXG4gICAgICAyMTAsXG4gICAgICAxNzksXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDExMSxcbiAgICAgIDE5NyxcbiAgICAgIDY3LFxuICAgICAgMjE4LFxuICAgICAgNDksXG4gICAgICA5MyxcbiAgICAgIDEwLFxuICAgICAgNjksXG4gICAgICAxNDcsXG4gICAgICAxNjIsXG4gICAgICA2LFxuICAgICAgNCxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ3R01WNEhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM5OTAwNTA3NDQ6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzQwOTQxMjE0ODg0NDI6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCbGFjayBpbW1vdGVsXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSityb1AwRUVJS0hrcnNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSbW54T2hlYTFTWkl3UWI3Zmo3QjlHV2ZhazRVaUZEc1lDeXZINVliWTAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktSOGxxMlYwR3haVG1IMmlPRDNrSTAvUm1IRWRGdTczdVBaK1d4RVl5Y1plSXN3V2I3b24xZUQ2TXRvKzdqUFJWeW1EeFZId1gzYjV4Wi84QjBqREN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjczUituUDNnU25jb08zeGkwdG9acUE5NzkwRDJ3VmFyb3RLRFdkZVJKVTRGeU9Za0Jmd3VkdFcyckFYZWFCcXNvWmh2Z0JBemJXdzRFc0dVZkhHZEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0Mzk5MDA1MDc0NDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY0MDUxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpoUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmhQLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHpmQ2pSSDVkeForbXZkUERiV1VXdGVuMlY4eS81MUFrNU5WendQejRnWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzM2NDE1NjQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ2Mzk5NTA0MjZcIn0iCn0="  // PUT your SESSION_ID 


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
