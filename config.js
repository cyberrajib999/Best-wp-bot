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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_47_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMixcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibiswczZxTGloNEJlc2dPVjBGMnRVcHNFekREblBoQjNsY1NmZmd4SFNBOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclEtWDJMZnhSTVdSUzJ4NXFaV3UzUVwiLFxuICBcInBob25lSWRcIjogXCJkNTZmYzczMC1mYjJlLTQ5ZGYtYTRjZC01YjZiNjUxMmNiNzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgMzIsXG4gICAgICAxNjAsXG4gICAgICAyNSxcbiAgICAgIDI1MixcbiAgICAgIDg1LFxuICAgICAgMTc5LFxuICAgICAgMyxcbiAgICAgIDE5MCxcbiAgICAgIDEwOSxcbiAgICAgIDIyNCxcbiAgICAgIDEwNSxcbiAgICAgIDE0MixcbiAgICAgIDE2NyxcbiAgICAgIDY2LFxuICAgICAgMTg0LFxuICAgICAgMjEzLFxuICAgICAgMTkwLFxuICAgICAgMjQwLFxuICAgICAgMTE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDE4MyxcbiAgICAgIDI5LFxuICAgICAgNDQsXG4gICAgICA4OSxcbiAgICAgIDE5NixcbiAgICAgIDIyMSxcbiAgICAgIDUxLFxuICAgICAgODMsXG4gICAgICAzNCxcbiAgICAgIDE5NCxcbiAgICAgIDE2NSxcbiAgICAgIDEyNCxcbiAgICAgIDExLFxuICAgICAgMjMsXG4gICAgICA5LFxuICAgICAgMjIsXG4gICAgICAxNTUsXG4gICAgICAxMDQsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTRXMzZRQlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzIxMTAzNTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU1NTg5MjkyNzI0MzMwOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHpsekxRREVNaUM4cm9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWQUFLYUpJL05KbWw4aHlxSklEcUVRNkFUdE9lTDB4OU9mQi80dExpL1ZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImYyWEN3eFdxaGxkeEZMOS9qOUlJUHVsOWtISGVJMHBHOWM5WEpiK0xRcVg1MEVNYS9IaUszLzVNMmE3dnJoZ3hEVlo2NkIyWVhSWm9TQWd0NmtXc0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm0yWmJyVWd2eGxIL2NGSnlGSUEwb0NoU0pZNHB4U01FazlGZEZ4S1JKc2FBTzdtS0ZjRVlFU1hEU2pYU29mQ05POEFoMjN3RHBNYVVzTnV0Q3lvVWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzIxMTAzNTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDExNTY2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA4MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDgwLmpzb24iOiAie1wia2V5RGF0YVwiOlwib3N1QVFRS3lyeUdBVjhNTm1tVjBOQ3Z5Q1poMlFxRDVRb0xnZlBvdEJybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTU2MTY0NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzMzOTk3NDk1OFwifSIKfQ=="  // PUT your SESSION_ID 


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
