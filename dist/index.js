"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DannyDeVito {
    constructor() {
        this.devito = 1.47; // meters
    }
    toMeters(devitos = 0, decimals = 2) {
        return Number((devitos * this.devito).toFixed(decimals));
    }
    toDevitos(meters = 0, decimals = 2) {
        return Number((meters / this.devito).toFixed(decimals));
    }
}
exports.default = DannyDeVito;
//# sourceMappingURL=index.js.map