import '../css/style.css'
import fullList from './model/fullList'
import listItem from './model/listItem'
import listTemplates from './templates/listTemplates'

const initApp = (): void =>{
  console.log();
  
  const full_List = fullList.instance
  const template = listTemplates.instance

  const itemEntryForm  = document.getElementById("itemEntryForm") as HTMLFormElement
  itemEntryForm.addEventListener('submit', (event:SubmitEvent): void => {
    event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntrytext: string = input.value.trim()
    if(!newEntrytext.length) return
   
    const itemId: number = full_List.list.length
    ? parseInt(full_List.list[full_List.list.length -1].id) + 1 : 1

    const newItem = new listItem(itemId.toString(), newEntrytext)
    full_List.addItem(newItem)

    template.render(full_List)
  })

  const clearItem = document.getElementById("clearItemButton") as HTMLButtonElement
  clearItem.addEventListener('click', (): void =>{
    full_List.clearList()
    template.clear()
  })
  full_List.load()
  template.render(full_List)
}

document.addEventListener("DOMContentLoaded", initApp)