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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_54_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFNUlUdFBzMGh5bFBKZVJBaStseUVNdnNlVlNQMWdoOWIyRW1jRlJZYXZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc2ODIyNjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDN0U0QkQyODU4QkUzREQzNzEyMDgzREQ2NjBCMTc5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQxNTkyNDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NjgyMjYzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUNGRTQ2NjYxMjhBRTY1NjYzMTUyRjY3NTNEMjFEMDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTU5MjQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhNRWNJaGdHUzN5ZkVPTGYxQzhXalFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDJmMjJmN2QtMjIzZS00MjY2LWE2NjctZjgzMjE2YjI4N2IzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOCxcbiAgICAgIDc1LFxuICAgICAgMjQyLFxuICAgICAgOTYsXG4gICAgICAxNTksXG4gICAgICA0MSxcbiAgICAgIDIyLFxuICAgICAgMjEwLFxuICAgICAgNzAsXG4gICAgICA0MCxcbiAgICAgIDQ5LFxuICAgICAgMjYsXG4gICAgICAxMixcbiAgICAgIDE3NCxcbiAgICAgIDE2NixcbiAgICAgIDg5LFxuICAgICAgMjQ4LFxuICAgICAgMTg3LFxuICAgICAgMjA0LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxNzksXG4gICAgICAzMCxcbiAgICAgIDE5OSxcbiAgICAgIDc1LFxuICAgICAgMTI5LFxuICAgICAgNDEsXG4gICAgICAxMzgsXG4gICAgICAxOTYsXG4gICAgICAyNDAsXG4gICAgICAxOTgsXG4gICAgICAyLFxuICAgICAgMTAyLFxuICAgICAgMjQxLFxuICAgICAgODksXG4gICAgICAxMTAsXG4gICAgICAxNTUsXG4gICAgICAxNTQsXG4gICAgICAxMjYsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQV1lYRVNGR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzY4MjI2MzQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBBU0lORFVcIixcbiAgICBcImxpZFwiOiBcIjI4MjE0MTA5OTQxOTU4OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5ZMXVFQkVJTFg5TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3OUE2cmJ3QXlwVG5ibHpMUmpvTEhhM0drZ2I4WnYxeFlzZHBnTHF6RWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhmcUI1d3ZydFpTcXY0TmREODdKWmdYOW9DNEk5MFRmMmEyMWtTbCtZM0M5ZkgweFBXTE9zbWx2TXBZUGhvRzNUTkFha3JZREswSThJWXhsazU5SkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk0wdnduNjZ1L2lialV0UnFyeWZMWVdWdDRqenJObEpJaGRQZitlZkhIV2cwNW4yeDlOb0p1emR4QnFnSDZaaWZwYTVBZEJvU0hMbW85Z0R0OVAxUmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc2ODIyNjM0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDE1OTIzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBrRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGtFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMTY3VzNSMitSU0dKa0JOKzVaMG5PQll1d3M0V0xiTFpmSFhSbkhvSWRnaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NzMyNzk1MTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDE1OTIzODA2NVwifSIKfQ=="  // PUT your SESSION_ID 


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
