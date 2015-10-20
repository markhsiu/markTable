/**
 * Created by MarkHsiu on 2015/10/20.
 */

var MTAPP = MYAPP || { };
MYAPP.dom={};
MYAPP.dom.Text= function(){
    this.insert=function(where){
        var txt=document.createTextNode(this.url);
        where.appendChild(txt);
    }
}

MYAPP.dom.Link= function(){
    this.insert=function(where){
        var li=document.createElement('a');
        li.appendChild(document.createTextNode(this.url));
        where.appendChild(li);
    }
}

MYAPP.dom.Image= function(){
    this.insert=function(where){
        var img=document.createElement('img');
        img.appendChild(document.createTextNode(this.url));
        where.appendChild(img);
    }
}

MYAPP.dom.factory =function(type){
    return new MYAPP.dom[type];
}


var o=MYAPP.dom.factory('Link');
o.url='http://aaaa';
o.insert();