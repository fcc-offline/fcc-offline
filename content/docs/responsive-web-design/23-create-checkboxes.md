<!--
title=Create a Set of Checkboxes
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
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>
-->

Forms commonly use checkboxes for questions that may have more than one answer.

Checkboxes are a type of `input`.

Each of your checkboxes can be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the checkbox input with the `label` element surrounding it.

All related checkbox inputs should have the same `name` attribute.

It is considered best practice to explicitly define the relationship between a checkbox `input` and its corresponding `label` by setting the `for` attribute on the `label` element to match the `id` attribute of the associated `input` element.

Here's an example of a checkbox:


```html
<label for="loving">
    <input id="loving" type="checkbox" name="personality"> Loving
</label>
```

---

### Challenge

Add to your form a set of three checkboxes. Each checkbox should be nested within its own `label` element. All three should share the `name` attribute of `personality`.

- [ ] Your page should have three checkbox elements <!--count("input[type=checkbox]")===3-->
- [ ] Each of your three checkbox elements should be nested in its own label element  <!--count("label input[type=checkbox]")===3-->
- [ ] Make sure each of your `label` elements has a closing tag  <!--count("label")===countHTML("&lt;/label")-->
- [ ] Your checkboxes should be given the `name` attribute of `personality` <!--count("input[type=checkbox][name=personality]")===count("input[type=checkbox]")-->
- [ ] Each of your checkboxes should be added within the form tag <!--count("form input[type=checkbox]")===3-->