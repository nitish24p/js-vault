import React, { Component, Fragment } from 'react';
import styles from './editor.module.css';
import Monaco from './../monaco';

class Editor extends Component {
  state = {
    showEditor: false
  };

  toggleEditor = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      this.setState(({ showEditor }) => ({ showEditor: !showEditor }));
    } else {
      alert('Available in desktop mode only');
    }
  };

  render() {
    const { showEditor } = this.state;
    return (
      <Fragment>
        <div
          className={`${styles.editorParent} ${
            showEditor ? styles.slideIn : ''
          }`}
        >
          {showEditor ? <Monaco onToggle={this.toggleEditor} /> : null}
        </div>
        <button
          aria-label="try out"
          onClick={this.toggleEditor}
          className={styles.button}
        >
          {!showEditor ? 'Give it a try!!' : 'Hide'}
        </button>
      </Fragment>
    );
  }
}

export default Editor;
