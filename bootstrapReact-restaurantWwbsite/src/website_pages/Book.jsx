import { Link } from "react-router-dom";
function Book (){
    return (
        <div className="container-fluid">
             {/* Start Book A Table Section */}

             <div className="row gap-5  justify-content-evenly mt-5">
                <div className="col-md-5">
                    <h3>Book A Table</h3>
                    <form action="">
                        <input type="text" className="form-control" placeholder="Your Name" />
                        <input type="text" className="form-control mt-3" placeholder="Phone Number" />
                        <input type="email" className="form-control mt-3" placeholder="Your Email" />
                        <select className="form-select mt-3" name="" id="">
                            <option value="How many person ?">How many person ?</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input className="form-control mt-3" type="date" />

                        <button className="btn btn-primary mt-3 rounded-3" type="submit">BOOK NOW</button>
                    </form>
                </div>

                <div className="col-md-5 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43811234787!2d-74.118086725832!3d40.7058254415091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1614445725730!5m2!1sen!2seg"
                        allowfullscreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            {/* End Book A Table Section */}


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

export default Book;