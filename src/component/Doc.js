import React, { useState, useContext } from "react";
import { dataContext } from "../helpers/Context";
import { CSVLink } from "react-csv";
import './style.css'



const Doc = (props) => {
    const { data, setData } = useContext(dataContext)
    // const {form, setForm } = useContext(dataContext)
    const { showHide } = props;
    const csvReport = {
        data: data?.data.map((item) => item),
        // headers: headers,
        filename: 'Doc.csv'
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className={showHide === "block" ? "col-xl-9 col-md-12 container-main g-0" : "container-main"}>
                <section>
                    {/* <Menu /> */}
                    {data ? <>
                        <div className="d-flex flex-row justify-content-between bg-secondary text-white p-2 text-center">
                            <div className="sub-nav-text">DOC</div>
                            <div>Rows : {data.data.length} | <CSVLink className="sub-nav-text" {...csvReport}>↓ Export to CSV</CSVLink></div>
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
                                {data?.data.map((item) => (
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
                        </table> </> : <p className="dashboard">Please select given choices to show results</p>}
                </section>
            </div>
        </>
    )
}

export default Doc