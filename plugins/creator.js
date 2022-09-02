let handler = function (m) {
  // this.sendContact(m.chat, '6282279425257', 'Nurutomo', m)
  conn.sendContact(m.chat, '6282279425257', 'Muhammad Zulfikar Putra', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
