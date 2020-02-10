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
    //Listen for a submit (return or button click)
    //Get input value (number) from from input on submit
    //default = 3
    //stop default
    //clear input value
    //store entry in a variable to use in getDogImages (the API request function)
    //call getDogImages
    console.log(`handleNumberChoices ran`);
}    


function getDogImages(){
    //make call to fetch API method using correct url as argument
    //turn response into JSON object
    //display results or call displayResults function
     /*   fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
          .then(response => response.json())
          .then(responseJson => 
            displayResults(responseJson))
          .catch(error => alert('Something went wrong. Try again later.'));*/
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

