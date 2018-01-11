window.onload = function () {
    init();

    function init() {
        console.log("Console Works");
    }
    /*Used to check if the console works. Also used to check if the web-page has been loaded.*/

    //Assigns div "image" to variable
    var picture = document.getElementById("image");
    
    //Creates a new img element within the document
    var img = document.createElement("IMG");
    
    //Returned picture is assigned to the newly created img element
    picture.appendChild(img);
    
    //Image dimension are set
    img.width = "189";
    img.height = "436";

    img.src = "assets/strawberry.png"; //Assigns the first to be shown when the page is finally loaded
    
    //Index counter is created, and will be used to cycle through the array "images" down below
    var counter = 0;
    
    //String array of the file names, which will later be concatenate to provide their full file name
    var images = ["strawberry", "vanilla", "bubblegum", "mint", "blueberry", "grape"];
    
    //Right Button
    var aRight = document.getElementById("aRight");
    
    //Left Button
    var aLeft = document.getElementById("aLeft");

    //Code for when the right button is clicked
    aRight.addEventListener("click", function () {
        counter += 1;
        if (counter >= images.length) {
            counter = images.length - 1;
        }
    //Image file name is combined here, [counter] accesses the image file name from the array made above
        else {
            img.src = "assets/" + images[counter] + ".png";
        }

    });
    
    //Code for when the left button is clicked
    aLeft.addEventListener("click", function () {
        counter -= 1;

        if (counter < 0) {
            counter = 0;
        }
    //Same principle as right button
        else {
            img.src = "assets/" + images[counter] + ".png";
        }
    });
}
