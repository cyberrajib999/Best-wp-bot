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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923097076620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_05_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDg1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjksXG4gICAgICAgIDg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRvNmg3Z01namZqbWhaMnF3ZlJNdTRyUXNrVGFJUDRYczBkbjNwZjUxcnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9iRXYxaUN6U0VLRHVUOHFZX1RLRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTEwMzMyZjQtN2UwMS00MjQ2LWJlMWUtMjhmYzQ4OTQwOTNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDI0MCxcbiAgICAgIDEzLFxuICAgICAgMTU2LFxuICAgICAgNTksXG4gICAgICAyMjIsXG4gICAgICAxNDYsXG4gICAgICAyNTEsXG4gICAgICAxNjgsXG4gICAgICAxODgsXG4gICAgICAyMDMsXG4gICAgICAyMDMsXG4gICAgICAzOCxcbiAgICAgIDE2NCxcbiAgICAgIDI1NCxcbiAgICAgIDIsXG4gICAgICAxODEsXG4gICAgICAzNixcbiAgICAgIDEyMixcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDUwLFxuICAgICAgMjYsXG4gICAgICA3LFxuICAgICAgMTI3LFxuICAgICAgMjI5LFxuICAgICAgMTgwLFxuICAgICAgMTc2LFxuICAgICAgNSxcbiAgICAgIDc5LFxuICAgICAgODgsXG4gICAgICAyMjQsXG4gICAgICA1NixcbiAgICAgIDc5LFxuICAgICAgMTYzLFxuICAgICAgMzgsXG4gICAgICAxNjYsXG4gICAgICAxMDgsXG4gICAgICAxODcsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSE5LUkY5Mk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5NzA3NjYyMDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzODI0ODM1MTg2ODMwOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pIM2l4UVF2dmlsdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVFozdjRzMDZVK0ZWNFJMTmtYV3Zxa3dMeWkyc1ZOamYraWNYREpsbHUwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1RVhVbzhqYUdsOWRyVm9BclNIQkFEOC9Za1VEUVBDMTI2NDEzWnhzSUdZeXUvdlQ0QXBGaldlejROZzNpcjE5VmNxMXhiYUdvL0ZoVEh1dndONVVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHOG1ESHVoNENLTFFEWm81dnF0WlVWSlhxcFhoVEZ0NWVBSDR4ZTAyK3Vxb0MyWkIrdmNsWVhVamhaWnJwSkx6N0kza3BXczhpUU5RS1p3S21LMFVqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTcwNzY2MjA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk2NjMzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUs4WFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzhYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMlF3VysrZW40d2FUZGtjSUpQOThpVHpZamREek8zUmxMcWRVYmxubHVsYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MjEzODUxMixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "WATTOO",
  BRANCH  : process.env.BRANCH  || "Aftab",
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
