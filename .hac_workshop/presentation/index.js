'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function WorkshopContents(_ref) {
  var index = _ref.index;

  var sections = [{
    name: '1. Thinking of the Web',
    subsections: ['Purposes of the Web', 'Designing a Website']
  }, {
    name: '2. HTML: Displaying Information',
    subsections: ['Setting up a Website Project', 'Getting Content on the Screen with Basic HTML', 'Advanced HTML tags']
  }, {
    name: '3. CSS: Adding Style',
    subsections: ['Changing the Look of Elements', 'Colours and Fonts', 'Laying out Elements on the Page', 'Responding to User Input', 'Behaving Well on Mobile']
  }, {
    name: '4. JavaScript: Make it Interactive',
    subsections: ['Performing Arbitrary "Instructions"', 'Changing the Page Dynamically', 'Using Events make it Interactive']
  }, {
    name: '5. Publishing your Website',
    subsections: []
  }];

  return _jsx('div', {
    className: 'FullSlide WorkshopContents',
    children: sections.map(function (_ref2, sectionIndex) {
      var name = _ref2.name,
          subsections = _ref2.subsections;
      return _jsx('div', {
        className: 'WorkshopContents__content ' + (sectionIndex === index ? 'WorkshopContents__content--active' : '')
      }, void 0, _jsx('div', {
        className: 'WorkshopContents__contentInner'
      }, void 0, _jsx('div', {
        className: 'WorkshopContents__contentHeading'
      }, void 0, name), _jsx('div', {
        className: 'WorkshopContents__detailedContent',
        children: subsections.map(function (text) {
          return _jsx('div', {}, void 0, text);
        })
      })));
    })
  });
}

WorkshopContents.setIndex = function (index) {
  return function (state) {
    return Object.assign({}, state, { index: index });
  };
};

var _ref4 = _jsx('h1', {}, void 0, 'Task');

function TaskSlide(_ref3) {
  var children = _ref3.children;

  return _jsx('div', {
    className: 'TaskSlide'
  }, void 0, _jsx(HeaderedSlide, {
    header: _ref4
  }, void 0, _jsx('div', {
    className: 'TaskSlide__contents',
    children: children
  })));
}

var _ref6 = _jsx('div', {
  className: 'PopOver__arrow'
});

function PopOver(_ref5) {
  var children = _ref5.children,
      label = _ref5.label,
      side = _ref5.side,
      active = _ref5.active;

  return _jsx('span', {
    className: 'PopOver PopOver--' + side + ' ' + (active ? 'PopOver--active' : '')
  }, void 0, children, _jsx('div', {
    className: 'PopOver__popOver'
  }, void 0, _ref6, label));
}

PopOver.show = function () {
  return function (state) {
    return Object.assign({}, state, { active: true });
  };
};

function InlineBlock(_ref7) {
  var showBlock = _ref7.showBlock,
      showInline = _ref7.showInline;

  function wordsToInlines(words) {
    return words.split(' ').map(function (word, index) {
      return _jsx('div', {
        className: 'InlineBlock__inline'
      }, index, word);
    });
  }

  return _jsx('div', {
    className: 'InlineBlock ' + (showBlock ? 'InlineBlock--showBlock' : '') + ' ' + (showInline ? 'InlineBlock--showInline' : '')
  }, void 0, _jsx('div', {
    className: 'InlineBlock__block'
  }, void 0, wordsToInlines('Lorem ipsum dolor sit amet, sonet audiam theophrastus ex vim, mea ei enim liberavisse interpretaris.')), _jsx('div', {
    className: 'InlineBlock__block'
  }, void 0, wordsToInlines('Vel ei ferri praesent. Per id exerci civibus, no commodo numquam ocurreret vim. Ex vim possim everti, mel insolens laboramus ex, mei verear integre eu.')));
}

