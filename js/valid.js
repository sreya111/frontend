
		function valid() {
			let n=document.myform.n1.value;
			let e=document.myform.n2.value;
			let M=document.myform.m.value;
			let P=document.myform.p.value;
			let CP=document.myform.cp.value;
			if(n =="null")
			{
				alert("enter ur name");
				return false;
			}
			if(e =="null" || e=="")
			{
				alert("enter ur Email");
				return false;
			}
			if(M.length==10)
			{
				return true;
			}
			else{
				alert("enter your correct mobile number");
				return false;
			}
			if(P==CP)
			{
				return true;
			}
	

			
		}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}