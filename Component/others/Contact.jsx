import '../others/Contact.css';


let Contact = () => {
    return (
        <div>




            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='contactTXt'>Contact</h1>
                        <h6 className='contactTXt'>Explore it all. The sky is the limit!</h6>
                        <br /><br />
                        <h3 >Get In Touch</h3>

                        <br />
                        <h6 className='contactLINK'> <svg id='contactICON' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg> 1234k Avenue,Block-4,Canada.</h6>
                        <br />




                        <h6 ><a href="" className='contactLINK'> <svg id='contactICON' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-open-fill" viewBox="0 0 16 16">
                            <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
                        </svg> info@example.com</a></h6>
                        <br />

                        <h6 ><a href="" className='contactLINK'><svg id='contactICON' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg> +456 123 7890</a></h6>



                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-3'>

                        <label htmlFor="contactinput1"><h6>Full name</h6></label><br />
                        <input id='contactinput1' placeholder='Name' type="text" />
                    </div>

                    <div className='col-sm-3'>

                        <label htmlFor="contactinput2"><h6>Email</h6></label>
                        <br />
                        <input id='contactinput2' placeholder='Email' type="text" />
                    </div>


                    <div className='col-sm-3'>

                        <label htmlFor="contactinput3"><h6>Mobile</h6></label>
                        <br />
                        <input id='contactinput3' placeholder='Mobile' type="number" />
                    </div>

                    <div className='col-sm-3'>
                        <br />
                        <h6></h6>
                        <button type="button" id='contactBTN' class="btn btn-primary">SEND</button>
                    </div>



                </div>

            </div>



        </div>
    )
}

export default Contact;
