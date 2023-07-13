import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyMap from './MyMap';


const Wrapper = styled.section`
border-radius: 16px;
display:flex;
align-items:center
padding:100px;
height: 200px
margin-right: 20px;
margin-left:20px;
margin-top:50px;
background: papayawhip;
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Wrapper>
    <MyMap/>
   </Wrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
