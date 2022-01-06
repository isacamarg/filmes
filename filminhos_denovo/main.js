function random_movie(){
    var movies= new Array('The Departed', 'Whiplash', "Etc", 'O Grande Truque');
    var random = movies[Math.floor(Math.random() * movies.length)];
   document.getElementById("filme").innerHTML=random;
}