window.addEventListener("load",startTimer)
function startTimer(){
    setInterval(displayNextImage,3000);
}
var x=1;
var images=[]
images[0]={image:"demo1.jpg",city:"New York", message:"The atmosphere here in New York is awesome"}
images[1]={image:"demo7.jpg",city:"Chicago",message:"Thank You Chicago-A night we won't forget"}
images[2]={image:"Demo8.jpg",city:"Los Angeles" ,message:"We had the best time playing at Venice Beach"}
function displayNextImage(){
    if(x==images.length){
        x=0
    }
    document.getElementById("displayImage").src=images[x].image
    document.getElementById("city").innerHTML=images[x].city
    document.getElementById("mesg").innerHTML=images[x].message
    x++
}