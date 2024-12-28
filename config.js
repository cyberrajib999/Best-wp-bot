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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349068076201";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_58_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICA0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU3lidDE0S2crUjJpQlByMTJLWmFRdWVBZlRiK0gzOStGN0l1azcvQk12VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib21HUmN2X3JSRmFuYU1GS0NxMDFfUVwiLFxuICBcInBob25lSWRcIjogXCIxMWFkNDlmNC03M2FjLTQ3ZjYtYTZhMS1kYjMxZDFiZGJjNTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAxNyxcbiAgICAgIDQzLFxuICAgICAgMTI5LFxuICAgICAgOTEsXG4gICAgICAxNjQsXG4gICAgICAxMTQsXG4gICAgICAxMzcsXG4gICAgICAyMDksXG4gICAgICAxNzcsXG4gICAgICAxNzAsXG4gICAgICAxNzAsXG4gICAgICA4NSxcbiAgICAgIDQ4LFxuICAgICAgMzAsXG4gICAgICAzMCxcbiAgICAgIDExNCxcbiAgICAgIDI0NixcbiAgICAgIDYyLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDI1MyxcbiAgICAgIDE1NyxcbiAgICAgIDE3NyxcbiAgICAgIDE5OCxcbiAgICAgIDE2NixcbiAgICAgIDI0MixcbiAgICAgIDE2MixcbiAgICAgIDEzMCxcbiAgICAgIDE5MCxcbiAgICAgIDkxLFxuICAgICAgMTI4LFxuICAgICAgNjcsXG4gICAgICAxOTQsXG4gICAgICAxOTAsXG4gICAgICA5NSxcbiAgICAgIDEwNixcbiAgICAgIDE5NSxcbiAgICAgIDE5MSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIQThHTlFGNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2ODA3NjIwMTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkVYQ0VMTEVOQ1kgRElHSVRBTCBIVURcIixcbiAgICBcImxpZFwiOiBcIjE4OTQ4NTM4NDAwMzYyNjozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS1h4N01IRVBLbXZyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJ1Q3dQK3Z1ZmNUS1g2cnh2eVVndU5FRHluMHNPcnlLL0RDQ2hyYU9QZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnBOTkVQaDNIMEVZOVgrL29wbjNDSkg3N21HNHk0TDludWlDR1RScGphQUJPUUZrbm16cGQxczFFYXZIRzJMNmdzMTAwdW1iU0hsbXlwVFU4Q2hFQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1lTY21DdExxY1IrVFpZcXQvUDVSL1N0SW9JNmZzdlFXd0x6Nko4NTl0cXU1UnN2N1lDQStvQUd4RVVBRUcyR2F0N01OVWNVVFdpZnBaQ09nT1JlZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2ODA3NjIwMTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTM2NTQ5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
