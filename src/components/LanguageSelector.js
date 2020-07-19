import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext; // hooking up the context with `value`
  
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag kr"
          onClick={() => this.context.onLanguageChange('korean')}
        />
      </div>
    );
  }
}

export default LanguageSelector;