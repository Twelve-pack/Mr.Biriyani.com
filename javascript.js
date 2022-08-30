
function btn(){

   const firstBox = document.getElementById("check-bar").value;

   if (firstBox === "mutton"){
    let imageOne = document.querySelector('.mb1').src = "img/mb3.jpg";
      var cont = document.getElementById('content').innerHTML = "mutton Biriyani <br> ₹ 150/- with discount 10%";
         document.getElementById('image-two').style.display = "none";
           document.getElementById('image-three').style.display = "none";
             cont.style.backgroundColor = "red";

     


   }

   if (firstBox === "chicken"){ 
      let imageOne = document.querySelector('.mb1').src = "img/cb2.jpg";
       var cont = document.getElementById('content').innerHTML = "chicken Biriyani <br> ₹ 110/- with discount 4%";
         document.getElementById('image-two').style.display = "none";
           document.getElementById('image-three').style.display = "none";


   }

   if (firstBox === "gravy"){ 
      let imageOne = document.querySelector('.mb1').src = "img/gravy1.jpg";
       var cont = document.getElementById('content').innerHTML = "chicken gravy <br> ₹ 100/- ";
         document.getElementById('image-two').style.display = "none";
           document.getElementById('image-three').style.display = "none";


   }

   if (firstBox === "mandhi"){ 
      let imageOne = document.querySelector('.mb1').src = "img/mb2.jpg";
       var cont = document.getElementById('content').innerHTML = "Mandhi Biriyani <br> ₹ 110/- with discount 4%";
         document.getElementById('image-two').style.display = "none";
           document.getElementById('image-three').style.display = "none";

   }
}
