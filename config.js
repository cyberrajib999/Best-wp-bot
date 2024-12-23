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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_50_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMzksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICA4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDUzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3VkNiYUo5b2d6b005WUFkS3kyTFRnaUo2RGNkZkVZNDQyQ2xvaGsxTDcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLX1Rxa2h5clN2ZTRxc09WSi1NNVNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzNTA5YTNmLTJjZDUtNGU4OS1hNGY0LTY4YzAyYTVlYWJkNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDI0OCxcbiAgICAgIDEyMCxcbiAgICAgIDIyOSxcbiAgICAgIDk5LFxuICAgICAgMTI2LFxuICAgICAgMTEyLFxuICAgICAgMjcsXG4gICAgICA3OCxcbiAgICAgIDE3NixcbiAgICAgIDE3MixcbiAgICAgIDExOCxcbiAgICAgIDE2NyxcbiAgICAgIDE2NCxcbiAgICAgIDQzLFxuICAgICAgMTAsXG4gICAgICAyNTUsXG4gICAgICAyMTQsXG4gICAgICA0OCxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNSxcbiAgICAgIDQsXG4gICAgICAxOTksXG4gICAgICA1MCxcbiAgICAgIDkxLFxuICAgICAgMjI3LFxuICAgICAgMTM4LFxuICAgICAgNTksXG4gICAgICAxMDQsXG4gICAgICAxLFxuICAgICAgNDYsXG4gICAgICAxNjAsXG4gICAgICAxNzAsXG4gICAgICAxMjUsXG4gICAgICAxODYsXG4gICAgICAyNDgsXG4gICAgICAxMjYsXG4gICAgICAxMjksXG4gICAgICAxNTcsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0FaQlA3V0ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5NzA3NjYyMDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzODI0ODM1MTg2ODMwOjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pEM2l4UVE1TWlrdXdZWUJDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVFozdjRzMDZVK0ZWNFJMTmtYV3Zxa3dMeWkyc1ZOamYraWNYREpsbHUwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxbTVmR0xDcU5ZbjBUaGhxMk1FRktEVncrV0l4cXJ2bnRNeEFPQ3I0ZS9MRzV6SkpxeHRTSkt4N241MnJxaGFMVGdNbVNaakdVL3U3Qkd0RURSOWxEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2bXd6M29lVXl1a0YzWWZvRCt2YkZNenkwb0hxNHdKVThzNHBUenJzYWE0R0JQMXZZQ1hIVis4MlgyVEpaVGRWeDRSSkVJaGJPek92MGxsUkROYWJBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTcwNzY2MjA6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk0Mzg0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs4V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzhXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUGFxS0VLa3hITkxSSTBZT2ZFTm5QSGw2UHE1aDZyc3hIb2RKRmVrVVlPMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MjEzODUxMixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzODI1MDEyNTYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",
  packname: process.env.PACK_NAME || "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",
  botname : process.env.BOT_NAME  || "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",
  ownername:process.env.OWNER_NAME|| "🧸𝗔𝗙𝗧𝗔𝗕 𝗕𝗥𝗔𝗡𝗗>>>🥵♥️👑",


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
