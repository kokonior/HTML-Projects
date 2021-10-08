window.onload = () => {
   // Creating helper function to set multiple attributes
   function setAttribute(elmName,attribute){
      for(let key in attribute){
         elmName.setAttribute('elmName','attribute[key]');
      }
   }

   var html = document.getElementsByTagName('html');
   html.style.innerText = `font-size: 12px;font-weight: 300;`;

   var body = document.getElementsByTagName('body');
   body.style.width = '90vw';



   var main = document.createElement('main');
   var startScreen = document.createElement('div');   // create a div
   startScreen.setAttribute('id','startScreen');   // setting id to div
   var note1 = document.createElement('h1');
   note1.innerText = "Guess the Random number between 1-100";
   startScreen.appendChild(note1);    // added a heading  to start screen


   main.appendChild(startScreen);            // added a div to main
   document.body.appendChild(main);          // added a main in body

}