angular.module('myApp.services').
factory('ChildParser', function() {

  var Child = Parse.Object.extend("Child", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // Name property
  Child.prototype.__defineGetter__("name", function() {
    return this.get("name");
  });
  Child.prototype.__defineSetter__("name", function(aValue) {
    return this.set("name", aValue);
  });

  Child.prototype.__defineGetter__("birthdate", function() {
    return this.get("birthdate");
  });
  Child.prototype.__defineSetter__("birthdate", function(aValue) {
    return this.set("birthdate", aValue);
  });

  Child.prototype.__defineGetter__("waiting", function() {
    return this.get("waiting");
  });
  Child.prototype.__defineSetter__("waiting", function(aValue) {
    return this.set("waiting", aValue);
  });

  Child.prototype.__defineGetter__("gender", function() {
    return this.get("gender");
  });
  Child.prototype.__defineSetter__("gender", function(aValue) {
    return this.set("gender", aValue);
  });

 
  Child.prototype.__defineGetter__("user", function() {
    return this.get("user");
  });
  Child.prototype.__defineSetter__("user", function(aValue) {
    return this.set("user", aValue);
  });

  return Child;
}).
factory('UserParser', function() {

  var User = Parse.Object.extend("User", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // name property
  User.prototype.__defineGetter__("name", function() {
    return this.get("name");
  });
  User.prototype.__defineSetter__("name", function(aValue) {
    return this.set("name", aValue);
  });

  // Name property
  User.prototype.__defineGetter__("family", function() {
    return this.get("family");
  });
  User.prototype.__defineSetter__("family", function(aValue) {
    return this.set("family", aValue);
  });

  // Name property
  User.prototype.__defineGetter__("birthdate", function() {
    return this.get("birthdate");
  });
  User.prototype.__defineSetter__("birthdate", function(aValue) {
    return this.set("birthdate", aValue);
  });

  // Name property
  User.prototype.__defineGetter__("mobile", function() {
    return this.get("mobile");
  });
  User.prototype.__defineSetter__("mobile", function(aValue) {
    return this.set("mobile", aValue);
  });

  // code property
  User.prototype.__defineGetter__("code", function() {
    return this.get("code");
  });
  User.prototype.__defineSetter__("code", function(aValue) {
    return this.set("code", aValue);
  });

  // email property
  User.prototype.__defineGetter__("email", function() {
    return this.get("email");
  });
  User.prototype.__defineSetter__("email", function(aValue) {
    return this.set("email", aValue);
  });

  // phoneVerified property
  User.prototype.__defineGetter__("phoneVerified", function() {
    return this.get("phoneVerified");
  });
  User.prototype.__defineSetter__("phoneVerified", function(aValue) {
    return this.set("phoneVerified", aValue);
  });

  // conekta_id property
  User.prototype.__defineGetter__("conekta_id", function() {
    return this.get("conekta_id");
  });
  User.prototype.__defineSetter__("conekta_id", function(aValue) {
    return this.set("conekta_id", aValue);
  });


  return User;
}).
factory('InvoiceParser', function() {

  var Invoice = Parse.Object.extend("Invoice", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // rfc property
  Invoice.prototype.__defineGetter__("rfc", function() {
    return this.get("rfc");
  });
  Invoice.prototype.__defineSetter__("rfc", function(aValue) {
    return this.set("rfc", aValue);
  });

  // name property
  Invoice.prototype.__defineGetter__("name", function() {
    return this.get("name");
  });
  Invoice.prototype.__defineSetter__("name", function(aValue) {
    return this.set("name", aValue);
  });

// address property
  Invoice.prototype.__defineGetter__("address", function() {
    return this.get("address");
  });

  Invoice.prototype.__defineSetter__("address", function(aValue) {
    return this.set("address", aValue);
  });

  // email property
  Invoice.prototype.__defineGetter__("email", function() {
    return this.get("email");
  });
  Invoice.prototype.__defineSetter__("email", function(aValue) {
    return this.set("email", aValue);
  });

  // user property
  Invoice.prototype.__defineGetter__("user", function() {
    return this.get("user");
  });
  Invoice.prototype.__defineSetter__("user", function(aValue) {
    return this.set("user", aValue);
  });

  return Invoice;
}).
factory('WalletParser', function() {

  var Wallet = Parse.Object.extend("Wallet", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // credit property
  Wallet.prototype.__defineGetter__("credit", function() {
    return this.get("credit");
  });

  return Wallet;
}).
factory('ManufacturerParser', function() {

  var Manufacturer = Parse.Object.extend("Manufacturer", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // name property
  Manufacturer.prototype.__defineGetter__("name", function() {
    return this.get("name");
  });
  Manufacturer.prototype.__defineSetter__("name", function(aValue) {
    return this.set("name", aValue);
  });

  // email property
  Manufacturer.prototype.__defineGetter__("email", function() {
    return this.get("email");
  });
  Manufacturer.prototype.__defineSetter__("email", function(aValue) {
    return this.set("email", aValue);
  });

  // description property
  Manufacturer.prototype.__defineGetter__("description", function() {
    return this.get("description");
  });
  Manufacturer.prototype.__defineSetter__("description", function(aValue) {
    return this.set("description", aValue);
  });

  // currency property
  Manufacturer.prototype.__defineGetter__("currency", function() {
    return this.get("currency");
  });
  Manufacturer.prototype.__defineSetter__("currency", function(aValue) {
    return this.set("currency", aValue);
  });

  // rfc property
  Manufacturer.prototype.__defineGetter__("rfc", function() {
    return this.get("rfc");
  });
  Manufacturer.prototype.__defineSetter__("rfc", function(aValue) {
    return this.set("rfc", aValue);
  });

  // terms property
  Manufacturer.prototype.__defineGetter__("terms", function() {
    return this.get("terms");
  });
  Manufacturer.prototype.__defineSetter__("terms", function(aValue) {
    return this.set("terms", aValue);
  });

  // website property
  Manufacturer.prototype.__defineGetter__("website", function() {
    return this.get("website");
  });
  Manufacturer.prototype.__defineSetter__("website", function(aValue) {
    return this.set("website", aValue);
  });

  // address property
  Manufacturer.prototype.__defineGetter__("address", function() {
    return this.get("address");
  });
  Manufacturer.prototype.__defineSetter__("address", function(aValue) {
    return this.set("address", aValue);
  });

  // phones property
  Manufacturer.prototype.__defineGetter__("phones", function() {
    return this.get("phones");
  });
  Manufacturer.prototype.__defineSetter__("phones", function(aValue) {
    return this.set("phones", aValue);
  });

  return Manufacturer;
}).
factory('SupplierParser', function() {

  var Supplier = Parse.Object.extend("Supplier", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // name property
  Supplier.prototype.__defineGetter__("name", function() {
    return this.get("name");
  });
  Supplier.prototype.__defineSetter__("name", function(aValue) {
    return this.set("name", aValue);
  });

  // email property
  Supplier.prototype.__defineGetter__("email", function() {
    return this.get("email");
  });
  Supplier.prototype.__defineSetter__("email", function(aValue) {
    return this.set("email", aValue);
  });

  // description property
  Supplier.prototype.__defineGetter__("description", function() {
    return this.get("description");
  });
  Supplier.prototype.__defineSetter__("description", function(aValue) {
    return this.set("description", aValue);
  });

  // currency property
  Supplier.prototype.__defineGetter__("currency", function() {
    return this.get("currency");
  });
  Supplier.prototype.__defineSetter__("currency", function(aValue) {
    return this.set("currency", aValue);
  });

  // rfc property
  Supplier.prototype.__defineGetter__("rfc", function() {
    return this.get("rfc");
  });
  Supplier.prototype.__defineSetter__("rfc", function(aValue) {
    return this.set("rfc", aValue);
  });

  // terms property
  Supplier.prototype.__defineGetter__("terms", function() {
    return this.get("terms");
  });
  Supplier.prototype.__defineSetter__("terms", function(aValue) {
    return this.set("terms", aValue);
  });

  // website property
  Supplier.prototype.__defineGetter__("website", function() {
    return this.get("website");
  });
  Supplier.prototype.__defineSetter__("website", function(aValue) {
    return this.set("website", aValue);
  });

  // address property
  Supplier.prototype.__defineGetter__("address", function() {
    return this.get("address");
  });
  Supplier.prototype.__defineSetter__("address", function(aValue) {
    return this.set("address", aValue);
  });

  // phones property
  Supplier.prototype.__defineGetter__("phones", function() {
    return this.get("phones");
  });
  Supplier.prototype.__defineSetter__("phones", function(aValue) {
    return this.set("phones", aValue);
  });

  return Supplier;
}).
factory('CouponParser', function() {

  var Coupon = Parse.Object.extend("Coupon", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // credit property
  Coupon.prototype.__defineGetter__("amount", function() {
    return this.get("amount");
  });

  Coupon.prototype.__defineGetter__("coupon", function() {
    return this.get("coupon");
  });

  return Coupon;
}).
factory('ProductParser', function() {

  var Product = Parse.Object.extend("Product", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // name property
  Product.prototype.__defineGetter__("name", function() {
    return this.get("name");
  });
  Product.prototype.__defineSetter__("name", function(aValue) {
    return this.set("name", aValue);
  });
  // description property
  Product.prototype.__defineGetter__("description", function() {
    return this.get("description");
  });
  Product.prototype.__defineSetter__("description", function(aValue) {
    return this.set("description", aValue);
  });
  // shortDescription property
  Product.prototype.__defineGetter__("shortDescription", function() {
    return this.get("shortDescription");
  });
  Product.prototype.__defineSetter__("shortDescription", function(aValue) {
    return this.set("shortDescription", aValue);
  });
  // price property
  Product.prototype.__defineGetter__("price", function() {
    return this.get("price");
  });
  Product.prototype.__defineSetter__("price", function(aValue) {
    return this.set("price", aValue);
  });
  // currency property
  Product.prototype.__defineGetter__("currency", function() {
    return this.get("currency");
  });
  Product.prototype.__defineSetter__("currency", function(aValue) {
    return this.set("currency", aValue);
  });
  // code property
  Product.prototype.__defineGetter__("code", function() {
    return this.get("code");
  });
  Product.prototype.__defineSetter__("code", function(aValue) {
    return this.set("code", aValue);
  });
  // website property
  Product.prototype.__defineGetter__("website", function() {
    return this.get("website");
  });
  Product.prototype.__defineSetter__("website", function(aValue) {
    return this.set("website", aValue);
  });
  // stock property
  Product.prototype.__defineGetter__("stock", function() {
    return this.get("stock");
  });
  Product.prototype.__defineSetter__("stock", function(aValue) {
    return this.set("stock", aValue);
  });
  // usageUnit property
  Product.prototype.__defineGetter__("usageUnit", function() {
    return this.get("usageUnit");
  });
  Product.prototype.__defineSetter__("usageUnit", function(aValue) {
    return this.set("usageUnit", aValue);
  });
  // weight property
  Product.prototype.__defineGetter__("weight", function() {
    return this.get("weight");
  });
  Product.prototype.__defineSetter__("weight", function(aValue) {
    return this.set("weight", aValue);
  });
  // width property
  Product.prototype.__defineGetter__("width", function() {
    return this.get("width");
  });
  Product.prototype.__defineSetter__("width", function(aValue) {
    return this.set("width", aValue);
  });
  // height property
  Product.prototype.__defineGetter__("height", function() {
    return this.get("height");
  });
  Product.prototype.__defineSetter__("height", function(aValue) {
    return this.set("height", aValue);
  });
  // active property
  Product.prototype.__defineGetter__("active", function() {
    return this.get("active");
  });
  Product.prototype.__defineSetter__("active", function(aValue) {
    return this.set("active", aValue);
  });
  // reorderLevel property
  Product.prototype.__defineGetter__("reorderLevel", function() {
    return this.get("reorderLevel");
  });
  Product.prototype.__defineSetter__("reorderLevel", function(aValue) {
    return this.set("reorderLevel", aValue);
  });
  // supplier property
  Product.prototype.__defineGetter__("supplier", function() {
    return this.get("supplier");
  });
  Product.prototype.__defineSetter__("supplier", function(aValue) {
    return this.set("supplier", aValue);
  });
  // manufacturer property
  Product.prototype.__defineGetter__("manufacturer", function() {
    return this.get("manufacturer");
  });
  Product.prototype.__defineSetter__("manufacturer", function(aValue) {
    return this.set("manufacturer", aValue);
  });
  // salesStartDate property
  Product.prototype.__defineGetter__("salesStartDate", function() {
    return this.get("salesStartDate");
  });
  Product.prototype.__defineSetter__("salesStartDate", function(aValue) {
    return this.set("salesStartDate", aValue);
  });
  // salesEndDate property
  Product.prototype.__defineGetter__("salesEndDate", function() {
    return this.get("salesEndDate");
  });
  Product.prototype.__defineSetter__("salesEndDate", function(aValue) {
    return this.set("salesEndDate", aValue);
  });

  return Product;
}).
factory('TransactionParser', function() {

  var Transaction = Parse.Object.extend("Transaction", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // amount property
  Transaction.prototype.__defineGetter__("amount", function() {
    return this.get("amount");
  });

    // description property
  Transaction.prototype.__defineGetter__("description", function() {
    return this.get("description");
  });

  return Transaction;
}).
factory('AddressParser', function() {

  var Address = Parse.Object.extend("Address", {
      // Instance methods
    }, {
      // Class methods
    }
  );

  // user property
  Address.prototype.__defineGetter__("user", function() {
    return this.get("user");
  });
  Address.prototype.__defineSetter__("user", function(aValue) {
    return this.set("user", aValue);
  });

  // street property
  Address.prototype.__defineGetter__("street", function() {
    return this.get("street");
  });
  Address.prototype.__defineSetter__("street", function(aValue) {
    return this.set("street", aValue);
  });

  // number property
  Address.prototype.__defineGetter__("number", function() {
    return this.get("number");
  });
  Address.prototype.__defineSetter__("number", function(aValue) {
    return this.set("number", aValue);
  });

  // apt property
  Address.prototype.__defineGetter__("apt", function() {
    return this.get("apt");
  });
  Address.prototype.__defineSetter__("apt", function(aValue) {
    return this.set("apt", aValue);
  });

  // neighborhood property
  Address.prototype.__defineGetter__("neighborhood", function() {
    return this.get("neighborhood");
  });
  Address.prototype.__defineSetter__("neighborhood", function(aValue) {
    return this.set("neighborhood", aValue);
  });

  // city property
  Address.prototype.__defineGetter__("city", function() {
    return this.get("city");
  });
  Address.prototype.__defineSetter__("city", function(aValue) {
    return this.set("city", aValue);
  });

  // state property
  Address.prototype.__defineGetter__("state", function() {
    return this.get("state");
  });
  Address.prototype.__defineSetter__("state", function(aValue) {
    return this.set("state", aValue);
  });

  // zip property
  Address.prototype.__defineGetter__("zip", function() {
    return this.get("zip");
  });
  Address.prototype.__defineSetter__("zip", function(aValue) {
    return this.set("zip", aValue);
  });

  // country property
  Address.prototype.__defineGetter__("country", function() {
    return this.get("country");
  });
  Address.prototype.__defineSetter__("country", function(aValue) {
    return this.set("country", aValue);
  });

  // default property
  Address.prototype.__defineGetter__("default", function() {
    return this.get("default");
  });
  Address.prototype.__defineSetter__("default", function(aValue) {
    return this.set("default", aValue);
  });

  // geopoint property
  Address.prototype.__defineGetter__("geopoint", function() {
    return this.get("geopoint");
  });
  Address.prototype.__defineSetter__("geopoint", function(aValue) {
    return this.set("geopoint", aValue);
  });

  // default property
  Address.prototype.__defineGetter__("default", function() {
    return this.get("default");
  });
  Address.prototype.__defineSetter__("default", function(aValue) {
    return this.set("default", aValue);
  });


  return Address;
});