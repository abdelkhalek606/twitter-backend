const express = require("express");
const tweet = require("../models/tweet");
const user = require("../models/users");
const auth = require("../midlware/auth");
const router = new express.Router();
const app=express()
app.use(express.json())
          //~~~~~~Create Tweet~~~~~~~~
router.post("/tweet", async (req, res) => {
  try {
    console.log(req.body.userID)
    const newtweet=await tweet.create(req.body)
    res.status(200).json({newtweet}).end()
  } catch (e) {
    res.status(400).send("error");
  }
});
          //~~~~~~Edit Tweet~~~~~~~~
router.put("/tweet/:id", async (req, res) => {
  try {
    const newtweet=await tweet.findByIdAndUpdate(req.params.id,{Text:req.body.Text})
    res.status(200).json({newtweet}).end()
  } catch (e) {
    res.status(400).send("error");
  }
});
          //~~~~~~Retrieve Tweets~~~~~~~~
router.get("/tweet/:uid", async (req, res) => {
  try {
    const newtweet=await tweet.find({userId:req.params.uid})
    res.status(200).json({newtweet}).end()
  } catch (e) {
    console.log(e)
    res.status(400).send("error");
  }
});
          //~~~~~~Delete Tweet~~~~~~~~
router.delete("/tweet/:id", async (req, res) => {
  try {
    const newtweet=await tweet.findByIdAndDelete(req.params.id)
    res.status(200).end('Success')
  } catch (e) {
    res.status(400).send("error");
  }
});
          //~~~~~~Create User~~~~~~~~
router.post("/user", async (req, res) => {
  try {
    const newuser=await user.create(req.body)
    res.status(200).json({newuser}).end()
  } catch (e) {
    res.status(400).send("error");
  }
});

          //~~~~~~Search for user or tweet~~~~~~~~
          //Search will take the text from the search bar in req.body and search for the keyword in all tweets
          //and return all matching tweets and will also lookup users that has this keyword and return them
          // if not found will return a 200 status but say it is not found if an error occured will return 
          // a 400 timeout or 500 server error 
router.post("/search", async (req,res)=>{
  try{
    console.log("Search function implementation");
  } catch (e){
    console.log("faced an error");
  }
});
          //~~~~~~Reply on a tweet~~~~~~~~
          //Function gets id of tweet and req.body and use them to create a reply on the specified tweet
router.post("/tweet/:id/reply", async (req,res)=>{
  try{
    console.log("Reply creation function");
  } catch (e){
    console.log("faced an error");
  }
});
          //~~~~~~Retweet~~~~~~~~
          //Function that gets tweet post the same tweet under the guise of retweet in another profile
router.post("/retweet", async (req,res)=>{
  try{
    console.log("Retweet creation function");
  } catch (e){
    console.log("faced an error");
  }
})

module.exports = router;
