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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166698122";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_19_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHlNYTV5Q0JZT1B1bWVIdUV1T0d5QnNGQ3BubUJQSE9PekxjcVA2UlBIZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwianZYVDlqUWZUU0dkeElSZTY1RmlHZ1wiLFxuICBcInBob25lSWRcIjogXCIxOTQ0ODE3NC0xNjFkLTQ4ZDItYTc5MS1hMTQwMTgyYzYzZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgODAsXG4gICAgICAxNjYsXG4gICAgICAxMzgsXG4gICAgICAxMDEsXG4gICAgICAxNDEsXG4gICAgICAxMjAsXG4gICAgICAyMDcsXG4gICAgICAxOTEsXG4gICAgICAxNzIsXG4gICAgICAxMDIsXG4gICAgICAxNDIsXG4gICAgICAyMjcsXG4gICAgICAxNyxcbiAgICAgIDk0LFxuICAgICAgMjQ0LFxuICAgICAgMTQ1LFxuICAgICAgOTMsXG4gICAgICAxMzQsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgOTcsXG4gICAgICAyMCxcbiAgICAgIDk3LFxuICAgICAgMTQ3LFxuICAgICAgMzYsXG4gICAgICAyNixcbiAgICAgIDI0MyxcbiAgICAgIDE5NyxcbiAgICAgIDIyNixcbiAgICAgIDE1MyxcbiAgICAgIDIwMCxcbiAgICAgIDE5MixcbiAgICAgIDMwLFxuICAgICAgMTE1LFxuICAgICAgNCxcbiAgICAgIDExNCxcbiAgICAgIDg0LFxuICAgICAgMTM0LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU4SkNZNFhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY2Njk4MTIyOjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4NMUEjDhVwiLFxuICAgIFwibGlkXCI6IFwiNjk5Mzk1NjYyMzU3Njk6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnVKaUxRREVMWDh4Ym9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6Y1Q4cFdnVEg3bmFnR2FKZFlZUkU5VTJJNkc3UU45TEJndlM1U2pCaDJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxXNXFIWHFsakFoNVVCZlVhMTRGaEpWbHBwQStLcytxcmtQUGp6VDlKMkpVeThaM3lxaW85MDhpaG9TcGxSTUxVeTNXbk8vUFZrSHE2QUw5WTJmYUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZjL1NkQ0tmWUZNM2hBazRzZ1lQYlZpOHVRa1RDVFN3bFRyYTBPRkJvWVB4U2R1NFE0VWsrRVdBWDlmRGJWNHBkUEszekZXRFR2N0hRc2FKenZSVER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjY2OTgxMjI6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzOTM5Nzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
