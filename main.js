const inputvalue = document.querySelector(".inputvalue");

const add = document.querySelector(".add");

const listbody = document.querySelector(".listbody");


add.addEventListener('click', ()=>{


if(inputvalue.value == ''){
  alert("please input a list")
    
}else{
let list = document.createElement('div');
list.classList.add('list');

let item = document.createElement('input');
item.classList.add('list');
item.setAttribute('type', 'text');
item.setAttribute('readonly', 'readonly');
item.value = inputvalue.value

let checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.classList.add('checkbox');



checkbox.addEventListener('click', ()=>{
    if( checkbox.checked == true){
        item.style = "text-decoration: line-through;"
    }else{
        item.style = " text-decoration: none;"
    }
})


let edit = document.createElement('button');
edit.classList.add('edit');
edit.innerHTML = "Edit"

let deletelist = document.createElement('button');
deletelist.classList.add('deletelist');
deletelist.innerHTML = "delete"

listbody.appendChild(list);
list.appendChild(checkbox);
list.appendChild(item);
list.appendChild(edit);
list.appendChild(deletelist);

inputvalue.value = ''


deletelist.addEventListener('click',()=>{
    list.remove()

})

edit.addEventListener('click', ()=> {
   
    if(edit.innerHTML == "Edit"){
        item.removeAttribute('readonly', 'readonly')
        edit.innerHTML = "Save"
        item.style = " text-decoration: none;"
        checkbox.style = "display: none;"
        
    
    
    }else{
        item.setAttribute('readonly', 'readonly')
        edit.innerHTML = "Edit"
        checkbox.style = "display: block;"
    }

})


}


})


