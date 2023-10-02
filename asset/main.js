$("#header-open").click(function(){
    $("#header-open").toggleClass("nav-view");
    $("header").toggleClass("nav-view");

    if($("#header-open").hasClass("nav-view")){
        $("#header-button").removeClass("fa-angles-down");
        $("#header-button").addClass("fa-angles-up");
        console.log("a");
    }
    else{
        $("#header-button").removeClass("fa-angles-up");
        $("#header-button").addClass("fa-angles-down");
        console.log("b");
    }
    
});

const modal = document.querySelector("dialog");
$(".planet").click(function(){
    modal.showModal()
});

$("#modal-close").click(function(){
    modal.close()
})