import React, { useState, useContext } from "react";
import axios from 'axios';
import { dataContext } from "../helpers/Context";
import { CSVLink } from "react-csv";
import './style.css'

const DiamondShape = [
    {
        name: "ROUND"
    },
    {
        name: "PRINCESS"
    },
    {
        name: "EMERALD"
    },
    {
        name: "ASSCHER"
    },
    {
        name: "OVAL"
    },
    {
        name: "RADIENT"
    },
    {
        name: "SQ RADIENT"
    },
    {
        name: "PEAR"
    },
    {
        name: "HEART"
    },
    {
        name: "TRIANGLE"
    },
    {
        name: "TRILLENT"
    },
    {
        name: "MARQUISE"
    },
    {
        name: "CUSHION"
    },
    {
        name: "CUS MOD"
    },
    {
        name: "OTHER"
    }
]

const DiamondCarat = [
    {
        name: "0.15-0.22"
    },
    {
        name: "0.23-0.29"
    },
    {
        name: "0.30-0.39"
    },
    {
        name: "0.40-0.49"
    },
    {
        name: "0.50-0.69"
    },
    {
        name: "0.70-0.89"
    },
    {
        name: "0.90-0.99"
    },
    {
        name: "1.00-1.49"
    },
    {
        name: "1.50-1.99"
    },
    {
        name: "2.00-2.99"
    },
    {
        name: "3.00-3.99"
    },
    {
        name: "4.00-4.99"
    },

    {
        name: "5.00-9.99"
    },
    {
        name: "10.00+"
    }
]


const DiamondColor = [
    {
        name: "D"
    },
    {
        name: "E"
    },
    {
        name: "F"
    },
    {
        name: "G"
    },
    {
        name: "H"
    },
    {
        name: "I"
    },
    {
        name: "J"
    },
    {
        name: "K"
    },
    {
        name: "L"
    },
    {
        name: "M"
    },
    {
        name: "N"
    },
    {
        name: "OP"
    },

    {
        name: "QR"
    },

    {
        name: "S"
    },
    {
        name: "T"
    },
    {
        name: "UV"
    },

    {
        name: "W"
    },
    {
        name: "X"
    },
    {
        name: "Y"
    },
    {
        name: "Z"
    }

]

const DiamondClearity = [
    {
        name: "FL"
    },
    {
        name: "IF"
    },
    {
        name: "WST"
    },
    {
        name: "WS2"
    },
    {
        name: "VS1"
    },
    {
        name: "VS2"
    },
    {
        name: "VS3"
    },
    {
        name: "SI1"
    },
    {
        name: "SI2"
    },
    {
        name: "SI3"
    },
    {
        name: "I1"
    },
    {
        name: "I2"
    },
    {
        name: "I3"
    },
    {
        name: "VVS1"
    },
    {
        name: "VVS2"
    }

]

// const DiamondShortCut = [
//     {
//         name: "3EX"
//     },
//     {
//         name: "3EX-NON"
//     },
//     {
//         name: "NOBG"
//     },
//     {
//         name: "100% EYECLEAN"
//     }
// ]

const DiamondCut = [
    {
        name: "Excellent",
        title: "EX"
    },
    {
        name: "Ideal",
        title: "I"
    },
    {
        name: "Very Good",
        title: "VG"
    },
    {
        name: "Good",
        title: "GD"
    },
    {
        name: "Fair",
        title: "F"
    },
    {
        name: "Poor",
        title: "P"
    }
]

const DiamondSymmetry = [
    {
        name: "IDEAL",
        title: "I"
    },
    {
        name: "VERY GOOD",
        title: "VG"
    },
    {
        name: "GOOD",
        title: "GD"
    },
    {
        name: "FAIR",
        title: "F"
    },
    {
        name: "POOR",
        title: "P"
    },
    {
        name: "EXCELLENT",
        title: "EX"
    }
]


const DiamondLocation = [
    {
        name: "INDIA"
    },
    {
        name: "HONGKONG"
    },
    {
        name: "ISRAEL"
    },
    {
        name: "USA"
    },
    {
        name: "UAE"
    }
    ,
    {
        name: "BELGIUM"
    },
    {
        name: "OTHER"
    }
]

