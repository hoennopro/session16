"use strict";
function mergeObjects(obj1, obj2) {
    const merged = {};
    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            merged[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (typeof obj2[key] === "object" && typeof merged[key] === "object") {
                merged[key] = mergeObjects(merged[key], obj2[key]);
            }
            else {
                merged[key] = obj2[key];
            }
        }
    }
    return merged;
}
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
};
const obj2 = {
    b: {
        d: 4,
        e: 5,
    },
    f: 6,
};
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);
