import React, { Component } from "react";
import items from "../data/tours.json";

const TourContext = React.createContext();

class TourProvider extends Component {
  state = {
    tours: [],
  };

  componentDidMount() {
    let tours = this.formatData(items);
    this.setState({ tours });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let tour = { ...item };
      return tour;
    });
    return tempItems;
  }

  getTour = (_id) => {
    // all tours
    let tempTours = [...this.state.tours];
    // particular tour
    const tour = tempTours.find((tour) => tour._id === _id);
    return tour;
  };

  render() {
    return (
      <TourContext.Provider
        value={{
          ...this.state,
          getTour: this.getTour,
        }}
      >
        {this.props.children}
      </TourContext.Provider>
    );
  }
}
const TourConsumer = TourContext.Consumer;

export { TourProvider, TourConsumer, TourContext };

export function withTourConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <TourConsumer>
        {(value) => <Component {...props} context={value} />}
      </TourConsumer>
    );
  };
}
