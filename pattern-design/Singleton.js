/**
 * Created by MarkHsiu on 2015/10/20.
 */

function Logger(){
    if(typeof  Logger.single_instance === "undefined"){
        Logger.single_instance=this;
    }
    return Logger.single_instance;
}

var single = (function(ddd){
    var unique;
    function Const(){
        // TODO code
    }
    unique = new Const();
    return function(){
        return unique;
    };
})();

function Singleton(){

    function Const(){
        if(typeof  Const.single_instance === "undefined"){
            Const.single_instance=this;
        }
        return Const.single_instance;
    }

    return (function(){
        return  new Const();
    })();
}

var a =new Logger();
var b =new Logger();

var aa=  new single();
var bb= new single();

var aaa=  new Singleton();
var bbb= new Singleton();

console.log(a===b)
console.log(aa===bb)
console.log(aaa===bbb)



