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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237658145679";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_00_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInByL1VCM0dwb0c2c0pPQlBtQXg1NzIzWEhLNmdjK2NEL2RpTDN0QTBPaVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9qMWdOU0dwU2YycGhWdWM3b0IwbWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDk0YjM4YzMtZjBkMC00NTM0LTkwMGMtZjM1MjI3NGRmZjIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDEwNCxcbiAgICAgIDE3NixcbiAgICAgIDE0MyxcbiAgICAgIDExLFxuICAgICAgMTQ4LFxuICAgICAgMTc5LFxuICAgICAgMTQyLFxuICAgICAgNjgsXG4gICAgICA1NyxcbiAgICAgIDIwOCxcbiAgICAgIDE5NCxcbiAgICAgIDIwNSxcbiAgICAgIDMzLFxuICAgICAgMjcsXG4gICAgICA2OCxcbiAgICAgIDEzMixcbiAgICAgIDg4LFxuICAgICAgMTgyLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyMTMsXG4gICAgICAyMTQsXG4gICAgICAxMzQsXG4gICAgICAxNzcsXG4gICAgICA4LFxuICAgICAgNixcbiAgICAgIDExNixcbiAgICAgIDE0MyxcbiAgICAgIDEyNixcbiAgICAgIDE4MSxcbiAgICAgIDE0MyxcbiAgICAgIDU4LFxuICAgICAgMTAwLFxuICAgICAgMTc0LFxuICAgICAgMTcsXG4gICAgICAxMyxcbiAgICAgIDExNSxcbiAgICAgIDM1LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVozWUJSUDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1ODE0NTY3OTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDgxNDIzNTU1NjY2MTY6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVAraFhRUTBmbXV1UVlZQmlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSeThNeks5a3hzSVlKWmE1TVV2VEd4Q0NlVWpicW5wdHNJbG52elpzL1I4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhTVUJtdGg4QURPRStobmNBWVBUZXM3RDBlZ2EvVGRKT002Z21NZWRXUU9OWkZ2M0cwR0RsL2ErOU5LMW42SnFLV2VldkZQb2dGeGE3RmRhd1ZyUEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkN0VGxneDlReGJocWt1ZTVRSWJhZ2hyNVE5bC9rSTlkcDUwM3lDSUpsSGJCVE1PT2JSMm5nQXR0d2tCREVuMFp0SU5wR0pNM1FPZ2hUNUtJUVZiVmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1ODE0NTY3OTozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDkxOTY1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsyTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzJMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQUNuaVZHU01QTGlCTnJPNjV2VWk1MlF1WTI4MHF0bWJReStSdkp3enQ5bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDMzNjc3NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
