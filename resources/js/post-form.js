import Form from './comps/form';
import React from 'react';
import ReactDOM from 'react-dom';

const postType = typeof type !== 'undefined' ? type : 'slide';

if (document.getElementById('post-form')) {
    ReactDOM.render(<Form postType={postType} />, document.getElementById('post-form'));
}