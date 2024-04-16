function changeColorScheme(colorScheme) {//FOR COLOR CHANGING
    document.body.className = 'color-scheme-' + colorScheme;
}

function changeFontSize(fontSize) {// FOR FONT SIZE CHANGING
    document.body.style.fontSize = fontSize + 'px';
}
function displayImage(imageUrl, description1,description2) {
    var selectedImage = document.getElementById("selectedImage");//CREATE A VARIABLE(SELECTED IMAGE) AND STORE 
    selectedImage.src = imageUrl;//REPLACE IMAGE URL
    var selectedImageDescription = document.getElementById("selectedImageDescription");
    selectedImage.alt = description1;//REPLACE IMAGE ALT
    var newDivContent = document.querySelector(".new-div-content");
    newDivContent.textContent = description2;//REPLACE IMAGE CONTANT PHARAGRAPH

    // Highlight the clicked description
    var clickedDescription = currentTarget.querySelector(".description");
    clickedDescription.classList.add("highlighted");

    //REMOVE HIGHLIGHT WHEN ANOTHER IMAGE CLICKED
    var allDescriptions = document.querySelectorAll(".description");
    allDescriptions.forEach(function (description) {
        description.classList.remove("highlighted");
    });
}
