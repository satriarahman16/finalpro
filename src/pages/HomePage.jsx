import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/hero.png'
import {kelasTerbaru} from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-4">Belajar <br /> <span>Bahasa Arab</span> <br />lebih fleksibel</h1>
            <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsam!</p>
            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Pilih Kelas</button>
            <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">Tanya Kami</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-img" />
          </Col>
        </Row>
      </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-blod">Ahlan Wa Sahlan</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas)=>{
              return <Col key={kelas.id}>
                  <img src={kelas.image} alt="" className="mb-5 rounded-top"/>
                  <div className="star mb-2">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5>{kelas.title}</h5>
                 </Col>
              })}
           
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage