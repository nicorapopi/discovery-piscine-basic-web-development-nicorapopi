#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 0
fi

for arg in "$@"; do
  mkdir -p "ex$arg"
done

# chmod +x build.sh
# ./build.sh           # แสดง No arguments supplied
# ./build.sh 00        # สร้างโฟลเดอร์ ex00
# ./build.sh 01 02 03  # สร้างโฟลเดอร์ ex01 ex02 ex03
