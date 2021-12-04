# PicoCTF

# General Skills

## Lets Warm Up | 50 pts
- If I told you a word started with 0x70 in hexadecimal, what would it start with in ASCII?

```python
$ python3
>>> chr(0x70)
'p'
```

## 2 warmup

- Can you convert the number 42 (base 10) to binary (base 2)?

2^5 = 32

42 - 32 = 10 - 8 = 2 - 2 = 0

flag: `picoCTF{101010}`

## Warmed Up

- What is 0x3D (base 16) in decimal (base 10).

```python
$ python3
>>> 0x3D
61
```

flag: `picoCTF{61}`

## Bases

- What does this `bDNhcm5fdGgzX3IwcDM1` mean? I think it has something to do with bases.

```bash
echo "bDNhcm5fdGgzX3IwcDM1" | base64 -d -
# l3arn_th3_r0p35
```

flag: `picoCTF{l3arn_th3_r0p35}`
