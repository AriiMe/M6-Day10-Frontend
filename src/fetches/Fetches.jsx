/** @format */

export async function fetchProducts() {
  try {
    let response = await fetch(`http://localhost:9001/api/products`);
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchSingleProduct(id) {
  try {
    let response = await fetch(`http://localhost:9001/api/products/${id}`);
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchProductsByCategory(id) {
  try {
    let response = await fetch(`http://localhost:9001/api/products/${id}`);
    if (response.ok) {
      let data = await response.json();
      console.log("here data reviews", data);
      return data;
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getReviews(id) {
  try {
    let response = await fetch(`http://localhost:9001/api/products/${id}/`);
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getCartItem() {
  try {
    let response = await fetch(`http://localhost:9001/cart`);
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromCart(id) {
  try {
    let response = await fetch(`http://localhost:9001/cart/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
    } else {
      alert("an error accurred");
      getCartItem();
    }
  } catch (err) {
    console.log(err);
  }
}

export async function completeOrder() {
  try {
    const resp = await fetch(`http://localhost:9001/cart/items/checkout`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
    if (resp.ok) {
      alert("check ur email!");
    } else {
      alert("something went wrong");
    }
  } catch (e) {
    console.log(e);
  }
}
export async function deleteProduct(id) {
  try {
    let response = await fetch(`http://localhost:9001/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("post successfully deleted");
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}

export async function deleteReview(id) {
  try {
    let response = await fetch(`http://localhost:9001/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      alert("review successfully deleted");
    } else {
      alert("an error accurred");
    }
  } catch (err) {
    console.log(err);
  }
}
