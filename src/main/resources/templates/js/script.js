const openAdditionButtons = document.querySelectorAll('[data-addition-target]')
const closeAdditionButtons = document.querySelectorAll('[data-close-button]')
const editButtons = document.querySelectorAll('[data-edit-target]')

openAdditionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const actionButtonCells = document.getElementsByClassName('action-buttons-cell')
    let lastActionButtonCellId = actionButtonCells.length - 1
    actionButtonCells[lastActionButtonCellId].classList.add('active')
    button.classList.remove('active')
    const additionTab = document.querySelector(button.dataset.additionTarget)
    openAdditionTab(additionTab)
  })
})

closeAdditionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const actionButtonCells = document.getElementsByClassName('action-buttons-cell')
    let lastActionButtonCellId = actionButtonCells.length - 1
    actionButtonCells[lastActionButtonCellId].classList.remove('active')
    const addittionButton = document.querySelectorAll('[data-addition-target]')
    addittionButton.forEach(additionButton => {
      additionButton.classList.add('active')
    })
    const additionTab = button.closest('.addition-tab')
    closeAdditionTab(additionTab)
  })
})


editButtons.forEach(button => {
  button.addEventListener('click', () => {
    var row = button.closest('tr')
  
    activateEditMode(row)
  })
})


function openAdditionTab(additionTab) {
  if (additionTab == null) return
  additionTab.classList.add('active')
}

function closeAdditionTab(additionTab) {
  if (additionTab == null) return
  additionTab.classList.remove('active')
}

function activateEditMode(row) {
  var inputs = row.querySelectorAll('input')
  var paragraphs = row.querySelectorAll('p')
  
  inputs.forEach(input => {
    input.classList.remove('invisible')
  })
  paragraphs.forEach(paragraph => {
    paragraph.classList.add('invisible')
  })
}

  //   if (inputs[0].classList.contains('invisible')) {

  //   } else {
  //     inputs.forEach(input => {
  //       input.classList.add('invisible')
  //     })
  //     paragraphs.forEach(paragraph => {
  //       paragraph.classList.remove('invisible')
  //     })
  //   }
  // }
