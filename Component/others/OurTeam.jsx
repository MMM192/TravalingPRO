import '../others/OurTeam.css';
import c1 from '../images/2discover.jpg';

import c2 from '../images/1OurTeam.jpg';
import c3 from '../images/2OurTeam.jpg';
import c4 from '../images/3OurTeam.jpg';
import c5 from '../images/4OurTeam.jpg';



let OurTeam = () => {

    return (
        <div>
            <div id='ourteamDIV1'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-sm-6'>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1>Our Team</h1>
                            <h6>Explore it all. The sky is the limit!</h6>
                            <br />
                            <marquee behavior="alternate" direction="">
                                <table>
                                    <tr>
                                        <td><img className='ourteammarque' src={c2} alt="" /></td>

                                        <td className='ourteamspam'></td>

                                        <td><img className='ourteammarque' src={c3} alt="" /></td>

                                        <td className='ourteamspam'></td>

                                        <td> <img className='ourteammarque' src={c4} alt="" /></td>

                                        <td className='ourteamspam'></td>


                                        <td><img className='ourteammarque' src={c5} alt="" />
                                        </td>

                                    </tr>

                                    <tr>
                                        <td class='ourteamTD'>
                                            <h6 align='center'>Williamson</h6></td>



                                        <td></td>


                                        <td class='ourteamTD'> <h6 align='center'>Kristiana</h6>  </td>

                                        <td></td>


                                        <td class='ourteamTD'> <h6 align='center'>Williamson</h6></td>


                                        <td></td>

                                        <td class='ourteamTD'> <h6 align='center'>Kristiana</h6>  </td>

                                    </tr>
                                </table>





                            </marquee>
                        </div>



                        <div className='col-sm-6'>
                            <img id="ourteamimg" src={c1} alt="" />
                        </div>

                    </div>
                </div>

            </div>









            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />




        </div>
    )
}

export default OurTeam;