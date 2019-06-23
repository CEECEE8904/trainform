import React from 'react';

class TrainList extends React.Component {
  render() {
    return (
      <div>
        {this.props.trains.map((train) => (
          <div key={train.id}>
            <h3>{train.name}</h3>
            <p>type: {train.train_type}</p>
            <p>kilometers: {train.km_traveled}</p>
          </div>
        ))}
      </div>
    )
  };
}

export default TrainList;