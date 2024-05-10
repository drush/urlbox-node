"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const crypto_1 = __importDefault(require("crypto"));
const qs_1 = __importDefault(require("qs"));
const _1 = __importDefault(require("./"));
const myapikey = "MY_API_KEY";
const mysecret = "secret";
const prefix = "https://api.urlbox.io/v1/";
const urlbox = (0, _1.default)(myapikey, mysecret);
const toQuery = (options) => qs_1.default.stringify(options, {
    filter: (key, value) => (key == "format" ? undefined : value),
});
(0, vitest_1.test)("should return a url with a valid token and query string", () => {
    const options = {
        url: "bbc.co.uk",
        width: 1024,
        height: 768,
        delay: 1000,
    };
    const query = toQuery(options);
    const renderLink = urlbox.generateRenderLink(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    (0, vitest_1.expect)(renderLink).toEqual("https://api.urlbox.io/v1/" + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with width param", () => {
    const options = {
        url: "bbc.co.uk",
        width: 100,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with height param", () => {
    const options = {
        url: "google.com",
        height: 100,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with full_page param", () => {
    const options = {
        url: "google.com",
        full_page: true,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with delay param", () => {
    const options = {
        url: "google.com",
        delay: 4000,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with width and height params", () => {
    const options = {
        url: "bbc.co.uk",
        width: 100,
        height: 200,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with width and height and full_page params", () => {
    const options = {
        url: "bbc.co.uk",
        width: 100,
        height: 200,
        full_page: true,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should return a url with a valid token and query string with width and height and full_page and delay params", () => {
    const options = {
        url: "bbc.co.uk",
        width: 100,
        height: 200,
        full_page: true,
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("user_agent and url are url-encoded", () => {
    const options = {
        url: "https://bbc.co.uk",
        user_agent: "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)",
    };
    const query = toQuery(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("removes false values from query", () => {
    let options = {
        url: "bbc.co.uk",
        width: 1024,
        height: 768,
        delay: 1000,
    };
    const query = toQuery(options);
    options.force = false;
    options.full_page = false;
    options.disable_js = false;
    options.retina = false;
    const renderLink = urlbox.generateRenderLink(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    (0, vitest_1.expect)(renderLink).toEqual("https://api.urlbox.io/v1/" + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("removes 0 values from query", () => {
    let options = {
        url: "bbc.co.uk",
    };
    const query = toQuery(options);
    options.width = 0;
    options.height = 0;
    options.delay = undefined;
    options.thumb_width = undefined;
    const renderLink = urlbox.generateRenderLink(options);
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    (0, vitest_1.expect)(renderLink).toEqual("https://api.urlbox.io/v1/" + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("kitchen sink", () => {
    const options = {
        url: "https://www.mysite.com/?video=funny cat plays piano",
        width: 100,
        height: 200,
        thumb_width: 300,
        full_page: true,
        retina: true,
        disable_js: true,
        delay: 4000,
        user_agent: "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)",
        force: true,
        quality: 80,
    };
    const query = toQuery(options);
    // don't want format in the query string...
    options.format = "jpg";
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/jpg?" + query);
});
(0, vitest_1.test)("cookies", () => {
    const options = {
        url: "bbc.co.uk",
        cookie: [
            "CookieOptIn=true;Path=/;Domain=.marktplaats.nl;Expires=Fri, 01-Jan-2027 15:19:58 GMT",
            "LoggedIn=true;Path=/;Domain=.urlbox.com;Max-Age=10000",
        ],
    };
    const query = "url=bbc.co.uk&" +
        (Array.isArray(options.cookie)
            ? options.cookie.map((c) => "cookie=" + encodeURIComponent(c)).join("&")
            : "cookie=" + encodeURIComponent(options.cookie));
    options.format = "png";
    const token = crypto_1.default
        .createHmac("sha256", mysecret)
        .update(query)
        .digest("hex");
    const renderLink = urlbox.generateRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/" + token + "/png?" + query);
});
(0, vitest_1.test)("should error if no url", () => {
    //@ts-expect-error
    (0, vitest_1.expect)(() => urlbox.generateRenderLink()).toThrow("no options object passed");
});
(0, vitest_1.test)("should error if url is wrong type", () => {
    let options = { url: 2 };
    //@ts-expect-error
    (0, vitest_1.expect)(() => urlbox.generateRenderLink(options)).toThrow("url should be of type string (something like www.google.com)");
});
(0, vitest_1.test)("without secret, should throw exception", () => {
    const urlbox = (0, _1.default)(myapikey);
    const options = {
        url: "https://www.mysite.com/?video=funny cat plays piano",
        width: 100,
        height: 200,
        thumb_width: 300,
        full_page: true,
        retina: true,
        disable_js: true,
        delay: 4000,
        user_agent: "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)",
        force: true,
        quality: 80,
    };
    options.format = "jpg";
    (0, vitest_1.expect)(() => urlbox.generateRenderLink(options)).toThrow("your secret is required");
});
(0, vitest_1.test)("without secret", () => {
    const urlbox = (0, _1.default)(myapikey);
    const options = {
        url: "https://www.mysite.com/?video=funny cat plays piano",
        width: 100,
        height: 200,
        thumb_width: 300,
        full_page: true,
        retina: true,
        disable_js: true,
        delay: 4000,
        user_agent: "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/30.0.1599.12 Mobile/11A465 Safari/8536.25 (3B92C18B-D9DE-4CB7-A02A-22FD2AF17C8F)",
        force: true,
        format: "mp4",
        quality: 80,
    };
    const query = toQuery(options);
    const renderLink = urlbox.generateInsecureRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/mp4?" + query);
});
(0, vitest_1.test)("asterisk", () => {
    const urlbox = (0, _1.default)(myapikey);
    const options = {
        html: "<h1>Hello World</h1>",
        highlight: "*^",
        format: "pdf",
    };
    const query = toQuery(options);
    options.format = "png";
    const renderLink = urlbox.generateInsecureRenderLink(options);
    (0, vitest_1.expect)(renderLink).toEqual(prefix + myapikey + "/png?" + query);
});
