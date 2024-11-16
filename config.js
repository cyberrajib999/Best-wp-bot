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
global.caption = process.env.CAPTION || global.caption || "© BossTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923247116683,923240806210";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_52_11_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDkzLFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVId1lERWRZay9tS0U4bEx4UE03bkM5eU1NZHN3TWVpT1VIYWVGR0pEbHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTIwNDUyMTE4MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQwOTA3NjQ2MjUzNTNCN0YzMzQ5ODY2NjZBMTRDRDY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTc2ODc2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKWnhPRWlxZlIydVZFdnBkX2JLZ1JRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlNDIzYzk4LTk5ODgtNGE1Ni1iMjc2LWViYzQ0ZTYyZTgwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDE4MixcbiAgICAgIDE4MixcbiAgICAgIDIxMSxcbiAgICAgIDE1NSxcbiAgICAgIDU0LFxuICAgICAgNjYsXG4gICAgICAyMTYsXG4gICAgICAxNzIsXG4gICAgICAyMDYsXG4gICAgICAxOTUsXG4gICAgICAyMCxcbiAgICAgIDcwLFxuICAgICAgMTU1LFxuICAgICAgMjI3LFxuICAgICAgMTMyLFxuICAgICAgMjI3LFxuICAgICAgNjEsXG4gICAgICA4NSxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMjIzLFxuICAgICAgMTIxLFxuICAgICAgNzIsXG4gICAgICAxODMsXG4gICAgICAyMDksXG4gICAgICA1OSxcbiAgICAgIDE4NSxcbiAgICAgIDQyLFxuICAgICAgMjIyLFxuICAgICAgMTQ4LFxuICAgICAgMTg0LFxuICAgICAgMjM1LFxuICAgICAgNTcsXG4gICAgICAxODIsXG4gICAgICAxNzgsXG4gICAgICAyMDksXG4gICAgICAyMjksXG4gICAgICA2MyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxQkVQWjU5RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTIwNDUyMTE4MDg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzI5OTc4MzQ2MjUwNDE6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQUC96T2dFRUszajRya0dHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJsRHc5S2IxSUF0QVB3amM3QnB2S21GNlJpWXpVWlozdUU0cWlqQThXQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVisxckROMzl5YmhiQmRoVDllMFhKRHRJWUJjL1lWN1FkVkprYUxJQWUxSUQxSFM3MlM3eUd2cC94QW10UW1GSlBKR2RLczRzcGVIaDlwNWxabnEyQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOWR1UkNzSWQzcVp1c24waVo3MWhxMUFqM2IxZE96enQveVNLRHVyK3B3OTNZbUcySmRsSDBBNXZPbnUzNEhsTXlidm1CUGJYbUVGbFAvSWhQbnRKQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTIwNDUyMTE4MDg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE3Njg3NTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQbWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBtaC5qc29uIjogIntcImtleURhdGFcIjpcImlsbUduc05JY0JNbnRSNll3anNYd2NIUEdkK2dLbVg2dy85Yk9UWTJOYW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MzEwNzE4NyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMTczMTc0MzMwODY1MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ZiD-x",
  packname: process.env.PACK_NAME || "MALIK-MD",
  botname : process.env.BOT_NAME  || "Boss-XMD",
  ownername:process.env.OWNER_NAME|| "Boss-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "BOSS"  ).toUpperCase(),



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
