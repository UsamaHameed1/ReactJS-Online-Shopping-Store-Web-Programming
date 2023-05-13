import db from "./db";

const addToCart = async ({
  id,
  title,
  price,
  description,
  category,
  images,
  quantity,
}) => {
  // STORING THE DATA TO THE DATABASE
  const response = fetch(
    "https://onlineshoppingfrontend-reactjs-default-rtdb.firebaseio.com/cartProducts.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        price,
        description,
        category,
        image: images[0],
        quantity,
      }),
    }
  );
  if (response) {
    console.log("Data stored to the database");
  } else {
    alert("Unable to store the data");
  }
};

export default addToCart;
