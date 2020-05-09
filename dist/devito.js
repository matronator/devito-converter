var DannyDeVito = /** @class */ (function () {
    function DannyDeVito() {
        this.devito = 1.47; // meters
    }
    DannyDeVito.prototype.toMeters = function (devitos, decimals) {
        if (devitos === void 0) { devitos = 0; }
        if (decimals === void 0) { decimals = 2; }
        return Number((devitos * this.devito).toFixed(decimals));
    };
    DannyDeVito.prototype.toDevitos = function (meters, decimals) {
        if (meters === void 0) { meters = 0; }
        if (decimals === void 0) { decimals = 2; }
        return Number((meters / this.devito).toFixed(decimals));
    };
    return DannyDeVito;
}());
//# sourceMappingURL=devito.js.map