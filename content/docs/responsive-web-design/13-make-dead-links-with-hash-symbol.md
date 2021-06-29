<!--
title=Make Dead Links Using the Hash Symbol
code=<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
-->


Sometimes you want to add `a` elements to your website before you know where they will link.

This is also handy when you're changing the behavior of a link using `JavaScript`, which we'll learn about later.

---

### Challenge

The current value of the `href` attribute is a link that points to "https://freecatphotoapp.com". Replace the `href` attribute value with a `#`, also known as a hash symbol, to create a dead link.

For example: `href="#"`

- [ ] Your `a` element should be a dead link with the value of the `href` attribute set to `#` <!--hasAttr("a","href","#")-->