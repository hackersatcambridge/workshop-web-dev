function WorkshopContents({ index }) {
  const sections = [
    {
      name: '1. Thinking of the Web',
      subsections: [
        'Purposes of the Web',
        'Designing a Website',
      ],
    },
    {
      name: '2. HTML: Displaying Information',
      subsections: [
        'Setting up a Website Project',
        'Getting Content on the Screen with Basic HTML',
        'Advanced HTML tags',
      ],
    },
    {
      name: '3. CSS: Adding Style',
      subsections: [
        'Changing the Look of Elements',
        'Colours and Fonts',
        'Laying out Elements on the Page',
        'Responding to User Input',
        'Behaving Well on Mobile'
      ],
    },
    {
      name: '4. JavaScript: Make it Interactive',
      subsections: [],
    },
    {
      name: '5. Publishing your Website',
      subsections: [],
    },
  ]

  return <div className="FullSlide WorkshopContents" children={sections.map(({ name, subsections }, sectionIndex) => (
    <div className={`WorkshopContents__content ${sectionIndex === index ? 'WorkshopContents__content--active' : ''}`}>
      <div className="WorkshopContents__contentInner">
        <div className="WorkshopContents__contentHeading">{name}</div>
        <div className="WorkshopContents__detailedContent" children={subsections.map(text => <div>{text}</div>)} />
      </div>
    </div>
  ))} />
}

WorkshopContents.setIndex = index => state => Object.assign({ }, state, { index });

function TaskSlide({ children }) {
  return (
    <div className="TaskSlide">
      <HeaderedSlide header={<h1>Task</h1>}>
        <div className="TaskSlide__contents" children={children} />
      </HeaderedSlide>
    </div>
  );
}

function PopOver({ children, label, side, active }) {
  return (
    <span className={`PopOver PopOver--${side} ${active ? 'PopOver--active' : ''}`}>
      {children}
      <div className="PopOver__popOver">
        <div className="PopOver__arrow" />
        {label}
      </div>
    </span>
  )
}

PopOver.show = () => state => Object.assign({ }, state, { active: true });

function InlineBlock({ showBlock, showInline }) {
  function wordsToInlines(words) {
    return words.split(' ').map((word, index) => <div className="InlineBlock__inline" key={index}>{word}</div>);
  }

  return (
    <div className={`InlineBlock ${showBlock ? 'InlineBlock--showBlock' : ''} ${showInline ? 'InlineBlock--showInline' : ''}`}>
      <div className="InlineBlock__block">
        {wordsToInlines('Lorem ipsum dolor sit amet, sonet audiam theophrastus ex vim, mea ei enim liberavisse interpretaris.')}
      </div>
      <div className="InlineBlock__block">
        {wordsToInlines('Vel ei ferri praesent. Per id exerci civibus, no commodo numquam ocurreret vim. Ex vim possim everti, mel insolens laboramus ex, mei verear integre eu.')}
      </div>
    </div>
  )
}

InlineBlock.showBlock = () => state => Object.assign({ }, state, { showBlock: true });
InlineBlock.showInline = () => state => Object.assign({ }, state, { showInline: true });

function BoxModel({ showContent, showPadding, showBorder, showMargin }) {
  return (
    <div className={`BoxModel ${showContent ? 'BoxModel--showContent' : ''} ${showPadding ? 'BoxModel--showPadding' : ''} ${showBorder ? 'BoxModel--showBorder' : ''} ${showMargin ? 'BoxModel--showMargin' : ''}`}>
      <div className="BoxModel__box">Content</div>
      <div className="BoxModel__box">Content</div>
    </div>
  )
}

BoxModel.showContent = () => state => Object.assign({ }, state, { showContent: true });
BoxModel.showPadding = () => state => Object.assign({ }, state, { showPadding: true });
BoxModel.showBorder = () => state => Object.assign({ }, state, { showBorder: true });
BoxModel.showMargin = () => state => Object.assign({ }, state, { showMargin: true });

function PopupSlide({ show = false, children }) {
  const yTransform = `${show ? 0 : 100}%`;
  return <debut.Transform y={yTransform} style={{ transition: 'transform 0.5s' }} className="FullSlide">{children}</debut.Transform>;
}

PopupSlide.show = () => (state) => Object.assign({ }, state, { show: true });
PopupSlide.hide = () => (state) => Object.assign({ }, state, { show: false });

