# Problem: Convert words in a string delimited by dashes and underscores into camelCase.
# Solution: Iterate through chars and skip dashes and uncerscores capitalizing the next char. 

def to_camel_case(text):
    if text == '':
        return ''
    camel_case_str = []
    skip = False
    for i, char in enumerate(text):
        if skip:
            skip = False
            continue
        if ((char == '-' or char == '_') and i + 1 < len(text)):
            char = text[i + 1].upper()
            camel_case_str.append(char)
            skip = True
        else:
            camel_case_str.append(char)
    return ''.join(camel_case_str)
