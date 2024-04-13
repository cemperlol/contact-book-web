const openAdditionButtons = document.querySelectorAll('[data-addition-target]')
const closeAdditionButtons = document.querySelectorAll('[data-close-button]')
const editButtons = document.querySelectorAll('[data-edit-target]')
const cancelButtons = document.querySelectorAll('[data-edit-cancel]')

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
    const additionButton = document.querySelectorAll('[data-addition-target]')
    additionButton.forEach(additionButton => {
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

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    var row = button.closest('tr')
  
    activateEditMode(row)
  })
})

function activateEditMode(row) {
  var $row = $(row);
  var columns = row.querySelectorAll('.editable-info')
  var inputs = row.querySelectorAll('input')
  var paragraphs = row.querySelectorAll('.contact-info')
  var editButton = row.querySelector('.edit-button')
  var removeButton = row.querySelector('.remove-button')
  var editActionButtons = row .querySelectorAll('.edit-action-button')

  if ($row.is(':nth-child(2n + 1)')) {
    columns.forEach(column => {
      column.style.backgroundColor = "#a6a6aee1"
    })
  } else {
    columns.forEach(column => {
      column.style.backgroundColor = "#a6a6aea2"
    })
  }
  inputs.forEach(input => {
    input.classList.remove('invisible')
  })
  paragraphs.forEach(paragraph => {
    paragraph.classList.add('invisible')
  })
  editButton.classList.add('invisible')
  removeButton.classList.add('invisible')
  editActionButtons.forEach(editActionButton => {
    editActionButton.classList.remove('invisible')
  })
}


cancelButtons.forEach(button => {
  button.addEventListener('click', () => {
    var row = button.closest('tr')

    cancelEditing(row)
  })
})

function cancelEditing(row) {
  var $row = $(row)
  var columns = row.querySelectorAll('td')
  var inputs = row.querySelectorAll('input')
  var paragraphs = row.querySelectorAll('.contact-info')
  var editButton = row.querySelector('.edit-button')
  var removeButton = row.querySelector('.remove-button')
  var editActionButtons = row .querySelectorAll('.edit-action-button')

  if ($row.is(':nth-child(2n + 1)')) {
    columns.forEach(column => {
      column.style.backgroundColor = "#e1e8ec51"
    })
  } else {
    columns.forEach(column => {
      column.style.backgroundColor = "white"
    })
  }
  inputs.forEach(input => {
    input.classList.add('invisible')
  })
  paragraphs.forEach(paragraph => {
    paragraph.classList.remove('invisible')
  })
  editButton.classList.remove('invisible')
  removeButton.classList.remove('invisible')
  editActionButtons.forEach(editActionButton => {
    editActionButton.classList.add('invisible')
  })
}