const todoForm = document.querySelector("#form_todo");
const todoInput = document.querySelector("#input_todo");
const todoList = document.querySelector("#todolist");


let todos = [];
const TODOGET = "todos";
const LINE="line";

//로컬 저장 하기
function localTodo() {
    localStorage.setItem(TODOGET, JSON.stringify(todos));
}

//삭제 버튼
function deleteBtn(event) {
    const deleteButton = event.target.parentNode;
    deleteButton.remove();
    todos = todos.filter((value)=> value.id != parseInt(deleteButton.id));
    localTodo();
}

//페인트
function todopaint(myTodo) {
    const li = document.createElement("li");
    li.id = myTodo.id;
    const span = document.createElement("span");
    span.innerText = myTodo.text;
    span.addEventListener("click", lineThrough);
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteBtn)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

//저장된 로컬
const localGet = localStorage.getItem(TODOGET);

//전송 이벤트 함수
function submittodo(e) {
    e.preventDefault();
    const todov = todoInput.value;
    todoInput.value = "";
    if(todov.length != 0){
        const todoObj = {
            text: todov,
            id: Date.now(),
        };
        todos.push(todoObj);
        localTodo();
        todopaint(todoObj);
        
    }else{
        alert("할 일을 입력하세요.")
    }
}

//줄긋기 토글
function lineThrough(event) {
    const line = event.target;
    const lineT = parseInt(line.parentNode.id);
    const newGet = JSON.parse(localStorage.getItem(TODOGET));

    for (let i in newGet) {
        if (newGet[i].id == lineT && newGet[i].class == "") {
            newGet[i].class = "line"
            line.classList.add(LINE);
        } else if (newGet[i].id == lineT && newGet[i].class == "line") {
            newGet[i].class = ""
            line.classList.remove(LINE);
        }
    }
    localStorage.setItem(TODOGET, JSON.stringify(newGet))
}

//전송 이벤트
todoForm.addEventListener("submit", submittodo);

//로컬 가져와 보이기
if (localGet) {
    const todoP = JSON.parse(localGet);
    todos = todoP;
    todoP.forEach(todopaint);
}
