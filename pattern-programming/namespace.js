/**
 * Created by MarkHsiu on 2015/10/20.
 */

var MYAPP = MYAPP || {};

/**
 *  MYAPP.namesapce('dom.style')  is equals MYAPP.dom={} .MYAPP.dom.style={}
 * @param name
 */
MYAPP.namespace = function(name){
    var parts = name.split('.');
    var current = MYAPP;
    for(var i in parts){
        if(!current[parts[i]]){
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
}
