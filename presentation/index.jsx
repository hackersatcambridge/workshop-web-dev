function WorkshopContents({ index }) {
  const sections = [
    {
      name: '1. Thinking of the Web',
      subsections: [],
    },
    {
      name: '2. HTML',
      subsections: [
        'Setting up a website project',
        'Getting content on the screen with basic HTML',
        'Advanced HTML tags',
      ],
    },
    {
      name: '3. CSS',
      subsections: [],
    },
    {
      name: '4. jS',
      subsections: [],
    },
    {
      name: '5. Publish',
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
    <div className="TaskSlide" children={children} />
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

function PopupSlide({ show = false, children }) {
  const yTransform = `${show ? 0 : 100}%`;
  return <debut.Transform y={yTransform} style={{ transition: 'transform 0.5s' }} className="FullSlide">{children}</debut.Transform>;
}

PopupSlide.show = () => (state) => Object.assign({ }, state, { show: true });
PopupSlide.hide = () => (state) => Object.assign({ }, state, { show: false });

const component = debut.createComponentFromReact(
  <div className="FullSlide">
    <debut.Slider name="main-slider" direction="left">
      <div className="IntroSlide">
        <div className="IntroSlide__foreground" />
      </div>
      <WorkshopContents name="contents-1" index={null}/>
      <div className="FullSlide">
        The web is for information
      </div>
      <div className="FullSlide">
        Think before you leap
      </div>
      <WorkshopContents name="contents-2" index={0}/>
      <div className="FullSlide">
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
      </div>
      <div className="FullSlide">
        <debut.SyntaxHighlight language="html">
          <PopOver name="html-2-tagname" label="p is for paragraph" side="bottom">{`<p>`}</PopOver>{`Contents</p>`}
        </debut.SyntaxHighlight>
      </div>
      <div className="FullSlide">
        <debut.SyntaxHighlight language="html">
          <PopOver name="html-3-anchor" side="left" label="Anchor (Link)">{`<a `}</PopOver>
          <PopOver name="html-3-attribute-name" label="Attribute name" side="top">href</PopOver>
          {`="`}
          <PopOver name="html-3-attribute-value" label="Where you want to go (value)" side="bottom">https://google.com</PopOver>
          {`">Google</a>`}
        </debut.SyntaxHighlight>
      </div>
      <div className="FullSlide">
        <debut.SyntaxHighlight language="html">
          <PopOver name="html-4-image" side="left" label="Image">{`<img`}</PopOver>{` `}
          <PopOver name="html-4-src" side="bottom" label="'Source' of the image">{`src="my-image.jpg"`}</PopOver>{` `}
          <PopOver name="html-4-alt" side="top" label="Description of the image">{`alt="A dog"`}</PopOver>
          <PopOver name="html-4-closing" side="bottom" label="Self-closing!">{' />'}</PopOver>
        </debut.SyntaxHighlight>
      </div>
      <div className="FullSlide">
        Is there a video tag?
      </div>
    </debut.Slider>
    <PopupSlide name="html-task-1">
      <TaskSlide>Create a folder, create index.html, open in browser</TaskSlide>
    </PopupSlide>
    <PopupSlide name="html-task-2">
      <TaskSlide>Add your boilerplate (doctype, html and body tags). Create some content with h1-6, p, em and strong tags. What does the del tag do?</TaskSlide>
    </PopupSlide>
    <PopupSlide name="html-task-2">
      <TaskSlide>Add links to your website. Add image (try unsplash). Embed a video. Do you have a favourite tweet you want to embed?</TaskSlide>
    </PopupSlide>
  </div>
)

const actions = debut.actionsForComponent(component, action => [
  action('main-slider', debut.Slider.advance()),
  // Section 1
  action('contents-1', WorkshopContents.setIndex(0)),
  action('main-slider', debut.Slider.advance()),
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
  action('html-2-tagname', PopOver.show()),
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
]);

ReactDOM.render(<debut.Presentation actions={actions} root={component} size={{ width: 1600, height: 900 }} />, document.getElementById('root'));
