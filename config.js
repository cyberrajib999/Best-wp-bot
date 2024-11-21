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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234 8103902692";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_19_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNixcbiAgICAgICAgMjAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5pYzJxdFR0bEhKZGYwOUNMbkloV1dMeXY4TUQwQm9qbS9MQXZjTkhqdnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMzkwMjY5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEYxMTlFMjFCOUM5M0YwM0M2NDlDRUU3RDk2REU5QjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTkzMTUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMzkwMjY5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUFDNjU5ODYwOUZFMDgyRjJERDAwNzdCRjgwODNEQThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTkzMTUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMzkwMjY5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkY2Qjg0OEY2NjI5NjJDRjA5QzdEMDE0MTE3REFBMDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTkzMTU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMzkwMjY5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTM4QkE1RkI2OUEyOTQyNjc4RTY4RkM5NzY3NDREOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTkzMTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImkzYVRENGVCU2ZDTHZIZVV0d182ZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzI4MTI3ODYtNjU3MC00OGQ5LWJjYWMtNTEwNGEzODJmNWZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTA0LFxuICAgICAgMzEsXG4gICAgICAyNyxcbiAgICAgIDI0MixcbiAgICAgIDEzMCxcbiAgICAgIDIyNCxcbiAgICAgIDk0LFxuICAgICAgMTUxLFxuICAgICAgNTIsXG4gICAgICA5MCxcbiAgICAgIDYsXG4gICAgICAxNCxcbiAgICAgIDI1MCxcbiAgICAgIDI0OCxcbiAgICAgIDE2NSxcbiAgICAgIDgwLFxuICAgICAgMTY5LFxuICAgICAgMjM4LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTU0LFxuICAgICAgNCxcbiAgICAgIDI1MCxcbiAgICAgIDE1NixcbiAgICAgIDkxLFxuICAgICAgMTA4LFxuICAgICAgMTEyLFxuICAgICAgMTk0LFxuICAgICAgMTg3LFxuICAgICAgMTk1LFxuICAgICAgMTkyLFxuICAgICAgMjIzLFxuICAgICAgNjYsXG4gICAgICA5MCxcbiAgICAgIDE1NyxcbiAgICAgIDUsXG4gICAgICAyNDQsXG4gICAgICAxNjksXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFlTQlBTMkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDM5MDI2OTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE3MzEzMDEzOTYwODkzOjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWRtaW5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLblY1ZUFIRVBxQ203a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZkcEZRNVdlWVQrMDFMSldkV1pJR0UrdDc0cWtIRTVzVnlSQ3NNT1kya289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHJmcU40cU5GNE1BZ0JGTzRvVU5CQTk0WUlsb3hnRzRWc0ZJTEc2R0lodkhGTWhmdW1hRndUcHhVTUFLenRxRk1MNldWNjZYeGpPVHBzL0szamJzQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiblR6Vy9qWUVyRFFtaWhaSlFPdXhQUXE4VjQ4dWNCekdXa0p4ZVFVekpVN1dsTnFNVjVRbzk0dkxPYjV3ckhIQUZWYVdVNGMranc0QTYwc1VjN2ZjZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMzkwMjY5MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDU5MzE1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlnV1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWdXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOXorSStFbU9weDU1Qk9uVmpxVFl2b2VkUW56MXZUUkJQNlFJUUdBQ1JIMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDgyMDQwNDg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA1OTE3MjUzODdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "icecoder-XMD",
  ownername:process.env.OWNER_NAME|| "icecoder-X",


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
