import isEmail from 'validator/lib/isEmail';

export function email(value) {
  return value && !isEmail(value.trim()) ? '이메일 형식이 아니에요. 다시 확인해주세요!' : null;
}

export function checkNameLength(value) {
  const nameLength = value.length;
  return nameLength > 12 ? '닉네임이 너무 길어요!' : null;
}

export function checkPasswordLength(value) {
  const passwordLength = value.length;
  return passwordLength < 8 || 16 < passwordLength ? '비밀번호는 최소 8자에서 최대 16자입니다!' : null;
}

export function checkPasswordConfirm(password, passwordConfirm){
  return password !== passwordConfirm ? '비밀번호가 동일하지 않습니다!' : null;
}

function isDirty(value) {
  return value || value === 0;
}

export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: '입력을 안하신것 같아요!' }),
    }),
    {},
  );
}
