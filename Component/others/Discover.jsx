import './Discover.css';
import c1 from '../images/1discover.jpg';
import c2 from '../images/2discover.jpg';

let Discover = () => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6' >
                        <img id="discovimg1" src={c1} alt="" />

                    </div>

                    <div className='col'>
                        <h1 align='right' id='exploreTXT'>Explore It All. <br />
                            The Sky Is The Limit!</h1>
                        <br />
                        <p id="exploreTXT1" align='right'>Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo  <br /> a felis in, fringilla tincidunt nulla.</p>
                    </div>


                </div>
            </div>



            <div id="exploreDiv1">
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <div className='container'>
                    <div className='row'>

                        <div className='col-sm-6'>
                            <h1 align='left'>Discover</h1>
                            <p align='left'>Explore it all. The sky is the limit!</p>
                            <br />
                            <p align='left'>Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo a felis in, <br /> fringilla tincidunt nulla. Vestibulum volutpat non eros ut vulpuuctor, ornare<br /> auctor mi.Commodo a felis lpuuctor nein.</p>

                            <br />

                            <p align='left'>Donec mi nulla, auctor nec sem a, ornare. Sed mi tortorcomm odo a felis in,<br /> fringilla tincidunt nulla.</p>

                            <button id="view3">view More</button>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>




                        <div className='col-sm-6'>

                            <img id='DiscoverIMG2' src={c2} alt="" />


                        </div>
                    </div>
                </div>

            </div>













        </div>
    )
}

export default Discover;
