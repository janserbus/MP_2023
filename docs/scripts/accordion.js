let accordionList;

getAccordions("accordion");

function getAccordions(className){
    let temp = document.getElementsByClassName(className);
    if(temp != undefined)
    {
        accordionList = temp;        

        for (let index = 0; index < accordionList.length; index++) {
            let bar = accordionList[index].firstElementChild;
            let content = bar.nextElementSibling;   
        
            bar.onclick = function() {        
                bar.classList.toggle("open");
                
                if(content.style.maxHeight){
                    content.style.maxHeight = null;
                }
                else{
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }    
        }
    }
}

function removeAccordions(accordionList){
    for( let index = 0; index < accordionList.length; index++){
                
        accordionList[index].firstElementChild.onclick = function(){
            return false;
        };
    }
}