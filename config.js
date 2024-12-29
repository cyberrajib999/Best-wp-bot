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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_34_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODksXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTkkrNmxteHRlQ2l6VWJMQkQvS2UxNWEyMnIrQVVMRFM3YjV1Tmo2TFNTbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc5MzM4Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MjY5QUY0OTJBQkE4RjFERDVDMDM3M0MxMTE1NjBFOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU0OTAwODBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc5MzM4Mzc0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOUFFNEUzRDRDQ0FFRjU2NTdDMzI3NkIxMDgzMjU5MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU0OTAwODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidlE4aERsX21UQnlEbmdMMGViV3pPZ1wiLFxuICBcInBob25lSWRcIjogXCI3ZjMzYjQ2NS05ZWVjLTQyZmQtYWM4Zi01NDhmNTk1ZmEyMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICA1MCxcbiAgICAgIDIyNyxcbiAgICAgIDI1NSxcbiAgICAgIDIwOSxcbiAgICAgIDIzMixcbiAgICAgIDExNyxcbiAgICAgIDQ2LFxuICAgICAgNTgsXG4gICAgICAyNTEsXG4gICAgICA1NSxcbiAgICAgIDM0LFxuICAgICAgMjEyLFxuICAgICAgMjEyLFxuICAgICAgOCxcbiAgICAgIDE1MSxcbiAgICAgIDIzMSxcbiAgICAgIDM5LFxuICAgICAgNTksXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgMTA2LFxuICAgICAgMTQ3LFxuICAgICAgMjA5LFxuICAgICAgNjYsXG4gICAgICAxMTYsXG4gICAgICAxNDcsXG4gICAgICAxOTksXG4gICAgICA1OCxcbiAgICAgIDE3MCxcbiAgICAgIDE4NCxcbiAgICAgIDU0LFxuICAgICAgMTA4LFxuICAgICAgMjE0LFxuICAgICAgMTEyLFxuICAgICAgODksXG4gICAgICA2NixcbiAgICAgIDIxNCxcbiAgICAgIDE4MSxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBSQjY3Q0RGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDc5MzM4Mzc0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY2MDM1NjkyNjQ2NDM1OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2lsZW50XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFc0eFBBRkVKZjB4YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMdVl0NVZOQUpoeXpnVjFUclFGM01UN01LYnVtVnZNQkR2cGUrTDlFQ1RjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1OeTV4R2tES2JaYU9mNDFYY2Vha1pqakJ2T0RkOGlzdldxOWllZ3dNMlljdmY5UWpxM0pNRHdxZks3c2hJa0h3K1ROMUhydEkyMjZOQklwQ2dQUUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZGOG5SK0hLRUl2MFNldkVwMXgwYUgwRnhiNGhhYTV3VGdxQmhCUkJrZWRiQ216YXBQSEpDZ1VZWlRIbUpzeFlQUENWWEZHT1NseUw2RG1zbFAydER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzkzMzgzNzQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NDkwMDc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkNFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQ0UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqSnlsMXJNSWhaUDNLeW9OQldCSTNSaEduUXRnbTdraHViQVRHNzhLbG1vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NzgxNzk3MDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTQ4ODA5OTU4N1wifSIKfQ=="  // PUT your SESSION_ID 


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
