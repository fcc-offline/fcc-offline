<!--
title=Add a Submit Button to a Form
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
</main>
-->


Let's add a `submit` button to your form. Clicking this button will send the data from your form to the URL you specified with your form's `action` attribute.

Here's an example submit button:

```html
<button type="submit">this button submits the form</button>
```

---

### Challenge

Add a button as the last element of your `form` element with a type of `submit`, and `Submit` as its text.

- [ ] Your `form` should have a `button` inside it <!--count("form button")===1-->
- [ ] Your submit `button` should have the attribute `type` set to `submit` <!--hasAttr("form button", "type","submit")-->
- [ ] Your submit `button` should only have the text `Submit` <!--innerText("form button", "Submit")-->
- [ ] Your `button` element should have a closing tag <!--countHTML("&lt;/button")===1-->