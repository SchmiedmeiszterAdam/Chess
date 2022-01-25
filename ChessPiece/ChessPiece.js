class ChessPieces {
    constructor(element, color, tableParent,position1,position2) {
        this.element = element
        this.color = color
        this.tableParent = tableParent
        this.aktive = false
        this.positions = []
        this.positions.push(position1)
        this.positions.push(position2)
        this.element.css("background-image", "url(Pics/" + this.color + "-" + $(this.element).attr('class') + ".png)")

        this.element.on("click",()=>{
            $("div").remove(".highlight");
            this.tableParent.chessPieces.forEach(element => {
            });
            this.highlight()
        })
    }
}