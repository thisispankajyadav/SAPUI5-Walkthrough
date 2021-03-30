sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller,MessageToast,JSONModel,ResourceModel) {
	"use strict";

	return Controller.extend("comTestProject.controller.App", {
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
	});
});