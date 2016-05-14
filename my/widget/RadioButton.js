if(!dojo._hasResource["my.widget.RadioButton"]){
	dojo._hasResource["my.widget.RadioButton"]=true;
	
	dojo.provide("my.widget.RadioButton");
	dojo.require("dijit.form.RadioButton");
	
	dojo.declare("my.widget.RadioButton",dijit.form.RadioButton, {
		
		startup : function() {
			this.inherited(arguments);
			// 使用jQuery
			//var html = '<label for="' +this.id+ '" style="display:inline;float: none;padding-right:0;">' +this.labelText+ '</label>';
			//$(this.domNode).after(html);
			
			// 直接使用JS
			var label = document.createElement("label");
			label.setAttribute("for", this.id);
			label.innerText = this.labelText;
			label.style.display = "inline";
			label.style.float = "none";
			label.style.paddingRight = "0";
			
			this.insertAfter(label, this.domNode);
		},
		
		insertAfter : function (newElement, targetElement) {
	   		var parent = targetElement.parentNode;
	   		if (parent.lastChild == targetElement ) {
	        	// 如果最后的节点是目标元素，则直接添加。因为默认是最后
	        	parent.appendChild(newElement );
	   		} else {
	        	//如果不是，则插入在目标元素的下一个兄弟节点的前面。也就是目标元素的后面
	        	parent.insertBefore( newElement, targetElement.nextSibling );
	   		}
		},
		labelText : ""
	});
}
