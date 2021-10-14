document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino') //getting the dino div by its class
    const grid = document.querySelector('.grid') //getting the grid div by its class
    const alert = document.getElementById('alert') //getting the grid div by its class
    let isJumping = false
    let gravity = 0.9
    let isGameOver = false




    function control(e){
        if (e.keyCode === 32) { //the spacebar  https://keycode.info/
        {
            if (!isJumping) // isJumping is false
            { //if the dino while pressing the spacebar isn't jumping make it jump
                isJumping = true
                jump()
            }
            
        }
       
    }

    }
    document.addEventListener('keyup', control) //if the keyup event is triggered the control function will roll

    let position = 0
        function jump(){
            let count = 0
            let timeId = setInterval(function () {

                 //move down
            if (count === 15) {
                clearInterval(timeId)
                console.log('down')
                let downIntervalId = setInterval(function() {
                    if(count === 0 ){
                        clearInterval(downIntervalId)
                        isJumping = false //after clearing the interval isJumping returns to false so we can hit jump again 
                    }
                    position -= 5
                    count--
                    position = position * gravity 
                    dino.style.bottom = position + 'px'
                },20)
                
            }
                //move up
                console.log('up')
                position+=30
                count++
                position = position * gravity 
                dino.style.bottom = position + 'px'
                console.log(dino.style.bottom)

            },20)
        }


        //generating the obstacles
        function Obstacles(){
            let randomTimeInterval  = Math.random() * 4000 //having a random number from 0 to 4000 ms at random
            let obstaclePosition = 1000
            const obstacle = document.createElement('div')

            if(!isGameOver) obstacle.classList.add('obstacle')
            //adding the obstacle div to our grid div with dom
            grid.appendChild(obstacle)
            obstacle.style.left = obstaclePosition + 'px'



            let obstacleTimeId = setInterval(function() {
                    if(obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
                        clearInterval(obstacleTimeId)
                        alert.innerHTML = 'GAME OVER'
                        isGameOver = true
                        //removing all children
                        while (grid.firstChild){
                            grid.removeChild(grid.lastChild) //removing the obstacles when they hit the position 0
                        }
                    }


                obstaclePosition -= 10
                obstacle.style.left = obstaclePosition + 'px'
                
            },20) 
            if(!isGameOver){
                setTimeout(Obstacles, randomTimeInterval)
            }
            
        }//every 20ms
        Obstacles()

})

