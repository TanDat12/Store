import React, {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col} from "reactstrap";
import heroImg from '../assets/images/hero-img.png';
import "../styles/home.css";
//import "../styles/productCard.css"
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';
import counterImg from '../assets/images/counter-timer-img.png';
import Clock from '../components/UI/Clock';


const Home = () => {
  const [bestSeller, setbestSeller] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
 

  useEffect(()=>{
    const filteredBestseller = products.filter(
      (item) => item.seller==="1"
    );
    const filteredTrendingProducts = products.filter(
      (item) => item.category==="chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item) => item.category==="sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category==="mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category==="wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category==="watch"
    );

    setbestSeller(filteredBestseller);
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  },[]);

  const year = new Date().getFullYear();

  return <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Sản phẩm mới trong năm {year}</p>
                <h3>Iphone 16</h3>
                <h2>TO VÀ TO HƠN NỮA.</h2>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt=""/>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <Services/>

      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className='clock__top-content'>
                <h3 className='fs-5 mb-3'>iPhone</h3>
                <h2>Năng lượng nhiều hơn.</h2>
                <h2>Giá trị nhiều hơn.</h2>
              </div>
              <Clock/>
            </Col>

            <Col lg='6' md='6' className='text-end counter__img'>
            <iframe width="1220" height="686" src="https://www.youtube.com/embed/RHPdH3yP-Eg" title="Giới thiệu iPhone 16 | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      < section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Seller</h2>
            </Col>
            <ProductsList data={bestSeller}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="section__title">iPhone </h2>
            </Col>
            <ProductsList data={mobileProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="section__title">iPad</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="section__title">MacBook</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="section__title">Tai nghe</h2>
            </Col>
            <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="section__title">Đồng hồ</h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>

    </Helmet>
};

export default Home
//Done part1 - còn bug