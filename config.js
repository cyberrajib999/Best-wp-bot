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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112362396";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_29_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA1LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL25rWEJqaUg0eEoxTUlNRFNWZnBMdHJHa1VGaEV5VGV5MGE5WkkwMVFPbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmw4R1N0c29RZmU2LTc0aExtVkE5Z1wiLFxuICBcInBob25lSWRcIjogXCIyZDI5YWM5OC1jODY3LTRjY2EtOTc2My1kMDg3NDFkZjMzN2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMjE4LFxuICAgICAgMTkwLFxuICAgICAgMTMxLFxuICAgICAgNzIsXG4gICAgICAxMjUsXG4gICAgICAzMyxcbiAgICAgIDE1NyxcbiAgICAgIDE2NixcbiAgICAgIDY4LFxuICAgICAgNDYsXG4gICAgICAxNDYsXG4gICAgICA2MixcbiAgICAgIDE5MixcbiAgICAgIDE5MyxcbiAgICAgIDE2MCxcbiAgICAgIDIzMyxcbiAgICAgIDE2MixcbiAgICAgIDMsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAzOSxcbiAgICAgIDIyMSxcbiAgICAgIDUsXG4gICAgICA4MyxcbiAgICAgIDE2MCxcbiAgICAgIDIxMSxcbiAgICAgIDE3MixcbiAgICAgIDExOSxcbiAgICAgIDYxLFxuICAgICAgMTczLFxuICAgICAgMzAsXG4gICAgICA5MCxcbiAgICAgIDEzMCxcbiAgICAgIDEyOSxcbiAgICAgIDE3MixcbiAgICAgIDk4LFxuICAgICAgMjMsXG4gICAgICA4NixcbiAgICAgIDIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFFNVNFUEJZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEyMzYyMzk2OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQ0ODY1NDUzMzAyNDI6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWV4aU5vSEVOanpxTGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNeW9EU1JIRXErK1BOYVkxSGpOQ0RLMUt4a09DcWUxZXVNR0FLUVNaZEQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIngrZDE1S0JIQlJUajRQL2NtWU5hK0FvSUE4TE8vUTlQSlAvTnNIZiszN0J4a1hWbm5zSVhobGtNRkhyT3lsQncvY2xxMk9LTkVmSGtXMHpTcFg4d0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImV3SjRWdFdSUW5mQlhqWWhlK3NPOGtaTVVzejJMTlV0ZC9EczhhNWczelZVZ3Vka09FUGxvSEFENExFYmpTYjZhcjZ1eFduOXdYODh5djUzZjAwcGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTIzNjIzOTY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDgyMDU3MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
