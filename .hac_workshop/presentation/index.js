'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

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
    subsections: []
  }, {
    name: '4. JavaScript: Make it Interactive',
    subsections: []
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

function PopupSlide(_ref7) {
  var _ref7$show = _ref7.show,
      show = _ref7$show === undefined ? false : _ref7$show,
      children = _ref7.children;

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

function HeaderedSlide(_ref8) {
  var children = _ref8.children,
      header = _ref8.header,
      footer = _ref8.footer,
      _ref8$className = _ref8.className,
      className = _ref8$className === undefined ? '' : _ref8$className;

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

function StrongCode(_ref9) {
  var children = _ref9.children;

  return _jsx('span', {
    className: 'StrongCode',
    children: children
  });
}

function Appear(_ref10) {
  var show = _ref10.show,
      component = _ref10.component,
      children = _ref10.children;

  return React.createElement(component, { className: 'Appear ' + (show ? 'Appear--show' : '') }, children);
}

Appear.show = function () {
  return function (state) {
    return Object.assign({}, state, { show: true });
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
}, void 0, '<h1>', _jsx(StrongCode, {}, void 0, 'H'), 'eading Level ', _jsx(StrongCode, {}, void 0, '1'), '</h1>\n', '<p>A ', _jsx(StrongCode, {}, void 0, 'p'), 'aragraph full of text.</p>\n', '<h2>', _jsx(StrongCode, {}, void 0, 'H'), 'eading Level ', _jsx(StrongCode, {}, void 0, '2'), '</h2>\n', '<p>\n', '  Text can be <em>', _jsx(StrongCode, {}, void 0, 'em'), 'phasised (italic)</em>\nor <strong>', _jsx(StrongCode, {}, void 0, 'strong'), ' (bold)</strong>\n', '</p>')), _jsx(HeaderedSlide, {
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
  name: 'contents-2',
  index: 1
})), _jsx(PopupSlide, {
  name: 'html-task-1'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Create a folder for your website.'), _jsx('div', {}, void 0, 'Create a ', _jsx('code', {}, void 0, 'index.html'), ' file and open it in your browser'), _jsx('div', {}, void 0, 'Think about a topic for your website.'), _jsx('div', {}, void 0, 'What do you want it to look like? Look at other websites for inspiration.'))), _jsx(PopupSlide, {
  name: 'html-task-2'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add your setup code for an HTML document (doctype, html and body tags).'), _jsx('div', {}, void 0, 'Create some content with ', _jsx('code', {}, void 0, 'h1-6'), ', ', _jsx('code', {}, void 0, 'p'), ', ', _jsx('code', {}, void 0, 'em'), ' and ', _jsx('code', {}, void 0, 'strong'), ' tags.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge:'), ' Can you find out what these tags do and use them? ', _jsx('code', {}, void 0, 'small'), ', ', _jsx('code', {}, void 0, 'ul'), ', ', _jsx('code', {}, void 0, 'ol'), ', ', _jsx('code', {}, void 0, 'table.')))), _jsx(PopupSlide, {
  name: 'html-task-3'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add links to your website with ', _jsx('code', {}, void 0, 'a'), '.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge:'), ' Do you want your website to have multiple pages? Create a second page and link to it from the first.'), _jsx('div', {}, void 0, 'Add an image or two (try pexels.com).'), _jsx('div', {}, void 0, 'Embed a video.'), _jsx('div', {}, void 0, _jsx('strong', {}, void 0, 'Challenge:'), ' Other media sites have support for embedding. Try embedding a tweet or a Facebook like button.'), _jsx('div', {}, void 0, 'Give your website a title using ', _jsx('code', {}, void 0, 'head'), ' and ', _jsx('code', {}, void 0, 'title'), '.'))), _jsx(PopupSlide, {
  name: 'html-task-4'
}, void 0, _jsx(TaskSlide, {}, void 0, _jsx('div', {}, void 0, 'Add links to your website with ', _jsx('code', {}, void 0, 'a'), '.'), _jsx('div', {}, void 0, 'Add an image or two (try pexels.com).'), _jsx('div', {}, void 0, 'Embed a video.'), _jsx('div', {}, void 0, 'Other media sites have support for embedding. Try embedding a tweet or a Facebook like button.')))));

var actions = debut.actionsForComponent(component, function (action) {
  return [action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()),

  // Section 1
  action('contents-1', WorkshopContents.setIndex(0)), action('main-slider', debut.Slider.advance()), action('intro-purpose', Appear.show()), action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()),

  // Section 2
  action('contents-2', WorkshopContents.setIndex(1)), action('html-task-1', PopupSlide.show()), [action('html-task-1', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('html-1-doctype', PopOver.show()), action('html-1-opening', PopOver.show()), action('html-1-closing', PopOver.show()), action('html-1-heading', PopOver.show()), action('html-1-content', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-task-2', PopupSlide.show()), [action('html-task-2', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('html-3-anchor', PopOver.show()), action('html-3-attribute-name', PopOver.show()), action('html-3-attribute-value', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-4-image', PopOver.show()), action('html-4-src', PopOver.show()), action('html-4-alt', PopOver.show()), action('html-4-closing', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-task-3', PopupSlide.show()), [action('html-task-3', PopupSlide.hide()), action('main-slider', debut.Slider.advance())]];
});

ReactDOM.render(_jsx(debut.Presentation, {
  actions: actions,
  root: component,
  size: { width: 1600, height: 900 }
}), document.getElementById('root'));
