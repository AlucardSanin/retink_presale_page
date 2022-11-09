import React from 'react';

function Form() {
  return (
    <>
      <div id="Form">
        <h2>Sign Up For The BETA to see more</h2>
        <form className="Form">
          <input id="bussName" placeholder="Bussines Name" type="text" />
          <input id="emailAdd" placeholder="Email" type="text" />
          <button type="submit">Notify me</button>
        </form>
        <button type="button"><a rel="noreferrer" target="_blank" href="https://retink.io/fap/">Sign up as a freelance partner</a></button>
      </div>
    </>
  );
}

export default Form;
