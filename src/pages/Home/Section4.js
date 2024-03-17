import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              Nothing brings people together quite like the classic appeal of a good burger. we understand the power of this timeless favorite to unite friends, family, and colleagues around the table. 
              </p>
              <ul>
                <li>
                  <p>
                  Whether you're sharing a meal with loved ones or enjoying a quick bite with coworkers, our selection of mouthwatering burgers is sure to satisfy every craving and create lasting memories.
                  </p>
                </li>
                <li>
                  <p> With each juicy bite, savor the joy of shared moments and the delicious simplicity of a perfectly crafted burger.</p>
                </li>
                <li>
                  <p>
                  Order now and bring the joy of togetherness to your next mealtime gathering
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;