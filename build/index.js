"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = __importDefault(require("./Calculator/Calculator"));
const calculator = new Calculator_1.default();
const result = calculator.sum(1, 1);
console.log(result);
