import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import TodoItemChange from './components/TodoItemChange';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
