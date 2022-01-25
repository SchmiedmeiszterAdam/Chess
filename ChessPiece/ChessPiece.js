class ChessPieces {
    constructor(element, color, tableParent) {
        this.element = element
        this.color = color
        this.tableParent = tableParent
        this.element.css("background-image", "url(Pics/" + this.color + "-" + $(this.element).attr('class') + ".png)")
    }
}