class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect=firstSelect
        this.secondSelect=secondSelect

        this.outputFirst=document.getElementById("outputFirst")
        this.outputSecond=document.getElementById("outputSecond")
        this.outputResultt=document.getElementById("outputResult")
    }
    firstChange(){
        this.outputFirst.textContent=this.firstSelect.options[this.firstSelect.selectedIndex].textContent
    }
    secondChange(){
        this.outputSecond.textContent=this.secondSelect.options[this.secondSelect.selectedIndex].textContent
    }


    outputResult(result){

        this.outputResultt.value=result
        
    }

  
}