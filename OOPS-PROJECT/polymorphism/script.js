class Mobile {
  features() {
    console.log("Generic mobile features");
  }
}

class AndroidPhone extends Mobile {
  features() {
    console.log("Android Phone: Customizable UI");
  }
}

class iPhone extends Mobile {
  features() {
    console.log("iPhone: iOS ecosystem");
  }
}
console.log("\n---Mobile Features---");

const phones = [new AndroidPhone(), new iPhone()];
phones.forEach(p => p.features());