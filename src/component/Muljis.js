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

const Carat = [
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

const Color = [
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

const Clearity = [
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

const ShortCut = [
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

const Cut = [
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

const Symmetry = [
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


const Location = [
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

const Lab = [
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

const Polish = [
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

const Fluorescence = [
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

const Brands = [
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


    const [shape, setshape] = useState([])
    const [mydata, setmydata] = useState([])
    // const [data2, setData] = useState();
    // const [hit, setHit] = useState(false);


    // useEffect(() => {
    //     const alldata = () => {
    //       fetch("http://localhost:4000/all")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.rows));
    //       console.log(data2, "all data");
    //     };
    //     alldata();

    //     const interval = setInterval(() => {
    //       setHit(true);
    //     }, 300000);

    //     return () => clearInterval(interval);
    //   }, []);

    //   if (hit === true) {
    //     const alldata = () => {
    //       fetch("http://localhost:4000/all")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.rows));
    //       console.log(data2, "all data hhhhhh");
    //       console.log("hit is true");
    //       setHit(false);
    //       console.log(formValues, "formvalues");
    //       alert(" 😃 Page refresh complete.  ");
    //     };

    //     alldata();
    //   } else {
    //     console.log("hit is false");
    //   }




    function HandleChange(e, index) {
        if (index) {
            const isChecked = e.target.checked;
            if (isChecked) {
                setshape({ shape: [...shape, e.target.value] })
            } else {
                const index = shape.indexOf(e.target.value);
                shape.splice(index, 1);
                setshape({ shape: shape });
            }

        }
    }

    console.log(shape)


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div class="container">
                        <h5 className='p-2'>Shape</h5>

                        {DiamondShape.map((items, index) => <div key={index} class="cat action">
                            <label>
                                <input
                                    type="checkbox"
                                    value={items.name}
                                    name="shape"
                                    onChange={(e) => HandleChange(e, index)}
                                />
                                <span>{items.name}</span>
                            </label>
                        </div>)}

                    </div>
                </div>

                <div className="row">
                    <div class="container">
                        <h5 className='p-2'>Carat</h5>

                        {Carat.map((items) => <div class="cat action">
                            <label>
                                <input type="checkbox" value="1" /><span>{items.name}</span>
                            </label>
                        </div>)}

                    </div>
                </div>

                <div className="row">
                    <div class="container">
                        <h5 className='p-2'>Color</h5>

                        {Color.map((items) => <div class="cat action">
                            <label className='color-width'>
                                <input type="checkbox" value="1" /><span >{items.name}</span>
                            </label>
                        </div>)}

                    </div>
                </div>

                <div className="row">
                    <div class="container">

                        <h5 className='p-2'>Clearity</h5>

                        {Clearity.map((items) => <div class="cat action">
                            <label className='clearity-width'>
                                <input type="checkbox" value="1" /><span >{items.name}</span>
                            </label>
                        </div>)}

                    </div>
                </div>



                <div className="row">
                    <div className="col-lg-6">

                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Symmetry</h5>
                                {Symmetry.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Shortcut</h5>
                                {ShortCut.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>


                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Cut</h5>
                                {Cut.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Location</h5>
                                {Location.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Lab</h5>
                                {Lab.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Polish</h5>
                                {Polish.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Fluoresence</h5>
                                {Fluorescence.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                        <div className="row">
                            <div class="container">
                                <h5 className='p-2'>Brands</h5>
                                {Brands.map((items) => <div class="cat action">
                                    <label>
                                        <input type="checkbox" value="1" /><span >{items.name}</span>
                                    </label>
                                </div>)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Muljis