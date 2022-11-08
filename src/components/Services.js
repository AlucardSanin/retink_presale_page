import React from 'react';
import serv1 from './serv1.svg';
import serv2 from './serv2.jpg';
import serv3 from './serv3.jpg';
import serv4 from './serv4.jpg';
import serv5 from './serv5.jpg';
import serv6 from './serv6.jpg';

function Services() {
  return (
    <>
      <div id="newsContainer">
        <div id="p1">
          <h2>Transfrom your Creation Process</h2>
          <p>
            With a new approach toordering content, you can now stop jugglin multiple
            documents and meetings and start publishing content faster and on demad
          </p>
        </div>
        <div id="p2">
          <h2>Activate your bussiness growth with RetinkContent.</h2>
          <p>
            Save time and maintain your brand identity within your budget range or sign
            up for affordable plans and still access multiple content services like:
          </p>
        </div>
      </div>
      <div id="servicesContainer">
        <div id="serv1">
          <figure>
            <img src={serv1} alt="Logos" />
            <figcaption>Logos</figcaption>
          </figure>
          <p>
            {' '}
            Have a unique & creative logo designed to express and represent
            your brand identity.
          </p>
        </div>
        <div id="serv2">
          <figure>
            <img src={serv2} alt="Notebook and glasses" />
            <figcaption>Blog Writing</figcaption>
          </figure>
          <p>
            {' '}
            Write SEO enriched blog posts as long or short articles on any
            topic of your choice.
          </p>
        </div>
        <div id="serv3">
          <figure>
            <img src={serv3} alt="Notebook Rendering" />
            <figcaption>Animated Videos</figcaption>
          </figure>
          <p>Bring animated characters to life to keep your viewers engaged and  entertained.</p>
        </div>
        <div id="serv4">
          <figure>
            <img src={serv4} alt="Camera Lens" />
            <figcaption>Product Demo</figcaption>
          </figure>
          <p>Introduce your product to potential customers in a clear and creative video.</p>
        </div>
        <div id="serv5">
          <figure>
            <img src={serv5} alt="Write Machine" />
            <figcaption>Copywriting</figcaption>
          </figure>
          <p>
            Have creative and compelling copies written to boost your product,
            brand, service or company.
          </p>
        </div>
        <div id="serv6">
          <figure>
            <img src={serv6} alt="Phone" />
            <figcaption>Social Media Ads</figcaption>
          </figure>
          <p>Boost sales and awareness with tailor made ads from experts.</p>
        </div>
      </div>
    </>
  );
}

export default Services;
