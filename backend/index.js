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
        
        // ......filterby Shape 
        let fitlerByShape = linkbbpdata.filter((e) => data.shape.includes(e.shape))

        // console.log("fileterbyShape:",fitlerByShape)
        // console.log("lengthOfShape:",fitlerByShape.length)
        res.json(fitlerByShape);


        // ......filterby Color
        let fitlerByColor = fitlerByShape.filter((e) => data.color.includes(e.color))
        // console.log("fitlerByColor:", fitlerByColor)
        // console.log("lengthOfColor =>", fitlerByColor.length)
        res.json(fitlerByColor);


        // ......filterby clearity

        let fitlerByClearity = fitlerByShape.filter((e) => data.clearity.includes(e.clearity))

        // console.log("fitlerByClearity =>", fitlerByClearity)
        // console.log("lengthOfClearity =>", fitlerByClearity.length)
        res.json(fitlerByClearity);

        // ......filterby symmetry

        let filterBySymmetry = fitlerByClearity.filter((e) => data.sym.includes(e.sym));


        console.log("filterBySymmetry:", filterBySymmetry)
        console.log("lengthOfSymmetry =>", filterBySymmetry)

        res.json(filterBySymmetry);
        // ......filterby shortCut


        // ......filterby Cut



        // ......filterby Location



        // ......filterby Lab



        // ......filterby Polish



        // ......filterby fluroscence


        // ......filterby brands








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
