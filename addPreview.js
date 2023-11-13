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
                 //console.log("Received message:", event.data.obj);
                    let allObj = window.h3form;
                    for (let key in allObj) {
                        if(key.indexOf("Attachment")>-1){
                            let atts = allObj[key];
                            console.log(atts);
                            for(let i=0;i<atts.length;i++){
                                console.log("下载按钮"+atts[i],$("#"+key).find(".file-item").eq(i).find(".download-icon"));
                                $("#"+key).find(".file-item").eq(i).find(".download-icon").append($("<a href=\"https://view.xdocin.com/view?src="
                                +atts[i].url+"\">预览</a>"));
                            }
                        }
                    }
             });
                    
                
  
})();
