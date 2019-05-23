import React, { Component, Fragment } from 'react';
import styles from './editorbutton.module.css';
import Editor from './../editor';

class CodeEditorWithPreview extends Component {
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
          {showEditor ? <Editor /> : null}
          Code editor will come here
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

export default CodeEditorWithPreview;
