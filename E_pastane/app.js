const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('open');

    });

   //to do list kodlarım
   const todoInput=document.querySelector(".todo-input");
   const todoButton=document.querySelector(".todo-button");
   const todoList=document.querySelector(".todo-list");

   todoButton.addEventListener('click',addTodo);

   function addTodo(event){
       const todoDiv=document.createElement("div");
       todoDiv.classList.add("todo");
   

   const newTodo=document.createElement("li");
   newTodo.innerText=todoInput.value;
   newTodo.classList.add("todo-item");

   todoDiv.appendChild(newTodo);
   todoList.appendChild(todoDiv);
   
   event.preventDefault();
}


function olaylar() {
    
    form.addEventListener('submit', elemanEkle);
    
    yapılacaklarListesi.addEventListener('click', elemanSil);

    hepsiniSil.addEventListener('click', elemanlarinHepsiniSil);
}



function elemanSil(e) {
    e.preventDefault();
}


function elemanlarinHepsiniSil(e) {
    e.preventDefault();
}






