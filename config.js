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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348144661725";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_15_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNQ2JJQnRTd3ZjbU5YMUt5enQxWDhYQVY2bnMxeW53dGlRR3B0WHYzTHZzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNDQ2NjE3MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI1QzExNDcwREFGNkRBNjdFMjMyMDJCN0I4MTNERUJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjk5NzcwM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPRGFLYmgySFQwcVdDQWtGbTdURGdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5MmRjN2MxLTliNDUtNDM3Yy04YjVkLWY4ZTEzMTgwMjM5NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyMTAsXG4gICAgICAyMSxcbiAgICAgIDk3LFxuICAgICAgNDAsXG4gICAgICA4NCxcbiAgICAgIDEyNSxcbiAgICAgIDE5MyxcbiAgICAgIDI0MCxcbiAgICAgIDIxMyxcbiAgICAgIDg1LFxuICAgICAgMyxcbiAgICAgIDE2OCxcbiAgICAgIDU0LFxuICAgICAgMTA1LFxuICAgICAgNzksXG4gICAgICAyNSxcbiAgICAgIDIxMCxcbiAgICAgIDIwOCxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzIsXG4gICAgICA0NixcbiAgICAgIDkyLFxuICAgICAgMTMwLFxuICAgICAgNDEsXG4gICAgICAxNzMsXG4gICAgICA5NyxcbiAgICAgIDE0MSxcbiAgICAgIDI0NSxcbiAgICAgIDEzMCxcbiAgICAgIDQ1LFxuICAgICAgMTI3LFxuICAgICAgNyxcbiAgICAgIDIxMSxcbiAgICAgIDMwLFxuICAgICAgMjE1LFxuICAgICAgMTc3LFxuICAgICAgMixcbiAgICAgIDgsXG4gICAgICAxMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDIzV1NQQjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDQ2NjE3MjU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk91bSBBcmVlcCBDT0xMRUNUSU9OXCIsXG4gICAgXCJsaWRcIjogXCIyNTc2MDgzNDY4MDg0OTc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdWNpTW9IRUw3a3Jib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNrNWlYbnhpS3Q5dFNldHR4Zm16UWpZdnZyN2FGaldrNEVOb0J1d1NSVlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQnRQVVk4bmdDRXBmQU9lVzlDVitCTC9ZQVd6WGw5c0VMditVVmF1bG5TSUVTU1ZTalY2cXpNbFJQNlBKUks5SnlTVEsyeHl0YldMV0luN2NaL2drQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUzBrOHp3NVlVYzJsb2MwY25KVWhDS3k0aXdvV1dPRUw5VVJ1Z0RqbGh6OUtMWFU3TnovYkZrWGE5cFI0M2hXTmFxSEVBL2lpbmRza0thRDNYNCtsalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NDY2MTcyNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjk5NzY5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtPMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS08yLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWjNmdjBPcERoRjhwaWpxTHdIYXVYcjVGcGZJZ01zNGc4VktyM2xmdXN5TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDM0MzcyMjAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI5OTc3MDA3OThcIn0iCn0="  // PUT your SESSION_ID 


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
