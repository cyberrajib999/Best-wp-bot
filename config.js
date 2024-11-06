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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_43_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT2g0RSt3aXd2aVJ1RnM2UGVVZVhpbWE3emZpZkxNOWpZMVdUcnhEdVJaUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVEd2cTUxaDdSNm1SaXJUUldKN3ROQVwiLFxuICBcInBob25lSWRcIjogXCI3NmQzMzdiZS0wOGE5LTRmOTEtYTNiYi1iYzI0ZTlhZWYzMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMjA3LFxuICAgICAgMjA1LFxuICAgICAgMTQ0LFxuICAgICAgMTM4LFxuICAgICAgOCxcbiAgICAgIDE1OSxcbiAgICAgIDE0OCxcbiAgICAgIDM3LFxuICAgICAgMTEyLFxuICAgICAgMjE3LFxuICAgICAgMjMwLFxuICAgICAgMjksXG4gICAgICAzOSxcbiAgICAgIDE0LFxuICAgICAgMTUsXG4gICAgICAxMSxcbiAgICAgIDExMixcbiAgICAgIDE2NCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICAxNzMsXG4gICAgICAxNjAsXG4gICAgICAxNjksXG4gICAgICAzMCxcbiAgICAgIDg5LFxuICAgICAgMTgzLFxuICAgICAgMTgyLFxuICAgICAgMTI3LFxuICAgICAgOTMsXG4gICAgICAxNzMsXG4gICAgICA5MixcbiAgICAgIDEyNixcbiAgICAgIDY0LFxuICAgICAgMTEzLFxuICAgICAgNTksXG4gICAgICAxNyxcbiAgICAgIDIzMSxcbiAgICAgIDE4NCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpXQkpRUlpLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEyMzYyMzk2OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQ0ODY1NDUzMzAyNDI6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW14aU5vSEVJR0VyTGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNeW9EU1JIRXErK1BOYVkxSGpOQ0RLMUt4a09DcWUxZXVNR0FLUVNaZEQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZTWU1DZXVHZVpsMGpaSGlXaUk4UTdYbUpOZ203MnhJalU3RkVNNDRFUjNLWmhSMnRtemJXQ245Ny9Qb2hKSTVKZ21GQ29seDFBejlpMGZxTW9ZN0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImwrNk05M25xZVBQMmhDcStSWlpXbEhwU0JLUmUwWk1XK2x4ZTBIZ2ZSQ0hzclc4SmpDSmp4OFlocmd3YjhBalpELzlNdDVRRWl3djllakVwd1JBeEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTIzNjIzOTY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDg3MTgxNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
