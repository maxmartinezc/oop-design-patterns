import { Toppping } from "./topping";

export class Marshmallow extends Toppping {
  public getDescription(): string {
    return this.iceCream.getDescription() + ", Marshmallow";
  }
  public getCost(): number {
    return this.iceCream.getCost() + 2;
  }
}
