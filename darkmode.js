let toggle = true;
let img = document.getElementById("mode");
function mode() {
    document.body.classList.toggle("darkmode");
    toggle = !toggle;
    if(toggle) {
        img.src = 'pics/lightmode.png';
        img.style.transition = '0.5s all ease';
        console.log('light');
        document.body.style.color = 'rgb(87, 69, 55)';
        document.body.style.background = 'rgb(246, 242, 238)';
        document.getElementById("color1").style.color = 'rgb(87, 69, 55)';
        document.getElementById("color2").style.color = 'rgb(87, 69, 55)';
        document.getElementById("color3").style.color = 'rgb(87, 69, 55)';
        document.getElementById("profile_shadow").src = 'pics/profile_shadow.jpg';
    }
    else{
        img.src = 'pics/darkmode.png';
        img.style.transition = '0.5s all ease';
        console.log('dark');
        document.body.style.color = 'rgb(246, 242, 238)';
        document.body.style.background = 'rgb(87, 69, 55)';
        document.getElementById("color1").style.color = 'rgb(246, 242, 238)';
        document.getElementById("color2").style.color = 'rgb(246, 242, 238)';
        document.getElementById("color3").style.color = 'rgb(246, 242, 238)';
        document.getElementById("profile_shadow").src = 'pics/profile_shadow2.jpg';

    }
}