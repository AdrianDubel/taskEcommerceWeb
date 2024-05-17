class homePage {
    elements = {
      signUpBtn: () => cy.get(''),
      loginBtn: () => cy.get(''),
      searchBarInput: () => cy.get(''),
      searchBtn: () => cy.get(''),
      filterPriceRange: () => cy.get(''),
      filterBrand: () => cy.get(''),
      applyFiltersBtn: () => cy.get(''),
      productItem: () => cy.get(''),
      category: '',
      price: '',
      brand: '',
      addToCartBtn: () => cy.get(''),
      cartBtn: () => cy.get(''),
      cartItems: () => cy.get(''),
      itemName: () => cy.get(''),
      itemQuantity: () => cy.get(''),
      itemPrice: () => cy.get(''),
    };
  }
  
  export default new homePage();