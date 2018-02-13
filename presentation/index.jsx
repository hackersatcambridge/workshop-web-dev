const component = debut.createComponentFromReact(
  <div className="FullSlide">
    <debut.SyntaxHighlight language="js">
      {debut.SyntaxHighlight.format(f => [
        f`"use strict";`,
      ])}
    </debut.SyntaxHighlight>
  </div>
)

const actions = debut.actionsForComponent(component, action => []);

ReactDOM.render(<debut.Presentation actions={actions} root={component} size={{ width: 1600, height: 900 }} />, document.getElementById('root'));