function HeaderedSlide({ children, header, footer, className = '' }) {
  return (
    <div className={`HeaderedSlide ${className}`}>
      <div className="HeaderedSlide__content HeaderedSlide__header">{header}</div>
      <div className="HeaderedSlide__content HeaderedSlide__main">{children}</div>
      <div className="HeaderedSlide__content HeaderedSlide__footer">{footer}</div>
    </div>
  );
}

function StrongCode({ children }) {
  return (<span className="StrongCode" children={children} />);
}

function Appear({ show, component, children }) {
  return React.createElement(component, { className: `Appear ${show ? 'Appear--show' : ''}` }, children);
}

Appear.show = () => state => Object.assign({ }, state, { show: true });

const component = debut.createComponentFromReact(
  <div className="FullSlide">
    <debut.Slider name="main-slider" direction="left">
      <div className="IntroSlide">
        <div className="IntroSlide__foreground" />
      </div>
      <HeaderedSlide className="BrightSlide">
        <h1>hackersatcambridge.com/workshops/web-dev</h1>
        <h3>Notes, Examples, Further Reading</h3>
      </HeaderedSlide>
      <WorkshopContents name="contents-1" index={null}/>
      <HeaderedSlide>
        <div style={{ textAlign: 'center' }}>
          <h1>What is the web for?</h1>
          <Appear component="h3" name="intro-purpose">To distribute information!</Appear>
        </div>
      </HeaderedSlide>
      <HeaderedSlide>
        <h1>Think Before You Leap</h1>
      </HeaderedSlide>
      <WorkshopContents name="contents-2" index={0}/>
      <HeaderedSlide header={<h1>HTML Syntax</h1>} >
        <debut.SyntaxHighlight language="html">
          <PopOver name="html-1-doctype" label="Start an HTML Document" side="right">{`<!DOCTYPE html>`}</PopOver>{`\n`}
          <PopOver name="html-1-opening" label="Opening Tag" side="left">{`<html>`}</PopOver>{`\n`}
          {`  <body>\n`}
          {`    `}
          <PopOver name="html-1-heading" label="Heading" side="left">{`<h1>`}</PopOver>
          <PopOver name="html-1-content" label="Content" side="bottom">My Cool Website</PopOver>
          {`</h1>\n`}
          {`  </body>\n`}
          <PopOver name="html-1-closing" label="Closing Tag" side="left">{`</html>`}</PopOver>
        </debut.SyntaxHighlight>
      </HeaderedSlide>
      <HeaderedSlide header={<h1>Names mean something!</h1>}>
        <debut.SyntaxHighlight language="html">
          {`<h1>`}<StrongCode>H</StrongCode>{`eading Level `}<StrongCode>1</StrongCode>{`</h1>\n`}
          {`<p>A `}<StrongCode>p</StrongCode>{`aragraph full of text.</p>\n`}
          {`<h2>`}<StrongCode>H</StrongCode>{`eading Level `}<StrongCode>2</StrongCode>{`</h2>\n`}
          {`<p>\n`}
          {`  Text can be <em>`}<StrongCode>em</StrongCode>{`phasised (italic)</em>\n`}
          {`  or <strong>`}<StrongCode>strong</StrongCode>{` (bold)</strong>\n`}
          {`</p>`}
        </debut.SyntaxHighlight>
      </HeaderedSlide>
      <HeaderedSlide header={<h1>Linking to Things</h1>}>
        <debut.SyntaxHighlight language="html">
          <PopOver name="html-3-anchor" side="left" label="Anchor (Link)">{`<a `}</PopOver>
          <PopOver name="html-3-attribute-name" label="Attribute name" side="top">href</PopOver>
          {`="`}
          <PopOver name="html-3-attribute-value" label="Where you want to go (value)" side="bottom">https://google.com</PopOver>
          {`">Google</a>`}
        </debut.SyntaxHighlight>
      </HeaderedSlide>
      <HeaderedSlide header={<h1>Displaying Images</h1>}>
        <debut.SyntaxHighlight language="html">
          <PopOver name="html-4-image" side="left" label="Image">{`<img`}</PopOver>{` `}
          <PopOver name="html-4-src" side="bottom" label="'Source' of the image">{`src="my-image.jpg"`}</PopOver>{` `}
          <PopOver name="html-4-alt" side="top" label="Description of the image">{`alt="A dog"`}</PopOver>
          <PopOver name="html-4-closing" side="bottom" label="Self-closing!">{' />'}</PopOver>
        </debut.SyntaxHighlight>
      </HeaderedSlide>
      <HeaderedSlide>
        <h1>Is there a video tag?</h1>
      </HeaderedSlide>
      <WorkshopContents name="contents-3" index={1} />
      <HeaderedSlide header={<h1>CSS Syntax</h1>}>
        <debut.SyntaxHighlight language="css">
          <PopOver name="css-1-selector" side="left" label="Selector">body</PopOver>{` {\n`}
          {`  background: blue;\n`}
          {`  `}<PopOver name="css-1-property" side="left" label="Property">color</PopOver>: <PopOver name="css-1-value" side="bottom" label="Value">white</PopOver>{`;\n`}
          {`}`}
        </debut.SyntaxHighlight>
      </HeaderedSlide>
      <HeaderedSlide header={<h1>Colours</h1>}>
        <img style={{ height: 600 }} src="../markdown_images/css-colors.gif" />
      </HeaderedSlide>
      <HeaderedSlide header={<h1>Classes</h1>}>
        <div>
          <div style={{ marginBottom: '1rem' }}>
            <debut.SyntaxHighlight language="html">
              {`<p class="intro-text">I am the selected element.</p>`}
            </debut.SyntaxHighlight>
          </div>
          <debut.SyntaxHighlight language="css">
            {`.intro-text {\n`}
            {`  font-size: 1.2em;\n`}
            {`}`}
          </debut.SyntaxHighlight>
        </div>
      </HeaderedSlide>
      <HeaderedSlide header={<h1>Inline &amp; Block</h1>}>
        <InlineBlock name="css-2-inline-block" />
      </HeaderedSlide>
      <HeaderedSlide header={<h1>The Box Model</h1>}>
        <BoxModel name="css-3-box-model" />
      </HeaderedSlide>
      <WorkshopContents name="contents-3" index={2} />
    </debut.Slider>
    <PopupSlide name="html-task-1">
      <TaskSlide>
        <div>Create a folder for your website.</div>
        <div>Create a <code>index.html</code> file and open it in your browser</div>
        <div>Think about a topic for your website.</div>
        <div>What do you want it to look like? Look at other websites for inspiration.</div>
      </TaskSlide>
    </PopupSlide>
    <PopupSlide name="html-task-2">
      <TaskSlide>
        <div>Add your setup code for an HTML document (doctype, html and body tags).</div>
        <div>Create some content with <code>h1-6</code>, <code>p</code>, <code>em</code> and <code>strong</code> tags.</div>
        <div><strong>Challenge:</strong> Can you find out what these tags do and use them? <code>small</code>, <code>ul</code>, <code>ol</code>, <code>table.</code></div>
      </TaskSlide>
    </PopupSlide>
    <PopupSlide name="html-task-3">
      <TaskSlide>
        <div>Add links to your website with <code>a</code>.</div>
        <div><strong>Challenge:</strong> Do you want your website to have multiple pages? Create a second page and link to it from the first.</div>
        <div>Add an image or two (try pexels.com).</div>
        <div>Embed a video.</div>
        <div><strong>Challenge:</strong> Other media sites have support for embedding. Try embedding a tweet or a Facebook like button.</div>
        <div>Give your website a title using <code>head</code> and <code>title</code>.</div>
      </TaskSlide>
    </PopupSlide>
    <PopupSlide name="css-task-1">
      <TaskSlide>
        <div>Add a CSS file with the given snippet, make sure your website becomes blue.</div>
        <div>Change the background and text to a different colour.</div>
        <div>Change the colour of other elements.</div>
      </TaskSlide>
    </PopupSlide>
    <PopupSlide name="css-task-2">
      <TaskSlide>
        <div>Create a colour scheme on <code>coolors.co</code>.</div>
        <div>Change the colours on your website to that scheme.</div>
        <div>Choose a font or two on <code>fonts.google.com</code>.</div>
        <div>Change the fonts on your website to the chosen ones.</div>
        <div><strong>Challenge</strong>: Can you make the fonts for the headings of your website different?</div>
      </TaskSlide>
    </PopupSlide>
    <PopupSlide name="css-task-3">
      <TaskSlide>
        <div>Draw attention to some specific text on your website by making it bigger.</div>
        <div>Add a container to make the main content of your website a bit thinner.</div>
        <div>Make some links stand out more by turning them into buttons.</div>
        <div><strong>Challenge</strong>: Add some more flair to your buttons. Look into the CSS properties <code>box-shadow</code> and <code>border</code>.</div>
        <div><strong>Challenge</strong>: Can you make other parts of your website stand out? e.g. with some padding and a different background colour.</div>
      </TaskSlide>
    </PopupSlide>
    <PopupSlide name="css-task-4">
      <TaskSlide>
        <div>Use pseudo selectors (<code>:hover</code>, <code>:active</code>) to make your buttons respond to user input.</div>
        <div>Use <code>transition</code> to make them change smoothly.</div>
        <div><strong>Challenge</strong>: Can you figure out how to make different properties (e.g. size and colour) change at different speeds?</div>
        <div>Make your website <em>responsive</em> so that it works well on mobile websites.</div>
        <div><strong>Challenge</strong>: There is a tool in CSS called <em>media queries</em>. Can you figure out what they do and how to use them?</div>
      </TaskSlide>
    </PopupSlide>
  </div>
)

