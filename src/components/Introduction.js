import React from 'react';
import avatar from './RetinkAvatar.svg';

function Intro() {  
  return (
    <>
      <div id="headline">
        <h1>Get Advanced AI + Expert Created</h1>
       <p>
          Boost your sales 10x faster with content customized by our
          unique partnership of human creativity and AI optimization
        </p>
      </div>     
      <div>
        <img src={avatar} className="retinkPet" alt="logo" />
      </div>
      <h2 id="h2head">Sign up for the BETA!</h2>
      <form className="Form1">
        <input id="bussName" placeholder="Bussines Name" type="text" />
        {' '}
        would like a beta invite sent to
        <input id="emailAdd" placeholder="@email address" type="text" />
        {' '}
        when it`s ready!
      </form>
      <div id='buttons'>
        <button type="submit">Notify me</button>
        <a rel="noreferrer" target="_blank" href="https://retink.io/fap/"><button type="button" id="a1">Sign up as a freelance partner</button></a>
      </div>
    </>
  );
}

export default Intro;
