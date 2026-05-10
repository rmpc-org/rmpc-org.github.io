#!/usr/bin/env sh
echo "Note: cava theme config requires hex values. The nord theme will fail if you run this script without manually updating those values."
sed -i 's/#81a1c1/blue/gI; s/#88c0d0/cyan/g; s/#2e3440/black/g; s/#3b4252/black/g; s/#4c566a/gray/g; \
        s/#a3be8c/green/g; s/#ebcb8b/yellow/g; s/#d8dee9/white/g; s/#b48ead/magenta/g'
