import { IGreetings } from "./greetings.interface";
import { Spanish } from "./spanish";

export class SpanishInterpreterAdapter implements IGreetings {
  constructor(private spanish: Spanish) {}

  sayHello(): void {
    this.spanish.decirHola();
  }
}
