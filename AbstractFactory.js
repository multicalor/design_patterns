function bmwProduser(kind) {
  switch (kind) {
    case "sport":
      return sportCarFactory;

    case "family":
      return familyCarFactory;
  }
}

function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return "Z4 is a sport car";
  }
}

class I3 {
  info() {
    return "I3 is a family car";
  }
}

const sportCarCreater = bmwProduser("sport");
const familyCarCreater = bmwProduser("family");

const familyCar1 = familyCarCreater();
const familyCar2 = familyCarCreater();

const sportCar1 = sportCarCreater();
const sportCar2 = sportCarCreater();


console.log(sportCar1.info());
console.log(sportCar2.info());
console.log(familyCar1.info());
console.log(familyCar2.info());
