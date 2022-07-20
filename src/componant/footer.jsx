
import React from 'react';

export default function Footer() {
  return (
    <div className='text-center text-lg-start text-muted bg-dark'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/' className='me-4 text-reset'>
            <i className='fa fa-facebook-f'></i>
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='https://www.google.com/' className='me-4 text-reset'>
            <i className='fa fa-google'></i>
          </a>
          <a href='https://www.instagram.com/' className='me-4 text-reset'>
            <i className='fa fa-instagram'></i>
          </a>
          <a href='https://www.linkedin.com/feed/' className='me-4 text-reset'>
            <i className='fa fa-linkedin'></i>
          </a>
          <a href='https://github.com/PROFabdalla' className='me-4 text-reset'>
            <i className='fa fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i></i>Information Technology Institute ' iti '
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, at numquam! Reiciendis nesciunt debitis dicta veniam culpa consequatur odio molestias recusandae consequuntur iure. A perferendis odit unde veniam eveniet esse.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <p className='text-reset'>
                  men's wear
                </p>
              </p>
              <p>
                <p className='text-reset'>
                    women's wear
                </p>
              </p>
              <p>
                <p className='text-reset'>
                  jewelery
                </p>
              </p>
              <p>
                <p className='text-reset'>
                  electronics
                </p>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='https://www.linkedin.com/feed/' className='text-reset'>
                  linked in
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/' className='text-reset'>
                  facebook
                </a>
              </p>
              <p>
                <a href='https://www.google.com/' className='text-reset'>
                  teweter
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fa fa-home me-3'></i> Egypt, MNF , EG
              </p>
              <p>
                <i className='fa fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fa fa-phone me-3'></i> + 011 433 06 714
              </p>
              <p>
                <i className='fa fa-print me-3'></i> + 011 433 06 714
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href=''>
        Information Technology Institute ' ITI '
        </a>
      </div>
    </div>
  );
}
