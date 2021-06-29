<!--
title=Link to Link to Internal Sections of a Page with Anchor Elements
code=<h2>CatPhotoApp</h2>
<main>
  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
  <img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back.">
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>
</main>
<footer>Copyright Cat Photo App</footer>
-->


`a` (anchor) elements can also be used to create internal links to jump to different sections within a webpage.

To create an internal link, you assign a link's `href` attribute to a hash symbol `#` plus the value of the `id` attribute for the element that you want to internally link to, usually further down the page. You then need to add the same `id `attribute to the element you are linking to. An `id` is an attribute that uniquely describes an element.

Below is an example of an internal anchor link and its target element:

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

When users click the Contacts link, they'll be taken to the section of the webpage with the **Contacts** header element.

---

### Challenge

Change your external link to an internal link by changing the href attribute to `#footer` and the text from "cat photos" to "Jump to Bottom".

Remove the `target="_blank"` attribute from the anchor tag since this causes the linked document to open in a new window tab.

Then add an `id` attribute with a value of "footer" to the `<footer>` element at the bottom of the page.

- [ ] There should be only one `a` anchor tag on your page <!-- count("a")===1 -->
- [ ] There should be only one `footer` tag on your page <!-- count("footer")===1 -->
- [ ] The `a` tag should have a `href` attribute set to `#footer` <!-- hasAttr("a","href","#footer") -->
- [ ] The `a` tag should not have a target attribute <!-- !hasAttr("a","target") -->
- [ ] The `a` text should be "Jump to Bottom" <!-- innerText("a", true)==="jump to bottom" -->
- [ ] The footer tag should have an id attribute set to "footer" <!-- hasAttr("footer","id","footer") -->