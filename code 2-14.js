const circular = require('./circular-shape');

const r = 10;
const h = 20;
console.log(`Circumference = ${circular.getCircumference(r)}`);
console.log(`Circle Area = ${circular.getCircleArea(r)}`);
console.log(`Sphere Volume = ${circular.getSphereVolume(r)}`);
console.log(`Cylinder Surface Area = ${circular.getCylinderSurfaceArea(r, h)}`);
