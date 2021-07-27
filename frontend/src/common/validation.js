import isEmail from 'validator/lib/isEmail';

// email()
// 이메일 형식을 확인하는 함수
export function email(value) {
  return value && !isEmail(value.trim()) ? '이메일 형식이 아니에요. 다시 확인해주세요!' : null;
}

// checkNameLength()
// 닉네임의 길이가 12자 이하인지 확인하는 함수
export function checkNameLength(value) {
  const nameLength = value.length;
  return nameLength > 12 ? '닉네임이 너무 길어요!' : null;
}

// checkPasswordLength()
// 비밀번호의 길이가 8 ~ 16자 이하인지 확인하는 함수
export function checkPasswordLength(value) {
  const passwordLength = value.length;
  return passwordLength < 8 || 16 < passwordLength ? '비밀번호는 최소 8자에서 최대 16자입니다!' : null;
}

// checkPasswordConfirm()
// 비밀번호와 비밀번호 확인이 일치하는지 확인하는 함수
export function checkPasswordConfirm(password, passwordConfirm){
  return password !== passwordConfirm ? '비밀번호가 동일하지 않습니다!' : null;
}

// isDirty()
// value 값이 비어있는가를 확인하는 함수
function isDirty(value) {
  return value || value === 0;
}

// required()
// values 안의 키 중 requiredField의 field에 해당하는 데이터가
// 비어있는지를 확인하고 비어있다면 리턴되는 객체에 에러 메시지를 포함함
export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: '입력을 안하신것 같아요!' }),
    }),
    {},
  );
}
