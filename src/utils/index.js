import toast from "react-hot-toast";

// getting data from local storage for cart
const allStoredData = () => {
  const all = localStorage.getItem("card-data");

  if (all) {
    const storedData = JSON.parse(all);
    return storedData;
  }
  return [];
};

//add to LC
const addToLc = (product) => {
  const alreadyStoredData = allStoredData();
  const wishData = storedWishlists();

  // console.log(wishData);

  const existInWishlist = wishData.find(
    (item) => item.product_id === product.product_id
  );

  const isExist = alreadyStoredData.find(
    (item) => item.product_id == product.product_id
  );

  if (isExist) {
    return toast.error("Already exist");
  } else if (existInWishlist) {
    return toast.error("Existed in Wishlist");
  } else {
    alreadyStoredData.push(product);

    localStorage.setItem("card-data", JSON.stringify(alreadyStoredData));
    toast.success("Item added to Cart!");
  }
};

// getting data from LC for Wish list
const storedWishlists = () => {
  const allData = localStorage.getItem("wishlist");
  if (allData) {
    const storedData = JSON.parse(allData);
    return storedData;
  }
  return [];
};

// add to lc
const addWishlistToLc = (product) => {
  const allStoredList = storedWishlists();
  const allStoredCart = allStoredData();

  const isExist = allStoredList.find(
    (item) => item.product_id === product.product_id
  );
  const isExistInCart = allStoredCart.find(
    (item) => item.product_id === product.product_id
  );

  if (isExist) {
    return toast.error("Not available");
  } else if (isExistInCart) {
    return toast.error("Existed in Cart");
  } else {
    allStoredList.push(product);
    localStorage.setItem("wishlist", JSON.stringify(allStoredList));
    toast.success("Item added to Wishlist");
  }
};

// coin saving to local storage

const savedCoin = () => {
  const all = localStorage.getItem("coin");
  if (all) {
    const allCoin = JSON.parse(all);
    console.log(allCoin);
    return allCoin;
  } else {
    return 0;
  }
};

const addCoinToLc = (price) => {
  const storedCoin = savedCoin();

  const all = storedCoin + price;

  localStorage.setItem("coin", JSON.stringify(all));
};

// data remove from cart

const handleRemoveCartData = () => {
  localStorage.removeItem("card-data");
  localStorage.removeItem("coin");
};

export {
  allStoredData,
  addToLc,
  storedWishlists,
  addWishlistToLc,
  handleRemoveCartData,
  addCoinToLc,
  savedCoin,
};
