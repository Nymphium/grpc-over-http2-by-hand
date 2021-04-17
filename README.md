gRPC over HTTP/2 by hand

本編: [なんだかんだガチプロトタイピングにはTypeScript楽だしgRPCを手作りする - lilyum ensemble](https://nymphium.github.io/2021/04/18/%E3%81%AA%E3%82%93%E3%81%A0%E3%81%8B%E3%82%93%E3%81%A0%E3%82%AC%E3%83%81%E3%83%97%E3%83%AD%E3%83%88%E3%82%BF%E3%82%A4%E3%83%94%E3%83%B3%E3%82%B0%E3%81%AB%E3%81%AFTypeScript%E6%A5%BD%E3%81%A0%E3%81%97gRPC%E3%82%92%E6%89%8B%E4%BD%9C%E3%82%8A%E3%81%99%E3%82%8B.html)

```shell-session
$ ./bin/protogen.sh echo.proto pb
$ yarn
$ npx ts-node index.ts
```
