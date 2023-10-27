import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mern Ethnus ReactJs Tasks</h1>
      <table className='table_index'>
        <th>Task Name</th>
        <th>Github Repository Link</th>
        <th>Deployment Link</th>
        <tr>
          <td>Task 1 - paragraph word counter</td>
          <td><a href='https://github.com/PriyankaDandapat/paragraph_word_counter_Reactjs.git' target='_blank'>Repository Link-1</a></td>
          <td><a href='https://paragraph-word-counter-reactjs.vercel.app/' target='_blank'>Deployment Link-1</a></td>
        </tr>
        <tr>
          <td>Task 2 - Calculator</td>
          <td><a href='https://github.com/PriyankaDandapat/calculator_reactjs.git' target='_blank'>Repository Link-2</a></td>
          <td><a href='https://calculator-reactjs-ebon.vercel.app/' target='_blank'>Deployment Link-2</a></td>
        </tr>
        <tr>
          <td>Task 3 - Color Picker</td>
          <td><a href='https://github.com/PriyankaDandapat/color_picker_reactjs.git' target='_blank'>Repository Link-3</a></td>
          <td><a href='https://color-picker-reactjs-chi.vercel.app/' target='_blank'>Deployment Link-3</a></td>
        </tr>
        <tr>
          <td>Task 4 - Fetch data from dummyjson</td>
          <td><a href='https://github.com/PriyankaDandapat/fetch_data_reactjs.git' target='_blank'>Repository Link-4</a></td>
          <td><a href='https://fetch-data-reactjs.vercel.app/' target='_blank'>Deployment Link-4</a></td>
        </tr>
        <tr>
          <td>Task 5 - Age Calculator</td>
          <td><a href='https://github.com/PriyankaDandapat/age_calculator_reactjs.git' target='_blank'>Repository Link-5</a></td>
          <td><a href='https://age-calculator-reactjs-blush.vercel.app/' target='_blank'>Deployment Link-5</a></td>
        </tr>
        <tr>
          <td>Task 6 - Portfolio</td>
          <td><a href='https://github.com/PriyankaDandapat/dummy_portfolio_reactjs.git' target='_blank'>Repository Link-6</a></td>
          <td><a href='https://dummy-portfolio-reactjs.vercel.app/' target='_blank'>Deployment Link-6</a></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
