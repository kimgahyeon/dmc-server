# dmc-server

# Updates
## 20. 08. 25 무중단 배포 추가

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
