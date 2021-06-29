<!--
title=Change the Color of Text
code=<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
-->

Now let's change the color of some of our text.

We can do this by changing the `style` of your `h2` element.

The property that is responsible for the color of an element's text is the `color` style property.

Here's how you would set your h2 element's text color to blue:

`<h2 style="color: blue;">CatPhotoApp</h2>`

Note that it is a good practice to end inline style declarations with a semicolon `;` .

---
### Challenge

Change your `h2` element's style so that its text color is red.

- [ ] Your h2 element should have a style declaration <!--hasAttr("h2", "style")-->
- [ ] Your h2 element should have color set to red <!--hasAttrContains("h2", "style", "color:red")-->
- [ ] Your style declaration should end with a semicolon `;` <!--hasAttr("h2", "style", "color:red;")-->