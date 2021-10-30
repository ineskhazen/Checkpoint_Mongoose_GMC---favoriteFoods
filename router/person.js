const express=require("express");
 

 const { createAndSavePerson,createManyPeople,findPeopleByName,findOneByFood,findPersonById,findEditThenSave,findAndUpdate,removeById,removeManyPeople,queryChain}=require ("../config/controllers/person.controllers");
const router=express.Router();

const Person= require ("../models/Person");


router.get("/test",(req,resp)=>{
    resp.send("test api");
})
module.exports=router;

// CRUD
//@create => add a contact to the database
// Method => Post
//Data req.body
//URL http://localhost:5000/api/person/

// router.post("/",addPerson);
//try {
    //console.log(req.body);
    //step yasna3 fi contact jdid
    //const newPerson=new Person(req.body);
    // base de donnée(save async method +promisses)
    // await newPerson.save();
    // res.status(200).send({msg:"POST API TEST",newPerson});
// } catch (error) {
    // res.status(400).send({msg:"can not save the person", error});
    
// }


//@read => Get all the person
// Method => GET
//Data
//URL http://localhost:5000/api/person/

// router.get("/",getAllPerson);

//@read => Get one person By id
// Method => GET
//Data id=>req.params
//URL http://localhost:5000/api/person/:id

// router.get('/:id',getPerson);

//@DELETE=> delete one person By id
// Method => DELETE
//Data id=>req.params
//URL http://localhost:5000/api/contact/:id

// router.delete("/:id",deletePerson);


//@UPDATE=> update one person By id
// Method => PUT 
//Data id=>req.params+ body=>modification
//URL http://localhost:5000/api/person/:id

// router.put("/:id",updatePerson);
//module.exports=router;


// 1)
router.post("/",function(req, res){
     createAndSavePerson }  );

// 2)
router.post("/",function(req, res){
    createManyPeople }  );
//3)
 router.get("/",function(req,res){
 findPeopleByName}
 );
 //4)
 router.get("/",function(req,res){
 findOneByFood});
 //5) 
 router.get('/:id',function(req,res){
    findPersonById
 });
 //6)
 router.put("/:id",function(req,res){
findEditThenSave});
//7) 
router.put("/",function(req,res){
findAndUpdate});

//8)
router.delete("/:id",function(req,res){
removeById});

//9)
router.delete("/",function(req,res){
removeManyPeople});


//10) 
router.get("/",function(req,res){
    queryChain
});


