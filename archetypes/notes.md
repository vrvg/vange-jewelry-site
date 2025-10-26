+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
author = 'vange'
year = '{{ dateFormat "2006" .Date }}'
month = '{{ dateFormat "2006/01" .Date }}'
categories = ['Personal', 'Thoughts']
tags = ['software', 'html']
+++

Lorem ipsum dolor

<!--more-->

Ut enim ad minim veniam