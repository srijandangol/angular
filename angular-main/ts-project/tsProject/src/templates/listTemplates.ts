import fullList from '../model/fullList';

interface DomList {
    ul: HTMLUListElement,
    clear():void,
    render(full_List:fullList): void,
}

export default class listTemplates implements DomList{

    ul: HTMLUListElement;

    static instance: listTemplates = new listTemplates

    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(full_List: fullList): void {
        this.clear()
        full_List.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"

            const check = document.createElement("input") as HTMLInputElement
            check.type= "checkbox"
            check.id = item.id
            check.tabIndex = 0
            check.checked = item.checked
            li.append(check)

            check.addEventListener('change', () => {
                item.checked = !item.checked
                full_List.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            li.append(button)

            button.addEventListener('click', ()=>{
                full_List.removeItem(item.id)
                this.render(full_List)
            })

            this.ul.append(li)
        })
    }
}