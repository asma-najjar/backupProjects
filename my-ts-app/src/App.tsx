import React, { ChangeEvent, useEffect, useState, useCallback, useMemo, useRef } from 'react';
import './App.css';
import Button from "./ Button"
import MyInputs from "./MyInputs";
import HookCounter from './HookCounter';
import UseEffectTest from './useEffectTesst';
import HookCounterObject from './HookCounterObject';
import useContextHook from './useContextHook';

function App() {
  let x= "Welcome To Our Website ";
  const [myInputValue, setMyInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState("");

  const [count, setCount] = useState(0)
  const [Name, setName] = useState({firstName:'' , lastName:''})

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("default useEffect")
  }, [])

  useEffect(() => {
    console.log("password useEffect")
  }, [password])
  
  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMyInputValue(event.target.value);
  }, []);

  const handlePasswordInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    let check = myInputValue === "asma" ;
    console.log(check, myInputValue)
    setLoginResult(check ? "Login Successful" : "Try Again");
    setCount(count + 1);
  }, [myInputValue, count]);

  const welcomeMessage = useMemo(() => {
    let i =0
    while(i<20000000) i++
    return x + myInputValue;
  }, [x, myInputValue]);
    
  return (
    <div className="App">

      <div className="Header" style={{ color: 'rgb(1, 2, 2)' }}>
        {welcomeMessage}
      </div>

      <div className="container">

      <NewApp /> 

      <MyInputs 
          type="text"
          name={"inputName"}
          placeholder="Enter Username"
          label="Username"
          handleInputChange={handleInputChange}
        />

        <MyInputs 
          type="password"
          name="inputpas"
          placeholder="Enter Password"
          label="Password"
          handleInputChange={handlePasswordInputChange}
        />

      <Button
        title='Login'
        onPress={handleLogin}
        count={count}
      /> 
      <HookCounter/>
      <div>{loginResult}</div> 


      </div>

      <div className="classObjects">
      <ReturnHookCounterObject/>
      </div>

      <div>
        <UseEffectTest/>
      </div>
    </div>

  );

}

function NewApp(){
  return(
    <h2>Login Form</h2>
  );
}

function ReturnHookCounterObject(){
  return(
    <div> <HookCounterObject/> </div>
  )
}

export default App;
