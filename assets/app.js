import "./styles/sanitize.css";
import "./styles/main.css";

const members = ['菅野さん', '浦さん', '横山さん', '佐久間さん', '山本さん', '小山さん', '小野さん', '渡辺さん', '細田'];
const shuffleMembers = (members) => {
  for (let i = members.length - 1; i >= 0; i--) {
    const shuffle = Math.floor(Math.random() * (i + 1));
    [members[i], members[shuffle]] = [members[shuffle], members[i]];
  }
  return members
}

window.addEventListener('DOMContentLoaded', () => {
  const shuffleTarget = document.querySelector('.shuffle')
  shuffleTarget.addEventListener('click', () => {
    shuffleMembers(members).forEach(membersArr => {
      const getPutArea = document.createElement('div')
      getPutArea.innerHTML = (`${membersArr}`)
      document.querySelector('.member-box').appendChild(getPutArea)
    })
    shuffleTarget.style.pointerEvents = 'none'
  })

  document.querySelector('.reset').addEventListener('click', () => {
    document.querySelectorAll('.member-box div').forEach(dom => {
      dom.remove()
    })
    shuffleTarget.style.pointerEvents = 'auto'
  })
})