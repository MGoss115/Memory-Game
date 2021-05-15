

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
    const won = document.querySelector('.youWon')
    let clicked = []
    let clickedNum = []
    let matched = []
    let time = 60
    let test 

    // function shuffleCards(){
    //     let newCard = 0
    //     let tempCard = 0

    //     for(let i = arr.length - 1; i >= 0; i--){
    //         newCard = Math.floor(Math.random() * 11)
    //         tempCard = arr[i]
    //         arr[i] = arr[newCard]
    //         arr[newCard] = tempCard
    //     }
    //     return arr
    // }
//Timer
    function timeCountDown(){
        test = setInterval(function(){
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
        document.querySelector('.timeOut').textContent = "TIME OUT!!!" 
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
            won.textContent = 'You Found All 6 Matches!!!'
          
        }
        
       
     }

    //flip cards 
    function cardImgDisplay(){
        
        let cardImgNum = this.getAttribute('data-index')
        this.setAttribute('src', arr[cardImgNum].img)
        clicked.push(arr[cardImgNum].name)
        clickedNum.push(cardImgNum)
        // this.setAttribute('src', arr[cardImgNum].img)
        if(clicked.length === 2){
            setTimeout(() => checkCard(), 500)
           
        }
    }
    resetBtn.addEventListener('click', reset)
        
    function reset(){
        time = 60
        clearInterval(test)
        startBtn.removeEventListener('click', timeCountDown)
        startBtn.addEventListener('click', timeCountDown)
        
        clicked = []
        clickedNum = []
        matched = []
       
        
            document.querySelector('.grid').innerHTML = " "
            document.querySelector('.timeOut').textContent = " " 
            document.querySelector('#score').textContent =  " "
            document.querySelector('.youWon').textContent = " "
            document.querySelector('#timer').innerHTML = `${time} seconds`

        gameBoard()    
           
        }
       
    
   
   


    
      
 

 







