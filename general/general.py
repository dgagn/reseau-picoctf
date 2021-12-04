#!/usr/bin/env python3


def flag(str):
    print(f"picoCTF{{{str}}}")


def lets_warm_up():
    print("Lets warm up !")
    print("If I told you a word started with 0x70 in hexadecimal, what would it start with in ASCII?")
    flag(chr(0x70))


if __name__ == '__main__':
    lets_warm_up()
