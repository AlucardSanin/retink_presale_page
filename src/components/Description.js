import React from 'react';
import video from './VideoExplainer.svg';
import rect1 from './rect1.svg';
import rect2 from './rect2.svg';
import rect3 from './rect3.svg';
import rect4 from './rect4.svg';

function Desc() {
  return (
    <>
      <div id="vid">
        <img src={video} alt="Video Explainer" />
      </div>
      <div id="services">
        <div id="rectangle1" className="service">
          <figure>
            <img src={rect1} alt="Artificial Inteligence" />
            <figcaption>MakeAI-assisted  Content Choices</figcaption>
          </figure>
          <p>
            Access and Order from an extensive catalogue in any language and on
            your budget`s terms. If unsure, our AI guides you to the best.
          </p>
        </div>
        <div id="rectangle2" className="service">
          <figure>
            <img src={rect2} alt="Group" />
            <figcaption>Upload and Maintain your Brand Identity</figcaption>
          </figure>
          <p>
            Add your preferences and brand assets to ensure the contents is consistent
            with your brand identity. No brand asset? We can make for you!
          </p>
        </div>
        <div id="rectangle3" className="service">
          <figure>
            <img src={rect3} alt="Get informed" />
            <figcaption>Be informed as we create</figcaption>
          </figure>
          <p>
            Your details are translated and sent to the AI, FP, or both (per your choice) as
            you relax and receive continuous updates.
          </p>
        </div>
        <div id="rectangle4" className="service">
          <figure>
            <img src={rect4} alt="Comunication exchange" />
            <figcaption>Receive and Review</figcaption>
          </figure>
          <p>
            The finished content is delivered and you can make corrections that we will effect
            to satisfy your requirements.
          </p>
        </div>
        <div id="rectangle5" className="service">
          <figure>
            <img src={rect4} alt="Comunication exchange" />
            <figcaption>Publish and Monitor your content`s progress</figcaption>
          </figure>
          <p>
            The finished content is delivered and you can make corrections that we will effect
            to satisfy your requirements.
          </p>
        </div>
      </div>
    </>
  );
}

export default Desc;
