/**
 * Created by MarkHsiu on 2015/10/20.
 */
var MYAPP = MYAPP || {};
MYAPP.dom = {};
MYAPP.dom.Button = function(text, config){
    //私有属性
    var styles = {
        font : 'Verdana',
        bordor : '1px solid black',
        color : 'black',
        background : 'grey'
    };

    //私有方法
    function setStyles(){
        for(var i in styles){
            b[i] = config[i] || styles[i];
        }
    };

    //特权函数
    this.getDefault = function(){
        return styles;
    };

    config = config || {};
    var b = document.createElement('input');
    b.style = config['type'] || 'submit';
    b.value = text;
    setStyles();
    return b;
};

