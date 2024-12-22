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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_52_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhpdnN4TzBvR201SWlUNXhoT3ZRRGtNWjcvMnhtV3RqSGZXSkh0UjI3eTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImt6a2dnT0F1UnctajBKRjBzZ1kwQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGUwNjY0NjUtYWYxOS00MDFiLTgxMDItZjQ5M2ZiZTdhYTEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDIwNCxcbiAgICAgIDE3NixcbiAgICAgIDI0OSxcbiAgICAgIDQzLFxuICAgICAgMTk4LFxuICAgICAgNjUsXG4gICAgICAyMDIsXG4gICAgICAyNyxcbiAgICAgIDExMCxcbiAgICAgIDE1NixcbiAgICAgIDIwMSxcbiAgICAgIDE1MixcbiAgICAgIDcwLFxuICAgICAgNTAsXG4gICAgICAyMDUsXG4gICAgICAyNTIsXG4gICAgICA0MyxcbiAgICAgIDIxLFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgODksXG4gICAgICAyOSxcbiAgICAgIDIyLFxuICAgICAgMTg0LFxuICAgICAgMTczLFxuICAgICAgMjA5LFxuICAgICAgMTcsXG4gICAgICAyMTgsXG4gICAgICAyMTYsXG4gICAgICA4OSxcbiAgICAgIDEyNyxcbiAgICAgIDIzMixcbiAgICAgIDE1MCxcbiAgICAgIDE0OCxcbiAgICAgIDExNixcbiAgICAgIDExNixcbiAgICAgIDIzMCxcbiAgICAgIDk5LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlM4RFRBQzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTcxNzY0NjY1ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiam9rZXJcIixcbiAgICBcImxpZFwiOiBcIjE5NzgyMjI2NzgxODE3MTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xSTRKc0VFTFRJbTdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic3VlL25PTlVzMklrUzQwS0pTSzdIbis3UWdwS3hwNC9jYm9GSkhZSy9pVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSbFlWYTlNeDVKUEd2N214eDhxTFlzS0g4Uno5WnlxTkdTdzFJNHZQTnczYUVEN2tMOEtVT2w2WE5wbC96SitOWGtpKzk3NWJMWFhQUGxkWmF0a05EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsckx5T0xUSmZaTTNRT2l5aG9aZjVzeDdicUV4MWxna1BjeEtEUWhkUmtoYlJPOFluUGhaYkJvNWVGY2NNVnBtaU9WUzZGaUxDVlNQazZpM05XZi9qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3MTc2NDY2NTg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3OTYzNDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMVXFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxVcS5qc29uIjogIntcImtleURhdGFcIjpcIisyU2pkbU83SDVncldJQnM5QUlvMkpHR3NRbWRpZzFBb2hvQmdWajQvaVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEzMTkzODg5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0Nzk2MzUwNTU2XCJ9Igp9"  // PUT your SESSION_ID 


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
