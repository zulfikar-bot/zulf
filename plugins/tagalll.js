let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let name = conn.getName(m.sender)
  let id = `@${m.sender.replace(/@.+/, '')}`
  const groupAdmins = participants.filter(p => p.admin)
  const listAdmin = groupAdmins.map((v, i) => `ā ā š ${i + 1}. @${v.id.split('@')[0]}`).join('\n')
  const groupMembers = participants.filter(p => !p.admin)
  const listMember = groupMembers.map((v, i) => `ā ā š„ ${i + 1}. @${v.id.split('@')[0]}`).join('\n')
  let teks = `āāāŖć *š„ Mention All* ćāŖāā\n\nć *š¤ By ${name}* ć\nć *š¤ Tag ${id}* ć\n\nā² š£ Pesan :\n${text ? text : 'Tidak dicantumkan pesannya'}

ā­ā [ Admin Group ]
${listAdmin}
ā°āā *Next* āā

ā­ā [ Member ]
${listMember}
ā°āā *Next* āā`
                conn.sendMessage(m.chat, { text: teks + '\n\n' + global.wm, mentions: participants.map(a => a.id) }, m)
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i

handler.group = true
handler.admin = true

module.exports = handler