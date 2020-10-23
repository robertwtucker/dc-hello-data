"use strict";
var helloDataComponent = {
    id: "HelloComponent",
    render: function (ctx, me) {
        var data = ctx.data;
        var message = "Hello, " + data.name + (PRODUCTION ? "! Here's your data: " + JSON.stringify(data.getPayload()) : "!");
        me.tag = "div";
        me.children = message;
    }
};
function helloDataComponentFactory(name, getPayload) {
    return {
        data: {
            name: name,
            getPayload: getPayload
        },
        component: helloDataComponent
    };
}
exports.helloDataComponentFactory = helloDataComponentFactory;
