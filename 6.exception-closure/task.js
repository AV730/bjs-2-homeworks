function parseCount(value) {
  let result = Number.parseFloat(value);
  if(isNaN(result)) {
    throw new Error("Невалидное значение")
  }

  return result;
}

function validateCount(value) {
  let rusult;

  try {
    result = parseCount(value);
  } catch (error) {
    result = error;
  }

  return result;
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if((this.sideA + this.sideB < this.sideC) || 
       (this.sideA + this.sideC < this.sideB) || 
       (this.sideC + this.sideB < this.sideA)) {
         throw new Error("Треугольник с такими сторонами не существует")
    }
  }

  get perimeter() {
    return (this.sideA + this.sideB + this.sideC);
  }

  get area() {
    let p = this.perimeter / 2;
    let s = Number(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)).toFixed(3));

    return s;
  }
}

function getTriangle(sideA, sideB, sideC) {
  let result;

  try {
    result = new Triangle(sideA, sideB, sideC);
  } catch (error) {
    result = {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
  
  return result;
}