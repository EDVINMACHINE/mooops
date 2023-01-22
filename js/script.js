const cards = document.querySelectorAll('.card')

for (const card of cards){
    card.addEventListener("click", ()=>{
        min()
        card.classList.add("active")
    })
}


function min(){
    for(const card of cards){
        card.classList.remove('active')
    }
}