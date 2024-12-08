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


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_01_52_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJodEdnTTRBZnhZQzVud1hBaGxwOVBZRG8veGg2OWZ4N1BjQmpXZ2t4KytjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLdUJDQ2gtLVEyQ2tQcnZJZ3BNdEVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiYWU4ZTdiLTI3MDItNGEwNy04ZjI0LTc3MGI5MTM1ODQ2MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAxODksXG4gICAgICAzNyxcbiAgICAgIDIxMSxcbiAgICAgIDE4NyxcbiAgICAgIDE2MixcbiAgICAgIDIzMixcbiAgICAgIDEzMSxcbiAgICAgIDYzLFxuICAgICAgMTQ2LFxuICAgICAgMTA0LFxuICAgICAgNjksXG4gICAgICAyMzEsXG4gICAgICA3NSxcbiAgICAgIDE0OSxcbiAgICAgIDM5LFxuICAgICAgNzMsXG4gICAgICA5NSxcbiAgICAgIDIwNSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDIsXG4gICAgICAxOTAsXG4gICAgICAxOTQsXG4gICAgICA2NCxcbiAgICAgIDIyOCxcbiAgICAgIDE4MyxcbiAgICAgIDIwOSxcbiAgICAgIDEwMCxcbiAgICAgIDEwOSxcbiAgICAgIDEwLFxuICAgICAgMTgzLFxuICAgICAgMTA1LFxuICAgICAgNTUsXG4gICAgICAxMDcsXG4gICAgICA5NCxcbiAgICAgIDI0NSxcbiAgICAgIDExNyxcbiAgICAgIDIyMCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCUFBWR1lZRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc1MjA1NzQwOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hhbWlzaGFoXCIsXG4gICAgXCJsaWRcIjogXCIxOTU0NjAwODYxMDgyNDU6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFoMDZNRUVPNzMwN29HR0JBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZY3VqVExTMm9IZFZZbEd0Q2JKaTc4L21wRDhzOXBOR3h0VThlSU1lRUh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkN0cFpRL3YzZkFlRjJrYmhVeERMQ1puWDY4RThmb2s1WG5RUG1yQW9yU0owZ2FnMlNrVUhNRGF3T1ZoVjlsVnI4dEx5MzNGTlViemx4M2JWcy85a0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpQZG1nQkg3Z0MyZjIyeFMwY3NzN1Q0R1FaNWxGK3pML3U0ZVBXdjZtRS9PcTJySDF2NFJ2a3owdUw1ZWhrSXdGc3F1bmxwRGpNNWJMR1lINXpnaWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3NTIwNTc0MDozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2MjI3NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJeWtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl5ay5qc29uIjogIntcImtleURhdGFcIjpcIlhPeTErSVlqRGQ3Q05WQ3diZURCR01EWkxpTlN0RkErM2FBNlZpSndXaTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE0ODUwNjM2MixcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzYyMjY3MzY0OFwifSIKfQ==  // PUT your SESSION_ID 


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
