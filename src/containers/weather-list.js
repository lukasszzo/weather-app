import React,{Component} from 'react';
import {connect} from "react-redux";
import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData) {
    const temps=cityData.list.map(weather=>weather.main.temp);
    const pressures=cityData.list.map(weather=>weather.main.pressure);
    const humidities=cityData.list.map(weather=>weather.main.humidity);
    const wind=cityData.list.map(weather=>weather.wind.speed)
    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart data={temps} color='red' units='℃'/>
        </td>
        <td>
          <Chart data={pressures} color='green' units='hPa'/>
        </td>
        <td>
          <Chart data={humidities} color='blue' units='%'/>
        </td>
        <td>
          <Chart data={wind} color='black'units='m/s'/>
        </td>
      </tr>
    );
  }
  render(){
    return(
      <table className='table table-hover'>
      <thead>
        <tr>
            <th>City</th>
            <th>Temperature (℃)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
            <th>Wind speed (m/s)</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather}
}

export default connect(mapStateToProps)(WeatherList);
