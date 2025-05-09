import { Link } from "react-router-dom";
import o1 from "../assets/o1.jpg";
import o2 from "../assets/o2.jpg";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
import aboutImg from "../assets/aboutImg.png";
function Home() {

    return (
        <div className="container-fluid">
            {/* Start Header */}
            <div className="row">
                <div className="col-md-12">
                    <div className="header_section">
                        <div className="carousel slide" data-bs-ride="carousel" id="slides-with-indicators">
                            <div className="carousel-indicators">
                                <button
                                    className="active carBtn"
                                    type="button"
                                    data-bs-target="#slides-with-indicators"
                                    data-bs-slide-to="0"
                                ></button>

                                <button
                                    className="carBtn"
                                    type="button"
                                    data-bs-target="#slides-with-indicators"
                                    data-bs-slide-to="1"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item" >
                                    <div className="carpusel-caption">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="carousel-caption2">
                                                        <h1 className="text-white carousel_h1">Fast Food Restaurant</h1>
                                                        <p className="text-white carousel_p1">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                                                        <Link className="btn btn-primary p-2 px-2 rounded-4">Order Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item active" >
                                    <div className="carpusel-caption">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <div className="carousel-caption2">
                                                        <h1 className="text-white carousel_h1">Fast Food Restaurant</h1>
                                                        <p className="text-white carousel_p1">Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                                                        <Link className="btn btn-primary p-2 px-2 rounded-4">Order Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header */}

            {/* Start Section 2 */}

            <div className="row justify-content-evenly mt-5">
                <div className="col-md-5 h-25">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-evenly">
                                <div className="transform_border">
                                    <img className="img-fluid tranform_img  w-75 " src={o1} alt="" />
                                </div>
                                <div>
                                    <h2>Tasty Thursdays</h2>
                                    <h2>20% Off</h2>
                                    <Link className="btn btn-primary p-2 px-4 rounded-4">Order Now  <i className="fa-solid fa-cart-shopping text-white  fs-5"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-4">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <div className="d-flex">
                                <div className="transform_border">
                                    <img className="img-fluid tranform_img  w-75 " src={o2} alt="" />
                                </div>
                                <div>
                                    <h2>Pizza Days</h2>
                                    <h2>15% Off</h2>
                                    <Link className="btn btn-primary p-2 px-4 rounded-4">Order Now  <i className="fa-solid fa-cart-shopping text-white  fs-5"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 2 */}


            {/* Start Menu Section */}

            <div className="row justify-content-evenly mt-5 gap-5">
                <h1 className="text-center">Our Menu</h1>
                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className=" menu_imgs" src={f1} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>Delicious Pizza</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>20$</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f2} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>Delicious Burger</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$15</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center ">
                            <img className="img-fluid menu_imgs" src={f3} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>Delicious  Pizza</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>17$</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f4} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3> Delicious Pizza
                            </h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$15</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f5} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>French Fries</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$10</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f6} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>French Fries</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$15</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f7} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>Tasty Burger</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$12</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f8} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>Tasty Burger</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$14</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-3">
                    <div className="card rounded-5">
                        <div className="card-header d-flex justify-content-center">
                            <img className="img-fluid menu_imgs" src={f9} alt="" />
                        </div>
                        <div className="card-body bg-dark text-white">
                            <h3>Delicious Pasta</h3>
                            <p>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                            <div className="d-flex">
                                <p>$10</p>
                                <Link className="ms-auto"><i class="fa-solid fa-cart-shopping text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-2">
                        <Link className="px-5 btn btn-primary ms-5 rounded-5">View More</Link>
                    </div>
                </div>
            </div>

            {/* End Menu Section */}


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

export default Home;
