import { IceCream } from "./ice-cream";

export class Chocolate extends IceCream {
  constructor() {
    super();
    this.description = "Chocolate ice cream";
  }

  public getCost(): number {
    return 7;
  }
}
