class EmptySlot {
    constructor(element, pos1, pos2) {
        this.element = element
        this.positions = []
        this.positions.push(pos1)
        this.positions.push(pos2)
        this.element.on("click", () => {
            this.clickTrigger()
        })
    }
    clickTrigger() {
        let event = new CustomEvent("clickOnEmptySlot", { detail: this })
        window.dispatchEvent(event)
    }
}