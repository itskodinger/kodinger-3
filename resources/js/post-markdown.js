import FormMarkdown from './comps/form-markdown';
import React from 'react';
import ReactDOM from 'react-dom';

if (document.getElementById('post-markdown')) {
    ReactDOM.render(<FormMarkdown />, document.getElementById('post-markdown'));
}