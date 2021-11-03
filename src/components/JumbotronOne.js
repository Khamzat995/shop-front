import React from 'react';
import { Container } from 'react-bootstrap';
import { Jumbotron as Jumbo } from 'reactstrap';
import styled from 'styled-components';
import Grozny from '../assets/Images/Grozny.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${Grozny})no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 510px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const JumbotronOne = () => {
  return (
    <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay'> </div>
      <Container fluid style={{
        paddingTop: "80px",
        paddingLeft: "120px",
        paddingRight: "120px",
      }}>
        <h2>ВАЙТУЬКА</h2>
        <div style={{'width': '850px'}}>
          Интернет-магазин — эксперт в области первоклассного сервиса и качества представляемых товаров, один из лидеров интернет-торговли бытовой продукцией.
          Мы выходим за рамки стандартного осуществления сделок купли-продажи и предлагаем большее – высокое качество жизни. Что это значит?
          Это когда товары, которые Вы покупаете, Вам подходят. Когда не надо тратить время на бесконечный выбор и переплачивать.
          Когда уверены в завтрашнем дне и стремитесь к новым высотам.
          Кроме того, мы понимаем важность грамотного использования технологий для сохранения окружающей среды и счастливого будущего.
        </div>
      </Container>
    </Jumbo>
    </Styles>
  );
}

export default JumbotronOne;
