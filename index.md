---
layout: landing
title: Graham Macphee
heading: Graham Macphee is&nbsp;a&nbsp;designer.
date: 28th April 2015
published: true
format: markdown
---

I tend to think about puppies, pizza and equality. I enjoy being creative: writing, taking photos, playing ukulele and singing. I'm quiet and thoughtful, and like nature and quiet nights.

I am a designer and front-end developer with 4 years industry experience working with startups around the world; currently with [Snipandshare](http://snipandshare.com). Previously I worked as a writer and review manager for UltraLinx, and other online publications.

<!-- If you would like to discuss a role at your company, please [email me](mailto:hi@grahammacphee.co.uk) to arrange a call. -->

This is where I publish my thoughts on technology, psychology, politics and more. You can see my most recent articles below.

***

<ul class="postlist">
  {% for post in site.posts limit:6 %}
    {% unless post.private %}
    <li class="postitem">
      <a href="{{ post.url }}">{{ post.title }} <span class="postitemmeta">{{ post.date | date_to_long_string }}</span></a>
    </li>
    {% endunless %}
  {% endfor %}
  <li class="postitem">
    <a href="http://thinks.grahammacphee.co.uk">My Other Blog <span class="postitemmeta">Informal thoughts.</span></a>
  </li>
  <li class="postitem">
    <a href="http://medium.com/@gmph">My Medium Posts <span class="postitemmeta">Anything else.</span></a>
  </li>
</ul>

***

You can email me at [hi@gmph.co](mailto:hi@gmph.co?subject=&body=Hey%20Graham%2C%0A%0AI%27d%20really%20like%20to%20talk%20to%20you%20about...) to say hello. I love talking about design. I'm available for design consultancy. [Google me](http://google.co.uk/search?q=graham+macphee+designer).
