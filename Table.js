class Table {
    constructor() {
        this.table = new Array(8)
        this.chessPieces = []
        this.activePiece = []
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
                    obj = new Pawn(template, color, i, k, this.table)
                }
                else if ((i === 0 && (k === 1 || k === 6)) || (i === 7 && (k === 1 || k === 6))) {
                    template = $("<div class = 'knight chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Knight(template, color, i, k, this.table)
                }
                else if ((i === 0 && (k === 0 || k === 7)) || (i === 7 && (k === 0 || k === 7))) {
                    template = $("<div class = 'rook chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Rook(template, color, i, k, this.table)
                }
                else if ((i === 0 && (k === 2 || k === 5)) || (i === 7 && (k === 2 || k === 5))) {
                    template = $("<div class = 'bishop chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Bishop(template, color, i, k, this.table)
                }
                else if (k === 3 && (i === 0 || i === 7)) {
                    template = $("<div class = 'queen chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new Queen(template, color, i, k, this.table)
                }
                else if (k === 4 && (i === 0 || i === 7)) {
                    template = $("<div class = 'king chess-piece'></div>").appendTo($(".table-sektor-" + index))
                    obj = new King(template, color, i, k, this.table)
                }
                else{
                    obj = new Slot(sektor, i, k)
                }
                new Slot(sektor, i, k)
                if (obj instanceof ChessPiece) {
                    this.chessPieces.push(obj)
                }
                this.table[i][k] = obj
                index++
            }
        }
        let player1Pieces = []
        let player2Pieces = []
        for (let i = 0; i < 16; i++) {
            player1Pieces.push(this.chessPieces[i])
        }
        this.player1 = new Player(player1Pieces, this.activePiece)
        for (let i = 16; i < this.chessPieces.length; i++) {
            player2Pieces.push(this.chessPieces[i])
        }
        this.player2 = new Player(player2Pieces, this.activePiece)
        this.player2.active = true
        $(window).on("clickOnEmptySlot", event => {
            let slot = event.detail.element
            let positions = event.detail.positions 
            if (this.activePiece[0] instanceof ChessPiece) {
                if (($(slot).find('.highlight').length === 1 || $(slot).find('.red-highlight').length === 1)) {
                    this.activePiece[0].move(slot, positions)
                    this.switchPlayers()
                }
            }
        })
        $(window).on("clickOnPawn", event => {
            let pawn = event.detail
            this.activePiece[0] = pawn
            this.highlight(pawn.positionsToMove(this.table))
        })
        $(window).on("clickOnRook", event => {
            let rook = event.detail
            this.activePiece[0] = rook
            this.highlight(rook.positionsToMove(this.table))
        })
        $(window).on("clickOnBishop", event => {
            let bishop = event.detail
            this.activePiece[0] = bishop
            let i = bishop.positions[0]
            let k = bishop.positions[1]
            let positionsToMove = []
            while (i < 7 && k < 7 && this.table[(i + 1)][k + 1] instanceof Slot || this.table[i+1][k+1].color != bishop.color) {
                i++
                k++
                positionsToMove.push(table[i][k])
                //this.table[i][k].element.append("<div class = 'highlight'></div>")
            }
            i = bishop.positions[0]
            k = bishop.positions[1]
            while (i > 0 && k < 7 && this.table[(i - 1)][k + 1] instanceof Slot || this.table[i-1][k+1].color != bishop.color) {
                i--
                k++
                positionsToMove.push(table[i][k])
                //this.table[i][k].element.append("<div class = 'highlight'></div>")
            }
            i = bishop.positions[0]
            k = bishop.positions[1]
            while (k > 0 && i > 0 && this.table[i - 1][(k - 1)] instanceof Slot || this.table[i-1][k-1].color != bishop.color) {
                k--
                i--
                positionsToMove.push(table[i][k])
                //this.table[i][k].element.append("<div class = 'highlight'></div>")
            }
            i = bishop.positions[0]
            k = bishop.positions[1]
            while (k > 0 && i < 7 && this.table[i + 1][(k - 1)] instanceof Slot || this.table[i+1][k-1].color != bishop.color) {
                k--
                i++
                positionsToMove.push(table[i][k])
                //this.table[i][k].element.append("<div class = 'highlight'></div>")
            }
            this.highlight(positionsToMove)
        })
        $(window).on("clickOnKnight", event => {
            let knight = event.detail
            this.activePiece[0] = knight
            let positionsToMove = []
            const steps = [-1, -2, -2, -1, -2, 1, -1, 2, 1, 2, 2, 1, 2, -1, 1, -2]
            for (let i = 0; i < steps.length; i += 2) {
                if (knight.positions[0] + steps[i] <= 7 && knight.positions[0] + steps[i] >= 0 && knight.positions[1] + steps[i + 1] <= 7 && knight.positions[1] + steps[i + 1] >= 0) {
                    if (this.table[knight.positions[0] + steps[i]][knight.positions[1] + steps[i + 1]] instanceof Slot || this.table[knight.positions[0] + steps[i]][knight.positions[1] + steps[i + 1]].color != knight.color) {
                        //this.table[knight.positions[0] + steps[i]][knight.positions[1] + steps[i + 1]].element.append("<div class = 'highlight'></div>")
                        positionsToMove.push(this.table[knight.positions[0] + steps[i]][knight.positions[1] + steps[i + 1]])
                    }
                }
            }
            this.highlight(positionsToMove)
        })
    }
    switchPlayers() {
        if (this.player1.active) {
            this.player1.active = false
            this.player2.active = true
        }
        else {
            this.player2.active = false
            this.player1.active = true
        }
    }
    highlight(ar){
        for (let i = 0; i < ar.length; i++) {
            const element = ar[i];
            if(element instanceof ChessPiece){
                $(element.parentElement.append("<div class = 'red-highlight'></div>"))
            }
            else{
                $(element.element.append("<div class = 'highlight'></div>"))
            }
        }
    }
}