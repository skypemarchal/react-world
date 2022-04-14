import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { UserContext } from '../AppContext';
import PropTypes from 'prop-types'
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { addExpense } from '../redux/actions/expenses.actions';

const Login = ({expenses, onAddExpense}) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [pseudo, setPseudo] = useState("bobo");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState("");


    async function loginUser(credentials) 
    {
        return fetch('http://localhost:8000/api/login', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
    }

    const handleSubmit = () => {
      //e.preventDefault();
      /* const token = await loginUser({
        email,
        password
      });
      setToken(token); */
      /* onAddExpense({
        pseudo: pseudo,
        email: email,
        password: password
      })

      console.log(expenses); */
      if(password === "") setErrorPassword("kkf");
    }

    return (
      <>
        <Navigation />
        <Logo />
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col">

              <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                  <a href="#m" className="bg-black text-white font-bold text-xl p-4">Logo</a>
              </div>

              <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                  <p className="text-center text-3xl">Welcome.</p>
                  <form className="flex flex-col pt-3 md:pt-8">
                      <div className="flex flex-col pt-4">
                          <label for="email" className="text-lg">Email</label>
                          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} 
                          placeholder="your@email.com" 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                      </div>
      
                      <div className="flex flex-col pt-4">
                          <label for="password" className="text-lg">Password</label>
                          <input type="password" id="password" onChange={(e) =>  { setPassword(e.target.value); setErrorPassword(""); }} 
                            placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" 
                          />
                      </div>

                      {errorPassword && <span style={{color: 'red'}}>{errorPassword}</span>}
                      
                      <input type="button" onClick={handleSubmit} value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                  
                  </form>
                  <div className="text-center pt-12 pb-12">
                      <p>Don't have an account? <a href="register.html" className="underline font-semibold">Register here.</a></p>
                  </div>
              </div>

          </div>

          <div className="w-1/2 shadow-2xl">
              <img className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/IXUM4cJynP0" />
          </div>
      </div>
      </>
      
      /* <div className='news-container'>
          <form onSubmit={(e) => handleSubmit(e)}>
              <input required type="text" placeholder='pseudo' onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
              <input required type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} />
              <input type="password" name="" id="password" placeholder='*****'  onChange={(e) =>  {
                  setPassword(e.target.value);
                  setErrorPassword("");
              }} />

              {errorPassword && <span style={{color: 'red'}}>{errorPassword}</span> }
              <input type="submit" value="Envoyer" />
          </form>
      </div> */

      
    );
};

const mapStateToProps = state => {
  return {
    expenses : state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddExpense: expense => {
      dispatch(addExpense(expense))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);