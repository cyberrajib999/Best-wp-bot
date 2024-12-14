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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_27_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYwLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzLFxuICAgICAgICA2MixcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIms1WkNnWis1N1VmK1g3MXk5YXhiT1ZVUHZDTjE5OFdvNUFCVkNlcGtrN1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZSQm9wTFpNUXRXcWpvQnFsOXRIaVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ5YTFjNjItNjY4My00MmQxLWIzMzEtOTcxZGU1ZmNmYTQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMjQyLFxuICAgICAgMjI5LFxuICAgICAgMjQ4LFxuICAgICAgMjMsXG4gICAgICAyMTMsXG4gICAgICA3OCxcbiAgICAgIDUyLFxuICAgICAgNzcsXG4gICAgICA1NyxcbiAgICAgIDE1NSxcbiAgICAgIDE3NixcbiAgICAgIDE0NSxcbiAgICAgIDc4LFxuICAgICAgMTE2LFxuICAgICAgODQsXG4gICAgICAyMTcsXG4gICAgICAxOTAsXG4gICAgICA0NCxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDEyMixcbiAgICAgIDIzMSxcbiAgICAgIDgsXG4gICAgICAxOTksXG4gICAgICA5NCxcbiAgICAgIDM3LFxuICAgICAgMTc5LFxuICAgICAgNTgsXG4gICAgICAxMTUsXG4gICAgICA0LFxuICAgICAgMjE2LFxuICAgICAgODYsXG4gICAgICA0OSxcbiAgICAgIDExMSxcbiAgICAgIDgsXG4gICAgICA0MCxcbiAgICAgIDIxMixcbiAgICAgIDc1LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1DWkw3VkxMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NjgyMjYzNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUEFTSU5EVVwiLFxuICAgIFwibGlkXCI6IFwiMjgyMTQxMDk5NDE5NTg6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZlkxdUVCRVB6Wjg3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjc5QTZyYndBeXBUbmJsekxSam9MSGEzR2tnYjhadjF4WXNkcGdMcXpFa2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUZHdzNNaVI3RkdncS9qNGVMNEtsNzJqcFNWSEw0SHJvR1JKdThmemZuMmxObUQ1cDRCZ0E3K3RRWlFaRTRqcXp6dk9FOHcyTnZqWGJ5ZXAwZlY1Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibXVFTlkyOHNzUG91Vk93YUxGL3dDOExlMlltVzNLeWtCUlYvd0FhMEJPSnp5MDJhcmtkZEZmOEVEWjFWVDJ5aDNienc4bDFyc0tFUXBiVHM2Vk1taXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzY4MjI2MzQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MTQzMjMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGtBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQa0EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEQ21VcWlCd2xmaTUrNlMvdWQ3L2ZydWsya3psL0lyT2l6QTUxTC90bDhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ3MzI3OTUxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDE0MTQwODM2OFwifSIKfQ=="  // PUT your SESSION_ID 


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
