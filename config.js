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


global.SESSION_ID =SUHAIL_15_01_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvY3d4RWhNa0hkR2tLS0pXVzE1NlMzajZhNVR2NS9sQ28rZFZFNkdBZVQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2Mi1JU19ualFNV1BtUFhtUzFfTjJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkODY4MTA0LWMwNTAtNGQ2Mi1hMThhLWM4MzQzZGEyYjlkOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAxMDQsXG4gICAgICA1MCxcbiAgICAgIDExMCxcbiAgICAgIDE2NCxcbiAgICAgIDEzMyxcbiAgICAgIDIwNixcbiAgICAgIDI0OSxcbiAgICAgIDUwLFxuICAgICAgNTIsXG4gICAgICAyMDcsXG4gICAgICAyMSxcbiAgICAgIDkwLFxuICAgICAgNTgsXG4gICAgICAxMTAsXG4gICAgICAxNzYsXG4gICAgICA2NixcbiAgICAgIDI1NSxcbiAgICAgIDEzLFxuICAgICAgMjQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDEyMCxcbiAgICAgIDE5MCxcbiAgICAgIDIyOSxcbiAgICAgIDIwOCxcbiAgICAgIDIyNCxcbiAgICAgIDE2MyxcbiAgICAgIDM5LFxuICAgICAgMjQsXG4gICAgICAxNDAsXG4gICAgICAxMzksXG4gICAgICAyMTksXG4gICAgICAxMCxcbiAgICAgIDIyNyxcbiAgICAgIDIzNixcbiAgICAgIDE2NCxcbiAgICAgIDE1MixcbiAgICAgIDE4NSxcbiAgICAgIDk1LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1hTR0Q5MUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk0MTQ5MzI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzQwMTU1OTA4NTA3MTg6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNkV5eEFReGVhb3VRWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1UOVp2Y0NNS2Y2NG8zdlNjRG95ZDcxVkUyVXYrOGhyb0xxRXVEVGdxbTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVDV3NXJuL1lJWTNuMGhINUZ4c2lSRVUxYUlvd2JOaURTZmVvYjBzZXErU1ViZEM4alo4QzBHejhUQnVoOElTWFJuaS9UaWNFT2Y0YkF2SUUvWHRrQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzdUY0lLeUd2a041ckZBenJoTHNvakdPT1dxMFE3Q2VQcmVpNWJKdE1EWTNPVlRDcnhFN3dCWUViZU5JOUxENHQrbGYva3lMYWN2Q3I3QzdRT2dOQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2OTQxNDkzMjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODE4ODkwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFdMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIV0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrZmxSM3FoSVN1K3RtSTg0LzFYaXVLQ1EwWmNONkhFUVhCS2FrblE2bTVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM0NzgzODIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAxNDQ1MDY1MjBcIn0iCn0= process.env.SESSION_ID  || ""  // PUT your SESSION_ID 


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
