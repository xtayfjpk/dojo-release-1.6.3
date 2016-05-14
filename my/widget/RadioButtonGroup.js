if(!dojo._hasResource["my.widget.RadioButtonGroup"]){
	dojo._hasResource["my.widget.RadioButtonGroup"]=true;
	
	dojo.provide("my.widget.RadioButtonGroup");
	dojo.require("dijit._Widget");
	dojo.require("dijit._Templated");
	
	dojo.declare("my.widget.RadioButtonGroup", [dijit._Widget, dijit._Templated], {
		templateString : dojo.cache("my.widget", "templates/RadioButtonGroup.html"),
		useHandlebars : true,
		widgetsInTemplate : true,
		
		radioObjects : [],
		radioString : "",
		radioGroupName : "",
		
		/** 内部使用属性，用于记录当前值，在onChange事件发生时，即是旧值 **/
		_currentValue : null,
		
		constructor : function(options, domNode) {
			if(options.radioString) {
				this.radioObjects = dojo.fromJson(options.radioString);
				if(options.radioGroupName) {
					dojo.forEach(this.radioObjects, function(radioObject){
						radioObject.name = options.radioGroupName;
					});
				}
			}
		},
		
		startup : function() {
			this.inherited(arguments);
			var self = this;
			self._currentValue = this.getRadioGroupValue();
			var radioWidgets = this.getRadioWidgets();
			dojo.forEach(radioWidgets, function(radioWidget){
				dojo.connect(radioWidget, "onClick", function(){
					var oldValue = self._currentValue;
					var newValue = radioWidget.getValue();
					self._currentValue = newValue;
					self.onChange(newValue, oldValue);
				});
			});
		},
		getRadioWidgets : function() {
			return dijit.findWidgets(this.domNode);
		},
		getRadioGroupName : function() {
			if(this.radioGroupName) {
				return this.radioGroupName;
			} else {
				var radioWidgets = this.getRadioWidgets();
				for(var i=0; i<radioWidgets.length; i++) {
					return radioWidgets[i].get("name");
				}
				return null;
			}
		},
		getRadioGroupValue : function() {
			var radioWidgets = this.getRadioWidgets();
			for(var i=0; i<radioWidgets.length; i++) {
				var radioWidget = radioWidgets[i];
				if(radioWidget.get("checked")) {
					return radioWidget.get("value");
				}
			}
			return null;
		},
		getRadioGroupValues : function() {
			var values = [];
			var radioWidgets = this.getRadioWidgets();
			for(var i=0; i<radioWidgets.length; i++) {
				var radioWidget = radioWidgets[i];
				values.push(radioWidget.getValue());
			}
			return values;
		},
		onChange : function(newValue, oldValue) {
		}
	});
}
