
//1) Create and Save a Record of a Model:
var createAndSavePerson = function(done){
    // var Person = mongoose.model('Person', personSchema);
var p = new Person;
p.name = "wafa";
p.age = 18;
p.favoriteFoods = ["coucous", "soupe"];
  p.save(function(err, data){
    if (err){
      return done(err);
    }
    return done(null, data);
  });
};
exports.createAndSavePerson;

//2) Create Many Records with model.create()
var arrayOfPeople=[{name:"hela",age:24,favoriteFood:["coucous"]},
                   {name:"amira",age:17,favoriteFood:["Salad", "riz "]}];

var createManyPeople = function(arrayOfPeople, done) {
    Person.create(arrayOfPeople, function (data, err) {
      if (err) {
        return done(err);
      }
      return done(null, data);
    });
};

exports.createManyPeople;

//3)Use model.find() to Search Your Database
//Find all the people having a given name, using Model.find() -> [Person]
var findPeopleByName = function(personName, done) {
    const person = Person.find({name: personName}, function(err, data){
      if (err) {
        return done(err)
      }
      else {
        return done(null, data)
      }
    })
  }
  exports.findPeopleByName;
  //4)Use model.findOne() to Return a Single Matching Document from Your Database
  //Find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument food as a search key.
  var findOneByFood = function(food, done){
    const person = Person.findOne({favoriteFoods: food}, function(err, data){
      if (err) {
        return done(err)
      }
      else {
        return done(null, data)
      }
    })
  }
  exports.findOneByFood;
  //5)Use model.findById() to Search Your Database By _id
  //Find the (only!!) person having a given _id, using Model.findById() -> Person. Use the function argument personId as the search key.

  var findPersonById = function(personId, done) {
    const person = Person.findById({_id: personId}, function(err, data){
      if (err) {
        return done(err)
      }
      else {
        return done(null, data)
      }
    })
  };
  exports.findPersonById;
  //6)Perform Classic Updates by Running Find, Edit, then Save
  //Find a person by _id ( use any of the above methods ) with the parameter personId as a search key. Add "hamburger" to the list of the person's favoriteFoods (you can use Array.push()). Then - inside the find callback - save() the updated Person.
  var findEditThenSave = function(personId, done) {
    const itemToAdd = 'hamburger'
    const person = Person.findById({_id: personId}, function(err, data){
      if (err) {
        return done(err)
      }
      data.favoriteFoods.push(itemToAdd)
      data.save(function(err, data){
        if (err) {
          return done(err)
        }
        else {
          return done(null, data)
        }
      })
    })
  }
  exports.findEditThenSave;
  //7)Perform New Updates on a Document Using model.findOneAndUpdate()
  //Find a person by Name and set the person's age to 20. Use the function parameter personName as a search key.
  // pass the option document { new: true } as the 3rd argument to  return the updated document
  var findAndUpdate = function(personName, done) {
    var ageToSet = 20
    const person = Person.findOneAndUpdate({name: personName}, {age: 20}, {new: true}, function(err, data){
      if (err) {
        return done(err)
      }
      else {
        return done(null, data)
      }
    })
  }
  exports.findAndUpdate;
  //8)Delete One Document Using model.findByIdAndRemove
  var removeById = function(personId, done) {
    const person = Person.findByIdAndRemove({_id: personId}, function(err, data){
      if (err) {
        return done(err)
      }
      else {
        return done(null, data)
      }
    })
  }
  exports.removeById;
  //9)MongoDB and Mongoose - Delete Many Documents with model.remove()
  //Delete all the people whose name is “Mary”, using Model.remove(). Pass it to a query document with the name field set, and of course, do a callback.
  var removeManyPeople = function(done) {
    var nameToRemove = "Mary";
    const person = Person.remove({name: nameToRemove}, function(err, data){
      if (err) {
        return done(err)
      }
      else {
        return done(null, data)
      }
    })
  }
  exports.removeManyPeople;
  //10)Chain Search Query Helpers to Narrow Search Results
  //Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().
  var queryChain = function(done) {
    var foodToSearch = "burrito";
    const people = Person.find({favoriteFoods: foodToSearch})
    .sort({name: 1})
    .limit(2)
    .select({age: 0})
    .exec(function(err, data){
      if (err) {
        done(err)
      }
      else {
        done(null, data)
      }
    })
  }
  exports.queryChain;