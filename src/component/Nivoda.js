import React, { useState , useContext } from "react";
import { dataContext } from "../helpers/Context";
import { CSVLink } from "react-csv";
import axios from 'axios';
import './style.css'
// import Navbar from "./Navbar";

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
        name: "O"
    },
    {
        name: "P"
    },
    {
        name: "Q"
    },
    {
        name: "R"
    },

    {
        name: "S"
    },
    {
        name: "T"
    },
    {
        name: "U"
    },
    {
        name: "V"
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
        name: "S12"
    },
    {
        name: "S13"
    },
    {
        name: "I1"
    },
    {
        name: "I2"
    },
    {
        name: "I3"
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
        name: "Mediunm",
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

const Muljis = (props) => {
    const [shape, setShape] = useState([])
    const [carat, setCarat] = useState([])
    const [color, setColor] = useState([])
    const [clearity, setClearity] = useState([])
    const [sym, setSym] = useState([])
    const [shortcut, setShortcut] = useState([])
    const [cut, setcut] = useState([])
    const [location, setLocation] = useState([])
    const [lab, setLab] = useState([])
    const [polish, setPolish] = useState([])
    const [fluoresence, setFluroscence] = useState([])
    const [brands, setBrands] = useState([])
    const {datan, setDatan} = useContext(dataContext)
   
    //props
    const { showHide } = props;

    // const [data, setData] = useState();

    // const {shape, setShape} = useContext(dataContext);
    // const {carat, setCarat} = useContext(dataContext);
    // const {color, setColor} = useContext(dataContext);
    // const {clearity, setClearity} = useContext(dataContext);
    // const {sym, setSym} = useContext(dataContext);
    // const {shortcut, setShortcut} = useContext(dataContext);
    // const {cut, setcut} = useContext(dataContext);
    // const {location, setLocation} = useContext(dataContext);
    // const {lab, setLab} = useContext(dataContext);
    // const {polish, setPolish} = useContext(dataContext);
    // const {fluoresence, setFluroscence} = useContext(dataContext);
    // const {brands, setBrands} = useContext(dataContext);

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
        setCarat(carat);
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
            setcut([...cut, e.target.value])
        } else {
            const index = cut.indexOf(e.target.value);
            cut.splice(index, 1);
            setcut(cut);
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

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(shape);
        console.log(fluoresence, "carat");
        if (carat === "0.15-0.22") {
            min = 0.15;
            max = 0.22;
        } else if (carat === "0.23-0.29") {
            min = 0.23;
            max = 0.29;
        } else if (carat === "0.30-0.39") {
            min = 0.30;
            max = 0.39;
        } else if (carat === "0.40-0.49") {
            min = 0.40;
            max = 0.49;
        } else if (carat === "0.50-0.69") {
            min = 0.50;
            max = 0.69;
        } else if (carat === "0.70-0.89") {
            min = 0.70;
            max = 0.89;
        } else if (carat === "0.90-0.99") {
            min = 0.90;
            max = 0.99;
        } else if (carat === "1.00-1.49") {
            min = 1.00;
            max = 1.49;
        } else if (carat === "1.50-1.99") {
            min = 1.50;
            max = 1.99;
        } else if (carat === "2.00-2.99") {
            min = 2.00;
            max = 2.99;
        } else if (carat === "3.00-3.99") {
            min = 3.00;
            max = 3.99;
        } else if (carat === "4.00-4.99") {
            min = 4.00;
            max = 4.99;
        } else if (carat === "5.00-9.99") {
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
            await axios.post('http://3.11.192.143:4000/selected', {

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
                setDatan(res)

            }).catch((err) => {

                console.log("Error", err);

            })


        } catch (err) {
            alert("some error occured")
        }


    }

    
    const csvReport = {
        data: datan?.data.map((item) => item),
        // headers: headers,
        filename: 'Nivoda.csv'
    };

    // let showHide = "none"

    return (
        <> 
            <div className={showHide === "block" ? "container-fluid" : "" }>
                <div className={showHide === "block" ? "row" : "" }>
                    <div className="col-lg-12 col-xl-3 container-main" style={{display:`${showHide}`}}>
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="container">
                                    <h5 className='p-2'>Shape</h5>

                                    {DiamondShape.map((items, index) => <div key={index} className="cat action">
                                        <label>
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
                                                onChange={(e) => HandleCarat(e, index)}
                                            />
                                            <span>{items.name}</span>
                                        </label>
                                    </div>)}

                                </div>
                            </div>

                            <div className="row">
                                <div className="container">
                                    <h5 className='p-2'>Color</h5>

                                    {DiamondColor.map((items, index) => <div key={index} className="cat action">
                                        <label className='color-width'>
                                            <input
                                                type="checkbox"
                                                value={items.name}
                                                name="color"
                                                onChange={(e) => HandleColor(e, index)}
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
                                        <label className='clearity-width'>
                                            <input
                                                type="checkbox"
                                                value={items.name}
                                                name="Clearity"
                                                onChange={(e) => HandleClearity(e, index)}
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={items.title}
                                                    name="symmetry"
                                                    onChange={(e) => HandleSym(e, index)}
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={items.title}
                                                    name="Cut"
                                                    onChange={(e) => HandleCut(e, index)}
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={items.name}
                                                    name="Location"
                                                    onChange={(e) => HandleLocation(e, index)}
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={items.name}
                                                    name="Lab"
                                                    onChange={(e) => HandleLab(e, index)}
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
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={items.title}
                                                    name="Polish"
                                                    onChange={(e) => HandlePolish(e, index)}
                                                /><span >{items.name}</span>
                                            </label>
                                        </div>)}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="container">
                                        <h5 className='p-2'>Fluoresence</h5>
                                        {DiamondFluorescence.map((items, index) => <div key={index} className="cat action">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={items.title}
                                                    name="Flurosence"
                                                    onChange={(e) => HandleFluo(e, index)}
                                                />
                                                <span >{items.name}</span>
                                            </label>
                                        </div>)}
                                    </div>
                                </div>

                                {/* <div className="row">
                                <div className="container">
                                    <h5 className='p-2'>Brands</h5>
                                    {DiamondBrands.map((items, index) => <div key={index} className="cat action">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={items.name}
                                                name="Brands"
                                                onChange={(e) => HandleBrand(e, index)}
                                            />
                                            <span >{items.name}</span>
                                        </label>
                                    </div>)}
                                </div>
                            </div> */}

                            </div>
                            <button className="btn btn-secondary my-2">Submit </button>
                        </form>

                    </div>
                    <div className={showHide === "block" ? "col-xl-9 col-md-12 g-0 container-main" : "container-main" }>
                            {datan ?<>
                                <div className="d-flex flex-row justify-content-between bg-secondary text-white p-2 text-center">
                                    <div className="sub-nav-text">NIVODA</div>
                                    <CSVLink className="sub-nav-text" {...csvReport}>↓ Export to CSV</CSVLink>
                                </div>
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>SHAPE</th>
                                            <th>CARAT</th>
                                            <th>COLOR</th>
                                            <th>CLEARITY</th>
                                            <th>SYMMETRY</th>
                                            <th>CUT</th>
                                            <th>LOCATION</th>
                                            <th>LAB</th>
                                            <th>POLISH</th>
                                            <th>FLUORESENCE</th>
                                            <th>PRICE</th>
                                            {/* <th >BRANDS</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datan?.data.map((item, index) => (
                                            <tr className="table-bg">
                                                <td >{item.shape}</td>
                                                <td>{item.carat}</td>
                                                <td>{item.color}</td>
                                                <td>{item.clarity}</td>
                                                <td>{item.sym}</td>
                                                <td>{item.cut}</td>
                                                <td>{item.country}</td>
                                                <td>{item.lab}</td>
                                                <td>{item.pol}</td>
                                                <td>{item.flo}</td>
                                                <td>{item.total_$}</td>

                                            </tr>))}

                                    </tbody>
                                </table> </>: <p className="dashboard">Please select given choices to show results</p>}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Muljis