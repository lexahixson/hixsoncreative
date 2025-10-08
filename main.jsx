# (if case issue from macOS)
git mv src/main.jsx src/_main.jsx
git commit -m "temp rename"
git mv src/_main.jsx src/main.jsx
git commit -m "fix filename case"
git push
