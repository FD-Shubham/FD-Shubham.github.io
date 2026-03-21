---
layout: page
title: Blog
permalink: /blog/
---

<h2>My Blog</h2>
<p>Thoughts on complex robotics systems, engineering development, and my journey.</p>
<hr>

<ul style="list-style-type: none; padding-left: 0;">
  {% for post in site.posts %}
    <li style="margin-bottom: 15px;">
      <span style="color: #888;">{{ post.date | date: "%B %d, %Y" }}</span><br>
      <a href="{{ post.url | relative_url }}" style="font-size: 1.2em; font-weight: bold;">{{ post.title }}</a>
      <p>{{ post.description }}</p>
    </li>
  {% endfor %}
</ul>
