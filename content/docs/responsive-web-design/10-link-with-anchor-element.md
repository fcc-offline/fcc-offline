<!--
title=Link to External Pages with Anchor Elements
code=<h2>CatPhotoApp</h2>\n<main>\n\n<img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back.">\n<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>\n<p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>\n</main>
-->


You can use `a` (anchor) elements to link to content outside of your web page.

`a` elements need a destination web address called an `href` attribute. They also need anchor text. Here's an example:

```html
<a href="https://freecodecamp.org">this links to freecodecamp.org</a>
```

Then your browser will display the text `this links to freecodecamp.org` as a link you can click. And that link will take you to the web address `https://www.freecodecamp.org`.

---

### Challenge

Create an `a` element that links to `https://freecatphotoapp.com` and has `cat photos` as its anchor text.

- [ ] Your `a` element should have the anchor text of "cat photos" <!--innerText("a")==="cat photos"-->
- [ ] You need the `a` element that links to https://freecatphotoapp.com <!--hasAttr("a", "href", "https://freecatphotoapp.com")-->
- [ ] Your a element should have a closing tag  <!--countHTML("/a&gt;")===1-->