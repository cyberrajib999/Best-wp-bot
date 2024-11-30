Hiconst fs = require('fs-extra')
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112362396";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_11_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODksXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNixcbiAgICAgICAgMjE4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3R0JLVnNBMEl1YnJvRUZScW93NC91bnNYQnM0aHJyMDgvWkFkZkJZdStJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpdWo0am1WQ1QyaUNXY0F1REdxTjV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYyMDJjMmVjLTEwMjMtNDczYy04ZDllLWE0YjY5OTFkNWVkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDYyLFxuICAgICAgMjUxLFxuICAgICAgMTQsXG4gICAgICAyNDIsXG4gICAgICA1OSxcbiAgICAgIDE5LFxuICAgICAgMjI2LFxuICAgICAgMjAxLFxuICAgICAgMjA2LFxuICAgICAgODYsXG4gICAgICAxNDgsXG4gICAgICA1NixcbiAgICAgIDEwMyxcbiAgICAgIDI0NixcbiAgICAgIDE5MyxcbiAgICAgIDE0LFxuICAgICAgMTE5LFxuICAgICAgNTksXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAxMDEsXG4gICAgICAxMjMsXG4gICAgICA2LFxuICAgICAgNjQsXG4gICAgICAyMTcsXG4gICAgICAxNjUsXG4gICAgICAxMjQsXG4gICAgICAxODAsXG4gICAgICAxNjcsXG4gICAgICA5MyxcbiAgICAgIDIwMSxcbiAgICAgIDE5MCxcbiAgICAgIDE2MSxcbiAgICAgIDI1NSxcbiAgICAgIDIwNyxcbiAgICAgIDEyNyxcbiAgICAgIDE4MixcbiAgICAgIDYyLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdWUjhZNVBYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEyMzYyMzk2OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQ0ODY1NDUzMzAyNDI6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXV4aU5vSEVMV1JxN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNeW9EU1JIRXErK1BOYVkxSGpOQ0RLMUt4a09DcWUxZXVNR0FLUVNaZEQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFHeTVDMGkySE1ReFJLN0xzRTNmK0w3dUZ0bjZ1TTA5ZXRwNGpPSkVhdW9ZNFowekVwVENUbForc2ErM1UzSXRsTGZSamI3a2ZOOGdSMUdMS0tjbkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9adTdhWnpWSHVwaW9VUXdYdmhDZitWbkYrdTc4bzV6a1ptZGF2ZFdUb3ZrRTM2eU1oTk9SNDZCR0FaMk84OGtKa3hlSEtDUEpvNHRjd1UvcmJ6d2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTIzNjIzOTY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjk1NDI5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
