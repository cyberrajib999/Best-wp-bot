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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348132770719";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348132770719";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_07_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4Z1d3bHlHMkNYb2dhK3JCaVNuUnVJNHhGNEMzczF2OG5ZYXZYUm94dU9JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTdlZLNnZQY1FqQ1pMemc0OUNwTjd3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZlNTU5NDdiLWY4ZjktNDk1My1hMWJkLTJhZDVkNTU4NWQzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDc4LFxuICAgICAgMTU4LFxuICAgICAgMTkxLFxuICAgICAgMTc0LFxuICAgICAgMTU3LFxuICAgICAgMyxcbiAgICAgIDExMyxcbiAgICAgIDAsXG4gICAgICAyMTUsXG4gICAgICAxMixcbiAgICAgIDE2NyxcbiAgICAgIDE0MSxcbiAgICAgIDIwNCxcbiAgICAgIDE0OSxcbiAgICAgIDEwNyxcbiAgICAgIDQ1LFxuICAgICAgOTUsXG4gICAgICA3NixcbiAgICAgIDE3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDQ0LFxuICAgICAgMTM4LFxuICAgICAgOTAsXG4gICAgICAxNDgsXG4gICAgICAyMDUsXG4gICAgICAxNTUsXG4gICAgICAyNyxcbiAgICAgIDE4OCxcbiAgICAgIDE2NixcbiAgICAgIDI2LFxuICAgICAgMjM3LFxuICAgICAgMTEwLFxuICAgICAgMzMsXG4gICAgICAyNDIsXG4gICAgICAxMSxcbiAgICAgIDIxNixcbiAgICAgIDI2LFxuICAgICAgMjQ1LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNTODcxWVZaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTMyNzcwNzE5Ojg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDk1NTI0MzkzMzc0OTo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRFR4b0VERUtueHRya0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInI2T0ZkYnlIMldEaXNpUGQ5eS9wSFArZmhaZmRLWWRIZGJnbHNhVVFVQmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiajByMGx3L1hkd2s2M0VoZFg5ekJ2OCtwdTZnZzNHckVQYkxGdG1aYWMwRlJsazZjTkU5ZlZSamNVSUswZDdXaXJVMWNqbytnQnlWRWc1Q2pVMFdLQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVBITFBRNXk2WnZLNjl0NnN0Z2s0Z3dHdFJRMVBEejhoYmwzN2tIbVFhbERnZDVFeDRvUE80Z2hMWG9YNWhlY2ZoYmJSTFdCOVd2MHI0WllLVmtMZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMjc3MDcxOTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDQ5NjQ0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUVWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJRVYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzTHFNbHNzdVhIYWlWVzNzTFYzUm8vU0JncXgzOFJ5N1V1VE9pOGd1RGpZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgwODU2MTEyMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNzI1NTg2NjY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "OFFICIAL KY",
  packname: process.env.PACK_NAME || "OFFICIAL KY",
  botname : process.env.BOT_NAME  || "OFFICIAL BOT",
  ownername:process.env.OWNER_NAME|| "OFFICIAL KY",


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
