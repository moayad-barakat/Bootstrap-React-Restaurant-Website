import { Link } from "react-router-dom";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
function Menu (){

    return (
      <div className="container-fluid">
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

export default Menu;