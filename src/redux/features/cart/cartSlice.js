// /* eslint-disable no-undef */
// /* eslint-disable no-empty */
// /* eslint-disable no-unused-vars */
// import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// let lastId = 0; // Initialize a variable to track the last assigned ID

// const cartAdapter = createEntityAdapter({
//   selectId: (state,entity) => state.product_Id,
// });


// const initialState = cartAdapter.getInitialState({
//   product_Id:++lastId,
//   quantity: 0,
//   total: 0,
// });

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addProduct: (state, action) => {
//       const product = action.payload;
//       product.color = [product.color];
//       product.size = [product.size];
//       console.log(product.color)
//       const existingItem = Object.values(state.entities).find(
//         (entity) =>
//           (entity._id == product._id && entity.color != product.color) ||
//           entity.size != product.size
//       );


//       const existingEntity = Object.values(state.entities).find(
//         (entity) =>
//           entity._id == product._id &&
//           entity.color != product.color &&
//           entity.size != product.size
//       );


//       if (existingEntity) {
//         state.entities[product._id].quantity += product.quantity;
//         state.quantity += product.quantity;
//         state.total += product.price * product.quantity;
//       }

//       if (existingItem) {
//         console.log("existingItem");
//         // Check if the color already exists in the item
//         const colorExists = existingItem.color.includes(product.color[0]);
//         const sizeExists = existingItem.size.includes(product.size[0]);

//         if (!colorExists) {
//           console.log(colorExists);
//           existingItem.color.push(product.color[0]);
//         }
//         if (!sizeExists) {
//           existingItem.size.push(product.size[0]);
//         }

//         state.entities[product._id].quantity += product.quantity;
//         state.quantity += action.payload.quantity;
//         state.total += product.price * product.quantity;
//       } 
//       else{

//         cartAdapter.addOne(state,action.payload)
//         state.quantity += product.quantity;
//         state.total += product.price * product.quantity;
//       }
      
//     },
//   },
// });

// export const {
//   selectAll: selectAllProducts,
//   selectById: selectPostById,
//   selectIds: selectPostIds,
//   // Pass in a selector that returns the posts slice of state
// } = cartAdapter.getSelectors((state) => state.cart);

// export const { addProduct } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;



