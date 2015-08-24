import _ from 'lodash';

let data = {
  firstname: '',
  lastname: '',
  message: ''
};

export function save(newData) {
  console.log('saving:', newData);
  data = _.assign({}, data, newData);
  return Promise.resolve();
}

export function fetch() {
  return Promise.resolve(data);
}
