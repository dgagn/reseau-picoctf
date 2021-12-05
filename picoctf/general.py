#!/usr/bin/env python3


def flag(name, theflag):
    print(f"{name}: picoCTF{{{theflag}}}")


def lets_warm_up():
    return chr(0x70)


def twowarm():
    return bin(42)[2:]


def warmed_up():
    return 0x3D


if __name__ == '__main__':
    flag("lets_warm_up", lets_warm_up())
    flag("2_warm", twowarm())
    flag("warmed_up", warmed_up())
    print()
