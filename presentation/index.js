'use strict';

function WorkshopContents(_ref) {
  var index = _ref.index;

  var sections = [{
    name: '1. Thinking of the Web',
    subsections: []
  }, {
    name: '2. HTML',
    subsections: ['Setting up a website project', 'Getting content on the screen with basic HTML', 'Advanced HTML tags']
  }, {
    name: '3. CSS',
    subsections: []
  }, {
    name: '4. jS',
    subsections: []
  }, {
    name: '5. Publish',
    subsections: []
  }];

  return React.createElement('div', { className: 'FullSlide WorkshopContents', children: sections.map(function (_ref2, sectionIndex) {
      var name = _ref2.name,
          subsections = _ref2.subsections;
      return React.createElement(
        'div',
        { className: 'WorkshopContents__content ' + (sectionIndex === index ? 'WorkshopContents__content--active' : '') },
        React.createElement(
          'div',
          { className: 'WorkshopContents__contentInner' },
          React.createElement(
            'div',
            { className: 'WorkshopContents__contentHeading' },
            name
          ),
          React.createElement('div', { className: 'WorkshopContents__detailedContent', children: subsections.map(function (text) {
              return React.createElement(
                'div',
                null,
                text
              );
            }) })
        )
      );
    }) });
}

WorkshopContents.setIndex = function (index) {
  return function (state) {
    return Object.assign({}, state, { index: index });
  };
};

function TaskSlide(_ref3) {
  var children = _ref3.children;

  return React.createElement('div', { className: 'TaskSlide', children: children });
}

function PopOver(_ref4) {
  var children = _ref4.children,
      label = _ref4.label,
      side = _ref4.side,
      active = _ref4.active;

  return React.createElement(
    'span',
    { className: 'PopOver PopOver--' + side + ' ' + (active ? 'PopOver--active' : '') },
    children,
    React.createElement(
      'div',
      { className: 'PopOver__popOver' },
      React.createElement('div', { className: 'PopOver__arrow' }),
      label
    )
  );
}

PopOver.show = function () {
  return function (state) {
    return Object.assign({}, state, { active: true });
  };
};

