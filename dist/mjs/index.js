"use strict";
import qs from "qs";
import { createHmac } from "node:crypto";
const DEFAULT_PREFIX = "https://api.urlbox.io/v1/";
const DEFAULT_OPTIONS = {
    format: "png",
};
export default (key, secret, prefix = DEFAULT_PREFIX) => {
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
const generateToken = (queryString, secret) => createHmac("sha256", secret).update(queryString).digest("hex");
const toQueryString = (options) => {
    const filter = (key, value) => {
        if (key === "format" || key === "token" || !value) {
            return;
        }
        return value;
    };
    return qs.stringify(options, {
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
