const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes); /*sayfanın scroll una fonksiyon tanımladık */

checkBoxes();

function checkBoxes(){   
    const triggerBotom = (window.innerHeight / 6) * 4;      /*windows.innerHeight : sayfanın yüksekliğini verir*/ 

    boxes.forEach(box => {
        /* box parametresi foreach döngüsünün her seferinde bir box' ı temsil eder*/
        /*getBoundingClientRect() : elementin konumu ve boyutna göre yerini verir */
        const boxTop = box.getBoundingClientRect().top;  

        /* eğer box ın konumu sayfanın yüksekliğinden küçük ise "show" classı verilir ve animasyonlu şekilde ortaya gelir*/
        if(boxTop < triggerBotom){
            box.classList.add("show");
        }else{
            box.classList.remove("show"); 
        }
    })
}






