import React from 'react';
// export default React.createContext('english');

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  // business logic
  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;