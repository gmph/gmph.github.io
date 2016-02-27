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

<br/>

##### Recent Articles

<ul class="postlist">
    {% for post in site.posts limit:20 %}
        {% unless post.private %}
            <li class="postitem">

            {% if post.redirect %}
                <a href="{{ post.redirect }}" target="_blank">
            {% else %}
                <a href="{{ post.url }}">
            {% endif %}

                    <span class="postitemtitle">{{ post.title }}</span> <span class="postitemmeta">{{ post.date | date: "%B %-d, %Y" }}</span>

                    <div class="positemdescription">

                    <p>{{ post.content | strip_html | truncatewords:55 }}</p></div>

                </a>
            </li>
        {% endunless %}
    {% endfor %}
</ul>


You can email me at [hi@gmph.co](mailto:hi@gmph.co?subject=&body=Hey%20Graham%2C%0A%0AI%27d%20really%20like%20to%20talk%20to%20you%20about...) to say hello – I love talking about design. You can read more about this website in its [colophon]({{ site.baseurl }}/colophon).
