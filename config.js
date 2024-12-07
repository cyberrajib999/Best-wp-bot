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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254725693306";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_29_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInF5Z2ZEeE5iRUhNcGR1eGc0NS85MklUcGw2YnZYUFRzVFFBUGdiQ0JRYzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI1NjkzMzA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0ODY5M0Q4NkYxRkFGNjMyREIwQTFFQkM3NERDNjU2MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM1NzgxODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQjFsa1MzSkdTZVNDQXlpUHR4aTlYUVwiLFxuICBcInBob25lSWRcIjogXCJlMzFiMmRlMy00NTg0LTQ1MzYtOWNlNi03ODc2NGIwZmY5MWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMTk0LFxuICAgICAgNzEsXG4gICAgICAxODIsXG4gICAgICA5NSxcbiAgICAgIDY0LFxuICAgICAgMTM0LFxuICAgICAgOTMsXG4gICAgICAyNSxcbiAgICAgIDI0MyxcbiAgICAgIDE2OCxcbiAgICAgIDEwNyxcbiAgICAgIDIyNSxcbiAgICAgIDI0NixcbiAgICAgIDExNixcbiAgICAgIDUxLFxuICAgICAgMjUwLFxuICAgICAgMjM2LFxuICAgICAgMjM2LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDI0OSxcbiAgICAgIDE1MSxcbiAgICAgIDMwLFxuICAgICAgNzIsXG4gICAgICA1NixcbiAgICAgIDI0MCxcbiAgICAgIDEsXG4gICAgICA0NyxcbiAgICAgIDQ0LFxuICAgICAgNDksXG4gICAgICAxNDIsXG4gICAgICAxMTMsXG4gICAgICAxMzksXG4gICAgICA2NixcbiAgICAgIDE4MSxcbiAgICAgIDE0NCxcbiAgICAgIDMxLFxuICAgICAgMjQ0LFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRWWUg0WEhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjU2OTMzMDY6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJOZWltYW4gTWFyY3VzXCIsXG4gICAgXCJsaWRcIjogXCIxMzM2Mjk4NTQzNTU2Mjc6NjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjM1cnB3R0VNYWIwYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5UERUTVY4eFpNbCtEY2RVSWdYRG9rbEQrdDJmbTBQVVF3Mld6YllQaGhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklQQUptWjdRWWxTS292TFhrL0lWV0MxeWgvbTJhYkp3bGhpTVpnNm5sUklKb1dnNldqM0JJd1JNbkFHa0x0WHJFKzBNV2tRZVdMclFpSlZkNExCekFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpQS2xaV1BYa2hhNjd5SlJtdFYyZGhlc3hhQnBXL2NvVUJKRWc4WmZuZFJ3UzR1RTc5V3llV3BYS29zOWhwNXJtNGt4aSsrMEs4RjJCb0UzNk5Gc2hRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNTY5MzMwNjo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzU3ODE4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVqZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWpnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMEVyakd3cWtSdTVXRURRREZuZ2JJRHlUdzRHRDRCQXA0Vlg5MWFtdUx0RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjcwMTAyMjM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM1NzgxODkwMTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Neiman Marcus",


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
