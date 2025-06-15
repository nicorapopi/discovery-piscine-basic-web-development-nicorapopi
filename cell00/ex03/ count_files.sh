find . -maxdepth 1 \( -type f -o -type d \) ! -name '.*' | wc -l

# นับไฟล์และโฟลเดอร์ ยกเว้นโฟลเดอร์ปัจจุบัน
