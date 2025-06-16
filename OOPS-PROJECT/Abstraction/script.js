class Laptop {
  constructor(brand, processor) {
    this.brand = brand;
    this.processor = processor;
    this._powerStatus = "off";
  }

  powerOn() {
    this._powerStatus = "on";
    this._bootOS();
  }

  powerOff() {
    this._powerStatus = "off";
  }

  getPowerStatus() {
    return this._powerStatus;
  }

  _bootOS() {
    console.log("System is booting up!");
    console.log("Laptop is ready to use!!");
  }
}

const myLaptop = new Laptop("Dell", "Intel i7");

myLaptop.powerOn();
console.log("Power:", myLaptop.getPowerStatus());
myLaptop.powerOff();
console.log("Power:", myLaptop.getPowerStatus());
