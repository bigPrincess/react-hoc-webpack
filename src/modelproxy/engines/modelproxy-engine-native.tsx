import { modelProxy, IProxyCtx, IInterfaceModel } from 'modelproxy';
import * as Http from 'rs-hybrid-http';

export class NativeEngine extends modelProxy.BaseEngine {
    constructor() {
        super();
        this.init();
    }

    init() {
        this.use(async (ctx: IProxyCtx, next) => {
            let http = new Http();
            let method = (ctx.instance.method as any).toLowCase();

            if (http[method]) {
                if (method === "get") {
                    ctx.result = http[method](this.getFullPath(ctx.instance, ctx.executeInfo), ctx.executeInfo.params);
                } else {
                    ctx.result = http[method](this.getFullPath(ctx.instance, ctx.executeInfo), ctx.executeInfo.data);
                }

                return await next();
            }

            throw new Error(`http中找不到方法${ctx.instance.method}`);
        });
    }

    /**
     * 调用接口代理方法
     * @param instance 接口的信息
     * @param options  调用接口的参数
     */
    async proxy(instance: IInterfaceModel, options: any): Promise<any> {
        const fn = this.callback(() => { });
        const ctx: IProxyCtx = {
            instance: instance,
            executeInfo: options,
        };

        await fn(ctx);

        if (ctx.isError) {
            throw ctx.err;
        }

        return ctx.result;
    }
}