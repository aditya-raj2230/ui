import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
  return (
    <button className={classNames('button', props.className)}>
      {props.children}
    </button>
  );
}