function PopupSlide(_ref5) {
  var _ref5$show = _ref5.show,
      show = _ref5$show === undefined ? false : _ref5$show,
      children = _ref5.children;

  var yTransform = (show ? 0 : 100) + '%';
  return React.createElement(
    debut.Transform,
    { y: yTransform, style: { transition: 'transform 0.5s' }, className: 'FullSlide' },
    children
  );
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

var component = debut.createComponentFromReact(React.createElement(
  'div',
  { className: 'FullSlide' },
  React.createElement(
    debut.Slider,
    { name: 'main-slider', direction: 'left' },
    React.createElement(
      'div',
      { className: 'IntroSlide' },
      React.createElement('div', { className: 'IntroSlide__foreground' })
    ),
    React.createElement(WorkshopContents, { name: 'contents-1', index: null }),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      'The web is for information'
    ),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      'Think before you leap'
    ),
    React.createElement(WorkshopContents, { name: 'contents-2', index: 0 }),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      React.createElement(
        debut.SyntaxHighlight,
        { language: 'html' },
        React.createElement(
          PopOver,
          { name: 'html-1-doctype', label: 'Start an HTML Document', side: 'right' },
          '<!DOCTYPE html>'
        ),
        '\n',
        React.createElement(
          PopOver,
          { name: 'html-1-opening', label: 'Opening Tag', side: 'left' },
          '<html>'
        ),
        '\n',
        '  <body>\n',
        '    ',
        React.createElement(
          PopOver,
          { name: 'html-1-heading', label: 'Heading', side: 'left' },
          '<h1>'
        ),
        React.createElement(
          PopOver,
          { name: 'html-1-content', label: 'Content', side: 'bottom' },
          'My Cool Website'
        ),
        '</h1>\n',
        '  </body>\n',
        React.createElement(
          PopOver,
          { name: 'html-1-closing', label: 'Closing Tag', side: 'left' },
          '</html>'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      React.createElement(
        debut.SyntaxHighlight,
        { language: 'html' },
        React.createElement(
          PopOver,
          { name: 'html-2-tagname', label: 'p is for paragraph', side: 'bottom' },
          '<p>'
        ),
        'Contents</p>'
      )
    ),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      React.createElement(
        debut.SyntaxHighlight,
        { language: 'html' },
        React.createElement(
          PopOver,
          { name: 'html-3-anchor', side: 'left', label: 'Anchor (Link)' },
          '<a '
        ),
        React.createElement(
          PopOver,
          { name: 'html-3-attribute-name', label: 'Attribute name', side: 'top' },
          'href'
        ),
        '="',
        React.createElement(
          PopOver,
          { name: 'html-3-attribute-value', label: 'Where you want to go (value)', side: 'bottom' },
          'https://google.com'
        ),
        '">Google</a>'
      )
    ),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      React.createElement(
        debut.SyntaxHighlight,
        { language: 'html' },
        React.createElement(
          PopOver,
          { name: 'html-4-image', side: 'left', label: 'Image' },
          '<img'
        ),
        ' ',
        React.createElement(
          PopOver,
          { name: 'html-4-src', side: 'bottom', label: '\'Source\' of the image' },
          'src="my-image.jpg"'
        ),
        ' ',
        React.createElement(
          PopOver,
          { name: 'html-4-alt', side: 'top', label: 'Description of the image' },
          'alt="A dog"'
        ),
        React.createElement(
          PopOver,
          { name: 'html-4-closing', side: 'bottom', label: 'Self-closing!' },
          ' />'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'FullSlide' },
      'Is there a video tag?'
    )
  ),
  React.createElement(
    PopupSlide,
    { name: 'html-task-1' },
    React.createElement(
      TaskSlide,
      null,
      'Create a folder, create index.html, open in browser'
    )
  ),
  React.createElement(
    PopupSlide,
    { name: 'html-task-2' },
    React.createElement(
      TaskSlide,
      null,
      'Add your boilerplate (doctype, html and body tags). Create some content with h1-6, p, em and strong tags. What does the del tag do?'
    )
  ),
  React.createElement(
    PopupSlide,
    { name: 'html-task-2' },
    React.createElement(
      TaskSlide,
      null,
      'Add links to your website. Add image (try unsplash). Embed a video. Do you have a favourite tweet you want to embed?'
    )
  )
));

var actions = debut.actionsForComponent(component, function (action) {
  return [action('main-slider', debut.Slider.advance()),
  // Section 1
  action('contents-1', WorkshopContents.setIndex(0)), action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()), action('main-slider', debut.Slider.advance()),

  // Section 2
  action('contents-2', WorkshopContents.setIndex(1)), action('html-task-1', PopupSlide.show()), [action('html-task-1', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('html-1-doctype', PopOver.show()), action('html-1-opening', PopOver.show()), action('html-1-closing', PopOver.show()), action('html-1-heading', PopOver.show()), action('html-1-content', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-2-tagname', PopOver.show()), action('html-task-2', PopupSlide.show()), [action('html-task-2', PopupSlide.hide()), action('main-slider', debut.Slider.advance())], action('html-3-anchor', PopOver.show()), action('html-3-attribute-name', PopOver.show()), action('html-3-attribute-value', PopOver.show()), action('main-slider', debut.Slider.advance()), action('html-4-image', PopOver.show()), action('html-4-src', PopOver.show()), action('html-4-alt', PopOver.show()), action('html-4-closing', PopOver.show()), action('main-slider', debut.Slider.advance())];
});

ReactDOM.render(React.createElement(debut.Presentation, { actions: actions, root: component, size: { width: 1600, height: 900 } }), document.getElementById('root'));
