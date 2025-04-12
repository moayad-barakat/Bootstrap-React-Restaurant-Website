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
        </div>
    )
}

export default Home;