const actions = debut.actionsForComponent(component, action => [
  action('main-slider', debut.Slider.advance()),
  action('main-slider', debut.Slider.advance()),

  // Section 1
  action('contents-1', WorkshopContents.setIndex(0)),
  action('main-slider', debut.Slider.advance()),
  action('intro-purpose', Appear.show()),
  action('main-slider', debut.Slider.advance()),
  action('main-slider', debut.Slider.advance()),

  // Section 2
  action('contents-2', WorkshopContents.setIndex(1)),
  action('html-task-1', PopupSlide.show()),
  [
    action('html-task-1', PopupSlide.hide()),
    action('main-slider', debut.Slider.advance()),
  ],
  action('html-1-doctype', PopOver.show()),
  action('html-1-opening', PopOver.show()),
  action('html-1-closing', PopOver.show()),
  action('html-1-heading', PopOver.show()),
  action('html-1-content', PopOver.show()),
  action('main-slider', debut.Slider.advance()),
  action('html-task-2', PopupSlide.show()),
  [
    action('html-task-2', PopupSlide.hide()),
    action('main-slider', debut.Slider.advance()),
  ],
  action('html-3-anchor', PopOver.show()),
  action('html-3-attribute-name', PopOver.show()),
  action('html-3-attribute-value', PopOver.show()),
  action('main-slider', debut.Slider.advance()),
  action('html-4-image', PopOver.show()),
  action('html-4-src', PopOver.show()),
  action('html-4-alt', PopOver.show()),
  action('html-4-closing', PopOver.show()),
  action('main-slider', debut.Slider.advance()),
  action('html-task-3', PopupSlide.show()),
  [
    action('html-task-3', PopupSlide.hide()),
    action('main-slider', debut.Slider.advance()),
  ],

  // Section 3
  action('contents-3', WorkshopContents.setIndex(2)),
  action('main-slider', debut.Slider.advance()),
  action('css-1-selector', PopOver.show()),
  action('css-1-property', PopOver.show()),
  action('css-1-value', PopOver.show()),
  action('css-task-1', PopupSlide.show()),
  [
    action('css-task-1', PopupSlide.hide()),
    action('main-slider', debut.Slider.advance()),
  ],
  action('css-task-2', PopupSlide.show()),
  [
    action('css-task-2', PopupSlide.hide()),
    action('main-slider', debut.Slider.advance()),
  ],
  action('main-slider', debut.Slider.advance()),
  action('css-2-inline-block', InlineBlock.showBlock()),
  action('css-2-inline-block', InlineBlock.showInline()),
  action('main-slider', debut.Slider.advance()),
  action('css-3-box-model', BoxModel.showContent()),
  action('css-3-box-model', BoxModel.showPadding()),
  action('css-3-box-model', BoxModel.showBorder()),
  action('css-3-box-model', BoxModel.showMargin()),
  action('css-task-3', PopupSlide.show()),
  [
    action('css-task-3', PopupSlide.hide()),
    action('css-task-4', PopupSlide.show()),
  ],
  [
    action('css-task-4', PopupSlide.hide()),
    action('main-slider', debut.Slider.advance()),
  ],
]);

ReactDOM.render(<debut.Presentation actions={actions} root={component} size={{ width: 1600, height: 900 }} />, document.getElementById('root'));
