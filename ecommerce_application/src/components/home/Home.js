import bannerimg1 from "../../assets/images/banner1.webp";
import bannerimg2 from "../../assets/images/banner2.webp";
import bannerimg3 from '../../assets/images/banner3.webp';
import bangle from '../../assets/images/bangle.jpg';
import jacket from '../../assets/images/jacket.jpg';
import tshirt from '../../assets/images/tshirt.jpg'
import bag from '../../assets/images/bag.jpg';
import san from '../../assets/images/san.jpg';
function Home() {
  return (
    <div>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bannerimg1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerimg2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bannerimg3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <div >
          
      </div>
    </div>
    <div className="row container mt-3 ml-5 mr-5 d-flex" style={{justifyContent:"space-around"}}>
     <div className="col-md-2 border" width="200">
      <div style={{width:'100%', height:200}}>
      <img src={bangle} height={200} className="object-fit-contain " alt="..." ></img>
      </div>
      <div className="text-center">
      <p>Bangles,Bracelets &...</p>
      <h4 className="text-success">Min. 30% Off</h4>
      </div>
     </div>
     <div className="col-md-2 border" width="200">
      <div style={{width:'100%', height:200}}>
      <img src={tshirt} height={200} className="object-fit-contain " alt="..." ></img>
      </div>
      <div className="text-center">
      <p>Men's clothing</p>
      <h4 className="text-success">Min. 40% Off</h4>
      </div>
     </div>
     <div className="col-md-2 border" width="180">
      <div style={{width:'100%', height:200}}>
      <img src={jacket} height={200} className="object-fit-contain " alt="..." ></img>
      </div>
      <div className="text-center">
      <p>Women's clothing</p>
      <h4 className="text-success">Min. 45% Off</h4>
      </div>
     </div>
     <div className="col-md-2 border  " width="200">
      <div style={{ height:200}} className="justify-content-center ">
      <img src={bag} height={200} className="object-fit-contain " alt="..." ></img>
      </div>
      <div className="text-center">
      <p>Bag</p>
      <h4 className="text-success">Min. 50% Off</h4>
      </div>
     </div>
     <div className="col-md-2 border  " width="200">
      <div style={{ height:200}} className="justify-content-center align-items-center">
      <img src={san} width={150} className="object-fit-contain mt-5" alt="..." ></img>
      </div>
      <div className="text-center">
      <p>SanDisk SSD PLUS 1TB </p>
      <h4 className="text-success">Upto 60% Off</h4>
      </div>
     </div>


    </div>
    </div>
  );
}

export default Home;
