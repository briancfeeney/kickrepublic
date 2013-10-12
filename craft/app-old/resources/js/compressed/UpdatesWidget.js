/*
 Copyright (c) 2013, Pixel & Tonic, Inc.
 @license   http://buildwithcraft.com/license Craft License Agreement
 @link      http://buildwithcraft.com
*/
(function(a){Craft.UpdatesWidget=Garnish.Base.extend({$widget:null,$body:null,$btn:null,checking:!1,init:function(b,c){this.$widget=a("#widget"+b);this.$body=this.$widget.find(".body:first");this.initBtn();c||this.checkForUpdates()},initBtn:function(){this.$btn=this.$body.find(".btn:first");this.addListener(this.$btn,"click",function(){this.checkForUpdates(!0)})},checkForUpdates:function(b){this.checking||(this.checking=!0,this.$widget.addClass("loading"),this.$btn.addClass("disabled"),Craft.postActionRequest("dashboard/checkForUpdates",
{forceRefresh:b},a.proxy(function(a,b){this.checking=!1;this.$widget.removeClass("loading");"success"==b?(this.$body.html(a),this.initBtn()):this.$body.find("p:first").text("An unknown error occurred.")},this),{complete:a.noop}))}})})(jQuery);

//# sourceMappingURL=UpdatesWidget.min.map
