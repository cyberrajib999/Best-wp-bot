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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "904 644 3237";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_42_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMsXG4gICAgICAgIDgyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhGcDI1RDdVczZheFBUWGtmY0hhV1VrQW54ODgzdHd2aHE5OVBwa1NxYTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0NjQ0MzIzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjY5QzI3NUFGMTg0NjhCOTY3MDhCMDdDRjdENjJEMjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTU0OTM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRMNlFtNllpU0RHZjNKS3dZWlRXZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWFiYzA2NjQtNGUxNC00MTMzLTk4MjctMTE3NjM3M2QwYTE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDUzLFxuICAgICAgMjI3LFxuICAgICAgMjU0LFxuICAgICAgMTQwLFxuICAgICAgMTYwLFxuICAgICAgODgsXG4gICAgICAyMDgsXG4gICAgICAxNyxcbiAgICAgIDI0MCxcbiAgICAgIDIyMyxcbiAgICAgIDkxLFxuICAgICAgMjA1LFxuICAgICAgMTAxLFxuICAgICAgMjAsXG4gICAgICA0NyxcbiAgICAgIDE0MyxcbiAgICAgIDc2LFxuICAgICAgNjcsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMTY2LFxuICAgICAgMTA1LFxuICAgICAgMTE3LFxuICAgICAgMjEzLFxuICAgICAgMTcsXG4gICAgICA4MyxcbiAgICAgIDkyLFxuICAgICAgMTM5LFxuICAgICAgNzgsXG4gICAgICAxNDgsXG4gICAgICAxOTQsXG4gICAgICAyNixcbiAgICAgIDExOCxcbiAgICAgIDE5MSxcbiAgICAgIDEzOCxcbiAgICAgIDIwMyxcbiAgICAgIDE0MixcbiAgICAgIDE3MCxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTDU2MkdaVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0NjQ0MzIzNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MzE5MDY5NDQ2OTY5ODo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIn7qnLHhtJzhtIvhtJzJtOG0gFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w2WTdyY0VFSy9ZbUxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUDJWVkhsZ1F5ZHZ0MHJVbmJvaDEwNnA2dVZyWEFXYmlEY1ZPblIyaXRUcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRK0ZKd2dIUmpKd1FpOUxNK0FPTWxSZ25kNlI1MzROU2xWUm9CcjNmNkVxSU5VcWo2bU5aY296Q09pdWNXNjJyb01CM0dLUkx5Qmh4WkhaZzlaU29Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsekpDd2pHcDNjbEdoTDZoeTJnVTZzakZKd1JVWXZoQ1lIZkMxeFN4WHVRMnhrOUxuRGh2OWxXbU5iWDBGNUgzR1lDam1DMlB1UjFGQTlSbEs5NnZqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ2NDQzMjM3OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU1NDkzMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs0NVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiN2oydUV5UExBWWU0UEJxRFI0YUVSUStWL0ZhMjF2c0dXVjJRU0JVbVFsMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTkwODkwNTU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1NTQ5MzI3NTRcIn0iCn0="  // PUT your SESSION_ID 


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
