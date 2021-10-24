var url=`https://api.chucknorris.io/jokes/random`;
fetch(url)
.then(function(response){
   response.json().then(data =>{
      console.log(data);
      var value=data.value;
      document.getElementById('joke').innerHTML=value;
   })
});
