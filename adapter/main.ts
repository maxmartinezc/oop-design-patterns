import { Spanish } from "./src/spanish";
import { SpanishInterpreterAdapter } from "./src/spanish-interpreter.adapter";

// client code
// our professional tenis now is playing an important match in Spain
const spanishInterpreterAdapter = new SpanishInterpreterAdapter(new Spanish());

// we use an adapter to sayHello in spanish rather than learn Spanish
spanishInterpreterAdapter.sayHello();
