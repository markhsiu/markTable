/**
 * Created by MarkHsiu on 2015/10/20.
 */

var tree = { };
tree.decorate = function ( ){
    console.log('Make sure the tree won\'t fall');
}

tree.getDecorator = function (deco){
    tree[deco].prototype = this;
    return new tree[deco];
};

tree.RedBalls = function ( ){
    this.decorate = function ( ){
        this.RedBalls.prototype.decorate();
        console.log('Put on some red balls');
    }
}

tree.BlueBalls = function ( ){
    this.decorate = function( ){
        this.BlueBalls.prototype.decorate( );
        console.log ('Add a blue balls');
    }
}

tree.Angel = function ( ){
    this.decorate = function ( ){
        this.Angel.prototype.decorate();
        console.log('The a angel girl ');
    }
}


tree = tree.getDecorator('RedBalls');
tree = tree.getDecorator('BlueBalls');
tree = tree.getDecorator('Angel');
tree.decorate();

