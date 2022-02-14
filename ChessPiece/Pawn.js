class Pawn extends ChessPiece {
    constructor(element, color, position1, position2, table) {
        super(element, color, position1, position2, table)
    }
    clickTrigger() {
        let event = new CustomEvent("clickOnPawn", { detail: this })
        window.dispatchEvent(event)
    }
    positionsToMove(table) {
        if (this.color === "black") {
            return this.highlightHelp(1,table)
        } else {
            return this.highlightHelp(-1,table)
        }
    }
    highlightHelp(c,table) {
        let positionsToMove = []
        if (table[this.positions[0] + (1 * c)][this.positions[1]] instanceof Slot) {
            positionsToMove.push(table[this.positions[0] + (1 * c)][this.positions[1]])
            //table[this.positions[0] + (1 * c)][this.positions[1]].element.append("<div class = 'highlight'></div>")
            if (this.firstMove && table[this.positions[0] + (2 * c)][this.positions[1]] instanceof Slot) {
                //table[this.positions[0] + (2 * c)][this.positions[1]].element.append("<div class = 'highlight'></div>")
                positionsToMove.push(table[this.positions[0] + (2 * c)][this.positions[1]])
            }
        }
        if (this.positions[1] != 0 && table[this.positions[0] + (1 * c)][this.positions[1] - 1] instanceof ChessPiece && table[this.positions[0] + (1 * c)][this.positions[1] - 1].color != this.color) {
            //table[this.positions[0] + (1 * c)][this.positions[1] - 1].parentElement.append("<div class = 'red-highlight'></div>")
            positionsToMove.push(table[this.positions[0] + (1 * c)][this.positions[1] - 1])
        }
        if (this.positions[1] != 7 && table[this.positions[0] + (1 * c)][this.positions[1] + 1] instanceof ChessPiece && table[this.positions[0] + (1 * c)][this.positions[1] + 1].color != this.color) {
            //table[this.positions[0] + (1 * c)][this.positions[1] + 1].parentElement.append("<div class = 'red-highlight'></div>")
            positionsToMove.push(table[this.positions[0] + (1 * c)][this.positions[1] + 1])
        }
        return positionsToMove
    }
    // highlight() {
    //     if (this.color === "black") {
    //         this.highlightHelp(1)
    //     } else {
    //         this.highlightHelp(-1)
    //     }
    // }
    // highlightHelp(c) {
    //     if (this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1]] instanceof EmptySlot) {
    //         this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1]].element.append("<div class = 'highlight'></div>")
    //     }
    //     if (this.positions[1] != 0 && this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] - 1] instanceof ChessPiece && this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] - 1].color != this.color) {
    //         $(this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] - 1].parentElement).append("<div class = 'red-highlight'></div>")
    //     }
    //     if (this.positions[1] != 7 && this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + 1] instanceof ChessPiece && this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + 1].color != this.color) {
    //         $(this.tableParent.table[this.positions[0] + (1 * c)][this.positions[1] + 1].parentElement).append("<div class = 'red-highlight'></div>")
    //     }
    //     if (this.firstMove) {
    //         this.tableParent.table[this.positions[0] + (2 * c)][this.positions[1]].element.append("<div class = 'highlight'></div>")
    //     }
    // }
}