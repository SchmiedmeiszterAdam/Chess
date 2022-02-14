class Bishop extends ChessPiece {
    constructor(element, color, position1, position2,table) {
        super(element, color, position1, position2,table)
    }
    clickTrigger() {
        let event = new CustomEvent("clickOnBishop", { detail: this })
        window.dispatchEvent(event)
    }
    // highlight() {
    //     let i = this.positions[0]
    //     let k = this.positions[1]
    //     while (i < 7 && k < 7 && this.tableParent.table[(i + 1)][k + 1] instanceof EmptySlot) {
    //         i++
    //         k++
    //         this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i + 1, k + 1)
    //     i = this.positions[0]
    //     k = this.positions[1]
    //     while (i > 0 && k < 7 && this.tableParent.table[(i - 1)][k + 1] instanceof EmptySlot) {
    //         i--
    //         k++
    //         this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i - 1, k + 1)
    //     i = this.positions[0]
    //     k = this.positions[1]
    //     while (k > 0 && i > 0 && this.tableParent.table[i - 1][(k - 1)] instanceof EmptySlot) {
    //         k--
    //         i--
    //         this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i - 1, k - 1)
    //     i = this.positions[0]
    //     k = this.positions[1]
    //     while (k > 0 && i < 7 && this.tableParent.table[i + 1][(k - 1)] instanceof EmptySlot) {
    //         k--
    //         i++
    //         this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
    //     }
    //     this.check(i + 1, k - 1)
    // }
    // check(i,k) {
    //     if (i <= 7 && i >= 0 && k <= 7 && k >= 0) {
    //         if (this.tableParent.table[i][k] instanceof ChessPiece && this.tableParent.table[i][k].color != this.color) {
    //             this.tableParent.table[i][k].element.append("<div class = 'red-highlight'></div>")
    //         }
    //     }
    // }
}