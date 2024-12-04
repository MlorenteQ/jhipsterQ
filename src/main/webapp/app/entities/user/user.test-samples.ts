import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 27737,
  login: '{9laj5@3og\\zA6\\|REv\\{ifsb',
};

export const sampleWithPartialData: IUser = {
  id: 30966,
  login: 'FIEtt@Z4Ip\\bhmt\\2qm6kw\\l8Ep2J\\!8a',
};

export const sampleWithFullData: IUser = {
  id: 3274,
  login: 'hM.Rq',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
