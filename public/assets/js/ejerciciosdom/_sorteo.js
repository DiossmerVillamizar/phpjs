const d=document
export default function draw(btn,selector){
    const getWinner = (selector)=>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random()*$players.length),
        winner= $players[random]
        return `El Ganador es: ${winner.textContent}`
    }
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector)
            alert(result)
        }
    })
}
//colocarlo en la consola web
const getWinnerComment = (selector)=>{
    const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random()*$players.length),
    winner= $players[random]
    return `El Ganador es: ${winner.textContent}`
}
getWinnerComment("section h2")