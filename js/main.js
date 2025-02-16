document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link=>{
        link.addEventListener("click",function(event){
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if(targetSection){
                slowScroll(targetSection, 1200);
            }
        });
    });

    function slowScroll(target, duration){
        let start = window.scrollY;
        let end = target.offsetTop -50;
        let startTime = null;

        function animation(currentTime){
            if (startTime == null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let progress = Math.min(timeElapsed / duration, 1);
            let ease = easeInOutQuad(progress);

            window.scrollTo(0, start + (end - start) * ease);

            if(timeElapsed < duration){
                requestAnimationFrame(animation);
            }
        }
        requestAnimationFrame(animation);
    }
    function easeInOutQuad(t){
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }
});
