<!--
title=Create a Bulleted Unordered List
code=<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>
-->


HTML has a special element for creating unordered lists, or bullet point style lists.

Unordered lists start with an opening `<ul>` element, followed by any number of `<li>` elements. Finally, unordered lists close with a `</ul>`

For example:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

would create a bullet point style list of "milk" and "cheese".
---

### Challenge

Remove the last two `p` elements and create an unordered list of three things that cats love at the bottom of the page.

- [ ] Create a `ul` element <!--count("ul")===1-->
- [ ] You should have three li elements within your ul element <!--count("li")===3-->
- [ ] Your ul element should have a closing tag <!--count("ul")===countHTML("&lt;/ul")-->
- [ ] Your li elements should have closing tags <!--count("li")===countHTML("&lt;/li")-->
- [ ] Your li elements should not contain an empty string or only white-space <!--innerText("li")!==""&&innerText("li")!==" "-->