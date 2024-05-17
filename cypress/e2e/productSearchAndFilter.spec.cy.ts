import homePage from "../support/pages/home.page";

describe("Product Search and Filter", () => {
  it("should search for electronics and apply filters", () => {
    const category: string = "electronics";
    const priceRange: string = "50-100";
    const brand: string = "BrandX";

    cy.visit("/");

    homePage.elements.searchBarInput().type(category);
    homePage.elements.searchBtn().click();

    // Verify that the URL contains the search query
    cy.url().should("include", `search?query=${category}`);

    // Apply filters to narrow down the search results
    homePage.elements.filterPriceRange().select(priceRange);
    homePage.elements.filterBrand().check(brand);
    homePage.elements.applyFiltersBtn().click();

    // Verify that the displayed products match the search criteria and filters applied
    homePage.elements.productItem().each(($el) => {
      // Check if the product belongs to electronics category
      cy.wrap($el)
        .find(homePage.elements.category)
        .should("contain.text", category);

      // Check if the product price is within the specified range
      cy.wrap($el)
        .find(homePage.elements.price)
        .then(($price) => {
          const price = parseFloat($price.text().replace("$", ""));
          expect(price).to.be.gte(50);
          expect(price).to.be.lte(100);
        });

      // Check if the product brand is correct
      cy.wrap($el).find(homePage.elements.brand).should("contain", brand);
    });
  });
});
