// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    items: [{
        id: 0,
        name: 'Steak Dinner',
        calories: 1200
      },
      {
        id: 1,
        name: 'Cookie',
        calories: 400
      },
      {
        id: 2,
        name: 'Salad',
        calories: 300
      }
    ],
    currentItem: null,
    totalCalories: 0
  };

  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    }
  };
})();

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn'
  };

  // Public Methods
  return {
    populateItemList: function (items) {
      let html = '';

      items.forEach(function (item) {
        html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${
                    item.calories
                } calories</em>
                <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a>
              </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function () {
      return UISelectors;
    }
  };
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
  // Load Event listeners
  const loadEventListener = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    console.log('Item Added');
    e.preventDefault();
  };

  // Public methods
  return {
    init: function () {
      // Fetch Items from Data Structure
      const items = ItemCtrl.getItems();

      // Populate list with items
      UICtrl.populateItemList(items);

      // Load event listeners
      loadEventListener();
    }
  };
})(ItemCtrl, UICtrl);

App.init();