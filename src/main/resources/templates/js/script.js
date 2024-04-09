const openAdditionButtons = document.querySelectorAll('[data-addition-target]')
const closeAdditionButtons = document.querySelectorAll('[data-close-button]')

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

function openAdditionTab(additionTab) {
  if (additionTab == null) return
  additionTab.classList.add('active')
}

function closeAdditionTab(additionTab) {
  if (additionTab == null) return
  additionTab.classList.remove('active')
}