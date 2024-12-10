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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_36_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTkwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyMUFqT2lsWW9leHBXangrQVlRbUdiZEtHUm5iallPc2dlWU4wNGloRCtvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTQzNDU4NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4NjQyOTRCMkNDMEMxNjJERTcxQjYwNjEwRTg0Qzk2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg1OTM5MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNTQzNDU4NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQwQTZEQkNDMUZCMzY1MTcxQjVGNzJBNUQzRTQ1OThEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzg1OTM5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmVE5ESUd6NVN5aWQ4TWhLNDZsWFRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3MDA3YmJmLWEzYzktNDNhNC05MWJmLTlmOThmODEyZjQ3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDYwLFxuICAgICAgMTkzLFxuICAgICAgMTI1LFxuICAgICAgMTIxLFxuICAgICAgMTk5LFxuICAgICAgMTgwLFxuICAgICAgMjQzLFxuICAgICAgMjUxLFxuICAgICAgMjI2LFxuICAgICAgMTE3LFxuICAgICAgMTIxLFxuICAgICAgMjU1LFxuICAgICAgMjUwLFxuICAgICAgMTU3LFxuICAgICAgMTM0LFxuICAgICAgODcsXG4gICAgICAzNSxcbiAgICAgIDE2MSxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDE2NixcbiAgICAgIDE1MCxcbiAgICAgIDE0NCxcbiAgICAgIDY0LFxuICAgICAgMTM1LFxuICAgICAgNzIsXG4gICAgICAxNSxcbiAgICAgIDE0MixcbiAgICAgIDAsXG4gICAgICAxMjEsXG4gICAgICAyMDEsXG4gICAgICAzMixcbiAgICAgIDE2NCxcbiAgICAgIDYxLFxuICAgICAgMTYzLFxuICAgICAgMjMzLFxuICAgICAgNDgsXG4gICAgICAxNDksXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFlXTUI5TFFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNTQzNDU4NTg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLQkNC70LXQutGB0LDQvdC00YAg0J/Rg9GI0LrQuNC9XCIsXG4gICAgXCJsaWRcIjogXCIxOTE0OTU2MzAwMDQyMzg6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTNHN3R3SEVMYXc0cm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYUDVlbk1NZFd4K051amd4M2JGaENpVS9hbVpja05WZTVVcWpMZVpYMjBjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY5Sm5PcHJTSkFiV2xzbFVNRkdtUXpKbUhBOUIxam9FOFRwMEIxVHFDaGNTK2JOcTBKWkRjQ2lZdmtjZThIZFlsU0FOL01Najhhc0dXOGhQbm1FK0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJ2UDZ4RldTWHExMEl3MFYvZGZ4Nk51RkJpUHRaTng0QnAxK2VUOVVUSzBBQU5MZFZjY0lFVURjM0IyMXdqcUczdW9yT1FyeENON1FKWlJsUTNkSEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTQzNDU4NTg6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODU5Mzg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkY2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGRjYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0MlVDbDFWQTdCWUFJSjlEOEk5WFJtQ05lU0N1dnJPbVA5UVFhOWpNODFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzM3OTc0NTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzg1ODk0NjQ2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
