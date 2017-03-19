---
layout: landing
title: Graham Macphee
heading: Graham Macphee
date: 28th April 2015
published: true
format: markdown
---

<div class="gmph-box gmph-box-angled purple">
<img class="landing-profile-picture" src="/res/img/graham.png" />
<h1 class="landing-title">{{ page.heading }}</h1>

<p>I'm a designer from Edinburgh, Scotland. I tend to think about puppies, pizza and equality. I enjoy being creative: design, photography, writing, playing ukulele and singing. I'm quiet and thoughtful. I like nature and quiet nights.</p>

<p>I'm learning about the psychology of interface design and championing design at a small startup in Edinburgh. You can see some of what I'm thinking in my recent articles.</p>

<p>You can email me at <a href="mailto:hi@gmph.co">hi@gmph.co</a> to say hello.</p>

</div>

<div class="postview gmph-box gmph-box-angled turquoise">

    <h5 class="postviewtitle color-grey">Articles</h5>

    {% assign counter = 0 %}
    {% assign maxPostCount = 2 %}
    {% assign sorted_cats = site.categories | sort %}
    {% for category in sorted_cats %}
        {% assign sorted_posts = category[1] | reversed %}
        <ul class="postlist {{ category[0] }} active" data-id="{{ forloop.index0 }}">
            {% for post in sorted_posts %}
            {% if post.private != true and counter < maxPostCount %}
            {% assign counter=counter | plus:1 %}
            <li class="postitem">
                {% if post.redirect %}
                    <a href="{{ post.redirect }}" target="\_blank">
                {% else %}
                    <a href="{{ post.url }}">
                {% endif %}
                        <h2>
                            <span class="postitemtitle">{{ post.title }}</span>
                        <!-- <span class="postitemmeta">{{ post.date | date: "%B %-d, %Y" }}</span> -->
                        </h2>

                        <div class="positemdescription">
                            <p>{{ post.content | strip_html | truncatewords: 24 }}</p>
                        </div>
                    </a>
                </li>
            {% endif %}
            {% endfor %}
            <a class="color-purple view-all" href="/articles">View all articles &rarr;</a>
        </ul>
    {% endfor %}

</div>

<!-- <h5>Recent work</h5> -->

<div class="designs-container gmph-box">
    <h2>Recent work</h2>
    <div class="grid"></div>
</div>

<!-- <p>I am a designer with 4 years industry experience working for startups around the world; currently at [Yavi](http://yavi.co) building delightful tools for workers. Previously I worked as a writer and review manager for UltraLinx, and for other online publications.</p> -->

<div class="postlist work-links active gmph-box">
    <div class="postitem">
        <a href="http://yaviapp.com" target="_blank">
            <h2><span class="postitemtitle">Yavi</span> <span class="postitemmeta">Employee, 2016 - Present &rarr;</span></h2>
            <div class="positemdescription">
                <p>Make your scheduling more efficient by putting work chat and schedule on your team's phones.</p>
            </div>
        </a>
    </div>
    <div class="postitem">
        <a href="https://timeline.gmph.co" target="_blank">
            <h2><span class="postitemtitle">Timeline</span> <span class="postitemmeta">Side project &rarr;</span></h2>
            <div class="positemdescription">
                <p>Create a timeline of events with images and stories which you can share with friends and family.</p>
            </div>
        </a>
    </div>
    <div class="postitem">
        <a href="http://gmph.co/shout" target="_blank">
            <h2><span class="postitemtitle">Shout</span> <span class="postitemmeta">Side project &rarr;</span></h2>
            <div class="positemdescription">
                <p>Create colourful, animated GIFs from images, text and emoji to get your message across on social media.</p>
            </div>
        </a>
    </div>
    <a class="color-purple view-all" href="/portfolio">View portfolio &rarr;</a>
</div>

<footer>
    <p class="sans-serif">
        <a href="{{ site.baseurl }}/articles" class="purple">Articles</a>
        <a href="{{ site.baseurl }}/notes" class="purple">Notes</a>
        <a href="{{ site.baseurl }}/portfolio" class="purple">Portfolio</a>
        <a href="https://twitter.com/gmph" target="_blank" class="twitter">Twitter</a>
        <a href="https://github.com/gmph" target="_blank" class="github">Github</a>
    </p>
</footer>

<!-- <h5>More about me</h5> -->

<!-- <p> -->
<!-- <div class="song-container most-listened"> -->
<!-- <div class="song-info"> -->
<!-- <div class="song-description">Loading most played song...</div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div class="location-container latest-trip"> -->
<!-- <div class="location-info"> -->
<!-- <div class="location-description">Loading most recent trip...</div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </p> -->
