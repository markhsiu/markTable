/**
 * Created by MarkHsiu on 2015/10/19.
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
    xhr.send(sendText);
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

function test(){
    var data=ajax(method.GET,'myData.json','Hello World!');
    console.log(data);
}

(function(){
    test();
})();
