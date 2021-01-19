// Merging Interfaces
interface Box {
  height: number
  width: number
}
interface Box {
  scale: number
}
let box: Box = { height: 5, width: 6, scale: 10 }


// interface Cloner {
//   clone(animal: Animal): Animal;
// }
// interface Cloner {
//   clone(animal: Sheep): Sheep;
// }
// interface Cloner {
//   clone(animal: Dog): Dog;
//   clone(animal: Cat): Cat;
// }

// interface Cloner {
//   clone(animal: Dog): Dog;
//   clone(animal: Cat): Cat;
//   clone(animal: Sheep): Sheep;
//   clone(animal: Animal): Animal;
// }

// interface Document {
//   createElement(tagName: any): Element;
// }
// interface Document {
//   createElement(tagName: "div"): HTMLDivElement;
//   createElement(tagName: "span"): HTMLSpanElement;
// }
// interface Document {
//   createElement(tagName: string): HTMLElement;
//   createElement(tagName: "canvas"): HTMLCanvasElement;
// }

// interface Document {
//   createElement(tagName: "canvas"): HTMLCanvasElement;
//   createElement(tagName: "div"): HTMLDivElement;
//   createElement(tagName: "span"): HTMLSpanElement;
//   createElement(tagName: string): HTMLElement;
//   createElement(tagName: any): Element;
// }


// Merging Namespaces
// namespace Animals {
//   export class Zebra {}
// }
// namespace Animals {
//   export interface Legged {
//     numberOfLegs: number
//   }
//   export class Dog {}
// }
// namespace Animals {
//   export interface Legged {
//     numberOfLegs: number;
//   }

//   export class Zebra {}
//   export class Dog {}
// }


// Merging Namespaces with Classes
// class Album {
//   label: Album.AlbumLabel
// }
// namespace Album {
//   export class AlbumLabel {}
// }
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix
}
declare namespace buildLabel {
  export let suffix: string
  export let prefix: string
}
buildLabel.suffix = ''
buildLabel.prefix = 'Hello, '
console.log(buildLabel('mazi'))
