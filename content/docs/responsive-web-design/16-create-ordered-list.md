<!--
title=Create an Ordered List
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

</main>
-->


HTML has another special element for creating ordered lists, or numbered lists.

Ordered lists start with an opening <ol> element, followed by any number of <li> elements. Finally, ordered lists are closed with the </ol> tag.

For example:

```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```

would create a numbered list of "Garfield" and "Sylvester".


---

### Challenge

Create an ordered list of the top 3 things cats hate the most.

- [ ] You should have an ordered list for "Top 3 things cats hate:" <!--hasText("Top 3 things cats hate:")-->
- [ ] You should have an unordered list for "Things cats love:" <!--hasText("Things cats love:")-->
- [ ] You should have only one ul element <!--count("ul")===1-->
- [ ] You should have only one ol element <!--count("ol")===1-->
- [ ] You should have three li elements within your ul element <!--count("ul li")===3-->
- [ ] You should have three li elements within your ol element <!--count("ol li")===3-->
- [ ] Your ul element should have a closing tag <!--count("ul")===countHTML("&lt;/ul")-->
- [ ] Your ol element should have a closing tag <!--count("ol")===countHTML("&lt;/ol")-->
- [ ] Your li element should have a closing tag <!--count("li")===countHTML("&lt;/li")-->
- [ ] The li elements in your unordered list should not be empty <!--!isEmpty("ul li",true)-->
- [ ] The li elements in your ordered list should not be empty <!--!isEmpty("ol li",true)-->