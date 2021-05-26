# dmc-server

## Updates
서버 재부팅 시 자동으로 프로세스 실행

### Prerequisite
80포트로 들어오는 요청을 8080으로 redirect

```
$ sudo iptables -A PREROUTING -t nat -i [Interface] -p tcp --dport 80 -j REDIRECT --to-port 8080
```
[Interface]는 서버의 장비 인터페이스를 의미하며, ifconfig로 확인 후 적절하게 수정

재부팅 후에도 설정이 적용되도록 변경하였음

```shell
sudo su
```

### 서버 실행
```shell
$ pm2 start ./ecosystem.config.js
```

### 서버 상태 확인
```shell
$ pm2 status
```

### 서버 Reload
```shell
$ pm2 reload dmc-server
```

### 프로세스 삭제
```shell
$ pm2 delete [PROCESS_ID]
```

### 프로세스 전체 삭제
```shell
$ pm2 kill
```
