/**
 * Created by MarkHsiu on 2015/10/19.
 */

/**
 * ajax
 * @param method
 * @param url
 * @param sendText
 */
function ajax(method,url,sendText){

    var ids=['MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP','Microsoft.XMLHTPP'];
    var xhr;
    if(typeof window.XMLHttpRequest === 'function'){
        xhr = new XMLHttpRequest();
    } else {
        for(var i=0,len=ids.length; i<len; i++){
            try{
                xhr = new ActiveXObject(ids[i]);
            } catch(e) {}
        }
    }

    xhr.open(method.toUpperCase(),url,true);
    xhr.send((typeof sendText==='undefined') ? sendText : '');
    xhr.onreadystatechange=function(){
        if(xhr.readyState < 4){
            return; // not ready yet  if readyState==4 that is ready
        }

        if(xhr.status !== 200){
            alert('Error!'); //the HTTP status code is not ok
            return;
        }
        // all is fine ,do the work
        return xhr.responseText;
    };
}

var method={
    GET: 'GET',
    POST: 'POST'
}

// add listener for dom click
function paraHandler(dom,callback){
    if(dom.addEventListener){ //FF
        dom.addEventListener('click',callback,false);
    } else if(dom.attachEvent){ //IE
        dom.attachEvent('onclick',callback);
    } else {
        dom.onclick=callback;
    }
}


function ajaxJsonp (url){
    var script=document.createElement('iframe');

    script.setAttribute('src',url);
    document.body.appendChild(script);

}



