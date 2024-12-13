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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348032110357";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_21_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFPYUtwMElXRlRIRHo0L0JpK1pXb1ZobWVCYnBKdVFqdGR3VmdDQzZZcXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlplMU5XcDJ1UWpPSWgySmNYcVRhR3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzNhZjgyMzMtYzQ2Zi00MWE2LTg0NTMtYzE3ZTljOTk1ZTQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgNzksXG4gICAgICAxOTUsXG4gICAgICAyMTUsXG4gICAgICAxMjYsXG4gICAgICAxNDAsXG4gICAgICAyMDAsXG4gICAgICAyMTUsXG4gICAgICAxNDUsXG4gICAgICAxODAsXG4gICAgICA5NSxcbiAgICAgIDEwMCxcbiAgICAgIDg5LFxuICAgICAgMjAwLFxuICAgICAgMjUzLFxuICAgICAgMTczLFxuICAgICAgOTYsXG4gICAgICAzNSxcbiAgICAgIDEwNixcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcwLFxuICAgICAgNTAsXG4gICAgICAxNzcsXG4gICAgICAxNDcsXG4gICAgICAxMjYsXG4gICAgICAyMzYsXG4gICAgICA3LFxuICAgICAgMjA3LFxuICAgICAgMjIxLFxuICAgICAgMzgsXG4gICAgICAyMTksXG4gICAgICAyMzAsXG4gICAgICAxNzcsXG4gICAgICAxMDMsXG4gICAgICAzNixcbiAgICAgIDg4LFxuICAgICAgMTIsXG4gICAgICAxNDcsXG4gICAgICA3OSxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUFE1UFBGU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzMjExMDM1Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTU1ODkyOTI3MjQzMzA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMemx6TFFERUxHUzhyb0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZBQUthSkkvTkptbDhoeXFKSURxRVE2QVR0T2VMMHg5T2ZCLzR0TGkvVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWHpyTzV4R05iS29ZaENYQk52ZWVTc3BVTzNhU1l6bTRlQWc4ZjVxbUZOOW1GdVZFWmxLQmxTVCtHV1dyNFhQOS9tYmhxWG5RM0VEYy8rMEtmS25QRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieVpIZHZYSytEQTF1RytRV1RNdlBKeDYvWEpQWVlnSk5FTDh0LzRqQXRMdlNna3BvZjFrTnlBSjkwa3dPdlZxdWMxZHg5WlJBVXVoVER3RlhHcnREalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMjExMDM1Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MTE3Njg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDgxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQODEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0SzI4Q1gwY24yNVViVnpwVmg1WXNxNmJ1Nmd6OTZYektuajFySXdsMzBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkxNTYxNjQ0NCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTczNDExNzY0NDYwMlwifSIKfQ=="  // PUT your SESSION_ID 


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
