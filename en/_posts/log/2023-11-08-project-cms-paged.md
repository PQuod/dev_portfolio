---
title: "[Project] A CMS for Paged.js &middot; Specifications"
date: 2023-11-08
categories: 'log'
lang: en
lang-ref: cms-pagedjs-1
---
## The project
I work part-time in a cultural associative organisation based in Rennes (Brittany, France). We very often need to produce documents adressed either to the different institutions that are funding us or to our members and followers. These documents are neither advertisements nor promotional material for our events but rather  adminsitrative files depicting cultural contents, political axis, budgets or territories of action. They are quite descriptive, mainly consisting in large portions of text, but they still have to be fancy and appealing, so we take great care in their graphical design.

I'm the one designing them and for the first years, I chose what appeared to me like the most straightforward way to do so, aka using <s>good</s> old Indesign. But during those years, I also discovered web2print and its scene, I understood there were other ways to design, to avoid the Adobe suite and closed-source softwares and to be completely independent and free. 

I then began to design those documents whith html and css, using the amazing [Paged.js](https://pagedjs.org/) to compile them into printable .pdf, and I couldn't then go back to any other way of doing.

That's great, but I'm still the only one on the team who can create those documents, and who can edit them. My colleague is the one who produces their main content, but he still has to send me this content in order for me to fill the doc with it.

So I figured out that we needed a tool, some kind of local CMS, allowing my colleague to write content in those html document produced with Paged.js, also allowing him to write it in plain text and not in html, and to publish it in .pdf himself. He could choose the template of each page, depending on the layout he has to create, among a set of templates I'd write in css.

## The project
I work part-time in a cultural associative organisation based in Rennes (Brittany, France). We very often need to produce documents adressed either to the different institutions that are funding us or to our members and followers. These documents are neither advertisements nor promotional material for our events but rather  adminsitrative files depicting cultural contents, political axis, budgets or territories of action. They are quite descriptive, mainly consisting in large portions of text, but they still have to be fancy and appealing, so we take great care in their graphical design.

I'm the one designing them and for the first years, I chose what appeared to me like the most straightforward way to do so, aka using <s>good</s> old Indesign. But during those years, I also discovered web2print and its scene, I understood there were other ways to design, to avoid the Adobe suite and closed-source softwares and to be completely independent and free. 

I then began to design those documents whith html and css, using the amazing [Paged.js](https://pagedjs.org/) to compile them into printable .pdf, and I couldn't then go back to any other way of doing.

That's great, but I'm still the only one on the team who can create those documents, and who can edit them. My colleague is the one who produces their main content, but he still has to send me this content in order for me to fill the doc with it.

So I figured out that we needed a tool, some kind of local CMS, allowing my colleague to write content in those html document produced with Paged.js, also allowing him to write it in plain text and not in html, and to publish it in .pdf himself. He could choose the template of each page, depending on the layout he has to create, among a set of templates I'd write in css.

## The steps
I already have several types of document designed in html and css, and I won't speak of this process here. I will be focusing on the tool allowing a third party to create, edit or delete a document and its content, assuming different css templates are already available to use to design pages. We won't need to edit or adapt those templates. We also already know what kind of types of documents we need to produce and which kind of content will fill them. Our templates can then remain quite static, adapting themselves solely to the length of the content.

All our documents are composed of A4 pages, and are not bound as booklets, which will save ourselves a bunch of parameters to take care of.

So, in short, we need a tool allowing anybody in the organisation to :
### Create
- Create a new A4 document.
- Create a new page to add to this document, associating a template to this page depending on the type of content or the looks they need.
- Fill this page with new content, choosing where each fragment of content will go on the different available spaces to fill on the page (titles, plain text, legends, images...)
### Edit
- Edit the content of an existing page
- Edit the order of the pages
### Delete
- Delete existing pages
- Delete an existing document
### See what they're doing
- Browse through a list of the already existing documents
- Go through an overview of the whole document
- See an overview of the page they're creating or editing while they're doing so

I chose to code this using mainly php. That's a language I'm quite familiar with, having worked on many projects including databases and coding the CMS allowing third-parties to manipulate them. That's what I'll use to play server-side, to browse through, edit, save and delete my different files. I'll also be using a bunch of js script, mainly to manage the documents and pages overviews.

Here are the big axis of the project's specifications. I've already gone through a big part of the **create** aspects, and need now to dive through the **edit** functionalities. Maybe I'll detail each of those parts in further log notes, maybe I'll establish some kind of devlog about this project. I'll definitely put all of this in a github repo if I feel like it can be useful for others...

There are still many things to adjust or to figure out about this project. If you have any suggestions, ideas of ameliorations and new features or are interested about what this tool might look like, even in progress, feel free to contact me, I'd be really happy to discuss it with anybody!
