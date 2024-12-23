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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_57_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBGNE9wY3I1SnhwSFpHb3ZDU0hjZXJsdVArM2tRcmxTbGpJTEhwOXN6Ykk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTExMjE4NDM2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTdCMDlDMUEwREY5OUU3MTE1NTA1NUE0QTM2RTIwNTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTgzODQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5GMF9jTjY1UUZ5NmllUldDUzdhbmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQyMWZmMWEtODM3Yi00NjRhLWFkZDQtMDMyMGQ3OWU5YjUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc1LFxuICAgICAgMjQyLFxuICAgICAgMjAyLFxuICAgICAgMTcyLFxuICAgICAgMTI0LFxuICAgICAgNixcbiAgICAgIDU3LFxuICAgICAgOCxcbiAgICAgIDIxNixcbiAgICAgIDIxNixcbiAgICAgIDIxNixcbiAgICAgIDEzNSxcbiAgICAgIDU3LFxuICAgICAgMTUyLFxuICAgICAgMTAzLFxuICAgICAgNjIsXG4gICAgICAyMjcsXG4gICAgICA4MyxcbiAgICAgIDExOSxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDIyNSxcbiAgICAgIDIxNixcbiAgICAgIDE3OSxcbiAgICAgIDEzMCxcbiAgICAgIDcyLFxuICAgICAgNjIsXG4gICAgICAxNjMsXG4gICAgICAxMTUsXG4gICAgICAxODksXG4gICAgICAyNDMsXG4gICAgICA3LFxuICAgICAgMTUsXG4gICAgICA4NyxcbiAgICAgIDg0LFxuICAgICAgNjAsXG4gICAgICAxNCxcbiAgICAgIDE1MCxcbiAgICAgIDE1NSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJKMzRDSjZCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEyMTg0MzY1OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjM4MDM3MTI1OTQwODo1NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJaTNnUGdDRUpxQnA3c0dHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInh2blpHc2JxZnhEaERQVnFwUHFxdU5uVWJCNmNlSjB0dVNMeERWamNFVDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSXExcURHVkhtZmg5TXd4K1Z1WnZhdnZjcmdiZUNkQndYaENMRDZSWWVNVSsraEVkWFk2cFZYQ2pNWjRSejd0WExZamk4bmtaODBGRTdYRS9uKzh2RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYzlQK2ZySGpUOUxTRDRxMVJsNFFHRDJpckExaWVrbkYzWWFKeWhNUTRaVk5RQU04NHFrWkVLTm9uS2kyU3Yza3prbmtRZ29YdVozVzhkdTQ2L1FQamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMjE4NDM2NTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTgzODM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnlrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGeWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBdmZlU2FyWW1XUlRJMm0rQ2ljREJxNWdjZFZ2a3ZsUkI1eHVxdmppMnpBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc4ODUzNjIwMCxcImN1cnJlbnRJbmRleFwiOjE4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4LDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
