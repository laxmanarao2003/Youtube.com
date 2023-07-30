/************ Index.html page JS *************/
/************ Index.html page JS *************/

let ele=document.querySelectorAll("#nav-items .nav-link");
let card=document.querySelectorAll(".card");
let cardtext=document.querySelectorAll(".card-text");
let cardimg=document.querySelectorAll(".card-img-top");
var ellipsis=document.querySelectorAll(".fa-ellipsis-vertical");
let threebars=document.getElementById("threebars");
var sidenav=document.getElementById("sidenav");
let section=document.getElementsByTagName("section");
let width=$("section").innerWidth();

/* when user clicks nav symbol it would be toggled so,Toggle classes (using JQUERY) for 
    1. navigation increase 
    2. navigation decrease 
    3. videos increase 
    4. videos decrease 
*/
$("document").ready(function(){
    $("#threebars").click(function(){
        if($("section").innerWidth()>=970){
            $("#side-navbar").toggleClass("navreduce");
            $("#nav-items").toggleClass("align-items-center");
            $("#parentsidenav").toggleClass("navincrease");
            $("#side-navbar").toggleClass("navincrease");
            $("#videos").toggleClass("cardsincrease");
            $("#videos").toggleClass("cardsdecrease");
            $(".justify-content-evenly").toggleClass("ms-5");
            $("#hided-nav-items li").toggleClass("py-2");
            $("#hided-nav-items li").toggleClass("ps-2");
            $("#hided-nav-items li").toggleClass("mt-2");
            $("#nav-items").toggleClass("d-flex");
            $("#nav-items").hide();
            $("#hided-nav-items").show();
        }
    });
});

window.addEventListener("resize",()=>{

    /* Hiding both side-navbars and then increase the cards length also activate the offcanvas vertical nav-bar:)*/
    if($("section").innerWidth()<=970){
        $("#side-navbar").addClass("navreduce");
        $("#nav-items").addClass("align-items-center");
        $("#parentsidenav").removeClass("navincrease");
        $("#side-navbar").removeClass("navincrease");
        $("#videos").addClass("cardsincrease");
        $("#videos").removeClass("cardsdecrease");
        $(".justify-content-evenly").removeClass("ms-5");
        $("#nav-items").removeClass("d-flex");
        $("#hided-nav-items").removeClass("d-flex");
        $("#nav-items").hide();
        $("#hided-nav-items").hide();
        $("#threebars").attr("data-bs-toggle","offcanvas");
        $("#threebars").attr("data-bs-target","#Id1");
    }
    // if width>960 the side navbar remains same:)
    else{
        $("#side-navbar").removeClass("navreduce");
        $("#nav-items").removeClass("align-items-center");
        $("#parentsidenav").addClass("navincrease");
        $("#side-navbar").addClass("navincrease");
        $("#videos").removeClass("cardsincrease");
        $("#videos").addClass("cardsdecrease");
        $(".justify-content-evenly").removeClass("ms-5");
        $("#hided-nav-items li").removeClass("py-2");
        $("#hided-nav-items li").removeClass("ps-2");
        $("#hided-nav-items li").removeClass("mt-2");
        $("#nav-items").addClass("d-flex");
        $("#hided-nav-items").addClass("d-flex");
        $("#nav-items").show();
        $("#hided-nav-items").hide();
        $("#threebars").attr("data-bs-toggle","");
        $("#threebars").attr("data-bs-target","");
    }

    // Hiding search bar when width less than 815px:)
    if($("nav").innerWidth()<815)
    {
        $("#searchinp").hide();
        $("a.searchicon").attr("id","searchsubmitclass");
        $(".navbar-brand").addClass("me-auto");
        $(".searchinp").parent().removeClass("ms-auto");
        $("#loginprofile").removeClass("ms-auto");
    }
    else{
        $("#searchinp").show();
        $("a.searchicon").attr("id","searchsubmit");
        $(".navbar-brand").removeClass("me-auto");
        $(".searchinp").parent().addClass("ms-auto");
        $("#loginprofile").addClass("ms-auto");
    }

    // Hiding side nav-bar when width less than 455px:)
    if($("nav").innerWidth()<455)
    {
        $("#assistant").hide();
        $(".videocall").hide();
        $(".notify").hide();
    }
    else{
        $("#assistant").show();
        $(".videocall").show();
        $(".notify").show();
    }
    
});

/* After user refreshing a website or entering to this site:) */
if(width<920 && width>=850){
    $("#side-navbar").addClass("navreduce");
        $("#nav-items").addClass("align-items-center");
        $("#parentsidenav").removeClass("navincrease");
        $("#side-navbar").removeClass("navincrease");
        $("#videos").addClass("cardsincrease");
        $("#videos").removeClass("cardsdecrease");
        $(".justify-content-evenly").addClass("ms-5");
        $("#hided-nav-items li").addClass("py-2");
        $("#hided-nav-items li").addClass("ps-2");
        $("#hided-nav-items li").addClass("mt-2");
        $("#nav-items").removeClass("d-flex");
        $("#nav-items").hide();
        $("#hided-nav-items").show();
}
else if($("section").innerWidth()<850){
    $("#side-navbar").addClass("navreduce");
    $("#nav-items").addClass("align-items-center");
    $("#parentsidenav").removeClass("navincrease");
    $("#side-navbar").removeClass("navincrease");
    $("#videos").addClass("cardsincrease");
    $("#videos").removeClass("cardsdecrease");
    $("#nav-items").removeClass("d-flex");
    $("#hided-nav-items").removeClass("d-flex");
    $("#nav-items").hide();
    $("#hided-nav-items").hide();
    $("#threebars").attr("data-bs-toggle","offcanvas");
    $("#threebars").attr("data-bs-target","#Id1");
}
if($("nav").innerWidth()<815)
{
    $("#searchinp").hide();
    $("a.searchicon").attr("id","searchsubmitclass");   
}
else{
    $("#searchinp").show();
    $("a.searchicon").attr("id","searchsubmit");
}

// setting height and width to each card:)
card.forEach(e=>{
    e.classList.add("mt-4");
    e.classList.add("border-0");
    e.style.height="320px";
    e.style.width="310px";
    e.setAttribute("id","cardattr");
});

// adding text color to all the card-text which is inside the card-inner class:)
cardtext.forEach(e=>{
    e.classList.add("text-light");
});

// setting size to each card image:)
cardimg.forEach(e=>{
    e.style.height="290px";
    e.style.width="310px";
});

// Add color as black to all the list items(vertical navigation):)
ele.forEach(e => {
    e.classList.add("text-dark");
});

/************ END Index.html page JS *************/
/************ END Index.html page JS *************/





/****************** Video playing page JS ********************/
    $(document).ready(function(){
        $("video").css("width",$("section").innerWidth());
    });

    window.addEventListener("resize",()=>{
        $("video").css("width", $(section).innerWidth());
    });
/****************** Video playing page JS ********************/