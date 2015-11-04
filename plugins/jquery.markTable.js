
/**
 * 列表
 *
 * @date 2015.10.30->>
 * @requires jquery1.11+ 
 * @author MarkHsiu
 */

//  API
//
;
(function ($, window, document, undefined) {
	var pluginName = "markTable";
	var defaults = {
			 pageNo:1,
			 pageSize=10,
			 pageOrderColumn:'',
			 pageASC:'ASC'
	};
	 
	$.fn[pluginName] = function (options) {
		 var MarkTable = new MarkTable(this,options);
		 return 
	};
 
	
	var MarkTable = function(ele,opt){
		this.$element=ele;
		this.options=$.extend({},defaults,opt);
	};
	
	MarkTable.prototype.trim = function (str){
		$.trim(str);
	};
	
	MarkTable.prototype.pager = {
			setCurrentPage : function(pNo){
				this.options.pageNo;
				refreshTable();
			},
			pageGoNum : function(self) {
				var goNum = MarkTable.trim($(self).parent().find('input').val());
				var re = /^([1-9][0-9]*)$/;
				if (!re.test(goNum)) {
					goNo=1;
				} 
				this.options.pageNo = parseInt(goNum);
				refreshTable();
			},
			changePageSize:function(self) {
				 this.options.pageSize = $(self).val();
				 refreshTable();
			},
			order:function() {
				 
			},
			checkAll:function(self) {
				if ($(self).prop('checked')) { // 全部选中
					$('input[name="checkbox"]').prop('checked', true);
				} else { // 全部取消选中
					$('input[name="checkbox"]').prop('checked', false);
				}
			}

	};
	
	 
	 
	 
	
})(jQuery, window, document);

 

  