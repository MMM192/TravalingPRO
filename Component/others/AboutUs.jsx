import c1 from '../images/1about.jpg';
import c2 from '../images/2about.jpg';

import './AboutUs.css';
let AboutUs = () => {
    return (
        <div>




            <div className='container-sm'>
                {/*-------------------section-1 ---------------------*/}
                <div className='row'>
                    <div className='col-md-5 '><img id="aboutimg1" src={c1} alt="" /></div>

                    <div className='col-md-7'>

                        <div id="aboutdiv2">
                            <br /><br /><br />
                            <h1 align="center">About Us</h1>
                            <p align="center">Explore it all. The sky is the limit!</p>
                            <br />

                            <p align="center">Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo a felis in,<br />fringilla tincidunt nulla. Vestibulum volutpat non eros ut vulpuuctor, ornare <br /> auctor mi.Commodo a felis lpuuctor nein.</p>
                            <br />
                            <p align="center">Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo a felis in,<br /> fringilla tincidunt nulla.</p>
                            <button align="center" id="view1">view More</button>
                        </div>

                    </div>
                </div>

                {/*-------------------section-2 ---------------------*/}

                <div className='row'>
                    <div className='col-sm-6'>
                        <br /><br />
                        <table>
                            <tr>
                                <td className='abouttr'>
                                    <h6 align='center'>Adipiscing</h6>

                                    <h4 align='center'>
                                        <svg id='aboutlogo' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>

                                        <b>SODALESD VULPU</b></h4>
                                </td>
                            </tr>




                            <tr className='abouttr'>
                                <td >
                                    <h6 align='center'>Scingadipi</h6>
                                    <h4 align='center'><svg id='aboutlogo' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-engines-fill" viewBox="0 0 16 16">
                                        <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z" />
                                    </svg><b>SODALESD TORTOR</b></h4>
                                </td>
                            </tr>




                            <tr className='abouttr' id='aboutlasttr'>
                                <td>
                                    <h6 align='center'>Ngsciadipi</h6>
                                    <h4 align='center'><svg id='aboutlogo' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                    </svg><b>EU LOREM FRINGILLA</b></h4>
                                </td>
                            </tr>
                            <br /><br />
                        </table>
                    </div>


                    <div className='col-sm-6'>
                        <img id='aboutimg2' src={c2} alt="" />
                    </div>
                </div>


            </div>


        </div>

    )
}

export default AboutUs;
{/* 




          <div className='container-sm' id="contenerDiv">
                <div className="row" >

                    <div class="col-sm-6">
                        <img id="aboutimg2" src={c1} alt="" />
                    </div>

                    <div class="col-sm-6">
                        <div id="aboutdiv2">
                            <br /><br /><br /><br />
                            <h1 align="center">About Us</h1>
                            <p align="center">Explore it all. The sky is the limit!</p>
                            <br />

                            <p align="center">Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo a felis in,<br />fringilla tincidunt nulla. Vestibulum volutpat non eros ut vulpuuctor, ornare <br /> auctor mi.Commodo a felis lpuuctor nein.</p>
                            <br />
                            <p align="center">Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo a felis in,<br /> fringilla tincidunt nulla.</p>
                            <button align="center" id="view1">view More</button>
                        </div></div>

                </div>
            </div>
 */}