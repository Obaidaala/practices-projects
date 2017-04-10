var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function add(song){
    
    console.log(song);
    
}
//add(lyrics);

function add (song){
    
    var music = "";
    for(var i= 0; i < song.length; i++){
        music = music + song[i] + "";
        console.log(music);
        }
    console.log(music);
}

  //add(lyrics);

function add (song){
    song.reverse();
    
    console.log(song);
    
}
 
//add(lyrics);

function add (song){
    for(var i= 0; i < song.length; i++){
         if(i % 2 !== 0) {
             console.log(song[i]); 
             
         }
         } 
         }

add(lyrics);