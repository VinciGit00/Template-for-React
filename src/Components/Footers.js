import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom">
        <FooterContainer className="main-footer">
          <div className="footer-middle">
            <div className="container">
              <div className="row">
                {/*Column 1*/}
                <div className="col-md-3 col-sm-6">
                  <h4>Titolo</h4>
                  <ul className="list-unstyled">
                    <li>Lorem, ipsum</li>
                    <li>Lorem, ipsum</li>
                    <li>Lorem, ipsum</li>
                    <li>Lorem, ipsum</li>
                  </ul>
                </div>
                {/*Column 2*/}
                <div className="col-md-3 col-sm-6">
                  <h4>Titolo</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                  </ul>
                </div>
                {/*Column 3*/}
                <div className="col-md-3 col-sm-6">
                  <h4>Titolo</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                  </ul>
                </div>
                {/*Column 4*/}
                <div className="col-md-3 col-sm-6">
                  <h4>Titolo</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>{" "}
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>{" "}
                    <li>
                      <a href="/">Lorem, ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/**Footer bottom*/}
              <div className="footer-bottom">
                <p className="text-xs-center">
                  &copy;{new Date().getFullYear()} Made by Marco Vinciguerra
                </p>
              </div>
            </div>
          </div>
        </FooterContainer>
      </div>
    );
  }
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 0.5rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 0.5rem;
    padding-bottom: 0.1rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLigtGrey);
  }
`;
