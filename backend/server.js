const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require("cors");
const os = require('os');

app.use(cors()); 

async function run(url, filename) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.pdf({ path: os.homedir() + '/Downloads/' + filename });
    await browser.close();
  } catch (error) {
    console.log("Error Encounter While Scrapping the website")
  }
}


app.use(bodyParser.json());

app.post("/submit", async(req,res)=>{
 
  try{
    await run(req.body.url,'test.pdf');
    console.log(req.body.url);
    const data = {
      message: "Hello from Node.js!",
      code:"sucess"
    };
  res.json(data)
  }catch(error){
    console.log("Error encounter during reciveing data "+error)
  }
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
