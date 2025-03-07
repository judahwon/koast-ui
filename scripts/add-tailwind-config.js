import fs from "fs";
import path from "path";

const configPath = path.join(process.cwd(), "tailwind.config.js");
const newContent = "'./node_modules/koast-ui/dist/style.css',";

if (fs.existsSync(configPath)) {
  let configFile = fs.readFileSync(configPath, "utf8");

  if (!configFile.includes(newContent)) {
    configFile = configFile.replace(
      /content:\s*\[\s*/m,
      `content: [\n    ${newContent},\n`
    );

    fs.writeFileSync(configPath, configFile, "utf8");
    console.log("✅ Tailwind content 설정이 자동으로 추가되었습니다!");
  } else {
    console.log("ℹ️ Tailwind content 설정이 이미 존재합니다.");
  }
} else {
  console.log("⚠️ tailwind.config.js 파일이 존재하지 않습니다. 직접 추가해주세요.");
}
