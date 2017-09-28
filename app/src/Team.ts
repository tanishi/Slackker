export default class Team {
  token: string;
  url: string;
  self;
  index;
  constructor(token) {
    this.token = token;
  }

  indexTeamData(data) {
    this.url = data.url;
    this.self = data.self;
    this.index = {};
    const keys = ['users', 'channels', 'groups', 'ims', 'bots'];
    keys.forEach(key => data[key].forEach(obj => this.index[obj.id] = obj));
    this.index[data.team.id] = data.team;
  }

  resolveName(id) {
    return this.index[id].name;
  }
}
