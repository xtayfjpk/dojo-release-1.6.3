if(!dojo._hasResource["my.widget.RadioButton"]){
	dojo._hasResource["my.widget.RadioButton"]=true;
	
	dojo.provide("my.widget.RadioButton");
	dojo.require("dijit.form.RadioButton");
	
	dojo.declare("my.widget.RadioButton", dijit.form.RadioButton, {
		labelText : "",
		
		startup : function() {
			this.inherited(arguments);
			//使用jQuery
			var html = '<label for="' +this.id+ '" style="display:inline;float: none;padding-right:0;">' +this.labelText+ '</label>';
			$(this.domNode).after(html);
			
		},
		
		getValue : function() {
			return $(this.domNode).find(":radio").val();
		}
	});
}
