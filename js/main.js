// seleziono il container presente nel DOM
// var contenitore = document.getElementById("container");
// console.log(contenitore);

// creo l'arrey contenente le immagini
// var images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
// console.log(images);

// variabili globali
const generalContainer = document.getElementById("container");
let square;
let activeItem = 0;

// creare array con immagini
let listImg = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
console.log(listImg);

// cicliamo l'inserimento delle immagini
for (i = 0; i < listImg.length; i++){

    // creo i div da inserire nel generalContainer
    square = document.createElement("div");
    generalContainer.append(square);

    // inserisco le immagini nel rispettivo div 
    square.innerHTML = `<img src="img/${listImg[activeItem++]}">`;
    
    // aggiunta classe stile css
    square.classList.add("item");
    // square.classList.add("active");
    
    if([i] != 0){
        
        square.classList.add("hidden");
        
    }
}


// seleziono il pulsante per far scorrere le immagini
let freccia = document.querySelector('.freccia');

// gestisco l'evento sul click sul pulsante freccia
freccia.addEventListener('click',

    function(){
        console.log('hai clickato');
        
         
    }

)







