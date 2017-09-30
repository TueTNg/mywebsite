---
title: "Build a website with Hugo and Blogdown: Setup"
date: "2017-09-20"
---

This is the first post in the series *Build a website with Hugo and Blogdown* that I write to document the process of building my person website (the one you're looking at right now) using Hugo and Blogdown. 

For those who are new to Hugo and Blogdown, this series is not an introduction to Hugo or Blogdown, and I strongly recommend you to read the official documents to learn more. This is also not a complete tutorial that guides you to build a website from scratch to finish *(and I do not intend to do so as well)*. I wrote this for two simple reasons:

1. Document my process of building this website and save it for future reference in case I have to build another one.
1. Share my personal view, approach, and tips in developing a small static site, which I think might be helpful for some of you. 

Therefore, I assume that you already have some basic knowledge of the followings:

- HTML and CSS
- Markdown and R Markdown
- Hugo
- R and RStudio

*Note:* My website was built on Windows (64-bit), so I am not sure if the information in this series still works for other operating systems. However, I believe most of it will be applicable regardless your development environment.

## Install stuff

In order to start, you need to have Hugo and Blogdown installed on your PC. You can google and quickly find how to install them, but I will briefly list out the steps to make your life (and my life as well if I have to go through them again someday) a little bit easier.

### Install Hugo

There are several ways to install Hugo, but I think the easiest way is through the binary file. 

1. Go to [Hugo releases](https://github.com/gohugoio/hugo/releases) and download the binary file of the lastest version for your operating system. For me, it's `hugo_0.27.1_Windows-64bit.zip`.
1. Unzip the downloaded file and install.
1. Check if Hugo is available on your computer by typing on the terminal: `hugo version`. If your computer still cannot recognize Hugo, then you might need to restart it.


### Install Blogdown

Installing Blogdown is also very simple. Just open RStudio and run the command: `install.packages('blogdown')`. That's it.

## Craft the project

Every web project needs a place on a local machine to store its source code and files. For me, I always put my web projects under `E:/projects/webdev/`. Therefore, I will go there and create a sub-directory called `mysite/`, which will be the root directory of my website.

Since I want to build the website from scratch, I decide not to use Hugo to generate the project structure, but to create it by myself. The initial structure will look like this:

```
mysite/
├───content/
│   ├───research/
│   └───webdev/
├───data/
├───static/
├───themes
│    └───mytheme/
└───config.yaml
```

The following briefly describes the above structure:

- `content/` will contain your posts and pages (normally `.md` files). Actually, Hugo doesn't make any distinction between posts and pages, but I think it is useful the have this at the back of your mind, at least at the concept level. 

    *Posts* are articles, notes, etc., that you write on a particular topic and normally have meta data such as title, date, tags, and author.  *Pages* are similar to posts, but are used for static content such as About or CV pages, and pages often do not have categories, tags, or date.

    In Hugo, posts on the same topic will be placed in the same sub-folder under `content/`. Theses are called `sections`. As you can see, I have two sections, `research/` and `webdev/`, which will contain posts on reseach topic and web development topic respectively.

- `data/` will contain `.yaml` files holding the data that could be useful when you developing `layouts`. For example, later I will create a file named `cv.yaml` to store data about my curriculum vitae, which will be used in my CV layout. The advantage of using `data` files is that it gives you more flexibility. If you need to change some information regarding your CV, you can do it via the `cv.yaml` instead of going to the `cv.html` template and mess up the source code.

- `static/` will contain assets files such as images, PDFs, etc. I will not use this folder to hold CSS and Java Script files since I will put them in my custom theme. This gives me much more freedom in switching between multiple themes.

- `themes/` will contain your themes. You can have multiple themes, each in a separate folder. For now, I have only one theme called `mytheme`.

- `config.yaml` will contain the configuration parameters for your website such as baseURL, theme, permalinks, menus, etc.
