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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_00_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMTAsXG4gICAgICAgIDk5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRYXVFZEt3QTl5Zkxqa2pDbWhKOW42OWMwSytpM2RSbjZCL3RaQmtEYUZRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOMm1EOTk4TFQzeUwydFJ6QTFDdlZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3NzQxMTNlLTY2Y2EtNGY5ZS1hMzBlLWIyZWYwOGY5MDNlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICA0MCxcbiAgICAgIDkyLFxuICAgICAgMzQsXG4gICAgICAxMDksXG4gICAgICA4NyxcbiAgICAgIDExMyxcbiAgICAgIDg4LFxuICAgICAgMTU1LFxuICAgICAgNixcbiAgICAgIDE3MixcbiAgICAgIDEzNSxcbiAgICAgIDEwMSxcbiAgICAgIDE5OCxcbiAgICAgIDE5NixcbiAgICAgIDQsXG4gICAgICAxNDcsXG4gICAgICAxOTMsXG4gICAgICA5MSxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA3NixcbiAgICAgIDI0NixcbiAgICAgIDI0NSxcbiAgICAgIDIyNCxcbiAgICAgIDIyMCxcbiAgICAgIDc0LFxuICAgICAgMTE1LFxuICAgICAgOTIsXG4gICAgICAyMjMsXG4gICAgICAyMzYsXG4gICAgICAxNzAsXG4gICAgICAyMjEsXG4gICAgICAyMzQsXG4gICAgICAxNDYsXG4gICAgICA0MixcbiAgICAgIDIzMixcbiAgICAgIDY4LFxuICAgICAgNTYsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1hMVjNONUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc5NzAyNTMxOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4L+Q4Ly14LyG4LyS8J2Rs/CdkorwnZKa8J2SkOC8kvCdkbrwnZKV8J2Sk/CdkorwnZKO8J2SivCdko/wnZKI4LyS4LyG4L+Q4Ly1IOqnglwiLFxuICAgIFwibGlkXCI6IFwiMjM5MjAwMDgzNDAyODA5OjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhODdhSUhFTmFJNExnR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNDRlaFliQmVXTEhGL1laVVFVS25iSUlRSnk4eFdOUCt1ZXNTM1gwUTVUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2SER6VVd5dk1rVVhCTWZyZHp4NTAzd25FdFVzakp4c1VpOU90VEZvcWcvcFRQSEYrVWlEcDJnUUxXTWFYNUpOdWpVVUJaUHZNV1B3N2VQdUI5U3ZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIT00zKy9iVUhiN1V4STFaWU1BbENKeWpmaWpOdm5nVzlleHN3bUpYRDNTYUsySG9xMDdaMDBJdW0xZ2dWNGI1SThNbEczZ0pjRnllb1BzYVRyeEVBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3OTcwMjUzMToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MjcyMjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOV05cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5XTi5qc29uIjogIntcImtleURhdGFcIjpcIk1OUHVhcElJUkFvSS8ybXZGQ3lsM2xGbjJNbjhqcGVENzFyaUtMSFoxODg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1MjE0NDk0MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "꧁࿐༵༆༒𝑳𝒊𝒚𝒐༒𝑺𝒕𝒓𝒊𝒎𝒊𝒏𝒈༒༆࿐༵ ꧂",


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
