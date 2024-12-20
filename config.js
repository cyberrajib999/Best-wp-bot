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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_35_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTM2LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgyLFxuICAgICAgICA2MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlduOGx2NEVlY2lSd0xMaHhHUnhlRjBjRFhjOXU0WWZ4Y0dEc3VrNFJCSjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVqcXBPcVduVDZxd25Md1ZuRWl2ZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTRjOTYyYWMtMThhMy00ODBlLWEyZDQtZmRhYzI2Yjc5ZTgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDEzMixcbiAgICAgIDI3LFxuICAgICAgMTE2LFxuICAgICAgMzEsXG4gICAgICAxMjUsXG4gICAgICAyMDcsXG4gICAgICA5MixcbiAgICAgIDE0NSxcbiAgICAgIDE2MCxcbiAgICAgIDc1LFxuICAgICAgMjM5LFxuICAgICAgMTAsXG4gICAgICA5NCxcbiAgICAgIDE3NyxcbiAgICAgIDE1MSxcbiAgICAgIDQyLFxuICAgICAgMjA5LFxuICAgICAgMTIzLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDI5LFxuICAgICAgNjgsXG4gICAgICAxNDIsXG4gICAgICAxNTcsXG4gICAgICAyNDIsXG4gICAgICAyNTUsXG4gICAgICAyNDcsXG4gICAgICAzMixcbiAgICAgIDE4NixcbiAgICAgIDI0MCxcbiAgICAgIDIyMSxcbiAgICAgIDExLFxuICAgICAgMTI3LFxuICAgICAgMjA2LFxuICAgICAgODMsXG4gICAgICAyNTIsXG4gICAgICAxNDIsXG4gICAgICAyMTcsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVNYTlNWVjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMzMjI1MzMzNjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTc1MTg3MjIxMjYwNzA6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2Jnb3dnUTJxeVZ1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3dWRFRTVmWEtZU1FsZ0VGZ3drNlBjL2UrWWJ6VVl0alhsb2NIL2RzbVUwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdLZzR5ay80NGlFaFRVL0JDTXI4T1BEVTFzbkJPQnZOTi9vRytIQm9tZUkrM2VOdzdlQXk0Q3E5WVlDc3kxSWNFS2VUVUc3eDBLOTNLM1pGQ0FMR0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInV3SlRQaTk5YjFLRHJrYng2Zk4yNW5hSzRpcUdiWldGS2xDTWpZaW9hVHdKMGRkYzNucWltM2RoR2lIRVVkYVJpQ0xwZTZWeTZnZmM2Rlg2QUN6UENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMzMjI1MzMzNjozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDY5NDQ5NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
