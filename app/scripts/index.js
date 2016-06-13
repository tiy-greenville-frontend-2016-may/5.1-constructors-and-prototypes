/**
 * Strings are not mutable
 * Assignment is "by value"
 */
var kepler = "He loves ";
var item = "treats";
var keplerSays = kepler + item;

console.log(keplerSays); // "He loves treats"

function keplerSpeaks(prefix, suffix){
  prefix = prefix + suffix;
  console.log(prefix);  // "He loves treats"
}

keplerSpeaks(kepler, item);


console.log(kepler);


/**
 * Numbers are not mutable
 * Assignment is "by value"
 */
var number1 = 10;
var number2 = 20;

function add(num1, num2){
  num1 += num2;
  console.log(num1);
}

add(number1, number2);

console.log(number1);

/**
 * Objects are mutable
 * Assignment is "by refernce" or "by sharing"
 */
 var kepler = {
   likes: 'treats'
 };

 console.log(kepler);  // 1. we see kepler likes treats

 function likeSomethingNew(dog){
   dog.chaseSomething = 'balls';
   console.log(dog);  // 2. we see kepler likes balls
 }

 likeSomethingNew(kepler);

 console.log(kepler);  // 3. we see kepler likes balls


/**
 * Objects have properties and methods
 *
 * Methods are functions that have the `this` parameter assigned to the
 * object that the method was called on.
 */

 function sayHello(){
   console.log('regular function call. This: ', this);  // undefined
 }
 sayHello();

 var kay = {
   name: 'Kay',
   sayHello: function(){
     console.log('method function call. This: ', this);  // the Kay object!!!!
     console.log(this.name);
     return 'Woof';
   }
 };

 kay.sayHello();

 console.log('method hasOwnProperty', kay.hasOwnProperty('name')); // Hmmm... but there are methods that I didn't define

 /**
  * Constructors are function calls with the `new` keyword
  */

  // var dog = {
  //   length: 'short'
  // }
  //
  // var oliver = dog;
  //
  // console.log('oliver1', oliver);
  //
  // var kepler = dog;
  // kepler.length = 'long';
  //
  // console.log('oliver2', oliver);

  function Dog(){
    console.log('Constructor. This: ', this);

    this.height = 'short';

    this.wag = function(thing){
      console.log("Wag ", thing);
    }
  }

  var oliver = new Dog();
  var kepler = new Dog();

  oliver.wag('tail');
  kepler.wag('ears');

  kepler.length = 'long';
  console.log('kepler', kepler);
  console.log('oliver', oliver);

  /**
   * Inheritance
   */
  function Truck(){
    this.doors = 2;
    this.bed = true;
  }
  Truck.prototype.go = function(){
    console.log('vroom');
  };

  var genericTruck = new Truck();
  console.log('genericTruck', genericTruck);
  genericTruck.go();

  function Dodge(){
    this.engine = 'hemi';
    this.ram = true;
  }
  Dodge.prototype = new Truck();

  function Ford(){
    this.model = 'F150';
  }
  Ford.prototype = new Truck();
  Ford.prototype.lock = function(){
    console.log('click!');
  }

  var dakota = new Dodge();

  console.log(dakota.doors);
  dakota.go();

  var f150 = new Ford();
  f150.lock();

  console.log(f150);
