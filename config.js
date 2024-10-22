const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94779702531";




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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_17_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDk3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgODYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlEvN3FlVjBxZ0lUTnFoOTBoZ0xjdFhxbDVKd2ppOFpHMWVLaUtoMkJTK289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxIWUk4ckkwVE0yQ1M0VXo5dlJfRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDU2MjBlZTItZjA0Yi00Nzg0LTlmMmUtMzJkM2MxNTBkODBjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMTY0LFxuICAgICAgMTAxLFxuICAgICAgMTY0LFxuICAgICAgOTYsXG4gICAgICA5NSxcbiAgICAgIDk4LFxuICAgICAgMzUsXG4gICAgICAxOTAsXG4gICAgICAxMjEsXG4gICAgICAxMDMsXG4gICAgICAyMzIsXG4gICAgICA5NixcbiAgICAgIDI3LFxuICAgICAgMTQzLFxuICAgICAgMjE0LFxuICAgICAgMTIwLFxuICAgICAgMTIxLFxuICAgICAgMTgyLFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDE3NyxcbiAgICAgIDI1MixcbiAgICAgIDE3OSxcbiAgICAgIDE0OSxcbiAgICAgIDE1NyxcbiAgICAgIDE4MSxcbiAgICAgIDE4NixcbiAgICAgIDk3LFxuICAgICAgNjMsXG4gICAgICA4OSxcbiAgICAgIDE5MCxcbiAgICAgIDI4LFxuICAgICAgNjUsXG4gICAgICAxNjUsXG4gICAgICAyMDMsXG4gICAgICAxODYsXG4gICAgICAyLFxuICAgICAgNjAsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlc0NEhETkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc5NzAyNTMxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4L+Q4Ly14LyG4LyS8J2Rs/CdkorwnZKa8J2SkOC8kvCdkbrwnZKV8J2Sk/CdkorwnZKO8J2SivCdko/wnZKI4LyS4LyG4L+Q4Ly1IOqnglwiLFxuICAgIFwibGlkXCI6IFwiMjM5MjAwMDgzNDAyODA5OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhODdhSUhFT0xMM3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNDRlaFliQmVXTEhGL1laVVFVS25iSUlRSnk4eFdOUCt1ZXNTM1gwUTVUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0S2J3L21CVzRvUjJ2RmVvaUZlNGlVa0dSdFNQTDBQSG8wNXFjcjN1R0dyWXgvY0pJUUl4a2dpbHRHV0J0MnFKTkJMWk1BRG5jcEdDMDgrYVlIZ3BEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyRGhSUHVFZWJIdy9CZEN0Ymt1MDIvZjIzUjN1d3RPNzd5Uzh6ajNqYmo3TlBKb2FpbVV5aE9pMWdJVjYzdXJ3WDl2bW54bmgyNXdhejNSNEhDSmlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3OTcwMjUzMToyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MDMwNDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOV05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5XTi5qc29uIjogIntcImtleURhdGFcIjpcIk1OUHVhcElJUkFvSS8ybXZGQ3lsM2xGbjJNbjhqcGVENzFyaUtMSFoxODg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1MjE0NDk0MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
