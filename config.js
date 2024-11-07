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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_04_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICA4LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICA4NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDY5LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMjI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA2MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL1dBL3lYdHZHNzA3VVlOeW5yYmlMdVBNS21YL3Q0ZW83S1RVV25Ndk9iaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDQ2NDQxNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjc0MUNENzBEREIwMkRCREM4NDU4MEE4RjMwNEVFNzQ0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDkzNDI4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM0NDY0NDE0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTdCQUE4QThDMDBCNkIyQzc3Qjc3NUVDOTU4ODA4REVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwOTM0Mjg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1XLTRjZ3psUkNxcU1KcXFtNHlEX3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWZhMWQxZmMtNjJhZS00NmRkLTg4ZTItZWU5ZWVhOTMzZTQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgNTIsXG4gICAgICAyMjcsXG4gICAgICAxMTQsXG4gICAgICAxOTAsXG4gICAgICA2LFxuICAgICAgNjUsXG4gICAgICAxODMsXG4gICAgICAxMDEsXG4gICAgICAzOCxcbiAgICAgIDE2LFxuICAgICAgMjQzLFxuICAgICAgMjQ4LFxuICAgICAgMTEwLFxuICAgICAgMTAyLFxuICAgICAgMTMzLFxuICAgICAgMTMyLFxuICAgICAgMjE5LFxuICAgICAgMjQ3LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTc5LFxuICAgICAgMCxcbiAgICAgIDE5OCxcbiAgICAgIDE0MSxcbiAgICAgIDE1MCxcbiAgICAgIDExMyxcbiAgICAgIDEyOSxcbiAgICAgIDE0NSxcbiAgICAgIDM1LFxuICAgICAgMTIsXG4gICAgICAxODgsXG4gICAgICAxOTQsXG4gICAgICA1LFxuICAgICAgOTgsXG4gICAgICAxLFxuICAgICAgMjUxLFxuICAgICAgMTY2LFxuICAgICAgMjQ2LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFlXVldYNkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0NDY0NDE0Njo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNIQUhCQVouWC5CSUlcIixcbiAgICBcImxpZFwiOiBcIjE3MjE5ODUwOTY5MTAzMTo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORFdwZVVCRUluc3I3a0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBUTFB0U3E0bDBRNUlpOUJyNk9IS0E5RkpIdkFQTGZ4ZmRXeDZPL0VHRDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHhrOGRBclh3VHZndkRmVXZKSThqa2pyN3pGSHF0Q2NQK0l4VHZncWJ1aVFLSGZrNnZ6ZjRNODE1UWZyY25aa3o2c2tmMW5ZUlFFbHY1aHh6aGhvQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaUpPU0gwOUt6b1l0b3Y2YlZTQTI2MC9oaXU1WFVZL1plS0V3ck96bnR1VTA5YThESDVQMm13WXRBWXlBY1NYQi9ER3R4alJUTEpYd3Y3a1RIbEcrQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ0NjQ0MTQ2OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDkzNDI4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZvQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm9BLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaXVsWE5TcE40MzN2bjhYUHRsVFJwbFlucnc0T0NKbE81Y1F1RUt2d1IzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0ODA4NjUxMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDkwMzMzNTgyN1wifSIKfQ=="  // PUT your SESSION_ID 


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
