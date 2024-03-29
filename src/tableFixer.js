/*
 * Table Fixer jQuery Plugin
 *
 * Copyright (c) 2010 Mithun Satheesh
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 * mail:mithunsatish@gmail.com
 * @version 0.1
 */

(function($){
	$.fn.extend({
		doFixColumn: function(options) {
			var defaults = {
				background : "#09D",
				color : "#FFF",
				fix:"fixer",
				commonClass:"doFixTable",
				overLayer:"doFixOverLayer",
				underLayer:"doFixUnderLayer",
				scrollFixContainer:"doFixContainer",
				tableWidth:'100%'
				
			}
                        var options =  $.extend(defaults, options);
                        return this.each(function() {
                        	var o =options;
                        	var obj = $(this);
                        	var container = obj.attr('id')+"_"+o.scrollFixContainer;
                        	var overLayer = obj.attr('id')+"_"+o.overLayer;
                        	var underLayer = obj.attr('id')+"_"+o.underLayer;
                        	obj.wrap("<div id="+container+" />");
                        	$("."+o.fix).css({'background':o.background,'color':o.color});
                        	$("#"+container).css({'width':o.tableWidth,'height':o.tableHeight,'overflow':'auto'});
                        	obj.addClass(o.commonClass);
                        	var tbl = $("#"+container).html();
                        	$("#"+container).append(tbl);
                        	$("#"+container+" ."+o.commonClass).eq(0).css({'position':'absolute','width':$("#"+container).width()});
                        	$("#"+container+" ."+o.commonClass).eq(0).attr({'id':overLayer,'width':o.tableWidth});
                        	$("#"+container+" ."+o.commonClass).eq(1).attr({'id':underLayer,'width':o.tableWidth});
                        	$("#"+overLayer+" td,#"+overLayer+" th").not("."+o.fix).css({'visibility':'hidden',border:'transparent'});
                        	$("#"+overLayer).css({'background':'transparent','background-color':'transparent'});
                        	$("#"+underLayer+" ."+o.fix).css('visibility','hidden');
                        	
                        }
                        );
                        
		}
		
	});
	
})(jQuery);