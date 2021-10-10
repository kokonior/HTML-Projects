const text=document.querySelector('.text-loop');
const phrases=["Coder.","Designer.","Social Worker.","Dreamer."];
let i=0;
let j=0;
let currentPhrase=[];
let isDeleting=false;
let isEnd=false;
function loop()
{
    isEnd=false;
    text.innerHTML=currentPhrase.join('');
    if(i<phrases.length)
    {
        if(!isDeleting && j<=phrases[i].length){
            currentPhrase.push(phrases[i][j]);
            j++;
        }
        if(isDeleting && j<=phrases[i].length){
            currentPhrase.pop(phrases[i][j]);
            j--;
        }
        if(j==phrases[i].length){
            isEnd=true;
            isDeleting=true;
        }
        if(isDeleting && j==0)
        {
            currentPhrase=[];
            isDeleting=false;
            i++;
            if(i==phrases.length){
                i=0;

            }
        }
    }
    const speedUp=80;
    const slowDown=400;
    const time=isEnd? 1000: isDeleting? speedUp : slowDown;
    setTimeout(loop,time);

}
loop();