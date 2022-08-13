const talks=[
    {
        first:"삶이 있는 한 희망은 있다.",
        lasttalk:"키케로"
    },
    {
        first:"산다는것 그것은 치열한 전투이다.",
        lasttalk:"로망로랑"
    },
    {
        first:"절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다.",
        lasttalk:"L론허바드 "
    },
    {
        first:"계단을 밟아야 계단 위에 올라설수 있다.",
        lasttalk:"터키속담"
    },
    {
        first:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        lasttalk:"톰 모나건"
    },
    {
        first:"오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한걸음 더 진보한다.",
        lasttalk:"뉴턴"
    },
]

const firstTalk= document.querySelector('#talkman .one');
const lastTalk= document.querySelector('#talkman .two');

function gettalk(){
    const ranTalk= talks[Math.floor(Math.random()*talks.length)];
    firstTalk.innerText=ranTalk.first;
    lastTalk.innerText=ranTalk.lasttalk;
}
gettalk();
setInterval(gettalk, 2300);