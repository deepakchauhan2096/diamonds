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


// let data;
// app.post("/selected", cors(), (req, res) => {
//   try {
//     console.log("api hit")
//     let data = req.body;
//     console.log("body data : ", data)
//     const data_doc = pool.query('SELECT * FROM doc_new')
//     .then((data_doc) => {
//       let linkbbpdata = data_doc.rows;
//       let onlyShape = data.shape
//       console.log(data.shape, "shape!")

//       data.shape.forEach(e => {
//         let filtered_data = onlyShape.filter((o) => {
//           return o.shape == e
//         })
//         console.log(filtered_data, "filtered daata")
//         console.log(filtered_data.length, "filtered dta")



//       });
//       res.json(linkbbpdata);

//     });

//   } catch (error) {
//     console.log(error, "error");
//     res.status(400).send(error.message)
//     // res.send(error)
//   }

// });

app.post("/selected", cors(), (req, res) => {
  try {
    console.log("api hit")
    let data = req.body;

    // console.log("body data : ", data)
    const data_doc = pool.query('SELECT * FROM doc_new')
      .then((data_doc) => {
        let linkbbpdata = data_doc.rows;
        // console.log(linkbbpdata, "All Data")
        // ......filterby Shape 
        let fitlerByShape = linkbbpdata.filter((e) => data.shape.includes(e.shape))

        // console.log("fileterbyShape:",fitlerByShape)
        // console.log("lengthOfShape:",fitlerByShape.length)
        // res.json(fitlerByShape);


        // ......filterby Color
        let fitlerByColor = fitlerByShape.filter((e) => data.color.includes(e.color))

        // console.log("fitlerByColor:", fitlerByColor)
        // console.log("lengthOfColor =>", fitlerByColor.length)
        // res.json(fitlerByColor);

        // ......filterby clearity

        let fitlerByClearity = fitlerByColor.filter((e) => data.clearity.includes(e.clarity))

        // console.log("fitlerByClearity =>", fitlerByClearity)
        // console.log("lengthOfClearity =>", fitlerByClearity.length)
        // res.json(fitlerByClearity);

        // ......filterby symmetry

        let filterBySymmetry = fitlerByClearity.filter((e) => data.sym.includes(e.sym));

        // console.log("filterBySymmetry:", filterBySymmetry)
        // console.log("lengthOfSymmetry =>", filterBySymmetry.length)

        // res.json(filterBySymmetry);

        // linkbbpdata
        // ......filterby Cut
        let filterByCut = filterBySymmetry.filter((e) => data.cut.includes(e.cut));
        // console.log("filterByshortCut:", filterByCut);
        // console.log("lenghtOf_shortCut:", filterByCut.length);
        // res.json(filterByCut);

        // ......filterby Location

        let filterByLocation = filterByCut.filter((e) => data.location.includes(e.country));
        // console.log("filterByshortCut:", filterByLocation);
        // console.log("lenghtOf_shortCut:", filterByLocation.length);
        // res.json(filterByLocation);

        // ......filterby Lab

        let filterByLab = filterByLocation.filter((e) => data.lab.includes(e.lab));
        // console.log("filterByLab:", filterByLab);
        // console.log("lenghtOf_lab:", filterByLab.length);
        // res.json(filterByLab);

        // ......filterby Polish

        let filterByPolish = filterByLab.filter((e) => data.polish.includes(e.pol));
        // console.log("filterByPolish:", filterByPolish);
        // console.log("LENGTH_OF_Polish:", filterByPolish.length);
        // res.json(filterByPolish);


        // ......filterby fluroscence

        let filterByFluroscence = filterByPolish.filter((e) => data.fluroscence.includes(e.flo));
        // console.log("filterByFluroscence:", filterByFluroscence);
        // console.log("LENGTH_OF_Fluroscence:", filterByFluroscence.length);
        // res.json(filterByFluroscence);

        // ......filterby brands

        // let filterByBrands = filterByFluroscence.filter((e) => data.sym.includes(e.sym));
        // console.log("filterByFluroscence:", filterByBrands);
        // console.log("LENGTH_OF_Fluroscence:", filterByBrands.length);
        // res.json(filterByBrands);



        // ......filterby shortCut

        // let filterByshortCut = filterBySymmetry.filter((e) => data.shortCut.includes(e.shortCut));
        // // let filterByshortCut = linkbbpdata.filter((e) => data.shortCut.includes(e.shortCut));
        // console.log("filterByshortCut:",filterByshortCut);
        // console.log("lenghtOf_shortCut:",filterByshortCut.length);
        // res.json(filterByshortCut);









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
