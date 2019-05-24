import React, { Fragment, Component, lazy, Suspense } from 'react';
import message from './defaultMessage';
//import MonacoEditor from 'react-monaco-editor';
import Preview from './../preview';
import styles from './monaco.module.css';

const MonacoEditor = lazy(() => import('react-monaco-editor'));

const overRideConsole = `
function log() {
  const args = Array.prototype.slice.call(arguments)
  console.log(...args)
}
`;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: message,
      value: undefined,
      error: false
    };
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  monacoRed = ref => (this.monacoRef = ref);

  compile = () => {
    const model = this.refs.monaco.editor.getModel();
    const value = model.getValue();
    console.log(value);
    //var theInstructions = "alert('Hello World'); var x = 100";

    try {
      const F = new Function(`
      
        ${overRideConsole}
        ${value}
      `);
      const output = F();
      console.log(output, 'This is the code');
      if (output) {
        this.setState({
          value: output,
          error: false
        });
      } else {
        this.setState({
          value: 'Did you forget a return statement',
          error: true
        });
      }
    } catch (error) {
      const { message } = error;
      this.setState({
        error: true,
        value: message
      });
    }

    //return();
  };
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      fontSize: 14
    };
    return (
      <Fragment>
        {/* <Preview value={this.state.value} /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.wrapper}>
            <div className={styles.monacoWrapper}>
              <div className={styles.buttonGroup}>
                <button
                  onClick={this.props.onToggle}
                  className={`${styles.runButton} ${styles.secondaryButton}`}
                >
                  Close
                </button>
                <button onClick={this.compile} className={styles.runButton}>
                  Run
                </button>
              </div>

              <MonacoEditor
                ref={'monaco'}
                height="500"
                language="javascript"
                theme="vs-light"
                defaultValue={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
              />
            </div>
            <div className={styles.previewWrapper}>
              <Preview value={this.state.value} error={this.state.error} />
            </div>
          </div>
        </Suspense>
      </Fragment>
    );
  }
}

export default Editor;
