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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348063197147";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_25_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU3LFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3MEZsU0xCREFoMTlUcm8rRWJua2lRdUNINnVJaHFqMy9HSm5jVlBlY0pvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfYUVoMkQ4dFN3LVQySmQtTWJRVEJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxMmZiZjk3LTYxYjMtNGQ0Yy1hOGQxLWM4YzgwMzg0NmJiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDgsXG4gICAgICAyMTksXG4gICAgICA4MCxcbiAgICAgIDIwNyxcbiAgICAgIDc4LFxuICAgICAgMjYsXG4gICAgICAxNDksXG4gICAgICAyNDUsXG4gICAgICAzMixcbiAgICAgIDE5MSxcbiAgICAgIDcsXG4gICAgICAyMDksXG4gICAgICAyMzQsXG4gICAgICA5MyxcbiAgICAgIDE1OCxcbiAgICAgIDgzLFxuICAgICAgMTQ4LFxuICAgICAgMTc5LFxuICAgICAgODgsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMTQsXG4gICAgICA0LFxuICAgICAgMjE3LFxuICAgICAgNzUsXG4gICAgICAxMDQsXG4gICAgICAxMDksXG4gICAgICAxOTksXG4gICAgICAxMzEsXG4gICAgICA5OCxcbiAgICAgIDUyLFxuICAgICAgNTksXG4gICAgICAxNTYsXG4gICAgICAyMDgsXG4gICAgICA3OCxcbiAgICAgIDE5LFxuICAgICAgMTMyLFxuICAgICAgMTQ4LFxuICAgICAgMTIyLFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEJCQVZXQkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjMxOTcxNDc6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHSURBTiBCRURTSEVFVCBFTlRFUlBSSVNFU1wiLFxuICAgIFwibGlkXCI6IFwiMTY1NjE4Mzg0OTIwNjc0OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6TTBlUURFTE9MK2JrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOFgzWklhYkc2eTV5OGZoTjRCb2tjQzR4S0drRS95b1VtMHVpLy9ZRXZqMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0REhzQnpEVHdqVEluMS9aNFRDOFUreUcyWk9jTTRWNUc0MStiYXhBRWIxbERFc2lxa2hKWDJFMmlxSll2c0Z0YVhTQVlrWDNBdjZCZTgwNnFKcDVEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoSUx1cVFWQTVRQmFFdUJmNXdGaUhYUkNaeGdmZm1wMjRKNUZIQkpEdVl6SHJZcEUrVFlZRm5Wa1FoY3N4bU1qUGQzQTlaTnJLeHNDa01wNktsbitqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDYzMTk3MTQ3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIxMzQzMjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGRnhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZGeC5qc29uIjogIntcImtleURhdGFcIjpcImNDQU1CaGlHMG9CL1E3cnBJVVJoUStKVk5ubHNWbXRZbmJXTWxUTWliR2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxNjM1ODQ0NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIxMzM1MTcyMzdcIn0iCn0="  // PUT your SESSION_ID 


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
