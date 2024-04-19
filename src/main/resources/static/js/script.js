const openAdditionButtons = document.querySelectorAll('[data-addition-target]')
const closeAdditionButtons = document.querySelectorAll('[data-close-button]')
const editButtons = document.querySelectorAll('[data-edit-target]')
const cancelButtons = document.querySelectorAll('[data-edit-cancel]')

$(document).ready(function() {
  if (document.querySelectorAll(".action-buttons-cell").length === 0) {
    document.querySelector(".contact-id-title").style.borderBottomLeftRadius = "8px"
  }
  let contactInfoDivs = document.querySelectorAll('.editable-info div')
  contactInfoDivs.forEach(contactInfoDiv => {
    let contactInfo = contactInfoDiv.querySelector('.contact-info')
    let editTabInput = contactInfoDiv.querySelector('.edit-tab-input')
    editTabInput.style.width = "max(" + contactInfo.clientWidth + "px, " + contactInfoDiv.clientWidth + "px)"
    editTabInput.style.height = contactInfo.clientHeight + "px"
    editTabInput.style.transform = "translateX(-2px) translateY(calc(-" + editTabInput.clientHeight + "px + 2px))"
  })
})

openAdditionButtons.forEach(button => {
  button.addEventListener('click', () => {
    let actionButtonCells = document.getElementsByClassName('action-buttons-cell')
    let lastRow = actionButtonCells.length - 1
    if (lastRow >= 0) {
      actionButtonCells[lastRow].classList.add('active')
    } else {
      document.querySelector('.contact-actions-title').style.borderBottomRightRadius = "8px"
    }
    button.classList.remove('active')

    let additionTab = document.querySelector(button.dataset.additionTarget)
    if (additionTab == null) return
    additionTab.classList.add('active')
  })
})

closeAdditionButtons.forEach(button => {
  button.addEventListener('click', () => {
    let actionButtonCells = document.getElementsByClassName('action-buttons-cell')
    let lastRow = actionButtonCells.length - 1
    if (lastRow >= 0) {
      actionButtonCells[lastRow].classList.remove('active')
    } else {
      document.querySelector('.contact-actions-title').style.borderBottomRightRadius = "0px"
    }
    let additionButton = document.querySelectorAll('[data-addition-target]')
    additionButton.forEach(additionButton => {
      additionButton.classList.add('active')
    })

    let additionTab = button.closest('.addition-tab')
    if (additionTab == null) return
    additionTab.classList.remove('active')
  })
})

editButtons.forEach(button => {
  button.addEventListener('click', () => {
    let row = button.closest('tr')
    let $row = $(row);
    let columns = row.querySelectorAll('.editable-info')
    let inputs = row.querySelectorAll('textarea')
    let paragraphs = row.querySelectorAll('.contact-info')
    let editButton = row.querySelector('.edit-button')
    let removeButton = row.querySelector('.remove-button')
    let editActionButtons = row .querySelectorAll('.edit-action-button')
  
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
  })
})

cancelButtons.forEach(button => {
  button.addEventListener('click', () => {
    let row = button.closest('tr')
    let $row = $(row)
    let columns = row.querySelectorAll('td')
    let inputs = row.querySelectorAll('textarea')
    let paragraphs = row.querySelectorAll('.contact-info')
    let editButton = row.querySelector('.edit-button')
    let removeButton = row.querySelector('.remove-button')
    let editActionButtons = row .querySelectorAll('.edit-action-button')
  
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
  })
})