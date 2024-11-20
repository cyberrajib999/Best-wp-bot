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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_30_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRbFp6bDF6SXZJMEhWNG8zQjZNTUYvQlRIWUJyS0ZPSkxsOHlMYnQxOUt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpQk1oVkJfYVNfR2VMTWY5b09neS1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMwMGE4ZTVlLTg5MDYtNDJiZS04YmUzLTFjOWI1OTVkMTU3YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDE3LFxuICAgICAgODgsXG4gICAgICAxOTAsXG4gICAgICA0OCxcbiAgICAgIDEzOSxcbiAgICAgIDIwMixcbiAgICAgIDE0MCxcbiAgICAgIDgzLFxuICAgICAgMTQsXG4gICAgICAxNzIsXG4gICAgICA3LFxuICAgICAgMTQ3LFxuICAgICAgOTUsXG4gICAgICA4MCxcbiAgICAgIDcxLFxuICAgICAgMixcbiAgICAgIDE1NixcbiAgICAgIDE1NCxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxNjMsXG4gICAgICAzMyxcbiAgICAgIDE3NSxcbiAgICAgIDUwLFxuICAgICAgMjA5LFxuICAgICAgMTksXG4gICAgICAyMDUsXG4gICAgICAyMjMsXG4gICAgICAxNDgsXG4gICAgICAxOTEsXG4gICAgICA3MCxcbiAgICAgIDE1NyxcbiAgICAgIDE5NCxcbiAgICAgIDMxLFxuICAgICAgOTcsXG4gICAgICAxOTksXG4gICAgICAyMjYsXG4gICAgICAyMyxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0M1Q2MkVUWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNDIzNzUxMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQU1FRVJBJ1MgS0lUQ0hFTiBBTkQgTU9SRVwiLFxuICAgIFwibGlkXCI6IFwiMjAzNDQ4NjI0NjE5NzA0OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjIwdkxFQ0VKVDM5TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyT0JxWk9vb2RydGIyTEhjc0NBVktRY214L1pDUW9Cd2JYSUJvOWYrd2lnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNtSnJyQUNueFZmcG4rU1Y2K2VZM29US0RMV05zRklQMnpxK2NaK3RrQS9YUTJZQmZOMituMFl3aUoxdFdZcVF0TUM2STZ1V1l5NEpFeXBTS3ZjYkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdwZlYwYXkvTHFkMlluZ2k5RGtLcVpaZFRFdW44a2RtclV0aGM2Z1orR2VIbmZ1OVljTVVTaHhBc0ZScmhmdjlqeUdnQkduU0ppYTlWZ0lxeEtWemlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzQyMzc1MTA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDY2MjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1FDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUUMuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
