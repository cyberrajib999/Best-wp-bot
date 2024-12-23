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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_49_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICA0NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE1LFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NixcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTEdwUUZlc2JtdVdLQWovUnVTWW5pSUZjUDE5QjVCRWR0c1cwU1loQ1RIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTI1NjQyNDE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRTBDRTU4MURBMzE1RTUxMzU0QzIwQjQzQkU5RTQxQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ5MTg1MzVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVnVGV01Yd2NSN0dsWEtJSmkya0U5d1wiLFxuICBcInBob25lSWRcIjogXCJlYjMyNzYwMC0xMDNhLTQ2MDUtYTYxZC1kNTIwYjg5NjlhMzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTQzLFxuICAgICAgMTE2LFxuICAgICAgNDUsXG4gICAgICAyMDMsXG4gICAgICAyNDUsXG4gICAgICAyMTIsXG4gICAgICAyNDAsXG4gICAgICAxOTksXG4gICAgICA3MCxcbiAgICAgIDE0NSxcbiAgICAgIDkyLFxuICAgICAgMTM0LFxuICAgICAgNixcbiAgICAgIDIyNSxcbiAgICAgIDIwMSxcbiAgICAgIDEzNSxcbiAgICAgIDE4OCxcbiAgICAgIDksXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxNjIsXG4gICAgICAzMSxcbiAgICAgIDg0LFxuICAgICAgMTIyLFxuICAgICAgMjI5LFxuICAgICAgMjU0LFxuICAgICAgMjE2LFxuICAgICAgNjMsXG4gICAgICAxODMsXG4gICAgICAyMzQsXG4gICAgICA0NSxcbiAgICAgIDMxLFxuICAgICAgMTkwLFxuICAgICAgMTQwLFxuICAgICAgMjUxLFxuICAgICAgMTc2LFxuICAgICAgMjA5LFxuICAgICAgMTc4LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4yTkpaUFE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI1NjQyNDE2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJf4LySW05VWCBTQVZBR0Vd4LySXCIsXG4gICAgXCJsaWRcIjogXCIxNTQ1NzIwODEzNjUxMjE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU1UzT0VIRVA2Q283c0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNnOWt6eWx6UEhZYlFqQXJqZDNoWFM5TlpYRWErd1NYblF6RGliUU9OUms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ292ZGY5eGdpcEF1SlFDTG9Ra1FTR0plMndscTVFVy9MN2xTbngvN1lIclNDL2dZa1VZOVZNVzNoYkpRTFpXblIxVk02VERuRVRVN1l0S0YvbGlWQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidG1QNHlOVkVQampsc2JEMUpoTVl1dUdVdWVRcEFrNzBxVEF4OTBLOHZ5d3AwSTJyUEQ4NzltYlRxdFhjNmFpT3N6b0txL2NRV2NibXVkZXhSTnhNQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyNTY0MjQxNjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkxODUzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJYRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlhGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMG9wcVJEc0pFRjlSekxQZk02cXRYWWc2ZjNrZi9LMGkyN2JBZEFWdm9BZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDgzOTgxOTI0LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5MTgzODc3OTVcIn0iCn0="  // PUT your SESSION_ID 


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
