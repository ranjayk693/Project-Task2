const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

app.use(cors());

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.zomato.com/");
  //   const htmlContent = await page.$eval("body", (body) => body.innerHTML);
  const htmlContent = await page.content();
  await browser.close();
  return htmlContent;
}

app.get("/api/data", async (req, res) => {
  const body = await run();
  const data = {
    message: "Hello from Node.js!",
    content: body,
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
