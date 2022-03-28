import React from "react";
import Link from "react-router-dom";

const toppings = [
    {id: 1, name: "Cheese"},
    {id: 2, name: "Pepperoni"},
    {id: 3, name: "Sausage"},
    {id: 4, name: "Spinach"},
    {id: 5, name: "Mushrooms"},
    {id: 6, name: "Pineapple"},
    {id: 7, name: "Olives"},
    {id: 8, name: "Chicken"}
];

const pizza = [
    {id: "1", name: "Jhordan Special", toppings: [toppings[0], toppings[3], toppings[4], toppings[5], toppings[7]]},
    {id: "2", name: "VeggieTales", toppings: [toppings[0], toppings[3], toppings[4], toppings[6]]},
    {id: "3", name: "Meat Lovers", toppings: [toppings[0], toppings[1], toppings[2], toppings[7]]},
    {id: "4", name: "Pepperoni", toppings: [toppings[0], toppings[1]]},
    {id: "5", name: "Yuck", toppings: [toppings[0], toppings[1], toppings[2], toppings[6]]},
    {id: "6", name: "Plain Jane", toppings: [toppings[0]]},
    {id: "7", name: "Yes It Does", toppings: [toppings[0], toppings[5]]}
];

const Pizza = () => (
    <div>
        <h1 className="bold text-6xl">List of Pizzas</h1>
        <ul>
            {pizza.map(({ id, name}) => (
                <li className="underline text-blue-500" key={id}>
                    <Link to={`pizza/${id}`}>{name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

const EditPizza = ({
    match: {
        params: { pizzaId }
    }
}) => (
    <div>
        <h1 className="bold text-6xl">
            Edit Pizza: {pizza.find(({ id }) => id === pizzaId).name}
        </h1>
        <Link className="underline text-blue-500" to="pizza/1/toppings">
            View Toppings
        </Link>
    </div>
);

const Toppings = ({
    match: {
        params: { pizzaId }
    }
}) => (
    <div>
        <h1 className="bold text-6xl">
            Toppings for {pizza.find(({ id }) => id === pizzaId).name}
        </h1>
        <ul>
            {pizza
                .find(({ id }) => id === pizzaId)
                .toppings.map(({ id, name}) => (
                <li key={id}>{name}</li>
                ))}
        </ul>
    </div>
);

const AnotherRoute = () => <h1>Another One</h1>;

export { Pizza, EditPizza, Toppings, AnotherRoute };