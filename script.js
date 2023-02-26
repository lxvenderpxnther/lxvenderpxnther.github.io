let toggle = true;
let img = document.getElementById("mode");

function mode() {
    document.body.classList.toggle("darkmode");
    toggle = !toggle;
    if(toggle) {
        console.log("light");
        img.src = 'pics/lightmode.png';
        img.style.transition = '1s all ease';
        document.body.style.color = 'var(--color)';
        document.body.style.background = 'var(--background)';
        document.getElementById("color1").style.color = 'var(--color)';
        document.getElementById("color2").style.color = 'var(--color)';
        document.getElementById("color3").style.color = 'var(--color)';
        document.getElementById("profile_shadow").src = 'pics/profile_shadow.png';
        document.getElementById("resume").style.backgroundColor = 'var(--color2)';
        document.getElementsByTagName("a")[3].style.color = 'var(--background)';
        document.getElementById("github_icon").style.backgroundImage = 'url("pics/github_icon.png")';
        document.getElementById("linkedin_icon").style.backgroundImage = 'url("pics/linkedin_icon.png")';
        document.getElementById("email_icon").style.backgroundImage = 'url("pics/email_icon.png")';
        document.getElementById("vertical-line").style.background = 'var(--color2)';
    }
    else{
        console.log("dark");
        img.src = 'pics/darkmode.png';
        img.style.transition = '1s all ease';
        document.body.style.color = 'var(--background)';
        document.body.style.background = 'var(--color)';
        document.getElementById("color1").style.color = 'var(--background)';
        document.getElementById("color2").style.color = 'var(--background)';
        document.getElementById("color3").style.color = 'var(--background)';
        document.getElementById("profile_shadow").src = 'pics/profile_shadow2.png';
        document.getElementById("resume").style.backgroundColor = 'var(--background)';
        document.getElementsByTagName("a")[3].style.color = 'var(--color2)';
        document.getElementById("github_icon").style.backgroundImage = 'url("pics/github_icon2.png")';
        document.getElementById("linkedin_icon").style.backgroundImage = 'url("pics/linkedin_icon2.png")';
        document.getElementById("email_icon").style.backgroundImage = 'url("pics/email_icon2.png")';
        document.getElementById("vertical-line").style.background = 'var(--background)';
    }
}

// function image() {
//     document.getElementById("profile").onmousedown(function(e) {
//         if(e.button === 2) {
//             return false;
//         }
//     });
// }

function type() {
    new Typed('.auto-type', {
        strings: ["Cats", "Pixelart", "Designing", "3D Modeling", "Programming"],
        typeSpeed: 50,
        backSpeed: 20,
        loop: true,
    });
}