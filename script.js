let toggle = true;
let img = document.getElementById("mode");
function mode() {
    document.body.classList.toggle("darkmode");
    toggle = !toggle;
    if(toggle) {
        img.src = 'pics/lightmode.png';
        img.style.transition = '1s all ease';
        document.body.style.color = 'rgb(87, 69, 55)';
        document.body.style.background = 'rgb(246, 242, 238)';
        document.getElementById("color1").style.color = 'var(--color)';
        document.getElementById("color2").style.color = 'var(--color)';
        document.getElementById("color3").style.color = 'var(--color)';
        document.getElementById("profile_shadow").src = 'pics/profile_shadow.jpg';
        document.getElementById("resume").style.backgroundColor = 'var(--color)';
        document.getElementById("github_icon").style.backgroundImage = 'url("pics/github_icon.png")';
        document.getElementById("linkedin_icon").style.backgroundImage = 'url("pics/linkedin_icon.png")';
        document.getElementById("email_icon").style.backgroundImage = 'url("pics/email_icon.png")';
        document.getElementById("vertical-line").style.background = 'var(--color)';
    }
    else{
        img.src = 'pics/darkmode.png';
        img.style.transition = '1s all ease';
        document.body.style.color = 'rgb(246, 242, 238)';
        document.body.style.background = 'rgb(87, 69, 55)';
        document.getElementById("color1").style.color = 'var(--background)';
        document.getElementById("color2").style.color = 'var(--background)';
        document.getElementById("color3").style.color = 'var(--background)';
        document.getElementById("profile_shadow").src = 'pics/profile_shadow2.jpg';
        document.getElementById("resume").style.backgroundColor = 'rgb(136, 105, 87)';
        document.getElementById("github_icon").style.backgroundImage = 'url("pics/github_icon2.png")';
        document.getElementById("linkedin_icon").style.backgroundImage = 'url("pics/linkedin_icon2.png")';
        document.getElementById("email_icon").style.backgroundImage = 'url("pics/email_icon2.png")';
        document.getElementById("vertical-line").style.background = 'rgb(136, 105, 87)';
    }
}

function image() {
    document.getElementById("profile").onmousedown(function(e) {
        if(e.button === 2) {
            return false;
        }
    });
}

function type() {
    new Typed('.auto-type', {
        strings: ["Cats", "Designing", "Modeling", "Programming"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
    });
}