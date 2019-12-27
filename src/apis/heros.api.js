import Rest from './index';
import  { api, token } from '../constants/env.constant';

class HeroRest extends Rest {
  byId(id) {
    return this.call(id);
  }
}

export default new HeroRest(`${api}${token}/`);
