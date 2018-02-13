"use strict";

var _templateObject = _taggedTemplateLiteral(["\"use strict\";"], ["\"use strict\";"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var component = debut.createComponentFromReact(React.createElement(
  "div",
  { className: "FullSlide" },
  React.createElement(
    debut.SyntaxHighlight,
    { language: "js" },
    debut.SyntaxHighlight.format(function (f) {
      return [f(_templateObject)];
    })
  )
));

var actions = debut.actionsForComponent(component, function (action) {
  return [];
});

ReactDOM.render(React.createElement(debut.Presentation, { actions: actions, root: component, size: { width: 1600, height: 900 } }), document.getElementById('root'));

