"use strict";
// Hàm thực hiện phép cộng
function addition(a, b) {
    if (typeof a === "string") {
        if (isNaN(Number(a))) {
            return "Tham số không hợp lệ";
        }
        a = Number(a);
    }
    if (typeof b === "string") {
        if (isNaN(Number(b))) {
            return "Tham số không hợp lệ";
        }
        b = Number(b);
    }
    return a + b;
}
// Hàm thực hiện phép trừ
function subtraction(a, b) {
    if (typeof a === "string") {
        if (isNaN(Number(a))) {
            return "Tham số không hợp lệ";
        }
        a = Number(a);
    }
    if (typeof b === "string") {
        if (isNaN(Number(b))) {
            return "Tham số không hợp lệ";
        }
        b = Number(b);
    }
    return a - b;
}
// Hàm thực hiện phép nhân
function multiplication(a, b) {
    if (typeof a === "string") {
        if (isNaN(Number(a))) {
            return "Tham số không hợp lệ";
        }
        a = Number(a);
    }
    if (typeof b === "string") {
        if (isNaN(Number(b))) {
            return "Tham số không hợp lệ";
        }
        b = Number(b);
    }
    return a * b;
}
// Hàm thực hiện phép chia
function division(a, b) {
    if (typeof a === "string") {
        if (isNaN(Number(a))) {
            return "Tham số không hợp lệ";
        }
        a = Number(a);
    }
    if (typeof b === "string") {
        if (isNaN(Number(b))) {
            return "Tham số không hợp lệ";
        }
        b = Number(b);
    }
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}
console.log("Phép cộng:", addition(10, 5)); // Kết quả: 15
console.log("Phép cộng:", addition("10", 5)); // Kết quả: 15
console.log("Phép cộng:", addition("abc", 5)); // Kết quả: "Tham số không hợp lệ"
console.log("Phép trừ:", subtraction(10, 5)); // Kết quả: 5
console.log("Phép trừ:", subtraction("10", 5)); // Kết quả: 5
console.log("Phép trừ:", subtraction("abc", 5)); // Kết quả: "Tham số không hợp lệ"
console.log("Phép nhân:", multiplication(10, 5)); // Kết quả: 50
console.log("Phép nhân:", multiplication("10", 5)); // Kết quả: 50
console.log("Phép nhân:", multiplication("abc", 5)); // Kết quả: "Tham số không hợp lệ"
console.log("Phép chia:", division(10, 5)); // Kết quả: 2
console.log("Phép chia:", division("10", 5)); // Kết quả: 2
console.log("Phép chia:", division("abc", 5)); // Kết quả: "Tham số không hợp lệ"
console.log("Phép chia:", division(10, 0)); // Kết quả: "Không thể chia cho 0"
