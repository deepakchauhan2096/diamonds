import React, { useState, useEffect } from "react";
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
        name: "0.70-8.89"
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
        name: "5.00-4.99"
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
    ,
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
    },

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
        name: "S11"
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

const DiamondShortCut = [
    {
        name: "3EX"
    },
    {
        name: "3EX-NON"
    },
    {
        name: "NOBG"
    },
    {
        name: "100% EYECLEAN"
    }
]

const DiamondCut = [
    {
        name: "Excellent",
        title:"EX"
    },
    {
        name: "Ideal",
        title:"I"
    },
    {
        name: "Very Good",
        title:"VG"
    },
    {
        name: "Good",
        title:"GD"
    },
    {
        name: "Fair",
        title:"F"
    },
    {
        name: "Poor",
        title:"P"
    }
]

const DiamondSymmetry = [
    {
        name: "IDEAL",
        title:"I"
    },
    {
        name: "VERY GOOD",
        title:"VG"
    },
    {
        name: "GOOD",
        title:"GD"
    },
    {
        name: "FAIR",
        title:"F"
    },
    {
        name: "POOR",
        title:"P"
    }
]


const DiamondLocation = [
    {
        name: "INDIA"
    },
    {
        name: "HONG KONG"
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
        title:"EX"
    },
    {
        name: "Ideal",
        title:"I"
    },
    {
        name: "Very Good",
        title:"VG"
    },
    {
        name: "Good",
        title:"GD"
    },
    {
        name: "Fair",
        title:"F"
    },
    {
        name: "Poor",
        title:"P"
    }
]

const DiamondFluorescence = [
    {
        name: "None",
        title:"NON"
    },
    {
        name: "V-Slight",
        title:"VST"
    },
    {
        name: "Faint",
        title:"FNT"
    },
    {
        name: "Slight",
        title:"SLT"
    },
    {
        name: "Mediunm",
        title:"MED"
    },
    {
        name: "Strong",
        title:"STG"
    },
    {
        name: "V-Strong",
        title:"VSTG"
    }
]

const DiamondBrands = [
    {
        name: "FOREVERMARK"
    },
    {
        name: "CANADAMARK"
    },
    {
        name: "GIADOR"
    }
]




const Muljis = () => {

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
    const [result, setResult] = useState({ carat: [], shape: [], color: [], clearity: [], sym: [], shortCut: [], cut: [], location: [], lab: [], polish: [], fluroscence : [], brands: [] })
    const [data, setData] = useState();
    const [hit, setHit] = useState(false);

    useEffect(() => {
        const alldata = () => {
            fetch("http://localhost:4000/selected")
                .then((res) => res.json())
                .then((data) => setData(data.rows));
            console.log(data, "all data of the selected");
        };
        alldata();

        const interval = setInterval(() => {
            setHit(true);
        }, 3000000);

        return () => clearInterval(interval);
    }, []);

    if (hit === true) {
        const alldata = () => {
            fetch("http://localhost:4000/doc_new")
                .then((res) => res.json())
                .then((data) => setData(data.rows));
            console.log(data, "all data hhhhhh sgdg ggggg");
            console.log("hit is true");
            setHit(false);
            // console.log(formValues, "formvalues");
            // alert(" 😃 Page refresh complete.  ");
        };

        alldata();
    } else {
        console.log("hit is false");
    }




    function HandleShape(e, index) {
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
        const isChecked = e.target.checked;
        if (isChecked) {
            setCarat([...carat, e.target.value])
        } else {
            const index = carat.indexOf(e.target.value);
            carat.splice(index, 1);
            setCarat(carat);
        }
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


    function HandleShortcut(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setShortcut([...shortcut, e.target.value])
        } else {
            const index = shortcut.indexOf(e.target.value);
            shortcut.splice(index, 1);
            setShortcut(shortcut);
        }
    }

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
            cut.splice(index, 1);
            setLocation(location);
        }
    }

    
    function HandleLab(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setLab([...lab, e.target.value])
        } else {
            const index = lab.indexOf(e.target.value);
            cut.splice(index, 1);
            setLab(lab);
        }
    }

    function HandlePolish(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setPolish([...polish, e.target.value])
        } else {
            const index = polish.indexOf(e.target.value);
            cut.splice(index, 1);
            setPolish(polish);
        }
    }

    function HandleFluo(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setFluroscence([...fluoresence, e.target.value])
        } else {
            const index = fluoresence.indexOf(e.target.value);
            cut.splice(index, 1);
            setFluroscence(fluoresence);
        }
    }

    function HandleBrand(e) {
        const isChecked = e.target.checked;
        if (isChecked) {
            setBrands([...brands, e.target.value])
        } else {
            const index = brands.indexOf(e.target.value);
            cut.splice(index, 1);
            setBrands(brands);
        }
    }

// sending selected data to backend
const to_index = ()=>{
let tempshape = result
console.log(result,"result")
  const response = fetch("http://localhost:4000/selected",{
    method: "POST",
    headers:{"Content-Type":"application/json",},
    body: JSON.stringify(tempshape)
  }).then((res)=>{

      return response.text()
  }).then((res)=>{
    console.log("res : ",res)
  })

//   console.log(body,"body")
    
}

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(shape);
        console.log(carat); 
        console.log(color);
        console.log(clearity); 
        console.log(sym);
        console.log(shortcut);
        console.log(cut);
        console.log(location);
        console.log(lab);
        console.log(polish);
        console.log(fluoresence);
        console.log(brands);
        
        console.log(result, "new Changes")

        to_index()

      
       
       

        // setData((prev) => {
        //     return { ...prev, carat: [...data.carat, "dfsd"] };
        //   });
    }



    return (
        <>
            <div className="container-fluid">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="container">
                            <h5 className='p-2'>Shape</h5>

                            {DiamondShape.map((items, index) => <div key={index} className="cat action">
                                <label>
                                    <input
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
                                        type="checkbox"
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



                    <div className="row">
                        <div className="col-lg-6">

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

                            <div className="row">
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
                            </div>


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

                        <div className="col-lg-6">
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

                            <div className="row">
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
                            </div>

                        </div>
                    </div>
                    {/* <input type='submit' value='Submit' /> */}
                    <button>Submit</button>
                    <button onClick={to_index}> hit api </button>
                </form>
            </div>
            
        </>
    )
}

export default Muljis