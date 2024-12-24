const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="srilankan."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94768859286";




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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "sani,94768859287";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94768858286";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_12_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkxLFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRTUmprTFFjSzdLTEVQNTUxNUVqVTFCZTVuVHBtRDJjaHRaRVo1YUkxT1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3Njg4NTkyODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFFNjRBQTEwRUZGM0Y4RkE1ODQ1NjExNjM0NTA0QTEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTAyNDM1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvU0dvRXYzSlJGMmJaZV9CMWh1ZDFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwNDdmMzIyLTQ4YTEtNDdkZi05YWQwLTFjMGJkN2ZhNzhlZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDExLFxuICAgICAgMTIyLFxuICAgICAgMTc3LFxuICAgICAgMTQ1LFxuICAgICAgMzYsXG4gICAgICAxNjMsXG4gICAgICAxOTcsXG4gICAgICAxMTgsXG4gICAgICA1MCxcbiAgICAgIDE3MCxcbiAgICAgIDIzOCxcbiAgICAgIDIxMixcbiAgICAgIDE3NixcbiAgICAgIDE4MixcbiAgICAgIDE1NSxcbiAgICAgIDEzNyxcbiAgICAgIDE5MCxcbiAgICAgIDE0OSxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICA1OCxcbiAgICAgIDE0NixcbiAgICAgIDIzMSxcbiAgICAgIDE3LFxuICAgICAgMjE3LFxuICAgICAgMjUwLFxuICAgICAgMTg4LFxuICAgICAgMjIyLFxuICAgICAgMTMsXG4gICAgICA1MCxcbiAgICAgIDYyLFxuICAgICAgMTc0LFxuICAgICAgMTczLFxuICAgICAgMTIwLFxuICAgICAgMjQ0LFxuICAgICAgMjQyLFxuICAgICAgMTkxLFxuICAgICAgMjUxLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZXWFRNMTdIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2ODg1OTI4Njo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmbzwnZmw8J2ahy4uLi4g8J2Zs/CdmbjwnZm78J2ZsFwiLFxuICAgIFwibGlkXCI6IFwiMTc2MTk3MzQyMzkyNTc1OjkzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01ucTB1MEZFTnk5cWJzR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieHh1NzhaaXU2QTIwQzI4UnBYdjZ1TGlRUUNTQWlFc2tGZEozaVJjcWwwbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0TXpDbjNyQ2NENzFkeEl3STZ2VFBoQlVqY1djUEdRTlJRUmRjUEluOWxxNzhuN2pSWWN6c2hzZzd3UkJhRmFFMGZmMnNiUFZhbjVUYlVndEJITHpDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXRVhpOUJZMEg2QnNVWStUUm13UkExYU5PTlBxTkk5NkhBUmdNekd3MVcyNHNaWnVKREYydysvbU1iUUJpdmo4Znd3Z1YrNUhBWUliR3ZMTlNSSCtCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2ODg1OTI4Njo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTAyNDM1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpKaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkppLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXczdW5FQkMrWVRBOWR4YjVCTUxKWDd4OENMMitmRmxKSFgzMG9aZURRQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTcyMTIzOTc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "MAX.DILA",


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
