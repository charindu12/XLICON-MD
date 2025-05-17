const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94762890901"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'charindunuwan51@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94762890901' 
global.devs = '94762890901';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFVWW10T3dpS2hGYUZhWWVFKzVnWXdWeFZVMU9hYVc2anBmMFdxRkZrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkg4a3FPeDM4VW0zZGJ1bnJqTkkvTXZmSkRnOTh0YStoZVJJVnhZekpCZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRGNic2dXb0JsUC95MFNQQzVtMUN1V0ttWE1UTWFJV09jZzV1dWNrbG1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcE1RR3hZaWpUeGR3QVRXU3h6aDBxaXB6cGpCNG9OZFRVVFRLTGliQmtZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHc0JlNDhKT0FxM1I2VWtlQXBXL3RjTWdMRENFdnZObWJIWHdKRXgvVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRpMkdBZzEySHRGUm4vMm1LcEZKWFBJSDVOWGRHRlJlc0FPQkthaDYxRXc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNFJMa1AxWlpBcGg0NlJUTEtnTGJZbXdlZGxIU21zbC84YW1ERnUvM2FYS01HZS9SOGxrM1lFM1ArSFFaeGJySU1pcVhlZ1NoZWc0WnRTSTdleFppZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjY3LCJhZHZTZWNyZXRLZXkiOiJTUFN6L2IrUGljMThNaEZtcW5zcE5Sb0E2dk1vN3BPT0ROelExR0JQNC9vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSM0RTSWpmSVE5LXRjY0pMRjNJQllRIiwicGhvbmVJZCI6ImZiN2VlN2FmLTA5ZGMtNDlkNC1iYjI5LTQ2ZDYyYzY1NGVmZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlM1BaYk1qTm54RHIvNU1KTnI1WVcyVXJMZm89In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5iMkt0V2Z6YjhONDh1VDhWVnovVXRuNjJmaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kvbDZlVUZFS0xWb3NFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InQwQjhXVGhWUy9DbkhuR3dGMTloOG9ZQk1tM3VHY09HdUpQUEVpcXFSWE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IitDNFNscU80bThDT3c1WFZFeUViaFNPVzlJT0Y1ZHk0ZjlLMkNEd3FLWHdOL2JpR2VNb0hqZXhsQXpxaThhUW1QcFQvVjBta2JzaTNZczhXSE96bUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVZlE0K1BYQWZhUGl6V3pxeU95MWhWMEsxN0l2cXJibmJEc0RVVm5CSzFOR0lYWGppOUNrQkd5UVlZc2ZSVXJDekh3cVY0b0lPbS9kVnppQ0c5dkJoUT09In0sIm1lIjp7ImlkIjoiOTQ3NjI4OTA5MDE6NzNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI4OTA5MDE6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmRBZkZrNFZVdndweDV4c0JkZllmS0dBVEp0N2huRGhyaVR6eElxcWtWeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzQ5NTU4OX0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '94' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
