//making ice cream with promises

let stocks = {
  Fruits: ["banana", "grapes", "strawberry", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[2]} was selected`))
  .then(() => {
    return order(0000, () => console.log("Production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })

  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    );
  })

  .then(() => {
    return order(1000, () => console.log("Start the machine"));
  })

  .then(() => {
    return order(2000, () =>
      console.log(`ice cream was placed on ${stocks.holder[1]}`)
    );
  })

  .then(() => {
    return order(3000, () =>
      console.log(`${stocks.toppings[1]} was added as toppings`)
    );
  })

  .then(() => {
    return order(2000, () => console.log("Serve ice cream"));
  })

  .catch(() => {
    console.log("Customer left");
  })

  .finally(() => {
    console.log("Shop is closed,day ended");
  });
