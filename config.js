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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_57_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkb0lnWC9GNmlhRy90OUxheTlQVmRraWFQNHR0d0xRZmhPUGYzdkNWNFFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJONUUxa0J6U1JQdXFtNlJHRFdFQWNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzZWRiYzRjLTBkNjUtNDQyMS1iMWQ5LTZjZjE4OTRkNmM0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDE4NCxcbiAgICAgIDExMyxcbiAgICAgIDE5NyxcbiAgICAgIDExNyxcbiAgICAgIDEzNixcbiAgICAgIDI0OCxcbiAgICAgIDAsXG4gICAgICAxMjMsXG4gICAgICAyNTEsXG4gICAgICA5NSxcbiAgICAgIDI1MixcbiAgICAgIDE1OSxcbiAgICAgIDE2OSxcbiAgICAgIDE4MSxcbiAgICAgIDE0NyxcbiAgICAgIDYyLFxuICAgICAgMTg2LFxuICAgICAgMTk4LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDEwOSxcbiAgICAgIDc2LFxuICAgICAgMTAsXG4gICAgICAxODEsXG4gICAgICAxMTUsXG4gICAgICAxMDYsXG4gICAgICAzOSxcbiAgICAgIDI0NCxcbiAgICAgIDIxMCxcbiAgICAgIDIzMyxcbiAgICAgIDE3NSxcbiAgICAgIDcsXG4gICAgICAxNTUsXG4gICAgICAyMzIsXG4gICAgICA2LFxuICAgICAgNjUsXG4gICAgICAxNjEsXG4gICAgICAxMDAsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVDdLNjFUN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzU2MzI2MjI1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLgvITwnZCY8J2QlPCdkJTwnZCT8J2QgOC8hFwiLFxuICAgIFwibGlkXCI6IFwiODA4NTc1NzQ0MDgzMTU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLbnM4bWdRdnEvRHVRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndldmlLT0lrUHV6ejl2c0plZ1EyZEJoaUY3WmM3R01wb01CWU5tamxkbFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwianZod2E3ald0aEoxMXZkMkxseEhhU3NLK3h5OFVYNm42RWZ1Y0JmQ3V4QXE2cmlZRVpFVnNrRjBTWWQ5bnB4cGZSR3NWQlRza3BEWVh6RTI1UThKQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTXprYlpXMnU2WWxSS214d0FZVFN4UzlucUFxSDJYUElWQk8yanc1c1d2a0dSRjRzd1J4Y0ZFTm9ZM0orMUFWZlJIcHpVd0thbzJaL3JycklnRDJKQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIxNzU2MzI2MjI1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjU0MjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3ZXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLdlcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvclJ1bjVzVGlYYUhEdVJXNmZIMFFiT1RVQjF2dSszcmoybkg4cHlNQW9FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxOTk4NTQ0OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMjUwNTc1OTg4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "༒𝐎𝐁𝐈𝐓⃝⃝💜𝐍𝐄𝐗𝐓𝐀𝐆𝐄༒",
  ownername:process.env.OWNER_NAME|| "obitoooooo🕺🏾",


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
