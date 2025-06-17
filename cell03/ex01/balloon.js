const balloon = document.getElementById('balloon');

const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let size = 200;
let shrinkInterval = null; // ใช้เก็บ ID ของ setInterval

function updateBalloon() {
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size}px`;
  balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', () => {
  size += 10;
  colorIndex = (colorIndex + 1) % colors.length;

  if (size > 420) {
    size = 200;
    colorIndex = 0;
  }

  updateBalloon();
});

// เริ่มลดขนาดเมื่อเมาส์ออกจากลูกโป่ง
balloon.addEventListener('mouseleave', () => {
  // เริ่ม interval ใหม่ถ้ายังไม่มี
  if (!shrinkInterval) {
    shrinkInterval = setInterval(() => {
      if (size > 200) {
        size -= 5;
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
      } else {
        clearInterval(shrinkInterval);
        shrinkInterval = null;
      }
    }, 200); // ทุกๆ 200 มิลลิวินาที (0.2 วินาที)
  }
});

// หยุดการลดขนาดเมื่อเมาส์กลับเข้ามา
balloon.addEventListener('mouseenter', () => {
  if (shrinkInterval) {
    clearInterval(shrinkInterval);
    shrinkInterval = null;
  }
});

updateBalloon();
