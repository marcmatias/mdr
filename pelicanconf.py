#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

import glob
import json

AUTHOR = 'Marcel Marques'
SITENAME = 'MDR'
SITEURL = ''

PATH = 'content'

TIMEZONE = "America/Sao_Paulo"

DEFAULT_LANG = "pt-br"

LOCALE = "pt_BR.UTF-8"

# Feed generation is usually not desired when developing
# FEED_ALL_ATOM = None
# CATEGORY_FEED_ATOM = None
# TRANSLATION_FEED_ATOM = None
# AUTHOR_FEED_ATOM = None
# AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10
TYPOGRIFY = True

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

# Configurações da página de comunidades locais
COMUNIDADES_LOCAIS = [
    json.load(open(fname, 'r'))
    for fname in glob.glob('content/sites/*.json')
]
DEFAULT_COMMUNITY_IMAGE = "images/sites/default.png"