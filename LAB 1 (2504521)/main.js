
import { ayeshaProfile, calculateArea, greet } from './utils.js';
console.log(`User name: ${ayeshaProfile.name}`);
console.log(`User age: ${ayeshaProfile.age}`);
const gardenArea = calculateArea(15, 8);
console.log(`The garden area is ${gardenArea} square meters.`);
const greetingMessage = greet(ayeshaProfile.name);
console.log(greetingMessage);