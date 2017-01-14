/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var _page = $("#page");
var _category = $("#cate");
var _name = $("#real_name");
var link_input = $("#link_input");
link_input.on("input", function () {
    text = link_input.val().trim();
    index = 0;
    for (i = 0; i < 4; i++) {
        index = text.indexOf("/", index + 1);
    }
    _page.html(text.substring(index + 1, text.indexOf("_", index + 1)));
    index = text.indexOf("_", index + 1);
    _category.html(text.substring(index + 1, text.indexOf("_", index + 1)));
    index = text.indexOf("_", index + 1);

    name_text = text.substring(index + 1, text.length);

    _name.val(name_text);
});
var image_list = $("#image_list");
function get_link() {
    page_number = Number.parseInt(_page.html());
    category_number = _category.html();
    $(document).attr("title", _name.val());
    for (var i = 0; i <= page_number; i++) {
        var url="http://box.hentaibox.net/manga/"+category_number+"/"+_name.val()+"/0"+i+"/0.jpg";
        ele = $("<img/>");
        ele.attr("src",url);
        image_list.append(ele);
    }
}
text = link_input.val().trim();
    index = 0;
    for (i = 0; i < 4; i++) {
        index = text.indexOf("/", index + 1);
    }
    _page.html(text.substring(index + 1, text.indexOf("_", index + 1)));
    index = text.indexOf("_", index + 1);
    _category.html(text.substring(index + 1, text.indexOf("_", index + 1)));
    index = text.indexOf("_", index + 1);

    name_text = text.substring(index + 1, text.length);

    _name.val(name_text);
