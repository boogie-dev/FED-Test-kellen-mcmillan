// Renders directory elements
const renderElement = (element, id) => {
  const node = document.createElement('li')
  const anchor = document.createElement('a')
  const listParent = document.getElementById(`content${element[0]}`)
  const alphabetLetter = document.getElementById(id)
  const hash = document.getElementById('hash')
  listParent.classList.remove('hidden')
  alphabetLetter.classList.remove('greyedOut')
  hash.classList.remove('greyedOut')
  node.innerText = element
  anchor.setAttribute('href', '#')
  anchor.setAttribute('class', 'nostyle')
  listParent.appendChild(anchor)
  anchor.appendChild(node)
}
// Filters directory entries
function filterThis(identifier) {
  if (identifier === 'hash') {
    ;[].map.call(
      document.querySelectorAll('ul.directory:not(.hidden'),
      (element) => {
        element.classList.remove('tempHidden')
      }
    )
  } else {
    const ID = identifier.toUpperCase()
    ;[].map.call(
      document.querySelectorAll('ul.directory:not(.hidden'),
      (element) => {
        if (element.getAttribute('id') !== `content${ID}`) {
          element.classList.add('tempHidden')
        } else {
          element.classList.remove('tempHidden')
        }
      }
    )
  }
}
// Attaches click event listener to filter directory by letter
const attachListerner = (id) => {
  document.getElementById(id).onclick = () => {
    filterThis(id)
  }
}
// Attaches click event listener to special hash filter character
attachListerner('hash')

// sorts imported JSON data and
// renders list items based off of first letter
const switchAndPrint = (item) => {
  const ele = item.title
  switch (ele.length !== 0) {
    case ele[0] === 'A': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'B': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'C': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'D': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'E': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'F': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'G': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'H': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'I': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'J': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'K': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'L': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'M': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'N': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'O': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'P': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'Q': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'R': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'S': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'T': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'U': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'V': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'W': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'X': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'Y': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    case ele[0] === 'Z': {
      renderElement(ele, ele[0].toLowerCase())
      attachListerner(ele[0].toLowerCase())
      break
    }
    default: {
      return null
    }
  }
  return true
}
// mobile menu event handler
document.querySelector('.openThis').onclick = () => {
  document.querySelector('.mobile-menu').classList.remove('hidden')
}
document.querySelector('.closeThis').onclick = () => {
  document.querySelector('.mobile-menu').classList.add('hidden')
}
// fetches data from a file
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
