fetch( "https://returnjson.runaaa0712.repl.co/api/json?name=yukuri" )
    .then( (response) => response.json() )
    .then( (data) => {
    //   console.log(data);
      let target = document.getElementById("output");
      let header = `<td class="charactor">キャラクター</td><td class="wakuwaku">わくわくの実</td><td class="emblem">紋章</td><td class="remarks">備考</td>`;

      let result = "";
          
      for( let j = 1; j <= Object.keys(data).length; j++ ) {
        result += `<div class="tab_content">`;
        result += `<div class="tab_content_description">`;
        result += `<p class="c-txtsp">${j}の間</p>`;
        result += "<table><tr>" + header + "</tr>";
        for( let n = 1; n < Object.keys(data[j]).length; n++ ) {
          result += `<tr>`;
          result += `<td>${data[j][n].charactor}</td>`;
          result += `<td>${data[j][n].wakuwaku}</td>`;
          result += `<td>${data[j][n].emblem}</td>`;
          result += `<td>${data[j][n].remark}</td>`;
          result += `</tr>`;
        }
          result += `<tr><td colspan="4">${data[j][0].remarks}</td></tr></table></div></div>`;
      }
      target.innerHTML += result;
      setEventListener();
    })

function setEventListener() {
    // document.getElementById("flr-four_content").style.display = "block"; //テスト用
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
}