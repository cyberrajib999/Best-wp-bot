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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_00_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTDJqdjFKbEM5ZXNlamJTNDBhTnNnMnZLQmdwRGJTbmdOYlJYdkZ2WVdGcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS1pfVHgyMzJTQm1KRHRhRWhZM0p1QVwiLFxuICBcInBob25lSWRcIjogXCIzM2U0M2FmNC05ZTgwLTRlMzAtOTdiYi02ZTkwNDczNGQzYTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxODksXG4gICAgICA4OCxcbiAgICAgIDc1LFxuICAgICAgMTc0LFxuICAgICAgMTkzLFxuICAgICAgMTU2LFxuICAgICAgMTM2LFxuICAgICAgNzcsXG4gICAgICAyNTQsXG4gICAgICAyNDYsXG4gICAgICA3MCxcbiAgICAgIDIwOCxcbiAgICAgIDExLFxuICAgICAgMTQ0LFxuICAgICAgMjMzLFxuICAgICAgMTE5LFxuICAgICAgMTkyLFxuICAgICAgMTMzLFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDI0MixcbiAgICAgIDUzLFxuICAgICAgMTA4LFxuICAgICAgNjgsXG4gICAgICA2MixcbiAgICAgIDIxLFxuICAgICAgMSxcbiAgICAgIDIyMCxcbiAgICAgIDE4NyxcbiAgICAgIDc3LFxuICAgICAgOSxcbiAgICAgIDIxMCxcbiAgICAgIDE1OCxcbiAgICAgIDE2MSxcbiAgICAgIDQyLFxuICAgICAgNTEsXG4gICAgICA0MyxcbiAgICAgIDE4NSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk43R0YxRVQxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgzOTE5Mzc2Njc6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgprDgpr7gpqTgpqrgp43gprDgp4fgpq7gp4At4KaP4KawIEJPVFwiLFxuICAgIFwibGlkXCI6IFwiNzEzNTIzOTIzNTYwMDc6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NBMStNRUVOVDBuYm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJub1dYQlhtVkkxQ3ZyOG4zdk9SV21pU0hvd0VTWmI0Ym8wbkRtZHlEcUd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInppSzV4dFZkS2VGQk10NXpYWVR0UHFvTjhaOC9UV0JYN25nY1RHK04rWG5hS0tJMS9xYnorQis2ekUwV01uUmU3bTRldXg4dnVWbGh0enhydEVvaUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVFOEh3SlJDVFoxMyszSWhrdUVnZ3IyQkVucnBjYnRSTnh1RCtBRXlTVTl5UXdoUndPQWpRRFJPanpJcE5QWTI0TDZGblBONTBLOVZJNDlBUGcwUmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODM5MTkzNzY2Nzo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3Mzc2MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJcFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlwUi5qc29uIjogIntcImtleURhdGFcIjpcIkdicG9ibXpPcEM0OCs0ODkzYXJXVnRaaStFNE5ZbHMybWphbTY4Qk94UFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4Mjc4NTM4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNjQ1ODM3MTc1XCJ9Igp9"  // PUT your SESSION_ID 


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
