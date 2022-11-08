import React from "react";

function Form() {
  return(
    <>
    <h2>Sign Up For The BETA to see more</h2>
    <form>
      <input id='bussName' placeholder='Bussines Name' type='text' />
      <input id='emailAdd' placeholder='Email' type='text' />
      <button type="submit">Notify me</button>
    </form>
    <a rel="noreferrer" target="_blank" href="https://retink.io/fap/"><button type="button">Sign up as a freelance partner</button></a>
    </>    
  );
}

export default Form;
