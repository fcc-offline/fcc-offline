<!--
title=Add Placeholder Text to a Text Field
code=<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="{{public(images/fcc-relaxing-cat.jpg)}}" alt="A cute orange cat lying on its back."></a>

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
  <input type="text">
</main>
-->


Placeholder text is what is displayed in your `input` element before your user has inputted anything.

You can create placeholder text like so:

```html
<input type="text" placeholder="this is placeholder text">
```

Note: Remember that `input` elements are self-closing.

---

### Challenge

Set the `placeholder` value of your text input to `cat photo URL`.

- [ ] You should add a `placeholder` attribute to the existing text `input` element <!--hasAttr("input","placeholder")-->
- [ ] You should set the value of your `placeholder` attribute to `cat photo URL` <!--hasAttr("input","placeholder","cat photo URL")-->
- [ ] The finished input element should not have a closing tag <!--countHTML("&lt;/input")===0-->
- [ ] The finished input element should have valid syntax  <!--hasAttr("input","placeholder")&&hasAttr("input","type")-->