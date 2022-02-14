class ChessPiece {
    constructor(element, color, position1, position2,table) {
        this.element = element
        this.parentElement = this.element.parent()
        this.color = color
        this.firstMove = true
        this.positions = []
        this.table = table
        this.positions.push(position1)
        this.positions.push(position2)
        this.element.css("background-image", "url(Pics/" + this.color + "-" + $(this.element).attr('class').split(/\s+/)[0] + ".png)")
    }
    unhighLight() {
        $("div").remove(".highlight");
        $("div").remove(".red-highlight");
    }

    move(slot, positions) {
        this.firstMove = false
        $(slot).empty()
        $(slot).append(this.element)
        this.table[positions[0]][positions[1]] = this
        this.table[this.positions[0]][this.positions[1]] = new Slot(this.parentElement, this.positions[0], this.positions[1])
        this.parentElement = slot
        this.positions = positions
        this.unhighLight()
    }
}