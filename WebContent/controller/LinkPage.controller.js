sap.ui.controller("controller.LinkPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zapp_splitapp.LinkPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zapp_splitapp.LinkPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zapp_splitapp.LinkPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zapp_splitapp.LinkPage
*/
//	onExit: function() {
//
//	}
	
	onWorkExp : function(){
		//debugger;
		this.getView().getParent().getParent().toDetail("idWrkExp");
	},
	onRegDtl : function(){
		this.getView().getParent().getParent().toDetail("idRegDtl");
	}

});