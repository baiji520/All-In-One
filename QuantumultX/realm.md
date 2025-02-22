# Realm  

一个用Rust编写的高性能中继服务器，简单易用。  

<p><img src="https://raw.githubusercontent.com/zhboner/realm/master/assets/realm.png"/></p>  

[![realm](https://github.com/zhboner/realm/workflows/ci/badge.svg)](https://github.com/zhboner/realm/actions)  
[![realm](https://github.com/zhboner/realm/workflows/build/badge.svg)](https://github.com/zhboner/realm/actions/workflows/cross_compile.yml)  
[![downloads](https://img.shields.io/github/downloads/zhboner/realm/total?color=green)](https://github.com/zhboner/realm/releases)  
<!-- [中文说明](https://zhb.me/realm) -->  

## 库  

| 库名称          | 文档                                                                 |  
| -------------- | -------------------------------------------------------------------- |  
| realm-core     | [![crates.io](https://img.shields.io/crates/v/realm_core.svg)](https://crates.io/crates/realm_core) [![Released API docs](https://docs.rs/realm_core/badge.svg)](https://docs.rs/realm_core) |  
| realm-io       | [![crates.io](https://img.shields.io/crates/v/realm_io.svg)](https://crates.io/crates/realm_io) [![Released API docs](https://docs.rs/realm_io/badge.svg)](https://docs.rs/realm_io) |  
| realm-lb       | [![crates.io](https://img.shields.io/crates/v/realm_lb.svg)](https://crates.io/crates/realm_lb) [![Released API docs](https://docs.rs/realm_lb/badge.svg)](https://docs.rs/realm_lb) |  
| realm-hook     | [![crates.io](https://img.shields.io/crates/v/realm_hook.svg)](https://crates.io/crates/realm_hook) [![Released API docs](https://docs.rs/realm_hook/badge.svg)](https://docs.rs/realm_hook)|  
| realm-syscall  | [![crates.io](https://img.shields.io/crates/v/realm_syscall.svg)](https://crates.io/crates/realm_syscall) [![Released API docs](https://docs.rs/realm_syscall/badge.svg)](https://docs.rs/realm_syscall) |  

## 特性  

- **零配置**：一条命令即可完成安装和运行。  
- **高并发**：双向并发流量传输，性能卓越。  
- **低资源消耗**：优化资源使用，运行轻量。  

## 容器支持  

Realm 可通过 OCI 容器（如 Docker、Podman、Kubernetes 等）运行，详见[容器指南](readme.container.md)。  

## 构建  

通过 [rustup](https://rustup.rs/) 安装 Rust 工具链：  

```shell  
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh  
```  

克隆仓库：  

```shell  
git clone https://github.com/zhboner/realm && cd realm  
```  

构建：  

```shell  
cargo build --release  
```  

可添加 `target_cpu=native` 以启用更多优化：  

```shell  
RUSTFLAGS='-C target_cpu=native' cargo build --release  
```  

构建后的 `realm` 二进制文件位于 `target/release` 目录。  

### 构建选项  

- ~~udp: 启用 UDP 中继~~（已内置）。  
- ~~tfo: 启用 TCP 快速打开~~（已弃用）。  
- ~~trust-dns: 启用异步 DNS 解析~~（已内置）。  
- ~~zero-copy: 在 Linux 上启用零拷贝~~（已内置）。  
- **brutal-shutdown**: 参见 [realm_io/brutal-shutdown](realm_io/README.md#about-brutal-shutdown)。  
- **hook**: 参见 [realm_hook](realm_hook/README.md)。  
- **proxy**: 启用代理协议（Proxy-Protocol）。  
- **balance**: 启用负载均衡。  
- **transport**: 支持 WebSocket/TLS/WSS 传输。  
- **batched-udp**: 在 Linux 上启用更高效的 UDP 处理。  
- **multi-thread**: 启用 Tokio 多线程 IO 调度器。  
- **mi-malloc**: 使用 mi-malloc 内存分配器。  
- **jemalloc**: 使用 jemalloc 内存分配器。  
- **page-alloc**: 使用系统默认内存分配器。  

默认启用：`proxy` + `balance` + `transport` + `batched-udp` + `brutal-shutdown` + `multi-thread`。  

完整选项详见：[Cargo.toml](Cargo.toml)。  

示例：  

```shell  
# 仅启用基础 TCP  
cargo build --release --no-default-features  

# 启用其他功能  
cargo build --release --features 'jemalloc'  

# 完全自定义  
cargo build --release \  
    --no-default-features \  
    --features 'transport, multi-thread, jemalloc'  
```  

### 交叉编译  

参考 [Rust 交叉编译指南](https://rust-lang.github.io/rustup/cross-compilation.html)，可能需要安装交叉编译工具链或 SDK。  

或使用 [Cross](https://github.com/cross-rs/cross) 简化流程。  

## 使用  

```shell  
高效中继工具  

用法: realm [FLAGS] [OPTIONS]  

命令:  
  convert  将旧版配置文件转换为新版  

选项:  
  -h, --help     显示帮助  
  -v, --version  显示版本  
  -d, --daemon   以守护进程模式运行  
  -u, --udp      强制启用 UDP 转发  
  -t, --ntcp     强制禁用 TCP 转发  
  -6, --ipv6     禁用 IPv4 映射到 IPv6  
  -f, --tfo      强制启用 TCP 快速打开（已弃用）  
  -z, --splice   强制启用 TCP 零拷贝（已弃用）  

主要配置:  
  -c, --config <路径>              使用配置文件  
  -l, --listen <地址>              监听地址  
  -r, --remote <地址>              远程地址  
  -x, --through <地址>             指定出口 IP 或地址  
  -i, --interface <设备>           绑定出口网络接口  
  -e, --listen-interface <设备>    绑定监听接口  
  -a, --listen-transport <选项>    监听传输层配置  
  -b, --remote-transport <选项>    远程传输层配置  

系统选项:  
  -n, --nofile <限制>        设置文件描述符上限  
  -p, --pipe-page <数量>     设置管道容量  
  -j, --pre-conn-hook <路径> 设置预连接钩子脚本  

日志选项:  
      --log-level <级别>    覆盖日志级别  
      --log-output <路径>   覆盖日志输出路径  

DNS 选项:  
      --dns-mode <模式>           DNS 解析策略  
      --dns-min-ttl <秒>         DNS 最小缓存时间  
      --dns-max-ttl <秒>         DNS 最大缓存时间  
      --dns-cache-size <数量>     DNS 缓存条目数  
      --dns-protocol <协议>       DNS 传输协议  
      --dns-servers <服务器列表>  自定义 DNS 服务器  

代理协议选项:  
      --send-proxy <布尔>          发送 Proxy-Protocol 头  
      --send-proxy-version <版本>  指定 Proxy-Protocol 版本  
      --accept-proxy <布尔>        接受 Proxy-Protocol 头  
      --accept-proxy-timeout <秒>  等待 Proxy-Protocol 头的超时时间  

超时选项:  
      --tcp-timeout <秒>          TCP 连接超时（默认 5 秒）  
      --udp-timeout <秒>          UDP 会话超时（默认 30 秒）  
      --tcp-keepalive <秒>        TCP 保活间隔（默认 15 秒）  
      --tcp-keepalive-probe <次数> TCP 保活探测次数（默认 3 次）  
```  

通过命令行启动：  

```shell  
realm -l 0.0.0.0:5000 -r 1.1.1.1:443  
```  

通过配置文件启动：  

```shell  
# 使用 TOML  
realm -c config.toml  

# 使用 JSON  
realm -c config.json  

# 使用文件夹（v2.6.2 起支持）  
# 递归加载所有 TOML/JSON 文件（如 config/log.toml, config/node/n1.toml）  
# 忽略隐藏文件和目录（如 config/.hidden_file, config/.hidden_dir/）  
realm -c config/  
```  

通过环境变量启动：  

```shell  
REALM_CONF='{"endpoints":[{"local":"127.0.0.1:5000","remote":"1.1.1.1:443"}]}' realm  

# 或  
export REALM_CONF=`cat config.json | jq -c `  
realm  
```  

转换旧版配置文件：  

```shell  
realm convert old.json  
```  

## 配置  

TOML 示例：  

```toml  
[log]  
level = "warn"  
output = "realm.log"  

[network]  
no_tcp = false  
use_udp = true  

[[endpoints]]  
listen = "0.0.0.0:5000"  
remote = "1.1.1.1:443"  

[[endpoints]]  
listen = "0.0.0.0:10000"  
remote = "www.google.com:443"  
```  

<details>  
<summary>JSON 示例</summary>  
<p>  

```json  
{  
  "log": {  
    "level": "warn",  
    "output": "realm.log"  
  },  
  "network": {  
    "no_tcp": false,  
    "use_udp": true  
  },  
  "endpoints": [  
    {  
      "listen": "0.0.0.0:5000",  
      "remote": "1.1.1.1:443"  
    },  
    {  
      "listen": "0.0.0.0:10000",  
      "remote": "www.google.com:443"  
    }  
  ]  
}  
```  

</p>  
</details>  

[更多示例](./examples)。  

## 配置结构  

```shell  
├── log  
│   ├── level  
│   └── output  
├── dns  
│   ├── mode  
│   ├── protocol  
│   ├── nameservers  
│   ├── min_ttl  
│   ├── max_ttl  
│   └── cache_size  
├── network  
│   ├── no_tcp  
│   ├── use_udp  
│   ├── ipv6_only  
│   ├── tcp_timeout  
│   ├── udp_timeout  
│   ├── tcp_keepalive  
│   ├── tcp_keepalive_probe  
│   ├── send_proxy  
│   ├── send_proxy_version  
│   ├── accept_proxy  
│   └── accept_proxy_timeout  
└── endpoints  
    ├── listen  
    ├── remote  
    ├── extra_remotes  
    ├── balance  
    ├── through  
    ├── interface  
    ├── listen_interface  
    ├── listen_transport  
    ├── remote_transport  
    └── network->  
```  

至少需配置 `endpoint.listen` 和 `endpoint.remote`，其余字段使用默认值。  

配置优先级：命令行 > 端点配置 > 全局配置。  

### 端点配置  

#### endpoint.listen: string  
本地监听地址，支持格式：  
- IPv4:端口  
- IPv6:端口  

#### endpoint.remote: string  
远程地址，支持格式：  
- IPv4:端口  
- IPv6:端口  
- 域名:端口  

#### endpoint.extra_remotes: string 数组  
备用远程地址，格式同 `remote`。  

#### endpoint.balance: string  
需启用 `balance` 功能。  
负载均衡策略及权重，格式：  
```  
策略: 权重1, 权重2, ...  
```  
可用算法（由 [realm_lb](./realm_lb/) 提供）：  
- `iphash`  
- `roundrobin`  

示例：  
```toml  
[[endpoints]]  
remote = "a:443"  
extra_remotes = ["b:443", "c:443"]  
balance = "roundrobin: 4, 2, 1"  
```  
权重为 [a:4, b:2, c:1]。  

#### endpoint.through: string  
指定出口 IP 或地址（TCP/UDP）。  
格式：  
- IPv4/IPv6（TCP/UDP）  
- IPv4:端口/IPv6:端口（仅 UDP）  

#### endpoint.interface: string  
绑定出口网络接口。  

#### endpoint.listen_interface: string  
绑定监听接口。  

#### endpoint.listen_transport: string  
需启用 `transport` 功能。  
传输层配置，详见 [Kaminari 选项](https://github.com/zephyrchien/kaminari#options)。  

#### endpoint.remote_transport: string  
需启用 `transport` 功能。  
传输层配置，同上。  

#### endpoint.network  
覆盖全局网络配置，字段同 [network](#network)。  

### 日志配置  

#### log.level: string  
可选值：  
- off  
- error  
- warn  
- info  
- debug  
- trace  
默认：off  

#### log.output: string  
可选值：  
- stdout  
- stderr  
- 文件路径（如 `/var/log/realm.log`）  
默认：stdout  

### DNS 配置  

需启用 `trust-dns` 功能。  

#### dns.mode: string  
DNS 解析策略：  
- ipv4_only  
- ipv6_only  
- ipv4_then_ipv6  
- ipv6_then_ipv4  
- ipv4_and_ipv6  
默认：ipv4_and_ipv6  

#### dns.protocol: string  
DNS 传输协议：  
- tcp  
- udp  
- tcp_and_udp  
默认：tcp_and_udp  

#### dns.nameservers: string 数组  
自定义 DNS 服务器，格式：`["server1", "server2"]`。  
默认：  
- Unix/Windows：读取系统 DNS 配置（如 `/etc/resolv.conf`）。  
- 其他：使用 Google 公共 DNS（`8.8.8.8:53`, `2001:4860:4860::8888:53` 等）。  

#### dns.min_ttl: 正整数  
DNS 缓存最小存活时间（秒）。  
默认：0  

#### dns.max_ttl: 正整数  
DNS 缓存最大存活时间（秒）。  
默认：86400（1 天）  

#### dns.cache_size: 正整数  
DNS 缓存条目上限。  
默认：32  

### 网络配置  

#### network.no_tcp: bool  
禁用 TCP 中继。  
默认：false  

#### network.use_udp: bool  
启用 UDP 中继。  
本地会动态分配端口并与远程建立 UDP 会话，超时后自动释放（类似全锥型 NAT）。  
默认：false  

#### network.ipv6_only: bool  
绑定 IPv6 地址时禁用 IPv4 映射。  
示例：  
- `[::0]:port` + `ipv6_only=false` → 监听所有地址  
- `[::0]:port` + `ipv6_only=true` → 仅监听 IPv6  
默认：false  

#### network.tcp_timeout: 正整数  
TCP 连接超时时间（秒），0 表示无超时。  
默认：5  

#### network.udp_timeout: 正整数  
UDP 会话超时时间（秒），避免内存泄漏。  
默认：30  

#### network.tcp_keepalive: 正整数  
TCP 保活间隔（秒），0 使用系统默认。  
默认：15  

#### network.tcp_keepalive_probe: 正整数  
TCP 保活探测次数。  
默认：3  

#### network.send_proxy: bool  
发送 HAProxy PROXY 协议头（需远程支持）。  
默认：false  

#### network.send_proxy_version: 正整数  
PROXY 协议版本（1 或 2）。  
默认：2  

#### network.accept_proxy: bool  
接受 PROXY 协议头。  
默认：false  

#### network.accept_timeout: 正整数  
等待 PROXY 协议头的超时时间（秒）。  
默认：5  