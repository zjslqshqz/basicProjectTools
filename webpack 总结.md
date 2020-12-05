## webpack

[官方中文站点][webpack.docschina.org]

shell 执行 `npx webpack` 或者 脚本执行 `webpack`

## 基本流程
```mermaid
graph TD

    subgraph "module 模块处理流程"
      a1(开始)
      r[rules 规则]
      t[test 筛选文件名]
      u[use 使用 loader 处理 `非js` 文件对象]
      p[plugins 插件]
      a1 --> |根据|r--> |使用正则|t -->|调用| u-->e(结束)
      p -->|设置|r
    end
    
    subgraph "基本流程"
        A[entry js文件主入口] -->|根据| a(output 设置输出配置) -->|导入| B(module 模块处理原代码)
        B --> |处理| C[输出文件]
        B -->|处理流程|a1
    end
```

## 模块插件说明
1. `CleanWebpackPlugin` 用于清除老文件; 官方地址:[https://github.com/johnagan/clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)

1. `HtmlWebpackPlugin` 动态处理`html`文件；官方地址:[https://github.com/jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

    > **下面这条很坑啊！！！！**

2. `MiniCssExtractPlugin` 单独使用:只负责剥离css代码为独立文件；配合`HtmlWebpackPlugin`插件:能够把生成的`css`文件,静态插入`<head></head>`标签内。

## 开发工具

1. `Webpack-dev-server` 提供实时重新加载服务: 官方地址:[https://github.com/webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## 代码分离
使用`SplitChunksPlugin`模式，根据配置自动去重复模块，还能批量分组，设置分离出的单个文件大小.
```mermaid
graph TD
    A[js内 import 模块] --> |根据|B(optimization.splitChunks 过滤配置)
    B --> |生成并分离|C[公共模块js文件]
```
# 顺序图

```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```

[webpack.docschina.org]: https://webpack.docschina.org

[https://github.com/jantimon/html-webpack-plugin]: https://github.com/jantimon/html-webpack-plugin