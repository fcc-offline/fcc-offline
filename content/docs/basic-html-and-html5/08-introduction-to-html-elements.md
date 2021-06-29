<!--
title=Introduction to HTML5 Elements
code=<h2>CatPhotoApp</h2>\n<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

-->


HTML5 introduces more descriptive HTML tags. These include main, header, footer, nav, video, article, section and others.

These tags give a descriptive structure to your HTML, make your HTML easier to read, and help with Search Engine Optimization (SEO) and accessibility. The main HTML5 tag helps search engines and other developers find the main content of your page.

Example usage, a main element with two child elements nested inside it:

```html
<main>
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```

**Note**: Many of the new HTML5 tags and their benefits are covered in the Applied Accessibility section.

---

### Challenge

Create a second `p` element after the existing `p` element with the following kitty ipsum text: `Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.`

Then, create a main element and nest the two p elements inside the main element.

- [ ] You should have 2 `p` elements <!--count("p")===2-->
- [ ] Each of your `p` elements should have a closing tag <!--countHTML("&lt;/p&gt;")===2-->
- [ ] Your new `p` element should contain the first few words of the provided additional kitty ipsum text <!-- countHTML("p&gt;purr jump")===1 -->
- [ ] Your new `p` element should be right after the given `p` element <!-- elementOrdersString("p&gt;kitty ipsum","p&gt;purr jump") -->
- [ ] Your code should have one `main` element <!--count("main")===1-->
- [ ] The `main` element should have two paragraph elements as children <!--count("main&gt;p")===2-->
- [ ] The opening main tag should come before the first paragraph tag <!--elementOrdersHTML("main","p")-->
- [ ] The closing main tag should come after the second closing paragraph tag <!-- elementOrdersString("/p","/main") -->