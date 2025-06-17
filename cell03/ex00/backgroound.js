let clickCount = 0;
const btn = document.getElementById('changeBtn');

btn.addEventListener('click', () => {
  clickCount++;

  // เปลี่ยนสีพื้นหลังทุกคลิก
  const hue = Math.floor(Math.random() * 360);
  document.body.style.backgroundColor = `hsl(${hue}, 60%, 30%)`;

  // หลังจากคลิกครั้งแรก ให้ขยายปุ่มครั้งเดียว
  if (clickCount === 2) {
    btn.style.fontSize = '24px';
    btn.style.padding = '12px 24px';
  }
});
