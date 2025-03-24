const express = require("express");

const Industry = require("../models/industry.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const industry = new Industry(data);

    const newIndustry = await industry.save();
    res.json({ data: newIndustry }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "something went wrong." }).status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    let industries = await Industry.find();

    industries = industries.map((industry) => ({
      id: industry._id,
      title: industry.title,
      description: industry.description,
    }));

    res.json({ data: industries }).status(200);
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" }).status(500);
  }
});

module.exports = router;
