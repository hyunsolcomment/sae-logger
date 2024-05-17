import { Logger, LoggerFile } from "./logger";

// 예시 요청 인자들
const requests = { user_id: 'ParkSaehyeon', nickname: '박세현', auto_login: { note_id: 'hello world', user_id: '안녕' } };

// 최초 한 번만 호출
LoggerFile.startWrite();

const logger = new Logger(`user.login`, requests);

logger.info(`유저가 회원가입했습니다.`)
logger.warn(`회원가입에 실패했습니다. 올바르지 않은 인자입니다.`)
logger.error(`오류로 인해 DB에 유저 데이터를 반영하지 못했습니다.`)