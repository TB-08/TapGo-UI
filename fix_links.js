const fs = require('fs');
const path = require('path');

const files = ["index.html", "Food.html", "Travel.html", "Entertainment.html", "Health.html", "Voucher.html"];

const mapping = [
    { text: "Hot Deals", link: "index.html" },
    { text: "Trang chủ", link: "index.html" },
    { text: "Du lịch", link: "Travel.html" },
    { text: "Ẩm thực", link: "Food.html" },
    { text: "Giải trí", link: "Entertainment.html" },
    { text: "Sức khỏe", link: "Health.html" },
    { text: "Voucher", link: "Voucher.html" }
];

files.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf-8');

    mapping.forEach(({ text, link }) => {
        // Regex to find: href="..." followed by optional classes/spaces then >text</a>
        const regex = new RegExp(`href="[^"]*"([^>]*>${text}</a>)`, 'g');
        content = content.replace(regex, `href="${link}"$1`);
    });

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Links updated successfully.");
