---
title: 'Linking a static website to a database'
date: 2022-10-04
categories: 'log'
lang: en
lang-ref: static-dynamic
---
I know it could sound counterintuitive, or worse, heretic. But sometimes –  sometimes – using a database running alongside your static website may prove useful, if not necessary.

## the whys

I'm currently developing the new [Maison de la Poésie de Rennes's website](maiporennes.fr)[^1], a french association where I have a part-time job. We (my colleague Quentin and I) knew from the beginning that we wanted something fast, something light, something mainly dedicated to text and something that we could update very quickly, clearly and easily. We have to add new events on the site weekly, we have several types of posts that need to be displayed specifically and we know our public may be not that comfortable with the internet.

All these reasons pointed to static websites as the best fit for our needs (also, Quentin and I fell in love with SSG two years ago, creating our first static website together, [Internet Exploreur](https://pquod.github.io/InternetExploreur/)). I chose to use Jekyll to build it, because it's the SSG I'm the most familiar with[^2], and to use Netlify as our CMS, for its functions seemed very wide.

It all went well and our static choice seemed perfect but I kept wondering, in a corner of my head, what we were going to do when we'd have to deal with our library. The Maison de la Poésie owns a library containing about 5000 books and, when Quentin and I took our jobs 4 years ago, there was only one single text file to inventory them all. I've then built a database and its own vanilla CMS, using PHP and MySQL, to allow us to keep track of the loans and returns. It was quick and simple to use, even if it was PHP.

How would we handle our library management now? We couldn't simply modify single static posts, our previous database had so many necessary links between its tables, counters to allow us to analyze the library activity, and functions to send emails when a user was late, for example.

We could've had a separate app to manage our library, we could've even kept the previous one, but it meant we would never be able to get rid of our previous website hosting, for netlify only hosts static websites, and we needed to display some of our database information on our static site - for example, the list of our 5 000 books, or whether they are borrowed or not.

I searched through the web for the answer, only stumbling upon categorical answers politely yelling **NOPE** each time the words static and dynamic were simultaneously mentioned.

## the hows

Until today, when I found my light in the darkness, reading this article/tutorial by [mzrnsh](https://mzrn.sh/2022/04/29/using-airtable-as-a-jekyll-website-database/).

First of all, as mzrnsh says, his tutorial goes with a real-world example, allowing the reader to understand very quiclky were it goes, what it does, what it is for.

In less than an hour, I had imported one of our previous table into Airtable, was able to display it on my static website and had created a form my colleague could fill in from a dedicated page in order to update our database as quickly and simply as before. Even more precious, I added a build hook *via* Pipedream to auto-deploy on Netlify, so my site is updated as soon as a change is made to the database[^3].

I still need to fill in the other tables, check the links between them, implement our counters and various other small tasks before it's ready to be live and running, but I'm pretty amazed about how this solution (and the practical example picturing it) was exactly what I needed. I must admit that Airtable is a bit too overcrowded for me[^4] (functions and customization everywhere, the app is constantly proposing you to make things you really don't need to do, looks like you can drag-and-drop almost every single box in your window) and I still wish I could've coded myself forms and fields, but I was really beginning to loose hope and this new horizon just convinced me that when it comes to web development, there is always a solution, somewhere, waiting for you.

[^1]: It might be the subject of another post later (the one about developing a website on the go, without pre-established requirements and discovering in the course of your development the needs and specificities of the project).
[^2]: But I'm actively considering trying something new - sometimes, Jekyll makes me feel a little bit... naff.
[^3]: Well, it might be where it goes too far from a static website. But you can remain reasonable and set a timer checking up for changes only daily, weekly or even monthly.
[^4]: Well well, this is future me speaking, editing this post a week later... and I'll have some things to say about Airtable and why, really, coding things from scratch will always remain my favourite solution. Coming soon in the log...
