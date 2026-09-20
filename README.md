# Yuu

「Yuu」——一个虚构角色的小站，基于 [Axi-Theme](https://github.com/axi404/Axi-Theme)（Astro）+ 自定义「终霞 Yagate」皮肤（『终将成为你』粉蓝白渐变暧昧色调）构建，与主博客彼此独立。

- 在线地址：<https://guitaryuu.github.io/Yuu/>
- 主题文档：<https://theme.axi404.top/collection/docs>

> 本站内容均为虚构设定，与现实中的任何人物、团体无关。

## 维护

见 `GUIDE.md`（详细指南）与 `RESUME.md`（部署状态）。写作、皮肤切换、部署流程与主博客一致，差异仅在于：

- 部署在子路径 `/Yuu/`（`src/site.config.ts` → `domains.basePath`，内链已带前缀）
- 推送：`GH_TOKEN=<token> REPO=GuitarYuu/Yuu node ../push-blog-api.mjs "说明"`（在 `D:/github/Yuu` 目录下）
