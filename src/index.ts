export default class DannyDeVito {
  devito: number;

  constructor() {
    this.devito = 1.47; // meters
  }

  toMeters(devitos: number = 0, decimals: number = 2): number {
    return Number((devitos * this.devito).toFixed(decimals));
  }

  toDevitos(meters = 0, decimals = 2): number {
    return Number((meters / this.devito).toFixed(decimals));
  }
}
