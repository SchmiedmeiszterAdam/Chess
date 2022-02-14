class Rook extends ChessPiece {
    constructor(element, color, position1, position2, table) {
        super(element, color, position1, position2, table)
    }
    clickTrigger() {
        let event = new CustomEvent("clickOnRook", { detail: this })
        window.dispatchEvent(event)
    }
    positionsToMove(table) {
        let positionsToMove = []
        let i = this.positions[0] + 1
        let k = this.positions[1]
        let found = false
        console.log(this.positions[0], this.positions[1])
        while (i <= 7 && (table[i][k] instanceof Slot || table[i][k].color != this.color) && !found) {
            positionsToMove.push(table[i][k])
            if (table[i][k] instanceof ChessPiece && table[i][k].color != this.color) {
                found = true
            }
            i++
            //table[i][k].element.append("<div class = 'highlight'></div>")
        }
        i = this.positions[0] - 1
        k = this.positions[1]
        found = false
        while (i >= 0 && (table[i][k] instanceof Slot || table[i][k].color != this.color) && !found) {
            positionsToMove.push(table[i][k])
            if (table[i][k] instanceof ChessPiece && table[i][k].color != this.color) {
                found = true
            }
            i--
            //table[i][k].element.append("<div class = 'highlight'></div>")
        }
        i = this.positions[0]
        k = this.positions[1] + 1
        found = false
        while (k <= 7 && (table[i][k] instanceof Slot || table[i][k].color != this.color) && !found) {
            positionsToMove.push(table[i][k])
            if (table[i][k] instanceof ChessPiece && table[i][k].color != this.color) {
                found = true
            }
            k++
            //table[i][k].element.append("<div class = 'highlight'></div>")
        }
        i = this.positions[0]
        k = this.positions[1] - 1
        found = false
        while (k >= 0 && (table[i][k] instanceof Slot || table[i][k].color != this.color) && !found) {
            positionsToMove.push(table[i][k])
            if (table[i][k] instanceof ChessPiece && table[i][k].color != this.color) {
                found = true
            }
            k--
            //table[i][k].element.append("<div class = 'highlight'></div>")
        }
        return positionsToMove
    }
    // highlight() {
    //     let i = this.positions[0]
    //     let k = this.positions[1]
    //     while (i < 7 && tableParent.table[(i + 1)][k] instanceof EmptySlot) {
    //         i++
    //         tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i + 1, k)
    //     i = this.positions[0]
    //     k = this.positions[1]
    //     while (i > 0 && tableParent.table[(i - 1)][k] instanceof EmptySlot) {
    //         i--
    //         tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i - 1, k)
    //     i = this.positions[0]
    //     k = this.positions[1]
    //     while (k < 7 && tableParent.table[i][(k + 1)] instanceof EmptySlot) {
    //         k++
    //         tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i, k + 1)
    //     i = this.positions[0]
    //     k = this.positions[1]
    //     while (k > 0 && tableParent.table[i][(k - 1)] instanceof EmptySlot) {
    //         k--
    //         tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i, k - 1)
    // }
    // check(i, k) {
    //     if (i <= 7 && i >= 0 && k <= 7 && k >= 0) {
    //         if (tableParent.table[i][k] instanceof ChessPiece && tableParent.table[i][k].color != this.color) {
    //             tableParent.table[i][k].element.append("<div class = 'red-highlight'></div>")
    //         }
    //     }
    // }
}