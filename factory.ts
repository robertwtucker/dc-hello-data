/// <reference path="../../Libraries/bobril/library.d.ts"/>
/// <reference path='../../Libraries/dc-helpers/library.ts'/>

interface IData {
    name: string;
    getPayload(): object;
}

interface ICtx {
    data: IData;
}

const helloDataComponent: IBobrilComponent = {

    id: "HelloComponent",

    render(ctx: ICtx, me: IBobrilNodeWithTag | IBobrilNodeWithComponent | IBobrilNodeWithChildren): void {
        const data = ctx.data;
        const message = "Hello, " + data.name + (PRODUCTION ? "! Here's your data: " + JSON.stringify(data.getPayload()) : "!");
        me.tag = "div";
        me.children = message;
    }

};

export function helloDataComponentFactory(
    name: string,
    getPayload: () => object
): IBobrilNode {
    return {
        data: <IData>{
            name,
            getPayload
        },
        component: helloDataComponent
    };
}
