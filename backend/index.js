const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
// const axios = require("axios");
const pool = require("./db");
const fs = require("fs");
const { clearScreenDown } = require("readline");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.post("/selected", cors(), (req, res) => {
  try {

    let data = req.body;
    let mindata = data.min;
    let maxdata = data.max;
    console.log(
      data, "data"
    )
    pool.query('SELECT * FROM doc_new').then((data_doc) => {

      //.......... Shape 
      let fitlerByShape = data_doc.rows.filter((e) => data.shape.includes(e.shape))

      //.......... carat

      function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
      }
      const filteredcarat = fitlerByShape.map((e) => e.carat)

      let filtered = filterRange(filteredcarat, mindata, maxdata);
      console.log(filtered, "filtered")

      let fitlerByCarat = fitlerByShape.filter((e) => filtered.includes(e.carat))

      if (fitlerByCarat.length == 0) {
        fitlerByCarat = fitlerByShape;
      }

      // ......filterby Color

      let fitlerByColor = fitlerByCarat.filter((e) => data.color.includes(e.color))

      if (fitlerByColor.length == 0) {
        fitlerByColor = fitlerByCarat;

      }

      // ......filterby clearity

      let fitlerByClearity = fitlerByColor.filter((e) => data.clearity.includes(e.clarity))

      if (fitlerByClearity.length == 0) {
        fitlerByClearity = fitlerByColor;
      }

      // ......filterby symmetry

      let filterBySymmetry = fitlerByClearity.filter((e) => data.sym.includes(e.sym));

      if (filterBySymmetry.length == 0) {
        filterBySymmetry = fitlerByClearity;
      }

      // ......filterby Cut
      let filterByCut = filterBySymmetry.filter((e) => data.cut.includes(e.cut));

      if (filterByCut.length == 0) {
        filterByCut = filterBySymmetry;
      }
      // ......filterby Location

      let filterByLocation = filterByCut.filter((e) => data.location.includes(e.country));

      if (filterByLocation.length == 0) {
        filterByLocation = filterByCut;
      }

      // ......filterby Lab

      let filterByLab = filterByLocation.filter((e) => data.lab.includes(e.lab));

      if (filterByLab.length == 0) {
        filterByLab = filterByLocation;
      }

      // ......filterby Polish

      let filterByPolish = filterByLab.filter((e) => data.polish.includes(e.pol));
      console.log(filterByPolish);

      if (filterByPolish.length == 0) {
        filterByPolish = filterByLab;
      }

      // ......filterby fluroscence

      let filterByFlurosence = filterByPolish.filter((e) => data.fluoresence.includes(e.flo));
      console.log(filterByFlurosence, "flow")
      if (filterByFlurosence.length == 0) {
        filterByFlurosence = filterByPolish;
      }


      // ......filterby shortCut

      // let filtershortCut = filterByPolish.filter((e) => data.Brands.includes(e.flo));

      // console.log(filterByFluroscence)

      // if(filtershortCut.length == 0) {
      //   filtershortCut =  filterByPolish ;
      // }

      // ......filterby brands

      // let filterBybrands = filterByPolish.filter((e) => data.Brands.includes(e.flo));

      // console.log(filterByFluroscence)

      // if(filterBybrands.length == 0) {
      //   filterByFluroscence =  filterByPolish ;
      // }

      res.send(filterByFlurosence);

    });


  } catch (error) {
    console.log(error, "error");
    res.status(400).send(error.message)
    // res.send(error)
  }



});

app.post("/nivoda", cors(), (req, res) => {
  try {

    let data = req.body;
    let mindata = data.min;
    let maxdata = data.max;
    console.log(
      data, "data"
    )
    pool.query('SELECT * FROM nivoda').then((data_doc) => {

      //.......... Shape 
      let fitlerByShape = data_doc.rows.filter((e) => data.shape.includes(e.shape))

      //.......... carat

      function filterRange(arr, a, b) {
        return arr.filter(item => (a <= item && item <= b));
      }
      const filteredcarat = fitlerByShape.map((e) => e.carat)

      let filtered = filterRange(filteredcarat, mindata, maxdata);
      console.log(filtered, "filtered")

      let fitlerByCarat = fitlerByShape.filter((e) => filtered.includes(e.carat))

      if (fitlerByCarat.length == 0) {
        fitlerByCarat = fitlerByShape;
      }

      // ......filterby Color

      let fitlerByColor = fitlerByCarat.filter((e) => data.color.includes(e.color))

      if (fitlerByColor.length == 0) {
        fitlerByColor = fitlerByCarat;

      }

      // ......filterby clearity

      let fitlerByClearity = fitlerByColor.filter((e) => data.clearity.includes(e.clarity))

      if (fitlerByClearity.length == 0) {
        fitlerByClearity = fitlerByColor;
      }

      // ......filterby symmetry

      let filterBySymmetry = fitlerByClearity.filter((e) => data.sym.includes(e.sym));

      if (filterBySymmetry.length == 0) {
        filterBySymmetry = fitlerByClearity;
      }

      // ......filterby Cut
      let filterByCut = filterBySymmetry.filter((e) => data.cut.includes(e.cut));

      if (filterByCut.length == 0) {
        filterByCut = filterBySymmetry;
      }
      // ......filterby Location

      let filterByLocation = filterByCut.filter((e) => data.location.includes(e.country));

      if (filterByLocation.length == 0) {
        filterByLocation = filterByCut;
      }

      // ......filterby Lab

      let filterByLab = filterByLocation.filter((e) => data.lab.includes(e.lab));

      if (filterByLab.length == 0) {
        filterByLab = filterByLocation;
      }

      // ......filterby Polish

      let filterByPolish = filterByLab.filter((e) => data.polish.includes(e.pol));
      console.log(filterByPolish);

      if (filterByPolish.length == 0) {
        filterByPolish = filterByLab;
      }

      // ......filterby fluroscence

      let filterByFlurosence = filterByPolish.filter((e) => data.fluoresence.includes(e.flo));
      console.log(filterByFlurosence, "flow")
      if (filterByFlurosence.length == 0) {
        filterByFlurosence = filterByPolish;
      }


      // ......filterby shortCut

      // let filtershortCut = filterByPolish.filter((e) => data.Brands.includes(e.flo));

      // console.log(filterByFluroscence)

      // if(filtershortCut.length == 0) {
      //   filtershortCut =  filterByPolish ;
      // }

      // ......filterby brands

      // let filterBybrands = filterByPolish.filter((e) => data.Brands.includes(e.flo));

      // console.log(filterByFluroscence)

      // if(filterBybrands.length == 0) {
      //   filterByFluroscence =  filterByPolish ;
      // }

      res.send(filterByFlurosence);

    });


  } catch (error) {
    console.log(error, "error");
    res.status(400).send(error.message)
    // res.send(error)
  }



});

app.listen(port, () => {
  console.log(`listining at port ${port}`);
});
