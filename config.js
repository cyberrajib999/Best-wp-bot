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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk4LFxuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDkwLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVRdCtyaXdablZOREErK1NmTmdFV3JudVlPQkdrY3BlTk5hVlFneHl0TTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZJbzRhZG1TU3E2cUtxanB4SHF4dGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDA2NWEyNDQtODg4Zi00NWEzLWI5NzEtNjYzODAzZWY0ODg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDMzLFxuICAgICAgMjM2LFxuICAgICAgMTg3LFxuICAgICAgMTQzLFxuICAgICAgMTU4LFxuICAgICAgMjEyLFxuICAgICAgMTg3LFxuICAgICAgMjI5LFxuICAgICAgMTM5LFxuICAgICAgMzIsXG4gICAgICAxNDMsXG4gICAgICA0NSxcbiAgICAgIDE0OSxcbiAgICAgIDE1MSxcbiAgICAgIDE5OCxcbiAgICAgIDE5OCxcbiAgICAgIDE5MSxcbiAgICAgIDU0LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDE1MCxcbiAgICAgIDIyMCxcbiAgICAgIDE5OCxcbiAgICAgIDI3LFxuICAgICAgMTg0LFxuICAgICAgMjgsXG4gICAgICA0LFxuICAgICAgMTE4LFxuICAgICAgMTc2LFxuICAgICAgMTcyLFxuICAgICAgMTI2LFxuICAgICAgMTYwLFxuICAgICAgMjA1LFxuICAgICAgMjQ4LFxuICAgICAgMTMxLFxuICAgICAgMTgsXG4gICAgICA5MCxcbiAgICAgIDEzNyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWUjNaTjFES1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NjYyOTAyMDo3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAjuKAjsODw4fwnZG7w4/wnZG9w4t+8J2RrfCdkpkge+KAouKAmT4+4oCiXFxcXFwiLFxuICAgIFwibGlkXCI6IFwiNTczMzM4NTQwNDAxMDg6NzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT09Td3FZRUVPbSsrcm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bHI3SlVNRG9mWnNjTW5WSXBlZzBuVDBpdUtxTGpMcHVrV3lydGVobTBjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlp2RHVrUWZ4eWoyOUt5RUorYUk0cjlhZ3RFL0JDOFo4RFY1R0dtekJ2UTlVc2FxdWFaSktYaGo0Qnd2QitnSU1oMkk5cmd1TkY0VzRka1ROUXA0NGpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFHa0Y5aEE2NTdEcmxla1pob3lXckR6NUlLbTNMZXFzUjdsTlk3RVZ0SjJpTWxZZ2docU1NVDJUQ294eTdxOWt4ajkvek9SQjVJY1ZhaytjWm1FK2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDY2MjkwMjA6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDI1NDQ0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU52K1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnYrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV3RJdEpOaDdUbWJIV3hDWHlqN2MrU25ucENNUWI0T0RXSVZVVjVCS2plbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTU0NTE3MzQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM4OTgzODk0NTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
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
