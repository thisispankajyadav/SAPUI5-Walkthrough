sap.ui.define([
	"sap/ui/core/UIComponent",
	"comTestProject/model/models",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent, models, JSONModel, HelloDialog, Device) {
	"use strict";

	return UIComponent.extend("comTestProject.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			var oData={
				recipient:{
					name:"world"
				}
			};
			var oModel = new JSONModel(oData);
        	this.setModel(oModel);
        	// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
        	//creates a view based on url based,
        	this.getRouter().initialize();
        	

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		},
		
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});