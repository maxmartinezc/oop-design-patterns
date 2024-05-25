import { IceCream } from "../components/ice-cream";

export abstract class Toppping extends IceCream {
  constructor(protected iceCream: IceCream) {
    super();
  }
  public abstract getDescription(): string;
}
