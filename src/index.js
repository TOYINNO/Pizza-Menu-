import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: `$6`,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: `$10`,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: `$13`,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: `$12`,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: `$15`,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and b urrata cheese",
    price: `$18`,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },

  {
    name: "Pepperoni Pizza",
    ingredients: "Tomato sauce, mozzarella cheese, pepperoni slices",
    price: `$11`,
    photoName: "pizzas/Pepperoni Pizza.jpg",
    soldOut: false,
  },

  {
    name: "Four Cheese Pizza",
    ingredients:
      "Tomato sauce, mozzarella, parmesan, asiago, and provolone cheeses",
    price: `$13`,
    photoName: "pizzas/Four Cheese Pizza.jpg",
    soldOut: false,
  },

  {
    name: "Hawaiian Pizza",
    ingredients: "Tomato sauce, mozzarella cheese, ham, pineapple",
    price: `$12`,
    photoName: "pizzas/Hawaiian Pizza.jpg",
    soldOut: false,
  },

  {
    name: "Vegetarian Pizza",
    ingredients:
      "Tomato sauce, mozzarella cheese, bell peppers, onions, mushrooms, olives",
    price: `$10`,
    photoName: "pizzas/Vegetarian Pizza.jpg",
    soldOut: true,
  },

  {
    name: "BBQ Chicken Pizza",
    ingredients:
      "BBQ sauce, mozzarella cheese, grilled chicken, red onions, cilantro",
    price: `$14`,
    photoName: "pizzas/bbqchicken pizza.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Jorgho Pizzeria.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    //it is important that each component have a root element e.g <div></div>
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Rendering a list(that is calling them without inputting them manually. To do this we use the map method.) */}
      {numPizzas > 0 ? (
        <>
          <p>
            Jorgho Pizza Co. is more than just a place to satisfy your cravings;
            Every bite is a celebration of life, love, and the simple joy of
            great pizza.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} /> //usually we can write this as <Pizza name={pizza.name} photoName={pizza.photoName} /> but let's create a variable e.g 'pizzaobj' and store the info there so it can be great to call
            ))}
          </ul>
        </>
      ) : (
        <p>Please check back later</p>
      )}

      {/*
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
        soldOut="true"
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={18} //we use the curly braces to input number so that react doesn't see it as a string.
        photoName="pizzas/prosciutto.jpg"
        soldOut="false"
      /> */}
    </main>
  );
}
// To define Props (short form for property), we do it in two steps: 1) we pass the props into the component 2. we receive the props in the component we pass them into.
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null;
  // }

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      {/*To add piece(s) of code here, we need the template literal (``) in order to input the ${}*/}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>{" "}
        {/* we simply do this {props.pizzaObj.price + 3} if for instance, we want an increment in the price by +3.  */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
  // else {
  //   alert("Sorry, we are closed");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  ); // use new Date() to input time
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">order</button>
      <p>{new Date().toLocaleTimeString()} </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
