---
layout: default-nometa
title: All Articles
heading: All articles
date: 28th April 2015
published: true
format: markdown

---

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
                            <p>{{ post.content | strip_html | truncatewords: 48 }}</p>
                        </div>

                    </a>
                </li>
            {% endunless %}
            {% endfor %}
            <a class="color-purple view-all" href="/notes">View other notes &rarr;</a>
        </ul>
    {% endfor %}

</div>
