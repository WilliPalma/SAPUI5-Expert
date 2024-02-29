// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest:"json"
            },

            init: function () {
                //llamar funcion del init del padre
                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(Models.createRecipient());
                //this.getView().setModel(Models.createRecipient());

                //establecer i18n a la vista
                var i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        })

    });