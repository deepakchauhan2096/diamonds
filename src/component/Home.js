import React, { useContext } from 'react'
import Doc from './Doc';
import Form from './Form';
import Nivoda from './Nivoda';
// import { dataContext } from "../helpers/Context";


const Home = () => {
    const [slide, setslide] = React.useState(1);
    const [name, setName] = React.useState('DOC');
    const [showhide, setshowHide] = React.useState('block');

    const compare = <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-6 col-md-6 g-0'>
                    <Doc showHide={showhide} />
                </div>
                <div className='col-xl-6 col-md-6 g-0'>
                    <Nivoda showHide={showhide} />
                </div>
            </div>
        </div>
    </>


    console.log(showhide, "Please show")

    const handleSlide = (e, index) => {
        if (index) {
            setslide(index)
            if (index === 1) {
                setName('DOC')
            }
            else if (index === 2) {
                setName('NIVODA')
            }
            else if (index === 3) {
                setshowHide("none")
                setName('NIVODA ⊷ DOC')
            }
        }
    }


    console.log(name, "hhhhh")
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info position-sticky slider-content">
                <a className="navbar-brand px-3 text-white">{name}</a>
                <div>
                    <button className={slide === 3 ? "btn btn-light mx-2 bg-white" : "btn btn-outline-light mx-2"} onClick={(e) => handleSlide(e, 3)} title="compare">||</button>
                    <button className={slide === 1 ? "btn btn-light mx-2 bg-white" : "btn btn-outline-light mx-2"} onClick={(e) => handleSlide(e, 1)}>DOC</button>
                    <button className={slide === 2 ? "btn btn-light mx-2 bg-white" : "btn btn-outline-light mx-2"} onClick={(e) => handleSlide(e, 2)}>NIVODA</button>
                    {/* <button className="btn btn-outline-light mx-2" onClick={() => setslide(e => !e)}>NIVODA</button> */}

                </div>

            </nav>
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <Form showHide={slide === 3 ? "none":""}/>
                        {slide === 1 ? <Doc showHide={"block"} /> :
                            slide === 2 ? <Nivoda showHide={"block"} /> :
                                slide === 3 ? compare : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home