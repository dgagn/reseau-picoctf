#!/usr/bin/env python3

password = 'jU5t_a_sna_3lpm1dg347_u_4_mfr54b'
buffer = [''] * 32

# Reverse the buffer
for i in range(0, 8):
    buffer[i] = password[i]

for i in range(8, 16):
    buffer[i] = password[23 - i]

for i in range(16, 32, 2):
    buffer[i] = password[46 - i]

for i in range(31, 16, -2):
    buffer[i] = password[i]

# Join the buffer
print(f"picoCTF{{{''.join(buffer)}}}")
