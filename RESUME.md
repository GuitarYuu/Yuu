# RESUME — Yuu 站（GuitarYuu/Yuu）

> 2026-09-20 建成。**终霞 Yagate 皮肤 · 部署于子路径 /Yuu/**

- 地址：https://guitaryuu.github.io/Yuu/ ；仓库 GuitarYuu/Yuu（独立仓库，非 fork，基于主博客副本改制）
- 本地：`D:\github\Yuu\`；推送：`GH_TOKEN=<token> REPO=GuitarYuu/Yuu node ../push-blog-api.mjs`
- 与主博客（guitaryuu.github.io）完全独立：不同仓库、不同内容、人设虚拟（Yuu/远见东学园，无真实信息）
- 关键差异：astro.config.mjs 的 base/site 由 `domains.basePath='/Yuu'` 驱动；BaseHead/Footer/按钮/术语链接均已带 /Yuu 前缀；菜单链接走 astro:i18n 的 getRelativeLocaleUrl（构建时自动含 base）
- 皮肤：yagate.css 唯一激活（qingjin/liz 文件保留未启用）
- GitHub 绿墙与 GitHub 标签已随 githubUsername 移除而消失（人设不露真实账号）
- Pages：build_type=workflow，与主博客各自独立部署
