class ChessPiece {
    constructor(element, color, tableParent,position1,position2) {
        this.element = element
        this.parentElement = this.element.parent()
        this.color = color
        this.tableParent = tableParent
        this.positions = []
        this.positions.push(position1)
        this.positions.push(position2)
        this.element.css("background-image", "url(Pics/" + this.color + "-" + $(this.element).attr('class').split(/\s+/)[0] + ".png)")

        this.element.on("click",()=>{
            if($(this.parentElement).find('.red-highlight').length === 1){
                $(this.parentElement).empty()
                this.tableParent.activePiece.hit($(this.parentElement),this.positions)
                console.log("ütve")
            }
            else{
                this.tableParent.activePiece = this
                this.unhighLight()
                this.highlight()
            }
        })
    }
    unhighLight(){
        $("div").remove(".highlight");
        $("div").remove(".red-highlight");
    }
    chessPieceOnPoz(poz1,poz2){
        let i = 0
        while(i < this.tableParent.chessPieces.length && !(this.tableParent.chessPieces[i].positions[0] === poz1 &&this.tableParent.chessPieces[i].positions[1] === poz2)){
            i++
        }
        return this.tableParent.chessPieces[i]
    }
}