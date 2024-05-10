"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formats = [
    "png",
    "jpg",
    "jpeg",
    "pdf",
    "avif",
    "mp4",
    "webm",
    "webp",
    "html",
    "mhtml",
    "svg",
    "md",
];
const pdfPageSize = [
    "a4",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "legal",
    "ledger",
    "letter",
    "tabloid",
];
const pdfOrientation = ["portrait", "landscape"];
const storageClasses = [
    "standard",
    "reduced_redundancy",
    "standard_ia",
    "onezone_ia",
    "intelligent_tiering",
    "glacier",
    "deep_archive",
    "outposts",
];
const colorProfiles = [
    "default",
    "srgb",
    "dp3",
    "rec2020",
    "scrgblinear",
    "hdr10",
    "colorspingamma24",
];
const waitUntil = [
    "domloaded",
    "mostrequestsfinished",
    "requestsfinished",
    "loaded",
];
const pdfOrientationEnum = ["portrait", "landscape"];
const pdfMarginEnum = ["default", "none", "minimum"];
const mediaOptionsEnum = ["print", "screen"];
const fullPageMode = ["stitch", "native"];
const videoPresets = [
    "ultrafast",
    "superfast",
    "veryfast",
    "faster",
    "fast",
    "medium",
    "slow",
    "slower",
    "veryslow",
];
const easingFunctions = [
    "linear.none",
    "linear.in",
    "linear.out",
    "linear.inout",
    "quadratic.in",
    "quadratic.out",
    "quadratic.inout",
    "cubic.in",
    "cubic.out",
    "cubic.inout",
    "quartic.in",
    "quartic.out",
    "quartic.inout",
    "quintic.in",
    "quintic.out",
    "quintic.inout",
    "sinusoidal.in",
    "sinusoidal.out",
    "sinusoidal.inout",
    "exponential.in",
    "exponential.out",
    "exponential.inout",
    "circular.in",
    "circular.out",
    "circular.inout",
    "elastic.in",
    "elastic.out",
    "elastic.inout",
    "back.in",
    "back.out",
    "back.inout",
    "bounce.in",
    "bounce.out",
    "bounce.inout",
];
