# Problem: Write a function that accepts a string of ASCII letters and spaces and returns that string in block letters of 5 chars widht and 7 chars height.
# Solution: Use a dictionary to store the block values of each letter and return the black. Solution is not working.

def block_letter(text):
    letters = {
        'A': "  A     A A   A   A  AAAAA  A   A  A   A  A   A  ",
        'B': "BBBB   B   B  B   B  BBBB   B   B  B   B  BBBB   ",
        'C': " CCC   C   C  C      C      C      C   C   CCC   ",
        'D': "DDDD   D   D  D   D  D   D  D   D  D   D  DDDD   ",
        'E': "EEEEE  E      E      EEE    E      E      EEEEE  ",
        'F': "FFFFF  F      F      FFF    F      F      F      ",
        'G': " GGG   G   G  G      GGGGG  G   G  G   G   GGG   ",
        'H': "H   H  H   H  H   H  HHHHH  H   H  H   H  H   H  ",
        'I': "IIIII    I      I      I      I      I    IIIII  ",
        'J': "JJJJJ    J      J      J    J J    J J     JJ    ",
        'K': "K   K  K  K   K K    KK     K K    K  K   K   K  ",
        'L': "L      L      L      L      L      L      LLLLL  ",
        'M': "M   M  MM MM  MM MM  M M M  M   M  M   M  M   M  ",
        'N': "N   N  NN  N  N N N  N  NN  N   N  N   N  N   N  ",
        'O': " OOO   O   O  O   O  O   O  O   O  O   O   OOO   ",
        'P': "PPPP   P   P  P   P  PPPP   P      P      P      ",
        'Q': " QQQ   Q   Q  Q   Q  Q   Q  Q   Q  Q  Q    QQ Q  ",
        'R': "RRRR   R   R  R   R  RRRR   R R    R  R   R   R  ",
        'S': " SSS   S   S  S       SSS       S  S   S   SSS   ",
        'T': "TTTTT    T      T      T      T      T      T    ",
        'U': "U   U  U   U  U   U  U   U  U   U  U   U   UUU   ",
        'V': "V   V  V   V  V   V  V   V  V   V   V V     V    ",
        'W': "W   W  W   W  W   W  W W W  WW WW  WW WW  W   W  ",
        'X': "X   X  X   X   X X     X     X X   X   X  X   X  ",
        'Y': "Y   Y   Y Y     Y      Y      Y      Y      Y    ",
        'Z': "ZZZZZ      Z     Z     Z     Z     Z      ZZZZZ  "
    }

    return letters.get(text.upper(), ["  A     A A   A   A  AAAAA  A   A  A   A  A   A  "])

def conver_block_letter(string):
    chars = [block_letter(char) for char in string]
    result = []

    for row in range(7):
        result.append(''.join(chars[col][row] for col in range(len(chars))))

    return '\n'.join(result)

