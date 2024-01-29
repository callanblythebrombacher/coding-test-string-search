# String Search Coding Test

## Steps

- Clone in the project
- Create a new branch for your submission with the following format: [name]-[day]-[month]-[year] ie "callan-01-18-2024"
- Create a function called stringSearch
- This function should search a string for substrings, between double quotes, and return an array, whereby the contents of the array is the original string, whereby the substrings are ectracted from the original string, and the contents of the array are in the same order in which the string was orginally presented
- once your code is done, please push it to the repo, on your submission branch.

### example inputs

- 1 ``'some string, "with" content that "needs extracting"'``
- 2 ``'some string, ""with content that ""needs extracting"'``

## example outputs

- 1 ``['some string, ', '"with"', ' content that ','"needs extracting"',]``
- 2 ``['sometring, ', '""', 'with content that ', '""', 'needs extracting"']``
