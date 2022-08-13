const formId = document.querySelector("#form_id")
const formInput = document.querySelector("#form_input")
const nickname = document.querySelector("#nickname")
const logoutBtn = document.querySelector("#logoutBtn")
const all = document.querySelector("#all")
const wrap2 = document.querySelector("#wrap2")

const HIDDEN_KEY = "hidden";
const USERNAME="username";
const NEWSTYLE="newStyle";
const OPACITY="opacitys";
const getName = localStorage.getItem(USERNAME);

//이름 표시
function paintNickname(nick) {
    settime(nick)
    // nickname.innerText = `${nick}님 반갑습니다.`
    formId.classList.add(HIDDEN_KEY)
    all.classList.remove(OPACITY)
    all.classList.add(NEWSTYLE)
    nickname.classList.remove(HIDDEN_KEY)
    logoutBtn.classList.remove(HIDDEN_KEY)
}

//로컬 저장
function localSet(names) {
    localStorage.setItem(USERNAME, names);
}
//시간별 인사
function settime(nick){
    const date = new Date();
    const hours = date.getHours();
    if(hours>=0 && hours<6){
        nickname.innerText=`${nick}님 새벽입니다.`
    }else if(hours>=6 && hours<12){
        nickname.innerText=`${nick}님 오전입니다.`
    }else if(hours>=12 && hours<18){
        nickname.innerText=`${nick}님 오후입니다.`
    }else if(hours>=18 && hours<21){
        nickname.innerText=`${nick}님 저녁입니다.`
    }else{
        nickname.innerText=`${nick}님 밤입니다.`
    }
}


//로그인 전송
function submitNickname(e) {
    e.preventDefault();
    const nick = formInput.value;
    localSet(nick);
    paintNickname(nick)
    formInput.value = "";
}

//로그아웃 버튼
function logoutHandle() {
    localStorage.removeItem(USERNAME)
    formId.classList.remove(HIDDEN_KEY)
    nickname.classList.add(HIDDEN_KEY)
    logoutBtn.classList.add(HIDDEN_KEY)
    all.classList.remove(NEWSTYLE)
    all.classList.add(OPACITY)
}

if(getName == null){
    formId.addEventListener("submit", submitNickname)
}else{
    paintNickname(getName);
}

logoutBtn.addEventListener("click", logoutHandle)