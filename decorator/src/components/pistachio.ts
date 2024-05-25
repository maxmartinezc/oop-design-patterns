import { IceCream } from "./ice-cream";

export class Pistachio extends IceCream {
  constructor() {
    super();
    this.description = "Pistachio ice cream";
  }

  public getCost(): number {
    return 6;
  }
}
