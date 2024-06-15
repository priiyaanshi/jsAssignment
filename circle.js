
let firstChild;
let secondChild;

function createCircle(){
    //random radius
    var radius = Math.floor(Math.random() * 200) + 50; 

    var circle = document.createElement('div');

    circle.style.width = radius + 'px';
    circle.style.height = radius + 'px';
    circle.style.border = '2px solid black'; 
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.left = (event.clientX - radius / 2) + 'px'; 
    circle.style.top = (event.clientY - radius / 2) + 'px';

    return circle;
    
}

document.addEventListener('click', function(event) {
    console.log(document.querySelectorAll('div').length);
    if (document.querySelectorAll('div').length === 2){
        document.body.removeChild(document.querySelector('div'));
    }
    let circle = createCircle();
    document.body.appendChild(circle);

    let allCircles = document.querySelectorAll('div');
    allCircles.forEach(function(existingCircle) {
        let existRadius = parseInt(existingCircle.style.width)/2;
        let curRadius = parseInt(circle.style.width)/2
        if (existingCircle !== circle){
            let dx = parseInt(existingCircle.style.left) - parseInt(circle.style.left);
            let dy = parseInt(existingCircle.style.top) - parseInt(circle.style.top);
            let dist = Math.sqrt((dx * dx) + (dy * dy));
            let sum = (curRadius + existRadius);
            if (dist < sum){
                alert("circles intersecting");
                console.log('Intersection detected!');
            }
        }
    });
});


