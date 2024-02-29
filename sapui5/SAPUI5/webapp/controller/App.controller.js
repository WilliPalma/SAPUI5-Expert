// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            onInit: function () {

                },
            
            onShowHello: function () {
                //leer texto desde i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //leer desde el modelo
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient])
                MessageToast.show(sMsg);
            }
        });
        //new Text({text:"Hello World"}).placeAt("content");
    });