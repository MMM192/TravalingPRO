import '../others/SocialMediaPhotos.css';
import c1 from '../images/1insta.jpg';
import c2 from '../images/2insta.jpg';
import c3 from '../images/3insta.jpg';
import c4 from '../images/4insta.jpg';
import c5 from '../images/5insta.jpg';
import c6 from '../images/6insta.jpg';
import c7 from '../images/2insta.jpg';


let SocialMediaPhotos = () => {
    return (
        <div>
            <div className='container'>
                <div className='row' >
                    <div className='col'>
                        <h1 align='left'>Portfolio</h1>
                        <h7 align='left'>Explore it all. The sky is the limit!</h7>
                    </div>
                </div>


                <br />

                <div className='row'>
                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c1} alt="" />
                    </div>

                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c2} alt="" />
                    </div>

                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c3} alt="" />
                    </div>

                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c4} alt="" />
                    </div>
                </div>


                <p ></p>



                <div className='row'>
                    <div className=' col-sm-4'>
                        <img className='instaIMG2' src={c5} alt="" />
                    </div>

                    <div className=' col-sm-4'>
                        <img className='instaIMG2' src={c6} alt="" />
                    </div>

                    <div className=' col-sm-4'>
                        <img className='instaIMG2' src={c7} alt="" />
                    </div>


                </div>




                <div className='row'>
                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c3} alt="" />
                    </div>

                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c1} alt="" />
                    </div>

                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c2} alt="" />
                    </div>

                    <div className=' col-sm-3'>
                        <img className='instaIMG1' src={c3} alt="" />
                    </div>
                </div>

















            </div>

        </div>



    )
}

export default SocialMediaPhotos;