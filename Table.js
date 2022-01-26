class Table {
    constructor() {
        this.table = new Array(8)
        this.chessPieces = []
        this.activePiece
        this.createTable()

    }
    createTable() {
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = new Array(8)
        }
        let index = 0
        let template, obj, sektor
        let color = "black"
        for (var i = 0; i < this.table.length; i++) {
            if (i === 5) {
                color = "white"
            }
            $("#table").append("<div class = 'row row-" + i + "'></div>")
            for (var k = 0; k < this.table[i].length; k++) {
                sektor = $("<div class = 'table-sektor table-sektor-" + index + "'></div>").appendTo("#table .row-" + i + "")
                if (i === 1 || i === 6) {
                    template = $("<div class = 'pawn chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Pawn(template, color, this, i, k)
                }
                else if ((i === 0 && (k === 1 || k === 6)) || (i === 7 && (k === 1 || k === 6))) {
                    template = $("<div class = 'knight chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Knight(template, color, this, i, k)
                }
                else if ((i === 0 && (k === 0 || k === 7)) || (i === 7 && (k === 0 || k === 7))) {
                    template = $("<div class = 'rook chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Rook(template, color, this, i, k)
                }
                else if ((i === 0 && (k === 2 || k === 5)) || (i === 7 && (k === 2 || k === 5))) {
                    template = $("<div class = 'bishop chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Bishop(template, color, this, i, k)
                }
                else if (k === 3 && (i === 0 || i === 7)) {
                    template = $("<div class = 'queen chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Queen(template, color, this, i, k)
                }
                else if (k === 4 && (i === 0 || i === 7)) {
                    template = $("<div class = 'king chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new King(template, color, this, i, k)
                }
                else{
                    new EmptySlot(sektor,i,k)
                }
                if(obj instanceof ChessPiece){
                    this.chessPieces.push(obj)
                }
                this.table[i][k] = sektor
                index++
            }
        }
        $(window).on("clickOnEmptySlot",event =>{
            let slot = event.detail.element
            let positions = event.detail.positions
            this.activePiece.freeMove(slot,positions)
        })
    }
}