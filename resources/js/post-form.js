import Form from './comps/form';
import React from 'react';
import ReactDOM from 'react-dom';

if (document.getElementById('post-form')) {
    ReactDOM.render(<Form message="Helloo, Bro" />, document.getElementById('post-form'));
}