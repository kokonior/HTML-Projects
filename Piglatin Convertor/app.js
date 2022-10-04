const textInput = document.querySelector('#input-field');
const piglatinOutput = document.querySelector('#final-output');

textInput.addEventListener('input', function(e){
    
    var i, text, hasVowel = -1;
    const vowels = ["a","e","i","o","u"];
    text = this.value.trim();
    var words = text.split(' ');
    var finalOutput='';
    console.log(words);

    for(var j = 0; j< words.length; j++){
        hasVowel = -1;

        for(i = 0;i < words[j].length;i++){
            console.log(text[i]);
            if(vowels.indexOf(words[j][i].toLowerCase()) != -1){
                hasVowel = i;
                break;
            }
        }
    
        if(hasVowel<0){
            finalOutput += words[j];
            // finalOutput = '0';
        }
        else if(hasVowel==0){
            finalOutput += words[j] + 'yay';
            // finalOutput = '1';
        }
        else{
            finalOutput += words[j].substring(hasVowel) + words[j].substring(0,hasVowel) + 'ay';
            // piglatinOutput.textContent = '2';
        }    

        finalOutput += ' ';
    }

    piglatinOutput.textContent = finalOutput;     
    
    
});

const fileSelector = document.getElementById('upload-file')

fileSelector.addEventListener('change', function(e){
    const reader = new FileReader();
    reader.readAsText(fileSelector.files[0])
    
    reader.onload= function(){
        textInput.innerHTML = reader.result;
    }
})