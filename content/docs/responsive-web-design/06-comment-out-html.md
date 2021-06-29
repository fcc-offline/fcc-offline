<!--
title=Comment out HTML
code=<h1>Hello</h1>\n<h2>CatPhotoApp</h2>\n<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->


Remember that in order to start a comment, you need to use `<!--` and to end a comment, you need to use `-->`

Here you'll need to end the comment before your `h2` element begins.

---
### Challenge

Comment out your `h1` element and your `p` element, but not your `h2` element.

- [ ] Your `h1` element should be commented out so that it is not visible on the page <!--!has("h1")-->
- [ ] Your `h2` element should not be commented out so that it is visible on the page <!--has("h2")-->
- [ ] Your `p` element should be commented out so that it is not visible on the page  <!--!has("p")-->
- [ ] Each of your comments should be closed with `-->` <!--countHTML("--&gt;")-->
- [ ] You should not change the order of the `h1`, `h2` or `p` in the code <!--elementOrdersHTML("h1","h2","p")-->
