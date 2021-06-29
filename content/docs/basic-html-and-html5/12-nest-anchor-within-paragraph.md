<!--
title=Nest an Anchor Element within a Paragraph
code=<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
-->


You can nest links within other text elements.

```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```

Let's break down the example: Normal text is wrapped in the p element:
`<p> Here's a ... for you to follow. </p>` Next is the anchor element `<a>` (which requires a closing tag `</a>`):
`<a> ... </a>` `target` is an anchor tag attribute that specifies where to open the link and the value `"_blank"` specifies to open the link in a new tab `href` is an anchor tag attribute that contains the URL address of the link:
`<a href="http://freecodecamp.org"> ... </a>` The text, "link to freecodecamp.org", within the `a` element called `anchor text`, will display a link to click:
`<a href=" ... ">link to freecodecamp.org</a>` The final output of the example will look like this:

Here's a [link to freecodecamp.org](http://freecodecamp.org/) for you to follow.

---

### Challenge

Now nest the existing `a` element within a new `p` element (just after the existing `main` element). The new paragraph should have text that says "View more cat photos", where "cat photos" is a link, and the rest of the text is plain text.

- [ ] You should have an `a` element that links to "https://freecatphotoapp.com" <!--hasAttr("a","href","https://freecatphotoapp.com")-->
- [ ] Your `a` element should have the anchor text of `cat photos` <!--innerText("a","cat photos")-->
- [ ] You should create a new `p` element around your `a` element. There should be at least 3 total `p` tags in your HTML code <!--count("p")===3-->
- [ ] Your a element should be nested within your new p element <!--count("p a")===1-->
- [ ] Your p element should have the text "View more " (with a space after it) <!--hasText("View more ")-->
- [ ] Your a element should not have the text "View more" <!--innerText("a")!=="View more "-->
- [ ] Each of your p elements should have a closing tag <!--countHTML("&lt;/p")===count("p")-->
- [ ] Each of your a elements should have a closing tag <!--countHTML("&lt;/a")===count("a")-->