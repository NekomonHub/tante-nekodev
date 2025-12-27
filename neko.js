/** Credit : NekoDev.mjs **/
/** Github : NekomonHub  **/

import chalk from 'chalk'
const log = console.log
function wait(ms){ return new Promise(r => setTimeout(r, ms)) }
const pink = chalk.hex('#ff69b4').bold

async function cot(text, speed = 80) {
  let buf = ''
  log('')
  for (const c of text) {
    buf += c
    log('\r\x1b[1A' + pink(buf))
    await wait(speed)
  }
} async function aw() {
  	await cot('Temanku Semua pada Jahat Tante...', 100)
  	await wait(300);
  	await cot('Aku lagi Susah mereka Gak ada...',110)
  	await wait(200);
  	await cot('Coba kalo lagi jayaa...',100)
  	await wait(700);
  	await cot('Aku dipuja-pujanya tante...\n',120)
  	await wait(500);
  	await cot('Sudah terbiasa Terjadi Tantee...',120)
  	await wait(200);
  	await cot('Teman datang ketika lagi Butuh Saja...',95)
  	await wait(200);
  	await cot('Coba kalo lagi Susah...',115)
  	await wait(200);
  	await cot('Mereka Semuaa Menghilang....',120)
  	await wait(200000);
}

aw()
