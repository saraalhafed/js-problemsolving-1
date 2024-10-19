const cars = [
    { make: "Ford", model: "F150 XLT", year: 2018, color: "Gray" },
    { make: "Porsche", model: "Cayman GT4", year: 2016, color: "Gold" },
    { make: "Audi", model: "S7 Prestige", year: 2017, color: "Blue" },
    { make: "Mercedes", model: "S550", year: 2019, color: "Black" },
  ];
  
  // from highest to lowest
  
  cars.sort((a, b) => b.year - a.year);
  console.log(cars);
  