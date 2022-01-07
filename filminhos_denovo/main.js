function random_movie(){
    var movies= new Array('The Departed', 'Whiplash', 'O Grande Truque', 'Um Crime de Mestre','Filhos da Esperança');
    var random = movies[Math.floor(Math.random() * movies.length)];
   document.getElementById("filme").innerHTML=random;
}
