import React, { useState, useEffect } from "react";
import './style.css'






const DiamondShape = [
    {
        name: "Round"
    },
    {
        name: "Princess"
    },
    {
        name: "Emerald"
    },
    {
        name: "Asscher"
    },
    {
        name: "Oval"
    },
    {
        name: "Radient"
    },
    {
        name: "Sq Radient"
    },
    {
        name: "Pear"
    },
    {
        name: "Heart"
    },
    {
        name: "Triangle"
    },
    {
        name: "Trillent"
    },
    {
        name: "Marquise"
    },
    {
        name: "Cushion"
    },
    {
        name: "Cus Mod"
    },
    {
        name: "Other"
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
        name: "O-P"
    },
    {
        name: "Q-R"
    },
    {
        name: "S-T"
    },
    {
        name: "U-V"
    }
    ,
    {
        name: "W-X"
    },
    {
        name: "Y-Z"
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
        name: "11"
    },
    {
        name: "12"
    },
    {
        name: "13"
    }

]

const DiamondShortCut = [
    {
        name: "3ex"
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
        name: "Excellent"
    },
    {
        name: "Ideal"
    },
    {
        name: "Very Good"
    },
    {
        name: "Good"
    },
    {
        name: "Fair"
    },
    {
        name: "Poor"
    }
]

const DiamondSymmetry = [
    {
        name: "Ideal"
    },
    {
        name: "Very Good"
    },
    {
        name: "Good"
    },
    {
        name: "Fair"
    },
    {
        name: "Poor"
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
        name: "Excellent"
    },
    {
        name: "Ideal"
    },
    {
        name: "Very Good"
    },
    {
        name: "Good"
    },
    {
        name: "Fair"
    },
    {
        name: "Poor"
    }
]

const DiamondFluorescence = [
    {
        name: "None"
    },
    {
        name: "V-Slight"
    },
    {
        name: "Faint"
    },
    {
        name: "Slight"
    },
    {
        name: "Mediunm"
    },
    {
        name: "Strong"
    },
    {
        name: "V-Strong"
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
            fetch("http://localhost:4000/doc")
                .then((res) => res.json())
                .then((data) => setData(data.rows));
            console.log(data, "all data hhhhh  gggg gg ffhgg");
        };
        alldata();

        const interval = setInterval(() => {
            setHit(true);
        }, 3000000);

        return () => clearInterval(interval);
    }, []);

    if (hit === true) {
        const alldata = () => {
            fetch("http://localhost:4000/doc")
                .then((res) => res.json())
                .then((data) => setData(data.rows));
            console.log(data, "all data hhhhhh sgdgg");
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




    // console.log(shape)
    // console.log(carat);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(shape);
        console.log(carat);

        setResult(result.shape.push(...shape), 
        result.carat.push(...carat),
        result.color.push(...color),
        result.clearity.push(...clearity),
        result.sym.push(...sym),
        result.shortCut.push(...shortcut),
        result.cut.push(...cut),
        result.location.push(...location),
        result.lab.push(...lab),
        result.polish.push(...polish),
        result.fluroscence.push(...fluoresence),
        result.brands.push(...brands),
        )
        console.log(result)

        // setData((prev) => {
        //     return { ...prev, carat: [...data.carat, "dfsd"] };
        //   });
    }



    return (
        <>
            <div className="container-fluid">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div class="container">
                            <h5 className='p-2'>Shape</h5>

                            {DiamondShape.map((items, index) => <div key={index} class="cat action">
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
                        <div class="container">
                            <h5 className='p-2'>Carat</h5>

                            {DiamondCarat.map((items, index) => <div key={index} class="cat action">
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
                        <div class="container">
                            <h5 className='p-2'>Color</h5>

                            {DiamondColor.map((items, index) => <div key={index} class="cat action">
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
                        <div class="container">

                            <h5 className='p-2'>Clearity</h5>

                            {DiamondClearity.map((items, index) => <div key={index} class="cat action">
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
                                <div class="container">
                                    <h5 className='p-2'>Symmetry</h5>
                                    {DiamondSymmetry.map((items, index) => <div key={index} class="cat action">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={items.name}
                                                name="symmetry"
                                                onChange={(e) => HandleSym(e, index)}
                                            />
                                            <span >{items.name}</span>
                                        </label>
                                    </div>)}
                                </div>
                            </div>

                            <div className="row">
                                <div class="container">
                                    <h5 className='p-2'>Shortcut</h5>
                                    {DiamondShortCut.map((items, index) => <div key={index} class="cat action">
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
                                <div class="container">
                                    <h5 className='p-2'>Cut</h5>
                                    {DiamondCut.map((items, index) => <div key={index} class="cat action">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={items.name}
                                                name="Cut"
                                                onChange={(e) => HandleCut(e, index)}
                                            />
                                            <span >{items.name}</span>
                                        </label>
                                    </div>)}
                                </div>
                            </div>

                            <div className="row">
                                <div class="container">
                                    <h5 className='p-2'>Location</h5>
                                    {DiamondLocation.map((items, index) => <div key={index} class="cat action">
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
                                <div class="container">
                                    <h5 className='p-2'>Lab</h5>
                                    {DiamondLab.map((items, index) => <div key={index} class="cat action">
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
                                <div class="container">
                                    <h5 className='p-2'>Polish</h5>
                                    {DiamondPolish.map((items, index) => <div key={index} class="cat action">
                                        <label>
                                        <input
                                                type="checkbox"
                                                value={items.name}
                                                name="Polish"
                                                onChange={(e) => HandlePolish(e, index)}
                                            /><span >{items.name}</span>
                                        </label>
                                    </div>)}
                                </div>
                            </div>

                            <div className="row">
                                <div class="container">
                                    <h5 className='p-2'>Fluoresence</h5>
                                    {DiamondFluorescence.map((items, index) => <div key={index} class="cat action">
                                        <label>
                                        <input
                                                type="checkbox"
                                                value={items.name}
                                                name="Flurosence"
                                                onChange={(e) => HandleFluo(e, index)}
                                            />
                                            <span >{items.name}</span>
                                        </label>
                                    </div>)}
                                </div>
                            </div>

                            <div className="row">
                                <div class="container">
                                    <h5 className='p-2'>Brands</h5>
                                    {DiamondBrands.map((items, index) => <div key={index} class="cat action">
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
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </>
    )
}

export default Muljis