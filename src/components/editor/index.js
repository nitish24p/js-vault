import React, { Component, Fragment, lazy, Suspense } from 'react';
import styles from './editor.module.css';
//import Monaco from './../monaco';

const Monaco = lazy(() => import('./../monaco'));

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
          {showEditor ? (
            <Suspense fallback={<div>Loading...</div>}>
              <Monaco onToggle={this.toggleEditor} />
            </Suspense>
          ) : null}
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
