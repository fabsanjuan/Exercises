# Problem: Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'. . matches any single char while * matches zero or more of preceding element. Match is full string
# Solution:Not working on all test cases.

def isMatch(s, p):
    if not p:
        return not s
    
    first_match = bool(s) and p[0] in {s[0], '.'}
    if len(p) >= 2 and p[1] == '*':
        return (isMatch(s, p[2:])) or first_match and isMatch(s[1:], p)
    else:
        return first_match and isMatch(s[1:], p)