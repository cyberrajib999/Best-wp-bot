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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NixcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQUJjMEVGeW14ZXJCYzY2SG1na1hmUHl2bFRhQnYxaUszTmFWaFRENHZlQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRUtkakxQYnNRcGU5YzBHYy1tSV9rd1wiLFxuICBcInBob25lSWRcIjogXCI2YWJjMjU4ZS03OGRiLTRkM2YtODhmOC00ZDMyZWVhNmE1NDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxODMsXG4gICAgICA3OSxcbiAgICAgIDEyOSxcbiAgICAgIDUwLFxuICAgICAgNTAsXG4gICAgICAyMDcsXG4gICAgICAxNSxcbiAgICAgIDIwMCxcbiAgICAgIDE1OSxcbiAgICAgIDg3LFxuICAgICAgMTgzLFxuICAgICAgMTUxLFxuICAgICAgMTEsXG4gICAgICAxNzEsXG4gICAgICA2MSxcbiAgICAgIDUyLFxuICAgICAgODQsXG4gICAgICAyMDMsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgMTM1LFxuICAgICAgMjgsXG4gICAgICAxNzksXG4gICAgICAyMCxcbiAgICAgIDE5LFxuICAgICAgMTI1LFxuICAgICAgMjE3LFxuICAgICAgMTIsXG4gICAgICA3NCxcbiAgICAgIDIwNyxcbiAgICAgIDIzNixcbiAgICAgIDE3NixcbiAgICAgIDg4LFxuICAgICAgMTUzLFxuICAgICAgNjYsXG4gICAgICAxMSxcbiAgICAgIDM0LFxuICAgICAgMjIwLFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldGUFpaRFJSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyMDM4MTM2MDY6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NDg3MTEyNzczMjQ3NzozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMbWI0L2NDRU9Xa2k3c0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk85cmt6Zy90ZnkvaWo3NG1pVGgraUtTYWMzZkZyTkxvTXoyelQrMDhTU009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZVVqMFF2YzFmU3dCa0JpdEIrZjByc3J4NllUUnFjbmYzOXc1UFlvaGt0TWV4SUxLMVhHaHBEb0wwM2toZXFSSkdKWTdBems5T21NdVFsZGxmS1BDQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMnhoUzVicGp2d3lQcHVGbnpJNUZmMmFkTHNEeTJ2L2ZEVmZoZXNITGR0dnVJZjJ5cHQ4VFpDUGljZldTZWlXS2hmNk44TmFuc1VGbmlaaGNkS21yamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjAzODEzNjA2OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDUyOTY0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZlM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmUzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZkFwZzFZMUZqL2htamFWc0NvUjZKV0N2SEhveFBDZ1VHKys2YXZlS1JwOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3ODgwNTc1MjksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
