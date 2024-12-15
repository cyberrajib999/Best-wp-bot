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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349160724127";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_44_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICA5MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICA4MixcbiAgICAgICAgMTI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDkxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxdlB0Q3k4b3VTK1dBV2N6VVV3T1VCZ1RuUmJrZG1HTDk1MENOeVQ4b1kwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhV1ZUakprbFNpZUZXNUxuUmlPTWR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQzMWY5MTRjLWJiZmItNDMwZi05ODdjLTMzYTBmNjhhODA1M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDIyNCxcbiAgICAgIDk3LFxuICAgICAgNzMsXG4gICAgICAyMzksXG4gICAgICAxMTYsXG4gICAgICA4LFxuICAgICAgMjExLFxuICAgICAgMjEsXG4gICAgICAyNCxcbiAgICAgIDE5MSxcbiAgICAgIDEzMixcbiAgICAgIDIwMSxcbiAgICAgIDEwMyxcbiAgICAgIDMyLFxuICAgICAgMTI5LFxuICAgICAgMTEwLFxuICAgICAgMTMzLFxuICAgICAgMTYwLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTg0LFxuICAgICAgODUsXG4gICAgICA4MixcbiAgICAgIDIxMyxcbiAgICAgIDI5LFxuICAgICAgMjQwLFxuICAgICAgMjAyLFxuICAgICAgMTc1LFxuICAgICAgNyxcbiAgICAgIDk0LFxuICAgICAgNjUsXG4gICAgICAyMTksXG4gICAgICA4OSxcbiAgICAgIDIwNyxcbiAgICAgIDk1LFxuICAgICAgOTcsXG4gICAgICAxNTYsXG4gICAgICAxMjYsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyUDkyWTkxTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2MDcyNDEyNzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ3J1aXNlIFR2XCIsXG4gICAgXCJsaWRcIjogXCI3Mzk1MTIzMzQ1ODM0MDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzaSsvQUNFTHYvL0xvR0dFVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiczd3QXZ3ZGdqNWdVTC9PWlBlenpRWERYVDZVM0Jwd2Eyek9WUkJoclpDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLY01iWGcyb2JHWjRzS3c5U2xqNFIrMXZJa1AyYm5RODBlci9jQ2RQcHN4K3pJKzEwcFYwWEsvUHNQd1pRdFpIeVdXcXZqUkRNQWdURzRMR1lmVCtEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4aitTZjZ5M0hLRk9sTE1zcThnZGQ5Z3NxSTRDVEV6OTJJaFU1TDl0QUR0SnByUzZSa0gxWWwyNTZVeFVqbHgzenRIVFB4QlJjSXQwZ1B2MndHQldBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYwNzI0MTI3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQyOTU0ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNR1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1HWi5qc29uIjogIntcImtleURhdGFcIjpcIlFaWExDVVd4VlhWN1pMVWFWN1BLaWdTbGh2UkJGSlRnRktYbHhkTFgydjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzczNzc5ODM3LFwiY3VycmVudEluZGV4XCI6MTcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNSw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc0NzE4NjQ3ODdcIn0iCn0="  // PUT your SESSION_ID 


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
