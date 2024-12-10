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
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/h4k2tm.jpeg" || "https://files.catbox.moe/h4k2tm.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Sunny bby" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918513039675";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_17_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ3LFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQmJaVkd2ZEJoY0h0byt3bDBSMThaV1krSTJwNFNneUVzRFZlN0J3QkpLWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1Z1TFNkUHNTcWk4MldYa3NTd0FnQVwiLFxuICBcInBob25lSWRcIjogXCJhZDY3MTRjZC1kM2JhLTRhYWItOGVmMS04ZTliMGNiODZhMDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMjMzLFxuICAgICAgMzIsXG4gICAgICAxOTksXG4gICAgICAyNTIsXG4gICAgICAyMTUsXG4gICAgICA3MCxcbiAgICAgIDE1NSxcbiAgICAgIDk2LFxuICAgICAgMTYsXG4gICAgICAxMjIsXG4gICAgICA1MyxcbiAgICAgIDEyLFxuICAgICAgMCxcbiAgICAgIDE2MyxcbiAgICAgIDgsXG4gICAgICAxNDQsXG4gICAgICAxMTksXG4gICAgICAyNTIsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyOCxcbiAgICAgIDIzNCxcbiAgICAgIDQyLFxuICAgICAgMTY1LFxuICAgICAgMjIwLFxuICAgICAgOTEsXG4gICAgICAyNCxcbiAgICAgIDM3LFxuICAgICAgMjMzLFxuICAgICAgNzAsXG4gICAgICA2NCxcbiAgICAgIDQ1LFxuICAgICAgMjAzLFxuICAgICAgMTgxLFxuICAgICAgNTksXG4gICAgICAxMTksXG4gICAgICAxOTcsXG4gICAgICA5NSxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDZMMmVJRUVMNkw0cm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGcHdGT2FjQ1VZc2lXeFU5MkRMUHg5Rld1eXg5bjRCa0Z2SmtiQ0VncW5BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9QNDI0TUNDdW9kNTJjWnNSa0paUVpmVFlMZFZKQVk3cHZLbUljUHFNSmhyN1JUODZXNWZrYktMYXBkbjdDeGhadkJhVHA0OXRoNEo5WXJWV3Jub0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNGaXRmK2hQKzBQaWt3NGRjN2dhcWlHaitUZnc2MWpRNFFiaGpTV3phcjJucTMwZi94L0F1T3krUk9sMGNtR2hQc2UrQkV5Rlo4dG1QWXU0ZHB6TGpRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NTEzMDM5Njc1OjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTA2NzMyMDM4MjI4NDU6NjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg1MTMwMzk2NzU6NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODU0NjU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0l5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSTAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJneFM1ckp0UDNpeUcvUHFKWnllZ09VTERIMUtpd0FWbzNUNmRQYkliaWtrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODA3MjI0MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzgyNzAwOTc1OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtJeS5qc29uIjogIntcImtleURhdGFcIjpcIldaU0ZjK2cwb2RPemJqSlRTc2E0R2lOWktKVVZEdEJXU2dCb0NFcEFOeFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4MDcyMjQyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS0l6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRWU4bW5sTklQa3FGeGFBZElXODFDQTFJM3hCMjM0U3ZjT3VOMjM3T2V5RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjgwNzIyNDI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzODI2OTI4NDQxXCJ9Igp9"  // PUT your SESSION_ID 


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
