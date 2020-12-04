## webpack

[官方中文站点][webpack.docschina.org]

shell 执行 `npx webpack` 或者 脚本执行 `webpack`

## 基本流程
```mermaid
graph TD
    A[主入口] -->|导入文件| B(模块处理原代码)
    B -->|生成输出| C[正式代码]
```

## 模块插件说明
1. `HtmlWebpackPlugin` 动态处理`html`文件；

    > **下面这条很坑啊！！！！**

2. `MiniCssExtractPlugin` 单独使用:只负责剥离css代码为独立文件；配合`HtmlWebpackPlugin`插件:能够把生成的`css`文件,静态插入`<head></head>`标签内。


# 顺序图

```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```

[webpack.docschina.org]: https://webpack.docschina.org