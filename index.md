---
layout: landing
title: Graham Macphee
heading: Graham Macphee
date: 28th April 2015
published: true
format: markdown
---

I tend to think about puppies, pizza and equality. I enjoy being creative: writing, taking photos, playing ukulele and singing. I'm quiet and thoughtful. I like nature and quiet nights.

I am a designer with 4 years industry experience working for startups around the world; currently at [Yavi](http://yavi.co) building delightful tools for workers. Previously I worked as a writer and review manager for UltraLinx, and for other online publications.

<!-- If you would like to discuss a role at your company, please [email me](mailto:hi@grahammacphee.co.uk) to arrange a call. -->

This is where I publish my thoughts on technology, psychology, politics and more. You can see my most recent articles below.

<br/>

<div class="postview">

    {% assign sorted_cats = site.categories | sort %}
    {% for category in sorted_cats %}
        {% assign sorted_posts = category[1] | reversed %}
        {% if forloop.index0 == 0 %}
            {% assign active_class = "active" %}
        {% else %}
            {% assign active_class = "after" %}
        {% endif %}
        <ul class="postlist {{ category[0] }} {{ active_class }}" data-id="{{ forloop.index0 }}">
            {% for post in sorted_posts %}
            {% unless post.private %}
            <li class="postitem">

                {% if post.redirect %}
                    <a href="{{ post.redirect }}" target="_blank">
                {% else %}
                    <a href="{{ post.url }}">
                {% endif %}

                        <h2><span class="postitemtitle">{{ post.title }}</span> <span class="postitemmeta">{{ post.date | date: "%B %-d, %Y" }}</span></h2>

                        <div class="positemdescription">
                            <p>{{ post.content | strip_html | truncatewords:55 }}</p>
                        </div>

                    </a>
                </li>
            {% endunless %}
            {% endfor %}
        </ul>
    {% endfor %}

</div>


You can email me at [hi@gmph.co](mailto:hi@gmph.co?subject=&body=Hey%20Graham%2C%0A%0AI%27d%20really%20like%20to%20talk%20to%20you%20about...) to say hello – I love talking about design. You can read more about this website in its [colophon]({{ site.baseurl }}/colophon).
