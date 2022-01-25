class Pawn extends ChessPieces{
    constructor(element,color,tableParent,position1,position2){
        super(element,color,tableParent,position1,position2)
        this.firstMove = true
    }
    highlight(){
        if(this.color === "black"){
            this.highlightHelp(1)
        }
        else{
            this.highlightHelp(-1)
        }
    }
    highlightHelp(c){
        let a = 1*c
        let b = 2*c
        this.tableParent.table[this.positions[0]+a][this.positions[1]].append("<div class = 'highlight'></div>")
        if(this.firstMove){
            this.tableParent.table[this.positions[0]+b][this.positions[1]].append("<div class = 'highlight'></div>")
        }
    }
    move(){

    }
}