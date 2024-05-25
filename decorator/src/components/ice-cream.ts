export abstract class IceCream {
  protected description = "no ice cream description";

  public getDescription(): string {
    return this.description;
  }

  public abstract getCost(): number;
}
