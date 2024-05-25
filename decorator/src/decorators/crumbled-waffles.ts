import { Toppping } from "./topping";

export class CrumbledWaffles extends Toppping {
  public getDescription(): string {
    return this.iceCream.getDescription() + ", CrumbledWaffles";
  }
  public getCost(): number {
    return this.iceCream.getCost() + 4;
  }
}
