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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_49_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICAzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICA5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMOExuZnk5VzB0cklGdGh1aFRtMEV2d3h0cU1OVXRsRk9NZkV0TjEvVmU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjQwNzk2ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM3REU0RDYzMzQxNEVDOEU0RDVBQkRBMjg1NTZEMDE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTQwODE5M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkbXd3ZHRmelNaU3RMSDMyb0g3R0hRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5MTliNjgzLTRkNTYtNDdkMy1hNGI4LTdlNzExMDk4ZmY0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICA0NSxcbiAgICAgIDI0MyxcbiAgICAgIDU3LFxuICAgICAgMjEzLFxuICAgICAgMTE1LFxuICAgICAgMTEwLFxuICAgICAgMjM0LFxuICAgICAgMjQ2LFxuICAgICAgMzgsXG4gICAgICAxNzIsXG4gICAgICAxNDAsXG4gICAgICAxNDYsXG4gICAgICAxMjAsXG4gICAgICAxMDIsXG4gICAgICAyMjIsXG4gICAgICAxODgsXG4gICAgICAyNDgsXG4gICAgICAyNDIsXG4gICAgICAyNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTA0LFxuICAgICAgMjQxLFxuICAgICAgMjA1LFxuICAgICAgMTk1LFxuICAgICAgODMsXG4gICAgICA2MCxcbiAgICAgIDg2LFxuICAgICAgMTczLFxuICAgICAgMTYxLFxuICAgICAgMjgsXG4gICAgICAxNTcsXG4gICAgICAyMTIsXG4gICAgICAxOTEsXG4gICAgICAyMjEsXG4gICAgICAzNSxcbiAgICAgIDIzLFxuICAgICAgMTAwLFxuICAgICAgMTk2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRZRkRKVDdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI0MDc5NjgzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWJ1bHFhc2ltIGRpZ2l0YWwgbWFya2V0ZXJcIixcbiAgICBcImxpZFwiOiBcIjkwODgyMDk1MjA2NDc4OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQdjFzc0ZFTHYwd0xzR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicHBabGFwejVDTFdaK09ZZ3o4S3dUQ2QwYkJBTW9xNHM4RjBlSlNyUnFSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2Ykt1VTRqWG9sN095dFdsYlBDTm5pL3FPUVlCeWNSbzJlYWMyQjIwNHFpUmNSYmRHNTdkNWZoUFFxeEpNMkRGSGJFL210SXRxS0xtYU5NYzl6RUdEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHNEQ2QityTC94Z3ZHL0FJNUdwSnJkQVQzWWE2REVqRWt1VytMWUdyZ0tIQlJ2Y2tXUUYxUW92R0FQM1laY3hpd2NnVTR4dFZlUnhhV1lSY0U4SkZpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI0MDc5NjgzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0MDgxOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMWnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxacC5qc29uIjogIntcImtleURhdGFcIjpcImN0TGpVcWRmZm14eVA2OFpYa05LUHBVcmdySjY2M2tZckRLdWRDT1dsdW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUwMDg4NjkxNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzM1NDA3NzQyNzUwXCJ9Igp9"  // PUT your SESSION_ID 


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
