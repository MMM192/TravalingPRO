import c1 from '../images/6carousel.jpg';
import c2 from '../images/2carousel.jpg';
import c3 from '../images/9carousel.jpg';
import './Home.css';
function Home() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide my-0" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" id='Cardiv1'>
                        <img src={c2} className="d-block w-100" alt="..." />

                        <table id="table1">
                            <tr>
                                <td>
                                    <h5 id="tripLogo"><b>TRIPS</b></h5>
                                </td>
                                <td id="span1">

                                </td>
                                <td>
                                    <button type="button" class="btn btn-secondary"><a>HOME</a></button>
                                </td>
                                <td className='span2'></td>
                                <td><button type="button" class="btn btn-outline-secondary">About</button></td>
                                <td className='span2'></td>

                                <td>


                                    {/* <select name="dropdown" id="" class="btn btn-secondary dropdown-toggle">
                                        <option value="-1">services</option>
                                        <option value="0">pricing</option>
                                        <option value="1">termes</option>


    </select>*/}
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>


                                </td>
                                <td className='span2'></td>

                                <td><td><button type="button" class="btn btn-outline-secondary">Contact</button></td></td>
                            </tr>
                        </table>
                        <br /><br /><br />



                        <table id="table2">
                            <tr>
                                <td>
                                    <h5 id="collec">COLLECT MOMENTS...____________________________</h5>
                                </td>
                            </tr>

                        </table>

                        <table id="table3">
                            <tr>
                                <td><h1>A</h1></td>
                                <td className="span4"></td>
                                <td >
                                    <button id="Delightful" disabled>Delightful</button>
                                </td >

                                <td className="span4"></td>

                                <td><h1>Trip</h1></td>
                                <td className="span4"></td>

                                <td><h1>Awaits !</h1></td>
                            </tr>
                        </table>
                        <br />
                        <table id="table3">
                            <tr>

                                <td> <h5>Travelling was naturally essential to learning.
                                    People from different countries travelled to Rome andAthens<br></br> to further the cause of education and knowledge.</h5></td>

                            </tr>
                            <tr><td>
                                <button id="view">view More</button>
                            </td></tr>
                        </table>





                        <div class="carousel-caption d-none d-md-block">
                            <h5>adssfdsefsdf</h5>
                            <p>...</p>
                        </div>




                    </div>














                    {/*-------------------------------carousel 2 -------------------------*/}


                    <div className="carousel-item" id='Cardiv2'>
                        <img src={c1} className="d-block w-100" alt="..." />

                        <table id="table21">
                            <tr>
                                <td>
                                    <h5 id="tripLogo"><b>TRIPS</b></h5>
                                </td>
                                <td id="span1">

                                </td>
                                <td>
                                    <button type="button" class="btn btn-secondary"><a>HOME</a></button>
                                </td>
                                <td className='span2'></td>
                                <td><button type="button" class="btn btn-outline-secondary">About</button></td>
                                <td className='span2'></td>

                                <td>


                                    {/* <select name="dropdown" id="" class="btn btn-secondary dropdown-toggle">
                                        <option value="-1">services</option>
                                        <option value="0">pricing</option>
                                        <option value="1">termes</option>


    </select>*/}
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>


                                </td>
                                <td className='span2'></td>

                                <td><td><button type="button" class="btn btn-outline-secondary">Contact</button></td></td>
                            </tr>
                        </table>
                        <br /><br /><br />



                        <table id="table2">
                            <tr>
                                <td>
                                    <h5 id="collec">COLLECT MOMENTS...____________________________</h5>
                                </td>
                            </tr>

                        </table>

                        <table id="table3">
                            <tr>
                                <td><h1>A</h1></td>
                                <td className="span4"></td>
                                <td >
                                    <button id="Delightful" disabled>Delightful</button>
                                </td >

                                <td className="span4"></td>

                                <td><h1>Trip</h1></td>
                                <td className="span4"></td>

                                <td><h1>Awaits !</h1></td>
                            </tr>
                        </table>
                        <br />
                        <table id="table3">
                            <tr>

                                <td> <h5>Travelling was naturally essential to learning.
                                    People from different countries travelled to Rome andAthens<br></br> to further the cause of education and knowledge.</h5></td>

                            </tr>
                            <tr><td>
                                <button id="view">view More</button>
                            </td></tr>
                        </table>





                        <div class="carousel-caption d-none d-md-block">
                            <h5>adssfdsefsdf</h5>
                            <p>...</p>
                        </div>

                    </div>



















                    {/*-------------------------------carousel 3 -------------------------*/}



                    <div className="carousel-item" id='Cardiv3'>
                        <img src={c3} className="d-block w-100" alt="..." />
                        <table id="table21">
                            <tr>
                                <td>
                                    <h5 id="tripLogo"><b>TRIPS</b></h5>
                                </td>
                                <td id="span1">

                                </td>
                                <td>
                                    <button type="button" class="btn btn-secondary"><a>HOME</a></button>
                                </td>
                                <td className='span2'></td>
                                <td><button type="button" class="btn btn-outline-secondary">About</button></td>
                                <td className='span2'></td>

                                <td>


                                    {/* <select name="dropdown" id="" class="btn btn-secondary dropdown-toggle">
                                        <option value="-1">services</option>
                                        <option value="0">pricing</option>
                                        <option value="1">termes</option>


    </select>*/}
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>


                                </td>
                                <td className='span2'></td>

                                <td><td><button type="button" class="btn btn-outline-secondary">Contact</button></td></td>
                            </tr>
                        </table>
                        <br /><br /><br />



                        <table id="table2">
                            <tr>
                                <td>
                                    <h5 id="collec">COLLECT MOMENTS...____________________________</h5>
                                </td>
                            </tr>

                        </table>

                        <table id="table3">
                            <tr>
                                <td><h1>A</h1></td>
                                <td className="span4"></td>
                                <td >
                                    <button id="Delightful" disabled>Delightful</button>
                                </td >

                                <td className="span4"></td>

                                <td><h1>Trip</h1></td>
                                <td className="span4"></td>

                                <td><h1>Awaits !</h1></td>
                            </tr>
                        </table>
                        <br />
                        <table id="table3">
                            <tr>

                                <td> <h5>Travelling was naturally essential to learning.
                                    People from different countries travelled to Rome andAthens<br></br> to further the cause of education and knowledge.</h5></td>

                            </tr>
                            <tr><td>
                                <button id="view">view More</button>
                            </td></tr>
                        </table>





                        <div class="carousel-caption d-none d-md-block">
                            <h5>adssfdsefsdf</h5>
                            <p>...</p>
                        </div>
                    </div>
                </div>























                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Home;
