var modal = document.getElementById('myModal')
var span = document.getElementsByClassName('close')[0]
var pic = document.getElementById('pic')
var Class1 =  Array.from(document.getElementsByClassName("class1"));




Class1.forEach(container => {
    container.onclick=  (e) => {
        modal.style.display = "block";
        pic.src = e.target.src;
    };
});

span.onclick = function(){
    modal.style.display = 'none'
}