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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_13_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgODcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgNDksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgzLFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWZExnQVZDZFhkalR5bHc2cGt6YzJmVTU2U0hPZUZzUVJqS3NyVE5uSlJnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQeURJSkVOZVJBLTY5b2JNY1Nxa2F3XCIsXG4gIFwicGhvbmVJZFwiOiBcImIwNTQzODkzLTAxM2YtNDU4OC1hMjk4LTdkYWE0YWIwNTI2NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyMDksXG4gICAgICA1MyxcbiAgICAgIDEwOSxcbiAgICAgIDE4MSxcbiAgICAgIDYxLFxuICAgICAgMTgyLFxuICAgICAgMTgyLFxuICAgICAgNjYsXG4gICAgICAxNTUsXG4gICAgICA2NSxcbiAgICAgIDIyOSxcbiAgICAgIDIyMixcbiAgICAgIDIzNyxcbiAgICAgIDI1MSxcbiAgICAgIDIxNSxcbiAgICAgIDEyOSxcbiAgICAgIDE2MyxcbiAgICAgIDE1MyxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxODcsXG4gICAgICA3OSxcbiAgICAgIDkwLFxuICAgICAgNSxcbiAgICAgIDEwOCxcbiAgICAgIDE0MixcbiAgICAgIDY2LFxuICAgICAgMTgyLFxuICAgICAgOTksXG4gICAgICAzNCxcbiAgICAgIDI5LFxuICAgICAgMTEyLFxuICAgICAgMTMsXG4gICAgICAxNzIsXG4gICAgICA5NyxcbiAgICAgIDE4NSxcbiAgICAgIDU2LFxuICAgICAgNDUsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEU3RTZUTFpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYzODc2MDYxOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDE1MTAwMzc5NTY4MzoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZlBrOG9FRUtXbnVic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZpNUU0R2N5aVF1czVYUCtnR1duTitENVFYMVBNaGZsVkc0SWdNUDdpUjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYW8vVXpUOWNtd0UvVURsT2dtSHFXalh2TWhNR2VQK2J1WUFjRWdjZlZ1ZGt2ZU9sSncyaUV3cnhoMGU0RFZwYmpCV3BETUpHVktsUkp0NWUrTjNQRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ0RGYS92N3hzM05QaGs0TDh0YnN6N093VlVDT2NXUzlOOVhXRUJLNjMrSzFYbTRVd0hxWm40cjlQV1JBYVJSeE5oZDVBVndQMXFFUVVpYlNzRFF0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjM4NzYwNjE6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTI4MzYyNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
