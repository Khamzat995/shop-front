import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { Col, Container, Row } from 'react-bootstrap';
import icons_18 from '../assets/Icons/icons_18.png';
import icons_71 from '../assets/Icons/icons_71.png';
import icons_98 from '../assets/Icons/icons_98.png';
import icons_39 from '../assets/Icons/icons_39.png';
import payment from '../assets/Icons/payment.png';
import WhatsApp  from '../assets/Icons/WhatsApp.png';
import ok from '../assets/Icons/ok.png';
import Gmail from '../assets/Icons/Gmail.png';
import telegram from '../assets/Icons/telegram.png';
import Map from '../assets/Images/map.png';
import family from '../assets/Images/family.jpg';
import JumbotronOne from '../components/JumbotronOne';
const AboutPage = () => {
  return (
    <main>
      <PageHero title="о нас" />
      <Wrapper className="page section section-center">
        <img src={family} alt='картинка'/>
        <article>
          <div className="title">
            <h2>О нас</h2>
            <div className="underline"></div>
          </div>
          <p>
            Интернет-магазин — эксперт в области первоклассного сервиса и качества представляемых товаров, один из лидеров интернет-торговли бытовой продукцией.
            Мы выходим за рамки стандартного осуществления сделок купли-продажи и предлагаем большее – высокое качество жизни. Что это значит?
            Это когда товары, которые Вы покупаете, Вам подходят. Когда не надо тратить время на бесконечный выбор и переплачивать.
            Когда уверены в завтрашнем дне и стремитесь к новым высотам.
            Кроме того, мы понимаем важность грамотного использования технологий для сохранения окружающей среды и счастливого будущего.
          </p>
        </article>
      </Wrapper>
      <Container style={{paddingTop:"40px", marginBottom:"30px", width: "1200px", textContent:'centre' }} >
        <Row style={{ display:'flex', paddingLeft: "180px", justifyContent: 'space-between' }}>
          <Col md={6} style={{width: "600px"}}>
            <h2 style={{ marginBottom:"30px"}}>Контакты</h2>
            <div className="contacts" style={{width: "590px"}} >
              <span className='contacts_item' style={{ display: 'flex' }}>
                <img src={icons_18} height={20} alt='icons' style={{marginRight:'20px'}}/>
                <p>364016, Чеченская Республика, г. Грозный, ул. Изумрудная, 16</p>
              </span>
              <span className='contacts_item' style={{ display: 'flex' }}>
                <img src={icons_71} height={20} alt='icons' style={{marginRight:'20px'}}/>
                <p>zura.azersaeva@mail.ru</p>
              </span>
              <span className='contacts_item' style={{ display: 'flex' }}>
                <img src={icons_98} height={20} alt='icons' style={{marginRight:'20px'}}/>
                <p>+7 (938) 997-65‐19 - Магазин</p>
              </span>
              <span className='contacts_item' style={{ display: 'flex' }}>
                <img src={icons_39} height={20} alt='icons' style={{marginRight:'20px'}}/>
                <p>+7 (938) 997-65‐19 - Директор</p>
              </span>
            </div>
            <span className='contacts_item' style={{ display: 'flex', marginTop:'20px'}}>
                <img src={WhatsApp} height={40} alt='icons' style={{marginRight:'15px'}}/>
                <img src={ok} height={40} alt='icons' style={{marginRight:'15px'}}/>
                <img src={Gmail} height={40} alt='icons' style={{marginRight:'15px'}}/>
                <img src={telegram} height={40} alt='icons' style={{marginRight:'15px'}}/>
              </span>
            <img src={payment} alt='карточки' style={{marginTop:'20px'}} />
          </Col>
          <Col md={6} style={{marginLeft:'20px'}}>
            <a href="https://yandex.ru/maps/?um=constructor%3A8c298ba045f7d143f611572383b9cc72e8cf80ac2d9309b529ddd2d7f3efcaae&amp;source=constructorStatic" target="_blank" rel = "noreferrer">
              <img src={Map} style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} alt='map'/>
            </a>
          </Col>
        </Row>
      </Container>
      <JumbotronOne />
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
