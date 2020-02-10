//PseudoCode for #1
/*
-Let users submit a value
-make a get request to the api using the submitted value
-print results to console
*/

//PseudoCode for #2
/*
-Let users submit a value
-make a get request to the api using the submitted value
-render images to page
*/

//

function handleNumberChoice(){
// this function will be responsible for when users submit the number of images they want
  //Pseudocode of steps
    //Listen for a submit (return or button click)
    //stop default
    //Get input value (number) from from input on submit
    //default = 3
    //clear input value
    //store entry in a variable to use in getDogImages (the API request function)
    //call getDogImages
    $('#js-number-of-image-form').submit(function(event){
            event.preventDefault();
            const numberOfImages = $(this).find('input[name="number-of-images"]');
            let numberOfImagesValue = 3; //default value; although reg so not sure why need default
           if(numberOfImages.val()){
               numberOfImagesValue = numberOfImages.val();             
           }
            console.log(`this is the entered number ${numberOfImagesValue}`);
            numberOfImages.val("");
            getDogImages(numberOfImagesValue);
    });
    
    console.log(`handleNumberChoices ran`);
}    

function getDogImages(number){
// this function will be responsible making GET request to API
  //Pseudocode of steps
    //make call to fetch API method using correct url as argument
    //turn response into JSON object
    //display results or call displayResults function
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
        .then(response => response.json())
        .then(responseJSON =>console.log(responseJSON))
        .catch(error => alert('Something went wrong, please try again'));    
    console.log(`getDogImages ran`);
}

function displayResults(){
        //display result of API request in console
        console.log(`displayResults ran`);
}
    

function onLoad() {   
   handleNumberChoice();
}
  
$(onLoad);

