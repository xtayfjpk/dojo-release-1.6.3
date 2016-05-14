if(!dojo._hasResource["my.widget.CheckBox"]){
	dojo._hasResource["my.widget.CheckBox"]=true;
	
	dojo.provide("my.widget.CheckBox");

	dojo.require("dijit.form.CheckBox");
	dojo.declare("my.widget.CheckBox", dijit.form.CheckBox, {
		labelText : "",
		
		startup : function() {
			this.inherited(arguments);
			// 使用jQuery
			var html = '<label for="' +this.id+ '" style="display:inline;float: none;padding-right:0;">' +this.labelText+ '</label>';
			$(this.domNode).after(html);
		}
	});
}

