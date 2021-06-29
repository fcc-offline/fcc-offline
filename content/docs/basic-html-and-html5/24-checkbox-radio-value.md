<!--
title=Use the value attribute with Radio Buttons and Checkboxes
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
    <label><input type="radio" name="indoor-outdoor"> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>

-->

When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type `radio` and `checkbox` report their values from the `value` attribute.

For example:

```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```

Here, you have two `radio` inputs. When the user submits the form with the `indoor` option selected, the form data will include the line: `indoor-outdoor=indoor`. This is from the `name` and `value` attributes of the `indoor` input.

If you omit the `value` attribute, the submitted form data uses the default value, which is `on`. In this scenario, if the user clicked the "indoor" option and submitted the form, the resulting form data would be `indoor-outdoor=on`, which is not useful. So the `value` attribute needs to be set to something to identify the option.

---

### Challenge

Give each of the `radio` and `checkbox` inputs the `value` attribute. Use the input label text, in lowercase, as the value for the attribute.

- [ ] One of your radio buttons should have the `value` attribute of `indoor` <!--count("input[type=radio][value=indoor]")===1-->
- [ ] One of your radio buttons should have the `value` attribute of `outdoor` <!--count("input[type=radio][value=outdoor]")===1-->
- [ ] One of your checkboxes should have the `value` attribute of `loving` <!--count("input[type=checkbox][value=loving]")===1-->
- [ ] One of your checkboxes should have the `value` attribute of `lazy` <!--count("input[type=checkbox][value=lazy]")===1-->
- [ ] One of your checkboxes should have the `value` attribute of `energetic` <!--count("input[type=checkbox][value=energetic]")===1-->