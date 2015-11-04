/**
 * Created by MarkHsiu on 2015/10/20.
 */

/*
 *
 *  延迟定义，该方法将以泛型的方式来实现--即在它第一次被调用时，首先会检查浏览器支持的功能
 *  ，然后为自己选择合适的实现，最后调用自身以完成真正的事件添加。当下次再调用该方法时，就
 *  会直接调用它选择的新方法而不再需要做分支判断
 */
var MYAPP = {};
MYAPP.myevent = {
    addListener : function(el, type, fn){
        if(typeof el.addEventListener === 'function'){ //FF
            MYAPP.myevent.addListener = function(el, type, fn){
                el.addEventListener(type, fn, false);
            }
        } else if(typeof el.attachEvent === 'function'){ //IE
            MYAPP.myevent.addListener = function(el, type, fn){
                el.attachEvent('on' + type, fn);
            }
        } else {// older browers
            MYAPP.myevent.addListener = function(el, type, fn){
                el['on' + type] = fn;
            }
        }

        MYAPP.myevent.addListener(el, type, fn);
    }

}

