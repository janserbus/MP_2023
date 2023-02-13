var accordions = document.getElementsByClassName("accordion__bar");

for (let index = 0; index < accordions.length; index++) {
    accordions[index].onclick = function() {

        this.classList.toggle("open")
        var content = this.nextElementSibling;
        
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
    
}

