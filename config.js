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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_32_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEt2T1dpc2MxTnRQZ2NSM0ZNNE5qaDJIN0c2ZTF3NVlzYnROeVNKb2FKdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic3M3Y00yT2dUeVNSZjBDLUVuOG1MZ1wiLFxuICBcInBob25lSWRcIjogXCI5ZDE5NGJhZS1jMjljLTQ5Y2EtYmIwNy0zMmE1MDRjZjA3YjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAyMDksXG4gICAgICAxMTAsXG4gICAgICAxOTksXG4gICAgICAxNSxcbiAgICAgIDE4OSxcbiAgICAgIDE4NCxcbiAgICAgIDEwMCxcbiAgICAgIDE0NCxcbiAgICAgIDIyOCxcbiAgICAgIDE1NixcbiAgICAgIDI3LFxuICAgICAgMjIzLFxuICAgICAgMTc3LFxuICAgICAgMTEsXG4gICAgICAyMDksXG4gICAgICAxOTksXG4gICAgICAyMTgsXG4gICAgICAxNCxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDExNixcbiAgICAgIDk5LFxuICAgICAgNixcbiAgICAgIDEwNyxcbiAgICAgIDIxMCxcbiAgICAgIDIyOSxcbiAgICAgIDY2LFxuICAgICAgMTY1LFxuICAgICAgMjM0LFxuICAgICAgMzYsXG4gICAgICAxMzgsXG4gICAgICAzMSxcbiAgICAgIDE1NSxcbiAgICAgIDQzLFxuICAgICAgMjE2LFxuICAgICAgMTcwLFxuICAgICAgMSxcbiAgICAgIDM1LFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkhRQkNTMTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODUwOTEyMTcwNDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdFTklVU1wiLFxuICAgIFwibGlkXCI6IFwiMjk4MTU3ODA0NjI2MzQ6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjNVbmFVR0VJSDl5THNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3RjRjOG5HUXlRK2hvSUhrYStXZyt1MG5IYU53MXlVZWdpeUNnT3dnSFdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5WTHkzYzByaGRPM2h4UmxFTjBKQ0poYzVZZ2RJRjluS1BlUU1HWkFYQU05MGZnTmJ0ZituSkF2dWdWVU1YanJDaWlhR2J4dUJXc3QrZFJQOEhBbEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJPQ2t4OERjWXVDS3huN3ZEbjRPbGNFV1QvMGpBaXhhcTJ2R1djcU04NDE4c3g0aGVvK2R2anhUdlhsMkxFZWxjaC84OW9xRklPOFVnMTY3MmVibGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODUwOTEyMTcwNDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU1NDAzNTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPdHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU90dS5qc29uIjogIntcImtleURhdGFcIjpcInRBOHMrWUt4MVZkUnVmQU1KRUtSNTBzZGsyeVpWak1wNFdzTEdra0JPUkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY4ODY5MzM0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MjM2NTk2NzQ2XCJ9Igp9"  // PUT your SESSION_ID 


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
