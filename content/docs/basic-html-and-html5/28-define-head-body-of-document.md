<!--
title=Define the Head and Body of an HTML Document
as_frame=true
code=<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>
-->

You can add another level of organization in your HTML document within the html tags with the head and body elements. Any markup with information about your page would go into the head tag. Then any markup with the content of the page (what displays for a user) would go into the body tag.

Metadata elements, such as link, meta, title, and style, typically go inside the head element.

Here's an example of a page's layout:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

---

### Challenge

Edit the markup so there's a `head` and a `body`. The `head` element should only include the `title`, and the `body` element should only include the `h1` and `p`.

- [ ] There should be only one `head` element on the page <!--docCountHTML("&lt;head")===1-->
- [ ] There should be only one `body` element on the page <!--docCountHTML("&lt;body")===1-->
- [ ] The `head` element should be a child of the `html` element <!--docElementOrdersString("&lt;html","&lt;head")-->
- [ ] The `body` element should be a child of the `html` element <!--docElementOrdersString("&lt;html","&lt;body")-->
- [ ] The `head` element should wrap around the `title` element <!--docElementOrdersString("&lt;head","&lt;title")-->
- [ ] The `body` element should wrap around both the `h1` and `p` elements <!--docElementOrdersString("&lt;body","&lt;h1") && docElementOrdersString("&lt;body","&lt;p")-->