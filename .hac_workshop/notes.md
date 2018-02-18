# 1. Thinking of the Web

This workshop will leave you with the ability to create your own website. Not only will we teach you how to code, but we'll be covering some of the tools and thought processes you may use to design and create content for your website.

So before we write a line of code, let's think a little bit about what you'd want your website to achieve.

## 1.1 The Purpose of the Web

The initial purpose of the "world wide web" was to distribute information. A _web_ of interconnected documents that made all human knowledgeable accessible simply by clicking.

Since its inception, the web has expanded to do a lot more than that. Nowadays we can write documents, order food, play games and more on the web but its primariy purpose is still as strong as ever.

In this workshop we'll cover the purpose of distributing information, by trying to make a website that does exactly that. It will, however, give you a springboard to explore all those other things the web can do nowadays.

It will help to be aware and critical when visiting websites. Does a website let you do what you want to quickly? Does it make you angry? Does it look good? Why do you think it does this? This will help you to steal good ideas and avoid the mistakes of others.

## 1.2 Design Before Building

The most useful thing that you can do before setting out to create your website is decide what it will be about. Is there a cause you're passionate about, a project you did, or a blog you want to start? If you're struggling for ideas, a personal website is a good place to start. This is like an online CV or a LinkedIn page with a little more personality.

Once you know what you're trying to convey, it can help to think a little bit about what you want it to look like. This will help to keep you focused when creating it, and also give you some real goals to reach when learning how.

You don't need sophisticated tools to do this, pen and paper will do just fine. Sketch out a simple idea and focus on the big details, such as what sections you want, if you want multiple pages and what images could work.

Over the course of this workshop, I will be building a website about web design and showing you how I do it. Here's a design a sketched out design of this.

![](markdown_images/intro-design.png)

I'll explain the bits and pieces as we make them, but it's a good place to start. I've taken cues from websites I like, such as this concept of a "hero", which is a section at the start of a website with large text and a colourful background of some sort. Below, you'll see MDN (a website we will return to) has the same.

![](markdown_images/intro-mdn.jpeg)

