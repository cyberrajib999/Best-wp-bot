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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160724127";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_46_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE4aUtGcnQ1ajRjbGd1eTdETXdoaldiTWtBc2lzem1uSGFpSlY4bHkzbjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndhdDl2RzcwUWNPcnpXY3dGc0NoMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODU4ODY3ZTItZDgwNS00YTE3LWJkNzQtNzg3MDAzOWM4NTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDI0MixcbiAgICAgIDIxMCxcbiAgICAgIDU4LFxuICAgICAgMTk2LFxuICAgICAgMTk1LFxuICAgICAgMTkzLFxuICAgICAgMjM4LFxuICAgICAgNjAsXG4gICAgICAxOTMsXG4gICAgICAxMCxcbiAgICAgIDEyOSxcbiAgICAgIDEzMCxcbiAgICAgIDI2LFxuICAgICAgMTYzLFxuICAgICAgMTg1LFxuICAgICAgNDQsXG4gICAgICA0NixcbiAgICAgIDU4LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDE3NCxcbiAgICAgIDE3NyxcbiAgICAgIDI0NSxcbiAgICAgIDcsXG4gICAgICAyNyxcbiAgICAgIDE0MixcbiAgICAgIDk5LFxuICAgICAgMTEyLFxuICAgICAgMjIzLFxuICAgICAgMTY4LFxuICAgICAgNDUsXG4gICAgICA0NixcbiAgICAgIDEzMSxcbiAgICAgIDEzLFxuICAgICAgMTk3LFxuICAgICAgMjI5LFxuICAgICAgMixcbiAgICAgIDE0MixcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEMTVWQTRZNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MDcyNDEyNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ3J1aXNlIFR2XCIsXG4gICAgXCJsaWRcIjogXCI3Mzk1MTIzMzQ1ODM0MDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzaSsvQUNFTWljL2JvR0dFWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczd3QXZ3ZGdqNWdVTC9PWlBlenpRWERYVDZVM0Jwd2Eyek9WUkJoclpDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0NTVOMTVLVkRCZmUzTXVZK25pUGpid3g1WjM2bVBjZ2xMd2l0TFdSWXBPSjVRTU83V08vOWRmV29jWDlTNVBjODBZVzM1ZlVzNTdpd1pHMjZkcWRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQK2o0eGZZUW9NMmh0Yk5vNjhVMWc2NFN0SXdaMDA5MXFMdkpaSFhxVUZqcDcxU3d2VzRWL1Fsdk5SQzdWYW1QSnFSVmI3QVl4UkEyK0ptTHQyV0RBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYwNzI0MTI3OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyOTkyMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNR1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1HWi5qc29uIjogIntcImtleURhdGFcIjpcIlFaWExDVVd4VlhWN1pMVWFWN1BLaWdTbGh2UkJGSlRnRktYbHhkTFgydjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzczNzc5ODM3LFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc0NzE4NjQ3ODdcIn0iCn0="  // PUT your SESSION_ID 


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
