<!--
title=Turn an Image into a Link
code=<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
-->


You can make elements into links by nesting them within an `a` element.

Nest your image within an `a` element. Here's an example:

```html
<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
```

Remember to use `#` as your `a` element's `href` property in order to turn it into a dead link.

---

### Challenge

Place the existing image element within an `a` (anchor) element.

Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.

- [ ] The existing img element should be nested within an a element <!--count("a img")===1-->
- [ ] Your `a` element should be a dead link with a href attribute set to `#` <!--hasAttr("a","href","#")-->
- [ ] Each of your a elements should have a closing tag <!--count("a")===countHTML("&lt;a")-->