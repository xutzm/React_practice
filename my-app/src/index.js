import { rerenderAll } from './Rerender';
import reportWebVitals from './reportWebVitals';
import State from './components/Redux/State';


rerenderAll(State);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
