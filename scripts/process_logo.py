from PIL import Image

src = r"c:\Users\vishn\OneDrive\Desktop\ewb website\public\logo.png"
img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r < 40 and g < 40 and b < 40:
            pixels[x, y] = (0, 0, 0, 0)

img.save(src, "PNG")

dark = img.copy()
dp = dark.load()
for y in range(h):
    for x in range(w):
        r, g, b, a = dp[x, y]
        if a < 10:
            continue
        if r > 200 and g > 200 and b > 200:
            dp[x, y] = (12, 22, 18, a)

dark_path = r"c:\Users\vishn\OneDrive\Desktop\ewb website\public\logo-dark.png"
dark.save(dark_path, "PNG")
print("ok", w, h)
