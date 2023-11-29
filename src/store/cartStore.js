

const defaultStore = { products: [] }

const cartStore = (state=defaultStore, action) => {
    switch (action.type){ 
        case "ADD_PRODUCT":
            return {...state, products: [...state.products, action.payload]  }
            

        case "REMOVE_PRODUCT": 
            return {...state, products: state.products.filter(product => product.id !== action.payload)  }
        
        default: 
            return state
    }
}

export default cartStore