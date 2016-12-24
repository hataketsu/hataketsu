/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var _page = $("#page_number");
var _name = $("#real_name");
var id_input = $("#id_input");

var image_list = $("#image_list");
function get_link() {
    page_number = Number.parseInt(_page.html());
    $(document).attr("title", _name.val());
    for (var i = 0; i <= page_number; i++) {
        var url="https://i.nhentai.net/galleries/"+id_input.val()+"/"+i+".jpg";
        ele = $("<img/>");
        ele.attr("src",url);
        image_list.append(ele);
    }
}
