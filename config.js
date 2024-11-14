const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://github.com/SuhailTechInfo/suhailmd-2.0"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"   "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_24_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgODUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODksXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM0LFxuICAgICAgICA2LFxuICAgICAgICAyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2UERIRk5uQkRIT1JpZzg5QnpObE1sdnJtdnMwMDdhZHlRV2ZycDMzdHlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRS2J1UjhmUVMxNmVEWldNODkzd0pRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjMjFiMTRjLTBlNjktNDI3Mi1hOWVmLTYzMGFiYTk1MDk1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgMzAsXG4gICAgICAxNzgsXG4gICAgICA3NyxcbiAgICAgIDI0LFxuICAgICAgMjMsXG4gICAgICAyMTMsXG4gICAgICAxMDQsXG4gICAgICA2MSxcbiAgICAgIDE5MCxcbiAgICAgIDM3LFxuICAgICAgNDQsXG4gICAgICAxNDAsXG4gICAgICAxNTgsXG4gICAgICAxMzMsXG4gICAgICAyMTMsXG4gICAgICAyMDksXG4gICAgICAyMzYsXG4gICAgICAxNDIsXG4gICAgICAxMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMTksXG4gICAgICAyNTUsXG4gICAgICAyMTAsXG4gICAgICAxODcsXG4gICAgICAyMSxcbiAgICAgIDEwMSxcbiAgICAgIDIwNyxcbiAgICAgIDIzMixcbiAgICAgIDU1LFxuICAgICAgMTQwLFxuICAgICAgMTMyLFxuICAgICAgMTU5LFxuICAgICAgMzksXG4gICAgICAxOTksXG4gICAgICAxMDQsXG4gICAgICA4LFxuICAgICAgMjUxLFxuICAgICAgMjM3LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllKSkQzU0ZRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY2NTA2ODk5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJVFogV0hZVEhcIixcbiAgICBcImxpZFwiOiBcIjE0MzQ4MjU0MjkxNTYwNDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04zN2srd0JFTU9EMTdrR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkNMWUlBSDErazVrK1QxQTZlYUVDZ1I1aEtQNUJ4dVR0SjY0aFVSdG9XOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqM2ZBRUdWNXhKN1hiTG5vTExHeDVBT0NSR3IrQUxrd3ArNkE0UDdWTnBYdmY1RFpXVnB0MVpxSFdWdG9LY0ZRb3VWUHBKZFF4TVIzczkyd2VKM2RCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHTjExdVhCcmtzYzhjS1Z5UWJSWGhJeEcrRVRlT0hkZE50WlRteTE1dk1zWGw3dUo2eWw2alRHNnh0UEFEU3h1WjJNcEZzak1EOW9vcnBhQnhKRXpCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY2NTA2ODk5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE1NzYyNjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMa2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxrYi5qc29uIjogIntcImtleURhdGFcIjpcIklmOXN0WnQ4dE1ZMDlPRFVJaW1hd3hHaFhyenc5NTh3dUVZNkxycXJUYmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDk1MjU1MDA0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ÅĈŤÎVĚ ĂĎMÎŇ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"  ).toUpperCase(),



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
