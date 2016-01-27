describe('Contact', function() {
  it("creates a new contact with the given properties", function() {
    var testContact = new Contact("Rita","Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.address).to.eql([]);
  });
  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});

describe('Address', function() {
  it("creates a new address with the given properties", function() {
    var testAddress = new Address("123 SW 70th", "Seattle", "Washington");
    expect(testAddress.street).to.equal("123 SW 70th");
    expect(testAddress.city).to.equal("Seattle");
    expect(testAddress.state).to.equal("Washington");
  });
});
