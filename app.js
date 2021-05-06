

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
            img: 'images/PrisonMike.jpg',
        },
        {
            name: 'PrisonMike',
            img: 'images/PrisonMike.jpg',
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
    const timer = document.querySelector('#timer')
    const startBtn = document.querySelector('#start-button')
    let clicked = []
    let clickedNum = []
    let matched = []
    let time = 30

   

    function timeCountDown(){
        setInterval(function(){
            if(time <= 0){
                clearInterval(time = 0)
            }
            timer.innerHTML = `${time} seconds`
            time -= 1
        }, 1000)
    }

    startBtn.addEventListener('click', timeCountDown)

    //create the board
    function gameBoard(){
        for(let i = 0; i < arr.length; i++){
            var card = document.createElement('img')
            card.setAttribute('class', 'images')
            card.setAttribute('src', 'images/TheOffice.jpeg')
            card.setAttribute('data-index', i)
            card.addEventListener('click', cardImgDisplay)
            grid.appendChild(card)
        }
    }
    gameBoard()

    //check to see if the cards match 
    function checkCard(){
        // let card = this.getAttribute('data-index')
        let cardNum1 = clicked[0]
        let cardNum2 = clicked[1]

        if (cardNum1 === cardNum2){
            alert('Match')
            matched.push(clicked)
            console.log(matched)
        } else if (cardNum1 !== cardNum2) {
            cardNum1 = clicked
            console.log(cardNum1)
            alert('Nope!')
        } 
        clicked = []
        clickedNum = []  
     }

    function cardImgDisplay(){
        let cardImgNum = this.getAttribute('data-index')
        clicked.push(arr[cardImgNum].name)
        clickedNum.push(cardImgNum)
        this.setAttribute('src', arr[cardImgNum].img)
        if(clicked.length === 2){
            setTimeout(() => checkCard(), 500)
        }
    }


    
      
 

 







