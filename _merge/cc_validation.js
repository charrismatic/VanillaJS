// jwjenkin edit to fix number inputs
$("input#card_number").keydown(function(e) {
    var n = $(this).val();
    n = n.replace(/([\d]{4})/g,"$1 ");
    n = n.replace(/[\s]{1,}/g," ");
    n = n.replace(/[^\d ]/g,"");

    if (n.length > 19) {
        $(this).val(n.substring(0,19));
	// only return false if individual letter/number/symbol hit
	// i.e., allow backspace, delete, arrow left, etc
	if (e.key.length < 2)
        return false;
    }

    $(this).val(n.trim());
});

$("input#card_cvv").keyup(function(e){
    var n = $(this).val();
    n = n.replace(/[^\d]/g,"");
    if (n.length > 4) {
        $(this).val(n.substring(0,4));
        return false;
    }


    $(this).val(n);
});

$("input#card_exp").keyup(function(e){
    var n = $(this).val();
    n = n.replace(/[^\d\/]/g,"");
    $(this).val(n.replace(/^([\d]{2})[ ]{0,1}[\/]{0,1}[ ]{0,1}([\d]{0,4})[\d]{0,}$/g,"$1 / $2"));
});

$("input#card_amount").keyup(function(e){
    var n = $(this).val();
    n = n.replace(/[^\d\.]/g,"");
    n = n.replace(/[\.]{1,}/g,".");
    var tmp = n.split('.');
    if (tmp.length > 2) {
        n = tmp.splice(0,1)[0];
        n += "."+tmp.join("");
    }
    $(this).val(n.replace(/^([\d]{1,})[\.]{1,}([\d]{0,2})[\d]{0,}$/g,"$1.$2"));
});
