const deck = document.getElementById('show');
const cards = [document.getElementsByClassName('card1'), document.getElementsByClassName('card2'), document.getElementsByClassName('card3'), document.getElementsByClassName('card4')];
console.log(cards);
deck.addEventListener('click', () =>{
    for (let i = 0; i < cards.length; i++) {
        const element = cards[i][0];
        console.log(element)
        if(element.classList.contains('hide')){
        element.classList.remove('hide')
        }
        else{
            element.classList.add('hide')
        }
        
    }
})