console.log('this is linked')
console.dir(document)

const arr = [
    {
        name: 'Dwight',
        img: "images/Dwight.jpeg",
    },
    {
        name: 'Dwight',
        img: "images/Dwight.jpeg",
    },
    {
        name: "Ipod",
        img: 'images/Ipod.jpeg',
    },
    {
        name: "Ipod",
        img: 'images/Ipod.jpeg',
    },
    {
        name: 'ItsBrittanyB',
        img: 'images/ItsBrittanyB.jpeg',
    },
    {
        name: 'ItsBrittanyB',
        img: 'images/ItsBrittanyB.jpeg',
    },
    {
        name: 'Jim',
        img: 'images/Jim.jpeg',
    },
    {
        name: 'Jim',
        img: 'images/Jim.jpeg',
    },
    {
        name: 'PrisonMike',
        img: 'images/PrisonMike.png',
    },
    {
        name: 'PrisonMike',
        img: 'images/PrisonMike.png',
    },
    {
        name: 'Stanley',
        img: 'images/Stanley.jpeg'
    },
    {
        name: 'Stanley',
        img: 'images/Stanley.jpeg'
    },
]

const grid = document.querySelector('.grid')

function gameBoard(){
    for(let i = 0; i < arr.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/TheOffice.jpeg')
        card.setAttribute('data-id', i)
        // card/addEventListener('click', function())
        grid.appendChild(card)
    }
}

gameBoard()


