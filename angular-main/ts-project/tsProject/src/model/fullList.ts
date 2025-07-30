import listitem from "./listItem";


interface List{
    list: listitem[],
    load(): void,
    save(): void,
    clearList():void,
    addItem(itemObj: listitem): void,
    removeItem(id:string): void, 
}

export default class FullList implements List{
    
    static instance: FullList = new FullList()

    private constructor(
        private _list:listitem[]= [] ) {}

    get list(): listitem[]{
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new listitem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        });
    }

    save():void{
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: listitem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(Item => Item.id !== id)
        this.save()
    }

}