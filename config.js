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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348032110357";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_11_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvY3RkMTBaSnhjc0dMR0ZHYUR0TzhVVDhmQWlBN29INHlFbVFvWWltZFRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnMExzekU4SFRYNkFwaVNWZlRISnlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVhNjg0MzY5LWI2OTAtNGNjZS1iYTk5LTYwZjcwYTg2NzA0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICA1MyxcbiAgICAgIDU0LFxuICAgICAgMjgsXG4gICAgICA5MixcbiAgICAgIDExOSxcbiAgICAgIDIxNCxcbiAgICAgIDEyLFxuICAgICAgODcsXG4gICAgICAxOCxcbiAgICAgIDE1NCxcbiAgICAgIDE1MyxcbiAgICAgIDE0NSxcbiAgICAgIDg0LFxuICAgICAgMTAxLFxuICAgICAgNDgsXG4gICAgICAyNTMsXG4gICAgICAxOTIsXG4gICAgICA2NyxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAyMDgsXG4gICAgICAyMzQsXG4gICAgICAxMjMsXG4gICAgICAyMDYsXG4gICAgICAyMDUsXG4gICAgICA0OSxcbiAgICAgIDM5LFxuICAgICAgODIsXG4gICAgICAxMjIsXG4gICAgICA5MSxcbiAgICAgIDE2NyxcbiAgICAgIDExMSxcbiAgICAgIDIwNCxcbiAgICAgIDk5LFxuICAgICAgMjM0LFxuICAgICAgNTEsXG4gICAgICAyMDMsXG4gICAgICAyNDMsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0hSM0s0NTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMzIxMTAzNTc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU1NTg5MjkyNzI0MzMwOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHpsekxRREVMdjh6TG9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWQUFLYUpJL05KbWw4aHlxSklEcUVRNkFUdE9lTDB4OU9mQi80dExpL1ZjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjA4V3Y5V1hJM2ZyMWwyMFdJWEpFbitpL2xiMjg1VjcvbTl5eDdsTXpyNTF2by9wNW84QVNIQTYxOGxqaEs0R0t6NkdnZk1HZlowdkQxNGJOak5idUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkloYXNKek1SMXlNbzNUbVp2c09xM2dZMkhoejN5MjkydGUrblF6VGw3SGxDVkdrTDV2OVN2ay94eWFKR1ZvVUYxd01nb0RiUGlnNmJYQnZVR1FNVERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMzIxMTAzNTc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzUwODY3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA4MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDgwLmpzb24iOiAie1wia2V5RGF0YVwiOlwib3N1QVFRS3lyeUdBVjhNTm1tVjBOQ3Z5Q1poMlFxRDVRb0xnZlBvdEJybz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MTU2MTY0NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzMzOTk3NDk1OFwifSIKfQ=="  // PUT your SESSION_ID 


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
