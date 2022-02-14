class Player{
    constructor(pieces,activePiece){
        this.pieces = pieces
        this.active = false
        this.activePiece = activePiece
        for (let i = 0; i < this.pieces.length; i++) {
            this.pieces[i].element.on("click", () => {
                const piece = this.pieces[i]
                if(this.active){
                    piece.unhighLight()
                    piece.clickTrigger()
                }
            })
        }
    }
    
}