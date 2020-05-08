class DannyDeVito {
  constructor() {
    this.devito = 1.47; // meters
  }

  toMeters(devitos = 0, decimals = 2) {
    return (devitos * this.devito).toFixed(decimals);
  }

  toDevitos(meters = 0, decimals = 2) {
    return (meters / this.devito).toFixed(decimals);
  }
}
