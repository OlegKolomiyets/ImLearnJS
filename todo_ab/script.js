"use strict";
{
  class App {
    constructor(element) {
      this.element = element;
      this.titleInput = this.element.querySelector("#titleInput");
      this.descriptionInput = this.element.querySelector("#descriptionInput");
      this.importanceSelect = this.element.querySelector("#importanceSelect");
      this.cardsDataArray = [];
      this.init();
    }
    attachEvents() {
      this.createButton.addEventListener("click", (event) => {
        event.preventDefault();

        let cardData = {
          title: this.titleInput.value,
          description: this.descriptionInput.value,
          importance: this.importanceSelect.value,
        };
        if (!this.checkForm()) {
          // alert("Форма заполнена не верно!");
          return;
        }

        new Card(cardData, app);
        this.clearForm();

        let tempCardData = cardData;
        tempCardData.status = false;

        this.cardsDataArray.push(tempCardData);
        this.updateStorage(tempCardData);
      });

      this.editButton.addEventListener("click", (event) => {
        event.preventDefault();

        this.editedCardData.title = this.titleInput.value;
        this.editedCardData.description = this.descriptionInput.value;
        this.editedCardData.importance = this.importanceSelect.value;
        this.clearForm();
        this.editedCard.updateCard();
        this.updateStorage();
      });
      this.titleInput.addEventListener("focus", (event) => {
        event.preventDefault();
        this.titleInput.classList.remove("is-invalid");
      });

      this.descriptionInput.addEventListener("focus", (event) => {
        event.preventDefault();
        this.descriptionInput.classList.remove("is-invalid");
      });
    }
    // get isFormValid() {
    //   return this.titleInput.value && this.descriptionInput.value;
    // }

    checkForm() {
      let formFieldsValues = [this.titleInput, this.descriptionInput];
      let isValid = true;
      let invalidFields = [];

      formFieldsValues.forEach((field) => {
        if (!field.value) {
          isValid = false;
          invalidFields.push(field);
        }
      });
      if (isValid) {
        return true;
      } else {
        this.showInvalidFields(invalidFields);
        return false;
      }
    }
    showInvalidFields(invalidFields) {
      invalidFields.forEach((field) => {
        field.classList.add("is-invalid");
      });
    }

    updateStorage() {
      let stringifyCardsArray = JSON.stringify(this.cardsDataArray);
      localStorage.setItem("todoCards", stringifyCardsArray);
    }
    clearForm() {
      this.titleInput.value = "";
      this.descriptionInput.value = "";
      this.importanceSelect.value = "Low";

      this.createButton.style.display = "block";
      this.editButton.style.display = "none";
    }

    updateCard(card) {
      this.editedCard = card;
      this.editedCardData = card.cardData;
      this.fillForm(this.editedCardData);
    }
    getAppElements() {
      this.createButton = this.element.querySelector("#createButton");
      this.editButton = this.element.querySelector("#editButton");
    }
    fillForm(cardData) {
      this.titleInput.value = cardData.title;
      this.descriptionInput.value = cardData.description;
      this.importanceSelect.value = cardData.importance;

      this.createButton.style.display = "none";
      this.editButton.style.display = "block";
    }
    checkStorage() {
      let storageData = localStorage.getItem("todoCards");
      if (storageData) {
        this.cardsDataArray = JSON.parse(storageData);
        this.cardsDataArray.forEach((cardData) => {
          if (cardData) {
            new Card(cardData);
          }
        });
      }
    }
    init() {
      this.getAppElements();
      this.attachEvents();
      this.checkStorage();
    }
  }
  class Card {
    constructor(cardData) {
      this.cardData = cardData;
      this.cardsBlock = document.querySelector("#cardsBlock");
      this.card = document.createElement("div");
      this.init();
    }
    attachEvents() {
      let deleteCardWrapper = this.deleteCard.bind(this);
      this.deleteButton.addEventListener("click", deleteCardWrapper);

      let editCardWrapper = this.editCard.bind(this);
      this.editButton.addEventListener("click", editCardWrapper);

      let completeCardWrapper = this.completeCard.bind(this);
      this.completeButton.addEventListener("click", completeCardWrapper);
    }
    deleteCard() {
      let deleteFlag = confirm("Точно?");
      if (!deleteFlag) {
        return;
      }
      let cardIndex = app.cardsDataArray.indexOf(this.cardData);
      app.cardsDataArray.splice(cardIndex, 1);

      let stringifyCardsArray = JSON.stringify(app.cardsDataArray);
      localStorage.setItem("todoCards", stringifyCardsArray);

      this.cardsBlock.removeChild(this.card);
    }

    updateCard() {
      let cardTitleNode = this.card.querySelector(".card-title");
      let cardDescriptionNode = this.card.querySelector(".card-description");
      let cardImportanceNode = this.card.querySelector(".badge");

      cardTitleNode.textContent = this.cardData.title;
      cardDescriptionNode.textContent = this.cardData.description;
      cardImportanceNode.textContent = this.cardData.importance;
      cardImportanceNode.className = `badge ${this.importanceClass}`;
      // this.card.innerHTML = this.cardHTML;
    }
    completeCard() {
      this.cardData.status = true;
      app.updateStorage();
      this.completeButton.style.pointerEvents = "none";
      this.completeButton.style.opacity = ".5";

      this.completeButton.textContent = "Done";
      this.completeButton.className = "btn btn-secondary complete-button";
      this.editButton.style.pointerEvents = "none";
      this.editButton.style.opacity = ".5";
    }
    editCard() {
      app.updateCard(this);
    }

    get cardHTML() {
      return ` <div class="card-body">
                    <span class="badge ${this.importanceClass}">${this.cardData.importance}</span>
                    <h5 class="card-title">${this.cardData.title}</h5>
                    <p class="card-description">${this.cardData.description}</p>
                    <a href="#" class="btn ${this.completeClass} complete-button" style="${this.completeStyle}">${this.completeText}</a>
                    <a href="#" class="btn btn-info edit-button" style="${this.completeStyle}">Edit</a>
                    <a href="#" class="btn btn-danger delete-button">Delete</a>
                </div>`;
    }

    createCard() {
      this.card.classList.add("card");
      this.card.innerHTML = this.cardHTML;
      this.cardsBlock.append(this.card);
    }

    get importanceClass() {
      switch (this.cardData.importance) {
        case "High":
          return "badge-danger";
        case "Medium":
          return "badge-warning";
        default:
          return "badge-success";
      }
    }
    get completeClass() {
      return this.cardData.status ? "btn-secondary" : "btn-primary";
    }
    get completeStyle() {
      return this.cardData.status ? "pointer-events: none; opacity: .3" : "";
    }
    get completeText() {
      return this.cardData.status ? "Done" : "Complete";
    }
    getCardElements() {
      this.deleteButton = this.card.querySelector(".delete-button");
      this.editButton = this.card.querySelector(".edit-button");
      this.completeButton = this.card.querySelector(".complete-button");
    }
    init() {
      this.createCard();
      this.getCardElements();
      this.attachEvents();
    }
  }
  let appElement = document.querySelector("#app");
  let app = new App(appElement);
}
