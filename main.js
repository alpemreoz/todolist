let task = document.querySelector("#task");
let ulDOM = document.querySelector("#list");
let addBtn = document.querySelector("#liveToastBtn");
let ulLiDOM = document.getElementsByTagName("li");


function newElement(){
    let text = task.value;
    
    if(text=="" || text.replace(/^\s+|\s+$/g, "").length == 0){
        $(".error").toast("show")
        task.value = ""
    }else{
        let liDOM = document.createElement("li");
        liDOM.innerHTML=`
        <span>${text}</span>
        <button style="position: absolute; right: 0" class="delete"><i class="far fa-trash-alt"></i></button>`
        
        ulDOM.appendChild(liDOM);
        $(".success").toast("show")
        task.value = ""
       
        
        // task done start
        ulDOM.addEventListener(
            "click",
            function(ev){
                if(ev.target.tagName==="LI"){
                    ev.target.classList.toggle("checked")
                }
            },
            false
            );
        // task done end
        

        // delete button  start
        var task_delete = document.querySelectorAll(".delete");
        
        for(var i=0; i<task_delete.length; i++){
            task_delete[i].onclick = function(){
                this.parentNode.remove();
            }
        }    
        // delete button  end

        //localStorage start
        

        //localStorage end
    }
}