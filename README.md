# SJTU Wiki
SJTU Wiki 是一个由学生主导建设的校园百科平台，旨在系统整合上海交通大学校内与学习、生活、事务办理等息息相关的信息资源——从选课规则详解、食堂窗口测评，到正版软件使用、奖学金申请流程、宿舍生活小贴士，都能在这里找到交大人自己的经验与答案。我们希望通过构建便捷、高效的信息导航系统，将它打造成一个不断生长、众人共创的校园知识库。

预览网站：https://sjtu-geek.github.io/SJTU-Wiki/

**如果你想参与 SJTU Wiki 的建设，请查看[这篇文章](docs/contributing.md)。**

## 授权协议

SJTU Wiki 内容的授权协议为 [CC BY-NC 4.0 协议](https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans)。这意味着您可以自由地复制、修改、分发SJTU Wiki的内容，只要您进行适当的署名（如“该内容来自 SJTU Wiki”，或给出 SJTU Wiki 的文章链接），且不将这些内容用于商业目的。

如需获得其他形式的授权或有授权协议疑问，请通过[此问卷](https://ssc.sjtu.edu.cn/f/4282a590)联系我们。

## 构建项目

### 环境要求

- Node.js ≥ 20（推荐 24）
- pnpm ≥ 10

```bash
# 安装 pnpm（已安装可跳过）
npm install -g pnpm
```

### 拉取代码

主题包 [`vitepress-theme-sjtu-wiki`](https://github.com/SJTU-Geek/vitepress-theme-sjtu-wiki) 以 git submodule 的形式挂在 `packages/` 下，clone 时记得带上 `--recurse-submodules`：

```bash
git clone --recurse-submodules https://github.com/SJTU-Geek/SJTU-Wiki.git
cd SJTU-Wiki
```

如果你已经 clone 但没有拉 submodule，补一下：

```bash
git submodule update --init --recursive
```

### 安装依赖

```bash
pnpm install
```

这会同时安装根项目和 `packages/vitepress-theme-sjtu-wiki` 的依赖。

### 本地开发

```bash
pnpm docs:dev
```

启动前会自动先编译主题包（`pnpm theme:build`），然后用 VitePress 启动 dev server，默认地址 `http://localhost:5173/SJTU-Wiki/`。
