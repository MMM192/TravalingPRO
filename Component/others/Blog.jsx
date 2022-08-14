import '../others/Blog.css';
import c1 from '../images/4insta.jpg';
import c2 from '../images/5insta.jpg';
import c3 from '../images/6insta.jpg';



let Blog = () => {
    return (
        <div><br /><br />
            <div className='container'>
                <div className='row'>
                    <div>
                        <h1 align='right'><b>Latest Blog</b></h1>
                        <h6 align='right'> Explore it all. The sky is the limit!</h6>
                    </div>
                </div>


                <br /><br />


                <div className='row'>

                    <div className='col-sm-4'>


                        <div class="card" id='blogcard'>
                            <img class="card-img-top" src={c1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 id='BlogTitle' class="card-title"> <b> CRAS ULTRICIES LIGULA SED.</b></h5><br />
                                <p id="vlogcardP" class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                                <a class='bloglink' href="" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Read More</a>


                                <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header" id='cardtitle'>
                                                <h5 class="modal-title" id="exampleModalLabel"> Cras Ultricies Ligula Sed Magna Dictum Porta Auris Blandita.</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <img className="cardimg1" src={c1} alt="" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <h6>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta.</h6>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>



                    </div>
















                    <div className='col-sm-4'>


                        <div class="card" id='blogcard'>
                            <img class="card-img-top" src={c2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 id='BlogTitle' class="card-title"> <b>  MAGNA PORTA AURIS.</b></h5><br />
                                <p id="vlogcardP" class="card-text">At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                                <h6>.</h6>

                                <a class='bloglink' href="" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@mdo">Read More</a>


                                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header" id='cardtitle'>
                                                <h5 class="modal-title" id="exampleModalLabel"> Cras Ultricies Ligula Sed Magna Dictum Porta Auris Blandita.</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <img className="cardimg1" src={c2} alt="" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <h6>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta.</h6>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>











                    <div className='col-sm-4'>


                        <div class="card" id='blogcard'>
                            <img class="card-img-top" src={c3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 id='BlogTitle' class="card-title"><b>CRAS ULTRICIES LIGULA SED.</b></h5><br />
                                <p id="vlogcardP" class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                                <a class='bloglink' href="" data-bs-toggle="modal" data-bs-target="#exampleModal3" data-bs-whatever="@mdo">Read More</a>


                                <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header" id='cardtitle'>
                                                <h5 class="modal-title" id="exampleModalLabel"> Cras Ultricies Ligula Sed Magna Dictum Porta Auris Blandita.</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="mb-3">
                                                        <img className="cardimg1" src={c3} alt="" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <h6>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta.</h6>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>











                </div>



            </div>









            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    )
}

export default Blog;
