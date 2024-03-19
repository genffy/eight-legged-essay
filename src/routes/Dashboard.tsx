import { EditorProvider } from '../components/EditorProvider';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import EditorContainer from '../components/EditorContainer';

function App() {
  return (
    <EditorProvider mode="edgeless">
      <div className="app">
        <Sidebar />
        <TopBar />
        <div className="main-content">
          <EditorContainer />
        </div>
      </div>
    </EditorProvider>
  );
}

export default App;
