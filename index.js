function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("button").on("click", function(){
    if (!$(".box1").val()) {
        $(".box1").val("🚫 Name cannot be empty").show();
        $(".box1").css("color", "red");
    }
    if (!$(".box2").val()) {
        $(".box2").val("🚫 Name cannot be empty").show();
        $(".box2").css("color", "red");
    }
    if (!$(".box3").val()) {
        $(".box3").val("🚫 Email cannot be empty").show();
        $(".box3").css("color", "red");
    }
    var email = $(".box3").val();
    if (!isEmail(email)){
        $(".box3").val("🚫 Looks like this is not an email").show();
        $(".box3").css("color", "red");
    }
    if (!$(".box4").val()) {
        $(".box4").val("🚫 Password cannot be empty").show();
        $(".box4").css("color", "red");
        $(".box4").get(0).type = 'text';
    }
})