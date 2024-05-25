import { IceCream } from "./ice-cream";

export class Trululu extends IceCream {
  constructor() {
    super();
    this.description = "Trululu ice cream";
  }

  public getCost(): number {
    return 5;
  }
}
