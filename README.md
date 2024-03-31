# YS-Music

想做这个项目的原因很简单，因为网易云音乐陪伴了我太多孤单的时光。

## GitFlow

由于 Git 上分支使用的便捷性，产生了很多的 `Git工作流`

指的就是，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支，你可以定期地把某些主题分支合并入其它分支中。

### 工作流一

![](https://pic.imgdb.cn/item/66094f199f345e8d03ec2621.png)

master(main) 作为主分支，在这个工作流里面，是不在这个默认分支里面进行开发的，而是在一个专门的 `develop` 分支里面进行开发。master 分支当然也是有其存在的价值的，当 develop 分支里面有一个稳定的版本的时候，是会将其合并到 master 分支的。这样我们在 git log 的时候，就只会看到 master 分支里的一些重要的版本在进行一些合并的记录，就不会像 devlop 分支里面有各种各样的开发记录。

`develop` 作为开发分支，在这个分支里面不断去开发一些小的功能，当有稳定版本时，再将稳定版本合并到 master 分支当中。

topic 作为某一主题或者功能或者特效的分支进行开发，如果这个功能开发地很好，那么可以考虑合并到 devlop 分支里面，如果这个模块开发地不好，那么会导致既没有开发出来，也把 devlop 分支的提交记录弄得很乱。因此往往在开发一个模块的功能的时候，会在 devlop 分支下新开一个 topic 分支来进行开发，开发得好，就合并进去。

### 工作流二

![](https://pic.imgdb.cn/item/66095b829f345e8d0358ba28.png)

项目刚刚起步，项目的一开始的起点在 Master Develop 都是可以的，当在develop 里有一个重要的版本的时候，就可以在 Master 打上tag 标记，然后再继续在 devlop 分支里面继续开发，此时，发现 v1.0 出现了 bug，这个时候就可以在 v1.0 新建分支 Hotfix，然后修复对应 bug，修复完成后，再合并到 master 中，同时再将其合并到 devlop 分支里面，然后继续进行开发。如何在开发过程中，有一些新的功能模块，就可以开一个 Feature 进行开发，如果开发完了，可以将其集成到 develop 分支。这里有一个 Release 分支，他的意思是项目发布部署的 Release 版本，也就是说当 Develop 分支开发完了之后，并不会直接进行发布，而是在这个时候开一个 Release 分支，在这个 Release 分支里面进行测试，如果出现了 Bug ，那么可以在这个分支里面直接修改，修改完了之后，这就是我们最终要发布的版本了，然后将其合并到 master 分支，同时也合并到 Develop 分支里。

## 开发计划

> 从未登录状态进行开发

### 云音乐精选

![](https://pic.imgdb.cn/item/66095f2e68eb9357134a6daa.png)

## 接口

### 云音乐精选

1. [轮播图接口](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=banner)

说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据

可选参数 :

type:资源类型,对应以下类型,默认为 0 即 PC

0: pc

1: android

2: iphone

3: ipad

接口地址 : /banner

调用例子 : /banner, /banner?type=2