- Looking for inspiration? Check out [Awwwards](https://www.awwwards.com/) for some examples of websites that push the boundary of design.
- There are lots of tools that let you design in much finer detail. [Figma](https://www.figma.com/) is one such tool, and is free!

---

**Task**: Decide on a topic for a website you want to create.  
**Task**: Sketch out a rough design of the website, on whatever tool you think suitable.

---

Now that we've thought a little bit about our goals, we can actually start building something. Let's move onto the first language of the web: *HTML*.

# 2. HTML: Displaying Informations

## 2.1 Setting Up

A website is split up into different components that describe the information that is given to you, what that information looks like, and how it can be interactive and dynamic. We do this through *three different languages*: HTML, CSS and JavaScript respectively. Today we will be focusing on displaying that information through *HTML*.

Previously we asked you to set up a text editor (check out the setup instructions for details on this). A text editor does exactly what its name describes: gives you the ability to edit text.

Firstly, we want a place for our website to live on our computer. A website is made up of multiple files, so it makes sense for it to have its own folder. Make this folder anywhere on your computer, and give it a name. I'm going to call mine `web-design-website`. After making the folder, I can open it in the text editor. In Visual Studio Code, this is done through `File>Open`.

In this folder, you want to create a new file. Call it `index.html`. We give it the name `index` by convention, and give it the extension `.html` because it is an HTML file.

![](markdown_images/html-empty-project.jpeg)

To preview this, open your `index.html` file in any _modern_ web browser (such as Google Chrome). Usually double clicking on the `index.html` file does this (`File>Open` works as well). You should see... nothing!

![](markdown_images/html-empty-website.jpeg)

This is just your browser showing you an empty website. We'll soon fill it with content.

---

**Task**: Get a text editor/JSBin ready  
**Task**: Open a new folder  
**Task**: Make an empty `index.html` file  
**Task**: Open it in your web browser  

---

## 2.2 Writing your first HTML

### An Aside About Syntax

We said that we were going to learn how to present information. At first, it ain't gonna be pretty.

HTML is the language that is used to do this, it stands for _HyperText Markup Language_. This basically means that it takes ordinary text and gives it meaning by tagging certain parts of it. For every single website you visit, the first thing it does is load an HTML file. Here is an example:

```html
<element attribute="value">
    <nestedelement>
        Text
    </nestedelement>
    <selfclosingelement />
</element>
```

You can put the syntax down to a few core aspects:

- There are tags that you write out using the `<` and `>` signs, which open up an element.*   Everything you put in-between that tag and the closing tag is inside that element, and you can even put more elements within it.
- To close an element, just end it with the closing tag by putting a forward slash before its name within the tag.
- Some elements are _self closing_, and you can't put anything inside them. They have a forward slash before the `>` sign in the tag.
- Finally, there are attributes that you can set within elements. These are set using the `attribute="value"` notation within the tag, after its name. These will come to mean more later on

What was written above actually isn't valid HTML, there is a limited set of elements that exist and they represent different parts of a website - for example there is an element for images and there is one for headings.

### Adding Content to the Screen

Now that we are empowered by what HTML looks like, let's edit our `index.html` file that we made earlier, adding the following HTML code:

```html
<!DOCTYPE html>
<html>
    <body>
        <h1>Web Design Tips</h1>
    </body>
</html>
```

Once you've added this content, **save it**, then, **refresh your browser**. This is crucial for you to see your changes. Everything going well, you should see...

![](markdown_images/html-heading.jpeg)

What's going on with this code you just put in? Stepping through it line by line:

1. This is a "doctype". It betrays the syntax we just introduced, but it lets the browser know that you are writing HTML
2. This is the first tag of the document, the `html` tag. All of our HTML goes in here
3. The `body` tag opens, inside this tag is everything that the user can _see_
4. This is a complete `h1` tag, with some text inside it. `h1` means the top level heading of a document - there are `h2, h3, h4, h5, h6` as well.
5. Closing of the body tag (never forget to close!)
6. Closing of the HTML tag

**Note**: If you want to find out about a tag, or try to do something you don't know how to do, a good place to start is by searching. Google will likely find you the answers you're looking for. [MDN Web Docs](https://developer.mozilla.org/) is also a fantastic resource for all things web.

---

**Task**: Add this content to your `index.html` file.
**Task**: Give your website a heading that is more fitting for your content.

---

## 2.3 Some Basic Tags

### Paragraphs

The `<p>` tag is where you put main text. Where you'd usually put two line breaks in your word processor of choice, you're separating paragraphs - this is how you separate paragraphs in HTML

```html
<p>Lorem ipsum dolor sit amet, sonet audiam theophrastus ex vim, mea ei enim liberavisse interpretaris. Ei minimum deserunt vim, quodsi philosophia ea vix. An laudem integre sapientem mei. Legere adipisci mea et, duo dicunt invenire et, mel ad veniam iriure aperiam.</p>

<p>Vel ei ferri praesent. Per id exerci civibus, no commodo numquam ocurreret vim. Ex vim possim everti, mel insolens laboramus ex, mei verear integre eu. Eu epicurei delicatissimi pri, alterum feugiat pertinax ut qui. Ex nec omnes accommodare, eum ut regione incorrupte. An docendi reformidans vix.</p>
```

---

**Task**: Write a few paragraphs on something. For example: introducing yourself and why your website is worth reading. Add some extra `h1-6` tags to give it some structure.

---

### Adding Flair

Where would we be if we couldn't _emphasise_ or **scream** out text? HTML let's you do this with the `<em>` (emphasis: italics) and `<strong>` (strong: bold) tags.

```html
This is some text that I am <em>emphasising</em>. I am also making it <strong>strong</strong>.
```

---

**Task**: Let your reader know what is important by emphasising and strengthening some of your content.
**Challenge**: There are many more tags you can use. Can you find out what `<small>`, `<ul>`, `<ol>` and `<table>` are for, and put them to use?

---

## 2.4 Links

HTML and the web was so exciting when it was first made because you could link to other pages - suddenly everything was interconnected. This is done through the humble `<a>` tag (for anchor). It specifies where to link to with the `href` attribute.

```html
This is a link to <a href="https://google.com">Google</a>.
```

**A word of warning about URLS in html.** When you supply a URL to a web browser (e.g. `https://google.com`), it is resolved in different ways. What this means is that it won't be interpreted exactly as you write it.

Say that you have a page on `http://mywebsite.com/my/page.html` and there are links to it. There are three different modes:

- The URL is full and absolute, eg: `https://google.com`. This will visit https://google.com as intended
- The URL has a slash at the beginning of it, eg: `/other/page.html` will go to `mywebsite.com/other/page.html`
- The URL has no slash at the beginning and is fully relative, eg: `page2.html` will go to `mywebsite.com/my/page2.html`

This means that you cannot just type `google.com` to link to `https://google.com`. You _have_ to type out the full URL.

---

**Task**: Add some links to your favourite websites
**Challenge**: Want your website to have more pages? Try adding another page, (e.g. `mypage.html`), in the same folder as `index.html` and linking to it.

---

## 2.5 Images

### Finding Images

Images help to convey the information you want to. They're easy enough to put in your website. The hardest part is usually finding or creating the right images to use. Unfortunately, you can't legally take most images you see on the web and put it into your website (although you can technically).

However, there are websites that let you access images you can access legally. [Pexels](https://pexels.com) is one such website. You can search for images, download them and include them in your website with a clear conscience. For example, after searching for "laptop", I found [this image](). To get it ready for my website, I want to

- Download the image at an appropriate size (images that are too big slow your website down). 1200x768 looks like a good size.
- Put the file in my website folder.
- Give it a sensible name (such as `desk.jpeg`). 

![](markdown_images/html-image-download.jpeg)

---

**Task**: Find at least one image to put on your website.

---

### Using Images

**Note**: All of the rules about URLs specified earlier apply here.

You use the `<img>` tag to tell the browser to display an image, and the `src` attribute to specify where that image is on the web. Optionally, you can use the `alt` attribute to _describe_ the image. This is useful for visually impaired users and search engines who both have a hard time of telling what is in the image.

```html
<img src="desk.jpeg" alt="A desk" />
```

![](markdown_images/html-image-embed.jpeg)

It's still quite oversized! We'll go over how to make these images behave properly in terms of sizing, later.

---

**Task**: Add your image(s) to your website.

---

## 2.6 Embedding Other Media

You may want to embed other kinds of media, such as video. There _is_ a `<video>` tag but sourcing and hosting video is rather difficult. Fortunately, popular hosting websites like [YouTube](https://youtube.com).

Embedding media from these websites is surprisingly easy, they usually have an embed button tucked away _somewhere_, which gives you a snippet of HTML code. For example, on YouTube it's inside the "share" box.

![](markdown_images/html-youtube-embed.jpeg)

It gives me an HTML snippet, which I can put in my website.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/Fi2PPHEqXsw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

![](markdown_images/html-video.jpeg)

Lots of websites allow for this, such as Twitter and Facebook.

---

**Task**: Embed a video into your website.
**Challenge**: Try embedding another kind of media, such as a tweet or Facebook like button.

---

## 2.7 The `<head>` Tag

Earlier, we introduced you to the `body` tag. This is everything the user can _see on the page_. What about other things? You'll notice this ugly "index.html" in your tab bar. Other websites have a useful description of what they are.

![](markdown_images/html-no-title.png)

We can change this, but not by putting anything on the page. This is done by adding a `head` tag before your body tag, and putting a `title` tag in that to set the _title_ of the page.

```html
<html>
    <head>
        <title>Web Design Tips</title>
    </head>
    <body>
      ...
    </body>
</html>
```

![](markdown_images/html-title.png)

Much better!

---

**Task**: Give your website a title in the `head` tag.

---

This is all we have to say on HTML for now. You can see the finished result [in the 02-html folder of the examples repo](../02-html).

This website has content, but it doesn't look very good. Next we'll be focusing on how to add styles with CSS to make it visually appealing.

# 3. CSS: Adding Style

TBC

## 3.1 Writing Styles with CSS

## 3.2 Making Sense of Colours and Fonts

## 3.3 Layout

## 3.4 Further Reading

# 4. JavaScript: Make it Interactive

TBC

# 5. Publishing your website

TBC
