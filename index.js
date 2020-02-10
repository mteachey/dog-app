
function handleNumberChoice(){
// this function will be responsible for when users submit the number of images they want
  
    $('#js-number-of-image-form').submit(function(event){
            event.preventDefault();
            const numberOfImages = $(this).find('input[name="number-of-images"]');
            let numberOfImagesValue = 3; //default value; although reg so not sure why need default
           if(numberOfImages.val()>=1 && numberOfImages.val()<=50){
               numberOfImagesValue = numberOfImages.val();   
               numberOfImages.val("");
               getDogImages(numberOfImagesValue);          
           } 
           else if(numberOfImages.val()<1 || numberOfImages.val()>50){
                alert('Please enter a number between 1 and 50');
           }       
            
    });
}    

function getDogImages(number){
// this function will be responsible making GET request to API
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJSON => displayResults(responseJSON, number))
        .catch(error => alert('Something went wrong, please try again'));     
}


function displayResults(object, number){
// this function will display the results of the request (the images) in the DOM
   //clear results if new submit again
   $('.image-container').empty();
   //display the images
    $('.image-container').append(`<h2>Your ${number} dog image(s)</h2>`);
    $('.image-container').append(`<div class='image-results'></div>`);
     for (i=0; i<number; i++){
        console.log(`this ${object.message[i]} is the value of number ${i} `);
        $('.image-results').append(`<img src="${object.message[i]}" alt=
        "Random Dog Image ${i+1}" class="img-result">`);
      };//end of for loop
    $('.image-container').removeClass('js-hidden');
}

function onLoad() {   
   handleNumberChoice();
}
  
$(onLoad);

