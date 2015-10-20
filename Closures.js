/**
 * Created by MarkHsiu on 2015/10/20.
 *
 *   running on browser
 */
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return (function(){
            return this.name;
        })();
    }
};

console.log(object.getNameFunc());

var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;
        return (function(){
            return that.name;
        })();
    }
};

console.log(object.getNameFunc());