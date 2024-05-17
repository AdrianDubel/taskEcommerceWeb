import homePage from "../support/pages/home.page";

describe("Adding Items to Cart", () => {
  const serchProduct: string = "laptop";

  it("should search for a product, navigate to its details page, add it to the cart, and verify the cart updates correctly", () => {
    cy.visit("/");

    homePage.elements.searchBarInput().type(serchProduct);
    homePage.elements.searchBtn().click();

    // Verify that the URL contains the search query
    cy.url().should("include", `search?query=${serchProduct}`);

    // Select the first product from the search results and navigate to its details page
    homePage.elements.productItem().first().click();

    // Verify that we are on the product details page
    cy.url().should("include", "/product/");

    // Add the product to the shopping cart
    homePage.elements.addToCartBtn().click();

    // Verify that the cart updates correctly with the selected item
    homePage.elements.cartBtn().click();
    homePage.elements.cartItems().should("contain", serchProduct);

    // Verify the quantity and price
    homePage.elements
      .cartItems()
      .first()
      .within(() => {
        homePage.elements.itemName().should("contain", serchProduct);
        homePage.elements.itemQuantity().should("contain", "1");
        homePage.elements.itemPrice().should("exist");
      });
  });
});