InlineBlock.showBlock = function () {
  return function (state) {
    return Object.assign({}, state, { showBlock: true });
  };
};
InlineBlock.showInline = function () {
  return function (state) {
    return Object.assign({}, state, { showInline: true });
  };
};

var _ref9 = _jsx('div', {
  className: 'BoxModel__box'
}, void 0, 'Content');

var _ref10 = _jsx('div', {
  className: 'BoxModel__box'
}, void 0, 'Content');

function BoxModel(_ref8) {
  var showContent = _ref8.showContent,
      showPadding = _ref8.showPadding,
      showBorder = _ref8.showBorder,
      showMargin = _ref8.showMargin;

  return _jsx('div', {
    className: 'BoxModel ' + (showContent ? 'BoxModel--showContent' : '') + ' ' + (showPadding ? 'BoxModel--showPadding' : '') + ' ' + (showBorder ? 'BoxModel--showBorder' : '') + ' ' + (showMargin ? 'BoxModel--showMargin' : '')
  }, void 0, _ref9, _ref10);
}

BoxModel.showContent = function () {
  return function (state) {
    return Object.assign({}, state, { showContent: true });
  };
};
BoxModel.showPadding = function () {
  return function (state) {
    return Object.assign({}, state, { showPadding: true });
  };
};
BoxModel.showBorder = function () {
  return function (state) {
    return Object.assign({}, state, { showBorder: true });
  };
};
BoxModel.showMargin = function () {
  return function (state) {
    return Object.assign({}, state, { showMargin: true });
  };
};

function PopupSlide(_ref11) {
  var _ref11$show = _ref11.show,
      show = _ref11$show === undefined ? false : _ref11$show,
      children = _ref11.children;

  var yTransform = (show ? 0 : 100) + '%';
  return _jsx(debut.Transform, {
    y: yTransform,
    style: { transition: 'transform 0.5s' },
    className: 'FullSlide'
  }, void 0, children);
}

PopupSlide.show = function () {
  return function (state) {
    return Object.assign({}, state, { show: true });
  };
};
PopupSlide.hide = function () {
  return function (state) {
    return Object.assign({}, state, { show: false });
  };
};

function HeaderedSlide(_ref12) {
  var children = _ref12.children,
      header = _ref12.header,
      footer = _ref12.footer,
      _ref12$className = _ref12.className,
      className = _ref12$className === undefined ? '' : _ref12$className;

  return _jsx('div', {
    className: 'HeaderedSlide ' + className
  }, void 0, _jsx('div', {
    className: 'HeaderedSlide__content HeaderedSlide__header'
  }, void 0, header), _jsx('div', {
    className: 'HeaderedSlide__content HeaderedSlide__main'
  }, void 0, children), _jsx('div', {
    className: 'HeaderedSlide__content HeaderedSlide__footer'
  }, void 0, footer));
}

function StrongCode(_ref13) {
  var children = _ref13.children;

  return _jsx('span', {
    className: 'StrongCode',
    children: children
  });
}

function Appear(_ref14) {
  var show = _ref14.show,
      component = _ref14.component,
      children = _ref14.children;

  return React.createElement(component, { className: 'Appear ' + (show ? 'Appear--show' : '') }, children);
}

Appear.show = function () {
  return function (state) {
    return Object.assign({}, state, { show: true });
  };
};

var _ref17 = _jsx('div', {
  className: 'EventButton__button EventButton__button--left'
}, void 0, 'Action');

var _ref18 = _jsx('div', {
  className: 'EventButton__button EventButton__button--right'
}, void 0, 'Event');

