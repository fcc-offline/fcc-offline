<!--
title=Create a Form Element
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
  <input type="text" placeholder="cat photo URL">
</main>
-->


You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your `form` element.

For example:

```html
<form action="/url-where-you-want-to-submit-form-data"></form>
```

---

### Challenge

Nest your text field inside a `form` element, and add the `action="https://freecatphotoapp.com/submit-cat-photo"` attribute to the form element.

- [ ] Your text `input` element should be nested within a `form` element <!--count("form input")===1-->
- [ ] Your form should have an `action` attribute which is set to `https://freecatphotoapp.com/submit-cat-photo`  <!--hasAttr("form","action","https://freecatphotoapp.com/submit-cat-photo")-->
- [ ] Your form element should have well-formed open and close tags <!--count("form")===1-->