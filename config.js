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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_56_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOTU82SVdiUUlXWm1ESVJXcVNZa3gxdXJYdnJYbHI3UG5vdmViaGZuNU5zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM0ODUyMzIzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTMwRTkwQ0REN0E5NTQyNDgwN0I1NTFENjQ4Q0NBNjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1MTI0MTgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkF2QlJ4TllBU1dpRjJ1eU5pYmJlSWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmNiNzA0ZjItZmM0Yi00ZDhlLTliMTUtYzUxZDY2Mjk5MWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDE0MSxcbiAgICAgIDM2LFxuICAgICAgMTUwLFxuICAgICAgMjU0LFxuICAgICAgMTU3LFxuICAgICAgMjEyLFxuICAgICAgMTY4LFxuICAgICAgMjQyLFxuICAgICAgNDQsXG4gICAgICAxOTEsXG4gICAgICAyMjUsXG4gICAgICAyMTMsXG4gICAgICAyNCxcbiAgICAgIDg4LFxuICAgICAgMTEwLFxuICAgICAgMzEsXG4gICAgICAzMSxcbiAgICAgIDE1NCxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDIwNSxcbiAgICAgIDIwOSxcbiAgICAgIDE4NCxcbiAgICAgIDI0OCxcbiAgICAgIDI1NSxcbiAgICAgIDE2OCxcbiAgICAgIDU1LFxuICAgICAgMzAsXG4gICAgICAxNDMsXG4gICAgICAxMTUsXG4gICAgICA5OCxcbiAgICAgIDkxLFxuICAgICAgMTY0LFxuICAgICAgMTc5LFxuICAgICAgMTIsXG4gICAgICAxNjMsXG4gICAgICAyMjQsXG4gICAgICAxNDIsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1A4MkZFTDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0ODUyMzIzNDo1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNBRF9fX19fSU5TSURFV1wiLFxuICAgIFwibGlkXCI6IFwiMTY0MTQ1NTk3MDAxNzYwOjUyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BHb3VWOFF4OG12dXdZWUJpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia21mbTRQa253aXlNRnZxZUxEYVJ3eG1QdDVZVnBDT1JNbkhMQ0Q0aHpHOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlakszZ0lXRzkzWXEyWkVpVDBXSGtNODM2aEhLbWVCR1FvemNtcUdQeWVUY3RRQWN1SSsrMkd1dGR1K3FrSWRQSmNvbUUyTWRFWlpqYTREK3BJMWpCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxNU81ZWRWZFBCREsvdWRSUTV1N0JGMVZtdEk0WmR5eTJ4cWg5QkpFQVNJZUxaNHVRN0lna3dNVzlaNjRLR0FJSDd2UDlnc2llck0yZHBsbVNjaVpEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNDg1MjMyMzQ6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTEyNDE3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9pQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2lDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRm1kdTYvb0VhZCtaZ1N4aFhta2F4M09qK3hWVkllM25RMUtkanN5bjAvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDAxNjg1NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
