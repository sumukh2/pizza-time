var menu_list=["cheese pizza","more cheese pizza","9879mo*&*poz"];
function getmenu(){
    var htmldata;
    menu_list.sort();
    for( var i=0; i<menu_list.length;i++){
        htmldata=htmldata+ '<li>' + menu_list[i] + '<li>';
    }
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}
function additem(){
    var htmldata;
    var item=document.getElementById("itam").value;
    menu_list.push(item);
    menu_list.sort();
    htmldata='<section class="cards">';
    for(var i=0; i<menu_list.length;i++){
        htmldata=htmldata+'<div class="card">' + '<img src="https://previews.123rf.com/images/mayatnik/mayatnik1609/mayatnik160900019/65156339-tasty-italian-pizza-with-fresh-golden-cheese-shrimps-and-olive-oil-at-wooden-background-.jpg"/>' + menu_list[i] + '</div>';
    }
    htmldata=htmldata+'</section>';
    document.getElementById("hello").innerHTML=htmldata;
}
