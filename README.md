# sae-logger
<img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" />
 타입 스크립트 로그 유틸

<br />

# Logger 클래스
로그 출력을 위한 유틸 클래스

<h3>생성자</h3>
<table>
 <tr>
  <td>prefix</td>
  <td>라우터, 메소드 이름 등</td>
 </tr>
 <tr>
  <td>params</td>
  <td>로그에 출력할 오브젝트 값</td>
 </tr>
</table>
<h3>메소드</h3>
<table>
 <tr>
  <td>Logger.info(message)</td>
  <td>
   <ul>
    <li><b>message:</b> 로그 메세지</li>
   </ul>
  </td>
  <td>
   INFO 레벨 수준의 로그를 출력합니다.
  </td>
 </tr>
 <tr>
  <td>Logger.warn(message)</td>
  <td>
   <ul>
    <li><b>message:</b> 로그 메세지</li>
  </td>
    <td>
     WARN 레벨 수준의 로그를 출력합니다.
    </td>
 </tr>
  <tr>
  <td>Logger.error(message)</td>
  <td>
   <ul>
    <li><b>message:</b> 로그 메세지</li>
   </ul>
  </td>
  <td>
   ERROR 레벨 수준의 로그를 출력합니다.
  </td>
 </tr>
</table>

<h3>예시</h3>

<h4>생성자 예시</h4>
<pre>
const logger = new Logger(`user.login`, { user_id: 'test1234' });
</pre>

<h4>INFO 로그 예시</h4>
<pre>
logger.log(`유저가 로그인했습니다.`);
</pre>
출력: [0000:00:00] [INFO] [user.login] 유저가 로그인했습니다. ({ user_id: test1234 }) 

<h4>WARN 로그 예시</h4>
<pre>
logger.warn(`인자가 충분하지 않습니다.`);
</pre>
출력: <span style="color: yellow;">[0000:00:00] [WARN] [user.login] 인자가 충분하지 않습니다. ({ user_id: test1234 })</span>

<h4>WARN 로그 예시</h4>
<pre>
logger.error(`DB에서 정보를 불러올 수 없습니다.`);
</pre>
출력: <span style="color: red;">[0000:00:00] [ERROR] [user.login] DB에서 정보를 불러올 수 없습니다. ({ user_id: test1234 }) </span>
<br />

# LoggerFile 클래스
로그를 파일로 저장하기 위한 유틸 클래스

<h3>메소드</h3>
<table>
 <tr>
  <td>LoggerFile.startWrite({folder, name})</td>
  <td>
   <ul>
    <li><b>folder:</b> 로그 파일이 저장될 폴더 경로 <br /> (기본값: logs)</li>
    <li><b>name:</b> 로그 파일의 이름<br />(기본값: (년도)-(월)-(일)-(숫자).log) (확장자가 설정되지 않으면 *.log)</li>
   </ul>
  </td>
  <td>
   Logger 클래스로 출력되는 로그에 대한 파일 기록을 시작합니다. <br />프로젝트 실행 시 최초 한 번만 호출합니다.
  </td>
 </tr>
 <tr>
  <td>LoggerFile.stopWrite()</td>
  <td></td>
  <td>로그에 대한 파일 기록을 중지합니다.</td>
 </tr>
 <tr>
  <td>LoggerFile.pauseWrite()</td>
  <td></td>
  <td>로그에 대한 파일 기록을 일시정지합니다.</td>
 </tr>
 <tr>
  <td>LoggerFile.resumeWrite()</td>
  <td></td>
  <td>로그에 대한 파일 기록을 재개합니다.</td>
 </tr>
</table>

