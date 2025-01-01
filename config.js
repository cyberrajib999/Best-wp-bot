const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="islamickcyberchat@gmail.com"
global.location="Dhaka"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Dhaka";
global.github=process.env.FACEBOOK || "https://www.facebook.com/cyberrajib";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vb1u9SR5a246n08GXL2b";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vb1u9SR5a246n08GXL2b" ; global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/fy1QpX6f/ultra.jpg" || "https://i.postimg.cc/fy1QpX6f/ultra.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "༆-✿CYBER-RAJIB...!!༊࿐" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/fy1QpX6f/ultra.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,018xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "01850551262,018xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_05_01_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAxODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUxLFxuICAgICAgICA3MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MixcbiAgICAgICAgNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMFBNUDRMbE1NYUtQMFU5cU9maGtDNVJnNFArU1htS0hXYzRNTG5Xd1doTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI4ODAxNzc5MjQ2OTAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQzNFMDIwNURCQUI0N0Y1NkYyQTM3M0I3MzM4NTc5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU3NjE5NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI4ODAxNzc5MjQ2OTAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RUMzOENERkQyRjVGQkI2NTExMjFDQTc1MTkyQTZERFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU3NjE5NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI4ODAxNzc5MjQ2OTAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFM0Y5OTdCNDZEOEIyOUQwRDlFQzhDNTMzM0NCNUIyMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU3NjE5NTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYUk3R3RISU1Ub0NtRlZpM056aDNqUVwiLFxuICBcInBob25lSWRcIjogXCJmYWU5ODQ0Yi1lNWRmLTRlNzAtOTFhMS00NGU5MTM5MmVmNTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgNjAsXG4gICAgICAxMzUsXG4gICAgICAyMzEsXG4gICAgICA3OSxcbiAgICAgIDE3MyxcbiAgICAgIDEzMCxcbiAgICAgIDk5LFxuICAgICAgMTI2LFxuICAgICAgMTQyLFxuICAgICAgMTAxLFxuICAgICAgODAsXG4gICAgICAyMjgsXG4gICAgICAxNTIsXG4gICAgICAxNTQsXG4gICAgICA3MixcbiAgICAgIDE2LFxuICAgICAgMTA4LFxuICAgICAgMTU4LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTcxLFxuICAgICAgMTI1LFxuICAgICAgMjM3LFxuICAgICAgMjEsXG4gICAgICA1OCxcbiAgICAgIDE2OCxcbiAgICAgIDE0MyxcbiAgICAgIDcxLFxuICAgICAgMTA1LFxuICAgICAgMTA5LFxuICAgICAgMTI0LFxuICAgICAgMjI5LFxuICAgICAgODAsXG4gICAgICAyMzIsXG4gICAgICAyMixcbiAgICAgIDIxMixcbiAgICAgIDE4LFxuICAgICAgMjMyLFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY3SkVZSDhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI4ODAxNzc5MjQ2OTAxOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NTE1OTI0Mjg4MzE0Nzo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIklTTEFNSUNLLUNZQkVSLUNIQVRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbnVqcU1DRUpUQTFyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFrWjg1cnNnYjlHdGV4YWlMZzNMQTU0NTN3RVBhVGtydDhVNlk4em0yVlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYU9JMUh0NlNPczlIV0Fnd1JUbEwrT0h6dUlzWlZERjZERzJmczZzNVdQOW42SVp5TVNKdThySUtBWjQ3L2JiWWpKWlF1aXA3bVEyVkZ0aVQxV29MRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzAyR2ZIdVphWU56ZitSM05zVStEcWsvTHNYWGlNZmVjNk9xUUExY01SdXF0OTYxRS9zQWhraGN5Qmp0Y0IxeFNaVkM2UzM2UXpCOHlLdlhxMksxQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiODgwMTc3OTI0NjkwMTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU3NjE5NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQWNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxBYy5qc29uIjogIntcImtleURhdGFcIjpcInE2R29hZ29UTytrb1ZVOCtkTnU2ODQ1bzljaml4amk0S0djSzVHdlJvMlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjEwNTE0NzI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU3NjE5NDYzMTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: CYBER-RAJIB Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , //* ✮͢ꓸ⃟ꓸ⃟ꓸ✮͢🩷 ISLAMICK CYBER CHAT ≛⃝🪽⃪𝄞⋆⃝*"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " Islamick-Chat-Bot",
  ownername:process.env.OWNER_NAME|| "Md Jahid Hasan Rajib",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Dark"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "true" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
