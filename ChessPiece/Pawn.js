class Pawn extends ChessPieces {
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
        console.log(this.positions)
        if (this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1]].is(':empty')) {
            this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1]].append("<div class = 'highlight'></div>")
        }
        console.log(this.positions[0] + (1 * c),this.positions[1] + c)
        if(this.positions[1] !=0 && !this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + c].is(':empty')){
            this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + c].append("<div class = 'red-highlight'></div>")
        }
        if(this.positions[1] !=7 && !this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + c].is(':empty')){
            this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] +c].append("<div class = 'red-highlight'></div>")
        }
        if (this.firstMove) {
            this.tableParent.table[this.positions[0] + (2 * c)][this.positions[1]].append("<div class = 'highlight'></div>")
        }
    }
    move() {

    }
}