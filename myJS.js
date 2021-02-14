/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

//function changeColor(){
const box = document.getElementById("color-block");


box.addEventListener("click", () => {
    const cl = box.getAttribute("class");
    //Write a condition determine what color it should be changed to
    if(cl === "color1"){
        box.setAttribute("class", "color2");

        //change the background color using JS
        document.getElementById("color-name").innerHTML = "#0000ff";
        //Change the text of the color using the span id color-name

    }
    else{
        box.setAttribute("class", "color1");
        //change the background color using JS
        document.getElementById("color-name").innerHTML = "#F08080"
        //Change the text of the color using the span id color-name


    }
});


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const buttn = document.getElementById("convertbtn");


buttn.addEventListener("click", () => {
    const fTemp = document.getElementById("f-input").value;
    const cTemp = (fTemp - 32) * 5 / 9;   
    document.getElementById("c-output").innerHTML = cTemp;
});

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

//function convertTemp(){
    //Calculate the temperature here

    //Send the calculated temperature to HTML

//}


