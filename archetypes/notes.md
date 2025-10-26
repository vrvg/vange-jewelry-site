+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseBaseName "-" " " | title }}'

# Standard Resource Fields
author = 'Vangelis R. Velázquez González'
summary = 'A short summary of the technical note content for list pages.'

# REQUIRED CUSTOM TAXONOMIES (The "Index")
materials = []      # e.g., ["Copper", "Enamel"]
techniques = []     # e.g., ["Soldering", "Bezel Setting"]
tags = []           # e.g., ["patina-recipe-4", "wire-gauge-conversion"]

# Custom Metadata
related_creations = [] # Add links to finished creation pages related to this note (Optional)
+++

# Topic Title: [Start with a concise, technical heading]

Welcome to my technical resource notes. This entry documents my findings on [briefly state the goal of the note].

## Methodology & Context

* **Goal:** [What were you trying to learn or achieve with this method?]
* **Materials Used:** [List specific alloys, stones, or chemicals used in the test.]

## Key Steps & Observations

[Write the core technical content here using Markdown lists, code blocks, and diagrams.]

**Remember to fill the Front Matter above with the appropriate `materials`, `techniques`, and `tags` to ensure this note is fully indexed across the site.**