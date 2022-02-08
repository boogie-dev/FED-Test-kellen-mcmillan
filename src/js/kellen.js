const dryUp = (element, id) => {
  const node = document.createElement('li')
  const anchor = document.createElement('a')
  const listParent = document.getElementById(`content${element[0]}`)
  const alphabetLetter = document.getElementById(id)
  listParent.classList.remove('hidden')
  alphabetLetter.classList.remove('greyedOut')
  node.innerText = element
  anchor.setAttribute('href', '#')
  anchor.setAttribute('class', 'nostyle')
  listParent.appendChild(anchor)
  anchor.appendChild(node)
}
function filterize(e) {
  console.log('attribute', e, typeof e)
  if (e === 'hash') {
    if (document.querySelector('ul.shown')) {
      document.querySelector('ul.shown').classList.remove('shown')
    }
  } else {
    if (document.querySelector('ul.shown')) {
      document.querySelector('ul.shown').classList.remove('shown')
    }
    console.log('id', `#content${e.toUpperCase()}`)
    document.querySelector(`#content${e.toUpperCase()}`).classList.add('shown')
  }
}
const attachListerner = (id) => {
  document.getElementById(id).onclick = () => {
    filterize(id)
  }
}
const switchAndPrint = (item) => {
  const ele = item.title
  switch (ele.length !== 0) {
    case ele[0] === 'A': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'B': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'C': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'D': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'E': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'F': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'G': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'H': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'I': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'J': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'K': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'L': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'M': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'N': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'O': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'P': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'Q': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'R': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'S': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'T': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'U': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'V': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'W': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'X': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'Y': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'Z': {
      dryUp(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    default: {
      return null
    }
  }
  return true
}
document.querySelector('.openThis').onclick = () => {
  document.querySelector('.mobile-menu').classList.remove('hidden')
}
document.querySelector('.closeThis').onclick = () => {
  document.querySelector('.mobile-menu').classList.add('hidden')
}
fetch('./assets/data.json')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    Object.fromEntries(
      Object.entries(data.termList).map((list) => {
        return switchAndPrint(list[1])
      })
    )
    return true
  })
