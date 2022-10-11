const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const axios = require("axios");
const pool = require("./db");
const fs = require("fs");
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
      // console.log(linkbbpdata, "All Data")
      // ......filterby Shape 
      let fitlerByShape = data_doc.rows.filter((e) => data.shape.includes(e.shape))
      // console.log(fitlerByShape, "filter")
      // res = fitlerByShape;


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

      //.......... carat 

      // let fitlerByCarat = fitlerByColor.filter((e) => data.clearity.includes(e.clarity))

      // if(fitlerByClearity.length == 0) {
      //   fitlerByClearity = fitlerByColor;
      // }



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

      // res.json(filterBySymmetry);

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


      // ......filterby Polish
      if (filterByLab.length == 0) {
        filterByLab = filterByLocation;
      }

      let filterByPolish = filterByLab.filter((e) => data.polish.includes(e.pol));



      // ......filterby fluroscence
      if (filterByPolish.length == 0) {
        filterByPolish = filterByLab;
      }

      // console.log(filterByPolish)
      // console.log(filterByPolish.length)


      let filterByFluroscence = filterByPolish.filter((e) => data.fluoresence.includes(e.flo));

      // console.log(filterByFluroscence)
      // console.log(filterByFluroscence.length)


      if (filterByPolish.length == 0) {
        filterByPolish = filterByLab;
      }

      // let Caratdata = data_doc.rows.filter((e) => data.fluoresence.includes(e.carat));

      // if(min >= 0.001 && max <= 0.009)

      // console.log(filterByPolish)
      // console.log(filterByPolish.length)


      // let filterBybrands = filterByPolish.filter((e) => data.Brands.includes(e.flo));

      // console.log(filterByFluroscence)

      // if(filterByFluroscence.length == 0) {
      //   filterByFluroscence =  filterByPolish ;
      // }

      // let filterBybrands = filterByFluroscence.filter((e) => data.fluroscence.includes(e.brand));

      // console.log(filterBybrands)

      // res.send(filterBybrands)
      // const config = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", },
      //   body: JSON.stringify({ fitlerByShape })
      // }

      // axios.post('http://localhost:4000/data', { fitlerByShape}, config)




      // ......filterby brands



      // ......filterby shortCut
      res.send(filterByPolish)

    });


  } catch (error) {
    console.log(error, "error");
    res.status(400).send(error.message)
    // res.send(error)
  }



});




// console.log("body data : ", data)



app.listen(port, () => {
  console.log(`listining at port ${port}`);
});
