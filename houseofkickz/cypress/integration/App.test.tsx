describe("Search Test", function () {
  it("Tests the Search function", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Shop").click();

    cy.url().should("include", "/AllProducts");

    cy.get(".mr-2").type("Jordan").should("have.value", "Jordan");
  });
});

describe("Adding new Product", function () {
  it("Tests if a new Product can be added", function () {
    cy.visit("http://localhost:3000");
    cy.contains("New Product").click();

    cy.url().should("include", "/CreateNewProduct");

    cy.get("#img")
      .type(
        "https://sneakerstrendz.com/wp-content/uploads/2020/11/Air-Jordan-1-Retro-High-Neutral-Grey-Hyper-Crimson-1.jpg"
      )
      .should(
        "have.value",
        "https://sneakerstrendz.com/wp-content/uploads/2020/11/Air-Jordan-1-Retro-High-Neutral-Grey-Hyper-Crimson-1.jpg"
      );

    cy.get("#name").type("Jordan 1 High").should("have.value", "Jordan 1 High");

    cy.get("#price").type("600 CHF").should("have.value", "600 CHF");

    cy.contains("Submit").click();
    cy.wait(2000);
  });
});

describe("Search for new added Product", function () {
  it("Tests if a new Product can be searched", function () {
    cy.visit("http://localhost:3000");
    cy.contains("Shop").click();

    cy.url().should("include", "/AllProducts");

    cy.get(".mr-2").type("Jordan 1 High").should("have.value", "Jordan 1 High");
  });
});
