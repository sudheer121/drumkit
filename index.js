function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    btnAnimation(buttonInnerHTML);
    console.log(buttonInnerHTML);
    var fileName;
    switch(buttonInnerHTML)
    {
        case 'w':
            fileName = "tom-1.mp3";
            break;
        case 'a':
            fileName = "tom-2.mp3";
            break;
        case 's':
            fileName = "tom-3.mp3";
            break;
        case 'd':
            fileName = "tom-4.mp3";
            break;
        case 'j':
            fileName = "snare.mp3";
            break;
        case 'k':
            fileName = "crash.mp3";
            break;
        case 'l':
            fileName = "kick-bass.mp3";
            break;     
        default:
            console.log(buttonInnerHTML);   
    }
    fileLoc = "sounds/" + fileName;
    console.log(fileLoc);
    var audio = new Audio(fileLoc);
    audio.play();
}

function handleKeyClick(event) {
    var k = String(event.key); 
    btnAnimation(event.key); 
    switch(k)
    {
        case 'w':
            fileName = "tom-1.mp3";
            break;
        case 'a':
            fileName = "tom-2.mp3";
            break;
        case 's':
            fileName = "tom-3.mp3";
            break;
        case 'd':
            fileName = "tom-4.mp3";
            break;
        case 'j':
            fileName = "snare.mp3";
            break;
        case 'k':
            fileName = "crash.mp3";
            break;
        case 'l':
            fileName = "kick-bass.mp3";
            break;     
        default:
            console.log(k);   
    }
    fileLoc = "sounds/" + fileName;
    console.log(fileLoc);
    var audio = new Audio(fileLoc);
    audio.play();
}

var btntargets = document.querySelectorAll('button')

for(var i=0;i<btntargets.length;i++)
{
btntargets[i].addEventListener('click',handleClick )
}
document.addEventListener("keydown",handleKeyClick);
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

function btnAnimation(key) {
    var target = document.querySelector("." + key); 
    target.classList.toggle("pressed");
    setTimeout(function(){
        target.classList.toggle("pressed");
    },100);
    
}