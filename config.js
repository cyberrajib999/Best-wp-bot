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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923030673336";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923030673336";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_09_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUb0c2bk91UjNwallqeTlvYzB6YzVERWpaakt5NVZoSWRPUDRhcTJzbWxNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAzMDY3MzMzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUUzQzBDMkIzN0Y3QzYzQUZEQ0VBQjdBQ0EwRDg2NjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMjE4OTY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRsVzJJdU15U2MtbThkOUFjVGdHYmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWRjYzlmOTgtZGE0Ny00ODAxLWE5YTQtN2RlZjRkYzk4YzdhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNixcbiAgICAgIDI1NCxcbiAgICAgIDE2MyxcbiAgICAgIDUwLFxuICAgICAgNzcsXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAxMzAsXG4gICAgICAxMzMsXG4gICAgICAzOCxcbiAgICAgIDE1MSxcbiAgICAgIDMxLFxuICAgICAgMTgwLFxuICAgICAgMTg1LFxuICAgICAgNDIsXG4gICAgICAyNTQsXG4gICAgICA1NCxcbiAgICAgIDE2MSxcbiAgICAgIDIxMixcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjUwLFxuICAgICAgMTg1LFxuICAgICAgOSxcbiAgICAgIDEwNyxcbiAgICAgIDk4LFxuICAgICAgNDIsXG4gICAgICA1MSxcbiAgICAgIDE2MSxcbiAgICAgIDIzMixcbiAgICAgIDE1NyxcbiAgICAgIDExMCxcbiAgICAgIDIwMyxcbiAgICAgIDE4NyxcbiAgICAgIDEzMSxcbiAgICAgIDczLFxuICAgICAgMTgxLFxuICAgICAgNjMsXG4gICAgICAyMzAsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0pDODdHRVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAzMDY3MzMzNjo3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAyOTU0NjUzMDgxNjgzOjc5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIldvcmxkIElzIE5vdGhpbmdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTGQ5c1VHRUl5Y3dia0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlqMXRML3FMblkrdEZYOHlBeUl2WkxLc0F6N2lDeXdnRVpHUVJtRVR3SFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU2FXWDE5RlhWT2FlWkdiR3RaSzJMS1czd0w0aXNQV1hoUElXa002K3JmVVYybkZsZVZQcVZkUzY1N3gvMndhc3R4YVl1U2plbkY3MHA2SHlydUdJRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY3kyWHRPNFRsSXU4bXpDTW1Rd2ttelZiSFdoNVp5NGk2SGc5Y0hiV2oramxmUkRxVjd3a1lwTUYvb2pKaUFpbVNvWWRmUmNuUFpsbW5zSFNHRnVnaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDMwNjczMzM2Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjE4OTYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVhxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrMWdUVFhneFVaQTNBaHpadWpUbnhMQTBPS0ZlT2hicmJHaDVPYUprYzhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTcyNjE0NzQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTEwNDc5NDUzMlwifSIKfQ=="  // PUT your SESSION_ID 


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
