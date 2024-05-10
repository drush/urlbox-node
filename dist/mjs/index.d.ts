import { RenderOptions } from "./types";
declare const _default: (key: string, secret?: string, prefix?: string) => {
    generateRenderLink: (options: RenderOptions) => string;
    generateInsecureRenderLink: (options: RenderOptions) => string;
};
export default _default;
export { RenderOptions };
