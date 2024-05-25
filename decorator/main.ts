import { Trululu } from "./src/components/trululu";
import { Chocolate } from "./src/components/chocolate";
import { IceCream } from "./src/components/ice-cream";
import { Pistachio } from "./src/components/pistachio";
import { CrumbledWaffles } from "./src/decorators/crumbled-waffles";
import { JellyBeans } from "./src/decorators/jelly-beans";
import { Marshmallow } from "./src/decorators/marshmallow";
import { Nutella } from "./src/decorators/nutella";

// Chocolate Ice cream with marshmallow
// making a chocolate ice cream
let chocolateIceCream: IceCream = new Chocolate();
// adding marshmallow
chocolateIceCream = new Marshmallow(chocolateIceCream);
// see the result
console.log("Your order:", chocolateIceCream.getDescription());
console.log("Cost: $", chocolateIceCream.getCost());

// Pistachio Ice cream with Jelly beans and nutella toppings
// making a Pistachio ice cream
let pistachioIceCream: IceCream = new Pistachio();
// adding jellybeans
pistachioIceCream = new JellyBeans(pistachioIceCream);
// adding nutella
pistachioIceCream = new Nutella(pistachioIceCream);
// see the result
console.log("Your order:", pistachioIceCream.getDescription());
console.log("Cost: $", pistachioIceCream.getCost());

// Trululu Ice cream with CrumbledWaffles, Jellybeans and Marshmallow
// making a "trululu" ice cream
let trululuIceCream: IceCream = new Trululu();
// adding crumbledWaffles
trululuIceCream = new CrumbledWaffles(trululuIceCream);
// adding jellybeans
trululuIceCream = new JellyBeans(trululuIceCream);
// adding marshmallow
trululuIceCream = new Marshmallow(trululuIceCream);
// more marshmallow... the customer wants it with doble marshmallow
trululuIceCream = new Marshmallow(trululuIceCream);

// see the result
console.log("Your order:", trululuIceCream.getDescription());
console.log("Cost: $", trululuIceCream.getCost());
