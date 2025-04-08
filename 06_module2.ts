import {x} from "./5-module1"
console.log(x);

import { myClass, myFunc } from "./5-module1";
myFunc();

var c1 = new myClass(2, 3);
console.log(c1.add());