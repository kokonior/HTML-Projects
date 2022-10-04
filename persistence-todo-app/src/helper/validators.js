export const Validators = [];

export const isEmpty = (str) => {
  if (str == "" || str == "undefined") {
    //string is empty validation should fail
    return false;
  }
  return true;
};

export const isContainTags = (str) => {
  if (str.includes("<")) {
    return false;
  }
  return true;
};

export const maxCharInput = (str) => {
  if (str.length > 20) {
    return false;
  }
  return true;
};

Validators.push(isEmpty);
Validators.push(isContainTags);
Validators.push(maxCharInput);
