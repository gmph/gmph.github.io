---
layout: landing
title: Graham Macphee
heading: Graham Macphee
date: 28th April 2015
published: true
format: markdown
---

I tend to think about puppies, pizza and equality. I enjoy being creative: design, photography, writing, playing ukulele and singing. I'm quiet and thoughtful. I like nature and quiet nights. You can get in touch with me by [email](mailto:hi@gmph.co).

<div class="postview">

    <h5 class="postviewtitle">Articles</h5>

    {% assign sorted_cats = site.categories | sort %}
    {% for category in sorted_cats %}
        {% assign sorted_posts = category[1] | reversed %}
        {% if forloop.index0 == 0 %}
            {% assign active_class = "active" %}
        {% else %}
            {% assign active_class = "after" %}
        {% endif %}
        <ul class="postlist {{ category[0] }} {{ active_class }}" data-id="{{ forloop.index0 }}">
            {% for post in sorted_posts limit:2 %}
            {% unless post.private %}
            <li class="postitem">

                {% if post.redirect %}
                    <a href="{{ post.redirect }}" target="_blank">
                {% else %}
                    <a href="{{ post.url }}">
                {% endif %}

                        <h2><span class="postitemtitle">{{ post.title }}</span> <span class="postitemmeta">{{ post.date | date: "%B %-d, %Y" }}</span></h2>

                        <div class="positemdescription">
                            <p>{{ post.content | strip_html | truncatewords: 36 }}</p>
                        </div>

                    </a>
                </li>
            {% endunless %}
            {% endfor %}
            <a class="color-purple view-all" href="/articles">View all articles &rarr;</a>
        </ul>
    {% endfor %}

</div>

<h5>Recent work</h5>

<div class="designs-container"></div>

I am a designer with 4 years industry experience working for startups around the world; currently at [Yavi](http://yavi.co) building delightful tools for workers. Previously I worked as a writer and review manager for UltraLinx, and for other online publications.

<!-- If you would like to discuss a role at your company, please [email me](mailto:hi@grahammacphee.co.uk) to arrange a call. -->

<a class="color-purple view-all" href="/portfolio">View portfolio &rarr;</a>

<h5>More about me</h5>

I'm creative. You can see my photography on [Instagram](http://instagram.com/gmph) and illustrations and prints on [Depop](http://depop.com/gmph).

<p>
    <div class="song-container most-listened">
        <div class="song-info">
            <div class="song-description">Loading most played song...</div>
        </div>
    </div>
    <div class="location-container latest-trip">
        <div class="location-info">
            <div class="location-description">Loading most recent trip...</div>
        </div>
    </div>
</p>

You can email me at [hi@gmph.co](mailto:hi@gmph.co) to say hello – I love talking about design. You can read more about this website in its [colophon](/colophon).
