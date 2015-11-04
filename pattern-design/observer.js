/**
 * Created by MarkHsiu on 2015/10/20.
 */

var  observer = {
    addSubscriber: function(callback){
        this.subscribers[this.subscribers.length] = callback;
    },
    removeSubscriber: function(callback){
        for(var i=0,len=this.subscribers.length; i<len; i++){
            if(this.subscribers[i] === callback){
                delete (this.subscribers[i]);
            }
        }
    },
    publish: function(what){
        for(var i=0,len=this.subscribers.length; i<len; i++){
            if(typeof this.subscribers[i] === 'function'){
                this.subscribers[i](what);
            }
        }
    },
    make: function(o){   // turns an object into a publisher
        for (var i in this) {
            o[i] = this[i];
            o.subscribers = [];
        }
    }
};


var blogger = {
    writeBlogPost: function(){
        var content = 'Today is '+ new Date();
        this.publish(content);
    }
};

var la_times = {
    newIssue: function() {
        var paper = 'Martians have landed on Earth';
        this.publish(paper);
    }
}

observer.make(blogger);
observer.make(la_times);

var jack = {
    read: function(what) {
        console.log('I just read that '+what);
    }
};

var jill = {
    gossip: function(what) {
        console.log('You didn\'t hear it form me , but '+ what);
    }
};

blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.gossip);
console.log('----------------------------------');
blogger.writeBlogPost();
console.log('----------------------------------');
blogger.removeSubscriber(jill.gossip);
blogger.writeBlogPost();
console.log('----------------------------------');
la_times.addSubscriber(jill.gossip);
console.log('----------------------------------');
la_times.newIssue();


 