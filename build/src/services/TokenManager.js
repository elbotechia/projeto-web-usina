"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class TokenManager {
    constructor() {
        this.createToken = (payload) => {
            const token = jsonwebtoken_1.default.sign(payload, this.JWT_KEY, {
                expiresIn: this.JWT_EXPIRES_IN,
            });
            return token;
        };
        this.getPayload = (token) => {
            try {
                const payload = jsonwebtoken_1.default.verify(token, this.JWT_KEY);
                return payload;
            }
            catch (error) {
                console.error("Error verifying token:", error);
                return null;
            }
        };
        if (!process.env.JWT_KEY || !process.env.JWT_EXPIRES_IN) {
            throw new Error("JWT_KEY or JWT_EXPIRES_IN is not defined in environment variables");
        }
        this.JWT_KEY = process.env.JWT_KEY;
        this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
    }
}
exports.TokenManager = TokenManager;
//# sourceMappingURL=TokenManager.js.map