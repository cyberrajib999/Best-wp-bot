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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923097076620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_46_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwLFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTksXG4gICAgICAgIDcyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlN2L2MxWW1VVlhIckJCYnJqbXZqZFdqaUVzRnZmbUljRjJBVlhZM3hXK289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZWY2ZJNDJWUkhDMzdsRTRIaHhOWXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjEzMTgzMjQtMTEwYS00NDI4LWFlYjctYjk0YmUyNjI0NWMyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgODQsXG4gICAgICA1NCxcbiAgICAgIDIxMCxcbiAgICAgIDE2MyxcbiAgICAgIDIzNCxcbiAgICAgIDIyOCxcbiAgICAgIDExNSxcbiAgICAgIDU1LFxuICAgICAgMTQxLFxuICAgICAgMjE0LFxuICAgICAgMjEzLFxuICAgICAgNzQsXG4gICAgICAxODUsXG4gICAgICAxNjUsXG4gICAgICAyMTQsXG4gICAgICA5MSxcbiAgICAgIDUsXG4gICAgICAxMDUsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAyMzYsXG4gICAgICA0MCxcbiAgICAgIDE0NSxcbiAgICAgIDkxLFxuICAgICAgMTM5LFxuICAgICAgMTI3LFxuICAgICAgMTg2LFxuICAgICAgMjIwLFxuICAgICAgMTIsXG4gICAgICAzNyxcbiAgICAgIDEzOSxcbiAgICAgIDIwNSxcbiAgICAgIDI3LFxuICAgICAgNzUsXG4gICAgICA4MSxcbiAgICAgIDE3MixcbiAgICAgIDU3LFxuICAgICAgMCxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLTlROSEoxNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk3MDc2NjIwOjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODM4MjQ4MzUxODY4MzA6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlgzaXhRUTMvUzF1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUWjN2NHMwNlUrRlY0UkxOa1hXdnFrd0x5aTJzVk5qZitpY1hESmxsdTBrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9ZM1VVTlVlU3c3TExnTFhPbDBvUlFpaDh4bzQ5K2dFb3kvaWV2Zkg3R3N2VS9DVy95RVVacTBBQUtQeHAwU3I0TnFpZW9HZUY0VXRpc3hGN3VkNkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInIwbHl3N0EvMnhqWXhjTXZsbXhpUTFKL1RMdjU1UTZLaTVNTVllaWtsdldWQS9aNW4vYlNkMW5NOUY0aGZNTC93Z0VBM1NmT0tXRGdmU3lsL2xxSGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5NzA3NjYyMDozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MjI4MDAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlJnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKUmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwV0o3TzBTcE04dFN5Ujg4QlEreS9LRUdlaVFVS2hjTXNzbGpmaWpEa0tjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyMTM4NTE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM1MjI3ODU2NjMxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "WATTOO",
  BRANCH  : process.env.BRANCH  || "Aftab",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",
  packname: process.env.PACK_NAME || "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",
  botname : process.env.BOT_NAME  || "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",
  ownername:process.env.OWNER_NAME|| "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",


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
