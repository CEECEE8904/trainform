import { fetchAllTrains, postTrain } from './services/train';
import React from 'react';
import './App.css';
import NewTrainForm from './components/NewTrainForm';
import TrainList from './components/TrainList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trains: [],
      name: '',
      train_type: '',
      km_traveled: '',
    }
  }

  async componentDidMount() {
    const data = await fetchAllTrains();
    this.setState({
      trains: data
    })
    console.log(this.state.trains)
  }


  handleSubmit = async (e) => {
    e.PreventDefault();
    const newTrain = await postTrain({
      name: this.state.name,
      train_type: this.state.train_type,
      km_traveled: this.state.km_traveled
    })
    this.setState((prevState) => ({
      trains: [...prevState.trains, newTrain]
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TrainApp</h1>
        <NewTrainForm handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        <TrainList trains={this.state.trains} />
      </div>
    );
  }
}


export default App;
