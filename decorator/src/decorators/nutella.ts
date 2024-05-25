import { Toppping } from "./topping";

export class Nutella extends Toppping {
  public getDescription(): string {
    return this.iceCream.getDescription() + ", Nutella";
  }
  public getCost(): number {
    return this.iceCream.getCost() + 3;
  }
}
