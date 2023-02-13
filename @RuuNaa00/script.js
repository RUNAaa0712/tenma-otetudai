document.querySelector(".tab_content").style.display = "block";
document.getElementById("flr-one").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==0) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-two").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==1) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-three").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==2) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-four").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==3) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-five").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==4) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-six").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==5) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-seven").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==6) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-eight").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==7) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-nine").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==8) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})
document.getElementById("flr-ten").addEventListener("click",()=>{
    let all_ele = document.querySelectorAll(".tab_content");
    all_ele.forEach((value,num)=>{ (num==9) ? all_ele[num].style.display = "block" : all_ele[num].style.display = "none"; })
})

let tables = document.querySelectorAll(".table");
for( let num = 0; num < tables.length; num++ ) {
    tables[num].addEventListener("click", (e) => {
        if(e.target.innerHTML!="") {
            let text = document.getElementById("dm").value;
            let name = tables[num].getAttribute("name");
            text = text.replace(name+" ","")
            document.getElementById("dm").value = name + " " + text + e.target.innerHTML + " ";
            document.getElementById("send_dm").setAttribute("href", "https://twitter.com/messages/compose?recipient_id=1352090043339296769&text="
                + "お手伝いよろしくお願いします。【" + document.getElementById("dm").value + "】使用します。" );
        }
    })  
}