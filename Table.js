class Table {
    constructor() {
        this.table
        this.chessPieces = new Array(8)
        this.createTable()
        this.updateTable()
    }
    createTable() {
        for (let i = 0; i < this.chessPieces.length; i++) {
            this.chessPieces[i] = new Array(8)
        }
        let index = 0
        let template, obj
        let color = "black"
        for (var i = 0; i < this.chessPieces.length; i++) {
            if (i === 5) {
                color = "white"
            }
            $("#table").append("<div class = 'row row-" + i + "'></div>")
            for (var k = 0; k < this.chessPieces[i].length; k++) {
                $("#table .row").eq(i).append("<div class = 'table-sektor table-sektor-" + index + "'></div>")
                if (i === 1 || i === 6) {
                    template = $("<div class = 'pawn'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Pawn(template, color, this)
                }
                else if ((i === 0 && (k === 1 || k === 6)) || (i === 7 && (k === 1 || k === 6))) {
                    template = $("<div class = 'knight'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Knight(template, color, this)
                }
                else if ((i === 0 && (k === 0 || k === 7)) || (i === 7 && (k === 0 || k === 7))) {
                    template = $("<div class = 'rook'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Rook(template, color, this)
                }
                else if ((i === 0 && (k === 2 || k === 5)) || (i === 7 && (k === 2 || k === 5))) {
                    template = $("<div class = 'bishop'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Bishop(template, color, this)
                }
                else if (k === 3 && (i === 0 || i === 7)) {
                    template = $("<div class = 'queen'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Queen(template, color, this)
                }
                else if (k === 4 && (i === 0 || i === 7)) {
                    template = $("<div class = 'king'></div>").appendTo($(".table-sektor-" + index))
                    obj = new King(template, color, this)
                }
                else {
                    obj = null
                }
                this.chessPieces[i][k] = obj
                index++
            }
        }
    }
    updateTable() {
        for (let i = 0; i < this.chessPieces.length; i++) {
            for (let k = 0; k < this.chessPieces[i].length; k++) {

            }
        }
    }
}