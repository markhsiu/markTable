/**
 * 获得表单里的所有数据，并返回json结果,或设置表单数据
 *
 * @date 2015.10.30->>
 * @requires jquery1.11+ & json2
 * @author MarkHsiu
 */

//  API
//
// $("#FormAdd").formjson().jsonToString();  表单字符串
// $("#FormAdd").formjson().json(); json
// $("#FormAdd").formjson({username:"mark",password:"1",checkbox:[1,3]}); 
// 
// json-type:date|disabled
// json-format:yyyy-MM-dd (default : yyyy-MM-dd)
//
//
;
(function($, window, document, undefined){
    var pluginName = "formjson";
    var defaults = {
        date : {
            format : "yyyy-MM-dd"
        }
    };

    $.fn[pluginName] = function(data){
        var that = this;
        var els = that.find(":input");
        if(arguments.length == 0){
            data = {};
            $.each(els, function(){
                if(this.name && !this.disabled){
                    $.extend(data, formElement.input($(this)));
                }
            });

            return {
                data : function(){
                    return data;
                },
                jsonToString : function(){
                    return JSON.stringify(data);
                }
            };

        } else {
            $.each(els, function(){
                if(this.name && data[this.name]){
                    var names = data[this.name];
                    var $this = $(this);

                    if(Object.prototype.toString.apply(val) != '[object Array]'){
                        names = [names];
                    }

                    if(this.type == "radio" || this.type == "checkbox"){
                        var val = $this.val();
                        var found = false;
                        for(var i = 0; i < names.length; i++){
                            if(val == names[i]){
                                found = true;
                                break;
                            }
                        }
                        $this.attr("checked", true);
                    } else {
                        $this.val(names[0]);
                    }
                }

            });
            return this;
        }
    };


    var formElement = {
        push : function(el, key){
            var elData = {};
            elData[key] = elData[key] || {};
            elData[key].value = el.val();
            return elData;
        },
        inputTypes : ["text", "hidden", "password", "checkbox", "radio", "select", "textarea"],
        input : function(el){
            if(el.attr("json-type") && el.attr("json-type") == "disabled"){
                return {};
            }

            var inputtype = el.prop("type") ? el.prop("type") : "text";
            for(var i = 0, size = this.inputTypes.length; i < size; i++){
                if(this.inputTypes[i] == inputtype){
                    break;
                }
                if(i == size - 1){
                    return {};
                }
            }

            var key = el.attr("name");
            this.elData = this.push(el, key);
            if(el.attr("json-type")){
                this.elData[key].type = el.attr("json-type");
                if(el.attr("json-type") == "date"){
                    this.elData[key].format = defaults.date.format;
                    if(el.attr("json-format")){
                        this.elData[key].format = el.attr("json-format");
                    }
                }
            }
            return this.elData;
        }
    };


})(jQuery, window, document);
