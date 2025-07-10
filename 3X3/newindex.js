function start() {
    let cells = Array.from(document.getElementsByTagName('input'));
    
    function play(){
        let rows = row();
        let cols = col();
        let diag = dia();
        
        if ((rows & cols & diag) == true) {
            document.getElementById('span').innerHTML="Correct";
            document.getElementById('span').style.color="green";
        } else {
            document.getElementById('span').innerHTML="Incorrect";
            document.getElementById('span').style.color="red";
        }
    }
    
    function row(){
        let a = new Array();
        for (let i = 0; i < 3; i++) {
            let count = 0;
            for(let j = i; j < 9; j+=3)
                count += parseInt(cells[j].value, 10);
            
            if(count == 15){
                a[i] = "true";
            }else{
                a[i] = "false";
            }
        }
        for(let x of a)
            if(x != "true")
                return false;
        
        return true;
    }

    function col(){
        let b = new Array();
        for(let i = 0; i < 3; i++){
            let count = 0;
            for(let k = i; k < 9; k+=3)
                count += parseInt(cells[k].value, 10);
            
            if(count == 15){
                b[i] = "true";
            }else{
                b[i] = "false";
            }   
        }

        for(let y of b)
            if(y != "true")
                return false;
        
        return true;
    }

    function dia(){
        let count = 0;
        for(let i = 0; i < 9; i+=4)
            count += parseInt(cells[i].value, 10);
            
        if(count == 15)
            return true;
        return false;
    }

    play();
}

function Reset(){
    let cards = Array.from(document.getElementsByTagName('input'));
    cards[0].value="";
    cards[1].value="";
    cards[2].value="";
    cards[3].value="";
    cards[5].value="";
    cards[6].value="";
    cards[7].value="";
    cards[8].value="";
    document.getElementById('span').innerHTML="";
}