// ==UserScript==
// @version      0.1
// @description  国联江森附件预览
// @match        *://oa.gl-jci.com/*
// @name         国联江森附件预览按钮
// @license      MIT
// @namespace    https://greasyfork.org/users/1216559
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';

             $(function(){
                 for(let i=0;i<$("[id*=Attachment]").length;i++){
    
    let atti = h3form.value[$("[id*=Attachment]").eq(i).attr("id")];
    let key = $("[id*=Attachment]").eq(i).attr("id");
    for(let j=0;j<atti.length;j++){
        $("#"+key).find(".file-item").eq(j).find(".download-icon").append($("<a href=\"https://view.xdocin.com/view?src="
                                +atti[j].url+"\">预览</a>"));
    }
    
}
             });
                    
                
  
})();