var EventButton = function (_React$PureComponent) {
  _inherits(EventButton, _React$PureComponent);

  function EventButton() {
    var _ref15;

    var _temp, _this, _ret;

    _classCallCheck(this, EventButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref15 = EventButton.__proto__ || Object.getPrototypeOf(EventButton)).call.apply(_ref15, [this].concat(args))), _this), _this.state = {
      fired: 0
    }, _this.onClick = function () {
      if (_this.props.canFire) {
        _this.setState(function (_ref16) {
          var fired = _ref16.fired;
          return { fired: fired + 1 };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EventButton, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: 'EventButton',
        onMouseDown: this.onClick
      }, void 0, _ref17, _ref18, this.firedBalls);
    }
  }, {
    key: 'firedBalls',
    get: function get() {
      var firedBalls = [];

      for (var index = 0; index < this.state.fired; index += 1) {
        firedBalls.push(_jsx('div', {
          className: 'EventButton__emitBall'
        }, index));
      }

      return firedBalls;
    }
  }]);

  return EventButton;
}(React.PureComponent);

EventButton.activateFiring = function () {
  return function (state) {
    return Object.assign({}, state, { canFire: true });
  };
};

var component = debut.createComponentFromReact(_jsx('div', {
  className: 'FullSlide'
}, void 0, _jsx(debut.Slider, {
  name: 'main-slider',
  direction: 'left'
}, void 0, _jsx('div', {
  className: 'IntroSlide'
}, void 0, _jsx('div', {
  className: 'IntroSlide__foreground'
})), _jsx(HeaderedSlide, {
  className: 'BrightSlide'
}, void 0, _jsx('h1', {}, void 0, 'hackersatcambridge.com/workshops/web-dev'), _jsx('h3', {}, void 0, 'Notes, Examples, Further Reading')), _jsx(WorkshopContents, {
  name: 'contents-1',
  index: null
}), _jsx(HeaderedSlide, {}, void 0, _jsx('div', {
  style: { textAlign: 'center' }
}, void 0, _jsx('h1', {}, void 0, 'What is the web for?'), _jsx(Appear, {
  component: 'h3',
  name: 'intro-purpose'
}, void 0, 'To distribute information!'))), _jsx(HeaderedSlide, {}, void 0, _jsx('h1', {}, void 0, 'Think Before You Leap')), _jsx(WorkshopContents, {
  name: 'contents-2',
  index: 0
}), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'HTML Syntax')
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'html'
}, void 0, _jsx(PopOver, {
  name: 'html-1-doctype',
  label: 'Start an HTML Document',
  side: 'right'
}, void 0, '<!DOCTYPE html>'), '\n', _jsx(PopOver, {
  name: 'html-1-opening',
  label: 'Opening Tag',
  side: 'left'
}, void 0, '<html>'), '\n', '  <body>\n', '    ', _jsx(PopOver, {
  name: 'html-1-heading',
  label: 'Heading',
  side: 'left'
}, void 0, '<h1>'), _jsx(PopOver, {
  name: 'html-1-content',
  label: 'Content',
  side: 'bottom'
}, void 0, 'My Cool Website'), '</h1>\n', '  </body>\n', _jsx(PopOver, {
  name: 'html-1-closing',
  label: 'Closing Tag',
  side: 'left'
}, void 0, '</html>'))), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Names mean something!')
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'html'
}, void 0, '<h1>', _jsx(StrongCode, {}, void 0, 'H'), 'eading Level ', _jsx(StrongCode, {}, void 0, '1'), '</h1>\n', '<p>A ', _jsx(StrongCode, {}, void 0, 'p'), 'aragraph full of text.</p>\n', '<h2>', _jsx(StrongCode, {}, void 0, 'H'), 'eading Level ', _jsx(StrongCode, {}, void 0, '2'), '</h2>\n', '<p>\n', '  Text can be <em>', _jsx(StrongCode, {}, void 0, 'em'), 'phasised (italic)</em>\n', '  or <strong>', _jsx(StrongCode, {}, void 0, 'strong'), ' (bold)</strong>\n', '</p>')), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Linking to Things')
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'html'
}, void 0, _jsx(PopOver, {
  name: 'html-3-anchor',
  side: 'left',
  label: 'Anchor (Link)'
}, void 0, '<a '), _jsx(PopOver, {
  name: 'html-3-attribute-name',
  label: 'Attribute name',
  side: 'top'
}, void 0, 'href'), '="', _jsx(PopOver, {
  name: 'html-3-attribute-value',
  label: 'Where you want to go (value)',
  side: 'bottom'
}, void 0, 'https://google.com'), '">Google</a>')), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Displaying Images')
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'html'
}, void 0, _jsx(PopOver, {
  name: 'html-4-image',
  side: 'left',
  label: 'Image'
}, void 0, '<img'), ' ', _jsx(PopOver, {
  name: 'html-4-src',
  side: 'bottom',
  label: '\'Source\' of the image'
}, void 0, 'src="my-image.jpg"'), ' ', _jsx(PopOver, {
  name: 'html-4-alt',
  side: 'top',
  label: 'Description of the image'
}, void 0, 'alt="A dog"'), _jsx(PopOver, {
  name: 'html-4-closing',
  side: 'bottom',
  label: 'Self-closing!'
}, void 0, ' />'))), _jsx(HeaderedSlide, {}, void 0, _jsx('h1', {}, void 0, 'Is there a video tag?')), _jsx(WorkshopContents, {
  name: 'contents-3',
  index: 1
}), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'CSS Syntax')
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'css'
}, void 0, _jsx(PopOver, {
  name: 'css-1-selector',
  side: 'left',
  label: 'Selector'
}, void 0, 'body'), ' {\n', '  background: blue;\n', '  ', _jsx(PopOver, {
  name: 'css-1-property',
  side: 'left',
  label: 'Property'
}, void 0, 'color'), ': ', _jsx(PopOver, {
  name: 'css-1-value',
  side: 'bottom',
  label: 'Value'
}, void 0, 'white'), ';\n', '}')), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Colours')
}, void 0, _jsx('img', {
  style: { height: 600 },
  src: '../markdown_images/css-colors.gif'
})), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Classes')
}, void 0, _jsx('div', {}, void 0, _jsx('div', {
  style: { marginBottom: '1rem' }
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'html'
}, void 0, '<p class="intro-text">I am the selected element.</p>')), _jsx(debut.SyntaxHighlight, {
  language: 'css'
}, void 0, '.intro-text {\n', '  font-size: 1.2em;\n', '}'))), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Inline & Block')
}, void 0, _jsx(InlineBlock, {
  name: 'css-2-inline-block'
})), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Div & Span')
}, void 0, _jsx(debut.SyntaxHighlight, {
  language: 'html'
}, void 0, '<div>I am a block element</div>\n', '<span>I am an inline element</span>\n')), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'The Box Model')
}, void 0, _jsx(BoxModel, {
  name: 'css-3-box-model'
})), _jsx(WorkshopContents, {
  name: 'contents-4',
  index: 2
}), _jsx(HeaderedSlide, {
  header: _jsx('h1', {}, void 0, 'Events')
}, void 0, _jsx(EventButton, {
  name: 'js-event-button'
})), _jsx(WorkshopContents, {
  name: 'contents-5',
  index: 3
}), _jsx(HeaderedSlide, {
  className: 'BrightSlide'
}, void 0, _jsx('h1', {}, void 0, 'You have a website!'))), _jsx(PopupSlide, {
  name: 'html-task-1'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Create a folder for your website.'), _jsx('div', {}, void 0, 'Create a ', _jsx('code', {}, void 0, 'index.html'), ' file and open it in your browser'), _jsx('div', {}, void 0, 'Think about a topic for your website.'), _jsx('div', {}, void 0, 'What do you want it to look like? Look at other websites for inspiration.'))), _jsx(PopupSlide, {
  name: 'html-task-2'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add your setup code for an HTML document (doctype, html and body tags).'), _jsx('div', {}, void 0, 'Create some content with ', _jsx('code', {}, void 0, 'h1-6'), ', ', _jsx('code', {}, void 0, 'p'), ', ', _jsx('code', {}, void 0, 'em'), ' and ', _jsx('code', {}, void 0, 'strong'), ' tags.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge:'), ' Can you find out what these tags do and use them? ', _jsx('code', {}, void 0, 'small'), ', ', _jsx('code', {}, void 0, 'ul'), ', ', _jsx('code', {}, void 0, 'ol'), ', ', _jsx('code', {}, void 0, 'table.')))), _jsx(PopupSlide, {
  name: 'html-task-3'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add links to your website with ', _jsx('code', {}, void 0, 'a'), '.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge:'), ' Do you want your website to have multiple pages? Create a second page and link to it from the first.'), _jsx('div', {}, void 0, 'Add an image or two (try pexels.com).'), _jsx('div', {}, void 0, 'Embed a video.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge:'), ' Other media sites have support for embedding. Try embedding a tweet or a Facebook like button.'), _jsx('div', {}, void 0, 'Give your website a title using ', _jsx('code', {}, void 0, 'head'), ' and ', _jsx('code', {}, void 0, 'title'), '.'))), _jsx(PopupSlide, {
  name: 'css-task-1'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add a CSS file with the given snippet, make sure your website becomes blue.'), _jsx('div', {}, void 0, 'Change the background and text to a different colour.'), _jsx('div', {}, void 0, 'Change the colour of other elements.'))), _jsx(PopupSlide, {
  name: 'css-task-2'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Create a colour scheme on ', _jsx('code', {}, void 0, 'coolors.co'), '.'), _jsx('div', {}, void 0, 'Change the colours on your website to that scheme.'), _jsx('div', {}, void 0, 'Choose a font or two on ', _jsx('code', {}, void 0, 'fonts.google.com'), '.'), _jsx('div', {}, void 0, 'Change the fonts on your website to the chosen ones.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge'), ': Can you make the fonts for the headings of your website different?'))), _jsx(PopupSlide, {
  name: 'css-task-3'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Draw attention to some specific text on your website by making it bigger.'), _jsx('div', {}, void 0, 'Add a container to make the main content of your website a bit thinner.'), _jsx('div', {}, void 0, 'Make some links stand out more by turning them into buttons.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge'), ': Add some more flair to your buttons. Look into the CSS properties ', _jsx('code', {}, void 0, 'box-shadow'), ' and ', _jsx('code', {}, void 0, 'border'), '.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge'), ': Can you make other parts of your website stand out? e.g. with some padding and a different background colour.'))), _jsx(PopupSlide, {
  name: 'css-task-4'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Use pseudo selectors (', _jsx('code', {}, void 0, ':hover'), ', ', _jsx('code', {}, void 0, ':active'), ') to make your buttons respond to user input.'), _jsx('div', {}, void 0, 'Use ', _jsx('code', {}, void 0, 'transition'), ' to make them change smoothly.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge'), ': Can you figure out how to make different properties (e.g. size and colour) change at different speeds?'), _jsx('div', {}, void 0, 'Make your website ', _jsx('em', {}, void 0, 'responsive'), ' so that it works well on mobile websites.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge'), ': There is a tool in CSS called ', _jsx('em', {}, void 0, 'media queries'), '. Can you figure out what they do and how to use them?'))), _jsx(PopupSlide, {
  name: 'js-task-1'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add a ', _jsx('code', {}, void 0, 'main.js'), ' file with the alert snippet.'), _jsx('div', {}, void 0, 'Use a ', _jsx('code', {}, void 0, 'script'), ' element to add the script to your page. Can you change the text that is displayed?'), _jsx('div', {}, void 0, 'Open the developer console and type out some expressions to see what they do.'), _jsx('div', {}, void 0, 'Replace your ', _jsx('code', {}, void 0, 'alert'), ' with ', _jsx('code', {}, void 0, 'console.log'), ' and make sure the text is printed to the console.'))), _jsx(PopupSlide, {
  name: 'js-task-2'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Change an element on your page using the console.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge'), ': Can you figure out how to change attributes on elements? (e.g. ', _jsx('code', {}, void 0, 'href'), ')'), _jsx('div', {}, void 0, 'Experiment with randomness and combining strings in the console.'), _jsx('div', {}, void 0, 'Use these skills to add some dynamic behaviour to your website, like the colour creator.'))), _jsx(PopupSlide, {
  name: 'js-task-3'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Wrap some of your code in a function so you can re-use it. Try calling it from the console.'), _jsx('div', {}, void 0, 'Bind this function to an event, making your new behaviour interactive.'))), _jsx(PopupSlide, {
  name: 'publish-task-1'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Publish your website using Netlify.'))), _jsx(PopupSlide, {
  name: 'publish-task-2'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Make any adjustments to your website (don\'t forget to publish again!).'), _jsx('div', {}, void 0, 'Submit your website to the competition using the link on the notes.')))));

