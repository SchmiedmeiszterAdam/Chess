class Knight extends ChessPiece{
    constructor(element, color, position1, position2,table) {
        super(element, color, position1, position2,table)
    }
    clickTrigger() {
        let event = new CustomEvent("clickOnKnight", { detail: this })
        window.dispatchEvent(event)
    }
}