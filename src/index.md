---
layout: "base.njk"
title: Hello, world!
date: 2026-09-02
stage: evergreen
---
Hi, I'm Elicia and welcome to my [[digital garden|digital garden]]. Thanks for stopping by!

I like to think *a lot* and this garden is my way of getting thoughts and ideas out of my head. Some notes may be curiosities or projects in the making. Follow the links to wander around and discover what's happening in my mind. 

## Start here
Learn more [[about|about me]] or [[project-dispatch|see what I'm creating]]. I built [[world|my little home on the internet]], stop by for a visit!

Here are my latest updates:
<ul>
  {% for page in collections.latestPages %}
    <li>
      <a href="{{ page.url }}">{{ page.data.title }}</a>
    </li>
  {% endfor %}
</ul>