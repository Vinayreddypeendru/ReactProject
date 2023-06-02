import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainparent from './parent';
import { Dataprovider } from './context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<Dataprovider><Mainparent /></Dataprovider>);