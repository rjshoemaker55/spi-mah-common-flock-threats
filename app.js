const tableItems = Array.from(
  document.getElementsByClassName('poultry-table-item-wrapper')
)

tableItems.map((item) => {
  const header = Array.from(
    item.getElementsByClassName('poultry-table-item-header')
  )[0]
  const popup = Array.from(
    item.getElementsByClassName('poultry-table-description-wrapper')
  )[0]
  let open = false

  item.addEventListener('click', () => {
    if (!item.open) {
      header.style.bottom = 'calc(100% - 60px)'
      header.style.backgroundColor = 'rgba(0, 133, 124, 1)'
      popup.style.top = '60px'
      item.open = true
    } else {
      header.style.bottom = 0
      header.style.backgroundColor = 'rgba(0, 133, 124, .8)'
      popup.style.top = '100%'
      item.open = false
    }
  })
})
