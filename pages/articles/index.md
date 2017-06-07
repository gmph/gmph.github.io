---
layout: default-nometa
title: All Articles
heading: All articles
date: 28th April 2015
published: true
format: markdown
permalink: /articles
---

<div data-id="{{ forloop.index0 }}">
    {% for post in site.posts %}
    {% if post.private != true %}
    {% assign counter=counter | plus:1 %}
    <div>
        {% if post.redirect %}
            <a href="{{ post.redirect }}" target="\_blank">
        {% else %}
            <a href="{{ post.url }}">
        {% endif %}
                <h2>{{ post.title }}</h2> 
                <h5 class="postitemmeta">{{ post.date | date: "%B %-d, %Y" }}</h5>
                <p>{{ post.content | strip_html | truncatewords: 56 }}</p>
            </a>
        </div>
        <br>
        <br>
        <br>
    {% endif %}
    {% endfor %}
</div>