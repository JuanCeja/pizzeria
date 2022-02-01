function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza = pizzaOven("deep dish", "traditional", ['mozzarella'], ['pepperoni', 'sausage']);
console.log(pizza);

var pizza1 = pizzaOven("hand tosed", "marinara", ["mozarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza1);

var juansPizza = pizzaOven("stuffed crust", "extra marinara", ["mozarella", "robiola"], ["pepperoni", "bacon", "jalapenos"]);
console.log(juansPizza);

var athenasPizza = pizzaOven("deep dish", ["marinara", "alfredo"], ["mozzarella", "robiola"], ["chicken breast", "pepperoni", "bacon", "baby spinach", "green onion"]);
console.log(athenasPizza);
