
function handleBreedChoice(){
// this function will be responsible for when users submit the type of breed they want
  
    $('#js-breed-choice').submit(function(event){
            event.preventDefault();
            const breedChoice = $(this).find('input[name="breed-choice"]');
            const breedChoiceValue = breedChoice.val();   
            const breedCorrectFormat = breedChoiceValue.replace(/\s+/g, '').toLowerCase();
           
            breedChoice.val("");
            console.log(`this is the entered breed ${breedCorrectFormat}`);
            getDogImage(breedCorrectFormat);
    });
    console.log('handleBreedChoice ran');
}    

function getDogImage(breed){
// this function will be responsible making GET request to API
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJSON => {
            if(responseJSON.status === 'error'){
                alert(`Hi! Check your spelling. You may have also entered a sub-breed (like Blood Hound) or breed we don't have - sorry!`);
            }
            else{
                displayResults(responseJSON, breed);
            }  
            console.log(`this is the response ${responseJSON.status}`);
        })
        .catch(error => alert(`Something went wrong, please try again`));     
        console.log('getDogImage ran');
}

function displayResults(object, breed){
// this function will display the results of the request (the images) in the DOM
   //clear results if new submit again
   $('.image-container').empty();
   //display the image
    $('.image-container').append(`<h2>Here is a random image of a ${breed}</h2>`);
    $('.image-container').append(`<div class='image-results'></div>`);  
    $('.image-results').append(`<img src="${object.message}" alt=
        "Random Image of a ${breed}" class="img-result">`);
    $('.image-container').removeClass('js-hidden');
    console.log('displayResults ran');
}

function onLoad() {   
   handleBreedChoice();
}

$(onLoad);

