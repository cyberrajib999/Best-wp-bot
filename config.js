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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349068076201";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_23_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MixcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImgweGtBOWs2MUZDcGV0Q3Vua2VWdW52b1BVRkdwRVYzNFNmdzFYb2dhRkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInN1bUNSbWVyUmVTMlVyVkk4eldrWmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWE5MWU4MWEtYmJlOS00ODVlLWJkMTItZDc4YTdhMDdkOGMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDIzOSxcbiAgICAgIDE5MCxcbiAgICAgIDIzNSxcbiAgICAgIDc4LFxuICAgICAgMzYsXG4gICAgICAxOTgsXG4gICAgICA1OSxcbiAgICAgIDM5LFxuICAgICAgMTQyLFxuICAgICAgMjM0LFxuICAgICAgMTEyLFxuICAgICAgMTM0LFxuICAgICAgOTcsXG4gICAgICAxODQsXG4gICAgICAyMTAsXG4gICAgICA4NixcbiAgICAgIDYwLFxuICAgICAgODgsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMjMsXG4gICAgICAxODMsXG4gICAgICAyNDEsXG4gICAgICAyMDYsXG4gICAgICA4NCxcbiAgICAgIDE5LFxuICAgICAgODYsXG4gICAgICAzMSxcbiAgICAgIDIwMixcbiAgICAgIDgzLFxuICAgICAgMTgyLFxuICAgICAgMjAxLFxuICAgICAgNjYsXG4gICAgICAxNDksXG4gICAgICA0LFxuICAgICAgMTkxLFxuICAgICAgNSxcbiAgICAgIDU5LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRFFSWEU3QzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjgwNzYyMDE6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFWENFTExFTkNZIERJR0lUQUwgSFVEXCIsXG4gICAgXCJsaWRcIjogXCIxODk0ODUzODQwMDM2MjY6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0dYeDdNSEVObWFsTHNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSdUN3UCt2dWZjVEtYNnJ4dnlVZ3VORUR5bjBzT3J5Sy9EQ0NocmFPUGd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJYT05hZW9DOXZFekMya0pyOGcyeS8wMmtSdksvWENmRVlkMkkxV1lEdW8vM2lseXdzeEFJczJrdmFBUkVCV2dLQkdPNEJ1eWtFOGhLOW50S2xBYkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRxalZVTSt4MXA3NThOZjVGSlM1a2xzL0JBVFMwNGs3ZTZrQmRwNG9lclV5R29ySXBiMmxPcWh5b3R2ZXJ0UnlaWmhwMzE0c2w0T2pEUnp5UnpFdWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjgwNzYyMDE6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2NzU4MDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