var actions = debut.actionsForComponent(component, function (action) {
  return [action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()),

  // Section 1
  action('contents-1', WorkshopContents.setIndex(0)), action('main-slider', debut.Slider.advance()), action('intro-purpose', Appear.show()), action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()),

  // Section 2
  action('contents-2', WorkshopContents.setIndex(1)), action('html-task-1', PopupSlide.show()), [action('html-task-1', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('html-1-doctype', PopOver.show()), action('html-1-opening', PopOver.show()), action('html-1-closing', PopOver.show()), action('html-1-heading', PopOver.show()), action('html-1-content', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-task-2', PopupSlide.show()), [action('html-task-2', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('html-3-anchor', PopOver.show()), action('html-3-attribute-name', PopOver.show()), action('html-3-attribute-value', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-4-image', PopOver.show()), action('html-4-src', PopOver.show()), action('html-4-alt', PopOver.show()), action('html-4-closing', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-task-3', PopupSlide.show()), [action('html-task-3', PopupSlide.hide()), action('main-slider', debut.Slider.advance())],

  // Section 3
  action('contents-3', WorkshopContents.setIndex(2)), action('main-slider', debut.Slider.advance()), action('css-1-selector', PopOver.show()), action('css-1-property', PopOver.show()), action('css-1-value', PopOver.show()), action('css-task-1', PopupSlide.show()), [action('css-task-1', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('css-task-2', PopupSlide.show()), [action('css-task-2', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('main-slider', debut.Slider.advance()), action('css-2-inline-block', InlineBlock.showBlock()), action('css-2-inline-block', InlineBlock.showInline()), action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()), action('css-3-box-model', BoxModel.showContent()), action('css-3-box-model', BoxModel.showPadding()), action('css-3-box-model', BoxModel.showBorder()), action('css-3-box-model', BoxModel.showMargin()), action('css-task-3', PopupSlide.show()), [action('css-task-3', PopupSlide.hide()), action('css-task-4', PopupSlide.show())], [action('css-task-4', PopupSlide.hide()), action('main-slider', debut.Slider.advance())],

  // Section 4
  action('contents-4', WorkshopContents.setIndex(3)), action('js-task-1', PopupSlide.show()), [action('js-task-1', PopupSlide.hide()), action('js-task-2', PopupSlide.show())], [action('js-task-2', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('js-event-button', EventButton.activateFiring()), action('js-task-3', PopupSlide.show()), [action('js-task-3', PopupSlide.hide()), action('main-slider', debut.Slider.advance())],

  // Section 5
  action('contents-5', WorkshopContents.setIndex(4)), action('publish-task-1', PopupSlide.show()), [action('publish-task-1', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('publish-task-2', PopupSlide.show())];
});

ReactDOM.render(_jsx(debut.Presentation, {
  actions: actions,
  root: component,
  size: { width: 1600, height: 900 }
}), document.getElementById('root'));
