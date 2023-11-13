// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://oa.gl-jci.com/application/xmgl01/application-list/testfj?parentId=2c2c808488425f580188426814ed0000&code=testfj&openMode=&pcUrl=&queryCode=&return=%2Fportal-page%2FdefaultPortalDashboard
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gl-jci.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.addEventListener("message", (event) => {
                if(event.data.src&&event.data.src=="attPreview"){
                    //console.log("Received message:", event.data.obj);
                    let allObj = event.data.obj
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
                }
            });
    // Your code here...
})();
