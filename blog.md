---
layout: default
title: Blog
permalink: /blog/
---

<div class="page-header">
  <div class="page-header-inner">
    <p class="page-eyebrow">Writing</p>
    <h1 class="page-title">Blog</h1>
    <p class="page-subtitle">Thoughts on robotics systems, engineering, and the journey.</p>
  </div>
</div>

<section class="blog-list-section">
  <div class="blog-list-inner">

    {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-item">
      <div class="post-date">{{ post.date | date: "%b %d, %Y" }}</div>
      <div class="post-body">
        <div class="post-title">{{ post.title }}</div>
        {% if post.description %}<div class="post-desc">{{ post.description }}</div>{% endif %}
      </div>
      <span class="post-arrow">↗</span>
    </a>
    {% endfor %}

    {% if site.posts.size == 0 %}
    <p class="blog-empty">No posts yet — check back soon.</p>
    {% endif %}

  </div>
</section>
