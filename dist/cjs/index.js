"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = __importDefault(require("qs"));
const node_crypto_1 = require("node:crypto");
const DEFAULT_PREFIX = "https://api.urlbox.io/v1/";
const DEFAULT_OPTIONS = {
    format: "png",
};
exports.default = (key, secret, prefix = DEFAULT_PREFIX) => {
    return {
        generateRenderLink: (options) => {
            if (!secret) {
                throw new Error("your secret is required");
            }
            options = validateOptions(options);
            const query = toQueryString(options);
            const token = generateToken(query, secret);
            return `${prefix}${key}/${token}/${options.format || "png"}?${query}`;
        },
        generateInsecureRenderLink: (options) => {
            options = validateOptions(options);
            const query = toQueryString(options);
            return `${prefix}${key}/${options.format || "png"}?${query}`;
        },
    };
};
const generateToken = (queryString, secret) => (0, node_crypto_1.createHmac)("sha256", secret).update(queryString).digest("hex");
const toQueryString = (options) => {
    const filter = (key, value) => {
        if (key === "format" || key === "token" || !value) {
            return;
        }
        return value;
    };
    return qs_1.default.stringify(options, {
        filter,
        arrayFormat: "repeat",
    });
};
const validateOptions = (options) => {
    if (!options) {
        throw new Error("no options object passed");
    }
    if (options.url && typeof options.url !== "string") {
        throw new Error("url should be of type string (something like www.google.com)");
    }
    if (!options.url && !options.html) {
        throw new Error("url or html option is required");
    }
    return Object.assign({}, DEFAULT_OPTIONS, options);
};
