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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_43_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyLFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDY5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHMW1Uenp6UmtHa3lxeFU5UnlBOTlsbHgxV3YxVlg3aXkvVDEvdnNvN0NFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzV3d1LXRkOVRlaVVsNG52czlHNVJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE2MTEyYzg4LWVhNWItNDc0Yi04ZDM2LWZiZTExMzMxYzU2N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NCxcbiAgICAgIDM1LFxuICAgICAgMTgwLFxuICAgICAgNzUsXG4gICAgICAxNjQsXG4gICAgICAyMzYsXG4gICAgICAyMzMsXG4gICAgICAxNDMsXG4gICAgICAxMTcsXG4gICAgICAyNTUsXG4gICAgICAzNyxcbiAgICAgIDYyLFxuICAgICAgMTIzLFxuICAgICAgODUsXG4gICAgICA2MixcbiAgICAgIDQwLFxuICAgICAgMzMsXG4gICAgICAyNSxcbiAgICAgIDE0LFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgNTEsXG4gICAgICAxMjAsXG4gICAgICAxNjksXG4gICAgICAxMzksXG4gICAgICAxOTEsXG4gICAgICA0MyxcbiAgICAgIDI1MyxcbiAgICAgIDc5LFxuICAgICAgODEsXG4gICAgICAyMjIsXG4gICAgICAyNDMsXG4gICAgICAyNDcsXG4gICAgICAyMTIsXG4gICAgICA1OCxcbiAgICAgIDIyNSxcbiAgICAgIDIxMCxcbiAgICAgIDIyMyxcbiAgICAgIDIwNyxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLREtQSDJFS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTA0MTE5MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MjA3NDAzNjUwMjc2NzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXN3Zya0hFTGVTb2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaDQ2a0ptVjBNSmNUMElJb1o4UjhibDB6dEkzT3JSQWdnem42dXdSeEFuRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPZ2NWOWlvakQ2U1poMzlGTmNOWXNqTlE1ZVFZaVVMV3djNFk3RlBYVUZ5NUZlS3hGNmJ1TVVrdzBOV1l4cHJVVDMwWkFMUS9Rd3kxZWR0cGVKSzBDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvUmFSanRZTHdXWllsTUtVTWh1VGpBVDY5T1Bsb0JZdWhURUI2ZGZDejlLVzRYRjdBNlV5cmhvWW5VVFRyRSs4dlo0VEUzUmwwV21vVGtwRUF0R3JCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgxMDQxMTkwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjc5MDU4OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
