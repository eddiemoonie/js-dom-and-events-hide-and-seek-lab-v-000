function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')

  for(let i = 0, j = rankedList.length; i < j; i++) {
    let children = rankedList[i].children

    for (let k = 0, l = children.length; k < l; k++) {
      children[k].innerHTML = parseInt(children[k].innerHTML) + n
    }
  }
}
