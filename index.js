let hostScore=document.getElementById("host_score")
let guestScore=document.getElementById("guest_score")
let count1=0
let count2=0
function guest1(){
   // alert("warning")
    count1+=1
    guestScore.value=count1
}
function guest2(){
    // alert("warning")
     count1+=2
     guestScore.value=count1
 }
 function guest3(){
    // alert("warning")
     count1+=3
     guestScore.value=count1
 }
 function host1(){
     count2+=1
     hostScore.value=count2
 }
 function host2(){
    count2+=2
    hostScore.value=count2
}
function host3(){
    count2+=3
    hostScore.value=count2
}

function newGame(){

    count1=0
    guestScore.value=count1
    count2=0
    hostScore.value=count2

}