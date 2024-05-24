function createImage(src,item){
    let box2 = document.querySelector(".box2");    
    let image = document.createElement('div');
    image.classList.add('image');
    let img = document.createElement('img');
    img.src = src;
    img.alt = item;

    image.appendChild(img);
    box2.appendChild(image);
}


document.addEventListener("DOMContentLoaded", function() {

    var gates = [
        "gates/1.webp",
        "gates/2.jpg",
        "gates/3.avif",
        "gates/4.jpeg",
        "gates/5.jpg"
    ];

    var windows = [
        "windows/1.jpg",
        "windows/2.webp",
        "windows/3.jpg",
        "windows/4.jpg",
        "windows/5.jpg",
        "windows/6.jpg",
        "windows/7.jpg",
    ] 

    var roofs = [
        "roof/1.jpg",
        "roof/2.jpg",
        "roof/3.png",
        "roof/4.jpeg",
        "roof/5.jpg"
    ]

    var railing = [
        "railings/1.jpg",
        "railings/2.jpg",
        "railings/3.jpg",
        "railings/4.avif",
        "railings/5.webp",
        "railings/6.jpg",
        "railings/7.jpg",
    ] 


    var grill = [
        "grills/1.jpg",
        "grills/2.jpeg",
        "grills/3.webp",
        "grills/4.jpg",
        "grills/5.png",
        "grills/6.jpg"
    ]



    var fence = [
        "fences/1.jpg",
        "fences/2.jpg",
        "fences/3.jpg",
        "fences/4.jpeg",
        "fences/5.jpeg",
        "fences/6.jpg",
        "fences/7.webp",
        "fences/8.jpg"
    ]


    var door = [
        "doors/1.jpg",
        "doors/2.webp",
        "doors/3.webp",
        "doors/4.webp"
    ]



    // Get the select element
    let selectElement = document.getElementById("itemSelect");
    let box2 = document.querySelector(".box2");

    // Add event listener to listen for changes
    selectElement.addEventListener("change", function() {
        let selectedValue = selectElement.value;

        if(selectedValue){
            let box1 = document.querySelector(".box1");
            box1.style.display = "none";
        }

        // Clear the existing images from the container
        document.querySelector(".box2").innerHTML = '';
        
        console.log("Selected value:", selectedValue);
        
        switch (selectedValue) {
            case "gates":
                gates.forEach(ele => {
                    createImage(ele,"gates/Image")
                })
                break;
            case "windows":
                windows.forEach(ele => {
                    createImage(ele,"windows/Image")
                })
                break;
            case "grills":
                grill.forEach(ele => {
                    createImage(ele,"windows/Image")
                })
                break;
            case "railings":
                railing.forEach(ele => {
                    createImage(ele,"windows/Image")
                })
                break;
            case "fences":
                fence.forEach(ele => {
                    createImage(ele,"windows/Image")
                })
                break;
            case "doors":
                door.forEach(ele => {
                    createImage(ele,"windows/Image")
                })
                break;
            case "awnings":
                roofs.forEach(ele => {
                    createImage(ele,"windows/Image")
                })
                break;
        
            default:
                
                break;
        }
        
    });
});
