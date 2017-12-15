---
layout: landing
title: Graham Macphee
heading: I'm Graham Macphee. I use design to prototype and create useful, usable digital products.
date: 28th April 2015
published: true
format: markdown
permalink: /
redirect_from:
- /portfolio/
- /projects/
- /pages/
---

<div class="half line">

    <p class="m32">I have worked for startups in Europe and the US for 4 years to solve critical business challenges through design.</p>

    <p class="m32">I work closely with teams to understand the product, market and strategy. By holding insightful research sessions, I understand user needs. I then validate designs by testing prototypes, and use data to inform iterations.</p>

    <p class="m32">My aim is to make measurable differences to experience and behaviour which help to accomplish business goals.</p>

    <a class="button large m16" data-icon="arrow-right" href="/hire">Hire me</a>

    <br class="moon">
    <br class="moon">
    <br class="moon">
    <br class="moon">
    
</div>

<div class="half">
    {% include project.html primary-text="Yavi, chat and schedule for shift workers" secondary-text="View case study" background-image="pages/portfolio/yavi/yavi.png" link="/portfolio/yavi" arrow="→" %}
</div>

<div class="half">
    {% include project.html primary-text="Happy Up, private notes to make you smile" secondary-text="View side project" background-image="pages/portfolio/happyup/happyup.png" link="/portfolio/happy-up" arrow="→" %}
</div>

<div class="half">
    {% include project.html primary-text="Suave, an organised read-later list" secondary-text="View case study" background-image="pages/portfolio/suave/suave.png" link="/portfolio/suave" arrow="→" %}
</div>

<br class="moon">
<hr>
<br>
<h5 class="text-align-center">My work has been featured in publications and events, including...</h5>
<br>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/techcrunch.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/thenextweb.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/producthunt.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/androidcentral.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/googleio.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/ultralinx.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/thescotsman.png"/></div>
<div class="quarter"><img class="no-border op4" src="/assets/img/featuredin/androidauthority.png"/></div>
<br>
<hr>
<br>

<div class="half">
    {% include project.html primary-text="Shout, create simple gifs for social media" secondary-text="View side project" background-image="pages/portfolio/shout/shout.png" link="/portfolio/shout" arrow="→" %}
</div>

<div class="half">
    {% include project.html primary-text="Timeline, discover your loved ones' memories" secondary-text="View side project" background-image="pages/portfolio/timeline/timeline.png" link="/portfolio/timeline" arrow="→" %}
</div>

<div class="half">
    {% include project.html primary-text="Snipandshare, share screenshots from Chrome" secondary-text="View case study" background-image="pages/portfolio/snipandshare/snipandshare.png" link="/portfolio/snipandshare" arrow="→" %}
</div>

<div class="half">
    {% include project.html primary-text="Wonderloop, video profile introductions" secondary-text="View case study" background-image="pages/portfolio/wonderloop/wonderloop.png" link="/portfolio/wonderloop" arrow="→" %}
</div>

<!--<br class="moon">
<hr>
<br>

<h5>Other work</h5>

<div class="half">
    {% include project.html primary-text="MoDaCo Solutions" secondary-text="Interface design for a home automation app for Android, in the Material style, featured at Google I/O" %}
</div>

<div class="half">
    {% include project.html primary-text="Plasma Cat Media" secondary-text="Original branding and web design for a London-based creative agency with clients including Google and Barclaycard" %}
</div>

<div class="half">
    {% include project.html primary-text="Boid" secondary-text="Interface design and branding for the Android Twitter client, with over 50,000 downloads and a 4 star rating from 1,656 reviews" %}
</div>

<div class="half"></div>-->

<br class="moon">
<hr>
<br class="moon">

<div class="half">

    <h3>More about me</h3>

    <p>I live and work in Edinburgh, UK. I tend to think about puppies, pizza and equality. I enjoy being creative: design, photography, writing, playing ukulele and singing. I’m quiet and thoughtful. I like nature and quiet nights in.</p>

    <div id="music-container">
        {% include project.html link="" primary-text="Loading most played song..." secondary-text="" background-image="" style="inline" %}
    </div>

    <!-- <div id="trip-container">
        {% include project.html link="" primary-text="Loading most recent trip..." secondary-text="" background-image="" style="inline" %}
    </div> -->

    <br>

    <p>You can see my designs above and on <a href="http://dribbble.com/gmph" target="_blank">Dribbble</a>, and find my photography on <a href="http://instagram.com/gmph" target="_blank">Instagram</a>.</p>  

    <br class="moon"> 

    <h3>Contact me</h3>

    <p>Say hi! Send an email to <a href="mailto:hi@grahammacphee.com">hi@grahammacphee.com</a>, or send me a message on Twitter, <a href="http://twitter.com/gmph">@gmph</a>.</p>

    <br class="moon">

</div>

<div class="half">

    <h3>Articles</h3>
    <br>
    {% assign counter = 0 %}
    {% assign maxPostCount = 2 %}
    {% for post in site.posts %}
    {% if post.private != true and counter < maxPostCount %}
    {% assign counter=counter | plus:1 %}
    <div class="m24">
        {% if post.redirect %}
            <a href="{{ post.redirect }}" target="\_blank">
        {% else %}
            <a href="{{ post.url }}">
        {% endif %}
                <h4 class="m-16">{{ post.title }}</h4> 
                <h5 class="m24">{{ post.date | date: "%B %-d, %Y" }}</h5>
                <p class="m24">{{ post.content | strip_html | truncatewords: 44 }}</p>
            </a>
    </div>
    <br>
    {% endif %}
    {% endfor %}
    <a class="button m0" href="/articles">View all articles &rarr;</a>

</div>
