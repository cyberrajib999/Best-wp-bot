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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_08_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVwVlJUVTE3cFZqUzArVkNzbDBtenhoTWNOSzdGRU55Tkhqc3VEazRRTms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImYxS1dvMnJwUmFTZThTLVdkMWhWQUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjQ1MmRkNGMtYmZhMy00NzAyLTg5NmEtZGNkNWZiNDI2OGUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYyLFxuICAgICAgMTI0LFxuICAgICAgMjQ2LFxuICAgICAgNjUsXG4gICAgICAzNixcbiAgICAgIDUwLFxuICAgICAgMTA4LFxuICAgICAgMTIzLFxuICAgICAgOTcsXG4gICAgICA5MSxcbiAgICAgIDI1LFxuICAgICAgNDEsXG4gICAgICAyMTQsXG4gICAgICAxMixcbiAgICAgIDIwMCxcbiAgICAgIDExNyxcbiAgICAgIDYxLFxuICAgICAgMjU1LFxuICAgICAgMzMsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAyOCxcbiAgICAgIDE2OSxcbiAgICAgIDExNyxcbiAgICAgIDI5LFxuICAgICAgMTU0LFxuICAgICAgMTczLFxuICAgICAgMjA4LFxuICAgICAgMTA3LFxuICAgICAgOTYsXG4gICAgICAxMSxcbiAgICAgIDEwNixcbiAgICAgIDEyOCxcbiAgICAgIDkwLFxuICAgICAgMTgzLFxuICAgICAgOTgsXG4gICAgICAxMSxcbiAgICAgIDE0MSxcbiAgICAgIDEzLFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI0N0JDSjZRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMzIyNTMzMzY6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3NTE4NzIyMTI2MDcwOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tYZ293Z1FqNzZLdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwid3VkRUU1ZlhLWVNRbGdFRmd3azZQYy9lK1lielVZdGpYbG9jSC9kc21VMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvcUZwZGhhOWNtOWJIWmZweVBkZjVBYStWS1IrRFR6RW5ST2h2cW5GeHlFV2FSRlY4UDBlaE5FcmhNTWVBTGZzNFNna29QMGhxMzlqdTBqTkgzUzRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDTzU0Sk5pRXNWSTl2WEROL2drS2Y5MVFxWE53RjcvS09qbVBFYlJScll1VEhWcEZSR0VVV3EzeTV5Q2ZtZ3c5K0xPalFtV3FlQkx4Q1hFRk03VXhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzMzIyNTMzMzY6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1MTY0OThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
