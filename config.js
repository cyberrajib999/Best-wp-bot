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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";09139014709




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_31_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgODMsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICAzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNvUlFiR2lhMk1IVW5wcnRldGdhdFc3dEJPWWN0TTlvYW5Zc1pFblpKSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxZd2NFcHlyUm1pMGtTcGFVdGc1cXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODIxMjEwZmUtMjU0Yy00Nzc0LWJlODQtYTc2MTJkMGViZDY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDgzLFxuICAgICAgMzUsXG4gICAgICAyOSxcbiAgICAgIDI0OSxcbiAgICAgIDExMyxcbiAgICAgIDE0MixcbiAgICAgIDgsXG4gICAgICA1NCxcbiAgICAgIDEwLFxuICAgICAgNjksXG4gICAgICA0NSxcbiAgICAgIDQzLFxuICAgICAgMTgxLFxuICAgICAgMjEyLFxuICAgICAgMjE5LFxuICAgICAgNDksXG4gICAgICAxNjMsXG4gICAgICAxMjAsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMTMsXG4gICAgICA4OCxcbiAgICAgIDMxLFxuICAgICAgODksXG4gICAgICAyMjksXG4gICAgICA2OCxcbiAgICAgIDE4OCxcbiAgICAgIDQ1LFxuICAgICAgMTExLFxuICAgICAgMTgxLFxuICAgICAgMTA0LFxuICAgICAgMjUwLFxuICAgICAgMjA0LFxuICAgICAgMTc3LFxuICAgICAgMTMzLFxuICAgICAgMTA4LFxuICAgICAgMjA1LFxuICAgICAgMTQzLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVNRFBYRVM1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM5MDE0NzA5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJRdWVlbiBTYWRlZXnigJlzIGNvbGxlY3Rpb24ga25cIixcbiAgICBcImxpZFwiOiBcIjgyMTY2MDgwMzUwMTY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcUI2YjhPRUl1RmdMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImN1cW9wNWtaZ21WNFcvbnJFMjZ1Yks0Yis4NWtNd3M3TXdTUi9tOHJyUjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSWVJenphQ3pEQ2xvem9kUEVOZlQwVitUbUloUTN2S29GNmJLWGFHejlhVjZMTVJXNFJNNHg0N0tsUit5dDltcjI0M3cwdEMycE45WGtudURCS3puREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicE1Ca2xwdXFaNVlpQk94ZmRuNEZGUWRjS2VIWGpFcDZXY0pEODZkeUtaNlBYeTVNRG9zaWpsUUpTUW95czJSbVlVRGMxdEtEVmx4RDRSdGJnUmhvREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzOTAxNDcwOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMTUxMDU2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
