import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  static contextType /* derived special name */ = LanguageContext;

  renderSubmit = language => language === 'english' ? 'Submit' : '확인';

  renderButton = color => (
    <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
        {({ language }) => this.renderSubmit(language)}
      </LanguageContext.Consumer>
    </button>
  );

  render() {
    // const text = this.context === 'english' ? 'Submit' : '확인';
    
    return (
      <ColorContext.Consumer>
        {this.renderButton}
      </ColorContext.Consumer>
    );
  }
}
// `Button.contextType = something` // alternative way to hook up contextType

export default Button;