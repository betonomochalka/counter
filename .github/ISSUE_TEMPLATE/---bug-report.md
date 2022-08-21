---
name: "\U0001F41B Bug Report"
about: Something is wrong with project.
title: ''
labels: bug
assignees: betonomochalka

---

- type: input
    attributes:
      label: What version of fuels-ts are you using?
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Expected Behavior
      description: A concise description of what you expected to happen.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Actual Behavior
      description: A concise description of what you're experiencing.
    validations:
      required: true
