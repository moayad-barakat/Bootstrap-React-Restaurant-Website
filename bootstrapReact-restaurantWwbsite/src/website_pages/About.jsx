import aboutImg from "../assets/aboutImg.png";
import { Link } from "react-router-dom";
function About (){
    return (
       <div className="container-fluid bg-dark">
          {/* Start We Are Feane Section*/}

          <div className="row bg-dark text-white mt-5 justify-content-center align-items-center">
                <div className="col-md-4">
                    <img className="img-fluid" src={aboutImg} alt="" />
                </div>
                <div className="col-md-4">
                    <h1>We Are Feane</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                    <Link className="btn btn-primary px-4 p-2 rounded-4">Read More</Link>
                </div>
            </div>
            {/* End We Are Feane Section*/}
    {/* Start Footer Section */}

    <div className="row bg-dark text-white mt-5 justify-content-center">
                <div className="col-md-3">
                    <h3 className="ms-5">Contact Us</h3>
                    <ul>
                        <li> <Link className="text-decoration-none text-white  fs-4"><i class="fa-solid fa-location-dot m-2 "></i> Location</Link></li>
                        <li><Link className="text-decoration-none  text-white  fs-4"><i class="fa-solid fa-phone m-2 "></i> Call +01 1234567890</Link></li>
                        <li><Link className="text-decoration-none  text-white  fs-4"><i class="fa-solid fa-envelope m-2 "></i>demo@gmail.com</Link></li>
                    </ul>

                </div>

                <div className="col-md-3">
                    <h2>Feane</h2>
                    <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with

                    </p>

                    <Link className="text-white m-2"><i class="fa-brands fs-4 fa-instagram"></i></Link>
                    <Link className="text-white m-2"><i class="fa-brands fs-4 fa-facebook"></i></Link>
                    <Link className="text-white m-2"><i class="fa-brands fs-4 fa-linkedin"></i></Link>
                    <Link className="text-white m-2"><i class="fa-solid fs-4 fa-envelope"></i></Link>

                </div>

                <div className="col-md-3">
                    <h2>Opening Hours</h2>
                    <p>Everyday</p>
                    <h4>10.00 Am -10.00 Pm</h4>
                </div>
            </div>

             {/* End Footer Section */}


       </div>
    )

}

export default About ;