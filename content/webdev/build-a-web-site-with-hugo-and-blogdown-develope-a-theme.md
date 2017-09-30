---
title: "Build a website with Hugo and Blogdown: Develop a theme"
date: "2017-09-21"
---
In this post, we're going to develope a theme for our website. Go to your `themes/` folder and create the following structure:


## Theme structure
```
mytheme/
├───layouts/
│   ├───partials/
│   └───_default/
│       ├───baseof.html
│       ├───list.html
│       └───single.html
├───src/
│   └───scss/
└───static/
    ├───css/
    └───vendor/
```

Explain:

- `layouts/` will contain the layouts for different *looks* of the website. You can see several `.html` files in `layouts/_default/`. `list.html` is used for listing out the posts/pages. `single.html` is used for displaying the content of a single post/page. `baseof.html` is the default one when there is no suitable layout found.

- `src/scss/` will contain SASS files used to generate CSS files later. I choose SASS since it enables me to write much more compact and maintainable code. You can also create `src/js/` folder to store your JS code and compile it later. I don't need facy stuff for my website, so there will be no JS.

- `static/css/` will contain the CSS files generated from the SASS files in `src/scss/`, and `static/vendor/` will contain other third-party/external resources (e.g. custom fonts, css libraries).


## Reuse the code

{{< highlight python >}}
# Import libraries
import pandas as pd
import sys

names = ['Bob','Jessica','Mary','John','Mel']
births = [968, 155, 77, 578, 973]

BabyDataSet = list(zip(names,births))
BabyDataSet

df = pd.read_csv(Location, header=None)

df = pd.read_csv(Location, names=['Names','Births'])

os.remove(Location)

print('Python version ' + sys.version)
print('Pandas version ' + pd.__version__)
print('Matplotlib version ' + matplotlib.__version__)

{{< /highlight >}}

{{< highlight r >}}
library(dplyr)
library(FSAdata)
library(plotrix)

data(RuffeSLRH92)
str(RuffeSLRH92)

library(tidyverse)

# Census data --------------------------------------------------------------------------
geodf <- read_csv('data/geodf.csv')
str(geodf)
head(geodf)

# Eeach row is a "cencus track", a town or a small city
# 
# state: a state
# fips: a fips code (unique ID for each row)
# county: a county
# csa: a combined statistical area


# Investigate counties
county_count <- geodf %>% count(county, sort = TRUE)
county_csa_count <- geodf %>% count(county, csa) %>% spread(csa, n, fill = 0)

# Household histogram ------------------------------------------------------------------
geodf$ppl_per_hh <- geodf$population / geodf$households
geodf %>% ggplot(aes(ppl_per_hh)) +
    geom_histogram()

# Remove outliers
geodf %>% 
    filter(ppl_per_hh < 5) %>% 
    ggplot(aes(ppl_per_hh)) +
    geom_histogram(bins = 30, fill = 'white', color = 'black') +
    xlab('Number of people per household') +
    ylab('Count')


# Quantiles ----------------------------------------------------------------------------
meanOfCommunte <- read_csv('data/meansOfCommute.csv')
head(meanOfCommunte)

meanOfCommunte_percent <- meanOfCommunte %>% 

{{< /highlight >}}

{{< highlight html >}}
<section id="main">
  <div>
    <h1 id="title">{{ .Title }}</h1>
    {{ range .Data.Pages }}
      {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}