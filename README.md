# Daily FCE Reading Practice

这是一个纯静态的每日英语阅读练习网页小程序，用于长期积累 FCE / B2 难度阅读题库。孩子每天打开同一个链接，就可以阅读当天文章、完成 5 道选择题，并在提交后查看词汇中文释义、全文中文翻译和详细题目解析。

项目不需要后端、数据库、登录、CDN 或付费服务，可以部署到 GitHub Pages 或 Netlify，也可以本地直接打开。

## 文件结构

```text
daily-fce-reading/
├── index.html
├── style.css
├── script.js
├── readings.js
└── README.md
```

## 如何本地测试

方法一：直接双击 `index.html` 打开。

方法二：用 VS Code 的 Live Server 打开 `index.html`。

所有代码都是 HTML、CSS 和 JavaScript，部署后不需要安装依赖。

## 如何添加新阅读

以后添加新阅读时，只需要打开 `readings.js`，在 `const readings = [...]` 数组末尾追加一个新的阅读对象。

请务必注意：

```text
不要删除旧对象。
不要用新文章覆盖整个 readings 数组。
每天新增阅读时，只是在数组末尾追加一个新的对象。
```

每篇阅读对象需要包含：

```javascript
{
  date: "2026-07-10",
  title: "New Reading Title",
  level: "FCE / B2",
  vocabulary: [
    {
      word: "example word",
      partOfSpeech: "n.",
      meaning: "中文意思",
      example: "This is an example sentence."
    }
  ],
  passage: `
English passage here.
`,
  translation: `
中文翻译放这里。
`,
  questions: [
    {
      question: "Question text?",
      options: {
        A: "Option A",
        B: "Option B",
        C: "Option C",
        D: "Option D"
      },
      answer: "B",
      explanation: {
        correct: "B是正确答案，因为……",
        A: "A不对，因为……",
        B: "B对，因为……",
        C: "C不对，因为……",
        D: "D不对，因为……"
      }
    }
  ]
}
```

建议每篇文章保持 5 道题，每道题都有 A-D 四个选项，并保证 `answer` 与选项字母一致。

## 如何免费部署到 GitHub Pages

1. 登录 GitHub。
2. 新建一个仓库，例如 `daily-fce-reading`。
3. 上传本项目中的 5 个文件：`index.html`、`style.css`、`script.js`、`readings.js`、`README.md`。
4. 打开仓库页面的 `Settings`。
5. 在左侧找到 `Pages`。
6. 在 `Build and deployment` 里选择从分支部署。
7. 分支选择 `main`，文件夹选择 `/root`。
8. 保存后等待 GitHub 生成网址。
9. 以后只要更新 `readings.js` 并提交，网页内容就会更新。

## 如何免费部署到 Netlify

1. 打开 Netlify 官网并登录。
2. 选择添加新站点。
3. 如果用拖拽部署，把整个 `daily-fce-reading` 文件夹拖到 Netlify 的部署区域。
4. 部署完成后，Netlify 会生成一个免费网址。
5. 以后新增阅读后，可以再次拖拽更新后的文件夹进行部署。

## 如何在 iPad 添加到主屏幕

用 Safari 打开网页 → 点击分享按钮 → 添加到主屏幕。

添加后，孩子可以像打开普通 App 一样从主屏幕进入阅读练习。

## 如何给孩子使用

孩子每天打开同一个链接即可。

当天有阅读时，网页会自动显示当天阅读。

当天没有阅读时，网页会显示最近一篇可用阅读，并提示：

```text
Today’s reading is not available yet. Showing the latest available reading.
```

孩子先独立阅读英文文章和英文重点词，再完成 5 道选择题。提交答案后，才会显示：

- 总分；
- 每题是否正确；
- Review Vocabulary；
- Show Chinese Translation；
- 每题的 View Explanation。

孩子也可以通过 `Reading Archive` 复习以前的阅读。归档会显示每篇文章的完成状态和最近一次得分。

## 学习记录

网页使用浏览器的 `localStorage` 保存每篇文章的完成状态和最近一次得分。

每篇文章按日期单独保存，例如：

```text
reading-progress-2026-07-10
```

不同日期的阅读记录不会互相覆盖。点击 `Try Again` 只会清空当前文章的临时作答状态，不会删除其他日期的完成记录。