const DiamondLab = [
    {
        name: "GIA"
    },
    {
        name: "IGI"
    },
    {
        name: "HRD"
    },
    {
        name: "OTHER"
    }
]

const DiamondPolish = [
    {
        name: "Excellent",
        title: "EX"
    },
    {
        name: "Ideal",
        title: "I"
    },
    {
        name: "Very Good",
        title: "VG"
    },
    {
        name: "Good",
        title: "GD"
    },
    {
        name: "Fair",
        title: "F"
    },
    {
        name: "Poor",
        title: "P"
    }
]

const DiamondFluorescence = [
    {
        name: "None",
        title: "NON"
    },
    {
        name: "V-Slight",
        title: "VST"
    },
    {
        name: "Faint",
        title: "FNT"
    },
    {
        name: "Slight",
        title: "SLT"
    },
    {
        name: "Medinum",
        title: "MED"
    },
    {
        name: "Strong",
        title: "STG"
    },
    {
        name: "V-Strong",
        title: "VSTG"
    }
]

// const DiamondBrands = [
//     {
//         name: "FOREVERMARK"
//     },
//     {
//         name: "CANADAMARK"
//     },
//     {
//         name: "GIADOR"
//     }
// ]

const Form = (props) => {
    const [shape, setShape] = useState([])
    const [carat, setCarat] = useState({
        value:"",
        reason:""
    })
    const [color, setColor] = useState([])
    const [clearity, setClearity] = useState([])
    const [sym, setSym] = useState([])
    const [shortcut, setShortcut] = useState([])
    const [cut, setCut] = useState([])
    const [location, setLocation] = useState([])
    const [lab, setLab] = useState([])
    const [polish, setPolish] = useState([])
    const [fluoresence, setFluroscence] = useState([])
    const [brands, setBrands] = useState([])
    const { data, setData } = useContext(dataContext)
    const { datan, setDatan } = useContext(dataContext)
   
    // const {form, setForm } = useContext(dataContext)
    const { showHide } = props;


    let min;
    let max;
    function HandleShape(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setShape([...shape, e.target.value])
        } else {
            const index = shape.indexOf(e.target.value);
            shape.splice(index, 1);
            setShape(shape);
        }
    }

    function HandleCarat(e) {
     
            const carat = e.target.value;
        
        setCarat({value:carat,reason:"radio"});
    }

    function HandleColor(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setColor([...color, e.target.value])
        } else {
            const index = color.indexOf(e.target.value);
            color.splice(index, 1);
            setColor(color);
        }
    }

    function HandleClearity(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setClearity([...clearity, e.target.value])

        } else {
            const index = clearity.indexOf(e.target.value);
            clearity.splice(index, 1);
            setClearity(clearity);

        }

    }

    function HandleSym(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSym([...sym, e.target.value])
        } else {
            const index = sym.indexOf(e.target.value);
            sym.splice(index, 1);
            setSym(sym);
        }
    }

    // function HandleShortcut(e) {
    //     const isChecked = e.target.checked;
    //     if (isChecked) {
    //         setShortcut([...shortcut, e.target.value])
    //     } else {
    //         const index = shortcut.indexOf(e.target.value);
    //         shortcut.splice(index, 1);
    //         setShortcut(shortcut);
    //     }
    // }

    function HandleCut(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setCut([...cut, e.target.value])
        } else {
            const index = cut.indexOf(e.target.value);
            cut.splice(index, 1);
            setCut(cut);
        }
    }

    function HandleLocation(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setLocation([...location, e.target.value])
        } else {
            const index = location.indexOf(e.target.value);
            location.splice(index, 1);
            setLocation(location);
        }
    }


    function HandleLab(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setLab([...lab, e.target.value])
        } else {
            const index = lab.indexOf(e.target.value);
            lab.splice(index, 1);
            setLab(lab);
        }
    }

    function HandlePolish(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setPolish([...polish, e.target.value])
        } else {
            const index = polish.indexOf(e.target.value);
            polish.splice(index, 1);
            setPolish(polish);
        }
    }

    function HandleFluo(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setFluroscence([...fluoresence, e.target.value])
        } else {
            const index = fluoresence.indexOf(e.target.value);
            fluoresence.splice(index, 1);
            setFluroscence(fluoresence);
        }
    }

    function HandleBrand(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setBrands([...brands, e.target.value])
        } else {
            const index = brands.indexOf(e.target.value);
            brands.splice(index, 1);
            setBrands(brands);
        }
    }

    function refreshPage(){
        window.location.reload(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(shape);
        console.log(fluoresence, "carat");

        console.log("carat value : ",carat)

        if(carat.reason=="valuefrominput"){
            min=carat.value
            max=carat.value
        }else if (carat.value === "0.15-0.22") {
            min = 0.15;
            max = 0.22;
        } else if (carat.value === "0.23-0.29") {
            min = 0.23;
            max = 0.29;
        } else if (carat.value === "0.30-0.39") {
            min = 0.30;
            max = 0.39;
        } else if (carat.value === "0.40-0.49") {
            min = 0.40;
            max = 0.49;
        } else if (carat.value === "0.50-0.69") {
            min = 0.50;
            max = 0.69;
        } else if (carat.value === "0.70-0.89") {
            min = 0.70;
            max = 0.89;
        } else if (carat.value === "0.90-0.99") {
            min = 0.90;
            max = 0.99;
        } else if (carat.value === "1.00-1.49") {
            min = 1.00;
            max = 1.49;
        } else if (carat.value === "1.50-1.99") {
            min = 1.50;
            max = 1.99;
        } else if (carat.value === "2.00-2.99") {
            min = 2.00;
            max = 2.99;
        } else if (carat.value === "3.00-3.99") {
            min = 3.00;
            max = 3.99;
        } else if (carat.value === "4.00-4.99") {
            min = 4.00;
            max = 4.99;
        } else if (carat.value === "5.00-9.99") {
            min = 5.00;
            max = 9.99;
        } else {
            min = 10;
            max = 100;
        }

        // navigation("/table" ,{data} )

        console.log(min, "min")
        console.log(max, "max")
        to_index(min, max)
        to_index_nivoda(min, max)

    }




    const to_index = async (min, max) => {
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
                shape,
                carat,
                color,
                clearity,
                sym,
                shortcut,
                cut,
                location,
                lab,
                polish,
                fluoresence,
                brands,
                min,
                max
            })
        }

        try {

            console.log("upload started");
            // await axios.post('http://3.11.192.143:4000/selected', {
            await axios.post('http://localhost:4000/selected', {

                shape,
                carat,
                color,
                clearity,
                sym,
                shortcut,
                cut,
                location,
                lab,
                polish,
                fluoresence,
                brands,
                min,
                max

            }, config).then((res) => {

                // console.log(res, "hs");
                setData(res)

            }).catch((err) => {

                console.log("Error", err);

            })


        } catch (err) {
            alert("some error occured")
        }


    }

    const to_index_nivoda = async (min, max) => {
        const config = {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
                shape,
                carat,
                color,
                clearity,
                sym,
                shortcut,
                cut,
                location,
                lab,
                polish,
                fluoresence,
                brands,
                min,
                max
            })
        }

        try {

            console.log("upload started");
            // await axios.post('http://3.11.192.143:4000/selected', {
            await axios.post('http://localhost:4000/nivoda', {

                shape,
                carat,
                color,
                clearity,
                sym,
                shortcut,
                cut,
                location,
                lab,
                polish,
                fluoresence,
                brands,
                min,
                max

            }, config).then((res) => {

                // console.log(res, "hs");
                setDatan(res, "djdjdjdjdjd")

            }).catch((err) => {

                console.log("Error", err);

            })


        } catch (err) {
            alert("some error occured")
        }


    }

    // const filteredcarat = fitlerByShape.map((e) => e.carat)
    const notSelect = data?.data.map((e) => e.shape)
    const DuplicateShape = [...new Set(notSelect)];
    const uniq = DuplicateShape.filter(element => {
        return element !== null;
    });
    console.log(uniq, "not select");

    //color

    const notSelectColor = data?.data.map((e) => e.color)
    const DuplicateColor = [...new Set(notSelectColor)];
    const uniqColor = DuplicateColor.filter(element => {
        return element !== null;
    });
    console.log(uniqColor, "not select uniqColor");

    //clearity
    const notSelectClearity = data?.data.map((e) => e.clarity)
    const DuplicateClearity = [...new Set(notSelectClearity)];
    const uniqClarity = DuplicateClearity.filter(element => {
        return element !== null;
    });
    console.log(uniqClarity, "not select uniqClarity");

    //sym
    const notSelectSym = data?.data.map((e) => e.sym)
    const DuplicateSym = [...new Set(notSelectSym)];
    const uniqSym = DuplicateSym.filter(element => {
        return element !== null;
    });
    console.log(uniqSym, "not select notSelectSym");

    //Cut
    const notSelectCut = data?.data.map((e) => e.cut)
    const DuplicateCut = [...new Set(notSelectCut)];
    const uniqCut = DuplicateCut.filter(element => {
        return element !== null;
    });
    console.log(uniqCut, "not select notSelectCut");

    //Location
    const notSelectLocation = data?.data.map((e) => e.country)
    const DuplicateLocation = [...new Set(notSelectLocation)];
    const uniqLocation = DuplicateLocation.filter(element => {
        return element !== null;
    });
    console.log(uniqLocation, "not select notSelectLocation");


    //Lab
    const notSelectLab = data?.data.map((e) => e.lab)
    const DuplicateLab = [...new Set(notSelectLab)];
    const uniqLab = DuplicateLab.filter(element => {
        return element !== null;
    });
    console.log(uniqLab, "not select notSelectLab");

    //Polish
    const notSelectPolish = data?.data.map((e) => e.pol)
    const DuplicatePolish = [...new Set(notSelectPolish)];
    const uniqPolish = DuplicatePolish.filter(element => {
        return element !== null;
    });
    console.log(uniqPolish, "not select notSelectPolish");

    //Fluroscence
    const notSelectFluroscence = data?.data.map((e) => e.flo)
    const DuplicateFluroscence = [...new Set(notSelectFluroscence)];
    const uniqFluroscence = DuplicateFluroscence.filter(element => {
        return element !== null;
    });
    console.log(uniqFluroscence, "not select notSelectFluroscence");

    //    const myval =  (uniq.filter((e) => e.includes('PRINCESS')))[0]
    //    console.log(myval, "myval")

    return (
        <>
            {/* <Navbar /> */}
            <div className="col-lg-12 col-xl-3 container-main" style={{ display: `${showHide}` }}>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="container" >
                            <h5 className='p-2'>Shape</h5>

                            {DiamondShape.map((items, index) => <div key={index} className="cat action">
                                <label key={index} className={items.name === (uniq.filter((e) => e.includes(items.name)))[0] ? "bg" : ""} >
                                    <input
                                        // required

                                        type="checkbox"
                                        value={items.name}
                                        name="shape"
                                        onChange={HandleShape}
                                    />
                                    <span>{items.name}</span>
                                </label>
                            </div>)}
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <h5 className='p-2'>Carat</h5>

                            {DiamondCarat.map((items, index) => <div key={index} className="cat action">
                                <label>
                                    <input
                                        type="radio"
                                        value={items.name}
                                        name="carat"
                                        onChange={(e) => HandleCarat(e)}
                                    />
                                    <span>{items.name}</span>
                                </label>
                            </div>)}
                            <div className="cat action">
                                
                                    <input
                                        type="number"
                                        placeholder="Type Range...."
                                        name="carat"
                                        className="inputcarat"
                                        value={carat.value}
                                        onChange={(e) => {
                                            console.log("value : ",e.target.value)
                                            setCarat({value:e.target.value,reason:"valuefrominput"})
                                 
                                        }}
                                    />
                              
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <h5 className='p-2'>Color</h5>

                            {DiamondColor.map((items, index) => <div key={index} className="cat action">
                                <label key={index} className={items.name === (uniqColor.filter((e) => e.includes(items.name)))[0] ? "bg" : ""}>
                                    <input
                                        type="checkbox"
                                        value={items.name}
                                        name="color"
                                        onChange={(e) => HandleColor(e)}
                                    />
                                    <span >{items.name}</span>
                                </label>
                            </div>)}

                        </div>
                    </div>

                    <div className="row">
                        <div className="container">

                            <h5 className='p-2'>Clearity</h5>

                            {DiamondClearity.map((items, index) => <div key={index} className="cat action">
                                <label key={index} className={items.name === (uniqClarity.filter((e) => e.includes(items.name)))[0] ? "bg" : ""}>
                                    <input
                                        type="checkbox"
                                        value={items.name}
                                        name="Clearity"
                                        onChange={(e) => HandleClearity(e)}
                                    />
                                    <span >{items.name}</span>
                                </label>
                            </div>)}

                        </div>
                    </div>



                    {/* <div className="row"> */}
                    <div className="col">
                        <div className="row">
                            <div className="container">
                                <h5 className='p-2'>Symmetry</h5>
                                {DiamondSymmetry.map((items, index) => <div key={index} className="cat action">
                                    <label key={index} className={items.title === (uniqSym.filter((e) => e.includes(items.title)))[0] ? "bg" : ""}>
                                        <input
                                            type="checkbox"
                                            value={items.title}
                                            name="Symmetry"
                                            onChange={(e) => HandleSym(e)}
                                        />
                                        <span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        {/* <div className="row">
                                <div className="container">
                                    <h5 className='p-2'>Shortcut</h5>
                                    {DiamondShortCut.map((items, index) => <div key={index} className="cat action">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={items.name}
                                                name="shortcut"
                                                onChange={(e) => HandleShortcut(e, index)}
                                            />
                                            <span >{items.name}</span>
                                        </label>
                                    </div>)}
                                </div>
                                </div> */}


                        <div className="row">
                            <div className="container">
                                <h5 className='p-2'>Cut</h5>
                                {DiamondCut.map((items, index) => <div key={index} className="cat action">
                                    <label key={index} className={items.title === (uniqCut.filter((e) => e.includes(items.title)))[0] ? "bg" : ""}>
                                        <input
                                            type="checkbox"
                                            value={items.title}
                                            name="Cut"
                                            onChange={(e) => HandleCut(e)}
                                        />
                                        <span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="container">
                                <h5 className='p-2'>Location</h5>
                                {DiamondLocation.map((items, index) => <div key={index} className="cat action">
                                    <label key={index} className={items.name === (uniqLocation.filter((e) => e.includes(items.name)))[0] ? "bg" : ""}>
                                        <input
                                            type="checkbox"
                                            value={items.name}
                                            name="Location"
                                            onChange={(e) => HandleLocation(e)}
                                        />
                                        <span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="row">
                            <div className="container">
                                <h5 className='p-2'>Lab</h5>
                                {DiamondLab.map((items, index) => <div key={index} className="cat action">
                                    <label key={index} className={items.name === (uniqLab.filter((e) => e.includes(items.name)))[0] ? "bg" : ""}>
                                        <input
                                            type="checkbox"
                                            value={items.name}
                                            name="Lab"
                                            onChange={(e) => HandleLab(e)}
                                        />
                                        <span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="container">
                                <h5 className='p-2'>Polish</h5>
                                {DiamondPolish.map((items, index) => <div key={index} className="cat action">
                                    <label key={index} className={items.title === (uniqPolish.filter((e) => e.includes(items.title)))[0] ? "bg" : ""}>
                                        <input
                                            type="checkbox"
                                            value={items.title}
                                            name="Polish"
                                            onChange={(e) => HandlePolish(e)}
                                        /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="container">
                                <h5 className='p-2'>Fluoresence</h5>
                                {DiamondFluorescence.map((items, index) => <div key={index} className="cat action">
                                    <label key={index} className={items.title === (uniqFluroscence.filter((e) => e.includes(items.title)))[0] ? "bg" : ""}>
                                        <input
                                            type="checkbox"
                                            value={items.title}
                                            name="Flurosence"
                                            onChange={(e) => HandleFluo(e)}
                                        />
                                        <span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary my-4 m-2 px-5">Submit </button>
                    <button className="btn btn-secondary my-4 px-5 m-5" onClick={refreshPage}>Reset</button>
                    {/* <button type="reset" className="btn btn-secondary my-4 px-5 m-5">Reset <span>↺</span> </button> */}

                </form>
            </div>
        </>
    )
}

export default Form