import React, { Fragment, Component, lazy, Suspense } from 'react';
//import MonacoEditor from 'react-monaco-editor';
//import Preview from './preview';

const MonacoEditor = lazy(() => import('react-monaco-editor'));

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
      value: undefined
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
      const F = new Function(value);
      const output = F();
      console.log(output, 'This is the code');
      this.setState({
        value: output
      });
    } catch (error) {
      console.log(error.message);
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
        <button onClick={this.compile}>Run</button>
        {/* <Preview value={this.state.value} /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <MonacoEditor
            ref={'monaco'}
            width="800"
            height="600"
            language="javascript"
            theme="vs-light"
            defaultValue={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </Suspense>
      </Fragment>
    );
  }
}

export default Editor;
