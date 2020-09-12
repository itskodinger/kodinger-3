import Form from './comps/form-discover';
import React from 'react';
import ReactDOM from 'react-dom';

const postType = typeof type !== 'undefined' ? type : 'slide';

if (document.getElementById('post-discover')) {
    ReactDOM.render(<Form postType={postType} />, document.getElementById('post-discover'));
}