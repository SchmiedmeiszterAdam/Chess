class Pawn extends ChessPiece {
    constructor(element, color, tableParent, position1, position2) {
        super(element, color, tableParent, position1, position2)
        this.firstMove = true
    }
    highlight() {
        if (this.color === "black") {
            this.highlightHelp(1)
        }
        else {
            this.highlightHelp(-1)
        }
    }
    highlightHelp(c) {
        if (this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1]].is(':empty')) {
            this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1]].append("<div class = 'highlight'></div>")
        }
        console.log(this.positions[0] + (1 * c),this.positions[1] - 1)
        if (this.positions[1] != 0 && !this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] - 1].is(':empty') && this.chessPieceOnPoz(this.positions[0] + (1 * c),this.positions[1] - 1).color != this.color) {
            this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] - 1].append("<div class = 'red-highlight'></div>")
        }
        console.log(this.positions[0] + (1 * c),this.positions[1] + 1)
        if (this.positions[1] != 7 && !this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + 1].is(':empty') && this.chessPieceOnPoz(this.positions[0] + (1 * c),this.positions[1] + 1).color != this.color) {
            this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + 1].append("<div class = 'red-highlight'></div>")
        }
        if (this.firstMove) {
            this.tableParent.table[this.positions[0] + (2 * c)][this.positions[1]].append("<div class = 'highlight'></div>")
        }
    }
    freeMove(slot, positions) {
        if($(slot).find('.highlight').length === 1 || $(slot).find('.red-highlight').length === 1){
            this.move(slot,positions)
        }
    }
    hit(slot, positions){
        this.move(slot,positions)
    }
    move(slot,positions){
        this.firstMove = false
        $(slot).append(this.element)
        this.positions = positions
        this.unhighLight()
    }
}