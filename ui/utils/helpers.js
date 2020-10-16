/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
export function clone(val) {
  return JSON.parse(JSON.stringify(val));
}

// export function openModal(self, component, props, events) {

// }

export function Notification(self, message, type, position) {
  self.$buefy.snackbar.open({
    duration: 3000,
    message,
    type,
    position,
  });
}

export function Toast(self, message, type, position) {
  self.$buefy.toast.open({
    duration: 3000,
    message,
    type,
    position,
  });
}

export function Dialog(self, message, type, position, onConfirm) {
  self.$buefy.dialog.alert({
    message,
    type,
    position,
    onConfirm,
  });
}

export function regexChecker(regex, value) {
  return regex.test(value.toString());
}

export function propertyChecker(obj = {}, ...properties) {
  let result = true;
  for (let i = 0; i < properties.length; i += 1) {
    if (!(properties[i] in obj)) {
      result = false;
      break;
    }
  }
  return result;
}

export function numberParser(number) {
  if (number === '' || number === null) {
    number = 0;
  }
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function dateFormater(date) {
  const year = date.getFullYear().toString(); let month = (date.getMonth() + 1).toString(); let
    day = date.getDate().toString();
  if (month.length === 1) {
    month = `0${month}`;
  }
  if (day.length === 1) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}T00:00:00.000Z`;
}

export function timeFormater(date) {
  let year = date.getFullYear().toString(); let month = (date.getMonth() + 1).toString(); let
    day = date.getDate().toString();
  let hrs = date.getHours().toString(); let
    min = date.getMinutes().toString();
  if (year.length === 1) {
    year = `000${year}`;
  }
  if (month.length === 1) {
    month = `0${month}`;
  }
  if (day.length === 1) {
    day = `0${day}`;
  }
  if (hrs.length === 1) {
    hrs = `0${hrs}`;
  }
  if (min.length === 1) {
    min = `0${min}`;
  }
  const time = new Date(`${year}-${month}-${day}T${hrs}:${min}:00.000`);
  return time;
}

export function timeParser(date) {
  const time = new Date(date).toTimeString().split(' ')[0];
  const hr = time.split(':')[0]; const
    min = time.split(':')[1];
  return `${hr}:${min}`;
}

export function dateParser(date) {
  date = new Date(date).toDateString().split(' ');
  const [dayOfWeek, month, day, year] = date;
  return `${day}, ${month} ${year}`;
}


export function copy(val) {
  if (typeof val === 'object') {
    return JSON.parse(JSON.stringify(val));
  }
  return null;
}
