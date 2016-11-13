import auth from './auth';

export default function*() {
  yield [
    auth(),
  ];
}
