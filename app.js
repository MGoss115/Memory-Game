

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
    const resetBtn = document.querySelector('#reset')
    const score = document.querySelector('#score')
    let clicked = []
    let clickedNum = []
    let matched = []
    let time = 5

    // function shuffleCards(){
    //     let newCard = 0
    //     let tempCard = 0

    //     for(let i = arr.length - 1; i > 0; i--){
    //         newCard = Math.floor(Math.random() * (i + 1))
    //         tempCard = arr[i]
    //         arr[i] = arr[newCard]
    //         arr[newCard] = tempCard
    //     }
    //     return arr
    // }
    


    resetBtn.addEventListener('click', function(){
        location.reload()
    })
  
    //Timer
    function timeCountDown(){
        setInterval(function(){
            if(time <= 0){
                clearInterval(time = 0)
                return timeOut()
            }
            timer.innerHTML = `${time} seconds`
            time -= 1
            
        }, 1000)
    }
    

    function timeOut(){
        document.querySelector('#timer').textContent= 'Time Out'
        document.querySelector('.grid').innerHTML = " "
        document.querySelector('.timeOut').src = 'images/Timeout.jpeg'
    }

    startBtn.addEventListener('click', timeCountDown)

    //create the board
    function gameBoard(){
        for(let i = 0; i < arr.length; i++){
            let card = document.createElement('img')
            card.setAttribute('class', 'images')
            card.setAttribute('src', 'images/TheOffice.jpeg')
            card.setAttribute('data-index', i)
            card.addEventListener('click', cardImgDisplay)
            grid.appendChild(card)
        }
        // shuffleCards()
    }
    gameBoard()

    //check to see if the cards match 
    function checkCard(){
        let cards = document.querySelectorAll('img')
        let cardNum1 = clickedNum[0]
       
        let cardNum2 = clickedNum[1]
       

        if (clicked[0] === clicked[1]){
            cards[cardNum1].removeEventListener('click', cardImgDisplay)
            
            cards[cardNum2].removeEventListener('click', cardImgDisplay)
           
            matched.push(clicked)
           
        } else {
            
            cards[cardNum1].setAttribute('src','images/TheOffice.jpeg')
            cards[cardNum2].setAttribute('src','images/TheOffice.jpeg')
               
           
          
        } 
        clicked = []
        clickedNum = []
        score.textContent = matched.length
        if(matched.length === arr.length/2){
            score.textContent = 'You Won!!!'
          
        }
       
     }

    //flip cards 
    function cardImgDisplay(){
        let cardImgNum = this.getAttribute('data-index')
        this.setAttribute('src', arr[cardImgNum].img)
      
        
        clicked.push(arr[cardImgNum].name)

       
        clickedNum.push(cardImgNum)
      
        
        // clicked.length === 1 ? timeCountDown() : null
        //     clearInterval(clicked.length === clicked)
       
        if(clicked.length === 2){
           
            setTimeout(() => checkCard(), 500)
           
        }
       
    }


    
      
 

 







