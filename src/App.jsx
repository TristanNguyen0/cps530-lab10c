import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CopyBlock, dracula } from 'react-code-blocks';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const codeBlockText = `//in App.jsx, import the code block:
import { CopyBlock, dracula } from 'react-code-blocks';
//Basic usage: (this current code block is used in this way)
<CopyBlock text={codeBlockText} language="jsx" theme={dracula} className="copy-block" showLineNumbers="true"></CopyBlock>`
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo"/>
      <h1>Installation of the React 'framework':</h1> 
      <p>
        Installing the react framework requires Node and npm. This 
        <a href="https://www.theodinproject.com/lessons/foundations-installing-node-js"> source from theodinproject </a> 
        is very helpful. 
      </p>
      <h1>Commands needed for the full React installation:</h1> 
      <div className="commands">
        <h3>Installing nvm (Node Version Manager):</h3>
        <CopyBlock text="sudo apt install curl" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3></h3>
        <CopyBlock text="sudo apt update && sudo apt upgrade" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3></h3>
        <CopyBlock text="curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3></h3>
        <CopyBlock text="export NVM_DIR=&quot;$([ -z &quot;${XDG_CONFIG_HOME-}&quot; ] && printf %s &quot;${HOME}/.nvm&quot; || printf %s &quot;${XDG_CONFIG_HOME}/nvm&quot;)&quot;
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] && \. &quot;$NVM_DIR/nvm.sh&quot; # This loads nvm" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3>Installing Node:</h3>
        <CopyBlock text="nvm install --lts" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3></h3>
        <CopyBlock text="nvm use --lts" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3>Creating a React App with Vite:</h3>
        <CopyBlock text="npm create vite@latest my-first-react-app -- --template react" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3></h3>
        <CopyBlock text="cd my-first-react-app" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <CopyBlock text="npm install" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <CopyBlock text="npm run dev" language="sh" theme={dracula} className="copy-block"></CopyBlock>
      </div>

      <h1>Difficulties Encountered:</h1>
      <p>
        I encountered some difficulty when creating my react app with Vite.
        The npm install was taking too long and would not complete,
        so after reinstalling Node and nvm to a more up to date version,
        npm install was able to complete in a reasonable timeframe.
      </p>

      <h1>Building the page:</h1>
      <p>
        The code blocks included on this page were
        modules retrieved from <a href="https://www.npmjs.com/package/react-code-blocks#supported-languages">npm</a>.
        This is one of the advantages of using React. Below you can find the basic usage of a code block.
      </p>
      
      <div className="commands">
        <h3>First, install the module into the react app:</h3>
        <CopyBlock text="npm i react-code-blocks" language="sh" theme={dracula} className="copy-block"></CopyBlock>
        <h3>Basic usage in App.jsx:</h3>
        <CopyBlock text={codeBlockText} language="jsx" theme={dracula} className="copy-block" showLineNumbers="true"></CopyBlock>
      </div>
    </>
  )
}

export default App
