class Rook extends ChessPiece{
    constructor(element, color, tableParent, position1, position2) {
        super(element, color, tableParent, position1, position2)
    }
    highlight() {
        let i = this.positions[0]
        let k = this.positions[1]
        while (i < 7 && this.tableParent.table[(i + 1)][k] instanceof EmptySlot) {
            i++
            this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
        }
        this.check(i + 1, k)
        i = this.positions[0]
        k = this.positions[1]
        while (i > 0 && this.tableParent.table[(i - 1)][k] instanceof EmptySlot) {
            i--
            this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
        }
        this.check(i - 1, k)
        i = this.positions[0]
        k = this.positions[1]
        while (k < 7 && this.tableParent.table[i][(k + 1)] instanceof EmptySlot) {
            k++
            this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
        }
        this.check(i, k + 1)
        i = this.positions[0]
        k = this.positions[1]
        while (k > 0 && this.tableParent.table[i][(k - 1)] instanceof EmptySlot) {
            k--
            this.tableParent.table[i][k].element.append("<div class = 'highlight'></div>")
        }
        this.check(i, k - 1)
    }
    check(i, k) {
        if (i <= 7 && i >= 0 && k <= 7 && k >= 0) {
            if (this.tableParent.table[i][k] instanceof ChessPiece && this.tableParent.table[i][k].color != this.color) {
                this.tableParent.table[i][k].element.append("<div class = 'red-highlight'></div>")
            }
        }
    }
}