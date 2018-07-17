import React from 'react';
const {Provider, Consumer} = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.setAge = (value) => {
      this.setState((state) => {
        return {
          age: value
        }
      })
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      age: 23,
      setAge: this.setAge,
    };
  }

  render() {
    // The entire state is passed to the provider
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export const AppContextConsumer = Consumer

