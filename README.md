# NathanWang3.github.io

Nan Wang 的个人学术主页。纯静态（HTML + CSS + JS），无需 Jekyll / Node 构建，推上 GitHub 即可访问。

## 结构

```
index.html        页面骨架（不用改）
data.js           ★ 所有内容都在这里，中英文各一份
assets/style.css  样式
assets/app.js     渲染逻辑、语言切换、深色模式
assets/photo.jpg  头像（自己放一张，正方形 ≥ 600px；没有则显示首字母占位）
assets/*.pdf      简历 PDF（放好后在 data.js 的 cvFile 填路径）
.nojekyll         告诉 GitHub Pages 不要用 Jekyll 处理
```

## 更新内容

只改 `data.js`。每个字段形如 `{ en: "...", zh: "..." }`；留空字符串的字段不显示。

- 新论文：在 `publications` 数组里加一项，`status` 取 `published / accepted / revision / review / prep`
- 论文从审稿中变为接收：改 `status`、`note`、补 `link`
- 更新日期：改底部 `lastUpdated`

## 本地预览

直接双击 `index.html` 就能看（不依赖服务器）。想用本地服务器：

```
python -m http.server 8000
```

然后打开 http://localhost:8000

## 部署到 GitHub

仓库名必须是 `NathanWang3.github.io`（已有，是 fork 的旧模板）。把旧内容整体替换：

```
git clone https://github.com/NathanWang3/NathanWang3.github.io.git
cd NathanWang3.github.io
git rm -r -q .                # 清掉旧模板
cp -r <本目录>/* <本目录>/.nojekyll .
git add -A
git commit -m "Rebuild personal site as static bilingual page"
git push
```

推送后 GitHub Pages 通常 1–2 分钟生效：https://nathanwang3.github.io/

如果仓库 Settings → Pages 里的 Source 还是 "Deploy from a branch / main / (root)" 就不用动。

## 打印成 PDF

浏览器 Ctrl+P → 另存为 PDF，已做打印样式（隐藏导航、按钮，状态标签转为描边）。
