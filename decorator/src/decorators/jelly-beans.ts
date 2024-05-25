import { Toppping } from "./topping";

export class JellyBeans extends Toppping {
  public getDescription(): string {
    return this.iceCream.getDescription() + ", JellyBeans";
  }
  public getCost(): number {
    return this.iceCream.getCost() + 1;
  }
}
