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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_00_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdLY0pxcDdjTlgxYW9HOWVOellTWUF1aCtDMGRiZklBa0tiMDQ5bnNiRDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlV5XzZBdVh0UzItQ20tZkdzY3BJS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2Y0ZTdlODQtNjczMi00NDllLTg2YzAtNWZjNTdhMzc3OTYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE1OSxcbiAgICAgIDExMyxcbiAgICAgIDIyMyxcbiAgICAgIDE4MSxcbiAgICAgIDE0NixcbiAgICAgIDEwNixcbiAgICAgIDE3NixcbiAgICAgIDIyMyxcbiAgICAgIDEyNixcbiAgICAgIDU1LFxuICAgICAgMjE1LFxuICAgICAgMTEyLFxuICAgICAgOCxcbiAgICAgIDI0OCxcbiAgICAgIDUwLFxuICAgICAgMTcwLFxuICAgICAgMzcsXG4gICAgICAxMjYsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjI2LFxuICAgICAgMTUxLFxuICAgICAgMjUyLFxuICAgICAgMTU0LFxuICAgICAgMjIwLFxuICAgICAgMzgsXG4gICAgICAxODQsXG4gICAgICA3MSxcbiAgICAgIDM1LFxuICAgICAgMCxcbiAgICAgIDEyMSxcbiAgICAgIDE2MSxcbiAgICAgIDEwOSxcbiAgICAgIDEzNSxcbiAgICAgIDIzNCxcbiAgICAgIDQyLFxuICAgICAgNTEsXG4gICAgICA0NCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTRldZQ1QyNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyOTA1NjIwODEwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1OTM5NTYwNjA2MTI3MToxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNajY3OUVGRUorUXNyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxJbUlGUmhGYXVWcFhMTWo3ekR3bG9lUS9yNWtkdUx2dVdXL05tUVRjMms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYVlFK3ZqUnBYOW1aT0k3WU1oWFhvWjU4ZnJKTGVmWjE3NHY5VGZxbGVkY1lVRGZjODgxODNZejc5MUpWOHBWRzZhd21RREF1N01lM0JEUkgzL3dpQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUjBzOUl2RFdyeVhDTDh5REZhVGNYaGhLWnFHQWFOYUdub2kxTnBwTk5WRkFXWE9DNlBoZWZNQUJveUxSRU1MYzRGZnFvTHRycTJ1YkdhSzJ3KzByRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyOTA1NjIwODEwOjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzA2ODgzNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY0V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjRXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTjVaWlFRUFpFc0FTWGdxWm85NUZqbVdvWEl6Um90dkZZY0lVSWp5NzdTQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTEzODgwODk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyOTA0ODQ4NTM0XCJ9Igp9"  // PUT your SESSION_ID 


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
