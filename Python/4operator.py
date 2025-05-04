# ========================
# Catatan: Operator Python
# Hari 4 - Perbandingan & Logika
# ========================

# === OPERATOR PERBANDINGAN ===
# ==   : sama dengan
# !=   : tidak sama dengan
# >    : lebih besar dari
# <    : lebih kecil dari
# >=   : lebih besar atau sama dengan
# <=   : lebih kecil atau sama dengan

# Contoh:
a = 5
b = 3

print("a == b :", a == b)    # False
print("a != b :", a != b)    # True
print("a > b  :", a > b)     # True
print("a < b  :", a < b)     # False
print("a >= b :", a >= b)    # True
print("a <= b :", a <= b)    # False

print()  # Pemisah output

# === OPERATOR LOGIKA ===
# and  : True jika dua-duanya True
# or   : True jika salah satu True
# not  : membalik nilai boolean

x = True
y = False

print("x and y :", x and y)  # False
print("x or y  :", x or y)   # True
print("not x   :", not x)    # False
print("not y   :", not y)    # True

# === Kombinasi dalam praktik ===
umur = 20
punya_ktp = True

if umur >= 17 and punya_ktp:
    print("Boleh membuat SIM")
else:
    print("Belum memenuhi syarat")