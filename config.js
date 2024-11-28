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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICA4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCa1pYTy80dTR0aTkvN3BHZkJzY0h6cS9RRUFjYW5rQ2dJYWx2bk1ZTFk0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5MjY5NzkzMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUE3Q0U1RkQwN0QzOUY2QkM0RkNDRkFENENFOEIyNjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyODAxNjIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlI1OEphOHZtVFc2YmpCbk5UX0ZhSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmI2NTQ0NDItOWNiZS00Njk5LTk0MjAtODYwM2E3Y2MzNzIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDEwOCxcbiAgICAgIDIxNyxcbiAgICAgIDExOSxcbiAgICAgIDE0OCxcbiAgICAgIDEwNyxcbiAgICAgIDExOSxcbiAgICAgIDgyLFxuICAgICAgMjE4LFxuICAgICAgMjAsXG4gICAgICA2NSxcbiAgICAgIDEzMCxcbiAgICAgIDEyNCxcbiAgICAgIDE4MSxcbiAgICAgIDEyMixcbiAgICAgIDI0MCxcbiAgICAgIDMwLFxuICAgICAgMTU3LFxuICAgICAgMjAsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICAyMDAsXG4gICAgICA3OSxcbiAgICAgIDExOCxcbiAgICAgIDI0MyxcbiAgICAgIDQ3LFxuICAgICAgMjExLFxuICAgICAgNTIsXG4gICAgICAxMDEsXG4gICAgICA3MSxcbiAgICAgIDMzLFxuICAgICAgMjUwLFxuICAgICAgMTE0LFxuICAgICAgMjE3LFxuICAgICAgMTAsXG4gICAgICAxNzAsXG4gICAgICAzMSxcbiAgICAgIDIxNCxcbiAgICAgIDU2LFxuICAgICAgMTc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVYWkxGQk0zXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTI2OTc5MzA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY4MDQ0OTc0MzQyMTU2OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dNbHJZSEVNN29vYm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1VHVFQ1BtbENJRzNxOVJKTW9aSFlEVDdsaThBbjdhNFFkbTZzek9HUW5VPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNnMkgrQWEzSy9lRk53TzFVbDcwWW9NTW9LNmsxay9FWUhHZm1uM2pqYnNxbkgrWDV4MU5GNTNNTlBDbXBJbktaYkN3VndJMVFQZ2Y1NGJBeGVlNkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZoTDNnNzRHVXFYMzJ4aSttNUc4emQ0cytaK2RDRC9DVFlBc2tqM1EyMGowNlhrWk9ROTBSNHF6dlFSTVhMTHlxcGpXSDFvR0NuTFBTN3BQcGxXdGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5MjY5NzkzMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4MDE2MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLc3RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtzdC5qc29uIjogIntcImtleURhdGFcIjpcInZKU2sxY2t1TVhHZEV6dWxSUm9oWjJaZ2wzeFc1eUFqT3I4RFE3ZmQzdmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5MjY1NjQxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjY5NTAzNDk0NlwifSIKfQ=="  // PUT your SESSION_ID 


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
