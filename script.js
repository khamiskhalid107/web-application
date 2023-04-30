let slideIndex = 0;
let timer;
function showSlides(){
    const slides = 
 document.querySelectorAll(".picha");
    for(let i = 0;i < slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;

}
slides[slideIndex - 1].style.display = "block";

    timer = setTimeout(showSlides,3000);
}
function showTime() {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	
	const clock = document.getElementById("clock");
	
	clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
	
	setTimeout(showTime, 1000);
}

showSlides();
showTime();