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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_48_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICA3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICA3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsRlR0K2daZ1d5ZGlsZmFPVWIxUk1yakxkOTlVQ1NqMHRUTWNmeTR4WlBzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDRjZCRkV6UlJoQ3FMNlBDMFVUdWp3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBjNTliZWI2LWYxOWItNDRjNi1iZGY0LWRiMTFhZjQ1YjNkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NCxcbiAgICAgIDIxNSxcbiAgICAgIDE0MCxcbiAgICAgIDE5NyxcbiAgICAgIDE1MSxcbiAgICAgIDIwMCxcbiAgICAgIDI1MyxcbiAgICAgIDExNCxcbiAgICAgIDIyNSxcbiAgICAgIDE2OCxcbiAgICAgIDUsXG4gICAgICAxNDYsXG4gICAgICAyMzMsXG4gICAgICAyLFxuICAgICAgMjAwLFxuICAgICAgNzIsXG4gICAgICA0NyxcbiAgICAgIDIwOSxcbiAgICAgIDExNixcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMjQyLFxuICAgICAgMTgsXG4gICAgICAxNjAsXG4gICAgICA1OCxcbiAgICAgIDEyNyxcbiAgICAgIDQwLFxuICAgICAgMzcsXG4gICAgICA5MSxcbiAgICAgIDE0NyxcbiAgICAgIDI0MyxcbiAgICAgIDM0LFxuICAgICAgMTgzLFxuICAgICAgMTYxLFxuICAgICAgMTMzLFxuICAgICAgMTk4LFxuICAgICAgMTczLFxuICAgICAgMjMxLFxuICAgICAgMjI5LFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5TM1ZNUUY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEzNDE2NzU4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJDb2FjaCBLZW5ueVwiLFxuICAgIFwibGlkXCI6IFwiMTU0NDE3NDEyMTk0NDU1OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1BSeU44Q0VNalBzcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHbFhIcWFrYTd5YXNXaUZHQ2tBSDdBUVpHdWF6NW1PemM0RGFrZGc0V0drPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdsK3dXMkdjbEJ4cTBMWWZsbGh3dmZmVHZYK1ByMlhwbFdaZmdVY3pXZDYzbjNrQWN6L3FucWJUOHRkd3JKb0txc0N5SzZlejZUdEEwdkJxOWZEZ0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpPQTR6WnQ1ZDYyMDl5SkQ2bkdvVkRFc0syYVJOYWdmb0NoMk5QUGF0WkMwTzJqWmNGY0dBeWFoQ3hLcDBhUFFrRHNIRTh3a1RqQ0xEeFg2NlZvZmpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTM0MTY3NTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTE3NDA5M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
