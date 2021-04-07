import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api/index';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData});
  }

  handleCountryChange = async (country) => {
    // return 'a';
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render(){
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src="https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png"  alt='covid-19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={ this.handleCountryChange }/>
        <Chart data={ data } countyr={ country }/>
      </div>
    );
  }
}

export default App;
