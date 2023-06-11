let boxContent = document.getElementById("box-content");
let left = document.getElementById("left");
let right = document.getElementById("right");
let button = document.getElementById("button");

    if(boxContent){
        boxContent.addEventListener("dragstart", function(e){
            let selected = e.target;
    
            right.addEventListener("dragover", function(e){
                e.preventDefault();
    
            });
            right.addEventListener("drop", function(e){
                right.appendChild(selected);
                selected = null;
            })
            left.addEventListener("dragover", function(e){
                e.preventDefault();
    
            });
            left.addEventListener("drop", function(e){
                left.appendChild(selected);
                selected = null;
            })
        })
    }

    function reset(){
        
            left.appendChild(boxContent);
            boxContent = null;
           
    }