uiconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_28_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRCQWtTZjBobFEwaEJvVVFSckFXOEtLRUNzWkg0SE4rajlCS0dwbVlUT1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVlRl80c1lBVHdDMjRtXzRrTU5yQWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2JkMDY1ZTYtMjZlNC00MjBhLWJlMzEtMTdlOGU0NjdiYTc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICA4MyxcbiAgICAgIDk1LFxuICAgICAgNTEsXG4gICAgICAxNTcsXG4gICAgICAyNDYsXG4gICAgICAxOTAsXG4gICAgICAxOCxcbiAgICAgIDE0MCxcbiAgICAgIDk4LFxuICAgICAgMjA1LFxuICAgICAgMTY1LFxuICAgICAgMzQsXG4gICAgICA5NyxcbiAgICAgIDExMyxcbiAgICAgIDIzOCxcbiAgICAgIDYwLFxuICAgICAgNDQsXG4gICAgICAxNzMsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgNDQsXG4gICAgICAyMTYsXG4gICAgICA3NixcbiAgICAgIDEwLFxuICAgICAgMjE5LFxuICAgICAgMzAsXG4gICAgICAxNDAsXG4gICAgICAxNjUsXG4gICAgICAxMDEsXG4gICAgICA0OSxcbiAgICAgIDQsXG4gICAgICA5LFxuICAgICAgOTAsXG4gICAgICAyMTQsXG4gICAgICAxMDksXG4gICAgICAxNDIsXG4gICAgICA0MyxcbiAgICAgIDIsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSOUhHWldHV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5NDE5MzE5MTI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5Mjg4NjE1MDAyMjEzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FSaUwwREVJdUd3cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoYzk3WGw3cWZrRjBIMTZleVA1RTFKRVhhNlBDaWJoZWk1My94VlpzRzJJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkk2WWdEZFVHdENodFJoUExvYnM2cXhVK1FZS2xhZHFDMmZ3ZURoZlBnUHZwb1VaNFVSN3c0R2ZiMW5rQ2taU21vTGFKLzVvaFcxZjNaMklxaWxXc0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE5YzlkbU1sODRoM09naUlFL1UraUphNlF0S2N0QzdIWHRVZUh3YmEwaUNXbGo2OUJCVTFWWEQwL1QrcGJOc2graDlNNjFVaVhzK1A4bkZpN1NxMWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQxOTMxOTEyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMzI5Njc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXErXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBcSsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVcmlVNXJLT0srcDVtbUJrbWRqWFkzUU9qZ1RNRklPbjA4L0s2enpoV01NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzMzM2NTkzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMzI5Njg0OTc2XCJ9Igp9"  // PUT your SESSION_ID 


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
